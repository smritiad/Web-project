import { Navbar, Nav, Container } from "react-bootstrap";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { FaHome, FaTasks } from "react-icons/fa";
import { Link } from "react-router"; 
import logo from "../assets/alarm.png";
import { useSelector } from "react-redux";



const navbarStyle = {
  backgroundColor: '#0A5C4B',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const Header = () => {
  const hasTasks = useSelector((state) => state.tasks.hasTasks);
  
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
              <FaTasks />Task {hasTasks && (<span
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        backgroundColor: "red",
        borderRadius: "50%",
        marginLeft: "6px",
      }}
    />
  )}
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