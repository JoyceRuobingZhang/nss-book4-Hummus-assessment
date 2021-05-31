import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = FoodTruck()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

// You can put this event in main.js, but it makes more sense to group code logically and semanticly.
// Since this is a purchase button event, it's better to put it in the FoodTruck.js.
// document.addEventListener("click", (event) => {
//     if (event.target.id === "purchase") {
//         addPurchase()
//     }
// })

// 🔴🔴🔴if you register the event on the element and put the event in main.js,
// you have to re-register the event on the new file's class name after html is re-rendered.
// that's why we're put this event in FoodTruck.js and using the document registration.