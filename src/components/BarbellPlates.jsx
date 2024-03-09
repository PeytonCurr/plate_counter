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
  let isBrokenLeft = false
  let isBroken = false
  let currentBp = 0
  let countI = 0
  let countILeft = 0
  let prePlateLeft = {
    plate: 0,
    distance: 0
  }
  let prePlate = {
    plate: 0,
    distance: 0
  }
  let pastDistance = 0
  let pastDistanceLeft = 0

  let tempPlates = 0
  const [totalPlates, setTotalPlates] = useState(0)
  let timeout = null

  function handleResize() {
    tempPlates = 0
    if (props.barBell) {
      if (totalPlates > 0) {
        setTotalPlates(0)
      }
      return
    }
    else {
      if (window.innerWidth < 768) {
        setTotalPlates(0)
        return
      }

      plates.forEach(plate => {
        tempPlates += props.counts[plate]
      });

      if (window.innerWidth >= 1280) {
        setTotalPlates(2 * tempPlates)
      }
      else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
        setTotalPlates(1.5 * tempPlates)
      }
      else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setTotalPlates(tempPlates)
      }
    }
  }

  window.addEventListener('resize', () => {
    clearTimeout(timeout)
    timeout = setTimeout(handleResize, 50)
  })

  useEffect(() => {
    handleResize()
  }, [props.counts])

  return (
    <div className={'text-2xl p-2 bg-blue-300 rounded shadow flex justify-center ' + (props.barBell ? ' items-center ' : ' items-end md:items-center md:row-span-5 ') + ((props.weight > 0 && props.weight % 5 == 0) ? ' row-span-2 sm:row-span-3 ' : ' row-span-3 sm:row-span-5 md:col-span-2 ')}>

      {/* SECTION Left Side*/}
      {(props.weight > 0 && !props.single && props.weight % 5 == 0) &&
        <div className={`relative w-[6%] ` + (props.barBell ? ` ` : ` md:w-[12%] `)} style={{ top: `${totalPlates}vh` }}>

          {plates.map((plate) => {
            if (isBrokenLeft) {
              return
            }
            if (props.counts[plate] > 0) {
              isBrokenLeft = true
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
                  <SmartSVG name={name} color={" " + (color)} transform={" " + (props.barBell ? 'rotate(0)' : 'rotate(90)')} />
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
                startDistance = 2.4
              }
              else if (plate == 35) {
                name = AddPlate45_35
                color = '#2563eb'
                startDistance = 2.4
              }
              else if (plate == 25) {
                name = AddPlate45_35
                color = '#ca8a04'
                startDistance = 2.4
              }
              else if (plate == 10) {
                name = AddPlate10_5
                color = '#16a34a'
                countILeft = 0
                startDistance = 2.8
                pastDistanceLeft = prePlateLeft.distance
                if (!prePlateLeft.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 2.8
                  }
                  else if (currentBp == 10) {
                    startDistance = 1.3
                  }
                }
              }
              else if (plate == 5) {
                name = AddPlate10_5
                color = '#3f3f46'
                if (prePlateLeft.plate == 45 || prePlateLeft.plate == 35 || prePlateLeft.plate == 25) {
                  countILeft = 0
                  startDistance = 2.8
                  pastDistanceLeft = prePlateLeft.distance
                }
                else if (prePlateLeft.plate == 10) {
                  countILeft = 0
                  startDistance = 1.5
                  pastDistanceLeft = prePlateLeft.distance
                }
                if (!prePlateLeft.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 2.8
                  }
                  else if (currentBp == 10) {
                    startDistance = 1.3
                  }
                }
              }
              else if (plate == 2.5) {
                name = AddPlate2_5
                color = '#a1a1aa'
                if (prePlateLeft.plate == 45 || prePlateLeft.plate == 35 || prePlateLeft.plate == 25) {
                  countILeft = 0
                  startDistance = 3.9
                  pastDistanceLeft = prePlateLeft.distance
                }
                else if (prePlateLeft.plate == 10 || prePlateLeft.plate == 5) {
                  countILeft = 0
                  startDistance = 2.5
                  pastDistanceLeft = prePlateLeft.distance
                }
                if (!prePlateLeft.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 3.9
                  }
                  else if (currentBp == 10 || currentBp == 5) {
                    startDistance = 2.5
                  }
                }
              }
            }

            return (
              <>
                {Array(addPlates).fill(0).map((v) => {

                  countILeft += 1

                  if (countILeft > 1) {
                    if (plate == 45 || plate == 35 || plate == 25) {
                      innerDistance = 2.4
                    }
                    if (plate == 10 || plate == 5) {
                      innerDistance = 1.5
                    }
                  }

                  if (props.counts[plate] > 0) {
                    prePlateLeft = {
                      plate: plate,
                      distance: pastDistanceLeft + startDistance + (innerDistance * (countILeft - 1))
                    }
                  }

                  return (
                    <>
                      {props.barBell ?
                        <div className={'w-full absolute bottom-0'} style={{ right: `${pastDistanceLeft + startDistance + (innerDistance * (countILeft - 1))}vw` }} >
                          <SmartSVG name={name} color={" " + (color)} />
                        </div>
                        :
                        <div className={'w-full absolute'} style={{ bottom: `${pastDistanceLeft + startDistance + (innerDistance * (countILeft - 1))}vw` }} >
                          <SmartSVG name={name} color={" " + (color)} transform={" " + (props.barBell ? 'rotate(0)' : 'rotate(90)')} />
                        </div>
                      }
                    </>
                  )
                }
                )}
              </>
            )
          }
          )}

        </div>
      }

      {/* SECTION BarBell*/}
      {(props.weight >= 45 && props.barBell) &&
        <div className='w-1/3'><BarBell /></div>
      }
      {(!props.barBell && !props.single) &&
        <div className='w-1/3'></div>
      }

      {/* SECTION Right Side*/}
      {(props.weight > 0 && props.weight % 5 == 0) &&
        <div className={`relative w-[6%] ` + (props.barBell ? ` ` : ` md:w-[12%] `)} style={{ top: `${totalPlates}vh` }}>

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
                  <SmartSVG name={name} color={" " + (color)} transform={"scale(-1,1) translate(0 0) " + (props.barBell ? 'rotate(0)' : 'rotate(90)')} />
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
                startDistance = 2.4
              }
              else if (plate == 35) {
                name = AddPlate45_35
                color = '#2563eb'
                startDistance = 2.4
              }
              else if (plate == 25) {
                name = AddPlate45_35
                color = '#ca8a04'
                startDistance = 2.4
              }
              else if (plate == 10) {
                name = AddPlate10_5
                color = '#16a34a'
                countI = 0
                startDistance = 2.8
                pastDistance = prePlate.distance
                if (!prePlate.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 2.8
                  }
                  else if (currentBp == 10) {
                    startDistance = 1.3
                  }
                }
              }
              else if (plate == 5) {
                name = AddPlate10_5
                color = '#3f3f46'
                if (prePlate.plate == 45 || prePlate.plate == 35 || prePlate.plate == 25) {
                  countI = 0
                  startDistance = 2.8
                  pastDistance = prePlate.distance
                }
                else if (prePlate.plate == 10) {
                  countI = 0
                  startDistance = 1.5
                  pastDistance = prePlate.distance
                }
                if (!prePlate.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 2.8
                  }
                  else if (currentBp == 10) {
                    startDistance = 1.3
                  }
                }
              }
              else if (plate == 2.5) {
                name = AddPlate2_5
                color = '#a1a1aa'
                if (prePlate.plate == 45 || prePlate.plate == 35 || prePlate.plate == 25) {
                  countI = 0
                  startDistance = 3.9
                  pastDistance = prePlate.distance
                }
                else if (prePlate.plate == 10 || prePlate.plate == 5) {
                  countI = 0
                  startDistance = 2.5
                  pastDistance = prePlate.distance
                }
                if (!prePlate.plate) {
                  if (currentBp == 45 || currentBp == 35 || currentBp == 25) {
                    startDistance = 3.9
                  }
                  else if (currentBp == 10 || currentBp == 5) {
                    startDistance = 2.5
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
                      innerDistance = 2.4
                    }
                    if (plate == 10 || plate == 5) {
                      innerDistance = 1.5
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
                      {props.barBell ?
                        <div className={'w-full absolute bottom-0'} style={{ left: `${pastDistance + startDistance + (innerDistance * (countI - 1))}vw` }} >
                          <SmartSVG name={name} color={" " + (color)} transform={`scale(-1,1)`} />
                        </div>
                        :
                        <div className={'w-full absolute'} style={{ bottom: `${pastDistance + startDistance + (innerDistance * (countI - 1))}vw` }} >
                          <SmartSVG name={name} color={" " + (color)} transform={`rotate(-90) scale(-1,1)`} />
                        </div>
                      }
                    </>
                  )
                }
                )}
              </>
            )
          }
          )}

        </div>
      }
    </div >
  )
}

export default BarbellPlates
