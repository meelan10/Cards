import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
 console.log(props.users);
  return (
    <div id='right' className='h-full rounded-4xl flex overflow-auto flex-nowrap gap-10 w-2/3 '>

 {props.users.map(function(elem, idx){
          
return <RightCard key={idx} id={idx} color={props.color} img={elem.img} tag={elem.tag}/>
 })}
    </div>
 )
}

export default RightContent
