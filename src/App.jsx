import React, { useState } from 'react'
import Prod from './Prod'

function App() {
  //destructuring 
 var[a,b] = useState(69)
  return (
   
//  <>
//  <div className="w-full h-screen bg-zinc-900 p-4">
//    <div className='w-44 h-32 rounded-md bg-red-600 p-5 text-white'>
//    <h1>hello ji</h1>
//    </div>
 
//    </div>
   
//    </>
   <div className='w-full h-screen bg-zinc-900 text-white'>App
   {/* <h1>{a}</h1>
   <button onClick={()=>b(a+1)} className='px-3 py-1 bg-pink-400 rounded-md text-sm'>click</button> */}
   
     <Prod age="74" data={{dob:29+" oct" ,name:"harsh"}} />

   
   </div>

  )
}

export default App