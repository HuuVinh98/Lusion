/*====Search box and navigation====*/
$(document).ready(function () {
    //open search-box
    $("#search").click(function (e) { 
        e.preventDefault();
        $(".search-box").slideDown("slow");
        setTimeout(function() {
            $(".search-box").css("background",'rgba(0,0,0,0.4)');
        }, 700);
    });
    //open search-box form responsive screen
    $("#search-res").click(function (e) { 
        e.preventDefault();
        $(".search-box").slideDown("slow");
        setTimeout(function() {
            $(".search-box").css("background",'rgba(0,0,0,0.4)');
        }, 700);
    });
    //close search-box
    $(".close-search").click(function (e) { 
        e.preventDefault();
        $(".search-box").slideUp("slow");
        $(".search-box").css("background", "none");
        $("#search-input").val("");
        $(".search-list").empty();
    });

    //dropdown home mega-menu
   $("#home").hover(function()
   {
    $(this).children(".mega-menu").stop(true,false,true).slideToggle(300);
   });
    //dropdown blog mega-menu
    $('#blog').hover(function() {
        $(this).children('.mega-menu').stop(true, false, true).slideToggle(300);
    });

});
/*====Search function===*/
$(document).ready(function () {
    $("#search-input").keyup(function (e) { 
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
                            <img src="${val.imgUrl}" alt="">
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


/*====Show/hide loginbox====*/
$(document).ready(function () {
    $("#login").click(function (e) { 
        e.preventDefault();
        $(".login-section").fadeIn().css("display","flex");
    });
    $(".close-login-box").click(function (e) { 
        e.preventDefault();
        $(".login-section").fadeOut();
    });
});

/*====Process login data===*/
    
    //when click login button in login box
    $("#log-in").click(function (e) { 
        e.preventDefault();
        let getP = document.querySelectorAll(".input-group p");
        let getSuccess = document.querySelectorAll(".login-successfully p");
           
        for(let i=0;i<getP.length;i++)
        {
            getP[i].remove();
        }
        for(let i=0;i<getSuccess.length;i++)
        {
            getSuccess[i].remove();
        }
        let password=$("#password").val();
        let userName=$("#userName").val();
        if(!userName)
        {
            $(`<p style="font-size:16px;color:red;text-align:left;">This field is required</p>`).appendTo(".input-user");
            
        }
        if(!password)
        {
            $(`<p style="font-size:16px;color:red;text-align:left;">This field is required</p>`).appendTo(".input-password");
        }
        if(userName&&password)
        {
            $(`
                <p><i class="fas fa-check"></i> Sending user info, please wait...</p>
            `).prependTo(".log-in-form .login-successfully");
            $("#userName").val("");
            $("#password").val("");  
        }
    });

    //when click register button in login box
    $("#register").click(function (e) { 
        e.preventDefault();
        $(".register-form").css("display","flex");
        $(".log-in-form").css("display","none");
    });

    //when click login button in register box
    $("#log-in-new").click(function (e) { 
        e.preventDefault();
        $(".register-form").css("display","none");
        $(".log-in-form").css("display","flex");
    });
    //when click register button in register box
    $("#register-new").click(function (e) { 
        e.preventDefault();
        let getP = document.querySelectorAll(".register-group p");
        let getSuccess = document.querySelectorAll(".register-successfully p");
        for(let i=0;i<getP.length;i++)
        {
            getP[i].remove();
        } 
        for(let i=0;i<getSuccess.length;i++)
        {
            getSuccess[i].remove();
        }
        
        let Reg_password=$("#password-reg").val();
        let Reg_userName=$("#userName-reg").val();
        let Reg_email = $("#email-reg").val();
        if(!Reg_userName)
        {
            $(`<p style="font-size:16px;color:red;text-align:left;">This field is required</p>`).appendTo(".register-user");
            
        }
        if(!Reg_password)
        {
            $(`<p style="font-size:16px;color:red;text-align:left;">This field is required</p>`).appendTo(".register-password");
        }

        if(!Reg_email)
        {
            $(`<p style="font-size:16px;color:red;text-align:left;">This field is required</p>`).appendTo(".register-email");
        }
        else
        {
                if(!/^[a-za-z0-9]/.test(Reg_email)||!/@./.test(Reg_email))
            {
                $(`<p style="font-size:16px;color:red;text-align:left;">Please enter the valid email address.</p>`).appendTo(".register-email");
            }
        }

        if(Reg_userName&&Reg_password&&Reg_email&&Reg_email.includes("@")===true)
        {
            $(`
                <p><i class="fas fa-check"></i> Sending user info, please wait...</p>
            `).prependTo(".register-form .register-successfully");
            $("#userName-reg").val("");
            $("#password-reg").val(""); 
            $("#email-reg").val(""); 
        }
    });
/*====Control bar icon====*/
$(document).ready(function () {
    //open menu
    $(".bar").click(function (e) { 
        e.preventDefault();
        $(this).empty();
        $(`<div class="close-bar">
                <i class="fas fa-times"></i>
            </div>`).appendTo(this);
        $(".mega-menu-responsive").css({"transform":"translateX(0)","margin-left":"2%"});
    });
    //close menu
    $(document).on("click",".close-bar",function (e) { 
        e.preventDefault();
        $(".bar").empty();
        $(` <div class="open-bar flex f-column">
            <span></span>
            <span></span>
            <span></span>
        </div>`).appendTo(".bar");
        $(".mega-menu-responsive").css({"transform":"translateX(-100%)","margin-left":"0px"});
    });
    //show dropdown
   $(document).on("click",".open-dropdown", function (e) {
    e.preventDefault();
    $(this).parent(".top").append(` <span class="close-dropdown">
    <i class="fas fa-angle-up"></i>
    </span>`);
    
    $(this).parents(".parent").children(".bot").css("display", "block");
    $(this).parent(".top").children(".open-dropdown").remove();
   });
   //hide dropdown
    $(document).on("click",".close-dropdown", function (e) {
        e.preventDefault();
        $(this).parent(".top").append(` <span class="open-dropdown">
            <i class="fas fa-angle-down"></i>
        </span>`);
        $(this).parents(".parent").children(".bot").css("display", "none");
        $(this).parent(".top").children(".close-dropdown").remove();

    });

    //show sub dropdown
    $(document).on("click",".sub-open-dropdown", function (e) {
        e.preventDefault();
        $(this).parent(".top").append(` <span class="sub-close-dropdown">
        <i class="fas fa-angle-up"></i>
        </span>`);
        
        $(this).parents(".sub-parent").children(".bot").css("display", "block");
        $(this).parent(".top").children(".sub-open-dropdown").remove();
       });
    //hide sub dropdown
    $(document).on("click",".sub-close-dropdown", function (e) {
            e.preventDefault();
            $(this).parent(".top").append(` <span class="sub-open-dropdown">
                <i class="fas fa-angle-down"></i>
            </span>`);
            $(this).parents(".sub-parent").children(".bot").css("display", "none");
            $(this).parent(".top").children(".sub-close-dropdown").remove();
    
        });     
});
 
/*====Scroll to top====*/
$(window).scroll(function () { 
    const currentPos = $(this).scrollTop();
    if (currentPos<300)
    {
        $(".scroll-to-top").css("display", "none");
    }
    else 
    {
        $(".scroll-to-top").css("display", "flex");
    }
});

$(".scroll-to-top").click(function (e) { 
    e.preventDefault();
    $("body,html").animate(
        {
            scrollTop:0,
        }
    );
});

/*====Detect scroll===*/
let lastScrollTop = 0, delta =1;
$(function ()
{
    $(window).scroll(function(){
        let nowScrollTop = $(this).scrollTop();

        if ($(window).width()>1025)
        {
            if(Math.abs(lastScrollTop - nowScrollTop) >= delta)
            {
                if (nowScrollTop > lastScrollTop)
                {
                    $("#header-origin").stop(true,false,true).slideUp(100);
                } 
                else 
                {
                $("#header-origin").stop(true,false,true).slideDown(100);
                          
                }
                lastScrollTop = nowScrollTop;
            }
        }
            
        });
    
});

/*====delare list of products====*/
const products = [
    {id:"lusion1",name:'Belasco Llma Cognac',price:"£33.16",rate:5,imgUrl:"./src/img/listOfDrinks/Belasco-345x465.png",filter:"new"},
    {id:"lusion2",name:'Dry Vineyard Sauvignon',price:"£33.16",rate:5,imgUrl:"./src/img/listOfDrinks/Dry-345x465.png",filter:"new"},
    {id:"lusion3",name:'Belasco Llma Cognac',price:"£22.36",rate:5,imgUrl:"./src/img/listOfDrinks/Belasco-2-345x465.png",filter:"best top"},
    {id:"lusion4",name:'Camus Cognac Borderies XO',price:"£75.58",rate:5,imgUrl:"./src/img/listOfDrinks/Camus-345x465.png",filter:"best top"},
    {id:"lusion5",name:'Hennessy V.S Cognac',price:"£88.69",rate:4,imgUrl:"./src/img/listOfDrinks/Hennessy-345x465.png"},
    {id:"lusion6",name:'Luctuson Chardonnavy',price:"£166.58",rate:4,imgUrl:"./src/img/listOfDrinks/Luctoson-345x465.png",filter:"new"},
    {id:"lusion7",name:'New Cabernet Sauvignon',price:"£88.69",rate:5,imgUrl:"./src/img/listOfDrinks/New-Cabernet-345x465.png",filter:"new"},
    {id:"lusion8",name:'Belasco Llma Cognac',price:"£20.05",rate:5,imgUrl:"./src/img/listOfDrinks/Belasco-3-345x465.png",filter:"best top"},
    {id:"lusion9",name:'Remy Martin VSOP',price:"£17.74",rate:5,imgUrl:"./src/img/listOfDrinks/Remy-345x465.png",filter:"top"},
    {id:"lusion10",name:'Jack Daniel\'s Old',price:"£14.65",rate:5,imgUrl:"./src/img/listOfDrinks/Jack-345x465.png",filter:"best"},
];

/*====fill products in products list====*/
const showProducts = (products) =>
{
        products.map((val)=>
    {
        $(
            `
            <div class="product flex f-column">
                <div class="image">
                    <img src="${val.imgUrl}" alt="">
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
                    <h4 class="productName"><a href="">${val.name}</a></h4>
                    <div class="rate-price flex j-spaceBetween a-center">
                    <div class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</div>
                        <div class="price">${val.price}</div>
                    </div>
                </div>
            </div>
            `
        ).appendTo(".products-list");
    });
}

//show list of producrs when load page
showProducts(products);

/*====Add product to Wishlist===== */
let wishlist = [];
$(document).ready(function () {
    $(document).on("click",".wishlist-click", function (e) {
        e.preventDefault();
        let curId = $(this).data("id");
        let idx = products.findIndex((val)=>val.id === curId);
        if(!wishlist.some((val)=>val.id===curId))
        {
            $(".wishlist-notice").fadeToggle().delay(2000).fadeOut();  
            wishlist.push(products[idx]); 
        }
        
        $("#wishlist span").text(`${wishlist.length}`);
        $("#wishlist-icon span").text(`${wishlist.length}`);
        $(this).children("a").empty();
        $(this).children("a").append(`<i class="fas fa-heart"></i>`);
        $(this).children("a").children("i").css("color","red");
    });
});

/*====Add product to Cart====*/
let cart = [];
let quantity=0;
$(document).ready(function () {
    $(document).on("click",".cart-click", function (e) {
        e.preventDefault();
        showCart();
        let curId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id === curId);
        if(idx !==-1)
        {
            cart[idx].quantity+=1;
        }
        else
        {
            const item = products.find((val)=>val.id === curId);
            cart.push({...item,quantity:1});
        }
        $(".wishlist-notice").text("A product has been added to your cart!").fadeToggle().delay(2000).fadeOut();   
         quantity = cart.reduce((acc,val)=>
        {
            return acc+val.quantity;
        },0)
        renderCart(cart,quantity);
    });

        //show cart
    $("#cart").click(function (e) { 
        e.preventDefault();
        showCart();
    });
    $("#cart-icon").click(function (e) { 
        e.preventDefault();
        showCart();
    });
    let showCart = () =>
    {
        $(".render-cart").css("transform","translateX(0)"); 
        renderCart(cart,quantity)  
    }
    //close cart
    $(".render-cart .head .close-cart").click(function (e) { 
        e.preventDefault();
        $(".render-cart").css("transform","translateX(100%)");
    });
   
    // add item by plus button
    $(document).on("click",".plus", function () {
        let cartItemId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id===cartItemId);
        cart[idx].quantity+=1;
        quantity++;
        renderCart(cart,quantity);
    });
    // subutract item by sub button
    $(document).on("click",".sub", function () {
        let cartItemId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id===cartItemId);
        cart[idx].quantity-=1;
        quantity--;
        if(cart[idx].quantity===0)
        {
            cart.splice(idx,1);
            renderCart(cart,quantity)
        }
        else
        {
            renderCart(cart,quantity);
        }
    });
    // delete item from cart
    $(document).on("click",".delete-item", function () {
        let cartItemId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id===cartItemId);
        quantity-=cart[idx].quantity;
        cart.splice(idx,1);
        renderCart(cart,quantity)   
    });
});
 // render cart
 const renderCart = (cart,quantity)=>
 {
     $('.render-cart .items').empty();
     $('#items-in-cart').text(`${quantity}`)
     $("#cart span").text(`${quantity}`);
     $("#subtotal").text(`£${cart.reduce((acc,val)=>{
        let price = Number(val.price.split("").splice(1,val.price.length).join(""));
        return Number((acc+val.quantity*price).toFixed(2)) },0)}`);
     $("#cart-icon span").text(`${quantity}`);
     if(cart.length)
     {
         $(".render-cart .foot").css("display", "flex");
         cart.map((val)=>
         {
             $(
                 `
                 <div class="cart-item flex">
                     <div class="image">
                         <img src="${val.imgUrl}">
                     </div>
                     <div class="info flex f-column a-start">
                         <p class="name">${val.name}</p>
                         <div class="quantity flex a-center">
                             <span class="sub" data-id="${val.id}"><i class="fas fa-minus"></i></span>
                             <span class="sub-quantity">${val.quantity}</span>
                             <span class="plus" data-id="${val.id}"><i class="fas fa-plus"></i></span>
                         </div>
                     </div>
                     <div class="flex f-column a-end right">
                         <span class="delete-item" data-id="${val.id}"><i class="fas fa-times"></i></span>
                         <span>£${Number((val.quantity * Number(val.price.split("").splice(1,val.price.length).join(""))).toFixed(2))}</span>
                     </div>
                </div>
                 `
             ).appendTo(".render-cart .items");
         });
     }
     else
     {
         $(".render-cart .items").text("No product in cart.");
         $(".render-cart .foot").css("display", "none");
     }
 }
 
