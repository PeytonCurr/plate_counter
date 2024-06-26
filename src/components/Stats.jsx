import React, { useEffect, useState } from 'react'
import SmallBarBell from './svgs/SmallBarBell.jsx';

function Stats(props) {

  const plates = [45, 35, 25, 10, 5, 2.5];
  const [shrunkPlateCount, setShrunkPlateCount] = useState(0)

  useEffect(() => {
    displayStats()
  }, [props.weight, props.single, props.barBell]);

  useEffect(() => {
    setShrunkPlateCount(plates.filter(plate => props.counts[plate] > 0).length)
  }, [props.counts]);

  function displayStats() {
    let plateCounter = {}
    let weight = props.weight
    if (props.barBell) {
      weight = weight - 45
    }
    if (!props.single) {
      weight = weight / 2
    }

    props.resetCounts()

    plates.forEach((plate) => {
      plateCounter[plate] = 0
      while (weight >= plate) {
        plateCounter[plate] += 1
        weight -= plate
      }
    })
    props.setCounts({ ...props.counts, ...plateCounter })
  }

  return (
    <div className={'bg-blue-300 rounded shadow grid p-2 sm:px-4 row-span-2 ' + (props.single ? ' grid-cols-1 pb-3 md:pb-6 md:pt-4 stack items-center ' : ' grid-cols-2 ') + (props.barBell ? ' grid-cols-5 ' : ' md:row-span-5 md:grid-cols-1 gap-2 sm:gap-4 ') + ((!props.single && !props.barBell) && ' md:py-4 ')}>


      <div className={' bg-slate-700 py-2 h-full' + (props.barBell ? ' col-span-2 rounded-l pr-2 md:pr-6 ' : ' shadow rounded px-2 sm:px-6 ')}>
        {(!props.single && !props.barBell) &&
          <div className='absolute xs:ps-1 sm:pt-1 text-xs xs:text-base ' >L</div>
        }
        <ul className={'h-full items-center sm:flex grid-cols-2 grid-flow-dense ' + (props.barBell ? ' flex-row-reverse justify-start ' : ' justify-center ') + (((shrunkPlateCount < 3 && !props.barBell) || props.single) ? ' flex ' : ' grid ')}>
          {plates.filter(plate => props.counts[plate] > 0).map((plate, index) => (
            <li key={plate} className={'p-1 sm:p-2 flex ' + ((props.barBell && (index == 1 || index == 3)) && ' justify-end col-start-1 ') + ((props.barBell && (index == 0 || index == 2)) && ' justify-center col-start-2 ') + ((!props.barBell && (index == 1 || index == 3)) && ' col-start-1 justify-end ') + ((!props.barBell && (index == 0 || index == 2)) && ' col-start-2 justify-start ')}>
              <div className={'text-center w-fit sm:w-full flex flex-row-reverse sm:flex-col items-center justify-start ' + (((shrunkPlateCount < 3 && !props.barBell) || props.single) ? ' w-full flex-col ' : '  ')}>
                <div className={'w-1/2 sm:w-auto flex justify-start ' + (((shrunkPlateCount < 3 && !props.barBell) || props.single) ? ' w-auto ' : '  ')}>
                  <div
                    className={
                      'text-black border-2 rounded-full p-2 text-xs sm:text-base w-min '
                      + (plate == 45 && ' px-2 sm:px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2 sm:px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2 sm:px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-2.5 sm:px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3 sm:px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-1.5 sm:px-2 border-gray-700 bg-gray-300 ')}>
                    {plate}
                  </div>
                </div>
                <p className='text-xs sm:text-base p-0.5 xxs:p-1 xs:1.5 sm:p-0'> x </p>
                <p className='text-xs sm:text-base'>
                  {props.counts[plate]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>


      {props.barBell &&
        <div className='bg-slate-700 py-2 col-span-1 flex flex-col justify-center items-center text-center '>
          <div className='w-full my-3 tooltip tooltip-open' data-tip="45">
            <SmallBarBell />
          </div>
          <p className='hidden sm:block text-xs sm:text-base'> x </p>
          <p className='hidden sm:block text-xs sm:text-base'>1</p>
        </div>
      }


      <div className={' bg-slate-700 py-2 h-full ' + (props.single && ' w-[103%] ') + (props.barBell ? ' col-span-2 rounded-r pl-2 md:pl-6 ' : ' shadow rounded px-2 sm:px-6 ')}>
        {(!props.single && !props.barBell) &&
          <div className='absolute xs:ps-1 sm:pt-1 text-xs xs:text-base' >R</div>
        }
        <ul className={'h-full items-center sm:flex grid-cols-2 ' + (props.barBell ? ' justify-start ' : ' justify-center ') + ((shrunkPlateCount < 3 && !props.barBell) ? ' flex ' : ' grid ')}>
          {plates.filter(plate => props.counts[plate] > 0).map((plate, index) => (
            <li key={plate} className={'p-1 sm:p-2 flex ' + ((props.barBell && (index == 1 || index == 3)) && ' justify-start ') + ((props.barBell && (index == 0 || index == 2)) && ' justify-center ') + ((!props.barBell && (index == 1 || index == 3)) && ' justify-start ') + ((!props.barBell && (index == 0 || index == 2)) && ' justify-end ')}>
              <div className={'text-center w-fit-content sm:w-full flex sm:flex-col items-center ' + ((shrunkPlateCount < 3 && !props.barBell) ? ' w-full flex-col ' : '  ')}>
                <div className={'w-1/2 sm:w-auto flex justify-end ' + ((shrunkPlateCount < 3 && !props.barBell) ? ' w-auto ' : '  ')}>
                  <p
                    className={
                      'text-black border-2 rounded-full p-2 text-xs sm:text-base w-min '
                      + (plate == 45 && ' px-2 sm:px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2 sm:px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2 sm:px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-2.5 sm:px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3 sm:px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-1.5 sm:px-2 border-gray-700 bg-gray-300 ')}>
                    {plate}
                  </p>
                </div>
                <p className='text-xs sm:text-base p-0.5 xxs:p-1 xs:1.5 sm:p-0'> x </p>
                <p className='text-xs sm:text-base'>
                  {props.counts[plate]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default Stats
