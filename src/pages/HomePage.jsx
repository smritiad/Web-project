import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import Timer from "../assets/Timer.png";
import Affirmation from "../assets/Affirmation.png";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice.js";

export default function HomePage() {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardStyle = {
    backgroundColor: "#EBF8DF",
    boxShadow: "0 4px 12px rgba(10, 92, 75, 0.2)",
    borderRadius: "12px",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#0A5C4B",
    letterSpacing: "0.5px",
    // textTransform: "uppercase",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    borderBottom: "2px solid #0A5C4B",
    paddingBottom: "8px",
    marginBottom: "20px",
    textAlign: "center",
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
          <button
            style={{
              backgroundColor: "#0A5C4B",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
          >
            Go Back
          </button>
        </Link>

       
        <Row className="mb-4">
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title style={headingStyle}>📝 Add a Task</Card.Title>
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

          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title style={headingStyle}> Affirmation of the Day</Card.Title>
                <Card.Img
                  src={Affirmation}
                  alt="Affirmation"
                  className="mx-auto d-block"
                  style={{
                    width: "250px",
                    height: "150px",
                    marginTop: "30px",
                    objectFit: "contain",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row: Centered Timer */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Link to="/timer" style={{ textDecoration: "none", color: "inherit" }}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title style={headingStyle}>⏱️ Timer</Card.Title>
                  <Card.Img
                    src={Timer}
                    alt="Timer"
                    className="mx-auto d-block"
                    style={{
                      width: "250px",
                      height: "150px",
                      marginTop: "30px",
                      objectFit: "contain",
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
