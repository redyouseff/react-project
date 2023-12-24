import axios from "axios";
import {  useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Islogged } from "../redux/action";

function BasicExample() {
  const [user,setuser]=useState(localStorage.getItem("name"));
  
  const dispatch = useDispatch()

  const loged = (logged) => {
    // console.log(Islogged());
      dispatch(Islogged(logged))
  }
  useEffect(()=>{
    

  },[user])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const validate = () => {
    let result = true;
    if (email === null || email === "") {
      result = false;
      alert("please enter email");
    }
    if (password === null || password === "") {
      result = false;
      alert("please enter password");
    }
    // console.log("session",sessionStorage.getItem('isLoggedIn'))
    return result;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios
          .get(`http://localhost:9000/user?email=${email}`)
          .then((response) => {
            const dataUser =response.data[0]
            console.log(dataUser);
            if(dataUser===undefined){
              alert('INVALED USER')
            }else{
              if(dataUser.password===password){
               loged(true)
                history.push('/')
                localStorage.setItem("name",dataUser.firstname)
                  setuser(localStorage.setItem("name",dataUser.firstname))
                 
              }else{
                alert('WRONG PASSWORD')
              }
            }
          });
      } catch (err) {
        console.log(err.message);
        alert('Login failed due to :'+err.message)
      }
    }
  };

  // useEffect(()=>{
  //   // sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
  //   dispatch(Islogged(false))

  // },[dispatch])

  return (
    <Container style={{ marginTop: 80 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
