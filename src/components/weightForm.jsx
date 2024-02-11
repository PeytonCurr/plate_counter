import React from "react";


function WeightForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    if (props.single) {
      if (event.target.value > 500) {
        alert('500 is the maximum weight that can be displayed on one side');
        return
      }
    }
    if (event.target.value < 45 && props.barBell == true) {
      props.setBarBell(false)
    }
    props.setWeight(event.target.value)
  }

  return (
    <div className={'items-center rounded bg-blue-300 shadow row-span-2 grid grid-cols-10 grid-rows-2 sm:grid-rows-1 gap-3 px-4 py-3 ' + (!props.barBell && 'md:col-span-2')}>

      <form onSubmit={handleSubmit} className=' bg-blue-50 rounded shadow p-4 pb-6 sm:p-6 sm:pt-4 col-span-10 sm:col-span-6 text-center '>
        <h1 className='mb-2 text-center'>
          Enter Weight
        </h1>
        <input value={props?.weight || ""} type="number" step={5} max={(props.single ? 500 : 1000)} min={(props.barBell ? 45 : 5)} onChange={handleChange} className="text-center  w-full rounded p-1 px-2 border-2" />
      </form>

      <form className=' bg-blue-50 rounded shadow py-6 col-span-5 sm:col-span-2 text-center'>
        <h1 className='mb-3'>45lb Barbell?</h1>
        <input className="mb-2" type="checkbox" checked={props.barBell} onChange={e => {
          props.setBarBell(e.target.checked)
          if (props.single == true) {
            props.setSingle(!e.target.checked)
          }
          if (props.weight < 45) {
            props.setWeight(45)
          }
        }} />
      </form>

      <form className=' bg-blue-50 rounded shadow py-6 col-span-5 sm:col-span-2 text-center'>
        <h1 className='mb-3'>Single Side?</h1>
        <input className="mb-2" type="checkbox" checked={props.single} onChange={e => {
          if (!props.single) {
            if (props.weight > 500) {
              alert('500 is the maximum weight that can be displayed on one side');
              return
            }
          }
          props.setSingle(e.target.checked)
          if (props.barBell == true) {
            props.setBarBell(!e.target.checked)
          }
        }} />
      </form>

    </div >
  );
}

export default WeightForm;
