import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Support } from './form/support/Support';



const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
