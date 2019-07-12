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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","b753210c8f74cf6020bbc29864d582da"],["/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","106ae12a2f80074f6654a7d03c644c93"],["/js/0.0ec6c4f98eff0a8d734d.js","0020213f3612cf61db64098dc2d1142c"],["/js/1.0ec6c4f98eff0a8d734d.js","95bb9d88d7b1ff047290af29ca898c78"],["/js/10.0ec6c4f98eff0a8d734d.js","0e357120a8f06ba37ccb1f5e7fb9948a"],["/js/11.0ec6c4f98eff0a8d734d.js","6e1d5d8569e0c1ecb530c624aaf71194"],["/js/12.0ec6c4f98eff0a8d734d.js","bd3a77c7273bb967d2d76e556e16574b"],["/js/13.0ec6c4f98eff0a8d734d.js","3da03d9519b7c24e136767867fc69e17"],["/js/14.0ec6c4f98eff0a8d734d.js","ad6cd8e301a9fcd6b6b2445152ad783f"],["/js/15.0ec6c4f98eff0a8d734d.js","52fd854025e2247b1910a526213845b1"],["/js/16.0ec6c4f98eff0a8d734d.js","bab0a9d09565c714207361e6e29a5005"],["/js/17.0ec6c4f98eff0a8d734d.js","082e71bb3b89ae669dc73b2b01430849"],["/js/18.0ec6c4f98eff0a8d734d.js","e428b6df5b8e7b91fc93580c930c659b"],["/js/19.0ec6c4f98eff0a8d734d.js","ff717d4b0c24291c204a6eab3190dcab"],["/js/2.0ec6c4f98eff0a8d734d.js","ac98ee1ecd19176937eb27768e74a21a"],["/js/20.0ec6c4f98eff0a8d734d.js","ff27581331f40f4a7ee438970e99db3f"],["/js/21.0ec6c4f98eff0a8d734d.js","7ad354d973bfcc62e38a0afae3375add"],["/js/22.0ec6c4f98eff0a8d734d.js","ee7c7923fbc998a84d4e50160249e897"],["/js/23.0ec6c4f98eff0a8d734d.js","07e2c9c3682fafcec7ce2692cac73ebf"],["/js/24.0ec6c4f98eff0a8d734d.js","38c8d10b9315711ea15213357aa33635"],["/js/25.0ec6c4f98eff0a8d734d.js","bb5b688dcd3422332ac8e60bc0c64a49"],["/js/26.0ec6c4f98eff0a8d734d.js","b8c13bfebb2404db84808c74fc843acb"],["/js/27.0ec6c4f98eff0a8d734d.js","01ce6b4dd88f98892f14b1bca5078f3a"],["/js/28.0ec6c4f98eff0a8d734d.js","25382b1a257afb266c3d2c8a70f8c193"],["/js/29.0ec6c4f98eff0a8d734d.js","ed450d2b6f24c34a23df09727cebbaf0"],["/js/3.0ec6c4f98eff0a8d734d.js","2bb0a2e590115d19827f45b496f3f34c"],["/js/30.0ec6c4f98eff0a8d734d.js","021feaa6a54629cd4208f9f8fa4fda86"],["/js/31.0ec6c4f98eff0a8d734d.js","9c4565219429a074a5e765a2cefa5987"],["/js/32.0ec6c4f98eff0a8d734d.js","90f1ba6a2423fe57393c489ba37a70f2"],["/js/33.0ec6c4f98eff0a8d734d.js","ba1b6c6f22a82539df04d297aa1913df"],["/js/34.0ec6c4f98eff0a8d734d.js","f4f1959b1715941b9c1199eedd18e9e8"],["/js/35.0ec6c4f98eff0a8d734d.js","45edfb0c4834d285113014b6168c89e2"],["/js/36.0ec6c4f98eff0a8d734d.js","9865e2a2e8e97bcfaf97142cc31bf8b9"],["/js/37.0ec6c4f98eff0a8d734d.js","aadbcab819a0b374f47bd60b02b0c7d3"],["/js/38.0ec6c4f98eff0a8d734d.js","5a59710cedf78ed1a03e51b4c1d49400"],["/js/39.0ec6c4f98eff0a8d734d.js","019de73c49b1471a78690b6495e2461f"],["/js/4.0ec6c4f98eff0a8d734d.js","69fa503b59398ead64033decd2a2f414"],["/js/40.0ec6c4f98eff0a8d734d.js","df143e59d91fcfd2a02050669fc3acd7"],["/js/404.0ec6c4f98eff0a8d734d.js","daa5d9f75f33e27913b7ec4d1fa6c514"],["/js/41.0ec6c4f98eff0a8d734d.js","99b82ccd704b051da4d4f58d2b7933ba"],["/js/42.0ec6c4f98eff0a8d734d.js","15a8175d688395e7abdfd36a2a3d74e7"],["/js/43.0ec6c4f98eff0a8d734d.js","979b4c828d3c63b8b95d381c9f5321df"],["/js/44.0ec6c4f98eff0a8d734d.js","150c4eeb97c15cfd652d89b24082772f"],["/js/45.0ec6c4f98eff0a8d734d.js","d8b9336210d1dbca9e3e430e4af6dd70"],["/js/46.0ec6c4f98eff0a8d734d.js","ab261c02cd0d244cdb3bc1ba141e33e7"],["/js/47.0ec6c4f98eff0a8d734d.js","462d42d34327186c2e3ed71e74854eac"],["/js/48.0ec6c4f98eff0a8d734d.js","ebb3860c7b96cd2cfa6b78bdc085dd7a"],["/js/49.0ec6c4f98eff0a8d734d.js","672e974ba6d22639d344d305abf033a7"],["/js/5.0ec6c4f98eff0a8d734d.js","46f8d3eb5783e4f31f67b0c1d5fc5486"],["/js/50.0ec6c4f98eff0a8d734d.js","8b1bec69132dcf610d70f29263040d9d"],["/js/51.0ec6c4f98eff0a8d734d.js","5c7583157c73e0b18347350174581984"],["/js/52.0ec6c4f98eff0a8d734d.js","c2fa0f672649b7c76d57997687ed5962"],["/js/53.0ec6c4f98eff0a8d734d.js","9e0b750e7bdb857592375d00acd8c62d"],["/js/54.0ec6c4f98eff0a8d734d.js","17a4455f72d5833d7f52b53237e26b81"],["/js/55.0ec6c4f98eff0a8d734d.js","a2c9883405ecb8d55ef5b1bd8613f8d3"],["/js/56.0ec6c4f98eff0a8d734d.js","7707431f877b78ca6ac07a852c6592cc"],["/js/57.0ec6c4f98eff0a8d734d.js","173377f01563db1eabadea0d2e57ee18"],["/js/58.0ec6c4f98eff0a8d734d.js","ee6045e08e8b0595383eb37572852c48"],["/js/59.0ec6c4f98eff0a8d734d.js","99436523014a473551c1c0875ff4c3cd"],["/js/6.0ec6c4f98eff0a8d734d.js","cd6a007a4652cff32140ade4a6b0efc6"],["/js/60.0ec6c4f98eff0a8d734d.js","ec5d46d64cf72b601794699a1112c832"],["/js/61.0ec6c4f98eff0a8d734d.js","2a4b2815d876eabc814ca2fd5269638c"],["/js/62.0ec6c4f98eff0a8d734d.js","4e65b01f03089320ac867a8280dc1b21"],["/js/63.0ec6c4f98eff0a8d734d.js","712ccc9246bd0105f210e8da7fc78018"],["/js/64.0ec6c4f98eff0a8d734d.js","a431c08e1f59d1d52ea2d0fc22d9d867"],["/js/65.0ec6c4f98eff0a8d734d.js","eb222fe367f4474a45d29ed8ef2e3f82"],["/js/66.0ec6c4f98eff0a8d734d.js","ccab322ac68d2737a478e625d7e323eb"],["/js/67.0ec6c4f98eff0a8d734d.js","4d39aded1dd476865160c3ca1477741d"],["/js/68.0ec6c4f98eff0a8d734d.js","ac2b6fe1d473dba4d115cd577927dedf"],["/js/69.0ec6c4f98eff0a8d734d.js","06988c518f7bdac48beac33e531dc587"],["/js/7.0ec6c4f98eff0a8d734d.js","11cbdea12098b47e1aef1888b3876a4c"],["/js/8.0ec6c4f98eff0a8d734d.js","9981079aa281b209e95924e8c5031961"],["/js/9.0ec6c4f98eff0a8d734d.js","be6a9aebb9ebe8591117c471809aa253"],["/js/contract.0ec6c4f98eff0a8d734d.js","63f328688aef6fbcba5e5f335866c23f"],["/js/main.0ec6c4f98eff0a8d734d.js","61c874900232062a63033c518296297b"],["/js/open_positions.0ec6c4f98eff0a8d734d.js","db170a04a76f111039396b59da4c5a79"],["/js/open_positions~profit_table~statement.0ec6c4f98eff0a8d734d.js","85bf812da2f22b8eb5fdc0307c5b9cc4"],["/js/profit_table.0ec6c4f98eff0a8d734d.js","769c259b84daa868687f46a1cc0e4255"],["/js/reports.0ec6c4f98eff0a8d734d.js","8bb0627f5b448bce6186ea0aa1987b57"],["/js/smart_chart.0ec6c4f98eff0a8d734d.js","2c4ee87400cd458b1d636d10b9954879"],["/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/js/statement.0ec6c4f98eff0a8d734d.js","200f48b2607630435a3afbf054be7c37"],["/js/vendors~open_positions~profit_table~statement.0ec6c4f98eff0a8d734d.js","cc1a741af5083a523706c3f55433af15"],["/js/vendors~smart_chart.0ec6c4f98eff0a8d734d.js","7c02ae9a8617a029ebb13bbe614f7c60"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







