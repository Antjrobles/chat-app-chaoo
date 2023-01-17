import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/AR2.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



const NavBar = () => {

  const { user, logoutUser } = useContext(AuthContext); // Get user from AuthContext

  return <Navbar bg="info" className="mb-4" style={{ height: "5.75rem" }}>
    <Container>
      <h1>
        <Link to="/" className="link-light text-decoration-none">
          <img src={Logo} alt="ChatApp" width="65" height="65" />
        </Link>
      </h1>
      {user && (    /* If user is logged in, show user name */
        <span className="text-success">Logged in as {user?.name}</span>
      )}  
      <Nav>
        <Stack direction="horizontal" gap={5}>
          {user && (<>
            <Link onClick={() => logoutUser()} to="/login" className="link-dark text-decoration-none">
              Logout
            </Link>
          </>)
          }


          {!user && (  // If user is not logged in, show login and register links
            <>
              <Link to="/login" className="link-dark text-decoration-none">
                <h2>Login</h2>
              </Link>
              <Link to="/register" className="link-dark text-decoration-none">
               <h2>Register</h2>
              </Link>
            </>
          )}

        </Stack>
      </Nav>
    </Container>

  </Navbar>;
};

export default NavBar;
