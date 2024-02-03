import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import EditorPage from './Pages/Editorpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
