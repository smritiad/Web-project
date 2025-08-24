import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { completeAndDeleteTask } from "../redux/taskSlice.js";
import Header from "../components/Header";
import { Link } from "react-router"; 

function TasksPage() {
  const tasks = useSelector((state) => state.tasks.tasks); 
  const dispatch = useDispatch();

  const cardStyle = {
    backgroundColor: "#EBF8DF",
    boxShadow: "0 4px 12px rgba(10, 92, 75, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "800px",
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

  const taskItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '12px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const handleCompleteTask = (taskId) => {
    dispatch(completeAndDeleteTask(taskId));
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
            <Card.Title style={headingStyle}>📋 Your Tasks</Card.Title>
            <Card.Text className="mb-4"></Card.Text>

            {tasks.length > 0 ? (
              <div>
                {tasks.map((task) => (
                  <div key={task.id} style={taskItemStyle}>
                    <span
                      style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        opacity: task.completed ? 0.6 : 1,
                        color: task.completed ? "#666" : "#0A5C4B",
                        fontSize: "16px",
                        fontWeight: "500",
                        flex: 1,
                        marginRight: "15px"
                      }}
                    >
                      {task.text}
                    </span>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleCompleteTask(task.id)}
                      style={{ 
                        fontSize: '12px', 
                        padding: '6px 12px',
                        borderRadius: '6px'
                      }}
                    >
                      Complete
                    </Button>
                  </div>
                ))}
              </div>
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