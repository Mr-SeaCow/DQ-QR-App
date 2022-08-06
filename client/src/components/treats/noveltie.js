import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class Noveltie extends Component {

    itemInfo = {...this.props.itemInfo}

    renderDips() {
        if ('dipOption' in this.itemInfo)
            return (
                <React.Fragment>
                    <Item.Description>
                        <Item as="h4">Flavor Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>

                            {this.itemInfo.dipOption.map((item) => (
                                <React.Fragment key={item}>
                                    <List.Item>{item}</List.Item>
                                </React.Fragment>
                            ))}

                        </List>
                    </Item.Extra>
                </React.Fragment>
            )
        else
            return null;
    }

    render() {
        return (
            <Item>
                <Item.Image size='small' src={this.itemInfo.image} />
                <Item.Content>
                    <Item.Header>{this.itemInfo.title}</Item.Header>
                    <Item.Meta>${this.itemInfo.price} | 6-Pack ${this.itemInfo.boxPrice}</Item.Meta>
                    {
                        this.renderDips()
                    }
                </Item.Content>
            </Item>
        );
    }
}
export default Noveltie;