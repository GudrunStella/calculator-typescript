import { Fragment } from 'react';
import Buttons from './components/buttons-conteiner/buttons-container.component';
import WindowContainer from './components/window-container/window-container.component';
import './App.css';


const App = () => {

  return (
    <div class='calculator-container'>
      <Fragment>

        <WindowContainer />
        <Buttons />
      </Fragment>
    </div>



  );
}

export default App;
