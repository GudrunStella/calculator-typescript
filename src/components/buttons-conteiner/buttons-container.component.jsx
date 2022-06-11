import { CalculatorContext } from "../../contexts/calculator-context";
import { useContext } from "react";
import './buttons-container.styles.css'
const Buttons = ({ num, sign }) => {
    //const {operate, numhandling} = calculate;
    const { numHandler } = useContext(CalculatorContext);

    const { operateHandler } = useContext(CalculatorContext);
    return (
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
    )
}

export default Buttons;
