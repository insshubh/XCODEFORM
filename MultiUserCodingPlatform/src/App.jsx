import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import EditorPage from './Pages/Editorpage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>

      <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
    </>
  )
}

export default App

