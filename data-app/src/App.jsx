import Cards from "./components/Cards"
import Draft from "./components/Draft"
import Final from "./components/Final"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Patron from "./components/Patron"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Draft/>
      <Patron/>
      <Cards/>
      <Final/>
    </div>
  )
}

export default App
