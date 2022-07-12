import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='logo-main'>
                    <img src='./image/logo2.png' />
                </div>
                <span>Designed by:</span>
                <h1>PIYUSH SENANI</h1>
                <div className='contact-me'>
                    <a href='https://twitter.com/SenaniPiyush' style={{ "--color": "#158aed" }}><i className='bi bi-twitter'></i></a>
                    <a href='https://www.instagram.com/piyushsenani_/' style={{ "--color": "#f72368" }}><i className='bi bi-instagram'></i></a>
                    <a href='https://www.linkedin.com/in/piyush-senani-056b39146/' style={{ "--color": "#0563bb" }}><i className='bi bi-linkedin'></i></a>
                    <a href='https://github.com/piyush3105' style={{ "--color": "#000" }}><i className='bi bi-github'></i></a>
                    <a href='' style={{ "--color": "#dc3545" }}><i className='bi bi-envelope'></i></a>
                </div>
            </div>
            <footer>
                <div className='footer-logo'>
                    <img src='./image/logo2.png' />
                </div>
                <div class="copyright">
                    © Copyright <strong><span>Resume-Builder</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <a href="https://www.linkedin.com/in/piyush-senani-056b39146/">Ali herawi</a>
                </div>
            </footer>
        </div>
    )
}

export default About
