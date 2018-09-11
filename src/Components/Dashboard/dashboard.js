import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Playlist from "../Playlist";
import AppPaper from "../AppPaper";

import './styles.css';


class Dashboard extends Component {
    render() {
        return (
            <div className='Wrapper'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="title" color="inherit">
                            <Link to={{pathname:'/'}}>
                                <h4 className={'DashboardTitle'}>Music</h4>
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path='/' component={AppPaper}/>
                    <Route exact path='/playlist' component={Playlist}/>
                </Switch>
            </div>
        );
    }
}

export default Dashboard;


