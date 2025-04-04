import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider'
import { Routes, Route, Navigate } from "react-router-dom"

const App = () => {

  const [authUser, setAuthUser] = useAuth()
 // console.log(authUser)
  return (

<>
  
<Routes>
      <Route
        path="/" element={
          authUser ? (
            <div className='flex h-screen'>
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )

        } />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />} />

      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />} />
    </Routes>
    <Toaster/>
</>
  )
}

export default App