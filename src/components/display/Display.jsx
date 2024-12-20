export default function Display({ result, operand, isDecimal, deciOperand }) {
    let combinedString = operand + "." + deciOperand;
    return (
        <div className='display'>
            {!result[0] && !isDecimal && <span>{operand.toString().length > 10 ? parseFloat(operand).toExponential(2) : operand.toString()}</span>}

            {!result[0] && isDecimal && <span>{combinedString.length > 10 ? parseFloat(combinedString).toExponential(2) : parseFloat(combinedString)}</span>}

            {result[0] && <span>{typeof result[1] === 'number' ? (result[1].toString().length > 10 ? parseFloat(result[1]).toExponential(2) : parseFloat(result[1])) : "Error"}</span>}
        </div>
    )
}


