import React, { Fragment } from 'react'
import { View } from '@visionjs/core'
import Text from './renderers/Text'
import defaultProps from './utils/defaultProps'

const Landing = () => (
    <Fragment>
        <div
            className="bgded overlay light"
            style={{
                backgroundImage: `url('images/demo/backgrounds/01.png')`,
            }}
        >
            <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="fl_left">
                        <h1>
                            <a href="index.html">Miresa</a>
                        </h1>
                    </div>
                    <nav id="mainav" className="fl_right">
                        <ul className="clear">
                            <li className="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a className="drop" href="#">
                                    Pages
                                </a>
                                <ul>
                                    <li>
                                        <a href="pages/gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="pages/full-width.html">Full Width</a>
                                    </li>
                                    <li>
                                        <a href="pages/sidebar-left.html">Sidebar Left</a>
                                    </li>
                                    <li>
                                        <a href="pages/sidebar-right.html">Sidebar Right</a>
                                    </li>
                                    <li>
                                        <a href="pages/basic-grid.html">Basic Grid</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="drop" href="#">
                                    Dropdown
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Level 2</a>
                                    </li>
                                    <li>
                                        <a className="drop" href="#">
                                            Level 2 + Drop
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Level 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Level 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Level 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Level 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Link Text</a>
                            </li>
                            <li>
                                <a href="#">Link Text</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            <div id="pageintro" className="hoc clear">
                <article>
                    <p>
                        <View id="desc" render={defaultProps({ content: 'AENEAN SAGITTIS TINCIDUNT' })(Text)} />
                    </p>
                    <h3 className="heading">Posuere morbi scelerisque</h3>
                    <footer>
                        <ul className="nospace inline pushright">
                            <li>
                                <a className="btn" href="#">
                                    Ornare sem ultrices
                                </a>
                            </li>
                            <li>
                                <a className="btn inverse" href="#">
                                    Vestibulum porta
                                </a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
        </div>

        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Praesent ex malesuada</h6>
                    <p>Quis mollis sit amet semper eget nulla cras tellus purus tincidunt</p>
                </div>
                <article className="group">
                    <div className="one_half first">
                        <h6 className="heading">Eu tincidunt eget viverra at ante donec mattis justo</h6>
                        <p>
                            Hendrerit nisl et euismod quam semper eget vel viverra nibh phasellus accumsan mauris elit
                            eget fringilla dolor aliquet id etiam interdum non eros sagittis hendrerit cras ac lectus ut
                            arcu bibendum tincidunt eget id nisl ut.
                        </p>
                        <p className="btmspace-30">
                            Iaculis vehicula tristique ut gravida scelerisque mattis non erat a lectus tincidunt maximus
                            aliquam sed ex quis nec maximus urna integer nec est sapien quisque pulvinar bibendum
                            interdum donec a lacus diam cras sem ipsum finibus non volutpat nec&hellip;
                        </p>
                        <footer>
                            <a className="btn" href="#">
                                Read More &raquo;
                            </a>
                        </footer>
                    </div>
                    <div className="one_half">
                        <a className="imgover" href="#">
                            <img src="images/demo/480x360.png" alt="" />
                        </a>
                    </div>
                </article>

                <div className="clear" />
            </main>
        </div>

        <div
            className="wrapper row2 bgded overlay"
            style={{
                backgroundImage: `url('images/demo/backgrounds/02.png')`,
            }}
        >
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Rhoncus turpis fusce</h6>
                    <p>Est venenatis nec rutrum a in velit curabitur vestibulum tellus</p>
                </div>
                <ul className="nospace group services">
                    <li className="one_quarter first">
                        <i className="fa fa-4x fa-chain-broken btmspace-30" />
                        <h6 className="heading font-x1">Justo purus nunc</h6>
                        <ul className="nospace">
                            <li>
                                <i className="fa fa-link" /> <a href="#">Sed consectetur efficitur</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Nam rhoncus quam enim</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Ut eleifend felis scelerisque</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Nullam euismod elementum</a>
                            </li>
                        </ul>
                    </li>
                    <li className="one_quarter">
                        <i className="fa fa-4x fa-expeditedssl btmspace-30" />
                        <h6 className="heading font-x1">Quis sodales mattis</h6>
                        <ul className="nospace">
                            <li>
                                <i className="fa fa-link" /> <a href="#">Mi a commodo velit suscipit</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Eu nulla ex massa aliquam</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">At dictum in malesuada</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Sit amet tortor vestibulum</a>
                            </li>
                        </ul>
                    </li>
                    <li className="one_quarter">
                        <i className="fa fa-4x fa-hourglass-2 btmspace-30" />
                        <h6 className="heading font-x1">Tortor neque rutrum</h6>
                        <ul className="nospace">
                            <li>
                                <i className="fa fa-link" /> <a href="#">Vulputate orci quis velit</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Mollis in vehicula arcu</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Malesuada mauris ac</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Condimentum tortor ac</a>
                            </li>
                        </ul>
                    </li>
                    <li className="one_quarter">
                        <i className="fa fa-4x fa-snowflake-o btmspace-30" />
                        <h6 className="heading font-x1">Lacus condimentum</h6>
                        <ul className="nospace">
                            <li>
                                <i className="fa fa-link" /> <a href="#">Fermentum diam sed lacinia</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Sit amet ipsum ac rutrum</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">In a iaculis orci quis</a>
                            </li>
                            <li>
                                <i className="fa fa-link" /> <a href="#">Vehicula nibh nulla vel</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <footer className="center">
                    <a className="btn" href="#">
                        Nulla facilisi cum &raquo;
                    </a>
                </footer>
            </section>
        </div>

        <div className="wrapper row3">
            <figure className="hoc container clear clients">
                <ul className="nospace group">
                    <li className="one_quarter first">
                        <a className="imgover" href="#">
                            <img src="images/demo/222x100.png" alt="" />
                        </a>
                    </li>
                    <li className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/222x100.png" alt="" />
                        </a>
                    </li>
                    <li className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/222x100.png" alt="" />
                        </a>
                    </li>
                    <li className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/222x100.png" alt="" />
                        </a>
                    </li>
                </ul>
            </figure>
        </div>

        <div
            className="wrapper row2 bgded overlay"
            style={{
                backgroundImage: `url('images/demo/backgrounds/03.png')`,
            }}
        >
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Sociis natoque penatibus et</h6>
                    <p>Magnis dis parturient montes nascetur ridiculus mus sed in dui</p>
                </div>
                <div className="group team">
                    <figure className="one_quarter first">
                        <a className="imgover" href="#">
                            <img src="images/demo/320x320.png" alt="" />
                        </a>
                        <figcaption>
                            <h6 className="heading">A. Doe</h6>
                            <em>Director</em>
                            <footer>
                                <ul className="faico clear">
                                    <li>
                                        <a className="faicon-twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-google-plus" href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-vk" href="#">
                                            <i className="fa fa-vk" />
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </figcaption>
                    </figure>
                    <figure className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/320x320.png" alt="" />
                        </a>
                        <figcaption>
                            <h6 className="heading">B. Doe</h6>
                            <em>Chairman</em>
                            <footer>
                                <ul className="faico clear">
                                    <li>
                                        <a className="faicon-twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-google-plus" href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-vk" href="#">
                                            <i className="fa fa-vk" />
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </figcaption>
                    </figure>
                    <figure className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/320x320.png" alt="" />
                        </a>
                        <figcaption>
                            <h6 className="heading">C. Doe</h6>
                            <em>Head of Design</em>
                            <footer>
                                <ul className="faico clear">
                                    <li>
                                        <a className="faicon-twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-google-plus" href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-vk" href="#">
                                            <i className="fa fa-vk" />
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </figcaption>
                    </figure>
                    <figure className="one_quarter">
                        <a className="imgover" href="#">
                            <img src="images/demo/320x320.png" alt="" />
                        </a>
                        <figcaption>
                            <h6 className="heading">D. Doe</h6>
                            <em>Head of Marketing</em>
                            <footer>
                                <ul className="faico clear">
                                    <li>
                                        <a className="faicon-twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-google-plus" href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="faicon-vk" href="#">
                                            <i className="fa fa-vk" />
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </figcaption>
                    </figure>
                </div>
                <footer className="center">
                    <a className="btn" href="#">
                        Tincidunt elementum &raquo;
                    </a>
                </footer>
            </section>
        </div>

        <div className="wrapper">
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <h6 className="heading">Quis nibh sollicitudin faucibus</h6>
                    <p>Nec faucibus nisi fusce ultricies mi non mattis mollis velit</p>
                </div>
                <div className="group latest">
                    <article className="one_third first">
                        <a className="imgover btmspace-30" href="#">
                            <img src="images/demo/320x240.png" alt="" />
                        </a>
                        <ul className="nospace meta">
                            <li>
                                <i className="fa fa-user" /> <a href="#">Admin</a>
                            </li>
                            <li>
                                <i className="fa fa-tag" /> <a href="#">Tag Name</a>
                            </li>
                        </ul>
                        <h6 className="heading font-x1">Leo fermentum risus nec</h6>
                        <p>
                            Aliquet erat nisi in nisi in vel porttitor leo proin eget volutpat lorem donec a ipsum nunc
                            dui enim sollicitudin eget&hellip;
                        </p>
                        <footer>
                            <a href="#">Read More</a>
                        </footer>
                    </article>
                    <article className="one_third">
                        <a className="imgover btmspace-30" href="#">
                            <img src="images/demo/320x240.png" alt="" />
                        </a>
                        <ul className="nospace meta">
                            <li>
                                <i className="fa fa-user" /> <a href="#">Admin</a>
                            </li>
                            <li>
                                <i className="fa fa-tag" /> <a href="#">Tag Name</a>
                            </li>
                        </ul>
                        <h6 className="heading font-x1">Faucibus vitae dignissim</h6>
                        <p>
                            Sit amet libero nam gravida eros eget quam porttitor iaculis phasellus ultrices turpis
                            sapien mauris tortor pulvinar&hellip;
                        </p>
                        <footer>
                            <a href="#">Read More</a>
                        </footer>
                    </article>
                    <article className="one_third">
                        <a className="imgover btmspace-30" href="#">
                            <img src="images/demo/320x240.png" alt="" />
                        </a>
                        <ul className="nospace meta">
                            <li>
                                <i className="fa fa-user" /> <a href="#">Admin</a>
                            </li>
                            <li>
                                <i className="fa fa-tag" /> <a href="#">Tag Name</a>
                            </li>
                        </ul>
                        <h6 className="heading font-x1">Pretium molestie pretium</h6>
                        <p>
                            Consequat ante duis non lobortis urna integer vehicula ex non ante ultricies maximus sed
                            tempus felis non enim&hellip;
                        </p>
                        <footer>
                            <a href="#">Read More</a>
                        </footer>
                    </article>
                </div>
                <footer className="center">
                    <a className="btn" href="#">
                        Rhoncus mi congue &raquo;
                    </a>
                </footer>
            </section>
        </div>

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
