import { useState } from 'react';
import './App.css';


const App = () => {

  //operate signs
  let [sign, setSign] = useState('');
  let [operate, setOperate] = useState('');

  //numbers and calculations
  let [num, setNum] = useState(0);
  let [temp, setTemp] = useState(0);
  let [prevNum, setPrevNum] = useState(0);
  let [calc, setCalc] = useState(0);
  let [result, setResult] = useState(0);


  const numHandler = (value) => {
    return (e) => {
      e.preventDefault();

      num = Number(num + value)
      setNum(num)

      //Calculation for +
      if (operate === '+') {
        if (temp === 0) {
          temp = prevNum + num
        } else {
          temp += num;
        }
        setResult(calc + num)

        //Calculation for -
      } else if (operate === '-') {
        if (temp === 0) {
          temp = prevNum - num
        } else {
          temp -= num
        }
        setResult(calc - num)

        //Calculation for *
      } else if (operate === '*') {
        if (temp === 0) {
          temp = prevNum * num
        } else {
          temp *= num
        }
        setResult(calc * num)

        //Calculation for /
      } else if (operate === '/') {
        if (temp === 0) {
          temp = prevNum / num
        } else {
          temp /= num
        }
        setResult(calc / num)

        //Calculation for /
      } else if (operate === '^') {
        var numPow = 1;
        for (var i = 0; i < num; i++) {
          numPow *= prevNum;
        }
        setCalc(calc = numPow)
        setResult(result = calc)


      } else if (operate === '=') {
        setSign(sign += ' ')
      }

      setTemp(temp)
    };
  };



  const operateHandler = (value) => {
    return (e) => {
      e.preventDefault();
      setPrevNum(num)
      if (temp === 0) setTemp(prevNum)

      switch (value) {

        case '%':

          if (temp === 0) {
            setTemp(num / 100)
          } else {
            setTemp(temp /= 100)
          }
          setResult(calc)
          break;

        case 'sqr':
          setCalc(calc = result)
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
          setTemp(temp = count);
          setSign(sign += '=' + temp)
          break;

        case 'c':
          setNum(0)
          setCalc(0)
          setTemp(0)
          setSign('')
          setOperate('')
          setPrevNum(0)
          break;

        default:
          setSign('=' + result)

      }

      if (value !== '=' && value !== 'sqr') setSign(sign += num + value)
      setCalc(temp)
      setOperate(value)
      setNum('')
    }

  }


  return (
    <div className='calculator-container'>
      <div className='window-container'>
        <textarea className='window' type="number" value={num} placeholder={sign}></textarea>
      </div>
      <div className='buttons-container'>
        <button className='top-button' onClick={operateHandler('%')}>%</button>
        <button className='top-button' onClick={operateHandler('^')}>x<sup>n</sup></button>
        <button className='top-button' onClick={operateHandler('sqr')}>&#8730;</button>
        <button className='clear-button' onClick={operateHandler('c')}>C</button>
        <button className='operate-button' onClick={operateHandler('/')}>/</button>
        <button className='tag-button' onClick={numHandler(9)}>9</button>
        <button className='tag-button' onClick={numHandler(8)}>8</button>
        <button className='tag-button' onClick={numHandler(7)}>7</button>
        <button className='operate-button' onClick={operateHandler('*')}>*</button>
        <button className='tag-button' onClick={numHandler(6)}>6</button>
        <button className='tag-button' onClick={numHandler(5)}>5</button>
        <button className='tag-button' onClick={numHandler(4)}>4</button>
        <button className='operate-button' onClick={operateHandler('-')}>-</button>
        <button className='tag-button' onClick={numHandler(3)}>3</button>
        <button className='tag-button' onClick={numHandler(2)}>2</button>
        <button className='tag-button' onClick={numHandler(1)}>1</button>
        <button className='equal-button' onClick={operateHandler('=')}>=</button>
        <button className='operate-button' onClick={operateHandler('+')}>+</button>
        <button className='tag-button' >.</button>
        <button className='tag-button' onClick={numHandler(0)}>0</button>
      </div>
    </div>
  );
}

export default App;
