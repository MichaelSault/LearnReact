import React,  {Component} from 'react';

class Jokes extends Component {
    state = {joke: {}};

    componentDidMount() {
        //use a promis (a var that will have a val in the future)
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState( {joke: json}));
        
    }

    render() {
        const {setup, punchline} = this.state.joke;
        return (
            
            <div>
                <h2>Highlighted Joke:</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;