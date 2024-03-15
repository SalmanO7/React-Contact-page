import './App.css'
import HeaderContent from './components/HeaderContent/HeaderContent'
import ContactFrom from './components/ContactFrom/ContactForm'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='container'>
      <Navbar />
      <HeaderContent />
      <ContactFrom/>
    </div>
  )
}

export default App
