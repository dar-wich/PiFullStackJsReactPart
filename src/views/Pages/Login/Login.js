import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {browserHistory} from 'react-router'
import { Redirect } from 'react-router-dom';
class Login extends Component {


  state = {
    redirect: false
  }
  setRedirect = (event) => {
var obj={
  email:document.getElementById("email").value,
  password:document.getElementById("password").value
}

fetch('http://localhost:9000/users/login?email='+document.getElementById("email").value+'&password='+document.getElementById("password").value)
    .then((res)=>
    res.json()
    
      
      
    ).then((data)=>{
      
      
      if(JSON.stringify(data)!=[]){
        console.log(JSON.stringify(data))
        localStorage.setItem('user',JSON.stringify(data))
        return <Redirect to='/' />
      }
    })
    
  // alert(localStorage.getItem("user"))
  // setTimeout(() => {
    
    
      
      
      
    
    
 //  }, 2000);
   
    
  }
  renderRedirect = () => {
   // alert(localStorage.getItem("user"))
   var o = localStorage.getItem("user")
      alert(o)
     // return <Redirect to='/' />
    
  }
 
  
  render() {
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form  >
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account company</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" name="email" id="email" autoComplete="email" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="password" name="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                       
                          <Button  onClick={this.setRedirect}  color="primary" className="px-4">Login</Button>
                        </Col>
                       
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              
                <img   src={'../../assets/img/lufthansa.jpg'}   alt="admin@bootstrapmaster.com" />
              
              
                    
               
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
