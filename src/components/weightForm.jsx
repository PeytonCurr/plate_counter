import React from "react";


function WeightForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    props.setWeight(event.target.value)
  }

  return (
    <div className='flex justify-center items-center rounded bg-blue-300 shadow row-span-1 md:row-span-2'>
      <form onSubmit={handleSubmit} className=' bg-blue-50 rounded shadow p-6 pt-4 w-2/3'>
        <h1 className='text-start mb-2 flex justify-between'>
          <span>Enter Weight [ {props.weight} + {props.barBell ?
            "True" : "False"
          } ] </span>
          <span>Barbell?</span>
        </h1>

        <div className="flex justify-between">
          <input value={props?.weight || ""} type="number" step={5} max={1000} onChange={handleChange} className="text-center w-3/4 sm:w-4/5 rounded p-1 px-2 border-2" />

          <input className="mr-5" type="checkbox" checked={props.barBell} onChange={e =>
            props.setBarBell(e.target.checked)} />


        </div>
      </form>
    </div>
  );
}

export default WeightForm;
