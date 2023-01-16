import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/AR2.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



const NavBar = () => {

  const { user } = useContext(AuthContext); // Get user from AuthContext

  return <Navbar bg="info" className="mb-4" style={{ height: "5.75rem" }}>
    <Container>
      <h2>
        <Link to="/" className="link-light text-decoration-none">
          <img src={Logo} alt="ChatApp"  width="65" height="65" />
        </Link>
      </h2>
      <span className="text-success">Logged in as {user?.name}</span> //
      <Nav> 
        <Stack direction="horizontal" gap={5}>
        <Link to="/login" className="link-dark text-decoration-none">
          Login
        </Link>
        <Link to="/register" className="link-dark text-decoration-none">
          Register
        </Link>
        </Stack>
      </Nav>
    </Container>

  </Navbar>;
};

export default NavBar;
