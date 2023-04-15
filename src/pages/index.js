import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useState } from 'react';
import CoursesList from '@/components/CoursesList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  
  return (
  
  
  
      <div>
        <CoursesList/>
       
      </div>
   

  )
}
