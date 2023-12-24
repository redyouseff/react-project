import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { useHistory } from "react-router-dom";


function FormExample() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [city, setCity] = useState("cairo");
  

  const Isvalidate = () => {
    let isprocessed = true;
    let errMassage ="please enter the value in "
    if(firstname===null || firstname===""){
      isprocessed=false
      alert(errMassage+" First Name ")
    } if(lastname===null || lastname===""){
      isprocessed=false
      alert(errMassage+" Last Name ")
    } if(email===null || email===""){
      isprocessed=false
      alert(errMassage+"  Gmail ")
    } if(password===null || password===""){
      isprocessed=false
      alert(errMassage+" Password ")
    }
    return isprocessed;
  };
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (Isvalidate()) {
      event.preventDefault();
      const data = { firstname, lastname, email, password ,city};
      console.log(data);
      await fetch("http://localhost:9000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log("done");
    
          history.push("/login");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }else{
      alert("WRONG AT REFISTER OPERATION")
    }

  };

  return (
    <Container style={{ marginTop: 80 }}>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>gmail</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                
                type='email'
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="State"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="City" 
              value={city}
              onChange={e=>setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default FormExample;
