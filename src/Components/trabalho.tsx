import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../Context/context'
import { useTimer } from 'use-timer';
import { useNavigate } from 'react-router';
import  Bell  from '../Assets/Sounds/Bell.mp3'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export default function Trabalho() {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  const [progress, setProgress] = useState(0)

  const bell = new Audio(Bell)

  const navigate = useNavigate()
  
  const { time, start, pause, reset, status } = useTimer({
    endTime: 0,
    initialTime: counterState.trabalho * 60,
    timerType: 'DECREMENTAL',
    onTimeOver: () => {
      bell.play()
      setTimeout(() => {
        navigate('/pausa')
      }, 2500);
    },
  });

  const [min, setMin] = useState(0)
  const [seg, setSeg] = useState(0)

  useEffect(() => {
    updateTime()
    updateProgress()
  }, [time])

  function updateTime(){
    setMin(parseInt(`${time / 60}`)),
    setSeg(time % 60)
  }
  
  function updateProgress(){
    setProgress((time / (counterState.trabalho * 60)) * 100)
  }


  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
      <h3 className='mt-9 font-bold sm:text-7xl text-5xl text-blue-500'>Work Time!</h3>
      <div className='flex shadow-md shadow-gray-700 bg-gray-800 flex-col justify-center items-center sm:w-[30%] w-[85%] rounded-2xl m-5 h-[250px]'>
        <p className='bg-gray-800 text-slate-200 mb-10 text-9xl font-bold'>
        {min}:{seg < 10 ? 0 : ''}{seg}
        </p>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" color='error' value={progress} />
        </Box>
      </div>
      <div className='sm:w-[30%] w-[85%] flex justify-between'>
        <button 
          className='sm:text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '
          onClick={start}
        >
          PLAY
        </button>
        <button 
          className='sm:text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '
          onClick={pause}
        >
          PAUSE 
        </button>
        <button 
          className='sm:text-4xl shadow-md shadow-gray-700 mb-4 font-bold text-gray-400 bg-gray-800 rounded-xl px-6 py-2 hover:bg-gray-700 hover:text-green-300 '
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </div>
  )
}
