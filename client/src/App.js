import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import './App.css';
import Home from './Pages/Home';
import Requests from './Pages/Requests';
import Prayers from './Pages/Prayers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home title='Home'/>} />
          <Route path='/requests' element={<Requests title='Requests' />} />
          <Route path='/prayers' element={<Prayers title='Prayers' />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <section className="App" title='home'>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </section>
  );
}

export default App;
