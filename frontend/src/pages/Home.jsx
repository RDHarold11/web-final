import React from 'react'

import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home = () => {
  return (
    <div className="flex  h-screen">
        <Sidebar></Sidebar>
        <Main></Main>
    </div>
  )
}

export default Home