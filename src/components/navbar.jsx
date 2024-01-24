import React from 'react'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

function Navbar() {
  return (
    <section className='grid grid-cols-10'>
      <div><Icon path={mdiAccount} size={1} /> Account</div>
    </section>
  )
}

export default Navbar;