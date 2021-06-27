let cartList = JSON.parse(localStorage.getItem('cart'));

let renderCartList = () =>
{
    $(".cart-list .list").empty();
    cartList.map(val=>
        {
            $(`
            <div class="product flex">
                <div class="image">
                    <img src="${val.imgUrl}" alt="">
                </div>
                <div class="info flex j-spaceBetween">
                    <div class="name-quantity flex f-column">
                        <p>${val.name}</p>
                        <span>x${val.quantity}</span>
                    </div>
                    <span>£${Number((val.quantity * Number(val.price.split("").splice(1,val.price.length).join(""))).toFixed(2))}</span>
                </div>
            </div>
            `).appendTo(".cart-list .list");
        });
    $(".cart-quantity").text(`Cart(${
        cartList.reduce((acc,val)=>{
            return acc+val.quantity;
        },0)
    })`);
    $(".subtotal").text(`£${cart.reduce((acc,val)=>{
        let price = Number(val.price.split("").splice(1,val.price.length).join(""));
        return Number((acc+val.quantity*price).toFixed(2)) },0)}`);
        $(".grand-total").text(`£${cart.reduce((acc,val)=>{
            let price = Number(val.price.split("").splice(1,val.price.length).join(""));
            return Number((acc+val.quantity*price).toFixed(2)) },0)}`);
}
renderCartList();

$(document).on("click",".list-up", function () {
    $(".list").css("display", "none");
    $(
        `
            <span class="list-down"><i class="fas fa-angle-down"></i></span>
        `
    ).appendTo(".title");
    $(this).remove();
});

$(document).on("click",".list-down", function () {
    $(".list").css("display", "block");
    $(
        `
            <span class="list-up"><i class="fas fa-angle-up"></i></span>
        `
    ).appendTo(".title");
    $(this).remove();
});