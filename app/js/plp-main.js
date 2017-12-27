(function(){
    $.ajax({
        type: "GET",
        url: "./../data/product-data.json",
        dataType: "json",
        success: function(inventoryData) {
            // alert(JSON.stringify(inventoryData));
            // var jsonFlickrFeed = resultData;

            // var template = MyApp['templates']['header'];

            console.log("Inventory JSON ", inventoryData);
            
            var template = CrapbagPLP["templates"]["article-item"];
            
            var html = template(inventoryData);
            
            var plpMain = document.getElementById('plp-main');
            
            plpMain.innerHTML = html;
        },
        failure: function(err){
            console.log("There is some problem : Like this :", err);
        }
    });
})();

// console.log("Inventory JSON ", inventory);

// var template = CrapbagPLP["templates"]["article-item"];

// var html = template(inventory);

// var plpMain = document.getElementById('plp-main');

// plpMain.innerHTML = html;