import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  const [weight, setWeight] = useState(0);

  function enterWeight() {

  }

  return (
    <>
      <div className='bg-amber-50'>
        <Navbar></Navbar>
        <section className='grid grid-col-1 grid-rows-5' style={{ height: "92vh" }}>

          <div className='text-2xl p-2 justify-center bg-red-400 row-span-2'>Dumbbell + Plates Competent</div>

          <div className='bg-green-300'>Future Stats Component</div>

          <div className='flex justify-center items-center'>
            <form onSubmit={enterWeight} className=' bg-white rounded shadow-sm p-6 pt-4 w-2/3'>
              <div className='text-center mb-2'> Enter Weight </div>
              <input type="number" className="w-full rounded p-1 px-2 border-2" />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
