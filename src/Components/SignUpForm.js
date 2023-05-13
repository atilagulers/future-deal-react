import {Form, Button, Container} from 'react-bootstrap';

function SignUpForm() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: '80vh'}}
    >
      <Form style={{width: '100%', maxWidth: '400px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            className="text-light"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUpForm;
