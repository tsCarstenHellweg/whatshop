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
var bg = chrome.extension.getBackgroundPage();

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

		var appinfo = bg.appinfo;
		var count = 0;

		function CookieApps() {
			this._apps = {};

			this.init = function(apps) {
				if (Object.keys(apps).length > 0) {
					this._apps = apps;
				}
			}

			this.reset = function() {
				this._apps = {};
			}

			this.add = function(app) {
				if (!this._apps[app]) {
					this._apps[app] = -1;
				}
			};

			this.getAll = function() {
				return this._apps;
			};
		};



		//do additional Cookie-Check:
		chrome.cookies.getAll({}, function(cookies) {
			var cookie_tests = {
				//'4Stats': /4stats\.de/,
				//'77tracking': /77tsession|77tvisitor/,
				//'Addthis Track': /__atuvc/,
				//'Adition': /adfarm[0-9]*\.adition/,
				//'Adform': /adform\./,
				//'AdNexus': /adnxs\.com/,
				//'Adscale' : /adscale/i,
				//'Alexa Analytics': /_asc|_auc/,
				//'AtlasSolution': /atdmt\./,
				//'Criteo' : /criteo/i,
				// 'Doubleclick':/doubleclick/i,
				// 'Econda':/emos-(session|visitor)/i,
				// 'Eloqua':/ELOQUA/,
				// 'eTracker':/et_id/i,
				// 'eXelate':/exelator\.com|xudx/,
				// 'ImproveDigital': /ad\.360yield\.com/i,
				// 'Intelliad': /intelliad/i,
				// 'motigo': /w4u_/i,
				// 'Omniture': /omnituremarketing\./i,
				// 'owa': /owa_/i,
				// 'Quisma' : /qservz\.com/i,
				// 'Refinedads' : /refinedads/i,
				// 'Stats4Free': /stats4free\.de/,
				// 'Webmasterplan' : /webmasterplan/i,
				// 'Webtrekk' : /wtsid|wt3_[a-z]+/i,
				// 'Webtrends' : /webtrends(live){0,1}\./i,
				// 'Zanox' : /zanox/i

			};
			var CA = new CookieApps();
			CA.init(apps);

			for (var i in cookies) {
				for (t in cookie_tests) {
					if (cookie_tests[t].test(cookies[i].name) || cookie_tests[t].test(cookies[i].value) || cookie_tests[t].test(cookies[i].domain)) {
						CA.add(t);
					} else {

					}
				}
				/*
				//DEBUG: Print out all Cookies
				var span = document.createElement('span');
				var br = document.createElement('br');


				span.innerText = cookies[i].name;
				span.title = cookies[i].value;
				display.appendChild(span);
				display.appendChild(br);
				*/
			}

			for (var appid in apps)
			{
				app = appinfo[appid] ? appinfo[appid] : {};

				cat = cats[app.cat].name;
				if (!app.title) app.title = appid;
				if (!app.url) app.url = appinfo[''].url.replace('%s',appid); // it's google one
				if (!app.icon) app.icon = appid + '.ico';

				if( apps[appid] != "-1")
				{
					app.title = appid + ' ' + apps[appid]
					//apps[appid].info????????
				}

				// use DOM to avoid error
				var link = document.createElement('a');
				var icon = document.createElement('img');
				var span1 = document.createElement('span');
				var span2 = document.createElement('span');
				var br = document.createElement('br');

				link.target = "_blank";
				link.title = app.title;
				link.href = app.url;

				icon.alt = app.title;
				icon.width = 16;
				icon.height = 16;
				icon.src = "apps/" + app.icon;

				span1.innerText = app.title;

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
});
//};
