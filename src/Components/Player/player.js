import React, { Component } from 'react';

import './styles.css';


class Player extends Component {

    render() {
        const { value, currentRecord } = this.props;
        const fileDir = require('../../Data/audio/' + value.id + '/' + currentRecord.direction);
        
        return (
            <div>
                <h4 className={'currentRecord'}>{currentRecord.name}</h4>
                <audio className={'playerWrapper'} controls>
                    <source type={'audio/mp3'} src={fileDir}/>
                    Обновите ваш браузер
                </audio>
                <p className={'recordDescription'}>{currentRecord.description}</p>
            </div>
        );
    }
}

export default Player;