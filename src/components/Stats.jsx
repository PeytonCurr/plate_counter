import React, { useEffect } from 'react'

function Stats(props) {

  const plates = [45, 35, 25, 10, 5, 2.5];

  useEffect(() => {
    displayStats()
  }, [props.weight]);

  function displayStats() {
    let weight = props.weight / 2
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
    <div className='bg-blue-300 rounded shadow grid grid-cols-2 p-2 px-4 gap-4 row-span-1 md:row-span-2'>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <ul>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate}> {plate} -
                  <span className='underline'>
                    {props.counts[plate]}
                  </span></li>
              }
            </>
          ))}
        </ul>
      </div>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <ul>
          {plates.map((plate) => (
            <>
              {props.counts[plate] > 0 &&
                <li key={plate}> {plate} -
                  <span className='underline'>
                    {props.counts[plate]}
                  </span></li>
              }
            </>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Stats
