import React, { Component } from 'react'
import MyInput from 'myinput'

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
                value={value}
                refer='myInput'
                placeHolder='Enter something'
                handler={this.handleInput.bind(this)}/>
        )
    }
}

export default App
