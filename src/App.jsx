import WeightForm from './components/WeightForm.jsx';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx';
import BarbellPlates from './components/BarbellPlates.jsx';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [weight, setWeight] = useState(0);
  const [single, setSingle] = useState(false)
  const [barBell, setBarBell] = useState(false);

  const [counts, setCounts] = useState({
    45: 0,
    35: 0,
    25: 0,
    10: 0,
    5: 0,
    2.5: 0,
  });

  function resetCounts() {
    setCounts({
      45: 0,
      35: 0,
      25: 0,
      10: 0,
      5: 0,
      2.5: 0,
    })
  }

  return (
    <div className='bg-blue-100 text-black'>
      <Navbar />
      <section className={'grid grid-cols-1 grid-rows-5 sm:grid-rows-7 p-2 gap-2 bg-blue-100 ' + (!barBell && 'md:grid-cols-2')} style={{ height: "92vh" }}>

        <BarbellPlates weight={weight} barBell={barBell} counts={counts} single={single} />

        {(weight > 0 && weight % 5 == 0) &&
          <Stats weight={weight} counts={counts} setCounts={setCounts} resetCounts={resetCounts} barBell={barBell} single={single} />
        }

        <WeightForm weight={weight} setWeight={setWeight} barBell={barBell} setBarBell={setBarBell} single={single} setSingle={setSingle} />

      </section>
      <Toaster gutter={8} toastOptions={{
        style: {
          background: ''
        }
      }} containerStyle={{ top: '5px' }} containerClassName="" />

    </div >
  );
}

export default App;