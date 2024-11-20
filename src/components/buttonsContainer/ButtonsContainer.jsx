import React from 'react'
import Button from './button/button'
export default function ButtonsContainer() {
    return (
        <div className='buttons-container'>
            <Button fn="clear" bgColor="#808080" fontColor="black" value="AC" />
            <Button fn="negate" bgColor="#808080" fontColor="black" value="+/-" />
            <Button fn="percentage" bgColor="#808080" fontColor="black" value="%" />

            <Button fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="/" />

            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="7" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="8" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="9" />

            <Button fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="X" />

            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="4" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="5" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="6" />

            <Button fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="-" />

            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="1" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="2" />
            <Button fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="3" />

            <Button fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="+" />

            <Button fn="num" isZero={true} bgColor="#3B3B3B" fontColor="whitesmoke" value="0" />
            <Button fn="decimal" bgColor="#3B3B3B" fontColor="whitesmoke" value="." />

            <Button fn="result" bgColor="#FFA500" fontColor="whitesmoke" value="=" />
        </div>
    )
}
