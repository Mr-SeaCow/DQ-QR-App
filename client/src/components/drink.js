import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

import { DrinkSizes } from './sizeConsts';

class Drink extends Component {

    itemInfo = { ...this.props.itemInfo }

    priceStringGen(price, idx) {
        return `${DrinkSizes[idx]} - $${price}`;
    }

    renderOptions() {
        if ('option' in this.itemInfo) {
            if (this.itemInfo.option.length > 0) {
                return (
                    <React.Fragment>
                        <Item.Extra>
                            <List divided horizontal>
                                {this.itemInfo.options.map((item) => (
                                    <React.Fragment key={item}>
                                        <List.Item>{item}</List.Item>
                                    </React.Fragment>
                                ))}
                            </List>
                        </Item.Extra>
                    </React.Fragment>
                )
            }
        } else
            return null;
    }

    render() {
        return (
            <Item>
                <Item.Image size='small' src={this.itemInfo.image} />
                <Item.Content>
                    <Item.Header>{this.itemInfo.title}</Item.Header>
                    <Item.Meta> {
                        this.itemInfo.prices.map((item, idx) => (
                            idx === this.itemInfo.prices.length - 1 ?
                                this.priceStringGen(item, idx) : this.priceStringGen(item, idx) + ' | '
                        ))
                    }</Item.Meta>
                    <Item.Extra>
                        <List divided horizontal>
                            {this.itemInfo.options.map((item) => (
                                <React.Fragment key={item}>
                                    <List.Item>{item}</List.Item>
                                </React.Fragment>
                            ))}
                        </List>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}
export default Drink;