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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","bf0a404331152126f7334806beff82ce"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","1d103a5cc59ca53aa14c6b78df2376cb"],["/js/0.b96abbe01d2e4575ca81.js","1b730ad6bd13c58e46ac3de31ab1ce3c"],["/js/1.b96abbe01d2e4575ca81.js","6beebc172563911edaff5af896bebb91"],["/js/10.b96abbe01d2e4575ca81.js","98abf30d08e7fed13b3f00b1391d67f4"],["/js/11.b96abbe01d2e4575ca81.js","e6c06578e9fe840d6cbd64a446a76aed"],["/js/12.b96abbe01d2e4575ca81.js","7486a16fb2204023fdac4259872235b5"],["/js/13.b96abbe01d2e4575ca81.js","0f438824d3e0e2cadb49fd4d422c5b01"],["/js/14.b96abbe01d2e4575ca81.js","2cdf75841cdfe3ff6fb9bf91c67dcc18"],["/js/15.b96abbe01d2e4575ca81.js","d0cbe8fe79dc3a9f470f5ce7a956e00a"],["/js/16.b96abbe01d2e4575ca81.js","36794243934163853bade04cea32342f"],["/js/17.b96abbe01d2e4575ca81.js","b5c6d48b918c2cf645422cbf743c756b"],["/js/18.b96abbe01d2e4575ca81.js","b31271b34103492b0f6277f5615517c4"],["/js/19.b96abbe01d2e4575ca81.js","e200f65f679cafca9342372d42dfa03b"],["/js/2.b96abbe01d2e4575ca81.js","bb410a844eb7218afe014af23d138db1"],["/js/20.b96abbe01d2e4575ca81.js","cc76558fb4172edb142be3a1e294e91c"],["/js/21.b96abbe01d2e4575ca81.js","48c77023ae05d4ed9111f2f0e6c7eece"],["/js/22.b96abbe01d2e4575ca81.js","f7a4abfd07357018fbacc40eda1d02d8"],["/js/23.b96abbe01d2e4575ca81.js","5d07f1065b7e4a17601a0dbdd608ed2a"],["/js/24.b96abbe01d2e4575ca81.js","d3df4cc6e24ba384435c9ed8456add4f"],["/js/25.b96abbe01d2e4575ca81.js","830f326f41205821fe87d79e038f6e90"],["/js/26.b96abbe01d2e4575ca81.js","0a82f411e3c466dfb3d582a5239ab30f"],["/js/27.b96abbe01d2e4575ca81.js","c2f208460776dd2b2180995047cf9082"],["/js/28.b96abbe01d2e4575ca81.js","b8ff01e6b8deccf8403544e80f5f94ee"],["/js/29.b96abbe01d2e4575ca81.js","a0c7bae571c88465f4172c17545d1adb"],["/js/3.b96abbe01d2e4575ca81.js","22f3f4fe018ccc94addcc42fdff4de4a"],["/js/30.b96abbe01d2e4575ca81.js","a5b4fa7d20c22972635b87465b6454ca"],["/js/31.b96abbe01d2e4575ca81.js","148b6a7e4a3c2c27d8e27151e55a1869"],["/js/32.b96abbe01d2e4575ca81.js","804b4f495415a41513127815976c0618"],["/js/33.b96abbe01d2e4575ca81.js","faa312909975199c294f1884e85f078e"],["/js/34.b96abbe01d2e4575ca81.js","d92d80ac3edfa8158e028fe918935007"],["/js/35.b96abbe01d2e4575ca81.js","7519baa2d60334e0f1c233e6b99fbfe1"],["/js/36.b96abbe01d2e4575ca81.js","687dc870d70d0f928ddbd944c0adb5c9"],["/js/37.b96abbe01d2e4575ca81.js","c963b7bf4c9bc2c4ee6ba5ee246d3eb4"],["/js/38.b96abbe01d2e4575ca81.js","a275bd6eb24e04304d28d803a4351ec8"],["/js/39.b96abbe01d2e4575ca81.js","bb2eaeece38281e65a87f37fdce61a5c"],["/js/4.b96abbe01d2e4575ca81.js","5ee2631e4ef9bf05b73f38de6b91e8be"],["/js/40.b96abbe01d2e4575ca81.js","bf62777f63eb9f6797df2a21d6aa4bec"],["/js/404.b96abbe01d2e4575ca81.js","48e33ac2ffb6b22c471be89d812ee536"],["/js/41.b96abbe01d2e4575ca81.js","b8448a89efbad5cfb7d5eceb8c966f15"],["/js/42.b96abbe01d2e4575ca81.js","fa08f80ae59093e1d121ecad14c1c242"],["/js/43.b96abbe01d2e4575ca81.js","caa2b33894b67be3ca2cf6c38587d8b2"],["/js/44.b96abbe01d2e4575ca81.js","e80a496cafc9faaa3f13dae802cd43ac"],["/js/45.b96abbe01d2e4575ca81.js","1321395e6d36537ec5c43b97709c6ad4"],["/js/46.b96abbe01d2e4575ca81.js","834578d449562239381da8fb26c8dd90"],["/js/47.b96abbe01d2e4575ca81.js","730414a67d0ab9e0b3fcd67c415ea962"],["/js/48.b96abbe01d2e4575ca81.js","ab1f2b3b9559be393e7b3318508e35cf"],["/js/49.b96abbe01d2e4575ca81.js","c591dd8997ad9aadc5fe53103f07a81b"],["/js/5.b96abbe01d2e4575ca81.js","2d185b3e659718ec311dc83373a8eb09"],["/js/50.b96abbe01d2e4575ca81.js","535d65c6a25a51f93b44f6f400aec6b8"],["/js/51.b96abbe01d2e4575ca81.js","454f02d3f125c23efe276a7c94ce0071"],["/js/52.b96abbe01d2e4575ca81.js","64a50cd4db2a7037942825e3d3846efc"],["/js/53.b96abbe01d2e4575ca81.js","37b889fcc1fabafe6d434a2e251320e2"],["/js/54.b96abbe01d2e4575ca81.js","75fe93403598b41672602243ac5b781d"],["/js/55.b96abbe01d2e4575ca81.js","a14cacf1730408701531a73f9a1eb896"],["/js/56.b96abbe01d2e4575ca81.js","b1375e4c13460c3aaa3c36f383da421e"],["/js/57.b96abbe01d2e4575ca81.js","c438df2333869b698694ef1caf4fe73d"],["/js/58.b96abbe01d2e4575ca81.js","60fe733b17a957252dfb0594c1b0562d"],["/js/59.b96abbe01d2e4575ca81.js","1b79ba15cd18eef96c19f35725055e68"],["/js/6.b96abbe01d2e4575ca81.js","bc4055b35170eb0e45207d6bd634a602"],["/js/60.b96abbe01d2e4575ca81.js","6d694a13119940ad69332ec2af931681"],["/js/61.b96abbe01d2e4575ca81.js","22ab00391c09e1afd598cc5ae7924256"],["/js/62.b96abbe01d2e4575ca81.js","ae46d6ffb6696a3d5d08bf7758421e85"],["/js/63.b96abbe01d2e4575ca81.js","6a8aed0590f6cfe61488f8119395bd45"],["/js/64.b96abbe01d2e4575ca81.js","09ffda1b15cac28b64961de9b61a7d05"],["/js/65.b96abbe01d2e4575ca81.js","94d8dac6c3ff7678d31f89aac5a4cdc3"],["/js/66.b96abbe01d2e4575ca81.js","5485ee63645a93bb112e146d1e989a17"],["/js/67.b96abbe01d2e4575ca81.js","1b0cc81f4cfd3484a643e655d4342e9f"],["/js/68.b96abbe01d2e4575ca81.js","12200a2e6bb437463f7ce74d447bdb84"],["/js/69.b96abbe01d2e4575ca81.js","904d95edf1d56659eb44da4e821825f7"],["/js/7.b96abbe01d2e4575ca81.js","0df5116f781732491afd563fa7211bf9"],["/js/70.b96abbe01d2e4575ca81.js","b13855b1b60432f5a69539fd0c5e222b"],["/js/8.b96abbe01d2e4575ca81.js","9511a173330c1e4b3c189ac9698c2cfb"],["/js/9.b96abbe01d2e4575ca81.js","63abc3a06bce8d375e1433b4f541b764"],["/js/account-info.b96abbe01d2e4575ca81.js","8100679dbb6d20faea1fd7d9751ede58"],["/js/contract.b96abbe01d2e4575ca81.js","00191754f9817a41264377e55efaae03"],["/js/default~open_position~1833eefb.b96abbe01d2e4575ca81.js","42c1ec71a5f81aee3587f2814a2038bb"],["/js/digits.b96abbe01d2e4575ca81.js","594215ff9b0937fe71c3261721726f1d"],["/js/info-box.b96abbe01d2e4575ca81.js","b1ab45fb2a9ceb9bb18afe286bd04709"],["/js/main.b96abbe01d2e4575ca81.js","b55f6e142a85e473fb3fc87523f69fae"],["/js/modals.b96abbe01d2e4575ca81.js","0b9f31497c5ee20af91cb68d0ec49507"],["/js/notification-messages.b96abbe01d2e4575ca81.js","38c7655b5f08ad3f8b2e43e8c1b7e349"],["/js/open_positions.b96abbe01d2e4575ca81.js","0045c7a80492af52efb99cdba61e4ee6"],["/js/profit_table.b96abbe01d2e4575ca81.js","3f5b0cccabe95006c105e85e934e01f3"],["/js/push-notification.b96abbe01d2e4575ca81.js","c27e3b60ab922b150dd33f528882e8ce"],["/js/reports.b96abbe01d2e4575ca81.js","b85b218a0f0ccac61ba2f9081913a766"],["/js/screen-small.b96abbe01d2e4575ca81.js","2d5b2945576bd7a4c74fb60a60515efa"],["/js/settings-chart.b96abbe01d2e4575ca81.js","d8911527f432d023895d9f6648fc8a1e"],["/js/settings-language.b96abbe01d2e4575ca81.js","25fec7fe4d4f9e62ef87383e0572f2eb"],["/js/settings-theme.b96abbe01d2e4575ca81.js","7051462dd4d9b9bacfd8d4d27cdcf5c1"],["/js/smart_chart.b96abbe01d2e4575ca81.js","ea121835b8a38c1cdcd17f3386cf25de"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.b96abbe01d2e4575ca81.js","156f0985ee80a49652a502135a1ba6fd"],["/js/toggle-menu-drawer.b96abbe01d2e4575ca81.js","4ec7404955d6985f5d47fb0d5a0e9726"],["/js/two-month-picker.b96abbe01d2e4575ca81.js","66c27d012bb484e02c33d1825e8903de"],["/js/vendors~main.b96abbe01d2e4575ca81.js","2acf2740306ffc98f43cc0bea24b55b3"],["/js/vendors~open_position~7c650be5.b96abbe01d2e4575ca81.js","fb274399468083ae997776e4ec3d7f66"],["/js/vendors~smart_chart.b96abbe01d2e4575ca81.js","74e4869c153294e4569acbc027c135da"],["/js/work-in-progress.b96abbe01d2e4575ca81.js","5f0fec6eec3100c5a5c34d74c85fbad7"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







