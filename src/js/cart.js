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
/*====Search function===*/
$(document).ready(function () {
    $("#Csearch-input").keyup(function (e) { 
        let press = $(this).val();
        let searchList = products.filter((val)=>
        {
            return val.name.toLocaleLowerCase().includes(press.toLocaleLowerCase())
        });
        $(".search-list").empty();
        if(searchList.length)
        {
            $(".search-list").css("height", "80vh");
            $(".search-box").css("background", "#1a1d24");
            searchList.map((val)=>
            {
                $(
                `
                    <div class="product flex f-column">
                        <div class="image">
                            <img src=".${val.imgUrl}" alt="">
                            <ul class="option flex a-center j-center">
                                <li class="cart-click" data-id=${val.id}>
                                    <a href=""><i class="fas fa-shopping-basket"></i></a>
                                </li>
                                <li class="quick-view-click" data-id=${val.id}>
                                    <div class="talk-bubble flex a-center f-center"><p>Quick View</p></div>
                                    <a href=""><i class="fas fa-search-plus"></i></a>
                                </li>
                                <li class="wishlist-click" data-id=${val.id}>
                                    <div class="talk-bubble flex a-center f-center"><p>Wishlist</p></div>
                                    <a href=""><i class="far fa-heart"></i></a>
                                    </li>
                                <li class="compare-click" data-id=${val.id}>
                                    <div class="talk-bubble flex a-center f-center"><p>Compare</p></div>
                                    <a href=""><i class="fas fa-random"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="info">
                            <h4 class="productName"><a href="">${val.name.split(press).join(`<span style="color:red">${press}</span>`)}</a></h4>
                            <div class="rate-price flex j-spaceBetween a-center">
                            <div class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</div>
                                <div class="price">${val.price}</div>
                            </div>
                        </div>
                    </div>
                    `
                ).appendTo(".search-list");
            });
        }
        if(press==="")
        {
            $(".search-list").empty();
            $(".search-list").css("height", "0vh");
            $(".search-box").css("background", "none");
        }  
    });
});

$(document).on("click",".checkout", function () {
    window.open("./checkout.html","blank")
});