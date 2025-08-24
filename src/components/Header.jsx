import { Navbar, Nav, Container } from "react-bootstrap";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { FaHome, FaTasks } from "react-icons/fa";
import { Link } from "react-router"; 
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/store.js";
import logo from "../assets/alarm.png";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.isDark);

  const navbarStyle = {
    backgroundColor: theme ? '#1a1a1a' : '#0A5C4B',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const toggleButtonStyle = {
    background: 'none',
    border: '1px solid white',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

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
            <Nav.Link>
              <button 
                style={toggleButtonStyle} 
                onClick={() => dispatch(toggleTheme())}
              >
                {theme ? 'Light' : 'Dark'}
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;