/*==== Quick view product====*/
$(document).ready(function () {
    $(document).on("click",".quick-view-click", function (e) {
        e.preventDefault();
        const curId = $(this).data("id");
        let index = products.findIndex(val=>val.id === curId);
        $(".quick-view-section").empty();
        $(
            `
            <div class="quick-view-box flex">
                <div class="image"><img src="${products[index].imgUrl}" alt=""></div>
                <div class="content flex a-center j-center">
                    <div class="info ">
                        <h4 class="productName"><a href="">${products[index].name}</a></h4>
                        <div class="rate">${`<i class="fas fa-star" style="color:yellow;font-size:14px;"></i> `.repeat(products[index].rate)}${`<i class="far fa-star"></i>`.repeat(5-products[index].rate)}</div>
                        <div class="price">${products[index].price}</div>
                        <div class="option flex">
                            <div class="quantity flex a-center">
                                <span class="qw-sub" data-id="${products[index].id}"><i class="fas fa-minus"></i></span>
                                <span class="qw-sub-quantity">1</span>
                                <span class="qw-plus" data-id="${products[index].id}"><i class="fas fa-plus"></i></span>
                            </div>
                            <button class="qw-cart-click" data-id="${products[index].id}"><p>Add to cart</p></button>
                            <div class="wishlist-click" data-id="${products[index].id}">
                                <div class="talk-bubble flex a-center f-center"><p>Wishlist</p></div>
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <span class="close-quick-view"><i class="fas fa-times"></i></span>
            </div>
            `
        ).appendTo(".quick-view-section");
        $(".quick-view-section").fadeIn().css("display","flex");
    });
    $(document).on("click",".close-quick-view", function (e) {
        $(".quick-view-section").fadeOut();
    });

    // add item by plus button
    $(document).on("click",".qw-plus", function () {
        $(".qw-sub-quantity").text(`${Number($(".qw-sub-quantity").text())+1}`);
    });
    // subutract item by sub button
    $(document).on("click",".qw-sub", function () {
       if(Number($(".qw-sub-quantity").text())>1)
       {
        $(".qw-sub-quantity").text(`${Number($(".qw-sub-quantity").text())-1}`);
       }     
    });

    //add to cart click
    $(document).on("click",".qw-cart-click", function () {
        let curId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id === curId);
        if(idx !==-1)
        {
            cart[idx].quantity+=Number($(".qw-sub-quantity").text());
        }
        else
        {
            const item = products.find((val)=>val.id === curId);
            cart.push({...item,quantity:Number($(".qw-sub-quantity").text())});
        }
        $(".wishlist-notice").text("A product has been added to your cart!").fadeToggle().delay(2000).fadeOut();   
         quantity = cart.reduce((acc,val)=>
        {
            return acc+val.quantity;
        },0)
        renderCart(cart,quantity);
    });
});

