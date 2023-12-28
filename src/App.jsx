import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Stories from './components/stories'
import { useStateProvider } from './context/stateWrap'

function App() {

const data = useStateProvider();
  return (


    <>
      <div className="main">

        <Search/>
        <Pagination/>
        <Stories/>
      </div>
    </>
  )
}

export default App
