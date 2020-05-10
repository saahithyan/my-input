# my-input

> A input component for react

[![NPM](https://img.shields.io/npm/v/my-input.svg)](https://www.npmjs.com/package/my-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-input
```

## Usage

```jsx
import React, { Component } from 'react'
import MyInput from 'my-input-react'

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

```

## License

MIT © [saahithyan](https://github.com/saahithyan)
