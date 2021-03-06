import React from 'react';
import Button from '../Ui/Button/Button';

import classes from './GetStarted.module.scss'
import clickStart from '../../assets/images/clickStart.png';
import editPort from '../../assets/images/editPort.png';
import displayedPort from '../../assets/images/displayedPort.png';

const GetStarted = (props) => {
    return (
        <div className={classes.GetStarted} name="gettingStarted">
            <div className="wrapper">
                <h1>Getting Started</h1>
                <ol className={classes.TiltedList}>
                    <li>
                        <p>Download and Install the Windows client</p>
                        <p><Button type={"Download"} name={"Download"}
                                   click={() => window.open('https://github.com/andreglegg/SCA/releases/download/v0.0.7/Star-Citizen-Assistant-Setup-0.0.7.exe', '_blank')}
                                   fontSize={'1em'}/></p>
                    </li>
                    <li>
                        <p>Install the Android App from Google Play Store</p>
                        <p><Button type={"Download"} name={"Install From Google Play Store"}
                                   click={() => window.open('https://play.google.com/store/apps/details?id=no.andreglegg.sca', '_blank')}
                                   fontSize={'1em'}/></p>
                    </li>
                    <li>
                        <p>Click Start on the Windows client</p>
                        <img src={clickStart} alt="click start"/>
                    </li>
                    <li>
                        <p>Open the Android app then go to settings and enter the IP and PORT which was displayed in the
                            Windows client</p>
                        <img src={displayedPort} alt="address"/>
                        <img src={editPort} alt="edit port"/>
                    </li>
                    <li>Customize your buttons from the settings screen by tapping on the button you would like to edit
                        and enjoy! <iframe width="560" height="315" src="https://www.youtube.com/embed/orVt1NzHdlA?rel=0&amp;controls=1&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowFullScreen"></iframe>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default GetStarted;
