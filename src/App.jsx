import WeightForm from './components/WeightForm.jsx';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx';
import BarbellPlates from './components/BarbellPlates.jsx';

function App() {

  const [weight, setWeight] = useState(0);
  const [barBell, setBarBell] = useState(false);

  const [count45, setCount45] = useState(0);
  const [count35, setCount35] = useState(0);
  const [count25, setCount25] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count2_5, setCount2_5] = useState(0);

  return (
    <div className='bg-blue-100'>
      <Navbar />
      <section className='grid grid-col-1 grid-rows-5 md:grid-rows-7 p-2 gap-2 bg-blue-100' style={{ height: "92vh" }}>

        <BarbellPlates weight={weight} barBell={barBell} />

        {weight > 0 && weight % 5 == 0 &&
          <Stats weight={weight} c45={count45} setC45={setCount45} c35={count35} setC35={setCount35} c25={count25} setC25={setCount25} c10={count10} setC10={setCount10} c5={count5} setC5={setCount5} c2_5={count2_5} setC2_5={setCount2_5} />
        }

        <WeightForm weight={weight} setWeight={setWeight} barBell={barBell} setBarBell={setBarBell} />

      </section>
    </div>
  );
}

export default App;