import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {browserHistory} from 'react-router'
import { Redirect } from 'react-router-dom';
class Login extends Component {
constructor(props){
  super(props);
  this.validate=this.validate.bind(this)
  this.state = {
    redirect: false,
    msg:'',
    msgemail:''
  }
}

  

  validate(e){

    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)!=true){
      this.setState({msgemail:'Invalid mail'})
    }
     if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)==true) {
      
      this.setState({msgemail:''})
    }
  }
  setRedirect()  {
var test = false;

fetch('http://localhost:9000/users/login?email='+document.getElementById("email").value+'&password='+document.getElementById("password").value)
    .then((res)=>
    res.json()
    
      
      
    ).then((data)=>{
      
      
     // alert(this.state.redirect)
     if(data._id==null){
      this.setState({redirect:false})

    this.setState({msg:'Verify your email or password'})
     }
    
     else if(data._id!=null){
      this.setState({redirect:true})
      
      localStorage.setItem('user',JSON.stringify(data))
     }
   })
    
 

    
  }
  renderRedirect =() =>{
    

    if (this.state.redirect) {

      return <Redirect to='/dashboard' />
    }
 
   
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
                        <Input type="email" onBlur={this.validate} required placeholder="Email" name="email" id="email" autoComplete="email" />
                      </InputGroup>
                      <div id="msgemail" ><p  style={{color: "red"}}>{this.state.msgemail}</p></div>
                      
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" required id="password" name="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <div id="msg" ><p  style={{color: "red"}}>{this.state.msg}</p></div>
                        {this.renderRedirect()}
                          <Button  onClick={()=>this.setRedirect()} color="primary" className="px-4">Login</Button>
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
