
/*------------------------light ON--------------------------*/
let light = document.querySelector(".lights");
let body = document.querySelector('.body')
function lightOn(){
    light.classList.toggle("on");
}


/*----------------------disppear loading page------------------*/

let loader = document.querySelector(".loader");
window.addEventListener("load",fadeout);
function fadeout(){
    loader.classList.add("disppear");
    body.style.display = "block";
}
/*----------------------menu bar---------------------------*/
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
}
///search form
let searchList = document.querySelector('#myUL');
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("acv");
    navbar.classList.remove("acv");
    searchList.style.display = "none";
}
///search form display 
function myFunction() {
   
    let list , input , inputFilter
    list = document.querySelectorAll('#myUL li');
    input = document.getElementById('search-box');
    inputFilter = input.value.toUpperCase();

    list.forEach((item)=>{
        if(item.textContent.toLocaleUpperCase().includes(inputFilter)){
            searchList.style.display = "block";
            console.log(item);
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
        if(inputFilter == ""){
            searchList.style.display = "none";
        }
    })

}
/////remove navbar,search form , cart with scroll
window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cart.classList.remove("active");
}
/*--------------------shopping cart--------------*/
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart-items-container");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick =() =>{
    cart.classList.add("view");
}

cartIcon.onclick =() =>{
    cart.classList.add("view");
}

closeCart.onclick =() =>{
    cart.classList.remove("view");
}
/*---------------------------remove shopping item-------------------*/

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
    ///// items quantity
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change" , quantityChanged);
    }
    ////remove items from cart
    var removeCartItemButtons = document.getElementsByClassName('cart-remove');
    for (let i = 0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i]
    button.addEventListener('click' , removeCartItem)
    }
    ////add items to cart
    var addToCartButtons = document.querySelectorAll('#cart-icon');
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click' ,  addToCartClicked)
    }

}
///change quantity 
function quantityChanged(event){
    var input = event.target;
    updatetotal();
}
///remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
///-----------get title , price , image of shopping items------------///
function addToCartClicked(event){
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName('cart-product-title')[0].innerHTML;
    let price = shopItem.getElementsByClassName('cart-price')[0].innerHTML;
    let image = shopItem.getElementsByClassName('cart-img')[0].src;
    addItemToCart(title , price,image);
    updatetotal();
}
/////add to cart function
function addItemToCart(title , price,image){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-box')
    var cartItams = document.getElementsByClassName('cart-content')[0];
    var cartRowContents = `
                    <img src="${image}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class="fa fa-trash cart-remove" aria-hidden="true"></i>`
    cartRow.innerHTML = cartRowContents
    cartItams.append(cartRow)
    cartRow.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('click',quantityChanged)

}
////update total price of shopping cart
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement =cartBox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace('$',""));
        total = total + price * quantity  ;
        console.log(priceElement,quantityElement,quantity,price,total,removeCartItem)
        document.getElementsByClassName("total-price")[0].innerHTML =`$ ${total}`;
    }
    if(cartContent.childElementCount == 0){
        document.getElementsByClassName("total-price")[0].innerHTML =`$0`;
    }
   
}



/*---------------------slider(gallery)-------------------*/

var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; 
const interval = 3000;
function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' act', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' act';
  }
////show menu items on scroll
function menu() {
    var menu = document.querySelectorAll(".fade");
  
    for (var i = 0; i < menu.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = menu[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        menu[i].classList.add("active");
      } else {
        menu[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", menu);
///about coffee animation
function text() {
    var text = document.querySelectorAll(".coffee-text");
  
    for (var i = 0; i < text.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = text[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        text[i].classList.add("open");
      } else {
        text[i].classList.remove("open");
      }
    }
  }
  
  window.addEventListener("scroll", text);



////get in touch form fadeIn animation
function contact() {
    var contact = document.querySelectorAll("#contact div");
  
    for (var i = 0; i < contact.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = contact[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        contact[i].classList.add("active");
      } else {
        contact[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", contact);