/*====Compare products====*/
let compareList = [];
$(document).ready(function () {
    
    //close compare box
    $(".close-compare-products").click(function (e) { 
        e.preventDefault();
        $(".compare-products").fadeOut();
    });
    //compare icon click
    $(document).on("click",".compare-click", function (e) {
        e.preventDefault();
        const curId = $(this).data("id");
        let index = products.findIndex(val=>val.id === curId);
        if(!compareList.includes(products[index]))
        {
            compareList.push(products[index]);
        }
        
        $(".compare-products").fadeIn();
        $(".compare-products").css("display", "flex");
        renderCompare();
    });
    //close item
    $(document).on("click",".content .image .close-item", function (e) {
        e.preventDefault();
        const curId = $(this).data("id");
        let idx = compareList.findIndex(val=>val.id===curId);
        compareList.splice(idx,1);
        if(compareList.length===0)
        {
            $(".compare-products-box .content").empty();
            $(".compare-products-box .content").css("width", "100%");
            $(
                `
                    <div style="width:90%;border-top:1px solid #ebeeee;border-bottom:1px solid #ebeeee;padding:10px 0px; text-align:center;margin-left:40px;">
                             No products added in the compare table.
                    </div>
                `
            ).appendTo(".compare-products-box .content");
        }
        else
        {
            renderCompare();
        }
        //renderCompare();
    });

    // add to cart click
    $(document).on("click",".add-to-cart", function (e) {
        e.preventDefault();
        let curId = $(this).data("id");
        let idx = cart.findIndex((val)=>val.id === curId);
        if(idx !==-1)
        {
            cart[idx].quantity+=1;
        }
        else
        {
            const item = products.find((val)=>val.id === curId);
            cart.push({...item,quantity:1});
        }
        quantity = cart.reduce((acc,val)=>
        {
            return acc+val.quantity;
        },0);
        renderCart(cart,quantity);
        $(this).parent("td").html(`<a href="" class="view-to-cart">View cart <i class="fas fa-play-circle" style="color:red;"></i></a>`);
        
    });
    //render compare list
    let renderCompare = () =>
    {
        $(".compare-products-box .content").css("width", "max-content");
        $(".compare-products-box .content").empty();
        
        //append default column
        $(
            `
            
                <tr class="image">
                    <td></td>
                </tr>     
                <tr class="title">
                    <td>TITLE</td>
                </tr>
                <tr class="price">
                    <td>PRICE</td>
                </tr>
                <tr class="add">
                    <td>ADD TO CART</td>
                </tr>
                <tr class="availability">
                    <td>AVAILABILITY</td>
                </tr>
                <tr class="weight">
                    <td>WEIGHT</td>
                </tr>
                <tr class="demensions">
                    <td>DIMENSIONS</td>
                </tr>
                <tr class="colors">
                    <td>COLORS</td>
                </tr>
                <tr class="size">
                    <td>SIZE</td>
                </tr>
            `
        ).appendTo(".compare-products-box .content");

        compareList.map(val=>
            {
                $(`<td><img src="${val.imgUrl}"><span class="close-item" data-id="${val.id}"><i class="fas fa-times"></i></span></td>`).appendTo(".content .image");
                $(`<td>${val.name}</td>`).appendTo(".compare-products-box .content .title");
                $(`<td>${val.price}</td>`).appendTo(".compare-products-box .content .price");
                $(`<td><a href="" data-id="${val.id}" class="add-to-cart">Add to cart <i class="fas fa-play-circle" style="color:red;"></i></a></td>`).appendTo(".compare-products-box .content .add");
                $(`<td>In stock</td>`).appendTo(".compare-products-box .content .availability");
                $(`<td>-</td>`).appendTo(".compare-products-box .content .weight");
                $(`<td>N/A</td>`).appendTo(".compare-products-box .content .demensions");
                $(`<td>-</td>`).appendTo(".compare-products-box .content .colors");
                $(`<td>-</td>`).appendTo(".compare-products-box .content .size");
            });
    }
});

