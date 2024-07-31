import React from 'react'
import AddResume from './components/AddResume'

const Dashboard = () => {
  return (
    <div className='P-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'> My Resume</h2>
      <p> Start Creating Resume using AI </p>
      <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        <AddResume/>
      </div>
    </div>
  )
}

export default Dashboard
