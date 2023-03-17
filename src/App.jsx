import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  )
}

export default App
