import React from 'react'
import Button from './button/button'
export default function ButtonsContainer({ setIsClicked }) {
    return (
        <div className='buttons-container'>
            <Button setClicked={setIsClicked} fn="clear" bgColor="#808080" fontColor="black" value="AC" />
            <Button setClicked={setIsClicked} fn="negate" bgColor="#808080" fontColor="black" value="+/-" />
            <Button setClicked={setIsClicked} fn="percentage" bgColor="#808080" fontColor="black" value="%" />

            <Button setClicked={setIsClicked} fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="/" />

            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="7" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="8" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="9" />

            <Button setClicked={setIsClicked} fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="X" />

            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="4" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="5" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="6" />

            <Button setClicked={setIsClicked} fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="-" />

            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="1" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="2" />
            <Button setClicked={setIsClicked} fn="num" bgColor="#3B3B3B" fontColor="whitesmoke" value="3" />

            <Button setClicked={setIsClicked} fn="operator" bgColor="#FFA500" fontColor="whitesmoke" value="+" />

            <Button setClicked={setIsClicked} fn="num" isZero={true} bgColor="#3B3B3B" fontColor="whitesmoke" value="0" />
            <Button setClicked={setIsClicked} fn="decimal" bgColor="#3B3B3B" fontColor="whitesmoke" value="." />

            <Button setClicked={setIsClicked} fn="result" bgColor="#FFA500" fontColor="whitesmoke" value="=" />
        </div>
    )
}
