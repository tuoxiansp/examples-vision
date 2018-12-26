import React from 'react'

const wrapper = (Component) => ({ readonly, requestUpdateProps, props }) => (
    <Component {...{ readonly, requestUpdateProps, ...props }} />
)

export default wrapper
