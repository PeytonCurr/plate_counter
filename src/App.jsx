import WeightForm from './components/WeightForm.jsx';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx';
import BarbellPlates from './components/BarbellPlates.jsx';

function App() {

  const [weight, setWeight] = useState(0);
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
    <div className='bg-blue-100'>
      <Navbar />
      <section className='grid grid-col-1 grid-rows-5 md:grid-rows-7 p-2 gap-2 bg-blue-100' style={{ height: "92vh" }}>

        <BarbellPlates weight={weight} barBell={barBell} />

        {weight > 0 && weight % 5 == 0 &&
          <Stats weight={weight} counts={counts} resetCounts={resetCounts} />
        }

        <WeightForm weight={weight} setWeight={setWeight} barBell={barBell} setBarBell={setBarBell} />

      </section>
    </div>
  );
}

export default App;