import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../Context/context'
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router';
import  Bell  from '../Assets/Sounds/Bell.mp3'
import  Bravo  from '../Assets/Sounds/Bravo.mp3'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { decrementSessao } from '../Context/action';


export default function Trabalho() {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + (counterState.pausa * 60));

  const bell = new Audio(Bell)
  const bravo = new Audio(Bravo)

  const navigate = useNavigate()
  
  const {
    seconds,
    minutes,
    pause,
    resume,
    isRunning,
    restart,
  } = useTimer({ expiryTimestamp, 
    onExpire: () => {
      if(counterState.sessao > 1){
        bell.play()
        setTimeout(() => {
          navigate('/trabalho')
        }, 2000),
        decrementSessao(counterDispatch)
      }else{
        bravo.play()
        setTimeout(() => {
          navigate('/workdone')
        }, 2500)
      }
  } });

  useEffect(() => {
    document.title = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
  }, [seconds]);

  return (
    <div className='flex flex-col mt-4 md:mt-6 xl:mt-12 h-full justify-center items-center'>
      <h3 className='xl:mt-9  font-bold sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-4xl text-blue-500'>Take a Break!</h3>
      <div className='flex shadow-md shadow-gray-700 bg-gray-800 flex-col justify-center items-center sm:w-[35%] xl:w-[32%] w-[85%] rounded-2xl m-5 h-[200px] sm:h-[2400px] md:h-[260px] xl:h-[340px] 2xl:h-[500px]'>
        <p className='bg-gray-800 text-slate-200 mb-10 text-7xl md:text-9xl xl:text-[168px] 2xl:text-[200px] font-bold'>
        {minutes < 10 ? 0 : ''}{minutes}:{seconds < 10 ? 0 : ''}{seconds}
        </p>
        <Box sx={{ width: '90%' }}>
          <LinearProgress 
            variant="determinate"  
            value={((minutes * 60 + seconds) / (counterState.pausa * 60)) * 100 } />
        </Box>
      </div>
      <div className='sm:w-[35%] xl:w-[32%] w-[85%] flex justify-between'>
        <button 
          className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 md:px-8 lg:px-10 2xl:px-14 py-2 md:py-3 xl:py-5 2xl:py-7 hover:bg-gray-700 hover:text-green-300 '
          onClick={isRunning ? pause : resume}
        >
          {isRunning ? "PAUSE" : "RESUME"} 
        </button>
        <button 
          className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 md:px-8 lg:px-10 2xl:px-14 py-2 md:py-3 xl:py-5 2xl:py-7 hover:bg-gray-700 hover:text-green-300 '
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + (counterState.pausa * 60));
            restart(time)
          }}>
          RESET
        </button>
      </div>
    </div>
  )
}