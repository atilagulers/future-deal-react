import {useState} from 'react';
import {Form, Button, Container, Col, Row, Image} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickGoogle = async function (e) {
    try {
      //console.log(`${process.env.REACT_APP_API}/auth/google`);
      //const res = await axios.get(`${process.env.REACT_APP_API}/auth/google`);
      window.open(`${process.env.REACT_APP_API}/auth/google`, '_self');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSubmit = async function (e) {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
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
        <Col className="d-grid gap-2">
          <Button onClick={handleClickSubmit} variant="primary" type="submit">
            Sign In
          </Button>
          <Row className="my-3 align-items-center">
            <Col xs={5}>
              <hr className="m-0" />
            </Col>
            <Col xs={2} className="text-center">
              or
            </Col>
            <Col xs={5}>
              <hr className="m-0" />
            </Col>
          </Row>

          <Button variant="outline-light" onClick={handleClickGoogle}>
            <Image
              className="me-2"
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Icon"
            />
            Google
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

export default SignInForm;
