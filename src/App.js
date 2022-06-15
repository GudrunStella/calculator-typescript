import Buttons from './components/buttons-conteiner/buttons-container.component';
import WindowContainer from './components/window-container/window-container.component';
import './App.css';


const App = () => {

  return (
    <div class='calculator-container'>

      <WindowContainer />
      <Buttons />
    </div>



  );
}

export default App;
