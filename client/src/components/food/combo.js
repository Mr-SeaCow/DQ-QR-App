import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class Combo extends Component {

    itemInfo = { ...this.props.itemInfo }
    render() {
        return (
            <Item>
                <Item.Image size='small' src={this.itemInfo.image} />
                <Item.Content>
                    <Item.Header>#{this.itemInfo.comboNumber} ⸱ {this.itemInfo.title}</Item.Header>
                    <Item.Meta>Combo - ${this.itemInfo.comboPrice} | Sandwich - ${this.itemInfo.sandwichPrice}</Item.Meta>
                    <Item.Description>
                        <Item as="h4">Ingredients</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {
                                this.itemInfo.ingredients.map((ingredient) => (
                                    <React.Fragment key={ingredient}>
                                        <List.Item>{ingredient}</List.Item>
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
export default Combo;