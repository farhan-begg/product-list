import data from './data.json' // imports data.json
import { object } from 'prop-types'

const allCategories = data.map((item) => {
    return item.category
})
console.log(allCategories)
// Make a set from an array all values of the set will be unique!
const categorieSet = new Set(allCategories)
// Make an array from a set with Array.from()
let categoriesUnique = Array.from(categorieSet)
console.log(categoriesUnique)
// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
}, {}) // !!! Be sure to define the initial value as an Object!
// Make an arr array of the keys
const allcategoriesUnique = Object.keys(categoryObjects)
console.log(allcategoriesUnique)

const categoriesWithCounts = allCategories.reduce((obj, item) => {
    // check if cat exists as a key on obj
    if (obj[item] === undefined) {
        // set this key with a value of 1
        // 1 to the value of this key
        obj[item] = 1
    }
    else {
        // if so add 
        obj[item] += 1

    }
    return obj
}, {}) // !!!
console.log(categoriesWithCounts)






const productCount = allcategoriesUnique.reduce((acc, item) => {
    acc.push({ name: item, count: categoriesWithCounts[item] })

    return acc
}, [])
console.log(productCount)


export { allCategories, categoriesUnique, productCount }
export default data // export the native JS array