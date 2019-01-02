import React from 'react'
import { View } from '@visionjs/core'
import { ButtonGroup, ButtonToolbar, Button } from 'rsuite'

import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'
import Feature4 from './Feature4'

const featureTypes = [ Feature1, Feature2, Feature3, Feature4 ]

const Features = (context) => {
    const { requestUpdateProps, props: { useFeatureIndex = 0 }, readonly, focused } = context
    const Feature = featureTypes[useFeatureIndex]

    return (
        <div style={{ position: 'relative' }}>
            {!readonly && (
                <div
                    style={{
                        position: 'absolute',
                        left: 40,
                        top: 20,
                        zIndex: 2,
                    }}
                >
                    <ButtonToolbar>
                        <ButtonGroup>
                            {featureTypes.map((Feature, index) => {
                                return (
                                    <Button
                                        key={index}
                                        onMouseDown={() => {
                                            requestUpdateProps({ useFeatureIndex: index })
                                        }}
                                        active={useFeatureIndex === index}
                                    >
                                        {index + 1}
                                    </Button>
                                )
                            })}
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            )}
            <View Compositor={null} id={'feature' + (useFeatureIndex + 1)} render={() => Feature(context)} />
        </div>
    )
}

export default Features
