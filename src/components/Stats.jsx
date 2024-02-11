import React, { useEffect } from 'react'

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
    <div className={'bg-blue-300 rounded shadow grid  p-2 sm:px-4 gap-2 sm:gap-4 row-span-1 ' + (props.single ? ' grid-cols-1 md:p-10 ' : ' grid-cols-2 ') + (props.barBell ? ' md:row-span-2 ' : ' md:row-span-5 md:grid-cols-1 ')}>

      <div className=' bg-blue-50 rounded shadow p-6 py-2'>
        <ul className='flex h-full justify-center items-center'>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate} className='p-1 sm:p-2'>
                  <div className='text-center'>
                    <p
                      className={
                        'border-2 rounded-full p-2 text-xs sm:text-base '
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

      {!props.single &&
        <div className=' bg-blue-50 rounded shadow p-6 py-2'>
          <ul className='flex h-full justify-center items-center'>
            {plates.map((plate) => (
              <>
                {props.counts[plate] > 0 &&
                  <li key={plate} className='p-1 sm:p-2'>
                    <div className='text-center'>
                      <p
                        className={
                          'border-2 rounded-full p-2 text-xs sm:text-base '
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
      }

    </div>
  )
}

export default Stats
