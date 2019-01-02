import React from 'react'
import { View } from '@visionjs/core'

import Text from '../../renderers/Text'

import Button from '../components/Button'

import wrapper from '../../lib/knobs/wrapper'

const useStyleBySize = [ 'one_half', 'one_half', 'one_half', 'one_third', 'one_quarter' ]

const icons = [ 'twitter', 'linkedin', 'google-plus', 'vk' ]

const Feature4 = ({ useText }) => {
    const image = useText('background image', 'images/demo/backgrounds/03.png')

    return (
        <div
            className="wrapper row2 bgded overlay"
            style={{
                backgroundImage: `url(${image})`,
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
                <div className="group team">
                    <View
                        id="features"
                        render={wrapper(({ index, size, useText }) => {
                            const image = useText('image', 'images/demo/320x320.png')

                            return (
                                <figure className={`${useStyleBySize[size]} ${index === 0 ? 'first' : ''}`}>
                                    <a className="imgover">
                                        <img src={image} alt="" />
                                    </a>
                                    <figcaption>
                                        <h6 className="heading">
                                            <View id="name" render={Text} />
                                        </h6>
                                        <em>
                                            <View id="title" render={Text} />
                                        </em>
                                        <footer>
                                            <ul className="faico clear">
                                                <View
                                                    id="socials"
                                                    render={wrapper(({ useSelect }) => {
                                                        const icon = useSelect('social', 'linkedin', { options: icons })

                                                        return (
                                                            <li>
                                                                <a className={`faicon-${icon}`}>
                                                                    <i className={`fa fa-${icon}`} />
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                />
                                            </ul>
                                        </footer>
                                    </figcaption>
                                </figure>
                            )
                        })}
                    />
                </div>
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

export default wrapper(Feature4)
