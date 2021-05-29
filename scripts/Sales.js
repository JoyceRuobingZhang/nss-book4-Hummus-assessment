import { getEntrees, getVeggies, getSides, getPurchases } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const entrees = getEntrees()
    const sides = getSides()

    const orderVeggie = veggies.find(veggie => {
        return veggie.id === order.veggieId
    })
    const veggiePrice = orderVeggie.price

    const orderEntree = entrees.find(entree => {
        return entree.id === order.entreeId
    })
    const entreePrice = orderEntree.price

    const orderSide = sides.find(side => {
        return side.id === order.sideId
    })
    const sidePrice = orderSide.price

    const total = veggiePrice + entreePrice + sidePrice

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
        const sales = getPurchases()
        return `
        <ul>
            ${sales.map(               
                    // Reflect: What is the scope of this `return` keyword?
                      buildOrderListItem                  
            ).join("")}
        </ul>
    `
}