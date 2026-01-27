class Product {
    constructor(id, name, price, category, rating) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.rating = rating;
    }
}

class ProductManager {
    constructor() {
        this.products = [
            new Product(1, 'Laptop', 800, 'Electronics', 4.5),
            new Product(2, 'Smartphone', 600, 'Electronics', 4.2),
            new Product(3, 'Desk Chair', 150, 'Furniture', 4.0),
            new Product(4, 'Electric Kettle', 50, 'Appliances', 4.3),
            new Product(5, 'Headphones', 120, 'Electronics', 4.1),
            new Product(6, 'Coffee Table', 200, 'Furniture', 4.4),
            new Product(7, 'Blender', 80, 'Appliances', 4.0),
            new Product(8, 'Monitor', 300, 'Electronics', 4.6),
            new Product(9, 'Bookshelf', 180, 'Furniture', 4.2),
            new Product(10, 'Microwave Oven', 250, 'Appliances', 4.3),
            new Product(11, 'Tablet', 400, 'Electronics', 4.4),
            new Product(12, 'Sofa', 700, 'Furniture', 4.5),

        ]
    }

    searchProducts(matcher) {
        //complete it
        return this.products.filter(matcher)
    }

}


function showAll(products, caption) {
    //todo
    console.log(caption)
    for (let item of products)
        console.log(item)
    console.log('----')
}


function fromCategory(category) {
    category = category.toLowerCase()
    //todo
    return function (product) {
        return product.category.toLowerCase() === category
    }
}

// function ratingRange(min,max){
//     //todo
// }

// const ratingRange = (min, max) => {
//     return (product) => {
//         return product.rating >= min && product.rating < max;
//     }
// }

//we can compact it by removing {} and return from single line function body
const ratingRange = (min, max) => (product) => product.rating >= min && product.rating < max;


const any = (condition1, condition2) => product => condition1(product) || condition2(product)


const all = (...conditions) => product =>{
    for(let condition of conditions)
        if(!condition(product))
            return false;

    return true;
}


//test this

let pm = new ProductManager();

showAll(pm.products, 'All Product')


let highRatedElectronics= pm.searchProducts(all(fromCategory('Electronics'), ratingRange(4.5,5)));

showAll(highRatedElectronics,'High Rated Electronics')