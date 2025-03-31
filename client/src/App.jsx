import './App.css'
import Home from './components/Home/Home'
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"
import CodeEditor from './components/CodeEditor/CodeEditor'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <Router>
      <div>
      <Toaster  position='top-center'></Toaster>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:roomId" element={<CodeEditor />} />
      </Routes>
    </Router>
  )
}

export default App
