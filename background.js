/**
 * Chrome Whatshop
 *
 * Web tools definition
 * Some part of this script was referred from AppSniffer.
 *
 * @author Eberhard Burck <ebbudev@gmail.com>
 * @author Laila Abazzouh <laba.ext+whatshop@gmail.com>
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

if (document.createElement && (wsmeta = document.createElement('meta'))) {
	// set properties
	wsmeta.name = "whatshop";
	wsmeta.id = "whatshop_meta";
	document.getElementsByTagName('head').item(0).appendChild(wsmeta);
}

window.dd = function(msg)
{
	console.log(msg);
}

var tabinfo = {};

chrome.tabs.onRemoved.addListener(function(tabId)
{
	// free memory
	delete tabinfo[tabId];
});

/*Funk fuer seitausschluss*/


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.msg == 'result') {
            tabinfo[sender.tab.id] = request.apps;

            chrome.pageAction.show(sender.tab.id);
            sendResponse({});
    } else if (request.msg == 'get') {
            var apps = tabinfo[request.tab];

            sendResponse({apps: apps});
    }
});
