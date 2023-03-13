import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
