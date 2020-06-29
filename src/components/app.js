import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title  from './title';
import profile from '../assets/images/profile.png';


class App extends Component {
    state = { displayBio: false};

    toggleDisplaBio = () => {
        this.setState({ displayBio: !this.state.displayBio}); //always call set state instead of directly modifying the state
    }

    render() { //called at the end of the queue, like draw() in processing3

        return (
            <div>
                <img src = {profile} alt='profile' className = 'profilePhoto'/>
                <h1>Welcome!</h1>
                <p>My name is Michael Sault.</p>

                <Title />

                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Burlington, Ontario</p>
                            <p>My languages of choice are Java and Javascript.</p>
                            <p>I am also comfortable with HTML5, CSS, JS, Php, mySQL, React.js and Python</p>
                            <button onClick = {this.toggleDisplaBio}>Show Less</button>
                        </div>
                        ) : (
                            //use toggleDisplayBio, not toggleDisplayBio() because it will be called everytime and cause a loop with render()
                            <div>
                                <button onClick = {this.toggleDisplaBio}>Read More</button> 
                            </div>
                        ) 
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                
            </div>
        )
    }
}

export default App;

