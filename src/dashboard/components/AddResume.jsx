import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
  
const AddResume = () => {
    const [openDialog , setOpenDialog]= useState(false)
  return (
    <div>
        <div></div>
    <div className='p-14 py-24 bg-orange-300 border items-center flex-justify-center bg-secondary rounded-lg h-[280px]
    hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'  onClick = {() => setOpenDialog(true)}>
      <PlusSquare/>
    </div>

    
    <Dialog open = {openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Your Factech Resume</DialogTitle>
      <DialogDescription>
        <p className=' text-red-500'> Add title for your new Resume</p>
       <Input className = " my-2" placeholder= "SDE-1"/>
      </DialogDescription>
      <div className=' flex justify-between'>
        <Button onClick = {()=> setOpenDialog(false) } varient = "ghost"> Cancel</Button>
        <Button>Create</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume
