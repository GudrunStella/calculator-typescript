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



  const numHandler = (e) => {
    e.preventDefault();
    let value = e.target.id * 0.1;
    setNum(num = num * 10 + value * 10)

    //Calculation for +
    if (operate === '+') {
      if (temp === 0) {
        setTemp(temp = prevNum + num)
      } else {
        setTemp(temp += num)
      }
      setResult(result = calc + num)

      //Calculation for -
    } else if (operate === '-') {
      if (temp === 0) {
        setTemp(temp = prevNum - num)
      } else {
        setTemp(temp -= num)
      }
      setResult(result = calc - num)

      //Calculation for *
    } else if (operate === '*') {
      if (temp === 0) {
        setTemp(temp = prevNum * num)
      } else {
        setTemp(temp *= num)
      }
      setResult(result = calc * num)

      //Calculation for /
    } else if (operate === '/') {
      if (temp === 0) {
        setTemp(temp = prevNum / num)
      } else {
        setTemp(temp /= num)
      }
      setResult(result = calc / num)

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
  }



  const operateHandler = (e) => {

    e.preventDefault();

    const value = e.target.id;
    setPrevNum(prevNum = num)
    if (temp === 0) setTemp(temp = prevNum)

    switch (value) {
      case '+':
        setCalc(calc = temp);
        setOperate('+');
        break;
      case '-':
        setCalc(calc = temp);
        setOperate('-')
        break;
      case '*':
        setCalc(calc = temp)
        setOperate('*')
        break;
      case '/':
        setCalc(calc = temp)
        setOperate('/')
        break;
      case '%':
        if (temp === 0) {
          setTemp(temp = num / 100)
        } else {
          setTemp(temp /= 100)
        }
        setCalc(calc = temp)
        setResult(result = calc)
        setOperate('%')
        break;

      case '^':
        setOperate('^')
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
        setTemp(temp = count);
        setCalc(calc = temp)
        setResult(result = calc)
        setSign(sign += '=' + result)

        setOperate('sqr')
        break;

      case 'c':
        setCalc(0)
        setTemp(0)
        setSign('')
        setOperate('')
        setPrevNum(0)
        break;
      default:
        setSign('=' + result)
        setOperate('=')
    }

    if (value === 'c') {
      setNum(0)
    } else {
      if (value !== '=' && value !== 'sqr') setSign(sign += num + value)
      setNum('')
    }
  }


  return (
    <div className='calculator-container'>
      <div className='window-container'>
        <textarea className='window' type="number" value={num} placeholder={sign}></textarea>
      </div>
      <div className='buttons-container'>
        <button className='top-button' id='%' onClick={operateHandler}>%</button>
        <button className='top-button' id='^' onClick={operateHandler}>x<sup>n</sup></button>
        <button className='top-button' id='sqr' onClick={operateHandler}>&#8730;</button>
        <button className='clear-button' id='c' onClick={operateHandler}>C</button>
        <button className='operate-button' id='/' onClick={operateHandler}>/</button>
        <button className='tag-button' id='9' onClick={numHandler} value='9'>9</button>
        <button className='tag-button' id='8' onClick={numHandler}>8</button>
        <button className='tag-button' id='7' onClick={numHandler}>7</button>
        <button className='operate-button' id='*' onClick={operateHandler}>*</button>
        <button className='tag-button' id='6' onClick={numHandler}>6</button>
        <button className='tag-button' id='5' onClick={numHandler}>5</button>
        <button className='tag-button' id='4' onClick={numHandler}>4</button>
        <button className='operate-button' id='-' onClick={operateHandler}>-</button>
        <button className='tag-button' id='3' onClick={numHandler}>3</button>
        <button className='tag-button' id='2' onClick={numHandler}>2</button>
        <button className='tag-button' id='1' onClick={numHandler}>1</button>
        <button className='equal-button' id='=' onClick={operateHandler}>=</button>
        <button className='operate-button' id='+' onClick={operateHandler}>+</button>
        <button className='tag-button' id='.'>.</button>
        <button className='tag-button' id='0' onClick={numHandler}>0</button>
      </div>
    </div>
  );
}

export default App;
