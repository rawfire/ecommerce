import {
    SET_PURCHASE_DETAIL,
    SET_USER_PURCHASES,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from "./types";

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: "John Smith",
                address: "123 main st NYC",
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}
export function addCartProduct(product) {
    return({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return({
        type: SET_CART_PRODUCTS,
        payload: [
            {   _id: 0,
                product: {
                    _id: 0,
                title: "Javascript The Last Shadow Puppets",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 2
            },
            {   _id: 1,
                product:{
                    _id: 1,
                title: "Python from the Greek Mythology",
                description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
                price: 1.99,
                belongsTo: [0, 4],
                imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 2.23,
                orderNumber: "A00B32CZ7",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "John Smith",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 1,
                total: 12.23,
                orderNumber: "A00B32CZ6",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "Mike Sidis",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 2,
                total: 22.23,
                orderNumber: "A00B32CZ5",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "Paul McCartney",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 3,
                total: 1.23,
                orderNumber: "A00B32CZ4",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "John Lennon",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 4,
                total: 23.23,
                orderNumber: "A00B32CZ3",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "Ringo Star",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 5,
                total: 52.23,
                orderNumber: "A00B32CZ2",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "George Harrison",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 6,
                total: 23.23,
                orderNumber: "A00B32CZ1",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "Ignacio And",
                    shippingAddress: "123 Main St"
                }
            },
            {
                _id: 7,
                total: 2.23,
                orderNumber: "A00B32CZZ",
                orderDate: new Date().toDateString(),
                creditCard: "-0101",
                user: {
                    name: "Tiffany Smith",
                    shippingAddress: "123 Main St"
                }
            }
        ]
    })
}