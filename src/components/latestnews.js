import React, { Component } from 'react';
import { render } from 'react-dom';
import service from '../Services/restapi'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Latestnews extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      users: []
    };
  }

  componentDidMount() {
    this.getLatestnews()

  }

  getLatestnews=()=>{
     ;// alert(123)
    let self = this;
    let uri="?q=bitcoin&from=2020-11-03&sortBy=publishedAt&apiKey=b13d0afb31724d0183b396f570fb6f03"

    service.axiosGetmethod(uri)
      .then(function (response) {
        self.setState({
          users: response.articles
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
  
<div >
        <Table striped bordered hover responsive	
>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Author</th>
      <th>Title</th>
      <th>Description</th>
      <th>published Date</th>
      <th>Uri</th>
      <th>Content</th>
      <th>image</th>
      
      
    </tr>
  </thead>
  <tbody>
   
    {this.state.users.map((item,i) => (
        <tr key={i}>
         <td>{i+1}</td>
    <td>{item.source.name}</td>
    <td>{item.author}</td>
         <td>{item.title}</td>
         <td>{item.author}</td>
         <td>{item.description}</td>
         <td>{item.publishedAt}</td>
         <td>{item.content}</td>
         <td> <Image src={item.urlToImage} fluid /></td>
         </tr>
    ))}
    

  </tbody>
</Table>
</div>

    );
  }
}