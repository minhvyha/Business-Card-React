import React from 'react'
import './MainContent.css'

export default function MainContent(){
    return (
        <>
            <div>
                <img className='main-img' src="src/assets/me.png" alt="me" />
                <h2>Minh Vy Ha</h2>
                <h4>Full-Stack Developer</h4>
                <h5>minhvyha.tech</h5>
                <div>
                    <a href="mailto:MinhVy.Ha@outlook.com">Email</a>
                    <a href="https://www.linkedin.com/in/minhvyha/" target='_blank'>LinkedIn</a>
                </div>
                <div>
                    <h3>About</h3>
                    <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. I am excited about all the opportunities where I can work and learn new technologies related to my career. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p>Finance. Music. Technology. Sport. Health.</p>
                </div>
            </div>
        </>
    )
}