import React, { useEffect } from 'react'

function Stats(props) {


  useEffect(() => {
    let weight = props.weight / 2
    let plates = [45, 35, 25, 10, 5, "2_5"]
    let plateCounter = {}

    props.setC45(0)
    props.setC35(0)
    props.setC25(0)
    props.setC10(0)
    props.setC5(0)
    props.setC2_5(0)

    plates.forEach((plate) => {
      const interFunction = `props.setC${plate}`
      if (plate == "2_5") {
        plate = 2.5
      }
      plateCounter[plate] = 0
      while (weight >= plate) {
        plateCounter[plate] += 1
        weight -= plate
      }
      if (plateCounter[plate] > 0) {
        eval(interFunction + `(${plateCounter[plate]})`)
      }
    })
  }, [props.weight]);

  const plates = [45, 35, 25, 10, 5, 2.5];

  return (
    <div className='bg-blue-300 rounded shadow grid grid-cols-2 p-2 px-4 gap-4 row-span-1 md:row-span-2'>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>

        <ul>
          {plates.map((plate) => (
            <li key={plate}> {plate} - <span className='underline'>
              {eval(`props.c${plate}`)} </span></li>
          ))}
        </ul>

      </div>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <h1>45 - <span className='underline'>{props.c45}</span></h1>
        <h1>35 - <span className='underline'>{props.c35}</span></h1>
        <h1>25 - <span className='underline'>{props.c25}</span></h1>
        <h1>10 - <span className='underline'>{props.c10}</span></h1>
        <h1>5 - <span className='underline'>{props.c5}</span></h1>
        <h1>2.5 - <span className='underline'>{props.c2_5}</span></h1>
      </div>

    </div>
  )
}

export default Stats
