import React, {Component} from 'react';

import classes from './Layout.module.scss'
import Navigation from '../components/Navigation/Navigation'
import Home from '../components/Home/Home';
import GetStarted from '../components/GetStarted/GetStarted';
import Roadmap from '../components/Roadmap/Roadmap';
import Footer from '../components/Footer/Footer';
//import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
/*
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    };

    sideDrawerToggleHandler = () => {

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    };
*/

    render() {
        return (
            <React.Fragment>
                <Navigation drawerToggleClicked={this.sideDrawerToggleHandler}/>
                {/*<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>*/}
                <Home/>
                <GetStarted/>
                <Roadmap/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Layout;