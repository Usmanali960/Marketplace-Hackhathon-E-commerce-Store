"use client"
import React from 'react'
import { Provider as CartProvider } from 'react-redux'
import { store } from '@/app/redux/store'

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider store={store}>
            {children}
        </CartProvider>
    )
}

export default Provider
