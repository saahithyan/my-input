import React from 'react'

const MyInput = ({
    placeHolder, value, handler, me, className, type, onKeyPress = () => {}
}) => {
    const handleInput = event => handler(me, event.target.value)

    const handleKeyPress = event => onKeyPress(event.key)

    return (
        <input
            type={type}
            value={value}
            className={className}
            onChange={handleInput}
            placeholder={placeHolder}
            onKeyPress={handleKeyPress}
        />
    )
}

export default MyInput
