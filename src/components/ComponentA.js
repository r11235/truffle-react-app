import React, { Component } from 'react';
import './App.css';
import './ComponentA.css';

class ComponentA extends Component {

	render() {
		return (

                <p>
                
                <p>Website with dog videos created with react <br></br>and deployed in the AWS cloud:
                <br></br>
                <a
                  className="ComponentA-link"
                  href="https://www.doggiedreamtime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                https://www.doggiedreamtime.com/
                </a>
                </p>


                <p>
                Repository for the website:
                <br></br>
                <a
                  className="ComponentA-link"
                  href="https://github.com/r11235/react-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                https://github.com/r11235/react-website
                </a>
                </p>

                </p>


  	)
  }
}


export default ComponentA;