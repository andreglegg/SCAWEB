import React, {Component} from 'react';
import classes from './Home.module.scss'
class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <div className={classes.Intro}>
                    <div className="wrapper">
                        <div className={classes.inroContent}>
                            <h1>Intro Content</h1>
                        </div>
                    </div>
                </div>
                Home
            </div>
        );
    }
}


export default Home;
