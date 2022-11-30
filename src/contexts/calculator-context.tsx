import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

interface propTypes {
    sign: string;
    num: number;
    setSign: Dispatch<SetStateAction<string>>;
    setNum: Dispatch<SetStateAction<number>>;
    numHandler: any;
    operateHandler: any;
    children?: ReactNode;
}

const defaultState = {
    sign: ' ',
    setSign: () => { },
    num: 0,
    setNum: () => { },
    numHandler: () => { },
    operateHandler: () => { },
}

export const CalculatorContext = createContext<propTypes>(defaultState);


export const CalculatorProvider = ({ children }: propTypes) => {
    //operate signs
    var [sign, setSign] = useState('');
    var [operate, setOperate] = useState('');
    var [stringOp, setStringOp] = useState('');
    var [switchOp, setSwitchOp] = useState(false);
    var [isSign, setIsSign] = useState(false);
    //numbers and calculations
    var [num, setNum] = useState(0);
    var [prevNum, setPrevNum] = useState(0.0);
    var [calc, setCalc] = useState(0);
    var [temp, setTemp] = useState(0);


    /*
    Initialise num
    */
    const numHandler = (value: number) => {

        return (e: Event) => {

            e.preventDefault();

            if (num === 0) {
                num = value
            } else {
                num = num * 10 + value
            }
            setNum(num)
            calculate()
        };
    };



    /*
    Initialize operate, prevNum and calc
    Operates some parts of calculation
    */
    const operateHandler = (value: string) => {

        return (e: Event) => {

            e.preventDefault();

            if (prevNum === 0) {
                prevNum = num
                if (operate === '-') prevNum = -num
            } else {
                prevNum = calc
            }

            switch (value) {
                case '%':
                    prevNum = num / 100
                    setPrevNum(prevNum)
                    sign += prevNum
                    break;
                case 'sqr':
                    sign = 'sqr(' + calc + ')'
                    calc = Math.sqrt(num)
                    sign += '=' + calc
                    break;
                case '/':
                    if (operate === '-') prevNum = -num
                    if (operate === '+') prevNum = num
                    sign += num + value
                    break;
                case '*':
                    if (operate === '-') prevNum = -num
                    if (operate === '+') prevNum = num
                    //sign += num + value
                    break;
                case '^':
                    if (operate === '-') prevNum = -num
                    if (operate === '+') prevNum = num
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
                    setIsSign(false)
                    break;
                case '=':
                    sign = value + calc
                    break;
                default:
                    if (isSign) sign = ''

                    if (num === 0 && sign === '') {
                        sign += value
                    } else {
                        sign += num + value;
                    }
            }
            stringOp += value;

            for (var i = 0; i < sign.length; i++) {
                if (sign[i] === sign[i + 1])
                    isSign = true;
            }

            for (i = 0; i < stringOp.length; i++) {
                if ((stringOp[i] === '*' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '*' && stringOp[i - 1] === '-') ||
                    (stringOp[i] === '/' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '/' && stringOp[i - 1] === '-') ||
                    (stringOp[i] === '^' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '^' && stringOp[i - 1] === '-') ||
                    (stringOp[i] === '%' && stringOp[i - 1] === '+') ||
                    (stringOp[i] === '%' && stringOp[i - 1] === '-'))
                    switchOp = true;
            }

            if (value !== 'c') {
                if (value !== '%') setPrevNum(prevNum)
                setSign(sign)
                setOperate(value)
                setNum(0)
                setCalc(calc)
                setStringOp(stringOp)
                setSwitchOp(switchOp)
                setIsSign(isSign)
            }
        }
    }


    /*
    Calculation part
    */
    const calculate = () => {

        switch (operate) {
            //Calculation for +
            case '+':
                calc = prevNum + num
                break;
            //Calculation for -
            case '-':
                calc = prevNum - num
                break;
            //Calculation for *
            // switch operation part if the sequence contains + or -
            case '*':
                calc = prevNum * num
                if (switchOp) calc += temp
                break;
            //Calculation for /
            case '/':
                calc = prevNum / num
                if (switchOp) calc += temp
                break;
            //Calculation for /
            case '^':
                calc = 1
                for (var i = 0; i < num; i++) {
                    calc *= prevNum
                }
                if (switchOp) calc += temp
                break;
            default:
        }
        setCalc(calc)
        setTemp(temp)
    }


    const items: propTypes = {
        sign,
        setSign,
        num,
        setNum,
        numHandler,
        operateHandler,
    }
    return <CalculatorContext.Provider value={items}>{children}</CalculatorContext.Provider>
};
