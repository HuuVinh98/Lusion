let shoppingCart = JSON.parse(localStorage.getItem("cart"));
let shoppingWishlist = JSON.parse(localStorage.getItem("wishlist"));
let shoppingProducts = JSON.parse(localStorage.getItem("products"));

/*==== render products in cart====*/
let renderWishlist = () =>
{
    $(".wishlist-section .content").empty();
    if(!shoppingWishlist.length)
    {
        $(".wishlist-section .content").text("No products added to the wishlist");
    }
    else
    {
        shoppingWishlist.map((val)=>
        {
            $(
                `
                <div class="wishlist-product" data-id="${val.id}">
                    <div class="image">
                        <img src=".${val.imgUrl}" alt="">
                        <span class="delete-wishlist-products flex a-center j-center"><i class="fas fa-times"></i></span>
                    </div>
                    <div class="text">
                        <p>${val.name}</p>
                        <div class="two-button flex j-spaceBetween">
                            <button class="add-wishlist-to-cart">Add to cart</button>
                            <span class="quick-view-click" data-id="${val.id}"><i class="fas fa-search-plus"></i></span>
                        </div>
                    </div>
                </div>
                `
            ).appendTo(".wishlist-section .content");
        });
    }
    localStorage.setItem('wishlist',JSON.stringify(shoppingWishlist));
    
}
renderWishlist();

$(document).ready(function () {
    // delete item from cart
    $(document).on("click",".delete-wishlist-products", function () {
        console.log("asadsasa");
        let cartItemId = $(this).parents(".wishlist-product").data("id");
        let idx =shoppingWishlist.findIndex((val)=>val.id===cartItemId);
        shoppingWishlist.splice(idx,1);
        location.reload();
        renderWishlist();   
    });
    //add to cart
    $(document).on('click',".add-wishlist-to-cart", function () {
        const curId = $(this).parents(".wishlist-product").data("id");
        let idx = shoppingProducts.findIndex(val=>val.id===curId);
        if(idx!==-1)
        {
            shoppingProducts[idx].quantity=1;
            shoppingCart.push(shoppingProducts[idx]);
        }
        else 
        {
            shoppingProducts[idx].quantity++;
        }
        localStorage.setItem('cart',JSON.stringify(shoppingCart));
        location.reload();
    });
});

