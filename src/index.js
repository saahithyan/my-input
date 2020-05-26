import React from 'react'

const MyInput = ({ placeHolder, value, handler, me, className, type }) => {
    const handleInput = event => handler(me, event.target.value)

    return (
        <input
            type={type}
            value={value}
            className={className}
            onChange={handleInput}
            placeholder={placeHolder}
        />
    )
}

export default MyInput