/*====change type of Drinks====*/
$(document).ready(function () {
    $("#beer").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#liquor a").css("color", 'rgb(245, 230, 201)');
        $("#wine a").css("color", 'rgb(245, 230, 201)');
        $("#extras a").css("color", 'rgb(245, 230, 201)');
        $("#beer a").css("color","#f38918");
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");

        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });

    $("#wine").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#liquor a").css("color", 'rgb(245, 230, 201)');
        $("#beer a").css("color", 'rgb(245, 230, 201)');
        $("#extras a").css("color", 'rgb(245, 230, 201)');
        $("#wine a").css("color","#f38918");
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });

    $("#extras").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#liquor a").css("color", 'rgb(245, 230, 201)');
        $("#beer a").css("color", 'rgb(245, 230, 201)');
        $("#wine a").css("color", 'rgb(245, 230, 201)');
        $("#extras a").css("color","#f38918");
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },2000);
    });

    $("#liquor").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#wine a").css("color", 'rgb(245, 230, 201)');
        $("#beer a").css("color", 'rgb(245, 230, 201)');
        $("#extras a").css("color", 'rgb(245, 230, 201)');
        $("#liquor a").css("color","#f38918");
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });
});

/*====change type of Drinks in responsive====*/
$(document).ready(function () {
    $("#beer-res").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#get-type").text("BEER");
        $("#liquor-res a").css({"background":'white',"color":"#2d2b31"});
        $("#wine-res").css({"background":'white',"color":"#2d2b31"});
        $("#extras-res").css({"background":'white',"color":"#2d2b31"});
        $("#beer-res a").css({"background":"#15171d","color":"#3e434e"});
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");

        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });

    $("#wine-res").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#get-type").text("WINE");
        $("#liquor-res a").css({"background":'white',"color":"#2d2b31"});
        $("#beer-res a").css({"background":'white',"color":"#2d2b31"});
        $("#extras-res a").css({"background":'white',"color":"#2d2b31"});
        $("#wine-res a").css({"background":"#15171d","color":"#3e434e"});
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });

    $("#extras-res").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#get-type").text("EXTRAS");
        $("#liquor-res a").css({"background":'white',"color":"#2d2b31"});
        $("#wine-res a").css({"background":'white',"color":"#2d2b31"});
        $("#beer-res a").css({"background":'white',"color":"#2d2b31"});
        $("#extras-res a").css({"background":"#15171d","color":"#3e434e"});
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },2000);
    });

    $("#liquor-res").click(function (e) { 
        e.preventDefault();
        $(".products-list").empty();
        $("#get-type").text("LIQUOR");
        $("#beer-res a").css({"background":'white',"color":"#2d2b31"});
        $("#wine-res a").css({"background":'white',"color":"#2d2b31"});
        $("#extras-res a").css({"background":'white',"color":"#2d2b31"});
        $("#liquor-res a").css({"background":"#15171d","color":"#3e434e"});
        //add loading
        $(
            `
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `
        ).appendTo(".products-list");
            
        setTimeout(function(){
            $(".loading").remove();
            showProducts(products)
        },3000);
    });
});

