import React from 'react'
import Button from './button/button'
export default function ButtonsContainer() {
    return (
        <div className='buttons-container'>
            <Button fn="clear" bgColor="gray" fontColor="black" name="AC" />
            <Button fn="negate" bgColor="gray" fontColor="black" name="+/-" />
            <Button fn="percentage" bgColor="gray" fontColor="black" name="%" />

            <Button fn="operator" bgColor="orange" fontColor="whitesmoke" name="/" />

            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="7" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="8" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="9" />

            <Button fn="operator" bgColor="orange" fontColor="whitesmoke" name="X" />

            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="4" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="5" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="6" />

            <Button fn="operator" bgColor="orange" fontColor="whitesmoke" name="-" />

            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="1" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="2" />
            <Button fn="num" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="3" />

            <Button fn="operator" bgColor="orange" fontColor="whitesmoke" name="+" />

            <Button fn="num" isZero={true} bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="0" />
            <Button fn="decimal" bgColor="rgb(59, 59, 59)" fontColor="whitesmoke" name="." />

            <Button fn="result" bgColor="orange" fontColor="whitesmoke" name="=" />
        </div>
    )
}
