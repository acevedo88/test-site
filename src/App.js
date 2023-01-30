import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import Outfitter from './pages/outfitter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/outfitter' element={<Outfitter/>} />
        <Route path='/hunter' element={<Outfitter/>} />
      </Routes>
    </Router>
  );
}

export default App;
