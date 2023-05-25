import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Myitems from './components/Myitems';

function App() {
  return (<BrowserRouter>
 <div>
  <>
 <Navigation />

  </>
 <div>
  <div>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Myitems' element={<Myitems />} />
      <Route path='/About' element={<About />} />

    </Routes>
 </div>
   
   </div>

 </div>
   
  
  
  </BrowserRouter>
  );
}

export default App;
