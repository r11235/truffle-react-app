import React, { Component } from 'react';
import blockdog from '../blockdog.png';
import './App.css';
import Footer from './Footer.js';
//import ComponentA from './ComponentA.js';
import LearnReact from './LearnReact.js';
import LearnBlockchain from './LearnBlockchain.js';
import ComponentB from './ComponentB.js';
import ComponentC from './ComponentC.js';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/dappuniversity/starter_kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blockchain website with Truffle and React using the Dapp University Starter Kit
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={blockdog} className="App-logo" alt="logo" />
                </a>

                <h1>Block<span className="App-span"><b>d</b></span>og</h1>

                <br/><br/>
                
                <p>
                  Learn about blockchain and decentralized apps (DApps).
                </p>

                <br/>

                <ComponentB />

                <br/>

                <LearnBlockchain />

                <br/>

                <ComponentB />

                <br/>

                <LearnReact />

                <br/>

                <ComponentB />

                <br/>



                <br/>

                <ComponentC />

                <br/><br/>


                <a
                  className="App-link"
                  href="https://www.wevideo.com/embed/#1762922337"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Random dog video
                </a>

                <br/><br/>

                <a
                  className="App-link"
                  href="https://www.wevideo.com/embed/#1767941006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Another dog video
                </a>

                <br/><br/>


                <Footer />


              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
