var cartFunctions = {
    cart : [],

    addToCart : function(){
        alert("Something like this : ",this);
        console.log(this);
        cart[cart.length] = {};
    }
}

// var cartFunctions = (function(){
//     var cart = [],

//     return {
//         addToCart : function(){
//             alert("Something like this : ",this);
//             console.log(this);
//             cart[cart.length] = {};
//         }

//     }

// })();