function regExpHelper( regExp, text )
{
    return regExp.test( text );
}

function runAllTests()
{
    // ---------- all used variables ---------------------    
    var doc = document.documentElement;   // use this instead of document.
    var url = doc.URL;
    var vers;
    
    var metaGenerator = "";
    var metaAuthor    = "";        
    var metas         = doc.getElementsByTagName("meta");
    for( var id in metas )
    {
        var meta = metas[ id ];
        if( meta.name === "generator" )
        {
            metaGenerator = meta;
        }
        if( meta.name === "author" )
        {
            metaAuthor = meta;
        }
//        console.log( meta );
    }
    var text    = document.documentElement.outerHTML;
    var scripts = doc.getElementsByTagName("script");
    
      
    var appinfo = ts_whatshop_getAllShops();
    // -------------- the tests ----------------------------------------------------
    for( var shopname in appinfo )
    {
        var shop = appinfo[ shopname ];
        var notFound = true;
        
        // document.writeln( shopname );
        
        if( shop.test_url !== undefined )
        {
            // document.writeln( " test_url set" );
            if( regExpHelper( shop.test_url, url ) )
            {
                notFound = false;
            }
        }        
        if( notFound && ( shop.test_meta_generator !== undefined ) )
        {
            // document.writeln( " test_meta_generator set" );
            if( regExpHelper( shop.test_meta_generator, metaGenerator ) )
            {
                notFound = false;
            }
        }
        if( notFound && ( shop.test_meta_author !== undefined ) )
        {
            // document.writeln( " test_meta_author set" );
            if( regExpHelper( shop.test_meta_author, metaAuthor ) )
            {
                notFound = false;
            }
        }                
        if( notFound && ( shop.test_scripttag !== undefined ) )
        {
            // document.writeln( " test_scripttag set" );
            for( jsScript in scripts )
            {
                if( jsScript.src )
                {
                    if( regExpHelper( shop.test_scripttag, text ) )
                    {
                        notFound = false;
                    }
                }
            }
        }
        if( shop.test_version !== undefined )
        {
            var vers = shop.test_version();
            shop.fullname += " " + vers;
        }
        if( notFound && ( shop.test_script !== undefined ) )
        {
            // document.writeln( " test_regexp set" );
            if( shop.test_script() )
            {
                notFound = false;
            }
        }
        if( notFound && ( shop.test_regexp !== undefined ) )
        {
            // document.writeln( " test_regexp set" );
            if( regExpHelper( shop.test_regexp, text ) )
            {
                notFound = false;
            }
        }

        if( ! notFound )
        {
            // add the version to the name
            if( shop.test_version !== undefined )
            {
                var vers = shop.test_version();
                shop.fullname += " " + vers;
            }
            // create a lighter copy of the shop-item and add that to the found list.
            var temp = {};
            temp.fullname = shop.fullname;
            temp.url      = shop.url;
            temp.icon     = shop.icon;
            temp.priority = shop.priority;
            temp.cat      = shop.cat;

            _apps[ shopname ] = temp;            
        }
    }
        
    // dirty: kill doublets
    if( _apps[ 'Magento_MRG' ]                    !== undefined ) delete _apps[ 'Magento' ];
    if( _apps[ 'TS-Checkout-DIV + Produktdaten' ] !== undefined ) delete _apps[ 'TS-Checkout-DIV' ];
    if( _apps[ 'Trustcard - DIV' ]                !== undefined ) delete _apps[ 'Trustcard via TB' ];
    if( _apps[ 'T-Online' ]                       !== undefined ) delete _apps[ 'epages' ];
    if( _apps[ 'OpenCart' ]                       !== undefined ) delete _apps[ 'Opencart' ];
    if( _apps[/OpenCart-Journal2/]                !== undefined ) delete _apps[ 'Opencart' ];
    if( _apps[/OpenCart-Journal2/]                !== undefined ) delete _apps[ 'OpenCart' ];
    if( _apps[/OpenCart-Version/]                 !== undefined ) delete _apps[/Opencart/];
    if( _apps[/OpenCart-Version/]                 !== undefined ) delete _apps[/OpenCart/];
    if( _apps[/OpenCart-Version/] == /\s*(.*)/ )                  delete _apps[/Opencart/];
    if( _apps[ 'OpenCart-Journal-Version' ]       !== undefined ) delete _apps[/OpenCart-Journal2/];
    if( _apps[ 'OpenCart-Journal-Version' ]       !== undefined ) delete _apps[/OpenCart-Journal3/];
    if( _apps[ 'Smartstore-Image' ]               !== undefined ) delete _apps[ 'Smartstore' ];
    if( _apps[ 'Smartstore-Image' ]               !== undefined ) delete _apps[ 'Smartstore-Image' ];                
}


var _apps = {};
var url = document.URL;
var url_test = {
    'NA': /google\./i
};
if( ! ( url_test['NA'].test( url ) ) )
{
    runAllTests();
}
//send immediately back to background page for performance reason
var jsonString = JSON.stringify(_apps);
//alert(jsonString);
var meta = document.getElementById('whatshop_meta');
meta.content = jsonString;

//Notify Background Page
var done = document.createEvent('Event');
done.initEvent('ready', true, true);
meta.dispatchEvent(done);