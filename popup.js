console.log( "javascript from popup.html called" );

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: "huhu"}, function(response) {        
        
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

        var apps = response.data;
        console.log( apps );
        var html = '';

//        var appinfo = bg.appinfo;
        var count = 0;

        
        var display = document.createElement( 'div' );
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
        document.getElementById( "app_list" ).appendChild( display );
    });        
});

