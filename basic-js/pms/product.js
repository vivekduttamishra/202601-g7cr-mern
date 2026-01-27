class Product{
    constructor(id,name,price, category, rating){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
        this.rating=rating;
    }
}

class ProductManager{
    constructor(){
        this.products=[
            new Product(1,'Laptop', 800, 'Electronics', 4.5),
            new Product(2,'Smartphone', 600, 'Electronics', 4.2),
            new Product(3,'Desk Chair', 150, 'Furniture', 4.0),
            new Product(4,'Electric Kettle', 50, 'Appliances', 4.3),
            new Product(5,'Headphones', 120, 'Electronics', 4.1),
            new Product(6,'Coffee Table', 200, 'Furniture', 4.4),
            new Product(7,'Blender', 80, 'Appliances', 4.0),
            new Product(8,'Monitor', 300, 'Electronics', 4.6),  
            new Product(9,'Bookshelf', 180, 'Furniture', 4.2),
            new Product(10,'Microwave Oven', 250, 'Appliances', 4.3),
            new Product(11,'Tablet', 400, 'Electronics', 4.4),
            new Product(12,'Sofa', 700, 'Furniture', 4.5),
            
        ]
    }

    searchProducts(matcher){
        //complete it
    }
    
}


function showAll(products,caption){
    //todo
}


function fromCategory(category){
    //todo
}

function ratingRange(min,max){
    //todo
}


function any(condition1,condition2){
    //todo if any condition matches
}


function all(condition1,condition2){
    //todo if all conditions match
}



//test this

let pm=new ProductManager();

let highRatedElectronics= pm.searchProducts(all(fromCategory('Electronics'), ratingRange(4.5,5)));