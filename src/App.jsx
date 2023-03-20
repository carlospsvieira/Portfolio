import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
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
      </main>
    </div>
  )
}

export default App
