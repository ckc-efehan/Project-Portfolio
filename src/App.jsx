import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <ProjectList />
      </main>
      <Footer />
    </div>
  )
}

export default App
