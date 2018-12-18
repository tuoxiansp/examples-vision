import React, { Component } from 'react'
import Landing from './Landing'
import Editor from './Editor'

class App extends Component {
    render() {
        return (
            <Editor>
                <Landing />
            </Editor>
        )
    }
}

export default App
