import { getEntrees, getVeggies, getSides, getPurchases } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const entrees = getEntrees()
    const sides = getSides()


    // 计算所有被选中的veggies的价格总和
    let veggieTotalPrice = 0
        // 注：line3 pass 的parameter 是 order， 所以line12 用 order.selectedVeggies。
    for (const selectedVeggie of order.selectedVeggies) {
        const orderVeggie = veggies.find(veggie => {
                return veggie.id === selectedVeggie
            })
            // 注意：要用 find method, 不要用map!!!(map是将condition 施加给每个array item!!)
        veggieTotalPrice += orderVeggie.price
    }



    const orderEntree = entrees.find(entree => {
        return entree.id === order.entreeId
    })
    const entreePrice = orderEntree.price


    const orderSide = sides.find(side => {
        return side.id === order.sideId
    })
    const sidePrice = orderSide.price


    const total = veggieTotalPrice + entreePrice + sidePrice

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