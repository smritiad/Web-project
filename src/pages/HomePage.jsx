import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router"; 
import Timer from "../assets/Timer.png";
import Affirmation from "../assets/Affirmation.png";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice.js";
import { Form, Button } from "react-bootstrap";

export default function HomePage() {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const cardStyle = {
    backgroundColor: '#EBF8DF',
    marginTop: '50px',
    boxShadow: '0 4px 12px rgba(10, 92, 75, 0.2)', 
    borderRadius: '12px'
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task.trim()));
      setTask("");
      navigate("/home");
    }
  };

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
        <Card style={cardStyle}>
        <Card.Body>
          <Card.Title className="mb-3 text-center">Add a Task</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskInput">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ resize: "vertical", minHeight: "80px" }}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="mt-3">
                Add Task
              </Button>
            </div>
          </Form>
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