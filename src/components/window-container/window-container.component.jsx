import { useContext } from "react";
import { CalculatorContext } from "../../contexts/calculator-context";
import './window-container.styles.css'
const WindowContainer = () => {

    const { num, sign } = useContext(CalculatorContext);
    return (
        <div className='window-container'>
            <textarea className='window' type="number" value={num} placeholder={sign}></textarea>
        </div>
    );
}
export default WindowContainer;