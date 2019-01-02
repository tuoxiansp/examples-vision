import React, { useState, useEffect } from 'react'
import { Editor as VEditor, Data, unstable_Registry as Registry } from '@visionjs/core'
import { Inspector, useBooleanKnob, setKnob, removeKnob } from 'retoggle'
import Text from './renderers/Text'
import initCompositor from './compositors/Compositor'

let globalData = null

window.printData = () => {
    console.log(globalData)
}

const r = new Registry()
r.register('text', Text)
r.register('label', () => <div>123456789</div>)

function useRangeKnob(name, { initialValue = 0, min = 0, max = 100 }) {
    const [ value, setValue ] = useState(initialValue)

    useEffect(
        () => {
            setKnob({
                name,
                type: 'range',
                value,
                min,
                max,
                onChange: setValue,
            })
        },
        [ value, min, max ]
    )

    useEffect(() => {
        return () => removeKnob(name)
    }, [])

    return [ value, setValue ]
}

const Compositor = initCompositor([ [ 'Text', 'text' ], [ 'Label', 'label' ] ])

const Editor = (props) => {
    const [ readonly ] = useBooleanKnob('Readonly', false)
    const [ data, setData ] = useState(new Data())
    const [ range, setRange ] = useRangeKnob('Timemachine', {
        min: 0,
        max: data.undoable + data.redoable,
    })

    useEffect(
        () => {
            let nextData = data

            const undoSteps = data.undoable - range
            const redoSteps = range - data.undoable

            if (undoSteps > 0) {
                for (let i = 0; i < undoSteps; i++) {
                    nextData = nextData.undo()
                }
            } else if (redoSteps > 0) {
                for (let i = 0; i < redoSteps; i++) {
                    nextData = nextData.redo()
                }
            }

            setData(nextData)
        },
        [ range ]
    )

    // useLog('Data', data.value)
    globalData = data.value

    return (
        <VEditor
            readonly={readonly}
            data={data}
            onChange={(data) => {
                setRange(range + 1)
                setData(data)
            }}
            rendererMap={r.map}
            Compositor={Compositor}
            {...props}
        >
            <Inspector />
            {props.children}
        </VEditor>
    )
}

export default Editor
