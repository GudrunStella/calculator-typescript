import { Fragment } from "react";
import Calculator from "../../calculator/calculator";
import './buttons-container.styles.css'
const Buttons = () => {
    <Fragment>
        <div className='buttons-container'>
            <button className='top-button' onClick={Calculator.operateHandler('%')}>%</button>
            <button className='top-button' onClick={Calculator.operateHandler('^')}>x<sup>n</sup></button>
            <button className='top-button' onClick={Calculator.operateHandler('sqr')}>&#8730;</button>
            <button className='clear-button' onClick={Calculator.operateHandler('c')}>C</button>
            <button className='operate-button' onClick={Calculator.operateHandler('/')}>/</button>
            <button className='tag-button' onClick={Calculator.numHandler(9)}>9</button>
            <button className='tag-button' onClick={Calculator.numHandler(8)}>8</button>
            <button className='tag-button' onClick={Calculator.numHandler(7)}>7</button>
            <button className='operate-button' onClick={Calculator.operateHandler('*')}>*</button>
            <button className='tag-button' onClick={Calculator.numHandler(6)}>6</button>
            <button className='tag-button' onClick={Calculator.numHandler(5)}>5</button>
            <button className='tag-button' onClick={Calculator.numHandler(4)}>4</button>
            <button className='operate-button' onClick={Calculator.operateHandler('-')}>-</button>
            <button className='tag-button' onClick={Calculator.numHandler(3)}>3</button>
            <button className='tag-button' onClick={Calculator.numHandler(2)}>2</button>
            <button className='tag-button' onClick={Calculator.numHandler(1)}>1</button>
            <button className='equal-button' onClick={Calculator.operateHandler('=')}>=</button>
            <button className='operate-button' onClick={Calculator.operateHandler('+')}>+</button>
            <button className='tag-button' >.</button>
            <button className='tag-button' onClick={Calculator.numHandler(0)}>0</button>
        </div>
    </Fragment>
}

export default Buttons;
