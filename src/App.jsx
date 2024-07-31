import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custum/Header'

function App() {
  const [count, setCount] = useState(0)
  const {user ,isLoaded ,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to = {'/auth/sign-in'} />
  }
  return (
    <>
      {/* <Button> Hello </Button>
       <div className=' bg-zinc-800 mx-10 font-bold'> Hello </div> */}
       <Header/>
       <Outlet/>
    </>
  )
}

export default App