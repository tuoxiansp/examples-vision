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

        <div
            className="wrapper row2 bgded overlay"
            style={{
                backgroundImage: `url('images/demo/backgrounds/04.png')`,
            }}
        >
            <section className="hoc cta clear">
                <div className="sectiontitle">
                    <h6 className="heading">Nunc malesuada lorem</h6>
                    <p>Dictum risus tellus cursus ipsum vel facilisis lorem est fermentum</p>
                </div>
                <form method="post" action="#">
                    <fieldset>
                        <legend>Newsletter:</legend>
                        <input
                            className="btmspace-15"
                            type="text"
                            value=""
                            placeholder="Enter Your Email Here&hellip;"
                        />
                        <button type="submit" value="submit">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>

        <div className="wrapper row4">
            <footer id="footer" className="hoc clear">
                <article className="one_quarter first">
                    <h6 className="heading">Dui elit donec rutrum</h6>
                    <p>
                        Maximus proin blandit id est ac viverra maecenas sed neque tellus nunc at nulla et sem
                        consectetur iaculis sed sollicitudin praesent.
                    </p>
                    <p>Dictum efficitur massa at suscipit nullam nec eros suscipit malesuada libero et&hellip;</p>
                    <p className="nospace">
                        <a href="#">Read More</a>
                    </p>
                </article>
                <div className="one_quarter">
                    <h6 className="heading">Facilisis lectus</h6>
                    <ul className="nospace btmspace-30 linklist contact">
                        <li>
                            <i className="fa fa-map-marker" />
                            <address>Street Name &amp; Number, Town, Postcode/Zip</address>
                        </li>
                        <li>
                            <i className="fa fa-phone" /> +00 (123) 456 7890
                        </li>
                        <li>
                            <i className="fa fa-envelope-o" /> info@domain.com
                        </li>
                    </ul>
                    <ul className="faico clear">
                        <li>
                            <a className="faicon-facebook" href="#">
                                <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a className="faicon-twitter" href="#">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a className="faicon-dribble" href="#">
                                <i className="fa fa-dribbble" />
                            </a>
                        </li>
                        <li>
                            <a className="faicon-linkedin" href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="one_quarter">
                    <h6 className="heading">Posuere cubilia curae</h6>
                    <ul className="nospace linklist">
                        <li>
                            <a href="#">In lacinia tincidunt</a>
                        </li>
                        <li>
                            <a href="#">Ultrices quisque gravida</a>
                        </li>
                        <li>
                            <a href="#">Risus vitae dapibus</a>
                        </li>
                        <li>
                            <a href="#">Iaculis urna mi</a>
                        </li>
                        <li>
                            <a href="#">Ullamcorper libero</a>
                        </li>
                    </ul>
                </div>
                <div className="one_quarter">
                    <h6 className="heading">Sed consequat augue</h6>
                    <ul className="nospace linklist">
                        <li>
                            <a href="#">In tristique est quam</a>
                        </li>
                        <li>
                            <a href="#">Ac augue vestibulum</a>
                        </li>
                        <li>
                            <a href="#">Ante ipsum primis</a>
                        </li>
                        <li>
                            <a href="#">In faucibus orci</a>
                        </li>
                        <li>
                            <a href="#">Luctus et ultrices</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

        <div className="wrapper row5">
            <div id="copyright" className="hoc clear">
                <p className="fl_left">
                    Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a>
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
