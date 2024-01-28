import React, { useEffect, useState } from 'react'

function Stats(props) {

  const [newWeight, setNewWeight] = useState(0);
  const [count45, setCount45] = useState(0);
  const [count35, setCount35] = useState(0);
  const [count25, setCount25] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count2_5, setCount2_5] = useState(0);


  useEffect(() => {
    let weight = props.weight / 2
    while (weight > 0) {
      if (weight >= 45) {
        let temp = count45 + 1
        setCount45(temp)
        weight -= 45
      }
      else if (weight >= 35) {
        let temp = count35 + 1
        setCount35(temp)
        weight -= 35
      }
      else if (weight >= 25) {
        let temp = count25 + 1
        setCount25(temp)
        weight -= 25
      }
      else if (weight >= 10) {
        let temp = count10 + 1
        setCount10(temp)
        weight -= 10
      }
      else if (weight >= 5) {
        let temp = count5 + 1
        setCount5(temp)
        weight -= 5
      }
      else if (weight >= 2.5) {
        let temp = count2_5 + 1
        setCount2_5(temp)
        weight -= 2.5
      }
    }
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
