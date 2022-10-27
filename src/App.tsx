import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './form/MainPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
