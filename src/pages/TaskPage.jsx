import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

function TasksPage() {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: '#EBF8DF',
    boxShadow: '0 4px 12px rgba(10, 92, 75, 0.2)', 
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: task })
      });
      setTask("");
      navigate("/home");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
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
    </Container>
  );
}

export default TasksPage;


