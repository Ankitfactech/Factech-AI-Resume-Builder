import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
    const {user ,isSignedIn} = useUser();
  return (
    <div className ='p-3 px-5 flex justify-between shadow -md'>
        <div className=' flex gap-4 items-center'>
      <img src='/logo.svg' width = {100} height = {100} />
      <p className=' font-semibold text-fuchsia-700'>Factech-Resume</p>
      </div>
      
        { isSignedIn ? 
        <div  className=' flex gap-3 items-center'>
            <Link to ={ '/dashboard'}>
            <Button  varient= "outline "> Dashboard </Button>
            </Link>
            <UserButton/>
            </div> :

      
      <Link to={'/auth/sign-in'}>
      <Button> Get Started </Button>
      </Link>
    
      }
      </div>
  )
}

export default Header
