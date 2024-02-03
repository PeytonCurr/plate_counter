import React, { Component } from 'react'

function SmartSVG(props) {

  const Component = props.name;

  return (<Component color={props.color} transform={props.transform} />)
}

export default SmartSVG
