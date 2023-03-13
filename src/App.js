import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Mission from './components/Mission';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
