import React, {Component} from 'react';
import classes from './Home.module.css'
class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <div className={classes.Intro}>
                    <div className="wrapper">
                        intro content
                    </div>
                </div>
                Home
            </div>
        );
    }
}


export default Home;
