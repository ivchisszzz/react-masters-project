import { Container, Row, Col, Image, Button } from "react-bootstrap";
import image from "../images/picture.jpg";
function Home(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            className="tile-image"
            width={1300}
            height={700}
            src={image}
            style={{ borderRadius: "15px 50px" }}
            alt="logo"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <div className="mb-2" style={{ textAlign: "center" }}>
          <Button href="/products" variant="outline-dark">
            Find more
          </Button>
        </div>
      </Row>
    </Container>
  );
}
export default Home;
