import React, { Component } from 'react'
import Landing from './Landing'
import Editor from './Editor'
import { Provider } from './lib/contextual-events'

class App extends Component {
    render() {
        return (
            <Provider>
                <Editor>
                    <Landing />
                </Editor>
            </Provider>
        )
    }
}

export default App
