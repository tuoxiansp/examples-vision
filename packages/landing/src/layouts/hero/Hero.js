import React, { useEffect } from 'react'
import { View } from '@visionjs/core'
import defaultProps from '../../utils/defaultProps'
import wrapper from '../../lib/knobs/wrapper'

import Text from '../../renderers/Text'
import NavItem from './NavItem'
import Button from '../components/Button'

const Hero = ({ useText }) => {
    const title = useText('title', 'Posuere morbi scelerisque')
    const bgImage = useText('background image', 'images/demo/backgrounds/01.png')

    return (
        <div
            className="bgded overlay light"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="fl_left">
                        <h1>
                            <a>
                                <View id="title" render={defaultProps({ content: 'Miresa' })(Text)} />
                            </a>
                        </h1>
                    </div>
                    <nav id="mainav" className="fl_right">
                        <ul className="clear">
                            <View id="navs" render={NavItem} />
                        </ul>
                    </nav>
                </header>
            </div>

            <div id="pageintro" className="hoc clear">
                <article>
                    <p>
                        <View id="desc" render={defaultProps({ content: 'AENEAN SAGITTIS TINCIDUNT' })(Text)} />
                    </p>
                    <h3 className="heading">{title}</h3>
                    <footer>
                        <ul className="nospace inline pushright">
                            <View
                                id="buttons"
                                render={(context) => {
                                    return (
                                        <li>
                                            <View Compositor={null} id="button" render={() => Button(context)} />
                                        </li>
                                    )
                                }}
                            />
                        </ul>
                    </footer>
                </article>
            </div>
        </div>
    )
}

export default wrapper(Hero)
