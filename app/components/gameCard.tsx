import React from 'react'

interface Props{
    title:string;
    description:string;
    id:string;
}

const GameCard = ({title,description,id} : Props) => {
  return (
    <>
    <div className=' h-[80vh] mt-2  border border-gray-800 rounded-xl ' >
      <div className='text-white'>{title}</div>
      <div>{description}</div>
    </div>
    </>
  )
}

export default GameCard