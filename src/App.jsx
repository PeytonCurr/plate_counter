import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  const [weight, setWeight] = useState(0);

  function changeWeight(formData) {
    setWeight(formData.value)
  }

  return (
    <>
      <div className='bg-amber-50'>
        <Navbar></Navbar>
        <section className='grid grid-col-1 grid-rows-5' style={{ height: "92vh" }}>

          <div className='text-2xl p-2 justify-center bg-red-400 row-span-2'>Dumbbell + Plates Competent</div>

          <div className='bg-green-300'>Future Stats Component</div>

          <div className='flex justify-center items-center'>
            <form onSubmit={changeWeight} className=' bg-white rounded shadow-sm p-6 pt-4 w-2/3'>
              <div className='mb-2'> Enter Weight </div>
              <input value={weight} type="number" className="w-2/3 rounded p-1 px-2 border-2" />
              <button type='submit' className='ml-2 p-1 px-2 bg-slate-400 rounded'> Enter </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
