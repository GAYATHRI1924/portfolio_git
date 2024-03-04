import './App.css';
import Aboutus from './components/Aboutus';
import Content from './components/Content';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Resume from './components/Resume';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/about' element={<Aboutus />} />
          <Route path='/' element={<Content />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
      <Navbar />
      
   
    </div>
  );
}

export default App;
 