import {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import axios from 'axios';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async function (e) {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: '80vh'}}
    >
      <Form style={{width: '100%', maxWidth: '400px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            className="text-light"
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default SignInForm;
