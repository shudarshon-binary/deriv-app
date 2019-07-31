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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","bb0b7d31eb2b681f16a6c1d09c219dd7"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","be44b9dee7dd4529144f8e00d8aaaf2b"],["/js/0.bee82511b406edd825bc.js","cfdc369083e78c9e61471564a4f96d3f"],["/js/1.bee82511b406edd825bc.js","f34de621692cad0a5e915789b6d0fbd7"],["/js/10.bee82511b406edd825bc.js","aa20c71f5b11437505065cb8a9ae5a83"],["/js/11.bee82511b406edd825bc.js","4b6f2a076201010fb1af355d79f6eb00"],["/js/12.bee82511b406edd825bc.js","02273b22c05d87099a25c6036ef46233"],["/js/13.bee82511b406edd825bc.js","934a09cc6b894a9a8b2fe672cd9f4703"],["/js/14.bee82511b406edd825bc.js","78af182174cda7a131284a656f724043"],["/js/15.bee82511b406edd825bc.js","02edf53d007ab6b921088d135f293212"],["/js/16.bee82511b406edd825bc.js","382958501a8b03ca7b6555b9b0a384b4"],["/js/17.bee82511b406edd825bc.js","d768e220fcf7517408bbf9ee064f0b8e"],["/js/18.bee82511b406edd825bc.js","564c1c55ce0ecf38b16979ff817c0aaa"],["/js/19.bee82511b406edd825bc.js","213235edd9e092e6c21507dea942468f"],["/js/2.bee82511b406edd825bc.js","61d7944dace4100838419001715331a2"],["/js/20.bee82511b406edd825bc.js","4710815e0489afe4f0405b919812059b"],["/js/21.bee82511b406edd825bc.js","5c7e8998ecec0b430b987d484f523031"],["/js/22.bee82511b406edd825bc.js","7c5ae6a79934349e610577b0bdadcade"],["/js/23.bee82511b406edd825bc.js","7ac0e40707526964d1067f86c1ac715f"],["/js/24.bee82511b406edd825bc.js","794c28a6f8e6f595f5bef24d6fd7eb4b"],["/js/25.bee82511b406edd825bc.js","392f427fc1c654595166a83dcd012902"],["/js/26.bee82511b406edd825bc.js","96b0a14070e0166773353bf77cfacaf3"],["/js/27.bee82511b406edd825bc.js","da1590e3cfd54f2a0a3707ae908d0565"],["/js/28.bee82511b406edd825bc.js","6cf765d1902166855845dff6b5dd9548"],["/js/29.bee82511b406edd825bc.js","34ab8b416232bd4fed4743769e90c914"],["/js/3.bee82511b406edd825bc.js","fa55910d615a5abaff38678998d0b9dc"],["/js/30.bee82511b406edd825bc.js","c10f611452ef8812be1e9fbe57ef8a3d"],["/js/31.bee82511b406edd825bc.js","185924f6f2a01122733929e702ebd618"],["/js/32.bee82511b406edd825bc.js","c272e65df3eb81c5e32a3c1aa260358e"],["/js/33.bee82511b406edd825bc.js","81ccbebd99a2d6ea968cacfb26be4691"],["/js/34.bee82511b406edd825bc.js","950e3d0275b6f76ad11c7369ead9ffd6"],["/js/35.bee82511b406edd825bc.js","f2baa4b74573f4041a0464c8dba82341"],["/js/36.bee82511b406edd825bc.js","04ea6e57404c7591e2e5346990bc048b"],["/js/37.bee82511b406edd825bc.js","90a6777bbf873879de1921e47076ab58"],["/js/38.bee82511b406edd825bc.js","697e370f074e5f52f7b6d2c5c27282fb"],["/js/39.bee82511b406edd825bc.js","dd268a1bff257858cf83240dcd0857df"],["/js/4.bee82511b406edd825bc.js","131acdeecd40e1ee976418a1693a019d"],["/js/40.bee82511b406edd825bc.js","aeb7181d4792ac6a452027075a2103bf"],["/js/404.bee82511b406edd825bc.js","5d249bec05c2c0a4eba94c33a860d764"],["/js/41.bee82511b406edd825bc.js","b82c67ea2668bf9f3a00d7f724228304"],["/js/42.bee82511b406edd825bc.js","eb9b4041405391c533fc23ddce5f2fb5"],["/js/43.bee82511b406edd825bc.js","9d39a67fbb12143088742f308c4d741b"],["/js/44.bee82511b406edd825bc.js","debda29f8cc5950665cb52bc90de7069"],["/js/45.bee82511b406edd825bc.js","93871a33fdddaec1abc5ba98a993bfd3"],["/js/46.bee82511b406edd825bc.js","7c52e2206771ae060c7e8bfe1a7e67a0"],["/js/47.bee82511b406edd825bc.js","d0190c91a02e8fb4d8e8c1ed01ccb480"],["/js/48.bee82511b406edd825bc.js","bad0e1adcaad072d8d9dd8cda619b27f"],["/js/49.bee82511b406edd825bc.js","5b5133f4d78ab0797506818cd4ac82c1"],["/js/5.bee82511b406edd825bc.js","428631263e3b1ad54ca7b537112d6e94"],["/js/50.bee82511b406edd825bc.js","48449ccc5933f730fa579e673dd67734"],["/js/51.bee82511b406edd825bc.js","2893ca2621b2a8ea86adb68d1ee2af52"],["/js/52.bee82511b406edd825bc.js","eccb6cf8190754f3a8e253419155c3cb"],["/js/53.bee82511b406edd825bc.js","b9a2eaae5470717baa173618db282a9d"],["/js/54.bee82511b406edd825bc.js","87d23fa4cdd2957af30c822680b18621"],["/js/55.bee82511b406edd825bc.js","c9851ce36b648a0be0f69ae0f69e1ccf"],["/js/56.bee82511b406edd825bc.js","d859afb25bf82ba9ee6859f1c23e047c"],["/js/57.bee82511b406edd825bc.js","60f15ed03678a85e72b571acfb00d7f6"],["/js/58.bee82511b406edd825bc.js","dd4d9d0a12bbbc53e64ed862c97ca7ad"],["/js/59.bee82511b406edd825bc.js","d3f1da044ff138aaa1436f35ad378fe2"],["/js/6.bee82511b406edd825bc.js","67c1f2f207c0688f74a3bef2db1979a9"],["/js/60.bee82511b406edd825bc.js","c40348c3affe997a9257591bd42bc984"],["/js/61.bee82511b406edd825bc.js","2ba728d2005bc676e49df3f443d3f609"],["/js/62.bee82511b406edd825bc.js","c00d7a3b01c4ab1bd9beb0bfb1d3655c"],["/js/63.bee82511b406edd825bc.js","0be05c7d44b7a3cbbd96e8af0ab0055e"],["/js/64.bee82511b406edd825bc.js","1be09aed800e2b872e76e61210286cb2"],["/js/65.bee82511b406edd825bc.js","6058205a84b3a33a6fe77fff08d4909b"],["/js/66.bee82511b406edd825bc.js","c4ea69c1354ebc4718b126d3ca461b50"],["/js/67.bee82511b406edd825bc.js","6419115890c06f9706f0dc39e319aaa2"],["/js/68.bee82511b406edd825bc.js","bdd7034b5f0af53c915e95b7e07f2230"],["/js/69.bee82511b406edd825bc.js","0651dbedd1abd08649fc38e98ce3fd55"],["/js/7.bee82511b406edd825bc.js","6e3af56bb1a172b17ce611efe669581d"],["/js/70.bee82511b406edd825bc.js","97f77168f418066ffbaf5d11d3e7bbc6"],["/js/71.bee82511b406edd825bc.js","7dfbccd932e255a4af38e7340a20fcca"],["/js/8.bee82511b406edd825bc.js","7a13cf2516ae308c90253ec3f8b2709c"],["/js/9.bee82511b406edd825bc.js","60ee26225ac769a78b067b6972308fdc"],["/js/DenialOfServiceModal.bee82511b406edd825bc.js","fadc7ca92039443320b46878fe545dfa"],["/js/MarketUnavailableModal.bee82511b406edd825bc.js","6d9307eb036f48625cf7b2e0b55566ae"],["/js/ServicesErrorModal.bee82511b406edd825bc.js","6b312f80fb12e86c5e36bdf5a35d64b7"],["/js/UnsupportedContractModal.bee82511b406edd825bc.js","75d9cca23520cf304f87d8d75f0a6cba"],["/js/account-info.bee82511b406edd825bc.js","6592f65020ae0ac63bc33604b1923ad8"],["/js/contract.bee82511b406edd825bc.js","a6fe656415fa96c506d7ea6045fd7bd9"],["/js/default~open_position~1833eefb.bee82511b406edd825bc.js","60597ba872ff8f0d216652d3ec9cc558"],["/js/digits.bee82511b406edd825bc.js","c5385d36cf5f2765f86e3643effd9062"],["/js/info-box.bee82511b406edd825bc.js","a31087cee41629d8280a47bf43ff9b69"],["/js/main.bee82511b406edd825bc.js","0d597230ff2e39d6dbc6824dd3f98574"],["/js/notification-messages.bee82511b406edd825bc.js","cf6672d7d29667702d8e290f43eb7dfa"],["/js/open_positions.bee82511b406edd825bc.js","49b933781374d3de9181cfd3d3980d1a"],["/js/profit_table.bee82511b406edd825bc.js","2713e749c0d5cc075f6238cac61d63bb"],["/js/push-notification.bee82511b406edd825bc.js","4360f2ae9820527012bf42b9134ee7e9"],["/js/reports.bee82511b406edd825bc.js","578535054c60ff6f5513211a013ad8ad"],["/js/screen-small.bee82511b406edd825bc.js","1cc323602d47592fd2759fff95f730bd"],["/js/settings-chart.bee82511b406edd825bc.js","a5aea2c2d09040992f92e28bd257b1c3"],["/js/settings-language.bee82511b406edd825bc.js","449a97f91d90adcc1eba3e7fce3600d0"],["/js/settings-theme.bee82511b406edd825bc.js","02578739db91f18060d62743c8616742"],["/js/smart_chart.bee82511b406edd825bc.js","cfd820a41d57aff2a04ed9e42bcfef4b"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.bee82511b406edd825bc.js","4e316b92d47f8732aaed40adc8f6b640"],["/js/toggle-cashier.bee82511b406edd825bc.js","bd897c200cb1ecbea4e4bc66d4b430c4"],["/js/toggle-menu-drawer.bee82511b406edd825bc.js","09ade9296e42039f791f38b3b5fdec45"],["/js/two-month-picker.bee82511b406edd825bc.js","1b7721a6d31f4f2bdf9a66b2d911b3e8"],["/js/vendors~main.bee82511b406edd825bc.js","5736fa0614a353e513713338e2725d72"],["/js/vendors~open_position~7c650be5.bee82511b406edd825bc.js","f9d389323139e14a9091b6b1225814ed"],["/js/vendors~smart_chart.bee82511b406edd825bc.js","2bffa74f173753ac69621f51db598a8e"],["/js/wallet-information.bee82511b406edd825bc.js","8ec0a23ef148e915c322ca41f2b4ce65"],["/js/work-in-progress.bee82511b406edd825bc.js","31fde494a57682a3f46e33d9c710d955"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







