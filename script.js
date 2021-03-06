//Original cinnamon roll constructor 
function Original(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.id = 0;
    this.name = "Original Cinnamon Roll";
    this.paragraph = "Classic original cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'original cinnamon roll';
    this.image = 'img/left-card.jpg';
}

//vanilla cinnamon roll constructor 
function Vanilla(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.id = 0;
    this.name = "Vanilla Cinnamon Roll";
    this.paragraph = "Sweet Vanilla cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'vanilla flavored cinnamon roll';
    this.image = 'img/middle-card.jpg';
}

//pumpkin spice cinnamon roll constructor
function PumpkinSpice(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.id = 0;
    this.name = "Pumpkin Spice Cinnanmon";
    this.paragraph = "Seasonal Pumpkin Spice buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'pumpkin spice cinnamon roll';
    this.image = 'img/right-card.jpg';
}

//display_cart
function display_cart(creature) {
    let header = document.getElementById("header");
    header.innerHTML = creature.name;
    let img = document.getElementById("image");
    img.setAttribute("src", creature.image);
}

var new_cinnamon;

//load the correct image and product details based on what users clicked on the product browsing page
function onLoad() {
    if(localStorage.getItem("productImage") === "img/left-card.jpg"){
        new_cinnamon = new Original("None", "1");
    }else if(localStorage.getItem("productImage") === "img/middle-card.jpg"){
        new_cinnamon = new Vanilla("None", "1");
    }else{
        new_cinnamon = new PumpkinSpice("None", "1");
    }
    let img = document.getElementById("image");
    let food = new_cinnamon;
    img.setAttribute("src", food.image);
    img.setAttribute("alt", food.image_alt);
    let product_name = document.getElementById("card-product-name");
    product_name.innerText = food.name;
    let product_desc = document.getElementById("card-product-desc");
    product_desc.innerText = food.paragraph;

    var full_list = [];
    if(sessionStorage.getItem('cinnamon_array')){
        full_list = JSON.parse(sessionStorage.getItem('cinnamon_array'));
    }
    full_list.push(new_cinnamon);
    sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));
    for(var i = 0; i < full_list.length; i++){
    }
}

//set image based on user selection
function changeImage(description)
{
    localStorage.setItem("productImage", description);
}

//set glazing based on user selection
function change(description)
{
    var full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    document.getElementById("dropbtn1").innerHTML=description;
    let food = full_list[full_list.length - 1];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    food.glazing = description;
    sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));
}

//set amount based on user selection
function changeAmt(description)
{
    var full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    document.getElementById("dropbtn2").innerHTML=description;
    let food = full_list[full_list.length - 1];  
    food.amount = description;
    sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));
}

//change the text for the cart section on the nav bar to indicate how many items are added to cart
function addToCart(){

    var cinnamon_num = (JSON.parse(sessionStorage.getItem("cinnamon_array"))).length;
    if(cinnamon_num !== 0){
        var full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
        full_list[full_list.length - 1].id = cinnamon_num;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));
    }
}

//load the cart with product info
function loadCart() {
    var full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    if (full_list.length !== 0){
        
        var food = (full_list[full_list.length - 1]).id;
        if(food === 1){
            document.getElementById("cart-nav").innerHTML= "Cart (" + food.toString() + " new item)";
        }else if (food === 0){
            food = full_list.length - 1;
            document.getElementById("cart-nav").innerHTML= "Cart (" + food.toString() + " new item)";
        }
        else{
            document.getElementById("cart-nav").innerHTML= "Cart (" + food.toString() + " new items)";
        }
    }else{
        document.getElementById("cart-nav").innerHTML= "Cart(0 new item)";
    }
}

//show the cart items by adding children nodes and looping through the array of cinnamon items
function showCart(){
    let full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    if (full_list != null){
        for(let i = 0; i < full_list.length; i++){
            
            var objTo = document.getElementById('cart-card');
            var newDiv = document.createElement("div");
            newDiv.className = "cart-mini-card";
            newDiv.num = full_list[i].id.toString();
            var smallDiv = document.createElement("div");
            smallDiv.className = "words";
            var title = document.createElement("h5");
            title.className = "order-name";
            title.innerHTML = full_list[i].name;
            smallDiv.appendChild(title);
            var glazing = document.createElement("p");
            glazing.className = "card-glazing";
            glazing.innerHTML = "glazing: " + full_list[i].glazing;
            smallDiv.appendChild(glazing);
            var amount = document.createElement("p");
            amount.className = "card-rolls";
            amount.innerHTML = "amount: " + full_list[i].amount;
            smallDiv.appendChild(amount);
            var container = document.createElement("div");
            container.className = "btn-container-1";
            var button1 = document.createElement("button");
            button1.className = document.createElement("btn-2-1");
            button1.innerHTML = "Edit";
            var link = document.createElement ("a");
            container.appendChild(button1);
            var button2 = document.createElement("button");
            button2.onclick = function(){
                remove(i);
            }
            button2.className = document.createElement("btn-2-2");
            button2.innerHTML = "Delete";
            container.appendChild(button2);
            smallDiv.appendChild(container);
            
            var cost = document.createElement("h5");
            cost.className = "cost";
            cost.innerHTML = 6.99;
            
            newDiv.appendChild(smallDiv);
            newDiv.appendChild(cost);
            objTo.appendChild(newDiv)
        }
    }
}

//remove the children node of the cart item that was clicked on by looping through the array and div elements to find the one matching the id passed in fromt the parameter
function remove(num){
    var list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    list.splice(num,1);
    sessionStorage.setItem("cinnamon_array", JSON.stringify(list));
    let d_nested = document.getElementsByClassName("cart-mini-card");
    for(let i = 0; i < d_nested.length; i++){
        if(d_nested[i].num == num+1){
            let d = document.getElementById("cart-card");
            d.removeChild(d_nested[i]);
        }
    }
    addToCart();
    location.reload();
}