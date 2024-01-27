import WeightForm from './components/weightForm.jsx';
import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'

function App() {

  const [weight, setWeight] = useState(0);
  const [barBell, setBarBell] = useState(false);

  return (
    <>
      <div className='bg-blue-100'>
        <Navbar></Navbar>
        <section className='grid grid-col-1 grid-rows-5 p-2 gap-2 bg-blue-100' style={{ height: "92vh" }}>

          <div className='text-2xl p-2 justify-center bg-blue-300 row-span-2 rounded shadow'>Dumbbell + Plates Competent</div>

          {weight > 0 && weight % 5 == 0 &&
            <div className='bg-blue-300 rounded shadow'>Future Stats Component</div>
          }

          <WeightForm weight={weight} setWeight={setWeight} barBell={barBell} setBarBell={setBarBell} />

        </section>
      </div>
    </>
  );
}

export default App;