import React, {Component} from 'react';
import Button from '../Ui/Button/Button';

import androidLogo from '../../assets/images/androidLogo.png';
import windowsLogo from '../../assets/images/windowsLogo.png';
import appleLogo from '../../assets/images/appleLogo.png';

import classes from './Home.module.scss'
import GetStarted from '../GetStarted/GetStarted';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className={classes.Home}>
                <div className={classes.Intro}>
                    <div className="wrapper">
                        <div className={classes.InroContent}>
                            <a href="https://play.google.com/store/apps/details?id=no.andreglegg.sca"><img src={androidLogo} alt=""/></a>
                            <a href="https://github.com/andreglegg/SCA/releases/download/v0.0.5/Star-Citizen-Assistant-Setup-0.0.5.exe"><img src={windowsLogo} alt=""/></a>
                            <a href="#"><img src={appleLogo} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    {/*<Button type={"Download"} name={"Download"} click={() => console.log("clicked!")} fontSize={'1em'}/>*/}

                </div>
            </div>
            <GetStarted/>
        </React.Fragment>
        );
    }
}


export default Home;
