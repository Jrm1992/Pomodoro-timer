import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export default function Footer() {
  const year = new Date()
  const currentYear = year.getFullYear()

  return (
      <footer className=' text-gray-200 flex text-xs sm:text-sm xl:text-xl flex-col justify-center text-center pb-4 mt-2 xl:mt-20'> 
        &copy; Copyright {currentYear}, Jose Roberto Marques 
        <div className='flex mt-2 justify-center text-center'>
          <a className='mr-4' target="_blank" href='https://github.com/Jrm1992'>
            <GithubLogo size='2em' color="#81D8F7" weight="bold" />
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/jos%C3%A9-roberto-marques-de-s%C3%A1-62a57023b/'>
          <LinkedinLogo size='2em' color="#81D8F7" weight="bold" />
          </a>
        </div>
      </footer>
  )
}
