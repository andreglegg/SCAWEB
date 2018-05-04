import React, {Component} from 'react';

import classes from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation'
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
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;