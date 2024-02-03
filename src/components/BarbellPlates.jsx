import React, { useEffect, useState } from 'react'
import BarBell from './svgs/BarBell.jsx'
import BasePlate45_35 from './svgs/BasePlate45_35.jsx'

function BarbellPlates(props) {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, []);

  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      <BasePlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} height={150} transform={"translate(28 0)"} />

      {width > 400 &&
        <BarBell width={300} />
      }

      <BasePlate45_35 color={"#DC2626"} transform={"scale(-1,1) translate(28 0)"} height={150} />
    </div>
  )
}

export default BarbellPlates
