"use client";

import React, { Component } from 'react'
import '@styles/globals.css';

import Provider from 'Component/Provider'
import Nav from '@components/Nav';

export const metadata = {
    title: "promptopia",
    description: "Discover & Share Ai Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;