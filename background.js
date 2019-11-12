if (document.createElement && (wsmeta = document.createElement('meta'))) {
	// set properties
	wsmeta.name = "whatshop";
	wsmeta.id = "whatshop_meta";
	document.getElementsByTagName('head').item(0).appendChild(wsmeta);
}


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

var appinfo = {
	//===TS-Integrationstypen===

	'Trustbadge ohne Variante':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Reviews':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Custom':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Custom Reviews':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Default':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},

	'Trustedshops - Shopify Plugin':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},

	'Trustcard via TB':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustcard - DIV':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'TS-Checkout-DIV': {
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'TS-Checkout-DIV + Produktdaten': {
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Text':{
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Small':{
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Responsive Trustbadge (floating)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Responsive Trustbadge (floating_reviews)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Responsive Trustbadge (default)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Responsive Trustbadge (custom)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge (disabled via Script)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge (responsive TB disabled)': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Trustbadge - Skript eingebunden': {
		url:'',
		icon:'logo.png',
		priority: 1,
		cat: 0
	},
	'Review Sticker ohne Variante':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Review Sticker - skyscraper_vertical':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Review Sticker - skyscraper_horizontal':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Review Sticker - vertical':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'TEST':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},'TS-Widget':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},'Testimonial':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Product Review Sticker':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'StarSummary':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},

	'Alter Käuferschutz':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Verlinkung auf TS-Profil':{
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'TS-Widget': {
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
	'Exit Intent Popup': {
		url: '',
		icon: 'logo.png',
		priority: 1,
		cat: 0
	},
/* *********************TRUSTEDSHOPS-Rich Snippets******************************** */
		'Shop-SEO-Stars - Organization-Snippet (JSON-LD)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - LocalBusiness-Snippet (JSON-LD)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - Organization-Snippet (RDFa)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - LocalBusiness-Snippet (RDFa)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - Organization-Snippet (microdata)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - AggregateRating-Snippet (microdata)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - LocalBusiness-Snippet (RDFa)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Shop-SEO-Stars - Organization-Snippet (RDFa)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Product-SEO-Stars - via Sticker (JSON-LD)': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
		'Rich Snippets via Sticker': {
			url: '',
			icon: 'logo.png',
			priority: 1,
			cat: 0
		},
	// ===shopping carts who are partner of Trusted Shops ===
	'4Sellers': {
		url: '',
		icon: '4sellers.ico',
		priority: 4,
		cat: 4
	},
	'EINSUNDEINS': {
		url: '',
		icon: 'EINSUNDEINS.ico',
		priority: 4,
		cat: 4
	},
	'ABAS': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Aconon': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//actebis
	//afs shop
	'Afterbuy': {
		url: '',
		icon: 'afterbuy.ico',
		priority: 4,
		cat: 4
	},
	//amensasu
	'Applicas':{
		icon: 'Applicas.png',
		url: '',
		priority: 4,
		cat: 4
	},
	'APT': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//ascara
	//b.com
	'Cosmoshop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'CP-Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//cybershop
	//dr webshop

	'DataBecker': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Siquando': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'DTELEKOM': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//emajine
	//e-shops
	//easy-y
	'Ecomas': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Electronicsales': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'epages': {
		url: '',
		icon: 'epages.png',
		priority: 4,
		cat: 4
	},
	'epages now': {
		url: '',
		icon: 'epages.png',
		priority: 4,
		cat: 4
	},
	//erp
	//es:shop
	'Gambio': {
		url: '',
		icon: 'Gambio.ico',
		priority: 4,
		cat: 4
	},
	//Geos Shop,GS Shop Builder,GS-Shop
	'Gsshopbuilder': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//hood
	'Hotdigital': {
		url: '',
		icon: 'hotdigital.ico',
		priority: 4,
		cat: 4
	},
	'JIMDO': {
		url: '',
		icon: 'jimdo.png',
		priority: 4,
		cat: 4
	},
	'IAI': {
		url: '',
		icon: 'iai.png',
		priority: 4,
		cat: 4
	},
	'Intershop': {
		url: '',
		icon: 'intershop.png',
		priority: 4,
		cat: 4
	},
	'i-sklep': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'I-ways': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'JTL': {
		url: '',
		icon: 'JTL.ico',
		priority: 4,
		cat: 4
	},
	'Lightspeed': {
	    icon: 'Lightspeed.svg',
		url: '',
		priority: 4,
		cat: 4
	},
	'Mauve': {
		url: '',
		title: 'Mauve Mailorder',
		priority: 4,
		cat: 4
	},
	'Magento': {
		url: '',
		icon: 'Magento.ico',
		priority: 4,
		cat: 4
	},
	'Magento_MRG': {
		url: '',
		icon: 'Magento_MRG.ico',
		priority: 4,
		cat: 4
	},
	'MondoShop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'MUV': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'OMECO': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'OXID_ESALES': {
		url: '',
		icon: 'OXID_ESALES.ico',
		priority: 4,
		cat: 4
	},
	'PhPepperShop': {
		url: '',
		icon: 'PhPepperShop.ico',
		priority: 4,
		cat: 4
	},
	'Plentymarkets': {
		url: '',
		icon: 'Plentymarkets.ico',
		priority: 4,
		cat: 4
	},
	'Plentymarkets_v6': {
		url: '',
		icon: 'Plentymarkets.ico',
		priority: 4,
		cat: 4
	},
	'Powerboutique': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Powergap': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Presta': {
		url: '',
		icon: 'prestashop.png',
		title: 'PrestaShop',
		priority: 4,
		cat: 4
	},
	'Rakuten': {
		url: '',
		icon: 'Rakuten.png',
		priority: 4,
		cat: 4
	},
	'RedCart': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'SEOshop': {
	    icon: 'Seoshop.ico',
		url: '',
		priority: 4,
		cat: 4
	},
	'Shoper': {
		url: '',
		icon: 'shoper.ico',
		priority: 4,
		cat: 4
	},
	'Shopware': {
		url: '',
		icon: 'shopware.ico',
		priority: 4,
		cat: 4
	},
	'Smartstore': {
		url: '',
		icon: 'Smartstore.ico',
		priority: 4,
		cat: 4
	},

	'Smartstore-Image': {
		url: '',
		icon: 'Smartstore.ico',
		priority: 4,
		cat: 4
	},
	'Strato': {
		url: '',
		icon: 'strato.ico',
		priority: 4,
		cat: 4
	},
	'Sote': {
		url: '',
		icon: 'sote.ico',
		priority: 4,
		cat: 4
	},
	'Tradoro': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'Venda': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	'VirtueMart': {
		url: '',
		icon: 'VirtueMart.ico',
		priority: 4,
		cat: 4
	},
	'Websale': {
		url: '',
		icon: 'Websale.ico',
		priority: 4,
		cat: 4
	},
	'XTC_3': {
		url: '',
		icon: 'XTC_3.ico',
		priority: 4,
		cat: 4
	},
	'XTC_Veyton': {
		url: '',
		icon: 'XTC_Veyton.ico',
		priority: 4,
		cat: 4
	},
	'xtcModified': {
		url: '',
		icon: 'modified.png',
		priority: 4,
		cat: 4
	},
	'Xanario': {
		url: '',
		icon: 'Xanario.ico',
		priority: 4,
		cat: 4
	},
	'Xonic': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
	//Partner aktualisiert
	/*'AFS Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},*/
		//'Applicas': {url: '', icon: '_placeholder.ico', priority: 4, cat: 4},
		'Geos Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'MK-Mall24': {
		url: '',
		icon: 'mk-mall.png',
		priority: 4,
		cat: 4
	},
		'My eShop': {
		url: '',
		icon: 'my-eshop.png',
		priority: 4,
		cat: 4
	},
		//'Prestashop Germanext': {url: '', icon: '_placeholder.ico', priority: 4, cat: 4},
		'Store Systems': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		//'Strait Shop': {url: '', icon: '_placeholder.ico', priority: 4, cat: 4},
		'Superstore': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'Truition': {
		url: '',
		icon: 'truition.png',
		priority: 4,
		cat: 4
	},
		'Vione': {
		url: '',
		icon: 'vione.png',
		priority: 4,
		cat: 4
	},
		//'Web Business Shop': {url: '', icon: '_placeholder.ico', priority: 4, cat: 4},
		'XonSoft': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'yanis 42': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'AFS Shop': {
		url: '',
		icon: 'afs.png',
		priority: 4,
		cat: 4
	},
		'Geos Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'MK-Mall24': {
		url: '',
		icon: 'mk-mall.png',
		priority: 4,
		cat: 4
	},
		'My eShop': {
		url: '',
		icon: 'my-eshop.png',
		priority: 4,
		cat: 4
	},
		'Store Systems': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		/*'Strait Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},*/
		'Superstore': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},
		'Truition': {
		url: '',
		icon: 'truition.png',
		priority: 4,
		cat: 4
	},
		'Vione': {
		url: '',
		icon: 'vione.png',
		priority: 4,
		cat: 4
	},
		/*'Web Business Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},*/
		'XonSoft': {
		url: '',
		icon: '_placeholder.ico',
		priority: 4,
		cat: 4
	},


	// ==== other shopping cart solutions ====
	'Abacus': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Actinic': {
		url: '',
		title: 'Sellerdeck',
		priority: 3,
		cat: 3
	},
	'Bigcommerce': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Bigware': {
		url: '',
		priority: 3,
		cat: 3
	},
	'Cactushop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'CCV-Shop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'CS Cart': {
		url: '',
		icon: 'CSCart.ico',
		priority: 3,
		cat: 3
	},
	'commerceseo': {
		url: '',
		icon: 'commerceseo.ico',
		title: 'commerce:SEO',
		priority: 3,
		cat: 3
	},
	'CouchCommerce': {
		url: '',
		icon: '_placeholder.ico',
		title: '',
		priority: 3,
		cat: 3
	},
	'Cubecart': {
		url: '',
		icon: 'CubeCart.ico',
		priority: 3,
		cat: 3
	},
	'dashCommerce': {
		url: '',
		icon: 'dashCommerce.ico',
		priority: 3,
		cat: 3
	},

	'Demandware': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'DrupalCommerce': {
		url: '',
		icon: 'DrupalCommerce.ico',
		priority: 3,
		cat: 3
	},
	'ekmPowershop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'eSellerPro': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'facebookshop': {
		title: 'Facebook Shop',
		icon: 'facebook.ico',
		url: '',
		priority: 3,
		cat: 3
	},
	'Firepages': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Hybris': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'LiquidShop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'MiCommerce': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'nopCommerce': {
		url: '',
		icon: 'nopCommerce.ico',
		priority: 3,
		cat: 3
	},
	'Opencart': {
		url: '',
		icon: '_placeholder.ico',
		icon: 'OpenCart.ico',
		priority: 3,
		cat: 3
	},
	'OpenCart-Version': {
		url: '',
		icon: '_placeholder.ico',
		icon: 'OpenCart.ico',
		priority: 3,
		cat: 3
	},
		'OpenCart-Journal-Version': {
			url: '',
			icon: '_placeholder.ico',
			icon: 'OpenCart.ico',
			priority: 3,
			cat: 3
		},
	'OpenCart-Journal2': {
		url: '',
		icon: '_placeholder.ico',
		icon: 'OpenCart.ico',
		priority: 3,
		cat: 3
	},
	'OpenCart-Journal3': {
		url: '',
		icon: '_placeholder.ico',
		icon: 'OpenCart.ico',
		priority: 3,
		cat: 3
	},
	'osCommerce': {
		url: '',
		icon: 'osCommerce.ico',
		priority: 3,
		cat: 3
	},
	'osCSS': {
		url: '',
		icon: 'oscss.png',
		priority: 3,
		cat: 3
	},
	'Oxatis': {
		title: 'Oxatis (Actinic)',
		icon: 'oxatis.ico',
		url: '',
		priority: 3,
		cat: 3
	},
	'Pace Retail': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'QuickCart': {
		url: '',
		icon: 'QuickCart.ico',
		priority: 3,
		cat: 3
	},
	'RBS_change': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Redback': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'ReadyPro': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Shop-Application': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Shopify': {
		url: '',
		icon: 'Shopify.ico',
		priority: 3,
		cat: 3
	},
	'Simplecommerce': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'TomatoCart': {
		url: '',
		icon: 'TomatoCart.ico',
		priority: 3,
		cat: 3
	},
	'Ubercart': {
		url: '',
		icon: 'Ubercart.ico',
		priority: 3,
		cat: 3
	},
	'Visualsoft': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Websphere': {
		url: '',
		icon: 'websphere.png',
		priority: 3,
		cat: 3
	},
	'X-Cart': {
		url: '',
		icon: 'X-Cart.png',
		priority: 3,
		cat: 3
	},

	'Zen_Cart': {
		url: '',
		icon: 'zencart.ico',
		priority: 3,
		cat: 3
	},
		'Wellcommerce-Plugin': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
	'Woocommerce': {
		url: '',
		icon: 'woocommerce.png',
		priority: 3,
		cat: 8
	},
	'Contao': {
		url: '',
		icon: 'contao.ico',
		priority: 3,
		cat: 3
	},
		'cactushop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
		'Joomshopping': {
		url: '',
		icon: 'joomshopping.png',
		priority: 3,
		cat: 3
	},
		'Actebis': {
		url: '',
		icon: '_placeholder.ico',
		priority: 3,
		cat: 3
	},
		'T-Online': {
		url: '',
		icon: 'T-Online,png',
		priority: 3,
		cat: 3
	},
		'Mallux': {
		url: '',
		icon: 'mallux.ico',
		priority: 4,
		cat: 4
	},

	// ==== CMS ====
	'Drupal': {
		url: '',
		icon: 'Drupal.ico',
		priority: 2,
		cat: 1
	},
	'Shoplo': {
		url: '',
		icon: 'shoplo.png',
		priority: 3,
		cat: 3
	},
	'eZ Publish': {
		url: '',
		icon: 'eZPublish.ico',
		priority: 2,
		cat: 1
	},
	'Joomla': {
		url: '',
		icon: 'Joomla.ico',
		priority: 2,
		cat: 1
	},
	'TYPO3': {
		url: '',
		icon: 'TYPO3.ico',
		title: 'Typo3',
		priority: 2,
		cat: 1
	},
	'WordPress': {
		url: '',
		icon: 'wordpress.png',
		priority: 2,
		cat: 1
	},
	'Wix': {
		url: '',
		icon: '_placeholder.ico',
		priority: 2,
		cat: 1
	},
	'Jigoshop': {
		url: '',
		icon: '_placeholder.ico',
		priority: 2,
		cat: 1
	},
	'Shopp': {
		url: '',
		icon: '_placeholder.ico',
		priority: 2,
		cat: 1
		},
	'WPML': {
		url: '',
		icon: 'wpml.png',
		priority: 2,
		cat: 8
		},
	'HESCOM-Shop': {
		url: '',
		icon: 'hescom.ico',
		priority: 3,
		cat: 3
	},
	'NewCart': {
		url: '',
		icon: 'newcart.ico',
		priority: 2,
		cat: 1
	},
	'Piconda': {
		url: '',
		icon: 'piconda.png',
		priority: 2,
		cat: 8
	},
	'IONOS': {
		url: '',
		icon: 'ionos.png',
		priority: 5,
		cat: 1
		},


	// ==== misc ====
	'': { // default
		icon: 'unknown.jpg',
		url: 'http://google.com/search?q=%s'
	}
};



// end apps


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
