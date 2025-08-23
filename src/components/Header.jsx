import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { FaHome, FaTasks } from "react-icons/fa";
import { Link } from "react-router"; 
import logo from "../assets/alarm.png";


const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" collapseOnSelect style={navbarStyle}>
      <Container>
        <Navbar.Brand style={{ color: linkStyle.color }}>
          <img src={logo} alt="logo" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
          Promptly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={linkStyle}>
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/timer" style={linkStyle}>
              <IoTimerOutline /> Timer
            </Nav.Link>
            <Nav.Link as={Link} to="/task" style={linkStyle}>
              <FaTasks /> Task
            </Nav.Link>
            <Nav.Link as={Link} to="/game" style={linkStyle}>
              <IoLogoGameControllerB /> Game
            </Nav.Link>
            <Button style={toggleButtonStyle} onClick={() => dispatch(toggleTheme())}>
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
