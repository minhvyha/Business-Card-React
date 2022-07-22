import React from 'react'
import './MainContent.css'

export default function MainContent(){
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                    <img className='main-img' src="src/assets/me.png" alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Minh Vy Ha</h2>
                    <h4 className='role'>Full-Stack Developer</h4>
                    <h5 className='web'>minhvyha.tech</h5>
                    <div className='connect'>
                        <a href="mailto:MinhVy.Ha@outlook.com">Email</a>
                        <a href="https://www.linkedin.com/in/minhvyha/" target='_blank'>LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. I am excited about all the opportunities where I can work and learn new technologies related to my career. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Finance. Music. Technology. Sport. Health.</p>
                    </div>
                </div>
            </div>
        </>
    )
}