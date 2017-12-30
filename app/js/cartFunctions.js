var CartFunctions = (function() {
    var cart = [];

    return {
        init: function() {
            var template = CrapbagPLP["templates"]["cart-item"];
            var htmldata = template(DataService.get(Constants.CART));
            $("#cartItemsMain").html(htmldata);

            if (DataService.get(Constants.CART).length > 0) {
                $("#cart-bag-icon").addClass("check-cart");
            } else {
                $("#cart-bag-icon").removeClass("check-cart");
                $("#cartItemsMain").text($.i18n._("empty-cart-message"));
            }

            CartFunctions.bindings();
            Multilingual.init();
        },
        bindings: function() {
            $(".cart-item-btn").click(function() {
                CartFunctions.removeFromCart(
                    $(this)
                    .parents(".cart-item")
                    .attr("id")
                );
            });
        },
        addToCart: function(id) {
            var inventory = DataService.get(Constants.INVENTORY);
            var itemAdded = $.grep(inventory.items, function(item) {
                return item.id === id;
            })[0];

            cart.push(itemAdded);
            DataService.set(Constants.CART, cart);

            var updatedInventory = $.map(inventory.items, function(item) {
                if (item.id === id) {
                    item.isOutOfStock = true;
                }
                return item;
            });

            DataService.set(Constants.INVENTORY, { items: updatedInventory });
            PLPFunctions.getInventory();
            CartFunctions.init();
        },
        removeFromCart: function(id) {
            var inventory = DataService.get(Constants.INVENTORY);
            var removeIndex = -1;

            cart = DataService.get(Constants.CART);

            var itemRemoved = $.grep(cart, function(item) {
                return item.id === id;
            })[0];

            $.map(cart, function(item, i) {
                if (item.id === itemRemoved.id) {
                    removeIndex = i;
                    return;
                }
            });

            var updatedInventory = $.map(inventory.items, function(item) {
                if (item.id === itemRemoved.id) {
                    item.isOutOfStock = false;
                }
                return item;
            });

            cart.splice(removeIndex, 1);

            DataService.set(Constants.INVENTORY, { items: updatedInventory });
            DataService.set(Constants.CART, cart);

            PLPFunctions.getInventory();
            CartFunctions.init();
        }
    };
})();