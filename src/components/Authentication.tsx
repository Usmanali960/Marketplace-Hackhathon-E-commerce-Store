import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

function Authentication() {
    return (
        <div className='flex items-center justify-center text-xl'>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Authentication
