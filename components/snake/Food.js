import React from 'react';

export default (props) => {
  return (
    <div className="snake-food" style={{left: `${props.dot[0]}%`,bottom: `${props.dot[1]}%`}}></div>
  )
}