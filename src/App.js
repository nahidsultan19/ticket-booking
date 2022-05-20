import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking';
import Dashboard from './Components/Dashboard/Dashboard';
import MyBooking from './Components/Dashboard/MyBooking';
import Review from './Components/Dashboard/Review';
import Login from './Components/Login/Login';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/home' element={<p>Home</p>} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/services' element={<p>Services</p>} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyBooking />} />
          <Route path='review' element={<Review />} />
        </Route>
        <Route path='/contact' element={<p>Contact</p>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
