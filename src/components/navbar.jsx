import React from 'react'
import Icon from '@mdi/react';
import { mdiDumbbell } from '@mdi/js';

function Navbar() {
  return (
    <section className='grid grid-cols-1 bg-amber-50 shadow sticky top-0'>

      <div className='text-2xl flex items-center justify-center p-2'>
        <Icon path={mdiDumbbell} size={1} color="red" rotate={45} />
        <span className='border-2 border-l-0 border-red-500 p-1 pr-1.5 pl-0'>PlateCounter</span>

      </div>

    </section>
  )
}

export default Navbar;