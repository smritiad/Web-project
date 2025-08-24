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
    backgroundColor: theme ? "#1a1a1a" : "#0A5C4B",
    position: "relative", 
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  };

  const toggleButtonStyle = {
    position: "absolute",
    top: "12px",
    right: "16px",
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "4px 8px",
    borderRadius: "50px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    zIndex: 10,
  };

  return (
    <Navbar variant="dark" expand="lg" collapseOnSelect style={navbarStyle}>
      <Container>
        <Navbar.Brand style={{ color: linkStyle.color }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "auto", marginRight: "10px" }}
          />
          Promptly
        </Navbar.Brand>

        {/* Theme Toggle Button */}
        <button
          style={toggleButtonStyle}
          onClick={() => dispatch(toggleTheme())}
          title="Toggle Theme"
        >
          {theme ? "🌞" : "🌙"}
        </button>

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
