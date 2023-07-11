import React, { Component } from 'react';
import './App.css';
import './ComponentA.css';
//https://www.dappuniversity.com/bootcamp
//websites = [https://www.dappuniversity.com/, https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology] 
//create mapping <ul><a>,
//website_names = [dappuniversity.com, simplilearn.com]
//const x=website for x in websites
//{simplilearn.com:https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology, 
// }

//mapping function

class LearnBlockchain extends Component {

	render() {
		return (

                <div>

                <br/>
                
                <b>Learn Blockchain</b><br></br>
                <br></br>
                <a
                  className="App-link"
                  href="https://www.dappuniversity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dappuniversity.com
                </a>

                <br/><br/>
                
                <a
                  className="ComponentA-link"
                  href="https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                simplilearn.com
                </a>
                <br/><br/>

                <a
                  className="ComponentA-link"
                  href="https://builtin.com/blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                builtin.com/blockchain
                </a>
                <br/><br/>

                <a
                  className="ComponentA-link"
                  href="https://en.wikipedia.org/wiki/Blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                wikipedia.org/wiki/Blockchain
                </a>
                <br/><br/>

                <a
                  className="ComponentA-link"
                  href="https://trufflesuite.com/docs/truffle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                trufflesuite.com/docs/truffle
                </a>
                <br/><br/>


                </div>


  	)
  }
}


export default LearnBlockchain;