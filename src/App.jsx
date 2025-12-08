import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro:'', 
    color:'blue',
    tag:'Satisfied'
  },
  {
       img:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
    intro:'',
    color:'green', 
    tag:'Underserve'
    },
    {
      img:"https://images.unsplash.com/photo-1532370439418-83ee4c7a03c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
    intro:'',
    color:'red', 
    tag:'Underbanked'
    },
  {
    img:"https://plus.unsplash.com/premium_photo-1661840348789-d4305454faa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
    intro:'',
    color:'brown', 
    tag:'Undercover'
  },
  {
    img:"https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYzfHx8ZW58MHx8fHx8",
    intro:'', 
    color:'yellow',
    tag:'Unikely'
  }
  ]
  #
  return (
    <div>
       <Section1  users={users}/>
       <Section2 />
    </div>
  )
}

export default App
