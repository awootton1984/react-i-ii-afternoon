import React from 'react'


const Counter = (props) => {
  return(
    <div id="counter">
      {props.i + 1 }/{props.denom}
    </div>
  )
}



export default Counter