import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

//add html
export const Entrees = () => {
    let entreeHtml = "<ul>"
    const entreeListArr = entrees.map(entree => {
        return `<li><input type="radio" name="entree" value=${entree.id} />${entree.name}</li>`
    })
    entreeHtml += entreeListArr.join("")
    entreeHtml += "</ul>"
    return entreeHtml
}

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
document.addEventListener("change", e => {
    if (e.target.name === "entree") {
        setEntree(parseInt(e.target.value))
    }
})