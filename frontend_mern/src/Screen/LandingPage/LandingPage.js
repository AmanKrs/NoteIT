import { Button, Col, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome To NoteIT</h1>
                <p className="caption">Best Place to Keep your Notes</p>
              </div>
            </div>
          </Row>
          <Row className="buttonContainer">
            <Col>
              <a href="/login">
                <Button
                  size="lg"
                  className="landingBtn"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
            </Col>
            <Col>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingBtn"
                  variant="outline-primary"
                >
                  Sign Up
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
