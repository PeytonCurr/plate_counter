import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  const [weight, setWeight] = useState(0);

  function enterWeight() {

  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <section className='grid grid-col-1 h-screen bg-amber-50'>

          <div className='text-2xl p-2 justify-center'>Dumbbell + Plates Competent</div>

          <div className=''>Future Stats Component</div>

          <div className='flex justify-center items-center'>
            <form onSubmit={enterWeight} className='w-1/3'>
              <div> Check me out </div>
              <input type="number" className="w-2/3" />
              <button type='submit'> Enter </button>
            </form>
          </div>

        </section>
      </div>
    </>
  );
}

export default App;
