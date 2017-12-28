var CartFunctions = (function(){
    var cart = [];

    return {
        addToCart : function(id){
            var inventory = DataService.get(Constants.INVENTORY);
            var itemAdded = $.grep(inventory.items, function(item){
                return item.id === id;
            })[0];

            cart.push(itemAdded);
            DataService.set(Constants.CART, cart);

            var updatedInventory = $.map(inventory.items, function(item){
                if(item.id === id){
                    item.isOutOfStock = true;
                }
                return item;
            });

            DataService.set(Constants.INVENTORY, {"items": updatedInventory});
            PLPFunctions.getInventory();
        }
    }
})();