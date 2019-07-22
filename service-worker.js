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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","ffa0b8880fbc14706db9ced0926c1ce3"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","0344c9350c40123dfe1884bad395369d"],["/js/0.b176561631e8c04c6514.js","4f2a8f8afa6199b6f53b8c7ec7aff421"],["/js/1.b176561631e8c04c6514.js","a424a22904696e877dc0add5cff0a227"],["/js/10.b176561631e8c04c6514.js","c40f61e810c8f0bdec81c67873491ca9"],["/js/11.b176561631e8c04c6514.js","8d15592881114fe0905c571f4a510ce2"],["/js/12.b176561631e8c04c6514.js","02bc77e820eace13a9c6e5411d2e530e"],["/js/13.b176561631e8c04c6514.js","177803582fdc4c21bc84eff1ad53f367"],["/js/14.b176561631e8c04c6514.js","e4c51817be5515dad4e935dd926c1c14"],["/js/15.b176561631e8c04c6514.js","a3a9c5cf91fde65a05b9fda75f40ef59"],["/js/16.b176561631e8c04c6514.js","196eb7db01d0cabd3848a345fc6467a3"],["/js/17.b176561631e8c04c6514.js","c356e53b78e47f33fd98612fdc98f608"],["/js/18.b176561631e8c04c6514.js","cd26f3044827321001e2dc890adcdc0c"],["/js/19.b176561631e8c04c6514.js","b447067c377051c6b7b0392693786e31"],["/js/2.b176561631e8c04c6514.js","3ea2402963d1a6b93f2a7e023644d648"],["/js/20.b176561631e8c04c6514.js","75cf1da2504c54ec8802f89b13b1ed5d"],["/js/21.b176561631e8c04c6514.js","ad298046d2004dc447fc724ebf987ea3"],["/js/22.b176561631e8c04c6514.js","fdd02675df55f38f1e3b64d01c9647a6"],["/js/23.b176561631e8c04c6514.js","bd7a1c7cc2b4cdf6d56829744879eb55"],["/js/24.b176561631e8c04c6514.js","4eba93caa3bf0271b200709ff3e63b37"],["/js/25.b176561631e8c04c6514.js","cb4c7174c640efee138e2ce42657e061"],["/js/26.b176561631e8c04c6514.js","7feabf5f4a9dbecd719cc6036280b983"],["/js/27.b176561631e8c04c6514.js","9c96720da84c4eacedcede0acfb01de7"],["/js/28.b176561631e8c04c6514.js","d98427fc682141678e0eee5298833a2c"],["/js/29.b176561631e8c04c6514.js","3a7bde2eb9688ca450671269d9bc1001"],["/js/3.b176561631e8c04c6514.js","43fae2e8ce5872826af6ac2e734b017f"],["/js/30.b176561631e8c04c6514.js","b466d5965bdfee9799b19e58684fbb8d"],["/js/31.b176561631e8c04c6514.js","ba68b686087e20f95436e353616d740e"],["/js/32.b176561631e8c04c6514.js","8d34d4405d01730095ecd3ab28c57f5b"],["/js/33.b176561631e8c04c6514.js","62818782ebc268824705cbe1ae21d91f"],["/js/34.b176561631e8c04c6514.js","0193a2e6ff2b550382ea1c714995bffb"],["/js/35.b176561631e8c04c6514.js","615d793e356b2dfb3dab92ed4d7e7bd7"],["/js/36.b176561631e8c04c6514.js","ffd58f03469b48c880b69d497dfecb89"],["/js/37.b176561631e8c04c6514.js","ea91012c1a7bd91c1ba710a251092040"],["/js/38.b176561631e8c04c6514.js","b86252b7d91a5c3fe5a47b77e8e6f4ed"],["/js/39.b176561631e8c04c6514.js","813e6b29d0bbd84f55e8d3a8b654b92c"],["/js/4.b176561631e8c04c6514.js","d3e9d0a42a4006ec9bb088e3dd1f3d38"],["/js/40.b176561631e8c04c6514.js","0f1e89c93a1ef233122ba9082d6a81db"],["/js/404.b176561631e8c04c6514.js","84645ea47dd2190650f6f46af5fce151"],["/js/41.b176561631e8c04c6514.js","52a140c5a7f7e5c720c3f343aaaf167c"],["/js/42.b176561631e8c04c6514.js","49a8fb3bb330614c02846b73da1e6418"],["/js/43.b176561631e8c04c6514.js","7eebeb7a95a6b1f15b87d7347e586650"],["/js/44.b176561631e8c04c6514.js","953912e1ab82e8770dbdb2755144070a"],["/js/45.b176561631e8c04c6514.js","7cf32f7c1f27cfe007f217ba157591ec"],["/js/46.b176561631e8c04c6514.js","cc52cece7d7592630d0476631741ccfa"],["/js/47.b176561631e8c04c6514.js","1190775a446e15d25b403865cdb222b0"],["/js/48.b176561631e8c04c6514.js","85c8608e0d7d09d1d26fcb33f69af4a4"],["/js/49.b176561631e8c04c6514.js","fdd9cef9c1c1bd69f26422f365492c7b"],["/js/5.b176561631e8c04c6514.js","3e4bcc09759d1f8984a8247285e20d0a"],["/js/50.b176561631e8c04c6514.js","3d564fdd2e7327694724ace3d3fdd19b"],["/js/51.b176561631e8c04c6514.js","7e7982894122d3e778986f944c0d740b"],["/js/52.b176561631e8c04c6514.js","3749e47541360c7b2ebd02265314bcfc"],["/js/53.b176561631e8c04c6514.js","db35d65168f4dc91215777ed80c8e7bf"],["/js/54.b176561631e8c04c6514.js","f73c3388448a40ad65a20702548e4269"],["/js/55.b176561631e8c04c6514.js","9ce81c54256495c8628759765df943e6"],["/js/56.b176561631e8c04c6514.js","ea0b7c2064c748935d76acb4287d5e05"],["/js/57.b176561631e8c04c6514.js","90196bb3c8e171d3d4675e3ea11f0bbc"],["/js/58.b176561631e8c04c6514.js","308e9cfa3e5ec96e9673ed291e9ef631"],["/js/59.b176561631e8c04c6514.js","e7d2aaa0f13bafd54955ac342c1aa0ce"],["/js/6.b176561631e8c04c6514.js","7581ab6e8db00e656ded278a041c50df"],["/js/60.b176561631e8c04c6514.js","9a66159a8294515dabf10cdf444e094c"],["/js/61.b176561631e8c04c6514.js","22d584d04eaa6fd11d3f95fdd8e1c090"],["/js/62.b176561631e8c04c6514.js","0e86b5dcb6a23889c13a0b660477232f"],["/js/63.b176561631e8c04c6514.js","70e8eb2cab69386a3158833e622231df"],["/js/64.b176561631e8c04c6514.js","aac14a4c1653874c0f6a9a4d15d26a15"],["/js/65.b176561631e8c04c6514.js","d4fb02024c144dbaa49b0b9d18e7f009"],["/js/66.b176561631e8c04c6514.js","ff900b281fe7324c346a93b61341db5b"],["/js/67.b176561631e8c04c6514.js","b14d58f27acededc680ddd18352ea16d"],["/js/68.b176561631e8c04c6514.js","a7490f2e36b539dae8881bdfb3f07915"],["/js/69.b176561631e8c04c6514.js","b8635e1fee64d52a81da745f1d6dd6e5"],["/js/7.b176561631e8c04c6514.js","bfe97e0515d0249320d5c87c454b40d8"],["/js/8.b176561631e8c04c6514.js","3e587a9ea3ddcc617fe421d783c1209d"],["/js/9.b176561631e8c04c6514.js","a4a0cc211ea40a91fde78bc96878e7d6"],["/js/contract.b176561631e8c04c6514.js","b03437a8d4f6c9e00ee022493f7968fe"],["/js/main.b176561631e8c04c6514.js","c2edcc90f79c7170af318574a8383fde"],["/js/open_positions.b176561631e8c04c6514.js","8efd1317e1e8652cdf32ada62c6dbe18"],["/js/open_positions~profit_table~statement.b176561631e8c04c6514.js","f1efdc633ea1f659cfe31176425115a5"],["/js/profit_table.b176561631e8c04c6514.js","091deb854625be7fcc4fb2154615d792"],["/js/reports.b176561631e8c04c6514.js","fd7b0a452e83933d4ca8f99ccb5746db"],["/js/smart_chart.b176561631e8c04c6514.js","e5f71e1e3b488a5765f94e67cb41615b"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.b176561631e8c04c6514.js","b6d8eb60f9e3d1b723ace72c3349a4f2"],["/js/vendors~open_positions~profit_table~statement.b176561631e8c04c6514.js","a481ce585ada61e4599df95c9312b423"],["/js/vendors~smart_chart.b176561631e8c04c6514.js","18fa90538bdff1264234b321a6e04441"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







