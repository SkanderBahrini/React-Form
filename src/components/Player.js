import { Form,Button, Navbar, Container, FloatingLabel } from "react-bootstrap";

const Player = () => {
    return ( 

 <div className="player">
    <div className="nav">
<Navbar bg="secondary">
    <Container>
      <Navbar.Brand href="#home">Choose player</Navbar.Brand>
    </Container>
  </Navbar>
    </div>
<div className="head">
    <div className="title">
        <h1> Choose your Player </h1>
    </div>
    <iframe src="https://giphy.com/embed/g0SY6YRFmzYnm" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</div>
<br/>
<br/>

<div className="container">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {/*Name*/}
    <Form.Label className="label">Name</Form.Label>
    <Form.Control type="text" placeholder="Enter   Name" />
    <Form.Text   className="label">
      We want to know !
    </Form.Text>
  </Form.Group>
   {/*Team */}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label">Team</Form.Label>
    <Form.Control type="password" placeholder="Enter Team" />
  </Form.Group>
  {/*Post */}
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label">Position</Form.Label>
    <Form.Control type="password" placeholder="Enter his/her Position" />
  </Form.Group>
  {/* Why you love him*/}
  <>
  <Form.Label className="label">Why do you love him/her ?</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <br/>
   <Form.Label className="label"> Rate  him/her ?</Form.Label>
   <>
+
  <Form.Range />
</>
</>
{/*Rate him/her */}

<br/>
<br/>
  <Button variant="light" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
     );
}
 
export default Player;