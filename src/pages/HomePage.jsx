import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Make sure you're using react-router-dom
import Header from "../components/Header";
import Timer from "../assets/Timer.png";
import Affirmation from "../assets/Affirmation.png";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  const cardStyle = {
    backgroundColor: '#EBF8DF',
    marginTop: '50px',
    boxShadow: '0 4px 12px rgba(10, 92, 75, 0.2)', 
    borderRadius: '12px'
  };

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Link to="/">
          <button style={{
            backgroundColor: '#0A5C4B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}>
            Go Back
          </button>
        </Link>

        <Row className="mb-4 align-items-stretch">
          <Col md={6}>
            <Card style={cardStyle} className="h-100">
              <Card.Body>
                <Card.Title>Tasks To Do</Card.Title>
                <Card.Text>Plan Your Day!!</Card.Text>
                <ul>
                  {tasks.map(task => (
                    <li key={task.id}>{task.text}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="d-flex flex-column gap-4">
            <Card style={cardStyle} className="flex-fill">
              <Card.Body>
                <Card.Title>Affirmation of the Day</Card.Title>
                <Card.Img
                  src={Affirmation}
                  alt="Affirmation"
                  style={{
                    width: '250px',
                    height: '150px',
                    marginTop: '30px',
                    marginLeft: '150px',
                    objectFit: 'contain',
                  }}
                />
              </Card.Body>
            </Card>

            <Link to="/timer" style={{ textDecoration: "none", color: "inherit" }}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>Timer</Card.Title>
                  <Card.Img
                    src={Timer}
                    alt="logo"
                    style={{
                      width: "250px",
                      height: "150px",
                      marginTop: "30px",
                      marginLeft: "150px",
                    }}
                  />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
