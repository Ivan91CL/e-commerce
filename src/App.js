import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage} exact/>
        <Route path='/hats' Component={HatsPage}/>
      </Routes>
    </div>
  );
}

export default App;
 