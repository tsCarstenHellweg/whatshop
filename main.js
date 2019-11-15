/**
 * Chrome Whatshop
 *
 * Detect shopping cart solution and tools concerning privacy run on current page and send back to background page.
 * Some part of this script was referred from Wappalyzer (Firefox) and AppSniffer.
 *
 * @author Eberhard Burck <ebbudev@gmail.com>
 * @author Laila Abazzouh <laba.ext+whatshop@gmail.com>
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

(function(){
    var head = document.getElementsByTagName('head')[0];

    if (head) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = chrome.extension.getURL('allShops.js');
        head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = chrome.extension.getURL('allTests.js');
        head.appendChild(script);

        var meta = document.createElement('meta');
        meta.name = 'whatshop';
        meta.id = 'whatshop_meta';
        head.appendChild(meta);                		
    }

    meta.addEventListener('ready', function(){
        if (meta) {
                var apps = JSON.parse(meta.content)

                if (Object.keys(apps).length > 0) {
                        //alert(Object.keys(apps).length);
                        chrome.extension.sendRequest({msg: "result", apps: apps});
                }
        }
    });
})();
