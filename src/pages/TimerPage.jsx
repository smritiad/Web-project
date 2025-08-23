import { Link } from "react-router";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CartPage() {
  const cardStyle = {
    backgroundColor: "#EBF8DF",
    marginTop: "50px",
    boxShadow: "0 4px 12px rgba(10, 92, 75, 0.2)",
    borderRadius: "12px",
    textAlign: "center",
    padding: "20px"
  };

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

  const incrementMinutes = () => {
    setMinutes((prev) => prev + 1);
  };

  const decrementMinutes = () => {
    setMinutes((prev) => Math.max(0, prev - 1));
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
              transition: "background-color 0.3s ease"
            }}
          >
            Go Back
          </button>
        </Link>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Timer</Card.Title>
                <Card.Text style={{ fontSize: "24px", marginBottom: "20px" }}>
                  {minutes} minute{minutes !== 1 ? "s" : ""}
                </Card.Text>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="danger"
                    onClick={decrementMinutes}
                    disabled={minutes === 0}
                  >
                    −
                    </Button>
                    <Button variant="success" onClick={incrementMinutes}> +  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartPage;