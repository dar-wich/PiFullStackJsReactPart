import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row, Table
} from 'reactstrap';

import usersData from './UsersData'


class Users extends Component {


   removeUser(u){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(u)
    };
    fetch('http://localhost:9000/users/removeUser', requestOptions)
      
      .then((data) => {
        this.componentDidMount()

      })
      .catch(console.log)
  }
  constructor(props) {
    super(props)
    this.addNew = this.addNew.bind(this);
    this.state = {
      users: [],

    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/users/getAllUsers')
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data })

      })
      .catch(console.log)

  }
  addNew(event) {

    var user = {
      companyName: event.target.company.value,
      name: event.target.name.value,
      lastName: event.target.lName.value,
      role: event.target.role.value,
      login: event.target.email.value,
      password: event.target.psw.value,
      date: new Date(),
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };
    fetch('http://localhost:9000/users/addUser', requestOptions)
      .then(res => res.json())
      .then((data) => {
        /*  this.setState({ tweets: data })
          console.log(this.state.tweets)*/


      })
      .catch(console.log)
    this.componentDidMount()
    event.target.name.value=""
      event.target.lName.value=""
      event.target.role.value=""
      event.target.email.value=""
      event.target.psw.value=""
      event.preventDefault();
  }
  render() {
    var u =JSON.parse(localStorage.getItem('user'))

    function TableSuperAdmin(props){
console.log("zazzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
if(u.role=='Super Admin'){

 return  (<Col xs="12" sm="6">
  <Card>
    <CardHeader>
      <strong>Add/Update</strong>
      <small> User</small>
    </CardHeader>
    <CardBody>
      <Form onSubmit={props.event}>
        <FormGroup>
          <Label htmlFor="company">Company</Label>
          <Input type="text" id="company" value="Lufthansa" disabled name="company" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="vat">Name</Label>
          <Input type="text" id="vat" placeholder="Name" name="name" required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="street">Last Name</Label>
          <Input type="text" id="street" placeholder="Last Name" name="lName" required/>
        </FormGroup>
        <FormGroup row className="my-0">
          <Col xs="8">
            <FormGroup>
              <Label htmlFor="city">Email</Label>
              <Input type="text" id="city" placeholder="Email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label htmlFor="postal-code">Password</Label>
              <Input type="password" id="postal-code" name="psw" placeholder="Password" required/>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup >

          <Label htmlFor="role">Role</Label>


          <Input type="select" name="role" id="role" >
            <option value="Admin"  >Admin</option>
            <option value="Super Admin">Super Admin</option>

          </Input>

        </FormGroup>
        <Row>
          <Col xs="6">

            <Button type="submit" color="primary" className="px-4">Submit</Button>
          </Col>

        </Row>
      </Form>
    </CardBody>
  </Card>
</Col>)
}
else {
  return null
}
     
    }
console.log(localStorage.getItem('user'))
   function UserRow(props) {
      const user = props.user
      const userLink = `/users/${user.id}`
    
      const getBadge = (status) => {
        return status === 'Active' ? 'success' :
          status === 'Inactive' ? 'secondary' :
            status === 'Pending' ? 'warning' :
              status === 'Banned' ? 'danger' :
                'primary'
      }
      var u=JSON.parse(localStorage.getItem('user'))
    if(u.role=='Admin'){
      return (
        <tr key={user._id.toString()}>
          <th scope="row"><Link to={userLink}>{user.lastName}</Link></th>
          <td><Link to={userLink}>{user.name}</Link></td>
          <td>{new Date(user.date).getFullYear() + "-" + (new Date(user.date).getMonth() + 1) + "-" + new Date(user.date).getDate()}</td>
          
          <td>{user.role}</td>
          <td><Button onClick={props.event} disabled color='danger'>Remove</Button></td>
        
        </tr>
      )

    }
    else{
      return (
        <tr key={user._id.toString()}>
          <th scope="row"><Link to={userLink}>{user.lastName}</Link></th>
          <td><Link to={userLink}>{user.name}</Link></td>
          <td>{new Date(user.date).getFullYear() + "-" + (new Date(user.date).getMonth() + 1) + "-" + new Date(user.date).getDate()}</td>
          <td>{user.role}</td>
          <td><Button onClick={props.event} color='danger'>Remove</Button></td>
        </tr>
      )
    }
    
    }
    const userList = this.state.users

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Last Name</th>
                      <th scope="col">Name</th>
                      <th scope="col">Registered</th>
                      <th scope="col">Role</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user} event={()=>this.removeUser(user)}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <TableSuperAdmin event={this.addNew}/>
        </Row>
        <Row>
          <Col xl={6}>

          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
