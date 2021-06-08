const database = {
    // added id to entrees
    entrees: [
        { id: 1, name: "Hummus and Hot Sauce", price: 6.00 },
        { id: 2, name: "Chicken Fried Lamb Kabob", price: 14.25 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10.50 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 11.50 },
        { id: 5, name: "Okrakopita", price: 8.40 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 6.95 },
        { id: 7, name: "Chess Baklava", price: 5.30 },
        { id: 8, name: "Gyro Biscuits", price: 8.95 },
        { id: 9, name: "Black Eye Pea Falafel", price: 7.80 },
        { id: 10, name: "Pecan Pastitsio", price: 12.49 }
    ],
    veggies: [
        { id: 1, type: "Okra", price: 2.65 },
        { id: 2, type: "Collard Greens", price: 2.05 },
        { id: 3, type: "Swiss Chard", price: 2.15 },
        { id: 4, type: "Corn", price: 1.75 },
        { id: 5, type: "Brussel Sprouts", price: 3.00 },
        { id: 6, type: "Sweet Potatoes", price: 2.40 },
        { id: 7, type: "Grits", price: 3.05 },
        { id: 8, type: "Fried Green Tomatoes", price: 3.89 },
        { id: 9, type: "Mac and Feta Cheese", price: 2.55 }
    ],
    sides: [
        { id: 1, title: "Chicken Fried Steak Poppers", price: 5.45 },
        { id: 2, title: "Bacon", price: 2.95 },
        { id: 3, title: "Turkey Wings", price: 4.80 },
        { id: 4, title: "BBQ Lamb Ribs", price: 9.25 },
        { id: 5, title: "Catfish Nuggets", price: 6.75 },
        { id: 6, title: "Mini Souvlaki", price: 5.20 }
    ],
    purchases: [],
    comboChoices: {
        selectedVeggies: []
    },
}

//get all database arrays
export const getEntrees = () => {
    return database.entrees.map(entree => ({...entree }))
}

export const getVeggies = () => {
    return database.veggies.map(veggie => ({...veggie }))
}

export const getSides = () => {
    return database.sides.map(side => ({...side }))
}

export const getPurchases = () => {
    return database.purchases.map(purchase => ({...purchase }))
}

// set state object
export const setEntree = (id) => {
    database.comboChoices.entreeId = id
}

export const setVeggie = (id) => {
    database.comboChoices.selectedVeggies.push(id)
}

export const setSide = (id) => {
    database.comboChoices.sideId = id
}

// set state array
export const addPurchase = () => {
    if (database.comboChoices.entreeId && database.comboChoices.sideId) {
        database.comboChoices.id = database.purchases.length + 1
        database.comboChoices.timeStamp = Date.now()
        database.purchases.push(database.comboChoices)
        database.comboChoices = { selectedVeggies: [] }
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}