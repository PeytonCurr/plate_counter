import React, { useEffect } from 'react'

function Stats(props) {

  const plates = [45, 35, 25, 10, 5, 2.5];

  useEffect(() => {
    displayStats()
  }, [props.weight, props.single, props.barbell]);

  function displayStats() {
    let weight = props.weight
    if (!props.single) {
      weight = weight / 2
    }

    let plateCounter = {}

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
    <div className={'bg-blue-300 rounded shadow grid  p-2 px-4 gap-4 row-span-1 md:row-span-2 ' + (props.single ? 'grid-cols-1' : 'grid-cols-2')}>

      <div className=' bg-blue-50 rounded shadow p-6 py-2'>
        <ul className='flex h-full justify-center items-center'>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate} className='p-2'>
                  <div className='text-center'>
                    <p
                      className={
                        'border-2 rounded-full p-2 '
                        + (plate == 45 && ' px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-2 border-gray-700 bg-gray-300 ')}>
                      {plate}
                    </p>
                    <p className=''> x </p>
                    <p className=''>
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
                  <li key={plate} className='p-2'>
                    <div className='text-center'>
                      <p
                        className={
                          'border-2 rounded-full p-2 '
                          + (plate == 45 && ' px-2.5 border-red-600 bg-red-100 ') + (plate == 35 && ' px-2.5 border-blue-600 bg-blue-100 ') + (plate == 25 && ' px-2.5 border-yellow-600 bg-yellow-100 ') + (plate == 10 && ' px-3 border-green-600 bg-green-100 ') + (plate == 5 && ' px-3.5 border-zinc-950 bg-zinc-400 ') + (plate == 2.5 && ' px-2 border-gray-700 bg-gray-300 ')}>
                        {plate}
                      </p>
                      <p className=''> x </p>
                      <p className=''>
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
