import React, { useEffect } from 'react'
import SmallBarBell from './svgs/SmallBarBell.jsx';

function Stats(props) {

  const plates = [45, 35, 25, 10, 5, 2.5];

  useEffect(() => {
    displayStats()
  }, [props.weight, props.single, props.barBell]);

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
    <div className={'bg-blue-300 rounded shadow grid p-2 sm:px-4 row-span-1 sm:row-span-2 ' + (props.single ? ' grid-cols-1 pb-3 md:pb-6 md:pt-4 stack items-center ' : ' grid-cols-2 ') + (props.barBell ? ' grid-cols-5 ' : ' md:row-span-5 md:grid-cols-1 gap-2 sm:gap-4 ') + ((!props.single && !props.barBell) && ' md:py-4 ')}>


      <div className={' bg-slate-700 py-2 h-full' + (props.barBell ? ' col-span-2 rounded-l pr-2 md:pr-6 ' : ' shadow rounded px-2 sm:px-6 ')}>
        {(!props.single && !props.barBell) &&
          <div className='absolute ps-1 sm:ps-0 sm:pt-1 ' >L</div>
        }
        <ul className={'flex h-full items-center ' + (props.barBell ? ' flex-row-reverse justify-start ' : ' justify-center ')}>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate} className='p-1 sm:p-2'>
                  <div className='text-center'>
                    <p
                      className={
                        'text-black border-2 rounded-full p-2 text-xs sm:text-base '
                        + (plate == 45 && ' px-2 sm:px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2 sm:px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2 sm:px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-2.5 sm:px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3 sm:px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-1.5 sm:px-2 border-gray-700 bg-gray-300 ')}>
                      {plate}
                    </p>
                    <p className='text-xs sm:text-base'> x </p>
                    <p className='text-xs sm:text-base'>
                      {props.counts[plate]}
                    </p>
                  </div>
                </li>
              }
            </>
          ))}
        </ul>
      </div>


      {props.barBell &&
        <div className='bg-slate-700 py-2 col-span-1 flex flex-col justify-center items-center text-center '>
          <div className='w-full my-3 tooltip tooltip-open' data-tip="45">
            <SmallBarBell />
          </div>
          <p className='text-xs sm:text-base'> x </p>
          <p className='text-xs sm:text-base'>1</p>
        </div>
      }


      <div className={' bg-slate-700 py-2 h-full ' + (props.single && ' w-[103%] ') + (props.barBell ? ' col-span-2 rounded-r pl-2 md:pl-6 ' : ' shadow rounded px-2 sm:px-6 ')}>
        {(!props.single && !props.barBell) &&
          <div className='absolute ps-1 sm:ps-0 sm:pt-1' >R</div>
        }
        <ul className={'flex h-full items-center ' + (props.barBell ? ' justify-start ' : ' justify-center ')}>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate} className='p-1 sm:p-2'>
                  <div className='text-center'>
                    <p
                      className={
                        'text-black border-2 rounded-full p-2 text-xs sm:text-base '
                        + (plate == 45 && ' px-2 sm:px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2 sm:px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2 sm:px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-2.5 sm:px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3 sm:px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-1.5 sm:px-2 border-gray-700 bg-gray-300 ')}>
                      {plate}
                    </p>
                    <p className='text-xs sm:text-base'> x </p>
                    <p className='text-xs sm:text-base'>
                      {props.counts[plate]}
                    </p>
                  </div>
                </li>
              }
            </>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default Stats
