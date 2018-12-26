import React, { useEffect, useState } from 'react'
import { setKnob, removeKnob } from 'retoggle'

const knobs = [ 'boolean', 'color', 'number', 'object', 'range', 'ranges', 'select', 'text' ]

const Comp = ({ context, renderer }) => {
    const { props, focused, requestUpdateProps, readonly, index } = context
    const knobsFnMap = {}

    const [ names, setNames ] = useState(new Set())

    useEffect(() => {
        return () => {
            names.forEach((name) => {
                removeKnob(name)
            })
        }
    }, [])

    knobs.forEach((type) => {
        const fnName = 'use' + type[0].toUpperCase() + type.slice(1)

        knobsFnMap[fnName] = (name, initial, options) => {
            const value = props[name] || initial
            const key = name + index + renderer.toString() + context.toString()

            if (!focused) {
                removeKnob(key)
            } else {
                setKnob({
                    key,
                    name,
                    type,
                    value,
                    ...options,
                    onChange(value) {
                        requestUpdateProps({ [name]: value })
                    },
                })

                if (!names.has(key)) {
                    setNames(names.add(key))
                }
            }

            return value
        }
    })

    Object.assign(context, {
        ...knobsFnMap,
    })

    return renderer(context)
}

const wrapper = (renderer) => (context) => {
    return <Comp key={renderer} renderer={renderer} context={context} />
}

export default wrapper
