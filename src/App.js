
import './App.css';
import {Route,Routes, Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import RandomPassword from './components/RandomPassword';
// import Random from './components/Random';
import RandomQuote from './components/RandomQuote';
import RandomMeme from './components/RandomMeme';

function App() {
  return (
    <div className="App">
     <h1>This is Random Generator</h1>
    
    <Routes>
      {/* <Route path='/' element={<Random/>}/> */}
      <Route path='/RandomPassword' element={<RandomPassword/>} />
      <Route path='/RandomQuote' element={<RandomQuote/>} />
      <Route path='/RandomMeme' element={<RandomMeme/>} />
      <Route path="*" element={<Navbar />} />
     </Routes>
    
    </div>
  );
}

export default App;

const Navbar=()=>{
  const location = useLocation();



if(location.pathname !== ' ' && location.pathname !== ' '){
  return(
    <>
    <div className='Randm'>
      
      <div>
        <button >
          <Link className='tetx' to="/RandomQuote">Quote</Link>
        </button>
      </div>

      <div>
        <button>
          <Link className='tetx' to="/RandomPassword">Password</Link>
        </button>
      </div>

      <div>
        <button>
          <Link className='tetx' to="/RandomMeme">Image</Link>
        </button>
      </div>
    </div>
    </>
  )
}



}
