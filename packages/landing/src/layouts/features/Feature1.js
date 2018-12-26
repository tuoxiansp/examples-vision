import React, { Fragment } from 'react'
import { View } from '@visionjs/core'

import RichText from '../../renderers/RichText/index'
import Text from '../../renderers/Text'

import wrapper from '../../lib/knobs/wrapper'
import Button from '../components/Button'

const Feature1 = ({ useText, useBoolean }) => {
    const image = useText('image url', 'images/demo/480x360.png')
    const inverse = useBoolean('wrap', false)

    return (
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">
                        <View id="heading" render={Text} />
                    </h6>
                    <p>
                        <View id="desc" render={Text} />
                    </p>
                </div>
                <article className="group">
                    {inverse ? (
                        <Fragment>
                            <div className="one_half first">
                                <a className="imgover" href="#">
                                    <img src={image} alt="" />
                                </a>
                            </div>
                            <div className="one_half">
                                <View id="article" render={RichText} />
                                <footer>
                                    <View id="button" render={Button} />
                                </footer>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className="one_half first">
                                <View id="article" render={RichText} />
                                <footer>
                                    <View id="button" render={Button} />
                                </footer>
                            </div>
                            <div className="one_half">
                                <a className="imgover" href="#">
                                    <img src={image} alt="" />
                                </a>
                            </div>
                        </Fragment>
                    )}
                </article>

                <div className="clear" />
            </main>
        </div>
    )
}

export default wrapper(Feature1)
