import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Introduce from './pages/Introduce'
import Contents from './pages/Contents'

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/contents' element={<Contents />} />
      </Routes>

    </>
  );
}

export default App
