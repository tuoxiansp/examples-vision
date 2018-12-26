import React from 'react'
import { View } from '@visionjs/core'
import wrapper from '../../lib/knobs/wrapper'

import Text from '../../renderers/Text'
import defaultProps from '../../utils/defaultProps'

const NavItem = ({ useBoolean }) => {
    const isDropdown = useBoolean('isDropdown', false)

    return (
        <li>
            <a className={isDropdown ? 'drop' : ''}>
                <View id="nav-text" render={defaultProps({ content: 'Home' })(Text)} />
            </a>
            {isDropdown && (
                <ul>
                    <View
                        id="level"
                        render={() => {
                            return (
                                <li>
                                    <a>
                                        <View id="level-text" render={defaultProps({ content: 'Gallery' })(Text)} />
                                    </a>
                                </li>
                            )
                        }}
                    />
                </ul>
            )}
        </li>
    )
}

export default wrapper(NavItem)
