
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
import SignUP from './pages/SignUP'
import Account from './pages/Account'
import Checkout from './pages/Checkout'

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
        <Route path="sign-up" element={<SignUP />} />
        <Route path="account" element={<Account />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  )
}

export default App
