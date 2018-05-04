import React, {Component} from 'react';
import Layout from './containers/Layout'
import Home from './components/Home/Home'

class App extends Component {
    render() {
        return (
            <Layout>
                <Home/>
            </Layout>
        );
    }
}

export default App;
