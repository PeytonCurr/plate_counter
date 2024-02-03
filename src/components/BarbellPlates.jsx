import React, { useEffect, useState } from 'react'
import BarBell from './svgs/BarBell.jsx'
import BasePlate45_35 from './svgs/BasePlate45_35.jsx'
import AddPlate45_35 from './svgs/AddPlate45_35.jsx'
import EndBar from './svgs/EndBar.jsx'
import SmartSVG from './SmartSVG.jsx'


function BarbellPlates(props) {
  const plates = [45, 35, 25, 10, 5, 2.5];

  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      <div className='w-1/12'>
        <BasePlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"translate(0 0)"} />
      </div>

      {Object.entries(props.counts).map(([plate, value]) => (Array(value).fill(0).map(() => (
        <>

        </>
      )))
      )}

      <div className='w-1/2'><BarBell /></div>

      <div className='w-1/12 relative'>

        <SmartSVG name={BasePlate45_35} color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"scale(-1,1) translate(0 0)"} />

        <div className='w-full absolute left-[42%] bottom-0'>
          <AddPlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={`scale(-1,1)`} />
        </div>

        <div className={'w-full absolute bottom-0 left-[84%]'}>
          <AddPlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={`scale(-1,1)`} />
        </div>

      </div>

    </div >
  )
}

export default BarbellPlates
