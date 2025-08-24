import React from "react";
import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router"; 

function TasksPage() {
  const tasks = useSelector((state) => state.tasks.tasks); 

  const cardStyle = {
    backgroundColor: "#EBF8DF",
    boxShadow: "0 4px 12px rgba(10, 92, 75, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
  };
  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#0A5C4B",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    borderBottom: "2px solid #0A5C4B",
    paddingBottom: "8px",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <>
      <Header />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card style={cardStyle}>
          <Card.Body>
          <Card.Title style={headingStyle}>📝 Add a Task</Card.Title>
            <Card.Text className="mb-4"></Card.Text>

            {tasks.length > 0 ? (
              <ul style={{ paddingLeft: "1rem" }}>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      opacity: task.completed ? 0.6 : 1,
                      color: task.completed ? "#666" : "#0A5C4B",
                      marginBottom: "8px",
                    }}
                  >
                    {task.text}
                  </li>))}</ul>
            ) : (
              <p className="text-muted text-center">
                No tasks yet.{" "}
                <Link to="/home" style={{ color: "#0A5C4B", fontWeight: "500" }}>
                  Add your first task!
                </Link>
              </p>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default TasksPage;