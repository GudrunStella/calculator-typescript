import { createContext, React, useState } from "react";

export const CalculatorContext = createContext({
    sign: '',
    setSign: () => { },
    num: 0,
    setNum: () => { },
    numHandler: () => { },
    operateHandler: () => { },
    calculate: () => { },
    floatNum: 0,
    setFloatNum: () => { },
});


export const CalculatorProvider = ({ children }) => {
    //operate signs
    var [sign, setSign] = useState('');
    var [operate, setOperate] = useState('');

    //numbers and calculations
    var [num, setNum] = useState(0);
    var [prevNum, setPrevNum] = useState(0.0);
    var [calc, setCalc] = useState(0);


    const numHandler = (value) => {

        return (e) => {

            e.preventDefault();

            if (num === 0) {
                num = value.toString()
            } else {
                num = num + value.toString()
            }

            if (calc === 0 || num.toString().includes('.')) {
                calc = parseFloat(num)
                setNum(calc)
            }

            switch (operate) {
                //Calculation for +
                case '+':
                    calc += parseFloat(num)
                    break;
                //Calculation for -
                case '-':
                    calc -= parseFloat(num)
                    break;
                //Calculation for *
                case '*':
                    calc *= parseFloat(num)
                    break;
                //Calculation for /
                case '/':
                    calc /= parseFloat(num)
                    break;
                //Calculation for /
                case '^':
                    calc = 1
                    for (var i = 0; i < num; i++) {
                        calc *= prevNum
                    }
                    break;
                default:

            }
            setNum(num)
            setCalc(calc)
        };
    };


    const operateHandler = (value) => {

        return (e) => {

            e.preventDefault();

            switch (value) {
                case '%':
                    calc = parseFloat(num / 100)
                    sign += calc
                    break;
                case 'sqr':
                    sign = 'sqr(' + calc + ')'
                    calc = Math.sqrt(parseFloat(calc))
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
                setPrevNum(num)
                setSign(sign)
                setOperate(value)
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
