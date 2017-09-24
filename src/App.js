import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormControl from 'react-bootstrap/lib/FormControl'
const marked = require("marked");

class App extends Component {

  state = {
    markdown: '\n# This is an h1 tag\n\n## This is an h2 tag\n\n*This text will be italic*\n\n**This text will be bold**\n\n* Item 1'
  }

  updateMarkdown = (markdown) => {
    this.setState({markdown});
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Markdown Previewer by João Henrique</h1>
          <h3>1st FreeCodeCamp DataVisualization Project Using React</h3>
        </div>

        <div className="row col-md-12">

{/*  INPUT CONTENT  /////////////////////*/}
          <div className="container col-md-6" >
            <div style={{ paddingLeft:"20%"}}>
              <h1>Enter text here</h1>
              <FormControl componentClass="textarea" placeholder="Enter your text here" rows="10"  value={this.state.markdown} onChange= {(event) => this.updateMarkdown(event.target.value)}></FormControl>
            </div>
          </div>

{/*  OUTPUT CONTENT  /////////////////////*/}
          <div className="container col-md-6">
            <div>
              <div style={{textAlign:"left", paddingLeft:"20%", paddingTop:"40px"}} dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
