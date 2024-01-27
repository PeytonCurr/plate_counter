import React from "react";


function WeightForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    props.setWeight(event.target.value)
  }

  return (
    <div className='flex justify-center items-center rounded bg-blue-300 shadow'>
      <form onSubmit={handleSubmit} className=' bg-blue-50 rounded shadow p-6 pt-4 w-2/3'>
        <div className='text-center mb-2'> Enter Weight: {props.weight} </div>
        <div className='flex justify-center'>
          <input type="checkbox" checked={props.barBell} onChange={e => {
            props.setBarBell(e.target.checked);
          }} />
          <input value={props?.weight || ""} type="number" step={5} max={1000} onChange={handleChange} className="text-center w-3/4 rounded p-1 px-2 border-2" />
        </div>
      </form>
    </div>
  );
}

export default WeightForm;
