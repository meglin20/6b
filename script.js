//Original cinnamon roll constructor 
function Original(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Original Cinnamon Roll";
    this.paragraph = "Classic original cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'original cinnamon roll';
    this.image = 'img/left-card.jpg';
    this.id = 0;
}

//vanilla cinnamon roll constructor 
function Vanilla(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Vanilla Cinnamon Roll";
    this.paragraph = "Sweet Vanilla cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'vanilla flavored cinnamon roll';
    this.image = 'img/middle-card.jpg';
    this.id = 0;
}

//pumpkin spice cinnamon roll constructor
function PumpkinSpice(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Pumpkin Spice Cinnanmon";
    this.paragraph = "Seasonal Pumpkin Spice buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'pumpkin spice cinnamon roll';
    this.image = 'img/right-card.jpg';
    this.id = 0;
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
    // alert(new_cinnamon.glazing);
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
    // alert(new_cinnamon.glazing);
    for(var i = 0; i < full_list.length; i++){
        // alert(full_list[i].name);
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

    var cinnamon_num = 0;
    if(sessionStorage.getItem('cinnamon_num')){
        cinnamon_num = parseInt(sessionStorage.getItem('cinnamon_num'));
    }
    cinnamon_num += 1;
    sessionStorage.setItem('cinnamon_num', cinnamon_num);
    var full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    let food = full_list[full_list.length - 1];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    food.id = cinnamon_num;
    sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));

    // var full_list = [];
    // if(sessionStorage.getItem('cinnamon_array')){
    //     full_list = JSON.parse(sessionStorage.getItem('cinnamon_array'));
    // }
    // full_list.push(new_cinnamon);
    // sessionStorage.setItem("cinnamon_array", JSON.stringify(full_list));
    // alert(new_cinnamon.glazing);
    // sessionStorage.setItem('cinnamon_num', cinnamon_num);
    // alert(cinnamon_num);
    // for(var i = 0; i < full_list.length; i++){
    //     alert(i.glazing);
    // }
    // alert(full_list);

    


}

//load the cart with product info
function loadCart() {
    var food = sessionStorage.getItem("cinnamon_num");
    if (food === null){
        document.getElementById("cart-nav").innerHTML= "Cart(0 new item)";
    }else if(food === '1'){
        document.getElementById("cart-nav").innerHTML= "Cart (" + food + " new item)";
    }
    else{
        document.getElementById("cart-nav").innerHTML= "Cart (" + food + " new items)";
    }
}

function showCart(){
    let full_list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    if (full_list != null){
        for(let i = 0; i < full_list.length; i++){
            console.log(i.name);
            
            var objTo = document.getElementById('cart-card');
            var newDiv = document.createElement("div");
            newDiv.className = "cart-mini-card";
            newDiv.num = full_list[i].id.toString();
            alert(newDiv.num);
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
            // title.className = "h3";
            // divtest.innerHTML = "new div";
            // divtest.innerHTML = "new div";
            var container = document.createElement("div");
            container.className = "btn-container-1";
            var button1 = document.createElement("button");
            button1.className = document.createElement("btn-2-1");
            button1.innerHTML = "Edit";
            var link = document.createElement ("a");
            link.href = "product_details.html";
            button1.appendChild(link);
            button1.onclick = "Edit";
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

function remove(num){
    var list = JSON.parse(sessionStorage.getItem("cinnamon_array"));
    for(let i = 0; i < list.length; i++){
        if(list[i].id === num){
            list.splice[i,1];
        }
    }
    sessionStorage.setItem("cinnamon_array", JSON.stringify(list));
    let d_nested = document.getElementsByClassName("cart-mini-card");
    for(let i = 0; i < d_nested.length; i++){
        if(d_nested[i].num == num+1){
            let d = document.getElementById("cart-card");
            d.removeChild(d_nested[1]);
        }
    }

}