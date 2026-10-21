
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contacts from './pages/Contacts'
import Journal from './pages/Journal'
import Error from './pages/Error'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />          
        <Route path="shop" element={<Shop />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="contacts" element={<Contacts />} /> 
        <Route path="journal" element={<Journal />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
