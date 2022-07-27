import { useEffect } from 'react'
import  Bravo  from '../Assets/Sounds/Bravo.mp3'

export default function WorkDone() {
  const bravo = new Audio(Bravo)

  useEffect(() => {
    bravo.play()
    document.title = `Pomodoro`;
  }, [])
  
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <h3 className='mb-96 font-bold sm:text-7xl text-5xl text-blue-500'>Work done!</h3>
    </div>
  )
}
