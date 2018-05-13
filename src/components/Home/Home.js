import React, {Component} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import androidLogo from '../../assets/images/androidLogo.png';
import windowsLogo from '../../assets/images/windowsLogo.png';
import appleLogo from '../../assets/images/appleLogo.png';

import classes from './Home.module.scss'


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {console.info("I am one with the code and the code is with me.")}
                <div className={classes.Home}>
                    <div className={classes.Intro}>
                        <div className="wrapper">
                            <div className={classes.InroContent}>
                                {/*<a href="https://play.google.com/store/apps/details?id=no.andreglegg.sca"><img
                                    src={androidLogo} alt=""/></a>
                                <a href="https://github.com/andreglegg/SCA/releases/download/v0.0.5/Star-Citizen-Assistant-Setup-0.0.5.exe"><img
                                    src={windowsLogo} alt=""/></a>
                                <a href="/#"><img src={appleLogo} alt=""/></a>*/}
                            </div>
                        </div>
                    </div>
                    <div className={classes.DescriptionWrap}>
                        <div className={classes.Description}>
                            <p>Star Citizen Assistant is a tablet/phone app that helps you control your ship in Star
                                Citizen.
                                It comes in two parts, a tablet/phone app and a windows client. </p>

                            <p>On the app you can add buttons, customize
                                them with different colors and bind them to keys matching your Star Citizen
                                keybinds. </p>
                            <p>The windows client runs a server that receives commands from the mobile app, it then sends those commands to Star Citizen. Currently this
                                is a one man project but I'm actively developing these apps and adding new features
                                regularly. If you would like to give it a try <Link to="gettingStarted" style={{cursor: 'pointer'}} spy={true} smooth={true} duration={200} >follow the getting started guide.</Link></p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


export default Home;
