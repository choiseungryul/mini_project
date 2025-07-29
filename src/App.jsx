import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Introduce from './pages/Introduce'
import Contents from './pages/Contents'
import Bottom from './components/Bottom'
import Location from './components/Location'
import { useState } from 'react'

const content = [
  {name : 'pani', url: 'https://www.instagram.com/panibottle_official/'}, 
  {name : 'kwak', url: 'https://www.instagram.com/jbkwak/'},
  {name : 'wonji', url: 'https://www.instagram.com/im1g/'},
  {name : 'oliver', url: 'https://www.instagram.com/oliver_travel_/'},
  {name : 'camping', url: 'https://www.instagram.com/camping_for_mania/'},
  {name : 'happy', url: 'https://www.instagram.com/travel_behappyhere/'},
];

function App() {
  const [story, setStory] = useState([]);
  const [ytb, setYtb] = useState([]); 
  const [insta, setInsta] = useState([]);

  return (
    <>
     <Header />
      <Routes>
        <Route
         path='/'
         element={
          <>
         <MainPage story={['america', 'france', 'japan', 'japan2', 'japan3', 'hongkong']} />
         <Location address='서울특별시 강동구 천호대로'/>
         </>
         }
         />
        <Route path='/introduce' element={
          <>
          <Introduce content={content} />
          <Location address='서울특별시 강동구 천호대로'/>
          </>
          }
           />
          
        <Route path='/contents' element={
          <>
          <Contents ytb={['pani', 'kwak', 'wonji', 'nomad', 'captain', 'jay']} insta={['pani', 'kwak', 'wonji', 'oliver', 'camping', 'happy']}/>
          <Location address='서울특별시 강동구 천호대로'/>
          </>
        }
          />
      </Routes>
      <Bottom/>
    </>
  );
}

export default App
