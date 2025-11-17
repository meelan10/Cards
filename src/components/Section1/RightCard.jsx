import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardcontent from './RightCardcontent';

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover'
 src= {props.img} alt=""   />
 <RightCardcontent  color={props.color}id={props.id} tag={props.tag} />

    </div>
  )
}

export default RightCard