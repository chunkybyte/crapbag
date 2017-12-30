var Multilingual = (function() {
    var langUrl;
    return {
        init: function() {
            if (!DataService.hasProperty(Constants.LANG)) {
                Multilingual.browserLanguage();
                DataService.set(Constants.LANG, language);
            } else {
                language = DataService.get(Constants.LANG);
            }

            Multilingual.setLabel();

            Multilingual.loadDictionary(DataService.get(Constants.LANG));
        },
        browserLanguage: function() {
            var supportedLanguage = navigator.language || navigator.userLanguage;
            if (~supportedLanguage.indexOf("fr")) {
                language = "fr";
            } else if (~supportedLanguage.indexOf("ja")) {
                language = "ja";
            } else {
                language = "en";
            }
        },
        loadDictionary: function(lang) {
            switch (lang) {
                case "en":
                    langUrl = "./i18n/en/en.json";
                    break;
                case "fr":
                    langUrl = "./i18n/fr/fr.json";
                    break;
                case "ja":
                    langUrl = "./i18n/ja/ja.json";
                    break;
                default:
                    langUrl = "./i18n/en/en.json";
            }

            $.ajax({
                type: "GET",
                url: langUrl,
                dataType: "json",
                success: function(langData) {
                    $.i18n.load(langData);
                },
                failure: function(err) {
                    console.log(
                        "Seems like there was some problem with the AJAX Call to get the language. See : ",
                        err
                    );
                }
            }).then(function() {
                Multilingual.populateLabels();
            });
        },
        populateLabels: function() {
            $("label[for='brand-title']").text($.i18n._("site-title"));
            $("label[for='cartModal']").text($.i18n._("cart-title"));
            $("label[for='modal-footer']").text($.i18n._("close-cart"));
            $("label[for='plp-footer']").text($.i18n._("copyright-text"));

            $("label[for='plp-item-addbtn']").text($.i18n._("add-to-cart"));
            $("label[for='disabled']").text($.i18n._("out-of-stock"));
            $("label[for='plp-item-rating']").text($.i18n._("rating-plp-item"));
            $("label[for='cart-item-btn']").text($.i18n._("remove-item"));

            if (DataService.get(Constants.CART).length == 0) {
                $("#cartItemsMain").text($.i18n._("empty-cart-message"));
            }
        },
        setLabel: function() {

            $('.dropdown-menu').find('li').siblings().removeClass('active');

            $('.dropdown-menu').find("[data-language='" + language + "']").parent('li').addClass('active');
            $("label[for='langSupport']").attr("data-selectedLang", language);
            $("label[for='langSupport']").text(Multilingual.checkCodes(DataService.get(Constants.LANG)));
        },
        checkCodes: function(langCode) {
            var langName;
            switch (langCode) {
                case "en":
                    langName = "English";
                    break;
                case "fr":
                    langName = "French";
                    break;
                case "ja":
                    langName = "Japanese";
                    break;
                default:
                    langName = "English";
            }
            return langName;
        }
    };
})();