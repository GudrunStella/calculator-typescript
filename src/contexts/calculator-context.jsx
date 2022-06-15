import { createContext, React, useState } from "react";


export const CalculatorContext = createContext({
    sign: '',
    setSign: () => { },
    operate: '',
    setOperate: () => { },
    num: 0,
    setNum: () => { },
    prevNum: 0,
    setPrevNum: () => { },
    calc: 0,
    setCalc: () => { },
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

    const numHandler = (value) => {
        return (e) => {
            e.preventDefault();
            if (num === 0) {
                num = value
            } else {
                //if (value === '.') calc -= num
                num = num + value
            }

            switch (operate) {
                //Calculation for +
                case '+':
                    if (calc === 0) {
                        calc = parseFloat(prevNum) + parseFloat(num)
                    } else {
                        calc += parseFloat(num);
                    }
                    break;
                //Calculation for -
                case '-':
                    if (calc === 0) {
                        calc = parseFloat(prevNum) - parseFloat(num)
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
                    if (calc === 0) {
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
                //sign += ' '
            }
            setNum(num)
            setSign(sign)
            setCalc(calc)
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
                    break;

                case 'sqr':
                    var count = 0;
                    if (calc === 0) {
                        for (var i = 1; i < num / 2; i++) {
                            count += 1;
                            if (i * i === num) break;
                        }
                        sign = 'sqr(' + num + ')'

                    } else {
                        for (i = 1; i < calc / 2; i++) {
                            count += 1;
                            if (i * i === calc) break;
                        }
                        sign = 'sqr(' + calc + ')'
                    }
                    calc = count
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
                    sign += num + value

            }

            if (value !== 'c') {
                setPrevNum(num)
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
        operate,
        setOperate,
        num,
        setNum,
        prevNum,
        setPrevNum,
        calc,
        setCalc,
        numHandler,
        operateHandler,
    }

    return <CalculatorContext.Provider value={items}>{children}</CalculatorContext.Provider>
};
