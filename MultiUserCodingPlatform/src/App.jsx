import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import EditorPage from './Pages/Editorpage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editor/:roomId' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

