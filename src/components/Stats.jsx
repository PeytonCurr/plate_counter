import React, { useEffect } from 'react'

function Stats(props) {

  const plates = [45, 35, 25, 10, 5, 2.5];

  useEffect(() => {
    displayStats()
  }, [props.weight]);

  function displayStats() {
    let weight = props.weight / 2
    props.resetCounts()
    plates.forEach((plate) => {
      while (weight >= plate) {
        props.setCounts({ ...props.counts, [plate]: props.counts[plate] + 1 })
        weight -= plate
      }
    })
  }

  return (
    <div className='bg-blue-300 rounded shadow grid grid-cols-2 p-2 px-4 gap-4 row-span-1 md:row-span-2'>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <ul>
          {plates.map((plate) => (
            <li key={plate}> {plate} -
              <span className='underline'>
                {props.counts[plate]}
              </span></li>
          ))}
        </ul>
      </div>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <ul>
          {plates.map((plate) => (
            <li key={plate}> {plate} -
              <span className='underline'>
                {props.counts[plate]}
              </span></li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Stats
