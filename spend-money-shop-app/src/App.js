import './App.css';

import Header from './components/Header';
import TotalMoney from './components/TotalMoney';
import Items from './components/Items';

function App() {
  return (
    <div className='app'>
      <Header/>
      <TotalMoney/>
      <Items/>
    </div>
  );
}

export default App;
