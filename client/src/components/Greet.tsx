import React from 'react'

export const Greet: React.FC = () => {
  const name: string = "Shivam"
  // eslint-disable-next-line react-hooks/purity
  const date:string | number = Date.now();
  return (
    <>
    <h1 className='text-white'>Hello {name} from React + TypeScript 👋</h1>
    <p>Date now: {date} </p>
    </>
  )
}