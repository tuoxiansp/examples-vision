import React from 'react'
import { View } from '@visionjs/core'

import RichText from '../../renderers/RichText/index'
import Text from '../../renderers/Text'

import wrapper from '../../lib/knobs/wrapper'
import Button from '../components/Button'

const useStyleBySize = [ 'one_half', 'one_half', 'one_half', 'one_third', 'one_quarter' ]

const icons = [
    'link',
    'chain-broken',
    'expeditedssl',
    'hourglass-2',
    'snowflake-o',
    'twitter',
    'linkedin',
    'google-plus',
    'vk',
]

const Feature2 = ({ useText, useNumber }) => {
    const bgImage = useText('background image', 'images/demo/backgrounds/02.png')
    const rows = useNumber('rows', 1)

    return (
        <div
            className="wrapper row2 bgded overlay"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">
                        <View id="heading" render={Text} />
                    </h6>
                    <p>
                        <View id="desc" render={Text} />
                    </p>
                </div>
                {[ ...Array(rows).keys() ].map((v, i) => {
                    return (
                        <ul className="nospace group services">
                            <View
                                id={`intro${i + 1}`}
                                render={wrapper(({ index, size, useSelect }) => {
                                    const icon = useSelect('icon', 'snowflake-o', { options: icons })

                                    return (
                                        <li className={`${useStyleBySize[size]} ${index === 0 ? 'first' : ''}`}>
                                            <i className={`fa fa-4x btmspace-30 fa-${icon}`} />
                                            <h6 className="heading font-x1">
                                                <View id="heading" render={Text} />
                                            </h6>
                                            <ul className="nospace">
                                                <View
                                                    id="points"
                                                    render={wrapper(({ useSelect }) => {
                                                        const icon = useSelect('icon', 'link', { options: icons })

                                                        return (
                                                            <li>
                                                                <i className={`fa fa-${icon}`} />{' '}
                                                                <a>
                                                                    <View id="link" render={Text} />
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                />
                                            </ul>
                                        </li>
                                    )
                                })}
                            />
                        </ul>
                    )
                })}
                <footer className="center">
                    <ul className="nospace inline pushright">
                        <View
                            id="buttons"
                            render={(context) => {
                                return (
                                    <li>
                                        <View Compositor={null} id="buttons" render={() => Button(context)} />
                                    </li>
                                )
                            }}
                        />
                    </ul>
                </footer>
            </section>
        </div>
    )
}

export default wrapper(Feature2)
