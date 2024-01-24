import logo from './logo.svg';
import React from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <section className='grid grid-col-1 h-screen bg-amber-50'>
        <div className='text-2xl p-2 justify-center'>Is this still working?</div>
        <div className=''>Chicken</div>
        <div></div>
      </section>
    </>
  );
}

export default App;
