
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import User from './components/User';
import Login from './components/Login';
import Oldbooks from './components/Oldbooks';
import Newbooks from './components/Newbooks';
import Dashboard from './components/Dashboard';
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
        <li><Link to='/books/oldbooks'>Oldbook</Link></li>
        <li><Link to='/books/newbooks'>Newbook</Link></li>
        <li><Link to='/login'>login</Link></li>
        
      </ul>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/User/:id' element={<User />} />
        <Route path='/books'>
          <Route path='oldbooks' element={<Oldbooks />} />
          <Route path='newbooks' element={<Newbooks />} />
        </Route>
        <Route path='Login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
       </Routes>
        </BrowserRouter>
     </div>
    )
  }
                        
export default App;
