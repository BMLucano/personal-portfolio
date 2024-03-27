// import { useState } from 'react';
// import logo from './logo.svg'
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  // const [count, setCount] = useState(0);

  // function incrCount() {
  //   setCount(count => count + 1);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
};

export default App;
