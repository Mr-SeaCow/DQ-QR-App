const express = require('express');
const router = express.Router();
const {fetchMenuInfo} = require('../controllers/databaseController');


const exampleData = {
    15409:
    {
        storeName: 'Columbia Gorge Dairy Queen Menu',
        kidsMealOptions: {
            side: ['Fries', 'Applesauce', 'Banana'],
            drink: ['Soft Drink', 'Milk', 'Chocolate Milk'],
            treat: ['Token', 'Cone', 'Dipped Cone', 'Dilly Bar']
        },
        combo: [{
            image: 'https://prod-dairyqueen.dotcmscloud.com/dA/e022d53f6f/fileAsset/quarter-pound-flamethrower-grillburger.png/300w',
            comboNumber: '1',
            title: '1/4 LB Bacon Cheese Grillburger',
            comboPrice: '7.99',
            sandwichPrice: '6.99',
            ingredients: ['Ketchup', 'Mayo', 'Lettuce', 'Tomato', 'Onion', 'Pickle', 'Bacon', 'American Cheese']
        },
        {
            image: 'https://blog.dairyqueen.com/dA/8c81764df6/quarter-pound-cheese-grillburger.png/300w',
            comboNumber: '3',
            title: '1/4 LB Cheese Grillburger',
            comboPrice: '7.99',
            sandwichPrice: '6.99',
            ingredients: ['Ketchup', 'Mayo', 'Lettuce', 'Tomato', 'Onion', 'Pickle', 'American Cheese']
        },
        {
            image: 'https://blog.dairyqueen.com/dA/422019bc1f/crispy-chicken-sandwich.png/300w',
            comboNumber: '6',
            title: 'Crispy/Grilled Chicken Sandwhich',
            comboPrice: '6.99',
            sandwichPrice: '5.99',
            ingredients: ['Mayo', 'Lettuce', 'Tomato']
        }],
        basket: [{
            image: 'https://blog.dairyqueen.com/dA/00f29a2458/chicken-strip-basket-4pc.png/300w',
            title: '4 pc. Chicken Strip Basket',
            priceWithDrink: '7.99',
            price: '6.99',

        },
        {
            image: 'https://blog.dairyqueen.com/dA/00f29a2458/chicken-strip-basket-4pc.png/300w',
            title: '6 pc. Chicken Strip Basket',
            priceWithDrink: '8.99',
            price: '7.99',

        }],
        favorite: [
            {
                image: 'https://blog.dairyqueen.com/dA/f63835d231/cheeseburger.png/300w',
                title: 'Cheeseburger',
                comboPrice: '5.49',
                sandwichPrice: '2.69',
                ingredients: ['Ketchup', 'Mustard', 'Pickle', 'American Cheese']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/0ee9fa67f7/classic-hot-dog.png/300w',
                title: 'Hot Dog',
                comboPrice: '4.99',
                sandwichPrice: '2.99',
                ingredients: []
            }
        ],
        mealDeal: [{
            image: 'https://blog.dairyqueen.com/dA/1300df4d82/third-pound-double-cheese-deal.png/300w',
            title: '1/3 lb. Double with Cheese',
            price: '6.00',
            ingredients: ['Ketchup', 'Mustard', 'Pickle', 'American Cheese']
        }],
        kidsMeal: [{
            image: 'https://blog.dairyqueen.com/dA/f63835d231/cheeseburger.png/300w',
            title: 'Cheeseburger',
            price: '4.99',
            ingredients: ['Ketchup', 'Mustard', 'Pickle', 'American Cheese']
        }],
        treat: {
            cone: [
                {
                    image: 'https://blog.dairyqueen.com/dA/f4206d9c14/vanilla-cone-small.png/300w',
                    title: 'Cone',
                    prices: ['1.69', '2.59', '2.99', '3.29'],
                    ssOption: ['Vanilla', 'Chocolate', 'Twist']
                },
                {
                    image: 'https://blog.dairyqueen.com/dA/e7b9c4e6f3/dipped-cone-chocolate-small.png/300w',
                    title: 'Dipped Cone',
                    prices: ['1.89', '2.79', '3.29', '3.49'],
                    dipOption: ['Chocolate', 'Cherry', 'Butterscotch'],
                    ssOption: ['Vanilla', 'Chocolate', 'Twist']
                }],
            sundae: [{
                image: 'https://blog.dairyqueen.com/dA/16292ea5a3/DQ-hot-fudge-sundae.png/300w',
                title: 'Sundae',
                prices: ['2.79', '3.29', '3.49'],
                topOption: ['Chocolate', 'Strawberry', 'Carmel', 'Hot Fudge', 'Marshmellow', 'Peanut Butter'],
                ssOption: ['Vanilla', 'Chocolate', 'Twist']
            }],
            royal: [{
                image: 'https://blog.dairyqueen.com/dA/13261139f7/peanut-buster-parfait.png/300w',
                title: 'Peanut Buster Parfait',
                price: '4.99'
            }, {
                image: 'https://blog.dairyqueen.com/dA/921ee9e610/banana-split.png/300w',
                title: 'Banana Split',
                price: '4.99'
            }, {
                image: 'https://blog.dairyqueen.com/dA/537870fce5/brownie-and-oreo-cupfection.png/300w',
                title: 'Brownie and Oreo Cupfection',
                price: '4.99'
            }]
        }, noveltie: [
            {
                image: 'https://blog.dairyqueen.com/dA/4804c7c894/dilly-bar-chocolate.png/300w',
                title: 'Dilly Bar',
                dipOption: ['Chocolate', 'Cherry','Butterscotch', 'Heath', 'Mint', 'No Sugar Added'],
                price: '1.99',
                boxPrice: '7.99'
            }, {
                image: 'https://blog.dairyqueen.com/dA/9cb573c34c/non-dairy-dilly.png/300w',
                title: 'Non-Dairy Dilly Bar',
                price: '2.49',
                boxPrice: '8.49'
            },
            {
                image: 'https://blog.dairyqueen.com/dA/722112f063/buster-bar.png/300w',
                title: 'Buster Bar',
                price: '2.49',
                boxPrice: '8.49'
            }
        ],
        blizzard: [
            {
                image: 'https://blog.dairyqueen.com/dA/f23ea3a796/oreo-cookie-blizzard.png/300w',
                title: 'Blizzard',
                prices: ['2.99', '3.99', '4.99', '5.49'],
                blizOfMonth: 'Mint Oreo',
                topOptions: ['Oreo', 'Cookie Dough', 'Butterfinger', 'M&M', 'Snickers', 'Reeses Peanut Butter Cup']
            }, 
            {
                image: 'https://blog.dairyqueen.com/dA/c9a38af6cb/royal-new-york-cheesecake-strawberry-blizzard.png/300w',
                title: 'Royal Blizzard',
                prices: ['2.99', '3.99', '4.99', '5.49'],
                topOptions: ['New York Cheescake', 'Oreo', 'Reeses Brownie']
            }
        ],
        drink: [
            {
                image: 'https://www.freeiconspng.com/uploads/pepsi-png-file-27.png',
                title: 'Soft Drink',
                prices: ['1.79', '1.99', '2.19'],
                options: ['Pepsi', 'Diet Pepsi', 'Mountain Dew', 'Sierra Mist', 'Lemonade', 'Wild Cherry Pepsi', 'Root Beer', 'Dr. Pepper']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/518acf469e/misty-slush-cherry.png/300w',
                title: 'Misty Slush',
                prices: ['2.99', '3.99', '4.99'],
                options: ['Strawberry Kiwi', 'Cherry', 'Blue Raspberry', 'Lemon Lime', 'Grape']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/a8d2a4914b/misty-freeze-blue-raspberry.png/300w',
                title: 'Misty Freeze',
                prices: ['2.99', '3.99', '4.99'],
                options: ['Strawberry Kiwi', 'Cherry', 'Blue Raspberry', 'Lemon Lime', 'Grape']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/0d97aa9b88/chocolate-shake.png/300w',
                title: 'Shake',
                prices: ['2.99', '3.99', '4.99'],
                options: ['Vanilla', 'Chocolate', 'Caramel', 'Peanut Butter', 'Marshmellow', 'Mint Chip']
            }, 
            {
                image: 'https://blog.dairyqueen.com/dA/0d97aa9b88/chocolate-shake.png/300w',
                title: 'Malt',
                prices: ['2.99', '3.99', '4.99'],
                options: ['Vanilla', 'Chocolate', 'Caramel', 'Peanut Butter', 'Marshmellow', 'Mint Chip']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/8e7f8978a1/mocha-moolatte.png/300w',
                title: 'Moolatte',
                prices: ['2.99', '3.99', '4.99'],
                options: ['Vanilla', 'Mocha', 'Caramel']
            },
            {
                image: 'https://blog.dairyqueen.com/dA/8e7f8978a1/mocha-moolatte.png/300w',
                title: 'Frozen Hot Chocolate',
                prices: ['2.99', '3.99', '4.99'],
                options: []
            },
        ]
    }
    // 1234: {
    //     combo: [{
    //         image: 'https://dqhub.dairyqueen.net/images/default-source/products/food/1-4-lb-bacon-cheese-grillburger_200x200.jpg',
    //         comboNumber: '1',
    //         title: '1/4 LB Bacon Cheese Grillburger',
    //         comboPrice: '7.99',
    //         sandwichPrice: '6.99',
    //         ingredients: ['Ketchup', 'Mayo', 'Lettuce', 'Tomato', 'Onion', 'Pickle', 'Bacon', 'American Cheese']
    //     }],
    //     basket: [{
    //         image: 'https://dqhub.dairyqueen.net/images/default-source/products/food/chicken-strip-basket.png',
    //         title: '4 pc Chicken Strip Basket',
    //         priceWithDrink: '7.99',
    //         price: '6.99',
    //     }]
    // }
}

router.get('/', async (req, res, next) => {
    let menu = await fetchMenuInfo(Number(req.query.storeID));
    if (req.query.storeID in exampleData)
        res.send(JSON.stringify(menu));
    else
        res.send('404')
});

module.exports = router;