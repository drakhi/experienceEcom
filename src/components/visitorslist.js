import React, { Component } from 'react';
import { render } from 'react-dom';
import service from '../Services/restapi'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
//import Visitor from '../presentationComponents/visitor';


export default class Visitorslist extends Component {
  constructor() {
    super();
    this.state = {
        modalShow:false,
        userlist:[],
 login:{
    name: '',
    email: '',
    typeofvisit:'',
    persontovisit: '',
    date: '',
    timetoentry: '',
    timetoexist:''

 }


    };
  }

  componentDidMount() {
 //   this.getLatestnews()
 if( sessionStorage.getItem('users')!==null){
    let user= JSON.parse(sessionStorage.getItem('users'))
    this.setState({userlist:user})

}
  }

  setModalShow=(value)=>{
this.setState({modalShow:value})
  }

  submitvisitor=()=>{

    if( sessionStorage.getItem('users')==null){
        let user=this.state.userlist
        user.push(this.state.login)
this.setState({userlist:user})
   sessionStorage.setItem('users',JSON.stringify(user))
    }
    else{
        let user= JSON.parse(sessionStorage.getItem('users'))
        user.push(this.state.login)
        this.setState({userlist:user})
        sessionStorage.setItem('users',JSON.stringify(user))
    }
   

  }

  handleChange=(e)=>{
      let name=e.target.name
      let login=this.state.login
      login[name]=e.target.value
this.setState({login:login})
  }



  render() {
    return (
        <div>
            <div>Add Visitor:</div>
            <div className="visitor">


<div className="row">

<br/>
  <div className="form-group col-md-4">
    <label htmlFor="name">enter name:</label>
    <input type="text" className="form-control" placeholder="Enter Name" value={this.state.login.name}  name="name"  onChange={this.handleChange} id="name"/>
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="email">Email:</label>
    <input type="email" className="form-control" name="email" placeholder="Enter email"  value={this.state.login.email}    onChange={this.handleChange} id="email"/>
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="sel1">Type of meeting:</label>
    <select  id="sel1" className="form-control" name="typeofvisit"   value={this.state.login.typeofvisit}    onChange={this.handleChange}>
    <option value={'Meeting'}>Meeting</option>
    <option value={'Delivery'}>Delivery</option>
    <option value={'Personal'}>Personal</option>
  </select>
    {/* <input type="text" className="form-control" name="typeofvisit"  value={this.state.typeofvisit}    onChange={this.handleChange} id="meet"/> */}
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="person">Person to meet:</label>
    <input type="text" className="form-control" name="persontovisit"  placeholder="Enter name" value={this.state.login.persontovisit}  onChange={this.handleChange} id="person"/>
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="date">Date:</label>
    <input type="date" className="form-control" name="date"  value={this.state.login.date}   onChange={this.handleChange} id="date"/>
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="te">time to entry:</label>
    <input type="time" className="form-control" name="timetoentry"  value={this.state.login.timetoentry}  onChange={this.handleChange} id="te"/>
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="tx">time to exist:</label>
    <input type="time" className="form-control"   name="timetoexist" value={this.state.login.timetoexist}   onChange={this.handleChange} id="tx"/>
  </div>
  <div className="form-group col-md-4" style={{marginTop:"21px"}}>
  <button type="button" onClick={this.submitvisitor} className="btn btn-default">Submit</button>
  </div>
  
</div>
</div>
            
  {/* <Button variant="outline-primary"  style={{float:"right"}} onClick={() => this.setModalShow(true)}>Primary</Button> */}
        <Table striped bordered hover responsive	
>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Email</th>
      <th>Type of visit</th>
      <th>Person to visit</th>
      <th> Date</th>
      <th>Time in </th>
      <th>Time Out</th>
      
      
    </tr>
  </thead>
  <tbody>
   
 
     {this.state.userlist.map((item,i) => (
        <tr key={i}>
         <td>{i+1}</td>
         <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.typeofvisit}</td>
         <td>{item.persontovisit}</td>
         <td>{item.date}</td>
         <td>{item.timetoentry}</td>
         <td>{item.timetoexist}</td>
         </tr>
    ))} 
    

  </tbody>
</Table>

{/* <Visitor show={this.state.modalShow} handelsubmit={(e)=>this.submitvisitor} onHide={() => this.setModalShow(false)} /> */}
</div>

    );
  }
}