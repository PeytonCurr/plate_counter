import React, { useEffect, useState } from 'react'
import BarBell from './svgs/BarBell.jsx'
import BasePlate45_35 from './svgs/BasePlate45_35.jsx'
import AddPlate45_35 from './svgs/AddPlate45_35.jsx'
import EndBar from './svgs/EndBar.jsx'
import SmartSVG from './SmartSVG.jsx'


function BarbellPlates(props) {
  const plates = [45, 35, 25, 10, 5, 2.5];
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, []);

  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      <AddPlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} height={150} transform={`translate(${12 * props.counts[45]} 0)`} />

      <AddPlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} height={150} transform={`translate(${12 * props.counts[45]} 0)`} />

      <div className='w-1/12'>
        <BasePlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"translate(0 0)"} />
      </div>

      {plates.map((plate) => (
        <>
          {props.counts[plate] > 0 &&
            <div></div>
          }
        </>
      ))}


      <div className='w-[300px] md:w-[300px]'><BarBell /></div>

      <SmartSVG name={BasePlate45_35} color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"translate(0 0)"} />

      <div className='w-1/6'>
        <BasePlate45_35 color={"#DC2626"} transform={"scale(-1,1) translate(0 0)"} />
      </div>

    </div>
  )
}

export default BarbellPlates
