import React, {Component} from 'react';

const TITLES = [
    'recent graduate of Univeristy of Ottawas computer science program.',
    'software developer',
    'distance runner'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2500);

        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex, fadeIn: true});

            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2500);
        }, 5000);
    }


    render() {
        const { fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am a {title}</p>
        )
    }
}

export default Title;