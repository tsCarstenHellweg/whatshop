var appinfo = {    
/* ********************* TRUSTEDSHOPS-TrustBadge/Card ******************************** */
    'Trustbadge ohne Variante': {
        fullname: 'Trustbadge ohne Variante',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "";
        }
    },
    'Trustbadge - Reviews': {
        fullname: 'Trustbadge - Reviews',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function() 
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "reviews";
        }
    },
    'Trustbadge - Custom': {
        fullname: 'Trustbadge - Custom',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function() 
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "custom";
        }
    },
    'Trustbadge - Custom Reviews': {
        fullname: 'Trustbadge - Custom Reviews',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "custom_reviews";
        }
    },
    'Trustbadge - Default': {
        fullname: 'Trustbadge - Default',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "default";
        }
    },
    'Trustedshops - Shopify Plugin': {
        fullname: 'Trustedshops - Shopify Plugin',        
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /trustedshops_shopify\.js/
    },
    'Trustcard via TB': {
        fullname: 'Trustcard via TB',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /id="Container_db8d3657bdbe440c985ae127463eaad4"/
    },
    'Trustcard - DIV': {
        fullname: 'Trustcard - DIV',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /div\sid="tscard4_db8d3657bdbe440c985ae127463eaad4"\sclass="customCheckout_db8d3657bdbe440c985ae127463eaad4/
    },
    'TS-Checkout-DIV': {
        fullname: 'TS-Checkout-DIV',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /div\sid="trustedShopsCheckout"\sstyle="display\:\snone\;"/
    },
    'TS-Checkout-DIV + Produktdaten': {
        fullname: 'TS-Checkout-DIV + Produktdaten',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /span\sclass="tsCheckoutProductItem"/
    },
    'Trustbadge - Text': {
        fullname: 'Trustbadge - Text',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "text";
        }
    },
    'Trustbadge - Small':{
        fullname: 'Trustbadge - Small',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            return _tsConfig.variant == "small";
        }
    },
    'Responsive Trustbadge (floating)': {
        fullname: 'Responsive Trustbadge (floating)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.responsive === undefined)
            {          
               return false;
            }
            var tbRespVar = _tsConfig.responsive.variant;
            if (tbRespVar == "floating")
            {
                return _tsConfig.responsive.variant == "floating";
            }
        }
    },
    'Responsive Trustbadge (floating_reviews)': {
        fullname: 'Responsive Trustbadge (floating_reviews)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.responsive === undefined)
            {
               return false;
            }
            var tbRespVar = _tsConfig.responsive.variant;
            if (tbRespVar == "floating_reviews")
            {
                return _tsConfig.responsive.variant == "floating_reviews";
            }
        }
    },
    'Responsive Trustbadge (default)': {
        fullname: 'Responsive Trustbadge (default)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.responsive === undefined)
            {
               return false;
            }
            var tbRespVar = _tsConfig.responsive.variant;

            if (tbRespVar == "default")
            {
                return _tsConfig.responsive.variant == "default";
            }
        }
    },
    'Responsive Trustbadge (custom)': {
        fullname: 'Responsive Trustbadge (custom)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.responsive === undefined)
            {
               return false;
            }
            return _tsConfig.responsive.variant == "custom";    
        }
    },
    'Trustbadge (disabled via Script)': {
        fullname: 'Trustbadge (disabled via Script)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.disableTrustbadge === undefined)
            {
               return false;
            }
            return _tsConfig.disableTrustbadge == "true";
        }
    },
    'Trustbadge (responsive TB disabled)': {
        fullname: 'Trustbadge (responsive TB disabled)',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsConfig === undefined ) 
            {
                return false;
            }
            if( _tsConfig.disableResponsive === undefined )
            {
                return false;
            }           
            return _tsConfig.disableResponsive == "true";
        }
    },
    'Trustbadge - Skript eingebunden': {
        fullname: 'Trustbadge - Skript eingebunden',
        url:'',
        icon:'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /trustedshops.js/
    },
    'Review Sticker ohne Variante':{
        fullname: 'Review Sticker ohne Variante',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {            
                var stickerVar = _tsRatingConfig.variant;
                if(stickerVar == "")
                {                
                   return true;
                }            
            }
            return false;
        }
    },
    'Review Sticker - skyscraper_vertical':{
        fullname: 'Review Sticker - skyscraper_vertical',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {            
                var stickerVar = _tsRatingConfig.variant;
                return stickerVar == "skyscraper_vertical";
            }
            return false;
        }
    },
    'Review Sticker - skyscraper_horizontal':{
        fullname: 'Review Sticker - skyscraper_horizontal',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {            
                var stickerVar = _tsRatingConfig.variant;
                return stickerVar == "skyscraper_horizontal";
            }
            return false;
        }
    },
    'Review Sticker - vertical':{
        fullname: 'Review Sticker - vertical',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {            
                var stickerVar = _tsRatingConfig.variant;
                if( stickerVal !== undefined )
                {
                    return stickerVar == "vertical";
                }
            }
            return false;
        }
    },
    'TEST':{
        fullname: 'TEST',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /TESTPATTERN-CONTAINER/
    },
    'TS-Widget':{
        fullname: 'TS-Widget',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /widgets\.trustedshops\.com\/reviews\/tsSticker\/tsProductStickerSummary\.js/ && /trustedshops.com\/bewertung\/widget\/widgets\/X/
    },
    'Testimonial':{
        fullname: 'Testimonial',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /trustedshops.com\/reviews\/tsSticker\/tsSticker\.js/ && /variant\:\s\'testimonial\'/,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {            
            
                var stickerVar = _tsRatingConfig.variant;
                if(stickerVar == "testimonial")
                {                
                    return true;
                }
            }
            return false;
        }
    },
    'Product Review Sticker':{
        fullname: 'Product Review Sticker',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /trustedshops.com\/reviews\/tsSticker\/tsProductSticker.js/
    },
    'StarSummary':{
        fullname: 'StarSummary',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /\/\/widgets.trustedshops.com\/reviews\/tsSticker\/tsProductStickerSummary.js/,
        test_scripttag: /widgets.trustedshops.com\/reviews\/tsSticker\/tsProductStickerSummary.js"/
    },
    'Alter Käuferschutz':{
        fullname: 'Alter Käuferschutz',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /value="X/&&/name="shop_id"/&&/\saction="https:\/\/www.trustedshops.com\/shop\/protection.php"/
    },
    'Verlinkung auf TS-Profil':{
        fullname: 'Verlinkung auf TS-Profil',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_regexp: /href="http:\/\/www.trustedshops.de\/profil\/X|href=“https:\/\/www.trustedshops.de\/bewertung\info_X|href="https:\/\/www.trustedshops.com\/shop\/certificate.php?shop_id=X|href="https:\/\/www.trustedshops.de\/shop\/certificate.php?shop_id=X|href="http:\/\/www.trustedshops.fr\/evaluation\/info_X|href="http:\/\/www.trustedshops.es\/evaluacion\/info_X|href="http:\/\/www.trustedshops.pl\/opinia\/info_X|href="http:\/\/www.trustedshops.nl\/verkopersbeoordeling\/info_X|href="http:\/\/www.trustedshops.be\/fr\/evaluation\/info_X|href="http:\/\/www.trustedshops.be\/nl\/verkopersbeoordeling\/info_X|href="http:\/\/www.trustedshops.it\/valutazione-del-negozio\/info_X/
    },
    'Exit Intent Popup': {
        fullname: 'Exit Intent Popup',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            var EIP = document.querySelector('link[id="trustbadgeStyleSheettbExitIntent"]');
            if (EIP !== null)
            {
                return true;
            }
            return false;
        }
    },
    
