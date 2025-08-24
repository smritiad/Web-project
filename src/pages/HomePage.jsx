import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router"; 
import { useSelector } from "react-redux";
import Timer from "../assets/Timer.png";
import Affirmation from "../assets/Affirmation.png";

export default function HomePage() {
  
  const tasks = useSelector((state) => state.tasks.tasks);

  const cardStyle = {
    backgroundColor: '#EBF8DF',
    marginTop: '50px',
    boxShadow: '0 4px 12px rgba(10, 92, 75, 0.2)', 
    borderRadius: '12px'
  };

  return (
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
              {tasks.length > 0 ? (
                <ul>
                  {tasks.map(task => (
                    <li 
                      key={task.id}
                      style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        opacity: task.completed ? 0.6 : 1,
                        color: task.completed ? '#666' : 'inherit'
                      }}
                    >
                      {task.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontStyle: 'italic', color: '#666' }}>
                  No tasks yet. <Link to="/task">Add your first task!</Link>
                </p>
              )}
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
  );
}