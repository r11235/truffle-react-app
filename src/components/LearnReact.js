import React, { Component } from 'react';
import './App.css';
import './ComponentA.css';

class LearnReact extends Component {

	render() {
		return (

                <div>
                
                <p>Learn React <br></br>
                
                <a
                  className="ComponentA-link"
                  href="https://www.rmreact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                rmreact.com
                </a>
                </p>


                <p>
                rmreact was built with react and AWS Amplify
                <br/>
                <a
                  className="ComponentA-link"
                  href="https://github.com/r11235/amplifyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                github.com/r11235/amplifyapp
                </a>
                </p>

                </div>


  	)
  }
}


export default LearnReact;