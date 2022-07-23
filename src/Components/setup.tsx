import React, { useContext, useState } from 'react'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import {
  incrementTrabalho,
  decrementTrabalho,
  incrementPausa,
  decrementPausa,
  incrementSessao,
  decrementSessao,
} from '../Context/action'
import { CounterContext } from '../Context/context'
import { Link } from 'react-router-dom'

export default function Setup() {
  const [ trabalho,setTrabalho ] = useState<number>(25)
  const [ pausa,setPausa ] = useState<number>(5)
  const [ sessoes,setSessoes ] = useState<number>(2)

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
      <h3 className='mt-9 font-bold sm:text-7xl text-5xl text-blue-500'>Setup Options</h3>

      <div className='flex sm:flex-row flex-col sm:mt-6'>
        <div className='p-9 flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center mr-4'>
            <button className='' onClick={() => incrementTrabalho(counterDispatch)}>
              <ArrowCircleUp size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
            <button className='' onClick={() => decrementTrabalho(counterDispatch)}>
              <ArrowCircleDown size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='sm:text-8xl text-5xl mb-4 font-bold text-gray-400 '>{counterState.trabalho}</p>
            <p className='sm:text-2xl text-lg font-bold text-gray-400 '>Trabalho</p>
          </div>
        </div>
        <div className='p-9 flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center mr-4'>
            <button className='' onClick={() => incrementPausa(counterDispatch)}>
              <ArrowCircleUp size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
            <button className='' onClick={() => decrementPausa(counterDispatch)}>
              <ArrowCircleDown size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='sm:text-8xl text-5xl font-bold text-gray-400 '>{counterState.pausa}</p>
            <p className='sm:text-2xl text-lg font-bold text-gray-400 '>Pausa</p>
          </div>
        </div>
        <div className='p-9 flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center mr-4'>
            <button className='' onClick={() => incrementSessao(counterDispatch)}>
              <ArrowCircleUp size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
            <button className='' onClick={() => decrementSessao(counterDispatch)}>
              <ArrowCircleDown size={40} color="rgb(21 128 61)" weight="bold" />
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='sm:text-8xl text-5xl mb-4 font-bold text-gray-400 '>{counterState.sessao}</p>
            <p className='sm:text-2xl text-lg font-bold text-gray-400 '>Sessoes</p>
          </div>
        </div>
      </div>

      <Link to={`/trabalho`} >
      <button className='text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '>
        START
      </button>
        </Link>
    </div>
  )
}
