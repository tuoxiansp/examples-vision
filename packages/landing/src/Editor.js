import React, { useState } from 'react'
import { Editor as VEditor, Data, unstable_Registry as Registry } from '@visionjs/core'
import { Inspector, useBooleanKnob, useLog } from 'retoggle'
import Text from './renderers/Text'
import initCompositor from './compositors/Compositor'

const r = new Registry()
r.register('text', Text)
r.register('label', () => <div>123456789</div>)

const Compositor = initCompositor([ [ 'Text', 'text' ], [ 'Label', 'label' ] ])

const Editor = (props) => {
    const [ readonly ] = useBooleanKnob('Readonly', false)
    const [ data, setData ] = useState(new Data())

    useLog('Data', data.value)

    return (
        <VEditor
            readonly={readonly}
            data={data}
            onChange={setData}
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
