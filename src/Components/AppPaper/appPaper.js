import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import GenreCard from '../GenreCard';
import Data from '../../Data/dataInfo/dataInfo';

import './styles.css';


class AppPaper extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Paper className={classes.root + ' AppWrapper'} elevation={1}>
                    {
                        Data.map((musicData) =>
                            <GenreCard value={musicData}/>
                        )
                    }
                </Paper>
            </div>
        );
    }
}

export default AppPaper;






