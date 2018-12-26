import React from 'react'
import { View } from '@visionjs/core'
import defaultProps from '../../utils/defaultProps'
import Text from '../../renderers/Text'
import wrapper from '../../lib/knobs/wrapper'

const Button = ({ useBoolean }) => {
    const inverse = useBoolean('inverse', false)

    return (
        <a className={`btn ${inverse ? 'inverse' : ''}`}>
            <View id="btn-text" render={defaultProps({ content: 'Ornare sem ultrices' })(Text)} />
        </a>
    )
}

export default wrapper(Button)
