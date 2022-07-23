import { Timer } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='h-28 flex items-center flex-col-reverse sm:flex-row'>
      <div className='my-auto sm:ml-10 pb-2 flex flex-row'>
        <Link to={'/'}>
          <p className="relative group">
            <span className='font-bold text-4xl text-blue-500'>Home</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-2 bg-green-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-green-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </p>
        </Link>
      </div>
      <div className='m-auto sm:pr-44  flex flex-row'>
        <h3 className='font-bold mr-4 text-4xl text-blue-500'>Pomodoro</h3>
        <Timer size={48} color="#04D361" weight="fill" />
      </div>
    </div>
  )
}
