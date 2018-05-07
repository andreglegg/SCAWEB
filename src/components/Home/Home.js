import React, {Component} from 'react';
import Button from '../Ui/Button/Button';

import androidLogo from '../../assets/images/androidLogo.png';
import windowsLogo from '../../assets/images/windowsLogo.png';
import appleLogo from '../../assets/images/appleLogo.png';

import classes from './Home.module.scss'

class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <div className={classes.Intro}>
                    <div className="wrapper">
                        <div className={classes.InroContent}>
                            <a href="#"><img src={androidLogo} alt=""/></a>
                            <a href="https://github.com/andreglegg/SCA/releases/download/v0.0.3/Star-Citizen-Assistant-Setup-0.0.3.exe"><img src={windowsLogo} alt=""/></a>
                            <a href="#"><img src={appleLogo} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    {/*<Button type={"Download"} name={"Download"} click={() => console.log("clicked!")} fontSize={'1em'}/>*/}
                    <h1 style={{textAlign: 'center', fontSize: 26, marginTop: 26}}>The Star Citizen Assistant apps including this website are in early development.</h1>
                    <h3>Status</h3>
                    <ul>
                        <li>Windows Host App: 0.0.3(live)</li>
                        <li>Android Client App: 0.0.3(live)</li>
                        <li>iPhone Client App: 0.0.3(pre-release)</li>
                        <li>Website: 0.0.2(live)</li>
                    </ul>
                    <p style={{textAlign: 'center', fontSize: 16}}>Made by Andre Glegg</p>
                </div>
            </div>
        );
    }
}


export default Home;
