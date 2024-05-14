import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import NavItems from './NavItems'
import MobileNav from './MobileNav'


const Header = () => {
  return (
  <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
        <Link href="/"className="w-36">
          <Image
          src ="/assets/images/logo-black.svg" width={128} height={38}// image of logo in header.Dont change the alt tag cause it may used in further usage of importing
          alt = "Evently logo"/>
        </Link>

        <SignedIn>{/*this component is used form clerk sign in and sign out  */}
          <nav className ="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton 
              afterSignOutUrl = "/" />
            <MobileNav/>
            </SignedIn> 
            <SignedOut>
              <Button asChild 
              className = "rounded-full" size = "lg">
                <Link href = "/sign-in" >
                    Login
                </Link>
              </Button>
            </SignedOut>
        </div>
    </div>
  </header>
  )
}

export default Header
