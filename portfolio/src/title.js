import React, {Componant} from 'react';

const TITLES = [
    'recent graduate of Univeristy of Ottawas computer science program.',
    'software developer',
    'video editor',
    'distance runner'
];

class Title extends Componant {
    state = { titleIndex: 0};

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am a {title}</p>
        )
    }
}

export default Title;