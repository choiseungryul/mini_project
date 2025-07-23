import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contents' element={<div>콘텐츠</div>} />
        <Route path='/business' element={<div>주요사업</div>} />
      </Routes>


    </>
  );
}

export default App
