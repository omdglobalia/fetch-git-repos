import './App.css';
import { Routes, Route } from 'react-router-dom'
import ListView from './components/listView';
import EnterUser from './components/enterUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EnterUser/>} />
        <Route path='/list/:user' element={<ListView />} />
      </Routes>
    </div>
  );
}

export default App;