/* *********************TRUSTEDSHOPS-Rich Snippets******************************** */
    'Shop-SEO-Stars - Organization-Snippet (JSON-LD)': {
        fullname: 'Shop-SEO-Stars - Organization-Snippet (JSON-LD)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if (document.querySelector('script[type="application/ld+json"]')!== null)
            {
                if (jsonLD !== undefined)
                {
                    if ((jsonLD['@type'] == "Organization") && (jsonLD['@type'] == "AggregateRating") )
                    {              
                        return true;
                    }
                }
            }
            return false;
        }
    },
    'Shop-SEO-Stars - LocalBusiness-Snippet (JSON-LD)': {
        fullname: 'Shop-SEO-Stars - LocalBusiness-Snippet (JSON-LD)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if (document.querySelector('script[type="application/ld+json"]')!== null)
            {
                var jsonLD = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerHTML);
                if (jsonLD !== undefined)
                {
                    if ( 
                            (jsonLD['@type'] == "LocalBusiness") 
                            && (jsonLD['image'] == "http://static.trustedshops.com/img/brand/e-trustedshops_black_145-60.png")
                    )
                    {                
                        return true;
                    }                    
                }
            }
            return false;
        }
    },
    'Shop-SEO-Stars - Organization-Snippet (RDFa)': {
        fullname: 'Shop-SEO-Stars - Organization-Snippet (RDFa)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0
    },
    'Shop-SEO-Stars - LocalBusiness-Snippet (RDFa)': {
        fullname: 'Shop-SEO-Stars - LocalBusiness-Snippet (RDFa)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0
    },
    'Shop-SEO-Stars - Organization-Snippet (microdata)': {
        fullname: 'Shop-SEO-Stars - Organization-Snippet (microdata)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( document.querySelector( 'script[type="application/ld+json"]' ) !== null )
            {
                var tsLink = /www.trustedshops.com\/buyerrating\/info_/;    
                var micro_Orga = document.querySelector('div[itemtype="http://schema.org/Organization"]');    
    
                var micro_ratVal = document.querySelector('div[itemprop=ratingValue]');
                if(
                        (micro_Orga !== undefined) 
                        && (tsLink !== undefined) 
                        && (micro_ratVal !== undefined)
                )
                {                
                    return true;
                }
            }
            return false;
        }
    },
    // added!
    'Shop-SEO-Stars - LocalBusiness-Snippet (microdata)': {
        fullname: 'Shop-SEO-Stars - LocalBusiness-Snippet (microdata)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( document.querySelector( 'script[type="application/ld+json"]' ) !== null )
            {
                var tsLink = /www.trustedshops.com\/buyerrating\/info_/;    
                var micro_local = document.querySelector('div[itemtype="http://schema.org/LocalBusiness"]');   
                var micro_ratVal = document.querySelector('div[itemprop=ratingValue]');
                if(
                        (micro_local !== undefined) 
                        && (tsLink !== undefined) 
                        && (micro_ratVal !== undefined)
                )
                {                
                    return true;
                }
            }
            return false;
        }
    },
    
    'Shop-SEO-Stars - AggregateRating-Snippet (microdata)': {
        fullname: 'Shop-SEO-Stars - AggregateRating-Snippet (microdata)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( document.querySelector( 'script[type="application/ld+json"]' ) !== null )
            {
                var tsLink = /www.trustedshops.com\/buyerrating\/info_/;    
                var micro_AR = document.querySelector('div[itemtype="https://schema.org/AggregateRating"]');     
                var micro_ratVal = document.querySelector('div[itemprop=ratingValue]');
                if (
                        (micro_AR !== undefined) 
                        && (tsLink !== undefined) 
                        && (micro_ratVal !== undefined)
                )
                {                
                    return true;
                }
            }
            return false;
        }
    },
    'Product-SEO-Stars - via Sticker (JSON-LD)': {
        fullname: 'Product-SEO-Stars - via Sticker (JSON-LD)',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsProductReviewsConfig === undefined )
            {            
                return false;
            }
            var prRSConfi = _tsProductReviewsConfig.richSnippets;

            if( prRSConfi == "on" )
            {            
                var jsonLD = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerHTML);
                if (jsonLD !== undefined)
                { 
                    var prRSPublisher = jsonLD['review']['0']['publisher']['name'];
                    if(
                            (jsonLD['@type'] == "Product") 
                            && (jsonLD['image'] == "http://static.trustedshops.com/img/brand/e-trustedshops_black_145-60.png") 
                            && (prRSPublisher == "Trusted Shops GmbH")
                    )
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    },
    'Rich Snippets via Sticker': {
        fullname: 'Rich Snippets via Sticker',
        url: '',
        icon: 'logo.png',
        priority: 1,
        cat: 0,
        test_script: function()
        {
            if( _tsRatingConfig !== undefined )
            {                         
                var srRSConfi = _tsRatingConfig.richSnippets;

                if(srRSConfi == "on")
                {             
                    return true;
                }
            }
            return false;
        }
    },
    
