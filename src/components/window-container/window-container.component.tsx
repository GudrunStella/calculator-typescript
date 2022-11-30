import { useContext } from "react";
import { CalculatorContext } from "../../contexts/calculator-context";
import './window-container.styles.css'

type WindowProps = { num: number, sign: string };
const WindowContainer = () => {

    const { num, sign } = useContext(CalculatorContext) as WindowProps;
    return (
        <div className='window-container'>
            <textarea className='window' defaultValue={num ? num : sign} placeholder={'0'}></textarea>
        </div>
    );
}
export default WindowContainer;