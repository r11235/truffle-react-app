import React from 'react';
import './Footer.css';
import blockdog from '../blockdog.png';

function Footer () {
    return (
            <div>

              <footer className="Footer">

                Videos created with WeVideo <br/>

                App and Videos by Rachel Malucci <br/>

                <a className="Footer-link"
                   href="https://github.com/r11235"
                   target="_blank"
                   rel="noopener noreferrer"
                > github.com/r11235 </a>

                <br/><br/><br/>

                <div>
                    <img src={blockdog} className="App-logo" alt="logo" />

                    <br/><br/>

                </div>

              </footer>

            </div>
    )
};

export default Footer;