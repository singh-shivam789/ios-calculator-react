import React from 'react'

export default function Button({ name, bgColor, fontColor, isZero }) {
    return (
        <div style={{ backgroundColor: bgColor, color: fontColor, width: `${isZero ? "220px" : "100px"}`, borderRadius: `${isZero ? "200px" : "100px"}` }} className='button'>
            <span style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>{name}</span>
        </div >
    )
}
