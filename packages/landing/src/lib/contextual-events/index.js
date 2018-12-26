import React, { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
    const [ eventConsumers, set ] = useState({})

    const consume = (eventType) => (...args) => {
        if (eventConsumers.length) {
            eventConsumers.forEach((consumer) => {
                consumer(...args)
            })
        }
    }

    const listeners = Object.keys(eventConsumers)

    const props = Object.assign(
        {},
        ...listeners.map((eventType) => {
            return {
                [eventType]: consume(eventType),
            }
        })
    )

    return (
        <div {...props}>
            <Context.Provider
                value={{
                    addEventListener(eventType, listener) {
                        if (!eventConsumers[eventType]) {
                            eventConsumers[eventType] = new Set()
                        }
                        eventConsumers[eventType].add(listener)
                        set({ ...eventConsumers })
                    },
                    removeEventListener(eventType, listener) {
                        eventConsumers[eventType].remove(listener)
                        set({ ...eventConsumers })
                    },
                }}
            >
                {children}
            </Context.Provider>
        </div>
    )
}

export const useContextualEvent = (eventType, listener) => {
    const { addEventListener, removeEventListener } = useContext(Context)

    useEffect(() => {
        addEventListener(eventType, listener)

        return () => {
            removeEventListener(eventType, listener)
        }
    })
}
