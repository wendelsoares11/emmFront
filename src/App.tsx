import Navbar from './components/Navbar/Navbar.js'
import Announcement from './components/Announcement/Announcement.js'
import Footer from './components/Footer/Footer.js'
import './App.css'
import MapComponent from './components/Mapping/MapComponent.js'

function App() {

  return (
    <>
      <Navbar />
      <Announcement />
      <MapComponent />
      <Footer />
    </>
  )
}

export default App
