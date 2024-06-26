import { mdiAlphaXCircleOutline, mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


function WeightForm(props) {

  const [enter, setEnter] = useState(false)

  const [scrollCounts, setScrollCounts] = useState({
    units: 0,
    tens: 0,
    hundreds: 0,
  })

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
      if (event.target.value > 995) {
        notify('995lbs is the maximum');
        return
      }
    }
    if (event.target.value < 45 && props.barBell == true) {
      props.setBarBell(false)
    }
    props.setWeight(event.target.value)
  }

  function translateWeight() {
    let strWeight = props.weight.toString()

    let unitsCount = 0
    let tensCount = 0
    let hundredsCount = 0

    if (strWeight[0] == null) {
      unitsCount = 0
      tensCount = 0
      hundredsCount = 0
    }
    else {
      if (strWeight[2] == null) {
        if (strWeight[1] == null) {
          unitsCount = Number(strWeight[0])
          tensCount = 0
          hundredsCount = 0
        }
        else {
          unitsCount = Number(strWeight[1])
          tensCount = Number(strWeight[0])
          hundredsCount = 0
        }
      }
      else {
        unitsCount = Number(strWeight[2])
        tensCount = Number(strWeight[1])
        hundredsCount = Number(strWeight[0])
      }
    }
    setScrollCounts({ ...scrollCounts, units: unitsCount, tens: tensCount, hundreds: hundredsCount })
  }

  function changeDigits(digitType, increase) {
    let newCount = 0
    if (increase) {
      if (digitType == 'units') {
        newCount = 5
        setScrollCounts({ ...scrollCounts, units: newCount })
      } else {
        if (scrollCounts[digitType] < 9) {
          newCount = scrollCounts[digitType] + 1
        } else {
          newCount = scrollCounts[digitType]
        }
        if (digitType == 'tens') {
          setScrollCounts({ ...scrollCounts, tens: newCount })
        } else {
          setScrollCounts({ ...scrollCounts, hundreds: newCount })
        }
      }
    } else {
      if (digitType == 'units') {
        newCount = 0
        setScrollCounts({ ...scrollCounts, units: newCount })
      } else {
        if (scrollCounts[digitType] > 0) {
          newCount = scrollCounts[digitType] - 1
        } else {
          newCount = scrollCounts[digitType]
        }
        if (digitType == 'tens') {
          setScrollCounts({ ...scrollCounts, tens: newCount })
        } else {
          setScrollCounts({ ...scrollCounts, hundreds: newCount })
        }
      }
    }
  }

  function scrollInfluenceWeight() {
    let tempWeight = (scrollCounts['hundreds'] * 100) + (scrollCounts['tens'] * 10) + scrollCounts['units']
    if (tempWeight == props.weight) {
      return
    }
    if (props.single) {
      if (tempWeight > 500) {
        notify('500lbs is the single-side maximum');
        return
      }
    }
    else {
      if (tempWeight > 995) {
        notify('995lbs is the maximum');
        return
      }
    }
    if (tempWeight < 45 && props.barBell == true) {
      props.setBarBell(false)
    }
    props.setWeight(tempWeight)
  }

  useEffect(() => {
    translateWeight()
  }, [props.weight])

  useEffect(() => {
    scrollInfluenceWeight()
  }, [scrollCounts])

  return (
    <div className={'items-center rounded bg-blue-300 shadow row-span-3 sm:row-span-2 grid grid-cols-10 grid-rows-5 sm:grid-rows-1 gap-1 sm:gap-3 px-2 sm:px-4 py-1 sm:py-3 ' + (!props.barBell && 'md:col-span-2')}>

      <form onSubmit={handleSubmit} className=' bg-slate-700 rounded shadow px-2 sm:px-3 col-span-10 sm:col-span-6 row-span-3 sm:row-auto text-lg h-full flex '>

        {/*Left Side*/}
        <div className="h-full grid grid-rows-4 sm:grid-rows-7">
          <div className="row-span-1 sm:row-span-2"></div>
          <div className="text-center row-span-2 sm:row-span-3 shadow rounded-sm bg-slate-500 flex flex-col justify-around items-center p-1.5">
            <span className="text-sm text-white font-bold text-shadow-sm shadow-info">
              Enter?
            </span>
            <input className="mb-0 toggle toggle-sm toggle-info " type="checkbox" checked={enter} onChange={e => { setEnter(e.target.checked) }} />
          </div>
          <div className="row-span-1 sm:row-span-2"></div>
        </div>

        <div className="divider divider-horizontal divider-neutral m-1"></div>

        {/*Right Side*/}
        <div className="row-span-2 flex items-center justify-start xxs:justify-center xs:justify-center w-full">
          <div className="h-full grid grid-rows-8">
            <div className="row-span-1"></div>
            <div className="row-span-2"></div>
            <h1 className={'text-white font-bold text-shadow-sm shadow-info row-span-2 flex items-center text-sm ' + (enter && ' border-y ')}>
              Weight:
            </h1>
            <div className="row-span-2"></div>
            <div className="row-span-1"></div>
          </div>

          {enter &&
            <div className="h-full w-full grid grid-rows-8">
              <div className="row-span-1"></div>
              <div className="row-span-2"></div>
              <div className="flex justify-center row-span-2">
                <input value={props?.weight || ""} type="number" step={5} max={(props.single ? 500 : 995)} min={(props.barBell ? 45 : 5)} onChange={handleChange} className="text-center w-11/12 rounded text-white bg-base-300" />
              </div>
              <div className="row-span-2"></div>
              <div className="row-span-1"></div>
            </div>
          }
          {!enter &&
            <div className="h-full w-1/2 xs:w-3/4 grid grid-rows-9 ms-2">
              <div className="row-span-1 flex justify-start xs:justify-around mx-1 xs:mx-8">
                <div className="ms-10 sm:ms-0 md:ms-10 me-0.5 xs:me-0 h-full relative w-[10%] sm:w-[20%] md:w-[10%]">
                  <button onClick={() => changeDigits('hundreds', false)} className="border hover:border-2 rounded h-[75%] w-full mt-[2px] sm:mt-[3px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronUp} size={1} color="white" rotate={0} />
                  </button>
                </div>
                <div onClick={() => changeDigits('tens', false)} className="h-full relative w-[10%] sm:w-[20%] md:w-[10%] mx-0.25 xs:mx-0">
                  <button className="border hover:border-2 rounded h-[75%] w-full mt-[2px] sm:mt-[3px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronUp} size={1} color="white" rotate={0} />
                  </button>
                </div>
                <div onClick={() => changeDigits('units', false)} className="me-10 sm:m-0 md:me-10 ms-0.5 xs:ms-0 h-full relative w-[10%] sm:w-[20%] md:w-[10%]">
                  <button className="border hover:border-2 rounded h-[75%] w-full mt-[2px] sm:mt-[3px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronUp} size={1} color="white" rotate={0} />
                  </button>
                </div>
              </div>

              {/*Inside Scroll*/}
              <div className="row-span-7 grid gird-rows-6 bg-base-300 rounded-box py-1 sm:py-2 border-y-[.25px] w-3/4 xs:w-full justify-center xs:justify-normal">
                <div className="row-span-1 flex justify-around mx-8 text-xl sm:text-2xl place-items-center ">
                  {scrollCounts['hundreds'] - 1 < 0 ?
                    <div className={' opacity-30 ms-10 sm:ms-0 md:ms-10 invisible '}> {scrollCounts['hundreds']} </div>
                    :
                    <div className={' opacity-30 ms-10 sm:ms-0 md:ms-10 '}> {scrollCounts['hundreds'] - 1} </div>
                  }

                  <div className={' opacity-30 ' + (scrollCounts['tens'] - 1 < 0 && ' invisible ')}>{scrollCounts['tens'] - 1}</div>

                  {scrollCounts['units'] == 5 ?
                    <div className={' opacity-30 me-10 sm:me-0 md:me-10 '}>{0}</div>
                    :
                    <div className={' opacity-30 me-10 sm:me-0 md:me-10 invisible '}>{scrollCounts['units']}</div>
                  }
                </div>
                <div className="row-span-1 flex justify-around xs:px-2 mx-7 xs:mx-5 border-y-[1.5px] text-xl sm:text-2xl bg-base-200 rounded place-items-center">
                  <div className="ms-11 sm:ms-0 md:ms-11 me-1 xs:me-0 text-white font-bold text-shadow-sm shadow-info">{scrollCounts['hundreds']}</div>
                  <div className="text-white font-bold text-shadow-sm shadow-info mx-0.5 xs:mx-0">{scrollCounts['tens']}</div>
                  {scrollCounts['units'] == 5 ?
                    <div className="me-11 sm:me-0 md:me-11 ms-1 xs:ms-0 text-white font-bold text-shadow-sm shadow-info">{scrollCounts['units']}</div>
                    :
                    <div className="me-11 sm:me-0 md:me-11 ms-1 xs:ms-0 text-white font-bold text-shadow-sm shadow-info">{0}</div>
                  }
                </div>
                <div className="row-span-1 flex justify-around mx-7 xs:mx-8 text-xl sm:text-2xl place-items-center">
                  {scrollCounts['hundreds'] + 1 > 9 ?
                    <div className={' opacity-30 ms-10 sm:ms-0 md:ms-10 invisible '}>{scrollCounts['hundreds']}</div>
                    :
                    <div className={' opacity-30 ms-10 sm:ms-0 md:ms-10 '}>{scrollCounts['hundreds'] + 1}</div>
                  }

                  <div className={' opacity-30 ' + (scrollCounts['tens'] + 1 > 9 && ' invisible ')}>{scrollCounts['tens'] + 1}</div>

                  {scrollCounts['units'] == 5 ?
                    <div className={' opacity-30 me-10 sm:me-0 md:me-10 invisible '}>{scrollCounts['units']}</div>
                    :
                    <div className={' opacity-30 me-10 sm:me-0 md:me-10 '}>{5}</div>
                  }
                </div>
              </div>


              <div className="row-span-1 flex justify-start xs:justify-around mx-1 xs:mx-8">
                <div className="ms-10 sm:ms-0 md:ms-10 me-0.5 xs:me-0 h-full w-[10%] sm:w-[20%] md:w-[10%]">
                  <button onClick={() => changeDigits('hundreds', true)} className="border hover:border-2 rounded h-[75%] w-full mt-[1px] sm:mt-[2px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronDown} size={1} color="white" rotate={0} />
                  </button>
                </div>
                <div onClick={() => changeDigits('tens', true)} className="h-full relative w-[10%] sm:w-[20%] md:w-[10%] mx-0.25 xs:mx-0">
                  <button className="border hover:border-2 rounded h-[75%] w-full mt-[1px] sm:mt-[2px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronDown} size={1} color="white" rotate={0} />
                  </button>
                </div>
                <div onClick={() => changeDigits('units', true)} className="me-10 sm:m-0 md:me-10 ms-0.5 xs:ms-0 h-full relative w-[10%] sm:w-[20%] md:w-[10%]">
                  <button className="border hover:border-2 rounded h-[75%] w-full mt-[1px] sm:mt-[2px] bg-neutral flex items-center justify-center">
                    <Icon path={mdiChevronDown} size={1} color="white" rotate={0} />
                  </button>
                </div>
              </div>
            </div>
          }

        </div>

      </form>

      <div className="col-span-10 sm:col-span-4 row-span-2 sm:row-auto grid grid-cols-10 gap-2 sm:gap-3">

        <form className=' bg-slate-700 rounded shadow pt-3 pb-2 col-span-5 text-center'>
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

        <form className=' bg-slate-700 rounded shadow pt-3 pb-2 col-span-5 text-center'>
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

      </div>

    </div >
  );
}

export default WeightForm;
