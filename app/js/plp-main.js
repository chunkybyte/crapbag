var PLPFunctions = (function() {
    return {
        getInventory: function() {
            if (DataService.hasProperty(Constants.INVENTORY)) {
                PLPFunctions.bindTemplate(DataService.get(Constants.INVENTORY));
                PLPFunctions.bindings();
                CartFunctions.init();
                return;
            }
            $.ajax({
                type: "GET",
                url: "./data/product-data.json",
                dataType: "json",
                success: function(inventoryData) {
                    DataService.set(Constants.INVENTORY, inventoryData);
                    PLPFunctions.bindTemplate(DataService.get(Constants.INVENTORY));
                },
                failure: function(err) {
                    console.log("Seems like there was some problem with the AJAX Call. See : ", err);
                }
            }).then(function() {
                PLPFunctions.bindings();
            });
        },
        bindTemplate: function(obj) {
            var template = CrapbagPLP["templates"]["product-tile"];
            var htmldata = template(obj);
            $('#plp-main').html(htmldata);
            Multilingual.init();
        },
        bindings: function() {
            $('.plp-item-addbtn').click(function() {
                CartFunctions.addToCart($(this).parents('.plp-item').attr('id'));
            });
        }
    }
})();

PLPFunctions.getInventory();
Multilingual.init();