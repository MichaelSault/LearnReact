import React, {Component} from 'react';

class App extends Component {
    state = { displayBio: false};


    // constructor() {
    //     super(); //calls the parent companant class
    //     this.state = {displayBio: false};

    //     this.toggleDisplaBio = this.toggleDisplaBio.bind(this); //allows this readMore function to access the App's this
    // }


    toggleDisplaBio = () => {
        this.setState({ displayBio: !this.state.displayBio}); //always call set state instead of directly modifying the state
    }

    render() { //called at the end of the queue, like draw() in processing3

        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Michael Sault.</p>
                <p>I am a recent graduate from the Univeristy of Ottawa's computer science program.</p>

                
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Burlington Ontario, and I have made it my goal to code everyday this year.</p>
                            <p>My languages of choice are Java and Javascript.</p>
                            <p>In terms of web developement I am comfortable with HTML5, CSS, JS, php, mySQL and react.js</p>
                            <button onClick = {this.toggleDisplaBio}>Show Less</button>
                        </div>
                        ) : (
                            //use toggleDisplayBio, not toggleDisplayBio() because it will be called everytime and cause a loop with render()
                            <div>
                                <button onClick = {this.toggleDisplaBio}>Read More</button> 
                            </div>
                        ) 
                }
                
            </div>
        )
    }
}

export default App;