/*====show/hide list-down====*/
$(document).ready(function () {
    $(".list-down").click(function (e) { 
        e.preventDefault();
        $(".list-down ul").toggle();
    });
});

/* ====Countdown====*/
const deadLine = "2021/6/31";
const getTime = (deadLine) =>
{
    const deadLineDate = new Date(deadLine);
    const now = new Date();
    const distant = (deadLineDate-now)/1000; // seconds
    const days = Math.floor(distant/3600/24); 
    const hours = Math.floor(distant/3600)%24;
    const mins = Math.floor(distant/60)%60;
    const secs = Math.floor(distant)%60;

    $(".time-days").text(days);
    $(".time-hours").text(hours);
    $(".time-mins").text(mins);
    $(".time-secs").text(secs);
}
setInterval(() => {
    getTime(deadLine);
}, 1000);

/*====Filt Products====*/
//new arrivals
products.filter((val)=>
{
    if("filter" in val)
    {
        return val.filter.split(" ").includes("new");
    }
}).map((val)=>
{
    $(
        `
        <div class="product flex">
            <div class="image">
                <img src="${val.imgUrl}" alt="">
            </div>
            <div class="text flex f-column">
                <span class="name"><a href="#">${val.name}</a></span>
                <span class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</span>
                <span class="price">
                    <span>${val.price}</span>
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
                </span>
            </div>
        </div>
        `
    ).appendTo(".new");
});
//top rate
products.filter((val)=>
{
    if("filter" in val)
    {
        return val.filter.split(" ").includes("top");
    }
}).map((val)=>
{
    $(
        `
        <div class="product flex">
            <div class="image">
                <img src="${val.imgUrl}" alt="">
            </div>
            <div class="text flex f-column">
                <span class="name"><a href="#">${val.name}</a></span>
                <span class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</span>
                <span class="price">
                    <span>${val.price}</span>
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
                </span>
            </div>
        </div>
        `
    ).appendTo(".topRate");
});
//best seller
products.filter((val)=>
{
    if("filter" in val)
    {
        return val.filter.split(" ").includes("best");
    }
}).map((val)=>
{
    $(
        `
        <div class="product flex">
            <div class="image">
                <img src="${val.imgUrl}" alt="">
            </div>
            <div class="text flex f-column">
                <span class="name"><a href="#">${val.name}</a></span>
                <span class="rate">${`<i class="fas fa-star"></i> `.repeat(val.rate)}${`<i class="far fa-star"></i>`.repeat(5-val.rate)}</span>
                <span class="price">
                    <span>${val.price}</span>
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
                </span>
            </div>
        </div>
        `
    ).appendTo(".best");
});
//click to show item in responsive screen
    $(document).ready(function () {
        $(document).on("click",".item-down", function (e) {
          e.preventDefault();
          $(this).parents(".item").children("div").css("display","flex");
          $(this).parent().append(`<span class="item-up"><i class="fas fa-angle-up"></i></span>`);
          $(this).remove();
        });
    });
