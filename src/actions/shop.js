import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from "./types";

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: "All"
            },
            {
                _id: 1,
                title: "Javascript"
            },
            {
                _id: 2,
                title: "UI/UX"
            },
            {
                _id: 3,
                title: "Linux"
            },
            {
                _id: 4,
                title: "Python"
            },
            {
                _id: 5,
                title: "UML"
            },
            {
                _id: 6,
                title: "Ruby"
            }
        ]
        
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: "Javescript The Last Shadow Puppets",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: "Python from the Greek Mythology",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 4]
            },
            {
                _id: 2,
                title: "The Beatles The UI?UX Album",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 3,
                title: "The Doors Hotel UML",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 5]
            },
            {
                _id: 4,
                title: "Pink Floyd The Linux Experience",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 3]
            },
            {
                _id: 5,
                title: "Led Zeppelin Linux 2",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 3]
            },
            {
                _id: 6,
                title: "David Bowie Ruby",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}