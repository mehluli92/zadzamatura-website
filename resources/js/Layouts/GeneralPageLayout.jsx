import React from 'react'
import BottomNav from '@/Components/Navigation/BottomNav'
import TopNavigation from '@/Components/Navigation/TopNavigation'
import Footer from '@/Components/General/Footer'


export default function GeneralPageLayout({ children }) {

  return (
    <div >
        <TopNavigation/>
        <BottomNav/>
        <main className='min-h-screen'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}
