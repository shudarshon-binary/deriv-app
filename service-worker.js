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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","0d01ee7363c5f5d6e870ffd13fd0425e"],["/css/app.css","16b02b46cf8ec998915e4166f7bd04e6"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/digits.css","6ed77e3637e6b7ddfe52cf4de88551ab"],["/css/modals.css","0127e808d3864bc6a72f45aa63b2fa20"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","9a34b39b513bdbc23869cd5e68472304"],["/js/0.738e8d5b4d7a0bc71747.js","3e7f205cef3a11b0fe4ce594e54e4f4b"],["/js/1.738e8d5b4d7a0bc71747.js","7c775f04e0a775a7134bacadf8829714"],["/js/10.738e8d5b4d7a0bc71747.js","0486b0eafdb4f7936bebe72103418cbb"],["/js/11.738e8d5b4d7a0bc71747.js","532ad73485a0efb0561221165a12f4ad"],["/js/12.738e8d5b4d7a0bc71747.js","7d117e9a204b9d6eeca102790c20fcde"],["/js/13.738e8d5b4d7a0bc71747.js","4bdde49b0151c5febec0ee7a5f673dab"],["/js/14.738e8d5b4d7a0bc71747.js","a27fcfb89de6fa99343b3048f7e2c38b"],["/js/15.738e8d5b4d7a0bc71747.js","8d5ffb8b3085b7641ab483fd995c4dfb"],["/js/16.738e8d5b4d7a0bc71747.js","e5d5bf1ed9d38f1ec65269400b4bc35f"],["/js/17.738e8d5b4d7a0bc71747.js","7332cb175f0ca73683c743f4ebdc869c"],["/js/18.738e8d5b4d7a0bc71747.js","6e72ee848f59f8d40891f7673d980225"],["/js/19.738e8d5b4d7a0bc71747.js","6f97c58320dd32b7128c59be179c4b04"],["/js/2.738e8d5b4d7a0bc71747.js","1a196c6a04f4f17b5b92eb9a39a1f41e"],["/js/20.738e8d5b4d7a0bc71747.js","56d2e008e4d52eee1b891029da69f733"],["/js/21.738e8d5b4d7a0bc71747.js","1d32f4c67995578a9b024e1f723649f7"],["/js/22.738e8d5b4d7a0bc71747.js","db0512b454372f45d24cd8d9340a6745"],["/js/23.738e8d5b4d7a0bc71747.js","b31a1a6d1daa3f884b6c9655d6ba93ee"],["/js/24.738e8d5b4d7a0bc71747.js","e689092db66b94cc99d54669593bae19"],["/js/25.738e8d5b4d7a0bc71747.js","7168fb82861952324da40549b08c7f49"],["/js/26.738e8d5b4d7a0bc71747.js","673608a7c13e6629c564fb34d63817e7"],["/js/27.738e8d5b4d7a0bc71747.js","3e083995cfe3af8745384eef73cfed68"],["/js/28.738e8d5b4d7a0bc71747.js","4fd1d7d99ceffc0aa94c3d18cd89ed75"],["/js/29.738e8d5b4d7a0bc71747.js","d4449f6fff461b3556df348f469fc549"],["/js/3.738e8d5b4d7a0bc71747.js","99cd4292d4e9f121d6c23dfcc4172e55"],["/js/30.738e8d5b4d7a0bc71747.js","2ba671e9ac3f35bcfdea2d7995a108cc"],["/js/31.738e8d5b4d7a0bc71747.js","715159737726bf548cca81f49b8fec02"],["/js/32.738e8d5b4d7a0bc71747.js","6a3c1e3ce24f152b9345a2b88455096b"],["/js/33.738e8d5b4d7a0bc71747.js","3b1491e42534ea26c7597f42f6222db5"],["/js/34.738e8d5b4d7a0bc71747.js","bc6b1434e8cc74f43f5ad51d3e2a6791"],["/js/35.738e8d5b4d7a0bc71747.js","7a22de6b09a4ae992ec5067860d41f63"],["/js/36.738e8d5b4d7a0bc71747.js","e1badc5c895194975fa9ac4d4533c4a3"],["/js/37.738e8d5b4d7a0bc71747.js","4c2ace5f44f4b7df17c58392a850454e"],["/js/38.738e8d5b4d7a0bc71747.js","cb0ecf2fe8715a769c63d305a1404cdb"],["/js/39.738e8d5b4d7a0bc71747.js","106ea534579f083ac3e42c6a2ae80e0d"],["/js/4.738e8d5b4d7a0bc71747.js","c2d0a815578a8e523ce0cd22bf8164ed"],["/js/40.738e8d5b4d7a0bc71747.js","bbc1591fb76fb5b2d8523d81a1932f2a"],["/js/404.738e8d5b4d7a0bc71747.js","a1aa733ed3ca6256aee2b3e9b1d3e79e"],["/js/41.738e8d5b4d7a0bc71747.js","332cfe6c328acb68223347566bb8d455"],["/js/42.738e8d5b4d7a0bc71747.js","de40ff62b4dd66ec53e3c44f9a31e0b5"],["/js/43.738e8d5b4d7a0bc71747.js","029980948c2c1319301673c635ed80ff"],["/js/44.738e8d5b4d7a0bc71747.js","27fe12a8aa608e0e5aa61ec9b22c58fe"],["/js/45.738e8d5b4d7a0bc71747.js","f3974647284a51f3c1dff22aacb3afd2"],["/js/46.738e8d5b4d7a0bc71747.js","2e4bd97020739b215c6ea514fbbd52a8"],["/js/47.738e8d5b4d7a0bc71747.js","d5fafeaf3fb124c5234f27072370036a"],["/js/48.738e8d5b4d7a0bc71747.js","d22a157ba99526ace1c9c48aeff0043e"],["/js/49.738e8d5b4d7a0bc71747.js","2b0ea00a389fee2f5d5e44d968c11f3d"],["/js/5.738e8d5b4d7a0bc71747.js","f90fd3c64fbe37e802dc23017120e8eb"],["/js/50.738e8d5b4d7a0bc71747.js","a51e3ed88820234c1b690114d8db34ca"],["/js/51.738e8d5b4d7a0bc71747.js","38280685a239cd2feb04b48b719bd41c"],["/js/52.738e8d5b4d7a0bc71747.js","75b71402afa282d62484d7372ebf95c3"],["/js/53.738e8d5b4d7a0bc71747.js","b18a6854b8ffeefee6700e3b9303f0e5"],["/js/54.738e8d5b4d7a0bc71747.js","8e97cacd61c7fdb5bd07ddba3b281d32"],["/js/55.738e8d5b4d7a0bc71747.js","d071f199f81d791d8e55ada67301822b"],["/js/56.738e8d5b4d7a0bc71747.js","ed297199069029035e339a75d04b47fe"],["/js/57.738e8d5b4d7a0bc71747.js","03a803448a117345775dbe76b5332aec"],["/js/58.738e8d5b4d7a0bc71747.js","26fb845652667cd15ae73ed2838d667a"],["/js/59.738e8d5b4d7a0bc71747.js","d3060cd972190cafe39722739f1189b1"],["/js/6.738e8d5b4d7a0bc71747.js","7365482a7a3b1fc7ab8125bbf0f347ba"],["/js/60.738e8d5b4d7a0bc71747.js","c5cf5981b063c173684ac7c5908fff0e"],["/js/61.738e8d5b4d7a0bc71747.js","27c21dff7a8c38da31a015f06d283657"],["/js/62.738e8d5b4d7a0bc71747.js","885683908fdb08b29ebe0f98ce37b410"],["/js/63.738e8d5b4d7a0bc71747.js","47767d2cb93b6436c2f9079a8f6f6031"],["/js/64.738e8d5b4d7a0bc71747.js","01d5b573382ea09d6b64b7b5dd788bd9"],["/js/65.738e8d5b4d7a0bc71747.js","4622f0c755b52f7b314bbc3d677335a1"],["/js/66.738e8d5b4d7a0bc71747.js","836b539c63c02e35b4ce958173baffa9"],["/js/67.738e8d5b4d7a0bc71747.js","b564405e2ee0984a136c44973ada7923"],["/js/68.738e8d5b4d7a0bc71747.js","036f0fdcdd963a3e1856b7862e6157a2"],["/js/69.738e8d5b4d7a0bc71747.js","66d05fb5075c8bf9505fb7e3d0f4eb44"],["/js/7.738e8d5b4d7a0bc71747.js","1fb6cde4771844ee899c2bb4c69d4490"],["/js/70.738e8d5b4d7a0bc71747.js","343233faa11107377b6d76bdeb0fc1b8"],["/js/71.738e8d5b4d7a0bc71747.js","d1c48d27755e600de067c6c82ecb2062"],["/js/8.738e8d5b4d7a0bc71747.js","74165296548b11290f174601779415c5"],["/js/9.738e8d5b4d7a0bc71747.js","51c319907ea679328f4aafcc22715e09"],["/js/AccountSignupModal.738e8d5b4d7a0bc71747.js","f98b32ebb5c94e43b4bcad6dc70a1319"],["/js/account-info.738e8d5b4d7a0bc71747.js","b01d99bc5b4874c285728c4cb1d3b6e8"],["/js/contract.738e8d5b4d7a0bc71747.js","a5a5d89f944f15d8f7d3c86d997c4385"],["/js/default~open_position~1833eefb.738e8d5b4d7a0bc71747.js","87a3b984bdb27f05c84ddcb65a48e433"],["/js/digits.738e8d5b4d7a0bc71747.js","e0f4742ee7492d9c9ce1e5af1b94db81"],["/js/info-box.738e8d5b4d7a0bc71747.js","f2765dbac5904335fb6462279af3e3fa"],["/js/main.738e8d5b4d7a0bc71747.js","72910a6e6867455b82fb266bd8883246"],["/js/modals.738e8d5b4d7a0bc71747.js","98d2181f322a7ddb6b72ea6826a16e5c"],["/js/notification-messages.738e8d5b4d7a0bc71747.js","44935c59a534776b2f43cf3028711641"],["/js/open_positions.738e8d5b4d7a0bc71747.js","68fc0bdc493d15ffc73d0cf530aea8ca"],["/js/profit_table.738e8d5b4d7a0bc71747.js","b8c12ea1bf5f341349712205136eb842"],["/js/push-notification.738e8d5b4d7a0bc71747.js","57d84b7c3571a36d62f45cc382ec3488"],["/js/reports.738e8d5b4d7a0bc71747.js","4dde6689e2552bf32932e24c04674bbd"],["/js/screen-small.738e8d5b4d7a0bc71747.js","9a8f0b21dbd5defbeb65d57e36919e78"],["/js/settings-chart.738e8d5b4d7a0bc71747.js","002f6028f8441aa750dc110655be82f2"],["/js/settings-language.738e8d5b4d7a0bc71747.js","7b7c9b4479bdc6fe2bc3192130bc898b"],["/js/settings-theme.738e8d5b4d7a0bc71747.js","fce1504ad09497448debb173dede3c8f"],["/js/smart_chart.738e8d5b4d7a0bc71747.js","d79f266bb52c3510ad07a515105ec43b"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.738e8d5b4d7a0bc71747.js","04003aa6c3f92bc6e5d535a56e1f2ba2"],["/js/toggle-menu-drawer.738e8d5b4d7a0bc71747.js","20e216ab5dd142447b8d2d0f3d2e3368"],["/js/two-month-picker.738e8d5b4d7a0bc71747.js","a75d56bf0b02c0a4d053c8642048c2c4"],["/js/vendors~AccountSignupModal.738e8d5b4d7a0bc71747.js","7a37851b0abf130eab21a4971ca2a4e0"],["/js/vendors~main.738e8d5b4d7a0bc71747.js","0cbe283d39e396e43890a0855ec34baa"],["/js/vendors~open_position~7c650be5.738e8d5b4d7a0bc71747.js","6d69285b1753e6ad83fb5cc28345b13a"],["/js/vendors~smart_chart.738e8d5b4d7a0bc71747.js","1bd6cb136c373fee6a17ff69ee400f6b"],["/js/work-in-progress.738e8d5b4d7a0bc71747.js","9037744726afd11893cd044e05d82f7c"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







