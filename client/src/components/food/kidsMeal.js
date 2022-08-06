import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class KidsMeal extends Component {

    itemInfo = { ...this.props.itemInfo }

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
                    <Item.Meta>${this.itemInfo.price} </Item.Meta>
                    <Item.Description>
                        <Item as="h4">Side Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {
                                this.itemInfo.side.map((side) => (
                                    <React.Fragment key={side}>
                                        <List.Item>{side}</List.Item>
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Item.Extra>
                    <Item.Description>
                        <Item as="h4">Drink Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {
                                this.itemInfo.drink.map((drink) => (
                                    <React.Fragment key={drink}>
                                        <List.Item>{drink}</List.Item>
                                    </React.Fragment>
                                ))
                            }
                        </List>
                    </Item.Extra>
                    <Item.Description>
                        <Item as="h4">Treat Options</Item>
                    </Item.Description>
                    <Item.Extra>
                        <List divided horizontal>
                            {
                                this.itemInfo.treat.map((treat) => (
                                    <React.Fragment key={treat}>
                                    <List.Item>{treat}</List.Item>
                                </React.Fragment>
                                ))
                            }
                        </List>
                    </Item.Extra>
                    {
                        this.renderIngredients()
                    }
                </Item.Content>
            </Item>
        );
    }
}
export default KidsMeal;