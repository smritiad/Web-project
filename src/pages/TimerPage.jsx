import { Link } from "react-router";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function TimerPage() {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const storedMinutes = localStorage.getItem("timer_minutes");
    if (storedMinutes) {
      setMinutes(parseInt(storedMinutes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timer_minutes", minutes);
  }, [minutes]);

  const incrementMinutes = () => setMinutes((prev) => prev + 1);
  const decrementMinutes = () => setMinutes((prev) => Math.max(0, prev - 1));

  const timerStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#0A5C4B",
    color: "white",
    fontSize: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px auto",
    boxShadow: "0 0 20px rgba(10, 92, 75, 0.4)",
  };

  const controlButtonStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    fontSize: "24px",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  return (
    <>
      <Header />
      <Container className="text-center mt-5">
        <Link to="/">
          <Button variant="dark" className="mb-4">Go Back</Button>
        </Link>

        <div style={timerStyle}>
          {minutes}m
        </div>

        <div className="d-flex justify-content-center gap-4">
          <button
            style={{ ...controlButtonStyle, backgroundColor: "#dc3545" }}
            onClick={decrementMinutes}
            disabled={minutes === 0}
          >
            −
          </button>
          <button
            style={{ ...controlButtonStyle, backgroundColor: "#28a745" }}
            onClick={incrementMinutes}
          >
            +
          </button>
        </div>
      </Container>
    </>
  );
}

export default TimerPage;