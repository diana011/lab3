import React, { Component } from 'react';
import './App.css';
import 'bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


class Medication extends Component {
	constructor() {
		super();
		this.state =  {};
    
    var that = this;
    var url = 'http://hapi.fhir.org/baseDstu3/Medication?_format=json&_pretty=true';
  
    fetch(url).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      if(data !=null){
        that.setState(data);
      }
    });
  }
  

   
  render() {
    
    if(this.state.entry){
      console.log(this.state.entry.length);
      console.log(this.state);
      return (<div>
        <div>
          <h1> Medication List </h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FullUrl</th>
              <th scope="col">System</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>

            </tr>
          </thead>
          <tbody>
        {this.state.entry.map((item) => (
            <tr>
              <td>{item.resource.id}</td>
              <td>{item.fullUrl}</td>
              <td>{item.resource.code.coding.map((index) => ( index.system))} 
              </td>
              <td>{item.resource.code.coding.map((index) => ( index.code))} 
              </td>
              <td>{item.resource.code.coding.map((index) => ( index.display))} 
              </td>
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
          Test other
        </div>
        );
    }
  }
}

export default Medication;