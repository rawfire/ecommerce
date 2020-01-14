import {
    SET_USER_PURCHASES
} from "./types";

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 2.23,
                orderNumber: "A00B32CZ7",
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: "-0101",
                user: {
                    name: "Tiffany Smith",
                    shippingAddress: "123 Main St"
                }
            }
        ]
    })
}