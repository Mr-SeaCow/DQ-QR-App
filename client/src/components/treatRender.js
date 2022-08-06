import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'
import { Cone, Sundae, Royal } from './components';

class TreatRender extends Component {

    render() {
        return (
            <React.Fragment>
                <Item.Group divided>
                    {this.props.itemInfo.cone.map((itemInfo) => (
                        <Cone key={itemInfo.title} itemInfo={itemInfo} />
                    ))}
                    {this.props.itemInfo.sundae.map((itemInfo) => (
                        <Sundae key={itemInfo.title} itemInfo={itemInfo} />
                    ))}
                    {this.props.itemInfo.royal.map((itemInfo) => (
                        <Royal key={itemInfo.title} itemInfo={itemInfo} />
                    ))}
                </Item.Group>
            </React.Fragment>
        )
    }


};



export default TreatRender;