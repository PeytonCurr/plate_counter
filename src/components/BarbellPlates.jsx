import React from 'react'
import BarBellSVG from './svgs/BarBellSVG.jsx'
import BasePlate45_35SVG from './svgs/BasePlate45_35SVG.jsx'

function BarbellPlates(props) {
  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>
      <BasePlate45_35SVG height={200} transform={"translate(18 0)"} />
      <BarBellSVG width={450} />
      <BasePlate45_35SVG transform={"scale(-1,1) translate(18 0)"} height={200} />
    </div>
  )
}

export default BarbellPlates
