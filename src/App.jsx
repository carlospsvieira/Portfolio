import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Story from './components/Story'

function App() {

  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Story />
        <Projects />
      </main>
    </div>
  )
}

export default App
