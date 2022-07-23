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
                        <a className='mail' href="mailto:MinhVy.Ha@outlook.com"><img src="src/assets/Mail.svg" alt="" /> Email</a>
                        <a className='linkedin' href="https://www.linkedin.com/in/minhvyha/" target='_blank'><img src="src/assets/linkedin.svg" alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. </p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Finance. Music. Technology. Sport. Health. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href=""></a>
                    <a href=""></a>
                    <a href="https://www.youtube.com/channel/UC6kYs1bW0j273GneHxFyPFQ"><img className='youtube' src="src/assets/youtube.svg" alt="youtube" /></a>
                    <a href="https://github.com/minhvy828"><img src="src/assets/GitHub Icon.svg" alt="github" /></a>
                </div>
            </div>
        </>
    )
}