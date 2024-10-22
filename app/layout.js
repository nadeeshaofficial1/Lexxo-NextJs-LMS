"use client"
import { Inter,Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import {UserMembershipContext} from './_context/UserMembershipContext'
import { useState } from 'react'
const inter = Outfit({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const [userMembership,setUserMembership]=useState(false);
  return (
    <ClerkProvider>
      <UserMembershipContext.Provider 
      value={{userMembership,setUserMembership}}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </UserMembershipContext.Provider>
    </ClerkProvider>
  )
}
