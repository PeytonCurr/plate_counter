import React, { useEffect, useState } from 'react'
import BarBell from './svgs/BarBell.jsx'
import BasePlate45_35 from './svgs/BasePlate45_35.jsx'
import BasePlate10_5 from './svgs/BasePlate10_5.jsx'
import BasePlate2_5 from './svgs/BasePlate2_5.jsx'
import AddPlate45_35 from './svgs/AddPlate45_35.jsx'
import EndBar from './svgs/EndBar.jsx'
import SmartSVG from './SmartSVG.jsx'


function BarbellPlates(props) {
  let name = BasePlate45_35

  let isBroken = false
  let countI = 0

  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      <div className='w-1/12'>
        <BasePlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"translate(0 0)"} />
      </div>

      <div className='w-1/2'><BarBell /></div>

      <div className='w-1/12 relative'>

        {Object.entries(props.counts).map(([plate, value]) => {
          if (isBroken) {
            return
          }
          if (value > 0) {
            isBroken = true

            if (plate == '45' || plate == '35' || plate == '25') {
              name = BasePlate45_35
            }
            else if (plate == '10' || plate == '5') {
              name = BasePlate10_5
            }
            else if (plate == '2.5') {
              name = BasePlate2_5
            }
            return (
              <>
                <SmartSVG name={name} color={" " + (props.counts[plate] > 0 && '#DC2626')} transform={"scale(-1,1) translate(0 0)"} />
              </>
            )
          }

        }
        )}

        {Object.entries(props.counts).map(([plate, value]) => {
          countI = 0
          return (
            <>
              {Array(value).fill(0 + 1, 0, value).map((v) => {

                countI += 1

                return (
                  <>

                    <div className={'w-full absolute bottom-0 ' + (`left-[${42 * countI}%]`)} >
                      <AddPlate45_35 color={" " + (props.counts[plate] > 0 && '#DC2626')} transform={`scale(-1,1)`} />
                    </div>

                  </>
                )
              }
              )}
            </>
          )
        }
        )}

      </div>

    </div >
  )
}

export default BarbellPlates
