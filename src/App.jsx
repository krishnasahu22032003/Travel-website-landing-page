
import Camp from './components/Camp'
import Features from './components/Features'
import Footer from './components/Footer'
import GetApp from './components/GetApp'
import Guide from './components/Guide'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

function App() {
 

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
   <Navbar/>
   <Hero/>
   <Camp/>
   <Guide/>
   <Features/>
   <GetApp/>
   <Footer/>
    </div>
  )
}

export default App
