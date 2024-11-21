import React, { useState } from 'react'

function Prod({age,data}) {
    const[a,b] = useState(false)
  return (
    <div className='text-white w-full h-60 bg-zinc-700'>
        <h1>{age}</h1>
        <h3>{data.dob}</h3>
        <h3>{data.name}</h3>

<h4 className={`${a === false ? "text-red-500" :"text-blue-500"}`}>{a === false ? "hello":"hey"}</h4>

 <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Prod