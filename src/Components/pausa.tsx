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
  
  const [progress, setProgress] = useState(0)

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

  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
      <h3 className='mt-9 font-bold sm:text-7xl text-5xl text-blue-500'>Take a Break!</h3>
      <div className='flex shadow-md shadow-gray-700 bg-gray-800 flex-col justify-center items-center sm:w-[30%] w-[85%] rounded-2xl m-5 h-[250px]'>
        <p className='bg-gray-800 text-slate-200 mb-10 text-9xl font-bold'>
        {minutes < 10 ? 0 : ''}{minutes}:{seconds < 10 ? 0 : ''}{seconds}
        </p>
        <Box sx={{ width: '100%' }}>
          <LinearProgress 
            variant="determinate"  
            value={((minutes * 60 + seconds) / (counterState.trabalho * 60)) * 100 } />
        </Box>
      </div>
      <div className='sm:w-[30%] w-[85%] flex justify-around'>
        <button 
          className='sm:text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '
          onClick={isRunning ? pause : resume}
        >
          {isRunning ? "PAUSE" : "RESUME"} 
        </button>
        <button 
          className='sm:text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '
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