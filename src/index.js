//note to self --> cd to this dir --> use npm run start to view webpage in browser

//libraries needed for react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/app.js';
import Jokes from './components/Jokes.js'
import './index.css'; //import stylesheet into js page

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
);



//************************Examples**********************************/

//use a promise method to make the app wait for the fetch to resolve before
//running the rest of the script
//also example of error handeling

/* new Promise((reslove, reject) => {
    return reject(new Error ('no bears'));

    setTimeout(() => {
        reslove('Bears, Beats, Battlestar Galactica');
    }, 2000);
})
.then(quote =>{
    console.log(quote)
    }
)
.catch(error => console.log('error', error)); */



