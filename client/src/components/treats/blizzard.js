import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

import {BlizzardSizes} from '../sizeConsts';

class Blizzard extends Component {

    itemInfo = {...this.props.itemInfo}

    priceStringGen(price, idx) {
        return `${BlizzardSizes[idx]} - $${price}`;
    }

    renderBlizOfMonth() {
        if ('blizOfMonth' in this.itemInfo) {
          if(this.itemInfo.blizOfMonth !== '') {
                return (
                    <React.Fragment>
                        <Item.Description>
                            <Item as="h4">Blizzard of the Month</Item>
                        </Item.Description>
                        <Item.Extra>
                            {this.itemInfo.blizOfMonth}
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
                            this.priceStringGen(item, idx) : this.priceStringGen(item, idx) + " | "
                        ))
                    }</Item.Meta>
                    {
                        this.renderBlizOfMonth()
                    }
                    <Item.Description>
                        <Item as="h4">Topping Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {
                                this.itemInfo.topOptions.map((topping) => (
                                    <React.Fragment key={topping}>
                                        <List.Item>{topping}</List.Item>
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}
export default Blizzard;