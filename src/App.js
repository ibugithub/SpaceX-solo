import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Rocket from './components/Rocket';
import MyProfile from './components/MyProfile';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </>

);

export default App;
