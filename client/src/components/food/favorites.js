import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class Favorites extends Component {

    itemInfo = { ...this.props.itemInfo }

    renderIngredients() {
        if (this.itemInfo.ingredients.length > 0)
            return (
                <React.Fragment>
                    <Item.Description>
                        <Item as="h4">Ingredients</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>

                            {this.itemInfo.ingredients.map((ingredient) => (
                                <React.Fragment key={ingredient}>
                                    <List.Item>{ingredient}</List.Item>
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
                    <Item.Meta>Combo - ${this.itemInfo.comboPrice} | Sandwich - ${this.itemInfo.sandwichPrice}</Item.Meta>
                    {
                        this.renderIngredients()
                    }
                </Item.Content>
            </Item>
        );
    }
}
export default Favorites;