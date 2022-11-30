import Buttons from './components/buttons-container/buttons-container.component';
import WindowContainer from './components/window-container/window-container.component';
import './App.css';

const App = () => {
  return (
    <div className='calculator-container'>
      <WindowContainer />
      <Buttons />
    </div>
  );
}

export default App;
