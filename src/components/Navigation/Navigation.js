import React, {Component} from 'react';

import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';

import classes from './Navigation.module.scss';
import logo from '../../assets/images/logo.png';

class Navigation extends Component {
    state = {
        slideoutActive : false,
    };

    handlerSlideoutClicked = () => {
        this.setState({
            slideoutActive : !this.state.slideoutActive
        })
    };

    render() {
        return (
            <div className={classes.Navigation}>
                <div className="wrapper">
                    <header>
                        <a href="#"><img src={logo} className={classes.LogoImg} alt="logo"/><span className={classes.LogoHide}>Star Citizen Assistant</span></a>
                        <Desktop/>
                        <Mobile slideoutActive={this.state.slideoutActive} slideOutClicked={this.handlerSlideoutClicked}/>
                    </header>
                </div>
            </div>
        );
    }
}

export default Navigation;
