import {
  Container,
  Navbar
} from "react-bootstrap";

export function UnauthenticatedNav() {
  return (
    <Navbar bg="light" className="shadow-sm" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="text-muted">
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
