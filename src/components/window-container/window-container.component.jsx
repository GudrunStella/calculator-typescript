import { Fragment } from "react";
import Calculator from "../../calculator/calculator";
import './window-container.styles.css'
const WindowContainer = () => {
    <Fragment>
        <div className='window-container'>
            <textarea className='window' type="number" value={Calculator.num} placeholder={Calculator.sign}></textarea>
        </div>
    </Fragment>
}
export default WindowContainer;