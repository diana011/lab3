import React, { Component } from 'react';
import './App.css';

class Patients extends Component {
  constructor() {
    super();
    this.state = {};
    
    var that = this;
    var url = 'http://hapi.fhir.org/baseDstu3/Patient?_format=json&_pretty=true'
  
    fetch(url).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      if(data !=null){
          var mydata=[];
          var item = data.entry;
          var itemdata = item.filter(function(item){return item.resource.name});
        for(var i=0;i<itemdata.length;i++)
        {
              mydata[i] = {};  
              mydata[i].id = itemdata[i].resource.id;
              mydata[i].fullUrl = itemdata[i].fullUrl;
              mydata[i].lastname = itemdata[i].resource.name[0].family;
              mydata[i].firstname = itemdata[i].resource.name[0].given[0];
              mydata[i].gender = itemdata[i].resource.gender;
              mydata[i].birthDate = itemdata[i].resource.birthDate;

        }
        
        that.setState({
            entry : mydata});
      }
    });
  }
  

   
  render() {
    if(this.state.entry){
      return (<div>
        <div>
          <h1> Patients List </h1>
        </div>
        <table>
          <thead >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FullUrl</th>
              <th scope="col">Last name</th>
              <th scope="col">First name</th>
              <th scope="col">Gender</th>
              <th scope="col">Birthdate</th>      
              <th scope="col">Patient Details</th>          
            </tr>
          </thead>
          <tbody>
        {this.state.entry.filter(function(item){return item.lastname}).map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.fullUrl}</td>              
              <td>{item.lastname}</td>
              <td>{item.firstname}</td>
              <td>{item.gender}</td>
              <td>{item.birthDate}</td>   
              <td>{<button type="button" >Details</button>}</td>  
            </tr>        
        ))}
        </tbody>
        </table>
        <div class="pagination">
          
          <a >1</a>
          <a >2</a>
          <a >3</a>
          <a >4</a>
          <a >5</a>
       
        </div>    
        </div>);
    }else{
      return (
        <div>
          
        </div>
        );
    }
  }
}
export default Patients;