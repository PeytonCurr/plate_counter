import React from 'react'
import Icon from '@mdi/react';
import { mdiDumbbell } from '@mdi/js';

function Navbar() {
  return (
    <section className='grid grid-col-10'>
      <div className=''> Account <Icon path={mdiDumbbell} size={1} /></div>
      <div className="bg-yellow-500">
        <h1 className="text-2xl p-2">THREE</h1>
      </div>
      <div className="bg-lime-600">
        <h1 className="text-2xl p-2 text-red-700">FOUR</h1>
      </div>
    </section>
  )
}

export default Navbar;