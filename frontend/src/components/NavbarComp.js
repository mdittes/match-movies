import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Matches from "./Matches";
import Genres from "./Genres";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Logout from "./Logout";


function NavbarComp() {
    return (
      <div>
            <Navbar
            style={{backgroundColor: "#529F8C", color: "#F6C6BF" }}
            expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="home"><img src="https://i.imgur.com/Y0jNRJ1.png" class="float-left" alt="" width="225px" height="70px"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
                    <Nav.Link as={Link} to="/genres">Genres</Nav.Link>
                    {/* <img src="./user.png" width="25px" height="25px" alt=""/> */}
                    <NavDropdown title="Manage" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="Register">Register</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="Login">Login</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="Logout">Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="About">
                        About
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/matches" element={<Matches/>} />
                <Route path="/genres" element={<Genres/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    )
}

export default NavbarComp