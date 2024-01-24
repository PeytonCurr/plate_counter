import logo from './logo.svg';
import React from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <section className='grid grid-col-1 h-screen bg-amber-50'>

        <div className='text-2xl p-2 justify-center'>Dumbbell + Plates Competent</div>

        <div className=''>Future Stats Component</div>

        <div className=''>Enter Weight Component</div>

      </section>
    </>
  );
}

export default App;
