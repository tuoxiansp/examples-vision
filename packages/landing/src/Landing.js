import React, { Fragment } from 'react'
import { View } from '@visionjs/core'
import Text from './renderers/Text'

import Hero from './layouts/hero/Hero'
import Features from './layouts/features/Features'
import 'rsuite/dist/styles/rsuite.min.css'

const Landing = () => (
    <Fragment>
        <View id="hero" render={Hero} />
        <View id="features" render={Features} />

        <div className="wrapper row5">
            <div id="copyright" className="hoc clear">
                <p className="fl_left">
                    Copyright &copy; 2018 - All Rights Reserved -{' '}
                    <a href="https://github.com/tuoxiansp/vision">Vision</a>
                </p>
                <p className="fl_right">
                    Template by{' '}
                    <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">
                        OS Templates
                    </a>
                </p>
            </div>
        </div>

        <a id="backtotop" href="#top">
            <i className="fa fa-chevron-up" />
        </a>
    </Fragment>
)

export default Landing
