import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice.js";

function TasksPage() {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardStyle = {
    backgroundColor: '#EBF8DF',
    boxShadow: '0 4px 12px rgba(10, 92, 75, 0.2)', 
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Dispatch the task to Redux store
      dispatch(addTask(task.trim()));
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