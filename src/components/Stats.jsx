import React, { useEffect, useState } from 'react'

function Stats(props) {

  const [count45, setCount45] = useState(0);
  const [count35, setCount35] = useState(0);
  const [count25, setCount25] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count2_5, setCount2_5] = useState(0);


  useEffect(() => {
    let weight = props.weight / 2
    let plates = [45, 35, 25, 10, 5, 2_5]
    let plateCounter = {}

    setCount45(0)
    setCount35(0)
    setCount25(0)
    setCount10(0)
    setCount5(0)
    setCount2_5(0)

    plates.forEach((plate) => {
      const interFunction = `setCount${plate}`
      if (plate == 2_5) {
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

  return (
    <div className='bg-blue-300 rounded shadow grid grid-cols-2 p-2 px-4 gap-4 row-span-1 md:row-span-2'>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <h1>45 - <span className='underline'>{count45}</span></h1>
        <h1>35 - <span className='underline'>{count35}</span></h1>
        <h1>25 - <span className='underline'>{count25}</span></h1>
        <h1>10 - <span className='underline'>{count10}</span></h1>
        <h1>5 - <span className='underline'>{count5}</span></h1>
        <h1>2.5 - <span className='underline'>{count2_5}</span></h1>
      </div>

      <div className=' bg-blue-50 rounded shadow p-6 pt-4'>
        <h1>45 - <span className='underline'>{count45}</span></h1>
        <h1>35 - <span className='underline'>{count35}</span></h1>
        <h1>25 - <span className='underline'>{count25}</span></h1>
        <h1>10 - <span className='underline'>{count10}</span></h1>
        <h1>5 - <span className='underline'>{count5}</span></h1>
        <h1>2.5 - <span className='underline'>{count2_5}</span></h1>
      </div>

    </div>
  )
}

export default Stats
