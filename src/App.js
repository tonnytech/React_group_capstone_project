import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import { fetchRocketData } from './redux/Rockets/Rocketslice';
import { fetchData } from './redux/MissionData/MissionDataSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
