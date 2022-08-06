import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

import {ConeSizes} from '../sizeConsts';

class Cone extends Component {

    itemInfo = {...this.props.itemInfo}

    priceStringGen(price, idx) {
        return `${ConeSizes[idx]} - $${price}`;
    }

    renderDips() {
        if ('dipOption' in this.itemInfo)
            return (
                <React.Fragment>
                    <Item.Description>
                        <Item as="h4">Dip Options</Item>
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
                    <Item.Meta> {
                        this.itemInfo.prices.map((item, idx) => (
                            idx === this.itemInfo.prices.length - 1 ?
                            this.priceStringGen(item, idx) : this.priceStringGen(item, idx) + " | "
                        ))
                    }</Item.Meta>
                    {
                        this.renderDips()
                    }
                    <Item.Description>
                        <Item as="h4">Soft Serve Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {this.itemInfo.ssOption.map((item) => (
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
export default Cone;