// ===shopping carts who are partner of Trusted Shops ===
    '4Sellers': {
        fullname: '4Sellers',
        url: '',
        icon: '4sellers.ico',
        priority: 4,
        cat: 4,
        test_regexp: /logicbase|4sellers/i
    },
    'EINSUNDEINS': {
        fullname: '1&1',
        url: '',
        icon: 'EINSUNDEINS.ico',
        priority: 4,
        cat: 4,
        test_url: /sess\/utn/i,
        test_regexp: /(ssl\.kundenserver\.de)|(\?sessid=)|(product_overview\.shopscript)|(generated by shop3)/i
    },
    'ABAS': {
        fullname: 'ABAS',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /\/abas/
    },
    'Aconon': {
        fullname: 'Aconon',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /www\.aconon\.de/
    },
    //actebis
    //afs shop
    'Afterbuy': {
        fullname: 'Afterbuy',
        url: '',
        icon: 'afterbuy.ico',
        priority: 4,
        cat: 4,
        test_regexp: /afterbuy\/.de|www.afterbuy.de/i
    },
    //amensasu
    'Applicas':{
        fullname: 'Applicas',
        icon: 'Applicas.png',
        url: '',
        priority: 4,
        cat: 4
    },
    'APT': {
        fullname: 'APT',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /apt-(trading|webshop)/
    },
    //ascara
    //b.com
    'Cosmoshop': {
        fullname: 'Cosmoshop',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_meta_generator: /CosmoShop/
    },
    'CP-Shop': {
        fullname: 'CP-Shop',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /Contentpapst/
    },
    //cybershop
    //dr webshop

    'DataBecker': {
        fullname: 'DataBecker',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_meta_generator: /web\sto\sdate\s*(.*)/i
    },
    'Siquando': {
        fullname: 'Siquando',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_meta_generator: /SIQUANDO\sShop\s*(.*)/i
    },
    'DTELEKOM': {
        fullname: 'DTELEKOM',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4
    },
    //emajine
    //e-shops
    //easy-y
    'Ecomas': {
        fullname: 'Ecomas',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /ecomas-cms/
    },
    'Electronicsales': {
        fullname: 'Electronicsales',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /es\:shop/i
    },
    'epages': {
        fullname: 'epages',
        url: '',
        icon: 'epages.png',
        priority: 4,
        cat: 4,
        test_url: /epages/i,
        test_regexp: /<div class=\"BoxContainer\">|[^a-zA-Z]epages/
    },
    'epages now': {
        fullname: 'epages now',
        url: '',
        icon: 'epages.png',
        priority: 4,
        cat: 4,
        test_regexp: /epages.*@dev/
    },
    //erp
    //es:shop
    'Gambio': {
        fullname: 'Gambio',
        url: '',
        icon: 'Gambio.ico',
        priority: 4,
        cat: 4,
        test_regexp: /([Gg]ambio|\/content\.php\?coID=\d)|(\/gambio)/
    },
    //Geos Shop,GS Shop Builder,GS-Shop
    'Gsshopbuilder': {
        fullname: 'Gsshopbuilder',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /gs-shopbuilder/
    },
    //hood
    'Hotdigital': {
        fullname: 'Hotdigital',
        url: '',
        icon: 'hotdigital.ico',
        priority: 4,
        cat: 4,
        test_url: /hood\.de/i,
        test_regexp: /hotdigital/
    },
    'JIMDO': {
        fullname: 'JIMDO',
        url: '',
        icon: 'jimdo.png',
        priority: 4,
        cat: 4,
        test_regexp: /jimcdn/i,
        test_script: function()
        {
            return window.jimdoData != null;
        }
    },
    'IAI': {
        fullname: 'IAI',
        url: '',
        icon: 'iai.png',
        priority: 4,
        cat: 4
    },
    'Intershop': {
        fullname: 'Intershop',
        url: '',
        icon: 'intershop.png',
        priority: 4,
        cat: 4,
        test_regexp: /\/intershop\.static|intershop/i
    },
    'i-sklep': {
        fullname: 'i-sklep',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /href="http:\/\/i-sklep\.pl/i
    },
    'I-ways': {
        fullname: 'I-ways',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /\/i-ways/i
    },
    'JTL': {
        fullname: 'JTL',
        url: '',
        icon: 'JTL.ico',
        priority: 4,
        cat: 4,
        test_regexp: /JTL-Shop|JTLSHOP|(JTL-Shop[\s]{0,1}3)|\sjtl\s|jtl_token|jtlversion/
    },
    'Lightspeed': {
        fullname: 'Lightspeed',
        icon: 'Lightspeed.svg',
        url: '',
        priority: 4,
        cat: 4,
        test_regexp: /lightspeedhq/&&/assets.webshopapp.com/&&/Lightspeed\sNetherlands\sB.V./i
    },
    'Mauve': {
        fullname: 'Mauve',
        url: '',
        title: 'Mauve Mailorder',
        priority: 4,
        cat: 4,
        test_regexp: /\MauveShop|Mauve\sWebshopsystem/
    },
    'Magento': {
        fullname: 'Magento',
        url: '',
        icon: 'Magento.ico',
        priority: 4,
        cat: 4,
        test_regexp: /(var BLANK_URL = '[^>]+js\/blank\.html')^(simplecommerce)|\/varien\/|<link [rel="stylesheet" type="text\/css"]*[rel="icon"]* href="https?:\/\/[a-z0-9\-_.~]+[a-z0-9\-_.~\/]*\/skin\/frontend\/|<link (rel="icon"|rel="shortcut icon") href="https?:\/\/[a-z0-9\-_.~]+[a-z0-9\-_.~\/]*\/media\/favicon\/default\/|copyright\s©\smagento,\sinc.|frontend\/Magento\/|Magento_Theme/img,
        test_scripttag: /static\/_requirejs|Magento_Ui/
    },
    'Magento_MRG': {
        fullname: 'Magento_MRG',
        url: '',
        icon: 'Magento_MRG.ico',
        priority: 4,
        cat: 4,
        test_regexp: /(trustedrating\.css)|(tax-details(.*)\/lieferung\/)/i
    },
    'MondoShop': {
        fullname: 'MondoShop',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /(Mondo Shop)|(mondo\.media)/i
    },
    'MUV': {
        fullname: 'MUV',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /yanis42/
    },
    'OMECO': {
        fullname: 'OMECO',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /omeco\sGmbH|omeco.|omeco/
    },
    'OXID_ESALES': {
        fullname: 'OXID_ESALES',
        url: '',
        icon: 'OXID_ESALES.ico',
        priority: 4,
        cat: 4,
        test_regexp: /OXID\s+eSales|oxid-esales\.com|oxid\.css|source\/out\/flow/i
    },
    'PhPepperShop': {
        fullname: 'PhPepperShop',
        url: '',
        icon: 'PhPepperShop.ico',
        priority: 4,
        cat: 4,
        test_regexp: /PhPepperShop/i
    },
    'Plentymarkets': {
        fullname: 'Plentymarkets',
        url: '',
        icon: 'Plentymarkets.ico',
        priority: 4,
        cat: 4,
        test_regexp: /plentysystems|plentymarkets|plentyid/i
    },
    'Plentymarkets_v6': {
        fullname: 'Plentymarkets_v6',
        url: '',
        icon: 'Plentymarkets.ico',
        priority: 4,
        cat: 4,
        test_regexp: /content="plentymarkets"/
    },
    'Powerboutique': {
        fullname: 'Powerboutique',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /\/boutique\/[^.]*\.cfm\?/i
    },
    'Powergap': {
        fullname: 'Powergap',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /(s\d\d)\.php\?shopid=\1/
    },
    'Presta': {
        fullname: 'Prestashop',
        url: '',
        icon: 'prestashop.png',
        title: 'PrestaShop',
        priority: 4,
        cat: 4,
        test_meta_generator: /Presta|PrestaShop|prestashop/,
        test_regexp: /Prestashop|PrestaShop|prestashop/i
    },
    'Rakuten': {
        fullname: 'Rakuten',
        url: '',
        icon: 'Rakuten.png',
        priority: 4,
        cat: 4,
        test_url: /rakuten|tradoria/i,
        test_regexp: /rakuten|tradoria/i
    },
    'RedCart': {
        fullname: 'RedCart',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_meta_author: /http\:\/\/(www\.)?redcart\.pl/
    },
    'SEOshop': {
        fullname: 'SEOshop',
        icon: 'Seoshop.ico',
        url: '',
        priority: 4,
        cat: 4,
        test_regexp: /SEOshop\sGroup\sB\.V\.|seoshop\/[0-9]{6}.js/i
    },
    'Shoper': {
        fullname: 'Shoper',
        url: '',
        icon: 'shoper.ico',
        priority: 4,
        cat: 4,
        test_regexp: /<div id="shoper-foot">/
    },
    'Shopware': {
        fullname: 'Shopware',
        url: '',
        icon: 'shopware.ico',
        priority: 4,
        cat: 4,
        test_regexp: /jquery\.shopware\.js|web\/cache|engine\/Shopware/,
        test_scripttag: /engine\/Shopware\/Plugins/
    },
    'Smartstore': {
        fullname: 'Smartstore',
        url: '',
        icon: 'Smartstore.ico',
        priority: 4,
        cat: 4,
        test_regexp: /SMOMAbsolute|MPopupMenu|smartstore/i
    },
    'Smartstore-Image': {
        fullname: 'Smartstore-Image',
        url: '',
        icon: 'Smartstore.ico',
        priority: 4,
        cat: 4,
        test_regexp: /smartstore-startseitenheader-micron/
    },
    'Strato': {
        fullname: 'Strato',
        url: '',
        icon: 'strato.ico',
        priority: 4,
        cat: 4,
        test_url: /strato/i,
        /*
        'Strato': /strato(.*)epages/i,
        'Strato': /storeWebRoot|Strato\/GUI/,                
        // */
        test_regexp: /(strato(.*)epages)|(storeWebRoot|Strato\/GUI)/i
    },
    'Sote': {
        fullname: 'Sote',
        url: '',
        icon: 'sote.ico',
        priority: 4,
        cat: 4,
        test_regexp: /((\/|\.)sote\.pl)|(frontend\/theme\/default2\/)/i
    },
    'Tradoro': {
        fullname: 'Tradoro',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /tradoro\.pl/i
    },
    'Venda': {
        fullname: 'Venda',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /bin\/venda/
    },
    'VirtueMart': {
        fullname: 'VirtueMart',
        url: '',
        icon: 'VirtueMart.ico',
        priority: 4,
        cat: 4,
        test_regexp: /(<div id=("|')vmMainPage)|(virtuemart)/
    },
    'Websale': {
        fullname: 'Websale',
        url: '',
        icon: 'Websale.ico',
        priority: 4,
        cat: 4,
        test_regexp: /websale/i
    },
    'XTC_3': {
        fullname: 'XTC_3',
        url: '',
        icon: 'XTC_3.ico',
        priority: 4,
        cat: 4,
        test_meta_generator: /xt:Commerce\s*v3/i,
        test_regexp: /(xt:Commerce v3)^(xtcModified)|XTCsid^(xtcModified)/i
    },
    'XTC_Veyton': {
        fullname: 'XTC_Veyton',
        url: '',
        icon: 'XTC_Veyton.ico',
        priority: 4,
        cat: 4,
        test_meta_generator: /xt:Commerce\s4/i,
        test_regexp: /(xt:Commerce 4(\.0|\.1)?)|VEYTON|(templates\/xtc4\/)/i
    },
    'xtcModified': {
        fullname: 'xtcModified',
        url: '',
        icon: 'modified.png',
        priority: 4,
        cat: 4,
        test_regexp: /xtcModified|\/xtc5\/|modified-shop\.org/i
    },
    'Xanario': {
        fullname: 'Xanario',
        url: '',
        icon: 'Xanario.ico',
        priority: 4,
        cat: 4,
        test_regexp: /xanario/i
    },
    'Xonic': {
        fullname: 'Xonic',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /xonic/i
    },
    'Geos Shop': {
        fullname: 'Geos Shop',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /geossql/
    },
    'MK-Mall24': {
        fullname: 'MK-Mall24',
        url: '',
        icon: 'mk-mall.png',
        priority: 4,
        cat: 4,
        test_regexp: /mall24/
    },
    'My eShop': {
        fullname: 'My eShop',
        url: '',
        icon: 'my-eshop.png',
        priority: 4,
        cat: 4,
        test_regexp: /my-eshop/
    },    
    'Store Systems': {
        fullname: 'Store Systems',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /store-systems/
    },    
    'Superstore': {
        fullname: 'Superstore',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /ingrammicro/
    },
    'Truition': {
        fullname: 'Truition',
        url: '',
        icon: 'truition.png',
        priority: 4,
        cat: 4,
        test_regexp: /truition/
    },
    'Vione': {
        fullname: 'Vione',
        url: '',
        icon: 'vione.png',
        priority: 4,
        cat: 4,
        test_regexp: /vioneshop/
    },    
    'XonSoft': {
        fullname: 'XonSoft',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4,
        test_regexp: /xonsoft/
    },
    'yanis 42': {
        fullname: 'yanis 42',
        url: '',
        icon: '_placeholder.ico',
        priority: 4,
        cat: 4
    },
    'AFS Shop': {
        fullname: 'AFS Shop',
        url: '',
        icon: 'afs.png',
        priority: 4,
        cat: 4
    },

    // ==== other shopping cart solutions ====
    'Abacus': {
        fullname: 'Abacus',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /exactabacus/i
    },
    'Actinic': {
        fullname: 'Actinic',
        url: '',
        title: 'Sellerdeck',
        priority: 3,
        cat: 3,
        test_regexp: /actinic|sellerdeck/i
    },
    'Bigcommerce': {
        fullname: 'Bigcommerce',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /cdn\d+\.bigcommerce\.com/i
    },
    'Bigware': {
        fullname: 'Bigware',
        url: '',
        priority: 3,
        cat: 3,
        test_regexp: /bigware/i
    },
    'Cactushop': {
        fullname: 'Cactushop',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /cactushop/i      
    },
    'CCV-Shop': {
        fullname: 'CCV-Shop',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /CCVShop/
    },
    'CS Cart': {
        fullname: 'CS Cart',
        url: '',
        icon: 'CSCart.ico',
        priority: 3,
        cat: 3,
        test_regexp: /CS-Cart\s-\sShopping\sCart\sSoftware/i
    },
    'commerceseo': {
        fullname: 'commerceseo',
        url: '',
        icon: 'commerceseo.ico',
        title: 'commerce:SEO',
        priority: 3,
        cat: 3,
        test_meta_generator: /commerce:SEO|commerce:seo\sv3/i
    },
    'CouchCommerce': {
        fullname: 'CouchCommerce',
        url: '',
        icon: '_placeholder.ico',
        title: '',
        priority: 3,
        cat: 3,
        test_regexp: /ng-app="CouchCommerceApp"/i
    },
    'Cubecart': {
        fullname: 'Cubecart',
        url: '',
        icon: 'CubeCart.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /cubecart/i,
        test_regexp: /(Powered by <a href=.http:\/\/www\.cubecart\.com|<p[^>]+>Powered by CubeCart)/i
    },
    'dashCommerce': {
        fullname: 'dashCommerce',
        url: '',
        icon: 'dashCommerce.ico',
        priority: 3,
        cat: 3,
        test_regexp: /(name\="\_\_EVENTTARGET" id\="\_\_EVENTTARGET")^(logicbase)/i
    },
    'Demandware': {
        fullname: 'Demandware',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /<[^>]+demandware.static/
    },
    'DrupalCommerce': {
        fullname: 'DrupalCommerce',
        url: '',
        icon: 'DrupalCommerce.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /drupal\s*(.*)/i,
        test_regexp: /id\=\"block\-commerce\-cart\-cart|class\=\"commerce\-product\-field/i
    },
    'ekmPowershop': {
        fullname: 'ekmPowershop',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /\/ekmps\//i
    },
    'eSellerPro': {
        fullname: 'eSellerPro',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /esellerpro/i
    },
    'facebookshop': {
        fullname: 'facebookshop',
        title: 'Facebook Shop',
        icon: 'facebook.ico',
        url: '',
        priority: 3,
        cat: 3, 
        test_url: /facebook\.com/i
    },
    'Firepages': {
        fullname: 'Firepages',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /firepages/i
    },
    'Hybris': {
        fullname: 'Hybris',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /\/sys_master\/|\/hybr\//
    },
    'LiquidShop': {
        fullname: 'LiquidShop',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /liquidshop/i
    },
    'MiCommerce': {
        fullname: 'MiCommerce',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /miBaseURL/i
    },
    'nopCommerce': {
        fullname: 'nopCommerce',
        url: '',
        icon: 'nopCommerce.ico',
        priority: 3,
        cat: 3,
        test_regexp: /(<!\-\-Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)|CoreVision.nopcommerce.Theme/i
    },
    'Opencart': {
        fullname: 'Opencart',
        url: '',
        icon: 'OpenCart.ico',
        priority: 3,
        cat: 3,
        /*
        'Opencart': /[Bb]y\sOpenCart/&&/[Ff]or\sOpenCart/&&/OpenCart/i,
        'OpenCart': /opencart\.com/&&/index\.php\?route=[*]/,
        'Opencart': /catalog\/view\/theme/,
        'OpenCart': /(Powered By <a href=("|')[^>]+OpenCart|route = getURLVar\(("|')route)/i,        
        */
        test_regexp: (/[Bb]y\sOpenCart/&&/[Ff]or\sOpenCart/&&/OpenCart/i) || (/opencart\.com/&&/index\.php\?route=[*]/) || (/catalog\/view\/theme/) || (/(Powered By <a href=("|')[^>]+OpenCart|route = getURLVar\(("|')route)/i),
        test_scripttag: /catalog\/view\/javascript\/common.js/        
    },
    'OpenCart-Version': {
        fullname: 'OpenCart-Version',
        url: '',
        icon: 'OpenCart.ico',
        priority: 3,
        cat: 3
    },
    'OpenCart-Journal-Version': {
        fullname: 'OpenCart-Journal-Version',
        url: '',
        icon: 'OpenCart.ico',
        priority: 3,
        cat: 3,
        test_version: function()
        {
            vers  = doc.getElementsByTagName("html")[0].getAttribute("data-jv");            
            if (vers  !== undefined )
            {
                return vers ;
            }
            return "";
        }
    },
    'OpenCart-Journal2': {
        fullname: 'OpenCart-Journal2',
        url: '',
        icon: 'OpenCart.ico',
        priority: 3,
        cat: 3,
        test_version: function()
        {
            vers  = doc.getElementsByTagName("html")[0].getAttribute("data-j2v");
            if( vers  !== undefined )
            {
                return vers ;
            }
            return "";
        }
    },
    'OpenCart-Journal3': {
        fullname: 'OpenCart-Journal3',
        url: '',
        icon: 'OpenCart.ico',
        priority: 3,
        cat: 3
    },
    'osCommerce': {
        fullname: 'osCommerce',
        url: '',
        icon: 'osCommerce.ico',
        priority: 3,
        cat: 3,
        test_regexp: /(<a[^>]*osCsid)/i
    },
    'osCSS': {
        fullname: 'osCSS',
        url: '',
        icon: 'oscss.png',
        priority: 3,
        cat: 3,
        test_regexp: /<body onload=("|')window\.defaultStatus='oscss templates';("|')/i
    },
    'Oxatis': {
        fullname: 'Oxatis',
        title: 'Oxatis (Actinic)',
        icon: 'oxatis.ico',
        url: '',
        priority: 3,
        cat: 3,
        test_meta_generator: /oxatis/,
        test_meta_author: /oxatis/
    },
    'Pace Retail': {
        fullname: 'Pace Retail',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /Pace\sRetail/i
    },
    'QuickCart': {
        fullname: 'QuickCart',
        url: '',
        icon: 'QuickCart.ico',
        priority: 3,
        cat: 3,
        test_regexp: /<a href="[^>]+opensolution\.org\/">Powered by/i
    },
    'RBS_change': {
        fullname: 'RBS_change',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /RBS Change/i
    },
    'Redback': {
        fullname: 'Redback',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /redback|adeo\s*group/i
    },
    'ReadyPro': {
        fullname: 'ReadyPro',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /\/ReadySkins\//i
    },
    'Shop-Application': {
        fullname: 'Shop-Application',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /(whost[1-9]*\.fr)|shop-application\.com/i,
        test_script: function()
        {
            return window.formulaire_dynamique_check !== null;
        }
    },
    'Shopify': {
        fullname: 'Shopify',
        url: '',
        icon: 'Shopify.ico',
        priority: 3,
        cat: 3,
        test_regexp: /cdn\.shopify\.com|[sS]hopify\.[cC]heckout/
    },
    'Simplecommerce': {
        fullname: 'Simplecommerce',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /powered\sby\ssimplecommerce/
    },
    'TomatoCart': {
        fullname: 'TomatoCart',
        url: '',
        icon: 'TomatoCart.ico',
        priority: 3,
        cat: 3,
        test_regexp: /<meta name=("|')generator("|') [^>]+TomatoCart/i,
        test_script: function()
        {
            return window.Tomato != null;
        }
    },
    'Ubercart': {
        fullname: 'Ubercart',
        url: '',
        icon: 'Ubercart.ico',
        priority: 3,
        cat: 3,
        test_regexp: /<script[^>]* src=("|')[^>]*uc_cart\/uc_cart_block\.js/i,
        test_scripttag: /uc_cart/i
    },
    'Visualsoft': {
        fullname: 'Visualsoft',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /visualsoft/
    },
    'Websphere': {
        fullname: 'Websphere',
        url: '',
        icon: 'websphere.png',
        priority: 3,
        cat: 3,
        test_regexp: /wcsstore/i
    },
    'X-Cart': {
        fullname: 'X-Cart',
        url: '',
        icon: 'X-Cart.png',
        priority: 3,
        cat: 3,
        test_meta_generator: /X-Cart\s*(.*)/i,
        test_regexp: /\s+xcart/
    },
    'Zen_Cart': {
        fullname: 'Zen_Cart',
        url: '',
        icon: 'zencart.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /zen-cart/i,
        test_regexp: /zenid/i
    },
    'Wellcommerce-Plugin': {
        fullname: 'Wellcommerce-Plugin',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /themes\/wellcommerce/
    },
    'Woocommerce': {
        fullname: 'Woocommerce',
        url: '',
        icon: 'woocommerce.png',
        priority: 3,
        cat: 8,
        test_meta_generator: /WooCommerce\s*(.*)/,
        test_regexp: /plugins\/woocommerce|woocommerce-pagination/
    },
    'Contao': {
        fullname: 'Contao',
        url: '',
        icon: 'contao.ico',
        priority: 3,
        cat: 3,
        test_meta_generator: /Contao Open Source CMS/
    },
    'cactushop': {
        fullname: 'cactushop',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3
    },
    'Joomshopping': {
        fullname: 'Joomshopping',
        url: '',
        icon: 'joomshopping.png',
        priority: 3,
        cat: 3,
        test_regexp: /com_jshopping/
    },
    'Actebis': {
        fullname: 'Actebis',
        url: '',
        icon: '_placeholder.ico',
        priority: 3,
        cat: 3,
        test_regexp: /actebis/
    },
    'T-Online': {
        fullname: 'T-Online',
        url: '',
        icon: 'T-Online,png',
        priority: 3,
        cat: 3,
        test_url: /eshop\.t-online/,
        test_scripttag: /TOnline\/lib-min\/package-sf.js/
    },
    'Mallux': {
        fullname: 'Mallux',
        url: '',
        icon: 'mallux.ico',
        priority: 4,
        cat: 4,
        test_regexp: /mallux\/mallux|www.mallux.de/g
    },
    // ==== CMS ====
    'Drupal': {
        fullname: 'Drupal',
        url: '',
        icon: 'Drupal.ico',
        priority: 2,
        cat: 1,
        test_regexp: /(<script [^>]+drupal\.js|jQuery\.extend\(Drupal\.settings, \{|Drupal\.extend\(\{ settings: \{|<link[^>]+sites\/(default|all)\/themes\/|<style[^>]+sites\/(default|all)\/(themes|modules)\/)/i,
        test_script: function() 
        {
            return window.Drupal !== null;
        }
    },
    'Shoplo': {
        fullname: 'Shoplo',
        url: '',
        icon: 'shoplo.png',
        priority: 3,
        cat: 3,
        test_regexp: /cdn.shoplo.com/i
    },
    'eZ Publish': {
        fullname: 'eZ Publish',
        url: '',
        icon: 'eZPublish.ico',
        priority: 2,
        cat: 1,
        test_meta_generator: /eZ\s*Publish/i,
        test_regexp: /<meta name=("|')generator("|') [^>]+eZ Publish/i
    },
    'Joomla': {
        fullname: 'Joomla',
        url: '',
        icon: 'Joomla.ico',
        priority: 2,
        cat: 1,
        test_meta_generator: /joomla!?\s*([\d\.]+)?/i,
        test_scripttag: /\/components\/com_/
    },
    'TYPO3': {
        fullname: 'TYPO3',
        url: '',
        icon: 'TYPO3.ico',
        title: 'Typo3',
        priority: 2,
        cat: 1,
        test_meta_generator: /TYPO3/i,
        test_regexp: /(<meta name=("|')generator("|') [^>]+TYPO3|<(script[^>]* src|link[^>]* href)=[^>]*fileadmin)/i
    },
    'WordPress': {
        fullname: 'WordPress',
        url: '',
        icon: 'wordpress.png',
        priority: 2,
        cat: 1,
        test_meta_generator: /WordPress\s*(.*)/i,
        test_regexp: /(<link rel=("|')stylesheet("|') [^>]+wp-content|includes)|((<link rel=("|')stylesheet("|') [^>]+wp-content|<meta name=("|')generator("|') [^>]+WordPress))/i
    },
    'Wix': {
        fullname: 'Wix',
        url: '',
        icon: '_placeholder.ico',
        priority: 2,
        cat: 1,
        test_regexp: /[Ww]ix\.com/
    },
    'Jigoshop': {
        fullname: 'Jigoshop',
        url: '',
        icon: '_placeholder.ico',
        priority: 2,
        cat: 1,
        test_regexp: /plugins\/jigoshop-ecommerce/
    },
    'Shopp': {
        fullname: 'Shopp',
        url: '',
        icon: '_placeholder.ico',
        priority: 2,
        cat: 1,
        test_regexp: /wp-content\/themes\/shopplugin/
    },
    'WPML': {
        fullname: 'WPML',
        url: '',
        icon: 'wpml.png',
        priority: 2,
        cat: 8,
        test_meta_generator: /wpml\s*(.*)/i,
        test_regexp: /wpml-/
    },
    'HESCOM-Shop': {
        fullname: 'HESCOM-Shop',
        url: '',
        icon: 'hescom.ico',
        priority: 3,
        cat: 3,
        test_regexp: /HESCOM\sWeb\sFramework|HESCOM-Software|www.hescomshop.de|www.hescom.de|HescomShop/mg
    },
    'NewCart': {
        fullname: 'NewCart',
        url: '',
        icon: 'newcart.ico',
        priority: 2,
        cat: 1,
        test_regexp: /w{3}.newcart.[a-zA-z]+\/.[a-zA-z]+\//i
    },
    'Piconda': {
        fullname: 'Piconda',
        url: '',
        icon: 'piconda.png',
        priority: 2,
        cat: 8,
        test_meta_generator: /piconda\scluster\s*(.*)/i
    },
    'IONOS': {
        fullname: 'IONOS',
        url: '',
        icon: 'ionos.png',
        priority: 5,
        cat: 1,
        test_regexp: /ionos-logo&ionos-brand|"(?:http(s)?:\/\/)w{3}.ionos.[a-zA-Z]+.websites.homepage.[a-zA-Z]+"/
    },


    // ==== misc ====
    '': { // default
        fullname: 'unknown',
        icon: 'unknown.jpg',
        url: 'http://google.com/search?q=%s',
        priority: 5,
        cat: 1
    }
    
};
