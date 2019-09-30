/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","4c550d8bcc0e53038025121b1adf95c1"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","db7cac85c4108fb489df74ed5059cf26"],["/js/0.bfeb899ff5f4099daf0b.js","9287d9d841e7ff0637531367237426bd"],["/js/1.bfeb899ff5f4099daf0b.js","efd6f8dcd4feabaeef5210c948859c92"],["/js/10.bfeb899ff5f4099daf0b.js","ea7a88a6ff86fc5a2fe42b260a5cac88"],["/js/11.bfeb899ff5f4099daf0b.js","96fdc496f7539d51e4ae75dd9bf38945"],["/js/12.bfeb899ff5f4099daf0b.js","bb79876d74a5b4025b1ec57fc64c869b"],["/js/13.bfeb899ff5f4099daf0b.js","20d4b8fa745f5241d70af2bab5f97930"],["/js/14.bfeb899ff5f4099daf0b.js","408ed318fd26c5aa65242cdde4ef7ac3"],["/js/15.bfeb899ff5f4099daf0b.js","579c480b28ff55d37f96c430aa78f999"],["/js/16.bfeb899ff5f4099daf0b.js","c8168857040d06b7038a8032af8e4b16"],["/js/17.bfeb899ff5f4099daf0b.js","6ac2bf2344bb73ea5ce565a3bca51403"],["/js/18.bfeb899ff5f4099daf0b.js","c94a36f0d007dabca4a7e7d1f8b3e58a"],["/js/19.bfeb899ff5f4099daf0b.js","8119d0ffd39cf087b41dfc35993d5e8c"],["/js/2.bfeb899ff5f4099daf0b.js","6186dfcf1d16b3837962c5656504eea2"],["/js/20.bfeb899ff5f4099daf0b.js","0f33bd237f908fec49645fdc2c32b71f"],["/js/21.bfeb899ff5f4099daf0b.js","94abdd36e98391ae2a19ee0e9cc9de8e"],["/js/22.bfeb899ff5f4099daf0b.js","ae7c1a898d75491225a8a70f301a08fe"],["/js/23.bfeb899ff5f4099daf0b.js","be9907c4891bf274dfaa5d39423bf65b"],["/js/24.bfeb899ff5f4099daf0b.js","2eeeedf41848d78cbd83cfba4223330c"],["/js/25.bfeb899ff5f4099daf0b.js","5cf86129a6c0c96f400bb307727651c3"],["/js/26.bfeb899ff5f4099daf0b.js","66be74122cb9ae604be62ca9c90e4f89"],["/js/27.bfeb899ff5f4099daf0b.js","18aea79c5784d62eafbb79ce9917dc5f"],["/js/28.bfeb899ff5f4099daf0b.js","e930ffb32e3837cde09ca23b1772d4b9"],["/js/29.bfeb899ff5f4099daf0b.js","2965683d59845b09b137443cd15b28c6"],["/js/3.bfeb899ff5f4099daf0b.js","29137b9d95478e14cc5356a8c5d0a6c7"],["/js/30.bfeb899ff5f4099daf0b.js","e261d0047bb66d57819b19895248b6cb"],["/js/31.bfeb899ff5f4099daf0b.js","e3cd775bf4cee108ec9398e01e205fe4"],["/js/32.bfeb899ff5f4099daf0b.js","72907069fb68f57bdd8844bfa12a1485"],["/js/33.bfeb899ff5f4099daf0b.js","21c64822e7cc6a208cb3b6272e8797f5"],["/js/34.bfeb899ff5f4099daf0b.js","994cd6635c3201441ba99147775469bf"],["/js/35.bfeb899ff5f4099daf0b.js","bbd3ec045a508a9779615696b28950f4"],["/js/36.bfeb899ff5f4099daf0b.js","b791c4388b98f57100fe38ad9a34795f"],["/js/37.bfeb899ff5f4099daf0b.js","53969fe8256fd162838e5636c56ffb41"],["/js/38.bfeb899ff5f4099daf0b.js","52e86cf48c1175659f2c6df4bd8e4a76"],["/js/39.bfeb899ff5f4099daf0b.js","b14707d54f83ce7033265ba2af8566df"],["/js/4.bfeb899ff5f4099daf0b.js","1662fbeeb3ab6c2ed46e363f3984dc06"],["/js/40.bfeb899ff5f4099daf0b.js","c86f850d938b74fea0e1acb17be3750d"],["/js/404.bfeb899ff5f4099daf0b.js","c09e114cb6c24dced48981f2ac02c8be"],["/js/41.bfeb899ff5f4099daf0b.js","f2fd2e86ab43c88444aa3facd1745718"],["/js/42.bfeb899ff5f4099daf0b.js","1356a7d0db8dde716f44d439fd70921d"],["/js/43.bfeb899ff5f4099daf0b.js","145418e7eefe534494bc495b9c361a32"],["/js/44.bfeb899ff5f4099daf0b.js","1cb46bebd80adfafae358b484515c3dd"],["/js/45.bfeb899ff5f4099daf0b.js","0f0f8efe3ec25f798627b24b7730ddf9"],["/js/46.bfeb899ff5f4099daf0b.js","af843abd7f7acd9becbc62446f904b87"],["/js/47.bfeb899ff5f4099daf0b.js","753e8c6f9ddc4083fcdf9d75428721ab"],["/js/48.bfeb899ff5f4099daf0b.js","1a93681ed241e3173ae9bf08b52653ba"],["/js/49.bfeb899ff5f4099daf0b.js","ccea9f71f7ee52c23b6d68e2bae085a1"],["/js/5.bfeb899ff5f4099daf0b.js","adfc87c50f6ccf271e5bdab238520de5"],["/js/50.bfeb899ff5f4099daf0b.js","dad93b527720903a8c25b35c9cb11a02"],["/js/51.bfeb899ff5f4099daf0b.js","72a7a774afe9147b27d9140aa5c58111"],["/js/52.bfeb899ff5f4099daf0b.js","a6b16cb1c82fc5e1f23a57731ffde62a"],["/js/53.bfeb899ff5f4099daf0b.js","23da20e84c096b09981d64c181ea7790"],["/js/54.bfeb899ff5f4099daf0b.js","39b1ccd1cff02d26827775fa92eb90cf"],["/js/55.bfeb899ff5f4099daf0b.js","43327903ddf676419a1c38a1b0c621d6"],["/js/56.bfeb899ff5f4099daf0b.js","82b5ea1524683b702ce1a2a049fbfc6e"],["/js/57.bfeb899ff5f4099daf0b.js","8c403b82161f84c892faab1b61a44bc6"],["/js/58.bfeb899ff5f4099daf0b.js","40cbd1318c731b13ec9d117246a6f54e"],["/js/59.bfeb899ff5f4099daf0b.js","76754c0b45ae44ee456df8a8a065f4b6"],["/js/6.bfeb899ff5f4099daf0b.js","6fd8f3a85f1cc2ecad93cca8c4f5ddd6"],["/js/60.bfeb899ff5f4099daf0b.js","bdc98b272e14f56e08a4855220eee052"],["/js/61.bfeb899ff5f4099daf0b.js","4f5a301ac4cffc24f44a6ffb56ed0f37"],["/js/62.bfeb899ff5f4099daf0b.js","868700a178f2e632a0ea552abdbcccb1"],["/js/63.bfeb899ff5f4099daf0b.js","c1695d83f921babec7f62687b1a76de7"],["/js/64.bfeb899ff5f4099daf0b.js","4b42d512eb9608e6ee24c0d4abef93ad"],["/js/65.bfeb899ff5f4099daf0b.js","525a18163b8993a7a055de8e4c8fa49e"],["/js/66.bfeb899ff5f4099daf0b.js","83d14ce1c945c6a4f48a6b4daf616fd5"],["/js/67.bfeb899ff5f4099daf0b.js","d224f4c12fa2a2e5dce779caf51da5c2"],["/js/68.bfeb899ff5f4099daf0b.js","f6bec45099094e17c9d5ffbd9467fc0f"],["/js/69.bfeb899ff5f4099daf0b.js","deb7b993ce10bd4abd993565bac58ef1"],["/js/7.bfeb899ff5f4099daf0b.js","51a9607a6b13d9d5a1db7d48b411a8c2"],["/js/70.bfeb899ff5f4099daf0b.js","8ef9a8863cb905bd0a0425a444a774d5"],["/js/71.bfeb899ff5f4099daf0b.js","08d1a97a5cf68c1400b29651bf4510d7"],["/js/72.bfeb899ff5f4099daf0b.js","8f2f8d97cb1b69058d0cf4d635839640"],["/js/73.bfeb899ff5f4099daf0b.js","2e620ea09725946ddcce1387c3ccc1ce"],["/js/74.bfeb899ff5f4099daf0b.js","2017260bdf065c26c60cb61e6b978780"],["/js/75.bfeb899ff5f4099daf0b.js","a5d8f5ee0e84bea9b358f831bbec6200"],["/js/76.bfeb899ff5f4099daf0b.js","dc998446f591dee5c1d51c2af6412d1e"],["/js/77.bfeb899ff5f4099daf0b.js","b25595ba5101dec8a799752e5b594550"],["/js/78.bfeb899ff5f4099daf0b.js","8a2d78b888bcb9e4fb00c409d563e590"],["/js/79.bfeb899ff5f4099daf0b.js","037bd15d6ac50a49c6d4568c50969534"],["/js/8.bfeb899ff5f4099daf0b.js","3293a5a0912911289c86efea8fe9d0e6"],["/js/80.bfeb899ff5f4099daf0b.js","c04b856eee691d7047ad16b681cfc8fb"],["/js/81.bfeb899ff5f4099daf0b.js","80a1ae0bb5b7d2f8eb076665d8e608f8"],["/js/82.bfeb899ff5f4099daf0b.js","bebebea7a1d1281bcdd0c6216451369f"],["/js/83.bfeb899ff5f4099daf0b.js","057f99b01a7f5f3ea79ab80d85309325"],["/js/84.bfeb899ff5f4099daf0b.js","b1c269327331643fabbc5cb23b137a9a"],["/js/85.bfeb899ff5f4099daf0b.js","a4f6cfd70aa8b9bb2ce44d292b9956a9"],["/js/86.bfeb899ff5f4099daf0b.js","8c7ecd8cbb9af3fe5a2cc3bd61ee5c1b"],["/js/87.bfeb899ff5f4099daf0b.js","a98f624151209390f39d2c67bad2cf85"],["/js/88.bfeb899ff5f4099daf0b.js","18f03463344414b74d86d18587600057"],["/js/89.bfeb899ff5f4099daf0b.js","2b6f613be25a0caf15cf0df2ed1c78cf"],["/js/9.bfeb899ff5f4099daf0b.js","8c2834b29c2475f2794317338a6ff788"],["/js/90.bfeb899ff5f4099daf0b.js","7f412aa381f6bd37139a41d3c1db103e"],["/js/91.bfeb899ff5f4099daf0b.js","cb7dd9212297a3a2feb8b97839cbc31f"],["/js/AccountSignupModal.bfeb899ff5f4099daf0b.js","26939a3f62e85d1b201fe565a99b57f2"],["/js/ResetPasswordModal.bfeb899ff5f4099daf0b.js","8ad4f656c05bba6f33f73561e8736a5f"],["/js/account-info.bfeb899ff5f4099daf0b.js","7650a2458d5b9fc0a2e67747ce94f3a5"],["/js/account.bfeb899ff5f4099daf0b.js","7aa100fca1d18a3b36cc287b8c3d9c53"],["/js/contract.bfeb899ff5f4099daf0b.js","aea123c7b35a60ed5d51af91cb2cfee3"],["/js/modals.bfeb899ff5f4099daf0b.js","dd8703ce3f9aaff9c9fc200bddbd045d"],["/js/mt5.bfeb899ff5f4099daf0b.js","8bdcd4057a7623077fd8e6687698bff4"],["/js/notification-messages.bfeb899ff5f4099daf0b.js","d5bf994f6bb2872648950072eaf719fd"],["/js/push-notification.bfeb899ff5f4099daf0b.js","645bf962795cb44cc492d8b5d69f2872"],["/js/reports.bfeb899ff5f4099daf0b.js","b27f98e282044fce9a8d9c9a58c05fdf"],["/js/screen-small.bfeb899ff5f4099daf0b.js","2c9c249f78ddf092a3d1ac73177b7316"],["/js/settings-chart.bfeb899ff5f4099daf0b.js","b24de483f86fc667ddc5648eda416db8"],["/js/settings-language.bfeb899ff5f4099daf0b.js","af4caae9b3f62d6d8024f0e4061ce634"],["/js/settings-theme.bfeb899ff5f4099daf0b.js","f0c31c191d2891fa38d9d99eb5bdfaf1"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.bfeb899ff5f4099daf0b.js","7efb0a1353f0f4a57cc65980699d437b"],["/js/two-month-picker.bfeb899ff5f4099daf0b.js","6bf15b5656ab1eb1b8dba31cde063ae6"],["/js/vendors~main.bfeb899ff5f4099daf0b.js","e451e116984bdd0b98b6e065a07eae04"],["/js/vendors~smart_chart.bfeb899ff5f4099daf0b.js","0dbe7ad5ae7eb674222f0ed36cc5a77c"],["/js/work-in-progress.bfeb899ff5f4099daf0b.js","45e8ab23587354b1d8803253e34f6f19"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







