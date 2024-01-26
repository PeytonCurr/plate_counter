import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  const [weight, setWeight] = useState(0);


  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setWeight(event.target.value)
    console.log(weight)
  }


  return (
    <>
      <div className='bg-blue-100'>
        <Navbar></Navbar>
        <section className='grid grid-col-1 grid-rows-5 p-2 gap-2 bg-blue-100' style={{ height: "92vh" }}>

          <div className='text-2xl p-2 justify-center bg-blue-300 row-span-2 rounded'>Dumbbell + Plates Competent</div>

          <div className='bg-blue-300 rounded'>Future Stats Component</div>

          <div className='flex justify-center items-center rounded bg-blue-300'>
            <form onSubmit={handleSubmit} className=' bg-white rounded shadow-sm p-6 pt-4 w-2/3'>
              <div className='text-center mb-2'> Enter Weight: {weight} </div>
              <div className='flex justify-center'>
                <input value={weight || ""} type="number" step={5} max={1000} onChange={handleChange} className="text-center w-3/4 rounded p-1 px-2 border-2" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
