import { ArrowUpRight, Logs, X , MoonStar } from 'lucide-react'
import logo from '../../images/logo-B-B1OQ5AP3.jpg'
import AnimatedButton from '../AnimatedButton'
import { useContext } from 'react'
import { NavContext } from './NavContext'

const Navbar = () => {
  const { isDark, setIsDark } = useContext(NavContext)

  const { setisNavOpen, isNavOpen } = useContext(NavContext)
console.log(isDark)

  return (
    <nav className="h-20 relative w-full mt-8  ">
      <div className="flex h-full  items-center justify-between px-6 md:px-28">
        <img className={`h-12 w-auto ${isDark ? "invert" : ""}`} src={logo} alt="PnoX logo" />

        <div className="flex justify-center items-center  text-[var(--text)]">
         <div className='flex gap-8 right-45 absolute'>
           <button
            type="button"
            onClick={() => setIsDark(prev => !prev)}
            aria-label="Toggle dark mode"
            className="flex items-center cursor-pointer justify-center"
          >
            <MoonStar className="size-8" />
          </button>
          {/* console.log(isDark); */}
          

          <button
            type="button"
            className="border-2 font-[font1] flex justify-center gap-6  border-[var(--text)] px-8 py-3 cursor-pointer text-[28px] rounded-full leading-none"
          >
            <AnimatedButton text="Get In Touch" />
          </button>
         </div>

          <button
          onClick={() => {
           setisNavOpen(!isNavOpen)

          }}
            type="button"
            aria-label="Open navigation menu"
            className="fixed right-20 z-[1000] w-14 h-14
             flex items-center justify-center
             rounded-full border-2 border-[var(--text)]
             bg-[var(--bg-invert)] text-[var(--text-invert)] cursor-pointer "
          >  
          {isNavOpen ? (
    <X    className={`size-8  transition-all duration-300 ${
      isNavOpen
        ? "rotate-0 scale-100 opacity-100"
        : "-rotate-90 scale-0 opacity-0"
    }`}/>
  ) : (
    <Logs  className={`absolute object-cover size-8  transition-all duration-300 ${
      isNavOpen
        ? "rotate-90 scale-0 opacity-0"
        : "rotate-0 scale-100 opacity-100"
    }`}
        />
  )}

          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
