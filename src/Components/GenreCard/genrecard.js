import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import './styles.css';


class GenreCard extends Component {

    render() {
        const {classes, value} = this.props;

        return (
            <Link to={{
            pathname:'/playlist',
            state:{ value }
            }}>
                <Card className={classes.card}>
                    <a  className={'cardLink'}>
                        <CardMedia>
                            <img src={require('../../Data/preview/' + value.preview)}  alt='CardImage' className={'CardImage'} />
                        </CardMedia>
                        <CardContent className={'cardContent'}>
                            <Typography gutterBottom variant="headline" component="h2">
                                {'Жанр: ' + value.title}
                            </Typography>
                            <Typography component="p">
                                {'Подборка'}
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            </Link>
        );
    }
}

export default GenreCard;