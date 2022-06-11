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
    let [sign, setSign] = useState('');
    let [operate, setOperate] = useState('');

    //numbers and calculations
    let [num, setNum] = useState(0);
    let [prevNum, setPrevNum] = useState(0);
    let [calc, setCalc] = useState(0);


    const numHandler = (value) => {
        return (e) => {
            e.preventDefault();
            if (num === 0) {
                num = Number(value);
            } else {
                num = Number(num * 10 + value)
            }
            setNum(num)

            //Calculation for +
            if (operate === '+') {
                if (calc === 0) {
                    calc = prevNum + num
                } else {
                    calc += num;
                }

                //Calculation for -
            } else if (operate === '-') {
                if (calc === 0) {
                    calc = prevNum - num
                } else {
                    calc -= num
                }

                //Calculation for *
            } else if (operate === '*') {
                if (calc === 0) {
                    calc = prevNum * num
                } else {
                    calc *= num
                }

                //Calculation for /
            } else if (operate === '/') {
                if (calc === 0) {
                    calc = prevNum / num
                } else {
                    calc /= num
                }

                //Calculation for /
            } else if (operate === '^') {
                //      var numPow = 1;
                if (calc === 0) calc = 1;
                for (var i = 0; i < num; i++) {
                    calc *= prevNum;
                }

            } else if (operate === '=') {
                setSign(sign += ' ')
            }

            setCalc(calc)
        };
    };



    const operateHandler = (value) => {
        return (e) => {
            e.preventDefault();
            setPrevNum(num)
            switch (value) {

                case '%':

                    if (calc === 0) {
                        setCalc(num / 100)
                    } else {
                        setCalc(calc /= 100)
                    }
                    break;

                case 'sqr':
                    var count = 0;
                    var i = 0;
                    if (calc === 0) {
                        for (i = 1; i < num / 2; i++) {
                            count += 1;
                            if (i * i === num) break;
                        }
                        setSign(sign = 'sqr(' + num + ')')
                    } else {
                        for (i = 1; i < calc / 2; i++) {
                            count += 1;
                            if (i * i === calc) break;
                        }
                        setSign(sign = 'sqr(' + calc + ')')
                    }
                    calc = count
                    setCalc(calc);
                    setSign(sign += '=' + calc)
                    break;

                case 'c':
                    setNum(0)
                    setCalc(0)
                    setSign('')
                    setOperate('')
                    setPrevNum(0)
                    break;

                default:
                    setSign('=' + calc)

            }

            if (value !== '=' && value !== 'sqr' && value !== 'c') setSign(sign += num + value)

            setOperate(value)
            setNum('')
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
