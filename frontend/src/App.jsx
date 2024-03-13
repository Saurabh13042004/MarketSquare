


import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <Header/>
      <main className="py-3">
        <div className="container">
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
