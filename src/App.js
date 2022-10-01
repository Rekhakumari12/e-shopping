import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shop/Shop';
import Header from './components/header/Header';
import Auth from './pages/auth/Auth';
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shoppage />} />
        <Route path='/signin' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
