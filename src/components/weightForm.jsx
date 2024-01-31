import React from "react";


function WeightForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    props.setWeight(event.target.value)
  }

  return (
    <div className='items-center rounded bg-blue-300 shadow row-span-1 md:row-span-2 grid grid-cols-6 gap-3 p-4'>
      <form onSubmit={handleSubmit} className=' bg-blue-50 rounded shadow p-6 pt-4 col-span-4 text-center'>
        <h1 className='mb-2 text-center'>
          Enter Weight [ {props.weight} + {props.barBell ?
            "True" : "False"
          } ]
        </h1>
        <input value={props?.weight || ""} type="number" step={5} max={1000} onChange={handleChange} className="text-center  w-full rounded p-1 px-2 border-2" />
      </form>

      <form className=' bg-blue-50 rounded shadow py-6 col-span-1 text-center'>
        <h1 className='mb-3'>Barbell?</h1>
        <input className="mb-2" type="checkbox" checked={props.barBell} onChange={e =>
          props.setBarBell(e.target.checked)} />
      </form>

      <form className=' bg-blue-50 rounded shadow py-6 col-span-1 text-center'>
        <h1 className='mb-3'>Single Side?</h1>
        <input className="mb-2" type="checkbox" checked={props.single} onChange={e =>
          props.setSingle(e.target.checked)} />
      </form>

    </div >
  );
}

export default WeightForm;
