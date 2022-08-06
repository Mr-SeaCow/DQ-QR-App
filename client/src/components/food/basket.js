import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class Basket extends Component {

    itemInfo = {...this.props.itemInfo}
    render() {
        return (
            <Item>
                <Item.Image size='small' src={this.itemInfo.image} />
                <Item.Content>
                    <Item.Header>{this.itemInfo.title}</Item.Header>
                    <Item.Meta>Basket with Drink - ${this.itemInfo.priceWithDrink} | Basket - ${this.itemInfo.price}</Item.Meta>
                </Item.Content>
            </Item>
        );
    }
}
export default Basket;