import { useRef } from 'react'
import Cards from "./components/Cards"
import Draft from "./components/Draft"
import Final from "./components/Final"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Patron from "./components/Patron"
import Maestro from './components/Maestro'

function App() {
  const heroRef = useRef()
  const draftRef = useRef()
  const patronRef = useRef()
  const cardsRef = useRef()
  const finalRef = useRef()
  const maestroRef = useRef()

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Navbar 
        handleScroll={handleScroll}
        refs={{
          heroRef,
          draftRef,
          patronRef,
          cardsRef,
          finalRef,
          maestroRef
        }}
      />
      <div ref={heroRef}>
        <Hero handleScroll={handleScroll} patronRef={patronRef}/>
      </div>
      <div ref={draftRef}>
        <Draft />
      </div>
      <div ref={patronRef}>
        <Patron />
      </div>
      <div ref={cardsRef}>
        <Cards />
      </div>
      <div ref={maestroRef}>
        <Maestro/>
      </div>
      <div ref={finalRef}>
        <Final />
      </div>
    </div>
  )
}

export default App