let shoppingCart = JSON.parse(localStorage.getItem("cart"));
let shoppingWishlist = JSON.parse(localStorage.getItem("wishlist"));
let shoppingProducts = JSON.parse(localStorage.getItem("products"));
/*==== render products in cart====*/
let renderShoppingCart = () =>
{
    $("#shopping-products").empty();
    //render default row
    $(
        `
        <table>
            <tr style="border-bottom: 1px solid #ebeeee;">
                <td>PRODUC DETAILS</td>
                <td>UNIT PRICE</td>
                <td>QUANTITY</td>
                <td>AMOUNT</td>
            </tr>
        </table>
        `
    ).appendTo("#shopping-products");
    shoppingCart.map((val)=>
    {
        $(
            `
            <tr style="border-bottom: 1px solid #ebeeee;">
                <td class="flex a-center">
                    <div class="image">
                        <img src=".${val.imgUrl}" alt="">
                    </div>
                    <div class="text flex f-column">
                        <span class="name"><a href="#">${val.name}</a></span>
                        <span class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</span>
                    </div>    
                </td>
                <td>${val.price}</td>
                <td>
                    <div class="quantity flex a-center j-spaceBetween">
                        <span class="cart-sub" data-id="${val.id}"><i class="fas fa-minus"></i></span>
                        <span class="cart-sub-quantity">${val.quantity}</span>
                        <span class="cart-plus" data-id="${val.id}"><i class="fas fa-plus"></i></span>
                    </div>
                </td>
                <td>
                    <span>£${Number((val.quantity * Number(val.price.split("").splice(1,val.price.length).join(""))).toFixed(2))}</span>
                </td>
                <td>
                    <span class="delete-product" data-id="${val.id}"><i class="fas fa-times"></i></span>
                </td>
            </tr>
            `
        ).appendTo("#shopping-products table");
    });
}

if(shoppingCart.length>0)
{
    $(".shopping-cart .container .content").css("display", "block");
    renderShoppingCart();
}
else
{
    $(
        `
            <div class="return">
                <a href="../index.html">RETURN TO SHOP</a>
            </div>
        `
    ).appendTo(".shopping-cart .container");
}
// add item by plus button
$(document).on("click",".cart-plus", function () {
    let cartItemId = $(this).data("id");
    let idx = shoppingCart.findIndex((val)=>val.id===cartItemId);
    shoppingCart[idx].quantity+=1;
    $(".cart-sub-quantity").text(`${shoppingCart[idx].quantity}`);
    renderShoppingCart();
});
// subutract item by sub button
$(document).on("click",".cart-sub", function () {
    let cartItemId = $(this).data("id");
    let idx = shoppingCart.findIndex((val)=>val.id===cartItemId);
    shoppingCart[idx].quantity-=1;
    if(shoppingCart[idx].quantity<=0) {shoppingCart[idx].quantity=1}
    renderShoppingCart();
});
// delete item from cart
$(document).on("click",".delete-product", function () {
    let cartItemId = $(this).data("id");
    let idx = shoppingCart.findIndex((val)=>val.id===cartItemId);
    shoppingCart.splice(idx,1);
    renderShoppingCart();  
});

/*====Clear cart====*/
$("#clear-cart").click(function (e) { 
    e.preventDefault();
    shoppingCart = [];
    renderShoppingCart();
});
/*====Update shopping cart===*/
$("#update-cart").click(function (e) { 
    
    localStorage.setItem("cart",JSON.stringify(shoppingCart));
    location.reload();
});
