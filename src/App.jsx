import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home/home';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />}/>



        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