//click to hide item in responsive screen
    $(document).ready(function () {
        $(document).on("click",".item-up", function (e) {
        e.preventDefault();
        $(this).parents(".item").children("div").css("display","none");
        $(this).parent().append(`<span class="item-down"><i class="fas fa-angle-down"></i></span>`);
        $(this).remove();
        });
    });


/*====show blog====*/
const blogs = [
    {
        date:"3 November 2020",
        auth:"Admin",
        title:"All about vodka What does vodka taste like?",
        urlImg:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/alec-favale-KIqw3GIhdHA-unsplash-500x367.jpg.webp",
    },
    {
        date:"3 November 2020",
        auth:"Admin",
        title:"Why sometimes it's called \"whishey\" and somtimes\"whisky\"",
        urlImg: "https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/felix-w-aNMMayob3pw-unsplash-500x367.jpg.webp",
    },

    {
        date:"3 November 2020",
        auth:"Admin",
        title:"15 Whisky Cooktails Recipes from a Winemaker's Restaurant",
        urlImg:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/5_VerresCarafe-copie-1024x0-1-500x367.jpg.webp",
    },

    {
        date:"3 November 2020",
        auth:"Admin",
        title:"I'll drink to That: Bruce Neyers of Neyerw Vineyards",
        urlImg:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/11/mika-houtmeyers-ttNVVqxg_xE-unsplash-500x367.jpg.webp",
    }
    
];
//show blogs
blogs.map((val)=>
{
    $(
        `   
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="item">
                <div class="image">
                    <img src="${val.urlImg}" alt="">
                </div>
                <p><a href="#">${val.date}</a><i class="fas fa-circle"></i>By <a href="#">${val.auth}</a></p>
                <p><a href="#">${val.title}</a></p>
                <p><a href="#">Read more</a></p>
            </div>
        </div>
        `
    ).appendTo(".lastest-blogs .container .blogs .row");
});
/*====Modal Box====*/
const advertiseBox = [
    {
        customer:"Anna (japan)",
        name:"Quilted bomber jacket",
        time:55,
        imgUrl:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/minimalist-img-5-150x200.jpg.webp",
    },
    {
        customer:"Jony (USA)", 
        name:"Puffer gilet",
        time:50,
        imgUrl:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/product-lookbook-150x200.png.webp",
    },
    {
        customer:"Alex (New York",
        name:"Sort straight coat",
        time:15,
        imgUrl:"https://hn.arrowpress.net/lusion/wp-content/uploads/2020/06/coat1-150x200.jpg.webp",
    }
]
let i=0;
var changeAd = ()=>
{
    $(".ad-modal-box").empty();
    $(".ad-modal-box").fadeIn(300).delay(3000).fadeOut(300);
    $(
        `
            <div class="modal-box">
                <img src="${advertiseBox[i].imgUrl}" alt="">
                <div class="text">
                    <p class="customer">${advertiseBox[i].customer} purchased</p>
                    <p class="name"><a href="#">${advertiseBox[i].name}</a></p>
                    <p class="time">${advertiseBox[i].time} minutes ago</p>
                </div>
                <span class="close-ad"><i class="fas fa-times"></i></span>
            </div>
        `
    ).appendTo(".ad-modal-box");
    
    i++;
    if(i===advertiseBox.length) i=0;   
}

