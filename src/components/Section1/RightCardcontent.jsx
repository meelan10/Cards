import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardcontent = (props) => {
  return (
    <div>
          <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>

        <div>
          <p className='text-xl leading-normal text-white mb-14'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nam.
          </p>


          <div  style={{backgroundColor:props.color}}className="flex justify-between items-center">
            <button className=' text-white font-medium px-8 py-2 rounded-full'>
              {props.tag}
            </button>

            <button className=' text-white font-semibold px-3 py-2 rounded-full'>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardcontent
