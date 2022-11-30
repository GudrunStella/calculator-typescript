import { CalculatorContext } from "../../contexts/calculator-context";
import { useContext } from "react";
import './buttons-container.styles.css'
import { FC, ButtonHTMLAttributes } from "react";


export type ButtonProps = { num: number, sign: string, numHandler: any, operateHandler: any } & ButtonHTMLAttributes<HTMLButtonElement>;
const Buttons: FC<ButtonProps> = () => {
    const { numHandler } = useContext(CalculatorContext) as ButtonProps;
    const { operateHandler } = useContext(CalculatorContext) as ButtonProps;
    return (
        <div className='buttons-container'>
            <button className='operate-button' onClick={operateHandler('%')}>%</button>
            <button className='operate-button' onClick={operateHandler('^')}>x<sup>n</sup></button>
            <button className='operate-button' onClick={operateHandler('sqr')}>&#8730;</button>
            <button className='operate-button' onClick={operateHandler('c')}>C</button>

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

            <button className='operate-button' onClick={operateHandler('=')}>=</button>
            <button className='operate-button' onClick={operateHandler('+')}>+</button>
            <button className='operate-button'>.</button>
            <button className='tag-button' onClick={numHandler(0)}>0</button>
        </div>
    )
}
export default Buttons;
