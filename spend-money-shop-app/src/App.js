import './App.css';

import Header from './components/Header';
import TotalMoney from './components/TotalMoney';
import Items from './components/Items';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className='app'>
      <Header/>
      <TotalMoney/>
      <Items/>
      <Receipt/>
    </div>
  );
}

export default App;
