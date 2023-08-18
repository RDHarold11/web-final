import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className="flex h-screen">
      <div className='bg-[#e3e3] z-10 fixed bottom-10 right-10 px-4 py-4 rounded-full' onClick={() => setOpenSideBar(!openSideBar)}>
        <GiHamburgerMenu size={30} cursor="pointer"/>
      </div>
        {
          openSideBar && <Sidebar/>
        }
        <Main></Main>
    </div>
  )
}

export default Home