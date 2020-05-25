import React, { Component } from 'react'
import MyInput from 'my-input-react'

class App extends Component {
    state = {
        value: '' // initial value
    }

    handleInput (me, value) {
        this.setState({ value })
    }

    render () {
        const { value } = this.state

        return (
            <MyInput
                value={value}
                me='myInput'
                placeHolder='Enter something'
                className=''
                handler={this.handleInput.bind(this)}/>
        )
    }
}

export default App
