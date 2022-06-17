import { createContext, React, useState } from "react";


export const CalculatorContext = createContext({
    sign: '',
    setSign: () => { },
    num: 0,
    setNum: () => { },
    numHandler: () => { },
    operateHandler: () => { },
});


export const CalculatorProvider = ({ children }) => {
    //operate signs
    var [sign, setSign] = useState('');
    var [operate, setOperate] = useState('');

    //numbers and calculations
    var [num, setNum] = useState(0);
    var [prevNum, setPrevNum] = useState(0);
    var [calc, setCalc] = useState(0);
    var [floatNum, setFloatNum] = useState(0.0);

    const numHandler = (value) => {
        return (e) => {
            e.preventDefault();
            if (num === 0) {
                num = value.toString()
            } else {
                num = num + value.toString()
            }

            switch (operate) {
                //Calculation for +
                case '+':
                    if (calc === 0) {
                        calc = parseFloat(prevNum) + parseFloat(num)

                    } else if (num.toString().includes('.')) {
                        if (calc === 0) floatNum = parseFloat(prevNum) + parseFloat(num)

                        if (calc >= 0) floatNum += parseFloat(prevNum)

                    } else {
                        calc += parseFloat(num)
                    }
                    break;
                //Calculation for -
                case '-':
                    if (calc === 0) {
                        calc = parseFloat(prevNum) - parseFloat(num)
                    } else if (num.toString().includes('.')) {
                        floatNum = -parseFloat(prevNum) - parseFloat(num)
                    } else {
                        calc -= parseFloat(num)
                    }
                    break;
                //Calculation for *
                case '*':
                    if (calc === 0) {
                        calc = parseFloat(prevNum) * parseFloat(num)
                    } else {
                        calc *= parseFloat(num)
                    }
                    break;
                //Calculation for /
                case '/':
                    if (calc === 0 || num.toString().includes('.')) {
                        calc = parseFloat(prevNum) / parseFloat(num)
                    } else {
                        calc /= parseFloat(num)
                    }
                    break;
                //Calculation for /
                case '^':
                    if (calc === 0) calc = 1;
                    for (var i = 0; i < num; i++) {
                        calc *= prevNum;
                    }
                    break;
                default:

            }
            if (num.toString().includes('.')) {
                calc = floatNum
            }
            setNum(num)
            setCalc(calc)
            setFloatNum(floatNum)
        };
    };


    const operateHandler = (value) => {
        return (e) => {
            e.preventDefault();

            switch (value) {
                case '%':
                    if (calc === 0) {
                        calc = num / 100
                    } else {
                        calc /= 100
                    }
                    sign += calc
                    break;

                case 'sqr':
                    var squareRoot = 0;
                    if (calc === 0) {
                        sign = 'sqr(' + num + ')'
                        squareRoot = Math.sqrt(parseFloat(num))
                    } else {
                        sign = 'sqr(' + calc + ')'
                        squareRoot = Math.sqrt(parseFloat(calc))
                    }
                    calc = squareRoot;
                    sign += '=' + calc
                    break;
                case 'c':
                    setNum(0)
                    setCalc(0)
                    setSign('')
                    setOperate('')
                    setPrevNum(0)
                    break;
                case '=':
                    sign = value + calc
                    break;
                default:
                    if (num === 0 && sign === '') {
                        sign += value
                    } else {
                        sign += num + value;
                    }
            }
            if (value !== 'c') {
                setPrevNum(parseFloat(num))
                setSign(sign)
                setOperate(value)
                setCalc(calc)
                setNum('')
            }
        }
    }


    const items = {
        sign,
        setSign,
        num,
        setNum,
        numHandler,
        operateHandler,
    }

    return <CalculatorContext.Provider value={items}>{children}</CalculatorContext.Provider>
};
