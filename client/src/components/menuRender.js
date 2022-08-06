import React, { Component } from 'react';
import { Combo, Basket, Favorites, KidsMeal, MealDeal, Blizzard, Noveltie, Drink } from './components';

import TreatRender from './treatRender';

import { Accordion, Container, Item, Icon, Header } from 'semantic-ui-react'

class MenuRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        };
        console.log(this.props.apiResponse);
    }
    apiResponse = { ...this.props.apiResponse.menu };
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        return (
            <Container fluid>
                {
                    <Accordion fluid styled>
                        <Accordion.Title as="h1" key="combos" active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Header as="h1"><Icon name='dropdown' />Combos</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 0}>
                            <Item.Group divided>
                                {this.apiResponse.combo.map((itemInfo) => (
                                    <Combo key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="baskets" active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Baskets</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 1}>
                            <Item.Group divided>
                                {this.apiResponse.basket.map((itemInfo) => (
                                    <Basket key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="mealDeals" active={this.state.activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Meal Deals</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 2}>
                            <Item.Group divided>
                                {this.apiResponse.mealDeal.map((itemInfo) => (
                                    <MealDeal key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="kidsMeals" active={this.state.activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Kids Meals</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 3}>
                            <Item.Group divided>
                                {this.apiResponse.kidsMeal.map((itemInfo) => (
                                    <KidsMeal key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="favorites" active={this.state.activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Favorites</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 4}>
                            <Item.Group divided>
                                {this.apiResponse.favorite.map((itemInfo) => (
                                    <Favorites key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="Drinks" active={this.state.activeIndex === 5} index={5} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Drinks</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 5}>
                            <Item.Group divided>
                                {this.apiResponse.drink.map((itemInfo) => (
                                    <Drink key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="classicTreats" active={this.state.activeIndex === 6} index={6} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Classic Treats</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 6}>
                            <TreatRender itemInfo={this.apiResponse} />
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="blizzardTreats" active={this.state.activeIndex === 7} index={7} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Blizzard Treats</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 7}>
                            <Item.Group divided>
                                {this.apiResponse.blizzard.map((itemInfo) => (
                                    <Blizzard key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                        <Accordion.Title as="h1" key="novelties" active={this.state.activeIndex === 8} index={8} onClick={this.handleClick}>
                            <Header as="h1" ><Icon name='dropdown' />Novelties</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 8}>
                            <Item.Group divided>
                                {this.apiResponse.noveltie.map((itemInfo) => (
                                    <Noveltie key={itemInfo.title} itemInfo={itemInfo} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                    </Accordion>
                }
            </Container>
        );
    }
}

export default MenuRender;