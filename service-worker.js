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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","e144061c93f4f5c6e60b2a7022d6d6fc"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","a8c883b0a19f0d33248c572ecf8a66af"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","7f37cb38441e501cb9ead2d676867ce6"],["/js/0.d2e87a8e652795cd36c3.js","88298b1ca35368ebf0d3213c45ff3ce2"],["/js/1.d2e87a8e652795cd36c3.js","8437b4ccabcff6bd290d0f4958e166d7"],["/js/10.d2e87a8e652795cd36c3.js","00da71661431377721c9f3753ffe4cac"],["/js/11.d2e87a8e652795cd36c3.js","aae71c80b5cd10b13d53bf953fc599f0"],["/js/12.d2e87a8e652795cd36c3.js","ed72075421ef7e18176c8c5341ea7705"],["/js/13.d2e87a8e652795cd36c3.js","7c365678789105aebf6245af05257d9b"],["/js/14.d2e87a8e652795cd36c3.js","671472cef5de2718e376655181917acb"],["/js/15.d2e87a8e652795cd36c3.js","243db0ebf84f45a4b38e56f07ff2e364"],["/js/16.d2e87a8e652795cd36c3.js","f37cc51dd2316e7d5c9a85d0b4055a2c"],["/js/17.d2e87a8e652795cd36c3.js","49852c4a23cc8ac43e01ec874124d7ba"],["/js/18.d2e87a8e652795cd36c3.js","190d5dd1095592b0f36f979f8d29356a"],["/js/19.d2e87a8e652795cd36c3.js","afb1a5b0fa1908c4f01e068618d5069f"],["/js/2.d2e87a8e652795cd36c3.js","38a1118d1db70475aca91d5d3bacccbd"],["/js/20.d2e87a8e652795cd36c3.js","f248eeef8b6f96374021c4bc63436422"],["/js/21.d2e87a8e652795cd36c3.js","8e54d29b45cfe3c75c515044ac637a61"],["/js/22.d2e87a8e652795cd36c3.js","e99302dffe3ae13bc77f3dde233d7a27"],["/js/23.d2e87a8e652795cd36c3.js","f7ea5220b6994803e6e7907c11fe4cab"],["/js/24.d2e87a8e652795cd36c3.js","6cb0bdf9bf1dc10a6d304fd69e5e3309"],["/js/25.d2e87a8e652795cd36c3.js","9328b3544347428be79197918e363788"],["/js/26.d2e87a8e652795cd36c3.js","b9d1ed9ed55c9f692d83d63bdc766e72"],["/js/27.d2e87a8e652795cd36c3.js","b28101a46b04b253c44b39296f5a4a5a"],["/js/28.d2e87a8e652795cd36c3.js","bfb20137d032fbf1353aa11c09f96048"],["/js/29.d2e87a8e652795cd36c3.js","36e8f77d2329aeb326aed47b7410a746"],["/js/3.d2e87a8e652795cd36c3.js","2471a458766ebc081365c1158341e398"],["/js/30.d2e87a8e652795cd36c3.js","eed98f12c4fdfefaae82d8a900c4ad09"],["/js/31.d2e87a8e652795cd36c3.js","ca0f1645760f273bbce15596bf211c98"],["/js/32.d2e87a8e652795cd36c3.js","e38d1ed29545664068e7fdbefc4bd5da"],["/js/33.d2e87a8e652795cd36c3.js","17b21d04bccecd277c939816f7402813"],["/js/34.d2e87a8e652795cd36c3.js","a78774c50000288bf1e9304bf9da47b9"],["/js/35.d2e87a8e652795cd36c3.js","0708081a1aeccad6499d4a2d462d4e9c"],["/js/36.d2e87a8e652795cd36c3.js","58a938750320b97000a9478745e0f2ef"],["/js/37.d2e87a8e652795cd36c3.js","4164f0ca7099008c05492abf253f6db8"],["/js/38.d2e87a8e652795cd36c3.js","9321700338981edf640e558da52a3464"],["/js/39.d2e87a8e652795cd36c3.js","2e611a8e75a5362cccf600b00d4948db"],["/js/4.d2e87a8e652795cd36c3.js","a75b8bad4d3c7d8aeec515bbafe03134"],["/js/40.d2e87a8e652795cd36c3.js","5bf738a8eb3c542d3bb23b6182a9e91b"],["/js/404.d2e87a8e652795cd36c3.js","cc45693bd68bab93587a79d4d1a3b178"],["/js/41.d2e87a8e652795cd36c3.js","dcaaced6005a854bbe87dda50094e11b"],["/js/42.d2e87a8e652795cd36c3.js","b7ad6ed92d2ab3db886c8b8c7354898c"],["/js/43.d2e87a8e652795cd36c3.js","0fd0680e17263766b6534c4130f8b41b"],["/js/44.d2e87a8e652795cd36c3.js","14515f112a11c7aab1a54388d2bc73c8"],["/js/45.d2e87a8e652795cd36c3.js","1b1d834c0c27d51aa6e6d040fe46f770"],["/js/46.d2e87a8e652795cd36c3.js","d8c1028d397e4ca524780b446561a4f2"],["/js/47.d2e87a8e652795cd36c3.js","8362825095836605a2d162e70f73e118"],["/js/48.d2e87a8e652795cd36c3.js","6fa952f51ff17718304302b19020763e"],["/js/49.d2e87a8e652795cd36c3.js","787f17e955ce6532b3ff953537b5a3c4"],["/js/5.d2e87a8e652795cd36c3.js","2ac91910f2f771a6109d34e167067a29"],["/js/50.d2e87a8e652795cd36c3.js","9a8f3d8a7066f01b7ceb57665d4dc0d5"],["/js/51.d2e87a8e652795cd36c3.js","99ab9920bb0002f1b24d84672a04cef2"],["/js/52.d2e87a8e652795cd36c3.js","afc33ba364fe4543fabd3983449be955"],["/js/53.d2e87a8e652795cd36c3.js","6f8d298c2d436320afc25d9a2b45bd20"],["/js/54.d2e87a8e652795cd36c3.js","aba2bea9b6a6320c50ae77e18d69fcc9"],["/js/55.d2e87a8e652795cd36c3.js","fe404e5b28fe72c87d6ded7a456ab79a"],["/js/56.d2e87a8e652795cd36c3.js","acd4e0d8c1231bcf120f484d7db54f01"],["/js/57.d2e87a8e652795cd36c3.js","26b707ec27a4c4420ac0f6ec9255799e"],["/js/58.d2e87a8e652795cd36c3.js","e5f4c4c1c26894a65e4f73a4645172ab"],["/js/59.d2e87a8e652795cd36c3.js","4705eb14b9e454b784c697e018586afa"],["/js/6.d2e87a8e652795cd36c3.js","471212e6de2cc6d3bc676481b01b3bbf"],["/js/60.d2e87a8e652795cd36c3.js","6938d086f91b79c6d73613b868540a55"],["/js/61.d2e87a8e652795cd36c3.js","2fc3c23952bb6a3495e42d144c187213"],["/js/62.d2e87a8e652795cd36c3.js","eebee36f5c0fafbfb00c6305d2d6d5e0"],["/js/63.d2e87a8e652795cd36c3.js","3d36a7d597590aaff5ec9f206af99012"],["/js/64.d2e87a8e652795cd36c3.js","46c269232dbab7191a495b1202d470d1"],["/js/65.d2e87a8e652795cd36c3.js","02cb62e7ea3311adb9754e2c66423ab0"],["/js/66.d2e87a8e652795cd36c3.js","b36d10d10cce97df8c40b30deddfb159"],["/js/67.d2e87a8e652795cd36c3.js","73dd216b4d370d1e8d881292f1074fe1"],["/js/68.d2e87a8e652795cd36c3.js","90413e3d885615cf3d0b815c4a770760"],["/js/69.d2e87a8e652795cd36c3.js","cbedb414ed132d128008030b07ea398b"],["/js/7.d2e87a8e652795cd36c3.js","aa9f3551c373cf25e01f544f6f1ffbe2"],["/js/70.d2e87a8e652795cd36c3.js","462d3926de8eadf4f8f086446ca19ec9"],["/js/71.d2e87a8e652795cd36c3.js","3bc6cb418d816f456f1c23da319143bc"],["/js/8.d2e87a8e652795cd36c3.js","cb6833aa541d5d741e8fc8c3aa9a2e18"],["/js/9.d2e87a8e652795cd36c3.js","61603d0173b99e997e90c764e64ce9bd"],["/js/account-info.d2e87a8e652795cd36c3.js","c542d82f78a4f4e837216ba645f65916"],["/js/contract.d2e87a8e652795cd36c3.js","f992a14a4e19caf40a5222e126e7b62b"],["/js/default~open_position~1833eefb.d2e87a8e652795cd36c3.js","b58d940165767383588bcf2363309d8c"],["/js/digits.d2e87a8e652795cd36c3.js","82166cb84635c09ed762868e30e21ac8"],["/js/info-box.d2e87a8e652795cd36c3.js","193b1d9c8acf96cabb0c19396d100103"],["/js/main.d2e87a8e652795cd36c3.js","ac7f86a078131f2f2f02df3790909631"],["/js/modals.d2e87a8e652795cd36c3.js","0e8268d2eabb2b28f8f816f60ca96c78"],["/js/notification-messages.d2e87a8e652795cd36c3.js","9cca4ca06b3cf85b529c939d03e20436"],["/js/open_positions.d2e87a8e652795cd36c3.js","c1b6d9d593437cf2d490ae99e48b4b99"],["/js/profit_table.d2e87a8e652795cd36c3.js","1fa077d1023f7e4be9f56b6d361625f4"],["/js/push-notification.d2e87a8e652795cd36c3.js","43961f4cf5fbade09111b00da50400d0"],["/js/reports.d2e87a8e652795cd36c3.js","345540a7cd8dca89ef8fbde6b6bc05a4"],["/js/screen-small.d2e87a8e652795cd36c3.js","dd13a76664de13847bf1d3b5e9ae2bfb"],["/js/settings-chart.d2e87a8e652795cd36c3.js","79e4f7cfeb87b68a870fcd11e34b37f0"],["/js/settings-language.d2e87a8e652795cd36c3.js","1f3b36e43ac4b074a2e9540441e88bc8"],["/js/settings-theme.d2e87a8e652795cd36c3.js","b6777b614541a919643b535980dc82dd"],["/js/smart_chart.d2e87a8e652795cd36c3.js","c91ecccb7572799511e2c854618328c8"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.d2e87a8e652795cd36c3.js","8ef2233701a3b9b2421b4d21111227f3"],["/js/toggle-menu-drawer.d2e87a8e652795cd36c3.js","11e43960d35aaabdfde6125500f2ac78"],["/js/two-month-picker.d2e87a8e652795cd36c3.js","8e8bd9a376c5f9a8eefe3d1bd4b23017"],["/js/vendors~main.d2e87a8e652795cd36c3.js","95130509060a7ba42dbf4ec899f5e415"],["/js/vendors~open_position~7c650be5.d2e87a8e652795cd36c3.js","0bc57d11ff12dd12665692f3ca67f334"],["/js/vendors~smart_chart.d2e87a8e652795cd36c3.js","ff2289d86be70da4e18f8504e8d0f6f1"],["/js/work-in-progress.d2e87a8e652795cd36c3.js","41ea2d67c8e9bc77e57d5e14b43d7f75"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







