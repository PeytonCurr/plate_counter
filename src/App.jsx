import WeightForm from './components/WeightForm.jsx';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx';
import BarbellPlates from './components/BarbellPlates.jsx';

function App() {

  const [weight, setWeight] = useState(0);
  const [barBell, setBarBell] = useState(false);

  return (
    <div className='bg-blue-100'>
      <Navbar />
      <section className='grid grid-col-1 grid-rows-5 p-2 gap-2 bg-blue-100' style={{ height: "92vh" }}>

        <BarbellPlates weight={weight} />

        {weight > 0 && weight % 5 == 0 &&
          <Stats />
        }

        <WeightForm weight={weight} setWeight={setWeight} barBell={barBell} setBarBell={setBarBell} />

      </section>
    </div>
  );
}

export default App;