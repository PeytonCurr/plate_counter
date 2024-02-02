import React from 'react'
import BarBellSVG from './svgs/BarBellSVG.jsx'
import BasePlate45_35SVG from './svgs/BasePlate45_35SVG.jsx'

function BarbellPlates(props) {
  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      <BasePlate45_35SVG color={" " + (props.counts[45] > 0 && '#DC2626')} height={150} transform={"translate(28 0)"} />
      <BarBellSVG width={300} />
      <BasePlate45_35SVG color={"#DC2626"} transform={"scale(-1,1) translate(28 0)"} height={150} />
    </div>
  )
}

export default BarbellPlates
