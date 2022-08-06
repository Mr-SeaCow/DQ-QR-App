import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class MealDeal extends Component {

    itemInfo = {...this.props.itemInfo}

    renderIngredients() {
        if (this.itemInfo.hasOwnProperty("ingredients") && this.itemInfo.ingredients.length > 0)
            return (
                <React.Fragment>
                    <Item.Description>
                        <Item as="h4">Ingredients</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>

                            {this.itemInfo.ingredients.map((ingredient) => (
                                <React.Fragment key={ingredient}>
                                    <List.Item key={ingredient.title}>{ingredient}</List.Item>
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
                    <Item.Meta>${this.itemInfo.price}</Item.Meta>
                    <Item.Description>
                        <h4 as="h4">Includes</h4>Fries, Drink, and Sundae
                    </Item.Description>
                    {
                        this.renderIngredients()
                    }
                </Item.Content>
            </Item>
        );
    }
}
export default MealDeal;