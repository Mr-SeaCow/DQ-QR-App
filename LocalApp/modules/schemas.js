function splitToArray(str, separator = '') {
    return str.split(separator)
}

function formatStrToArray(str, separator = '') {

    //str = replaceAllSpaces(str); MaybeRemove???
    str = splitToArray(str, separator);

    return str;
}

const Schema = [
    {'Combo': {
        'Number': {
            prop: 'comboNumber',
            required: true,
            type: Number
        },
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price (Combo)': {
            prop: 'comboPrice',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Price (Individual)': {
            prop: 'sandwichPrice',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Ingredients': {
            prop: 'ingredients',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'MealDeal': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price': {
            prop: 'price',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Ingredients': {
            prop: 'ingredients',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Basket': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price': {
            prop: 'price',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Price (Drink)': {
            prop: 'priceWithDrink',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }}, 
    {'KidsMeal': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price': {
            prop: 'price',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Ingredients': {
            prop: 'ingredients',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Side': {
            prop: 'side',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Drink': {
            prop: 'drink',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Treat': {
            prop: 'treat',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Favorite': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price (Combo)': {
            prop: 'comboPrice',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Price (Individual)': {
            prop: 'sandwichPrice',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Ingredients': {
            prop: 'ingredients',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Cone': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Prices': {
            prop: 'prices',
            required: true,
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Soft Serve Options': {
            prop: 'ssOption',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Dip Options': {
            prop: 'dipOption',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Sundae': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Prices': {
            prop: 'prices',
            required: true,
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Soft Serve Options': {
            prop: 'ssOption',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Topping Options': {
            prop: 'topOption',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Royal': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price': {
            prop: 'price',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }}, 
    {'Noveltie': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Price': {
            prop: 'price',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Price (Box)': {
            prop: 'boxPrice',
            required: true,
            type: (value) => {
                return Number.parseFloat(value).toFixed(2);
            }
        },
        'Dip Options': {
            prop: 'dipOption',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }},
    {'Blizzard': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Prices': {
            prop: 'prices',
            required: true,
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Blizzard of the Month': {
            prop: 'blizOfMonth',
            type: String
        },
        'Topping Options': {
            prop: 'topOptions',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }}, 
    {'Drink': {
        'Name': {
            prop: 'title',
            required: true,
            type: String
        },
        'Prices': {
            prop: 'prices',
            required: true,
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Options': {
            prop: 'options',
            type: (value) => {
                return formatStrToArray(value, ', ');
            }
        },
        'Image': {
            prop: 'image',
            type: String
        }
    }}
]


module.exports = Schema