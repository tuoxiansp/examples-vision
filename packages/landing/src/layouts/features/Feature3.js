import React from 'react'
import { View } from '@visionjs/core'

import wrapper from '../../lib/knobs/wrapper'

const useStyleBySize = [ 'one_half', 'one_half', 'one_half', 'one_third', 'one_quarter' ]

const Feature3 = () => {
    return (
        <div className="wrapper row3">
            <figure className="hoc container clear clients">
                <ul className="nospace inline pushright center">
                    <View
                        id="images"
                        render={wrapper(({ useText }) => {
                            const image = useText('image', 'images/demo/222x100.png')

                            return (
                                <li>
                                    <a className="imgover">
                                        <img src={image} alt="" />
                                    </a>
                                </li>
                            )
                        })}
                    />
                </ul>
            </figure>
        </div>
    )
}

export default wrapper(Feature3)
