import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shop/Shop';
import Header from './components/header/Header';
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shoppage />} />
      </Routes>
    </div>
  );
}

export default App;
