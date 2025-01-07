import logo from './logo.svg';
import './App.css';
import Kategoria from './components/Kategoria';
import TablazatReceptek from './components/TablazatReceptek';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Receptek</h1>
      </header>
      <main>
      <Kategoria/>
      <TablazatReceptek/>
      </main>
      </div>
  );
}

export default App;
