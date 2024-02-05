import React, { useEffect, useState } from 'react'
import BarBell from './svgs/BarBell.jsx'
import BasePlate45_35 from './svgs/BasePlate45_35.jsx'
import BasePlate10_5 from './svgs/BasePlate10_5.jsx'
import BasePlate2_5 from './svgs/BasePlate2_5.jsx'
import AddPlate45_35 from './svgs/AddPlate45_35.jsx'
import AddPlate10_5 from './svgs/AddPlate10_5.jsx'
import AddPlate2_5 from './svgs/AddPlate2_5.jsx'
import EndBar from './svgs/EndBar.jsx'
import SmartSVG from './SmartSVG.jsx'


function BarbellPlates(props) {
  let name = BasePlate45_35
  let color = ''
  const plates = [45, 35, 25, 10, 5, 2.5]
  let isBroken = false
  let currentBp = 0
  let countI = 0
  let prePlate = {
    plate: 0,
    distance: 0
  }
  let pastDistance = 0

  return (
    <div className='text-2xl p-2 bg-blue-300 row-span-2 md:row-span-3 rounded shadow flex justify-center items-center'>

      {/* SECTION Left Side*/}
      <div className='w-1/12 relative'>
        <BasePlate45_35 color={" " + (props.counts[45] > 0 && '#DC2626')} transform={"translate(0 0)"} />
      </div>

      {/* SECTION BarBell*/}
      <div className='w-1/2'><BarBell /></div>

      {/* SECTION Right Side*/}
      <div className='w-1/12 relative'>

        {plates.map((plate) => {
          if (isBroken) {
            return
          }
          if (props.counts[plate] > 0) {
            isBroken = true
            currentBp = plate

            if (plate == 45) {
              name = BasePlate45_35
              color = '#DC2626'
            }
            else if (plate == 35) {
              name = BasePlate45_35
              color = '#2563eb'
            }
            else if (plate == 25) {
              name = BasePlate45_35
              color = '#ca8a04'
            }
            else if (plate == 10) {
              name = BasePlate10_5
              color = '#16a34a'
            }
            else if (plate == 5) {
              name = BasePlate10_5
              color = '#3f3f46'
            }
            else if (plate == 2.5) {
              name = BasePlate2_5
              color = '#a1a1aa'
            }
            return (
              <>
                <SmartSVG name={name} color={" " + (color)} transform={"scale(-1,1) translate(0 0)"} />
              </>
            )
          }
        })}

        {plates.map((plate) => {
          let addPlates = props.counts[plate]
          if (addPlates > 0 && plate == currentBp) {
            addPlates -= 1
          }
          let innerDistance = 0
          let startDistance = 0
          if (addPlates > 0) {
            if (plate == 45) {
              name = AddPlate45_35
              color = '#DC2626'
              startDistance = 3.3
            }
            else if (plate == 35) {
              name = AddPlate45_35
              color = '#2563eb'
              startDistance = 3.3
            }
            else if (plate == 25) {
              name = AddPlate45_35
              color = '#ca8a04'
              startDistance = 3.3
            }
            else if (plate == 10) {
              name = AddPlate10_5
              color = '#16a34a'
              countI = 0
              startDistance = 3.5
              pastDistance = prePlate.distance
              if (!prePlate.plate) {
                if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                  startDistance = 3.8
                }
                else if (currentBp == 10) {
                  startDistance = 1.8
                }
              }
            }
            else if (plate == 5) {
              name = AddPlate10_5
              color = '#3f3f46'
              if (prePlate.plate == 45 || prePlate.plate == 35 || prePlate.plate == 25) {
                countI = 0
                startDistance = 3.5
                pastDistance = prePlate.distance
              }
              else if (prePlate.plate == 10) {
                countI = 0
                startDistance = 2.1
                pastDistance = prePlate.distance
              }
              if (!prePlate.plate) {
                if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                  startDistance = 3.8
                }
                else if (currentBp == 10) {
                  startDistance = 1.8
                }
              }
            }
            else if (plate == 2.5) {
              name = AddPlate2_5
              color = '#a1a1aa'
              if (prePlate.plate == 45 || prePlate.plate == 35 || prePlate.plate == 25) {
                countI = 0
                startDistance = 5.4
                pastDistance = prePlate.distance
              }
              else if (prePlate.plate == 10 || prePlate.plate == 5) {
                countI = 0
                startDistance = 3.5
                pastDistance = prePlate.distance
              }
              if (!prePlate.plate) {
                if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                  startDistance = 5.4
                }
                else if (currentBp == 10 || currentBp == 5) {
                  startDistance = 3.5
                }
              }
            }
          }

          return (
            <>
              {Array(addPlates).fill(0).map((v) => {

                countI += 1

                if (countI > 1) {
                  if (plate == 45 || plate == 35 || plate == 25) {
                    innerDistance = 3.3
                  }
                  if (plate == 10 || plate == 5) {
                    innerDistance = 2.1
                  }
                  if (plate == 2.5) {
                    innerDistance = 2.1
                  }
                }

                if (props.counts[plate] > 0) {
                  prePlate = {
                    plate: plate,
                    distance: pastDistance + startDistance + (innerDistance * (countI - 1))
                  }
                }

                return (
                  <>

                    <div className={'w-full absolute bottom-0'} style={{ left: `${pastDistance + startDistance + (innerDistance * (countI - 1))}vw` }} >
                      <SmartSVG name={name} color={" " + (color)} transform={`scale(-1,1)`} />
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
