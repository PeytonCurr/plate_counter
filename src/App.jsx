import logo from './logo.svg';
import React from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <section className='grid grid-col-1 h-screen'>
        <div className='text-2xl p-2 justify-center bg-red-500'>Is this still working?</div>
        <div className='bg-green-400'>Chicken</div>
        <div></div>
      </section>
    </>
  );
}

export default App;
