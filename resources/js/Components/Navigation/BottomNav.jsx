import React, { useEffect, useState } from 'react'
import LogoComponent from '../LogoComponent'
import BottomNavLink from './BottomNavLink'

export default function BottomNav() {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)
  const [isSticky, setIsSticky] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div>
    <nav
    className={`z-20 w-full bg-deepBlue h-[80px] flex md:justify-center items-center md:flex-cols 
    justify-between px-6 ${isSticky == true ? 'fixed md:top-0': '' }`}
    >  
      <div className='block md:hidden'>
        <LogoComponent/>
      </div>
      <div className={`hidden md:flex md:h-full 
      ${!showingNavigationDropdown == true ? '':''}`
      }>
      <BottomNavLink
        href={`/`}
        name='/'
      >
         home
      </BottomNavLink>
      <BottomNavLink
        href={`/about`}
        name='/about'
        >
         about
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-products`}
        name='/zadzamatura-products'
        >
         products
      </BottomNavLink>
      <BottomNavLink
        href={`/contact`}
        name='/contact'
        >
         contact
      </BottomNavLink>
      <BottomNavLink
        href={`/sales-agronomists`}
        name='/sales-agronomists'
        >
         sales
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-blogs`}
        name='/zadzamatura-blogs'
        >
         blog
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-careers`}
        name='/zadzamatura-careers'
        >
         careers
      </BottomNavLink>
      </div>
     
     <div className="-me-2 flex items-center float-right sm:hidden">
        <button
          onClick={() =>
                  setShowingNavigationDropdown(
                  (previousState) => !previousState,
                  )
                  }
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 transition 
                  duration-150 ease-in-out hover:border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-50 
                  focus:text-gray-500 focus:outline-none"
                  >
                    <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                      <path
                      className={
                      !showingNavigationDropdown
                      ? 'inline-flex'
                      : 'hidden'
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      />
                        <path
                        className={
                        showingNavigationDropdown
                        ? 'inline-flex'
                        : 'hidden'
                        }
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
        </button>
     </div>
    </nav>
    <div className={`bg-green-600  ${showingNavigationDropdown ? 'flex flex-col':'hidden'}`}>
      <BottomNavLink
        href={`/`}
        >
         home
      </BottomNavLink>
      <BottomNavLink
        href={`/about`}
        name='/about'
        >
         about
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-products`}
        name='/zadzamatura-products'
        >
         products
      </BottomNavLink>
      <BottomNavLink
        href={`/contact`}
        name='/contact'
        >
         contact
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-blogs`}
        name='/zadzamatura-blogs'
        >
         blog
      </BottomNavLink>
      <BottomNavLink
        href={`/zadzamatura-careers`}
        name='/zadzamatura-careers'
        >
         careers
      </BottomNavLink>
    </div>
    </div>
  )
}
