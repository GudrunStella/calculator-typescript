import { createContext, React, useState } from "react";

export const CalculatorContext = createContext({
    sign: '',
    setSign: () => { },
    num: 0,
    setNum: () => { },
    numHandler: () => { },
    operateHandler: () => { },
    calculate: () => { },
});


export const CalculatorProvider = ({ children }) => {
    //operate signs
    var [sign, setSign] = useState('');
    var [operate, setOperate] = useState('');
    var [stringOp, setStringOp] = useState('');
    var [switchOp, setSwitchOp] = useState(false);

    //numbers and calculations
    var [num, setNum] = useState(0);
    var [prevNum, setPrevNum] = useState(0.0);
    var [calc, setCalc] = useState(0);
    var [temp, setTemp] = useState(0);


    const numHandler = (value) => {

        return (e) => {

            e.preventDefault();

            if (num === 0) {
                num = value.toString()
            } else {
                num = num + value.toString()
            }

            setNum(num)
            calculate()
        };
    };


    const operateHandler = (value) => {

        return (e) => {

            e.preventDefault();

            if (prevNum === 0) {
                prevNum = num
            } else {
                prevNum = calc
            }

            switch (value) {
                case '%':
                    num = parseFloat(num / 100)
                    calc = parseFloat(num)
                    sign += num

                    break;
                case 'sqr':
                    sign = 'sqr(' + calc + ')'
                    calc = Math.sqrt(parseFloat(calc))
                    sign += '=' + calc
                    break;
                case '/':
                    if (operate === '-') prevNum = -parseFloat(num)
                    if (operate === '+') prevNum = parseFloat(num)
                    sign += num + value
                    break;
                case '*':
                    if (operate === '-') prevNum = -parseFloat(num)
                    if (operate === '+') prevNum = parseFloat(num)
                    sign += num + value
                    break;
                case 'c':
                    setNum(0)
                    setCalc(0)
                    setPrevNum(0)
                    setSign('')
                    setOperate('')
                    setStringOp('')
                    setSwitchOp(false)
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
            stringOp += value;


            for (var i = 0; i < stringOp.length; i++) {
                if ((stringOp[i] === '*' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '+' && stringOp[i - 1] === '*') ||
                    (stringOp[i] === '-' && stringOp[i - 1] === '*') ||
                    (stringOp[i] === '*' && stringOp[i - 1] === '-') ||
                    (stringOp[i] === '/' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '+' && stringOp[i - 1] === '/') ||
                    (stringOp[i] === '-' && stringOp[i - 1] === '/') ||
                    (stringOp[i] === '/' && stringOp[i - 1] === '-'))
                    switchOp = true;
            }

            if (value !== 'c') {
                setPrevNum(prevNum)
                setSign(sign)
                setOperate(value)
                setNum('')
                setCalc(calc)
                setStringOp(stringOp)
                setSwitchOp(switchOp)
            }
        }
    }

    const calculate = () => {

        switch (operate) {
            //Calculation for +
            case '+':
                calc = parseFloat(prevNum) + parseFloat(num)
                break;
            //Calculation for -
            case '-':
                calc = parseFloat(prevNum) - parseFloat(num)
                break;
            //Calculation for *
            case '*':
                calc = parseFloat(prevNum) * parseFloat(num)
                if (switchOp) calc += parseFloat(temp)
                break;
            //Calculation for /
            case '/':
                calc = parseFloat(prevNum) / parseFloat(num)
                if (switchOp) calc += parseFloat(temp)
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

        setTemp(prevNum)
        setCalc(calc)
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
