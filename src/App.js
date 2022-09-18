import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
