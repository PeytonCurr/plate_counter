import React from 'react'

function BarBell(props) {
  return (
    <svg transform={props.transform} viewBox="0 0 646 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M644 2H2V18H644V2Z" fill="#808080" stroke="black" stroke-width="3" />
      <path d="M134 2H127V18H134V2Z" fill="black" stroke="black" stroke-width="2" />
      <path d="M161 2H154V18H161V2Z" fill="black" stroke="black" stroke-width="2" />
      <path d="M491 2H484V18H491V2Z" fill="black" stroke="black" stroke-width="2" />
      <path d="M519 2H512V18H519V2Z" fill="black" stroke="black" stroke-width="2" />
      <path d="M259 2H258V18H259V2Z" fill="black" stroke="black" stroke-width="3" />
      <path d="M388 2H387V18H388V2Z" fill="black" stroke="black" stroke-width="3" />
    </svg>
  )
}

export default BarBell
