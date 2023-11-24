
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import User from './components/User';
function App() {
    return (
     <div className="App">
      
     <BrowserRouter>
     <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact-us'>Contact-us</Link></li>
        <li><Link to='/user/1'>user1</Link></li>
        <li><Link to='/user/2'>user2</Link></li>
      </ul>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/User/:id' element={<User />} />
       </Routes>
        </BrowserRouter>
     </div>
    )
  }
                        
export default App;
