var showMoreBtn = document.querySelector("#show-toggle");
var moreContent= document.querySelector("#moreContent");
var div = document.querySelector(".side");
var fruitName= div.children[0].innerHTML.slice(7);
var unique_name_price= "price"+fruitName;
var unique_name_qty= "qty"+fruitName;
var unique_name_cartBtn= "cBtn"+fruitName;
showMoreBtn.addEventListener("click", function () {
    var btnText =showMoreBtn.innerHTML;
    if(btnText == "Show More"){
        moreContent.style.display ="inline";
        showMoreBtn.textContent= "Show Less";
    } else{
        moreContent.style.display ="none";
        showMoreBtn.textContent="Show More";
    } 
});

var cartBtn = document.querySelector(".add-to-cart");
cartBtn.addEventListener("click", function(){
    
    sessionStorage.setItem(unique_name_cartBtn, '<i class="fas fa-shopping-cart"></i> &nbsp; ADD TO CART');
    cartBtn.innerHTML= sessionStorage.getItem(unique_name_cartBtn);
   
    var table= document.getElementById("qtyTable");
    var qty= parseInt(table.children[0].children[0].children[1].children[0].textContent.slice(1,-1));
    if(qty<1){
        alert("Please select the quantity of the product.");
        table.children[0].children[0].children[1].focus();
    }else{
        sessionStorage.setItem(unique_name_cartBtn, '<i class="far fa-check-circle fa-lg"></i> &nbsp; ITEM ADDED') ;
        cartBtn.innerHTML= sessionStorage.getItem(unique_name_cartBtn);
    }
   
})


function increase(obj){
  
    var price= parseFloat(div.children[1].children[0].textContent);
    var qty = obj.parentNode.parentNode.children[1].children[0];
    var sub= obj.parentNode.parentNode.children[3].children[0];
    console.log(sub);
    qty= parseInt(qty.textContent.slice(1,-1));
    ++qty;
    price *= qty;
  
    sessionStorage.setItem(unique_name_price, price);
    sessionStorage.setItem(unique_name_qty, qty);
    obj.parentNode.parentNode.children[1].children[0].innerHTML="&nbsp;"+sessionStorage.getItem(unique_name_qty)+"&nbsp;";
    sub.innerHTML= "$ "+sessionStorage.getItem(unique_name_price);
    
}

window.onload = function () {
       if(sessionStorage.getItem(unique_name_cartBtn)!= null){
    cartBtn.innerHTML= sessionStorage.getItem(unique_name_cartBtn);
   }
    if( sessionStorage.getItem(unique_name_qty) != null && sessionStorage.getItem(unique_name_price) != null){
     
        document.getElementsByClassName("cart-quantity")[0].innerHTML= "&nbsp;"+sessionStorage.getItem(unique_name_qty)+"&nbsp;";
        // document.getElementById('cart-quantity').innerHTML = "&nbsp;"+sessionStorage.qty+"&nbsp;";
        document.getElementsByClassName("subtotal")[2].innerHTML ="$ "+sessionStorage.getItem(unique_name_price);
        // document.getElementById('subtotal').innerHTML = "$ "+sessionStorage.price;
    }
    
    
}

function decrease(obj){
  
    var price= parseFloat(div.children[1].children[0].textContent);
    var qty = obj.parentNode.parentNode.children[1].children[0];
    var sub= obj.parentNode.parentNode.children[3].children[0];
    qty= parseInt(qty.textContent.slice(1,-1));
    if( qty>0){
        --qty;
    }
    if(qty == 0){
        cartBtn.innerHTML= ' <i class="fas fa-shopping-cart">&nbsp; ADD TO CART</i>';
    }
    price *= qty;
    sessionStorage.setItem(unique_name_price, price);
    sessionStorage.setItem(unique_name_qty, qty);
    obj.parentNode.parentNode.children[1].children[0].innerHTML="&nbsp;"+sessionStorage.getItem(unique_name_qty)+"&nbsp;";
    sub.innerHTML= "$ "+sessionStorage.getItem(unique_name_price);
    
}
