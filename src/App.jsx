import './App.css'
import Display from './components/display/display'
import ButtonsContainer from './components/buttonsContainer/ButtonsContainer'
import { useEffect, useState } from 'react'

function App() {
  let [result, setResult] = useState([false, 0]);
  let [clicked, setClicked] = useState([false, {}]);
  let [operator, setOperator] = useState(null);
  let [operand, setOperand] = useState(0);
  let [save, setSave] = useState(null);
  let [isDecimal, setIsDecimal] = useState(false);
  let [deciOperand, setDeciOperand] = useState(0);
  let [deciInput, setDeciInput] = useState("");
  useEffect(() => {
    if (clicked[0]) {
      if (clicked[1]['fn'] === "num") {
        if (result[0]) {
          setSave(result[1]);
          setResult([false, 0]);
        }
        if (isDecimal) {
          if ((operand + "." + deciOperand).length < 10) {
            setDeciOperand((prev) => (prev * 10) + parseFloat(clicked[1]['value']));
            setDeciInput(operand.toString() + "." + deciOperand.toString())
          }
        }
        else {
          if (operand.toString().length < 10) {
            setOperand((prev) => (prev * 10) + parseFloat(clicked[1]['value']));
          }
        }
      }
      else if (clicked[1]['fn'] === "clear") {
        setOperand(0);
        setOperator(null);
        setResult([false, 0]);
        setSave = null;
        setIsDecimal(false);
        setDeciInput("");
        setDeciOperand(0);
      }
      else if (clicked[1]['fn'] === "negate") {
        if (result[0]) setResult((prev) => [true, -prev[1]]);
        if (isDecimal) {
          setDeciInput(prev => parseFloat(`-${prev}`))
        }
        setOperand((prev) => -prev);
      }
      else if (clicked[1]['fn'] === "percentage") {
        if (result[0]) setResult((prev) => [true, prev[1] / 100]);
        setOperand((prev) => parseFloat(prev / 100));
      }
      else if (clicked[1]['fn'] === "decimal") {
        setIsDecimal(true);
        setDeciInput(operand + "." + deciOperand)
      }
      else if (clicked[1]['fn'] === "operator") {
        setOperator(clicked[1]['value']);
        isDecimal ? setSave(parseFloat(deciInput)) : setSave(operand);
        setOperand(0);
        setDeciOperand(0);
        setIsDecimal(false)
      }
      else if (clicked[1]['fn'] === 'result') {
        if (save !== null) {
          if (operator === '+') {
            setResult([true, parseFloat(operand + save)]);
          }
          else if (operator === '-') {
            setResult([true, parseFloat(save - operand)]);

          }
          else if (operator === 'X') {
            setResult([true, parseFloat(operand * save)]);

          }
          else {
            setResult([true, parseFloat(save / operand)]);
          }

          setOperator(null);
          setOperand(0);
          setDeciOperand(0);
          setIsDecimal(0);
          setDeciInput("");
          setSave(null);
        }
      }
    }
  }, [clicked])

  return (
    <div className="container">
      <Display
        operand={operand}
        result={result}
        isDecimal={isDecimal}
        deciOperand={deciOperand}
      />
      <ButtonsContainer setIsClicked={setClicked} />
    </div>
  )
}

export default App
