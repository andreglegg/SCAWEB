import React, {Component} from 'react';
import Layout from './containers/Layout'
import Home from './components/Home/Home'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {



    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path="/" component={Layout} />
                    </Switch>
            </Router>
        );
    }
}

export default App;