var changeAdBox= setInterval(changeAd,3800);
//close ad
$(document).on("click",".close-ad", function () {
    clearInterval(changeAdBox);
    $(".ad-modal-box").empty();
});

/*====Enter email to subcribe====*/
$("#submit-email").click(function (e) { 
    e.preventDefault();
    let subsNotice = document.querySelectorAll(".subs-notice");
    for (let i=0;i<subsNotice.length;i++)
    {
        subsNotice[i].remove();
    }
    let subcribeEmail = $("#subcribe-email").val();
    if(subcribeEmail.length)
    {
        if(/@/.test(subcribeEmail)===true)
        {
            if(/@./.test(subcribeEmail)===false)
            {
                $(`
            <li class="flex f-column a-center j-center empty-email subs-notice">
                <div class="triangle"></div>    
                <div class="content flex a-center">
                    <div class="square flex j-center a-center">
                        <i class="fas fa-exclamation"></i>
                    </div>
                    <p>Vui lòng nhập một phần sau đây '@'. '@' chưa hoàn thành.</p>
                </div>
            </li>
            `).appendTo(".subscribe");
            }
            else
            {
                $(`
            <li class="flex a-center j-spaceBetween subs-email-success subs-notice">
                <i class="fas fa-check"></i>
                <p>Thank you, your sign-up request was successful! Please check your email inbox to confirm.</p>
                <i class="fas fa-times close-notice"></i>
            </li>`).appendTo(".subscribe");
            $("#subcribe-email").val("");
                $(document).on("click",".close-notice", function () {
                    $(".subs-email-success").remove();
                });
            }
        }
        else 
        {
            $(`
            <li class="flex f-column a-center j-center empty-email subs-notice">
                <div class="triangle"></div>    
                <div class="content flex a-center">
                    <div class="square flex j-center a-center">
                        <i class="fas fa-exclamation"></i>
                    </div>
                    <p>Vui lòng bao gồm '@' trong địa chỉ email. ${subcribeEmail} đang thiếu một '@'.</p>
                </div>
            </li>
            `).appendTo(".subscribe");
        }
    }
    else
    {
        $(`
            <li class="flex f-column a-center j-center empty-email subs-notice">
                <div class="triangle"></div>    
                <div class="content flex a-center">
                    <div class="square flex j-center a-center">
                        <i class="fas fa-exclamation"></i>
                    </div>
                    <p>Vui lòng điền vào ô này.</p>
                </div>
            </li>
            `).appendTo(".subscribe");
           
    }
    
});
// close notice
$(document).on("click",".subs-notice", function () {
    
        $(".subs-notice").remove();
        $("#subcribe-email").val("");
});
