import React from 'react'

const MyInput = ({ placeHolder, value, handler, me, className }) => {
    const handleInput = event => handler(me, event.target.value)

    return (
        <input
            placeholder={placeHolder}
            value={value}
            onChange={handleInput}
            className={className}
        />
    )
}

export default MyInput
