import React, { useEffect, useState } from 'react'

export default function Product() {
  const[initialState,setinitialState]=useState(0);
  const [show,setShow]=useState(true)
  const [data,setData]=useState([]);

  function updateArray(){
    setData([1,2,34])
  }

  useEffect(()=>{
    console.log('component is mounted')
  },[])
  return (
    <div>
      <p>My current state is{initialState}</p>
      <button onClick={()=>setinitialState(initialState+1)}>Increment</button>
      <button onClick={()=>setinitialState(initialState-1)}>Decrement</button>
      <button onClick={()=>setinitialState(0)}>Reset</button>

    {show && <p>I am here</p>}
    <button onClick={()=>setShow(show===true ? false : true)}>Hide/Show</button>

    <ol>
      {/* {data.map((index))} */}
    </ol>
    {/* <button onClick={updateArray}>See array</button> */}
    </div>
  )
}
