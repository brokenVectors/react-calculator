import React, {useState} from 'react';
import NumberDisplay from './NumberDisplay';
import Buttons from './Buttons';

export default function Calculator() {
    let [display, setDisplay] = useState("0");
    let [a, setA] = useState(null);
    let [op, setOp] = useState(null);
    function pushIntoA() {
        setA(parseFloat(display));
        setDisplay("0");
    }
    function calculate(a,b,op) {
        let result;
        switch(op) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            case "%":
                result = a % b;
                break;
            default:
                break;
        }
        return result;
    }
    function handleClick(str) {
        switch(str) {
            case "+/-":
                if(display.indexOf("-") == -1) {
                    setDisplay("-" + display);
                }
                else {
                    setDisplay(display.replace("-", ""))
                }
                break;
            case "+":
                pushIntoA();
                setOp("+");
                break;
            case "-":
                pushIntoA();
                setOp("-");
                break;
            case "*":
                pushIntoA();
                setOp("*");
                break;
            case "/":
                pushIntoA();
                setOp("/");
                break;
            case "%":
                pushIntoA();
                setOp("%");
                break;
            case "C":
                setDisplay("0");
                setA(null);
                setOp(null);
                break;
            case "=":
                if(!op) {
                    return;
                }
                let b = parseFloat(display);
                let result = calculate(a,b,op);
                setA(result);
                setOp(null);
                setDisplay(result.toString());
                break;
            case ".":
                if(display.indexOf(".") === -1) {
                    setDisplay(display + str);
                }
                break;
            default:
                if(display === "0") {
                    setDisplay(str);
                }
                else {
                    setDisplay(display + str);
                }   
                break;
        }
    }
    return <>
        <NumberDisplay text={display} />
        <Buttons onClick={(str) => {handleClick(str)}}/>
    </>
}