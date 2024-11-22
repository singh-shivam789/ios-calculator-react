import React, { useRef } from 'react'

export default function Button({ value, bgColor, fontColor, isZero, fn, setClicked }) {
    const clickHandler = () => {
        setClicked([true, { fn: fn, value: value }]);
    }
    return (
        <button onClick={clickHandler} style={{ backgroundColor: bgColor, color: fontColor, width: `${isZero ? "220px" : "100px"}`, borderRadius: `${isZero ? "200px" : "100px"}` }} className='button'>
            <span style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>{value}</span>
        </button >
    )
}
