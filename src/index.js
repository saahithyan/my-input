import React from 'react'

const MyInput = ({ placeHolder, value, handler, refer }) => {
    const handleInput = event => handler(refer, event.target.value)

    return (
        <input
            placeholder={placeHolder}
            value={value}
            onChange={handleInput}
        />
    )
}

export default MyInput
