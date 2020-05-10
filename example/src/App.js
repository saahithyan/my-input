import React, { Component } from 'react'
import MyInput from 'my-input'

class App extends Component {
    state = {
        value: '' // initial value
    }

    handleInput (refer, value) {
        this.setState({ value })
    }

    render () {
        const { value } = this.state

        return (
            <MyInput
                refer='myInput'
                placeHolder='Enter something'
                value={value}
                handler={this.handleInput.bind(this)}/>
        )
    }
}

export default App
