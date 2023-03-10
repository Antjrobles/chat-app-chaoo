import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Footer from './components/Footer';

function App() {
  const {user} = useContext(AuthContext);

  return (
    <>
    <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login /> } /> // If user is logged in, show chat page, otherwise show login page
          <Route path="/register" element={user ? <Chat /> : <Register />} /> // If user is logged in, show chat page, otherwise show register page
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
};

export default App;
