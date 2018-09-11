import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import './styles.css';


class ListItem extends Component {

    state = {
        buttonIcon: '►',
    };

    changeCurrentIcon = (currentRecord, buttonIcon,changeCurrentRecord) => {
        if (buttonIcon === '►'){
            this.setState({buttonIcon: '❙❙'});
        } else {
            this.setState({buttonIcon: '►'});
        }
        changeCurrentRecord(currentRecord);
    };

    render(){
        const {changeCurrentRecord} = this.props;
        const { buttonIcon} = this.state;
        const currentRecord = this.props.value;

        console.log(this.props);
        return(
            <Card className={'listItem'} onClick={(event)=>{
                this.changeCurrentIcon(currentRecord, buttonIcon, changeCurrentRecord)
            }}>
                <button>{buttonIcon}</button>
                <h4>{currentRecord.name}</h4>
            </Card>
        );
    }
}

ListItem.defaultProps = {
    buttonIcon: '►',
};

export default ListItem;