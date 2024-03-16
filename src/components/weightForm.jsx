import { mdiAlphaXCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import toast from "react-hot-toast";


function WeightForm(props) {

  const [scroll, setScroll] = useState(true)

  function notify(message) {
    toast.custom(
      <div className="bg-error rounded-2xl p-4 pt-6 md:p-6 md:pt-8 flex justify-center  align-middle items-center text-black shadow-lg" >
        <Icon path={mdiAlphaXCircleOutline} size={1} color="black" rotate={0} className="p-0 mb-1 me-3" />
        <span className="p-0 mb-1">{'Error! ' + message}</span>
      </div>
      , {
        style: {
          padding: '0px',
          background: 'none',
          boxShadow: 'none'
        }, duration: 3000,
      })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    if (props.single) {
      if (event.target.value > 500) {
        notify('500lbs is the single-side maximum');
        return
      }
    }
    else {
      if (event.target.value > 1000) {
        notify('1000lbs is the maximum');
        return
      }
    }
    if (event.target.value < 45 && props.barBell == true) {
      props.setBarBell(false)
    }
    props.setWeight(event.target.value)
  }

  return (
    <div className={'items-center rounded bg-blue-300 shadow row-span-2 grid grid-cols-10 grid-rows-2 sm:grid-rows-1 gap-1 sm:gap-3 px-2 sm:px-4 py-1 sm:py-3 ' + (!props.barBell && 'md:col-span-2')}>

      <form onSubmit={handleSubmit} className=' bg-slate-700 rounded shadow px-4 py-1 sm:pb-2 col-span-10 sm:col-span-6 text-lg h-full flex '>

        {/*Left Side*/}
        <div className="h-full grid grid-rows-5">
          <div className="row-span-1"></div>
          <h1 className='text-white font-bold text-shadow-sm shadow-info me-2 flex items-center row-span-2 ' >
            Weight:
          </h1>
          <div className="text-center me-2 row-span-2 shadow rounded-sm bg-slate-500 flex flex-col justify-around items-center sm:p-1.5">
            <span className="text-sm text-white font-bold text-shadow-sm shadow-info">
              Scroll?
            </span>
            <input className="mb-0 toggle toggle-sm toggle-info " type="checkbox" checked={scroll} onChange={e => { setScroll(e.target.checked) }} />
          </div>
        </div>

        {/*Right Side*/}

        {!scroll &&
          <div className="h-full w-full grid grid-rows-5" >
            <div className="row-span-1"></div>
            <div className="row-span-2 flex items-center">
              <input value={props?.weight || ""} type="number" step={5} max={(props.single ? 500 : 1000)} min={(props.barBell ? 45 : 5)} onChange={handleChange} className="text-center w-full rounded text-white input me-2" />
            </div>
            <div className="row-span-2"></div>
          </div>
        }
        {scroll &&
          <div className="h-full w-full grid grid-rows-5">

            <div className="row-span-4 flex items-center">
              This is where the Scroll will be
            </div>

            <div className="row-span-1"></div>
          </div>
        }

      </form>

      <form className=' bg-slate-700 rounded shadow pt-6 pb-5 col-span-5 sm:col-span-2 text-center'>
        <h1 className='mb-3 text-white font-bold text-shadow-sm shadow-info'>45lb Barbell?</h1>
        <input className="mb-0 toggle toggle-info" type="checkbox" checked={props.barBell} onChange={e => {
          props.setBarBell(e.target.checked)
          if (props.single == true) {
            props.setSingle(!e.target.checked)
          }
          if (props.weight < 45) {
            props.setWeight(45)
          }
        }} />
      </form>

      <form className=' bg-slate-700 rounded shadow pt-6 pb-5 col-span-5 sm:col-span-2 text-center'>
        <h1 className='mb-3 text-white font-bold text-shadow-sm shadow-info'>Single Side?</h1>
        <input className="mb-0 toggle toggle-info" type="checkbox" checked={props.single} onChange={e => {
          if (!props.single) {
            if (props.weight > 500) {
              notify('500lbs is the single-side maximum')
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
