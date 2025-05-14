import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Card border="danger" className="text-center m-3">
          <Card.Header>Perfil</Card.Header>
          <Card.Img
            variant="top"
            src="https://cdn.vectorstock.com/i/1000v/22/50/developer-line-icon-outline-vector-30762250.avif"
            alt="Imagen de Perfil"
          />
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>
              <p>Nombre: johndoe</p>
              <p>Email: correo@pizzamail.com</p>
            </Card.Text>
            <Button variant="danger">Cerar Sesión</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Profile