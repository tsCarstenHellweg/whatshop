/**
 * Chrome Whatshop
 *
 * Detect shopping cart solution and tools concerning privacy run on current page and send back to background page.
 * Some part of this script was referred from AppSniffer.
 *
 * @author Eberhard Burck <ebbudev@gmail.com>
 * @author Laila Abazzouh <laba.ext+whatshop@gmail.com>
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

//function Whatshop(){
//var bg = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null,function(tab){
    chrome.extension.sendRequest({msg: "get",tab: tab.id}, function(response){
        var display = document.getElementById('app_list');

        var cats = {
            0: { name: 'Trusted Shops' },
            1: { name: 'CMS' },
            2: { name: 'Social Media' },
            3: { name: 'Shop' },
            4: { name: 'Shop (Trusted Shops partner)' },
            5: { name: 'Analytics/Tracking'  },
            7: { name: 'Ads related (Cookie)'  },
            8: { name: 'Plugin'  }
        };

        var apps = response.apps;
        var html = '';

//        var appinfo = bg.appinfo;
        var count = 0;

        

        for (var appid in apps)
        {
            app = apps[ appid ]; 

            cat = cats[app.cat].name;
//            if (!app.title) app.title = appid;
//            if (!app.url) app.url = appinfo[''].url.replace('%s',appid); // it's google one
//            if (!app.icon) app.icon = appid + '.ico';

            // use DOM to avoid error
            var link = document.createElement('a');
            var icon = document.createElement('img');
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            var br = document.createElement('br');

            link.target = "_blank";
            link.title = app.fullname;
            link.href = app.url;

            icon.alt = app.fullname;
            icon.width = 16;
            icon.height = 16;
            icon.src = "apps/" + app.icon;

            span1.innerText = app.fullname;

            var css = document.createAttribute("class");
            css.nodeValue = "category";
            span2.innerText = cat;
            span2.setAttributeNode(css);

            link.appendChild(icon);
            display.appendChild(link);
            display.appendChild(span1);
            display.appendChild(span2);
            display.appendChild(br);

            count++;
        }
    });
});
//};
