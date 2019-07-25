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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","ef11d603f054c937b998e00df46a3549"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","7973f6ed0229dde521b7f5ed87d19d3e"],["/js/0.fe7cddd80ebd2f7eaecf.js","b6d842a954cf758c1427387b3ce455ce"],["/js/1.fe7cddd80ebd2f7eaecf.js","749dd8021400f433b7062bcc97435ad5"],["/js/10.fe7cddd80ebd2f7eaecf.js","955b24a65fc02b2ebe6857014d40ee43"],["/js/11.fe7cddd80ebd2f7eaecf.js","1fc2f2024198c2e7426fd41a85b6f2fd"],["/js/12.fe7cddd80ebd2f7eaecf.js","54314f21570927d8b123ebfc97630e75"],["/js/13.fe7cddd80ebd2f7eaecf.js","1b28ee548b35e4cdb98eda1f0b70b1bf"],["/js/14.fe7cddd80ebd2f7eaecf.js","23dfb3a3bff0ea3d153e3f1a62e0efe3"],["/js/15.fe7cddd80ebd2f7eaecf.js","67683fbcf88c7c6bcea5d9a12cef5338"],["/js/16.fe7cddd80ebd2f7eaecf.js","5c9c1fea798578aae6ff464dffb918b2"],["/js/17.fe7cddd80ebd2f7eaecf.js","22393e3e819548f1b943061a6a66bf48"],["/js/18.fe7cddd80ebd2f7eaecf.js","ef73f4e59ee2653882285a4ec829706f"],["/js/19.fe7cddd80ebd2f7eaecf.js","82f6c8f3f8acf0c1492ca8a4021772b7"],["/js/2.fe7cddd80ebd2f7eaecf.js","a1c50eebbb3ad47900e53f3f509cbc94"],["/js/20.fe7cddd80ebd2f7eaecf.js","7a0f7018f21f0688b1a6eaafb7b7ef08"],["/js/21.fe7cddd80ebd2f7eaecf.js","97f60b91df4de38f6b0e9dd88ed66fb5"],["/js/22.fe7cddd80ebd2f7eaecf.js","0455bd25187d98ec132d1f0003f2cd95"],["/js/23.fe7cddd80ebd2f7eaecf.js","a60de1e54d18ac7e059c10f4fb1614bf"],["/js/24.fe7cddd80ebd2f7eaecf.js","b0a1f32064d71cecbdc0dce748af9770"],["/js/25.fe7cddd80ebd2f7eaecf.js","0488916303ec716c88c02b5d785a340a"],["/js/26.fe7cddd80ebd2f7eaecf.js","8b072732f11e62060a5de6e92981a7bb"],["/js/27.fe7cddd80ebd2f7eaecf.js","5b506b849ffb5d5756936999b4b0ae46"],["/js/28.fe7cddd80ebd2f7eaecf.js","ac7a8ce0b0beae1c845118192d108069"],["/js/29.fe7cddd80ebd2f7eaecf.js","f99286e70ab57e6c328936556cfea3f5"],["/js/3.fe7cddd80ebd2f7eaecf.js","c4d44439c147588bc84f042581219705"],["/js/30.fe7cddd80ebd2f7eaecf.js","e6469e6020b8c2811cea430e5eeae1d3"],["/js/31.fe7cddd80ebd2f7eaecf.js","e6d29cf619acf1052884ced25f74ca73"],["/js/32.fe7cddd80ebd2f7eaecf.js","1f9d1a5adbe7f351645d80454cf1bbfd"],["/js/33.fe7cddd80ebd2f7eaecf.js","7c943a8dafad5c957a8fc7c5b2fa51c0"],["/js/34.fe7cddd80ebd2f7eaecf.js","5a67251e1048f0377c4c50f8d0502cfc"],["/js/35.fe7cddd80ebd2f7eaecf.js","e441a0dfa7b7ae2ada8a73b65572513d"],["/js/36.fe7cddd80ebd2f7eaecf.js","ebdc79a89c66222e0da8821f648fb1fd"],["/js/37.fe7cddd80ebd2f7eaecf.js","c81f02fb75405cc917bc6c41192cf146"],["/js/38.fe7cddd80ebd2f7eaecf.js","8fda527bab48efe29c1f2fdc7da41c0e"],["/js/39.fe7cddd80ebd2f7eaecf.js","c0828776a5e95d08a69dfd9963dcc0c2"],["/js/4.fe7cddd80ebd2f7eaecf.js","dc62898e304ef504f7980220ebb2f122"],["/js/40.fe7cddd80ebd2f7eaecf.js","7a213f209d177884b89f159b776b9a51"],["/js/404.fe7cddd80ebd2f7eaecf.js","d166efdb37ebe2d8c6f259d74cd39eb8"],["/js/41.fe7cddd80ebd2f7eaecf.js","4ec3725396f9502d4c970e5adeebcefd"],["/js/42.fe7cddd80ebd2f7eaecf.js","de23ae395c845bc76535de93a82e58fd"],["/js/43.fe7cddd80ebd2f7eaecf.js","12cebbdb6a826f58b7f10e2c60304b49"],["/js/44.fe7cddd80ebd2f7eaecf.js","06c5e96be5d814d4a72a372c7cb9c502"],["/js/45.fe7cddd80ebd2f7eaecf.js","df4846d86af83ec394ac64fcb5bd368e"],["/js/46.fe7cddd80ebd2f7eaecf.js","c0d84930d8f162affb1c7d7acd7b2169"],["/js/47.fe7cddd80ebd2f7eaecf.js","999c75caf32a7cf64f8c551b2fb50a75"],["/js/48.fe7cddd80ebd2f7eaecf.js","d175baea10c3c2984d4e274c4f3f2dd4"],["/js/49.fe7cddd80ebd2f7eaecf.js","d39b7414bcf27973759c031f987d06e2"],["/js/5.fe7cddd80ebd2f7eaecf.js","bc53b47d19b07a6bd978b3ff5820805c"],["/js/50.fe7cddd80ebd2f7eaecf.js","4fa20ccce78e008570ca75d1e11451c8"],["/js/51.fe7cddd80ebd2f7eaecf.js","cd3d17f1e5847e52ba704d5bbbdfd45f"],["/js/52.fe7cddd80ebd2f7eaecf.js","26d5a70ec404d61a3f7abe3e5534a4b0"],["/js/53.fe7cddd80ebd2f7eaecf.js","163adcab29a8a8c538e3efa549f5666e"],["/js/54.fe7cddd80ebd2f7eaecf.js","ba1a62965db8157abbf52d6e8eed1ef1"],["/js/55.fe7cddd80ebd2f7eaecf.js","791cd6807be99279072bd087c728a913"],["/js/56.fe7cddd80ebd2f7eaecf.js","86b90a1d9212e97696d60dbf9edde010"],["/js/57.fe7cddd80ebd2f7eaecf.js","6cf9cbb2c6c0f095a01969f91252459c"],["/js/58.fe7cddd80ebd2f7eaecf.js","fb71e7a77f638251e5d767e929fac071"],["/js/59.fe7cddd80ebd2f7eaecf.js","5d80f2a446d96b1673f62a02940f5172"],["/js/6.fe7cddd80ebd2f7eaecf.js","df8c8d4501e29f080e797b50572b9678"],["/js/60.fe7cddd80ebd2f7eaecf.js","adc22e0d83b7f010556cd97526cae662"],["/js/61.fe7cddd80ebd2f7eaecf.js","dc23abe9a07d0baa4bab7289110ccbd3"],["/js/62.fe7cddd80ebd2f7eaecf.js","1cf84ac79b45e8340579a03d8f5b25f7"],["/js/63.fe7cddd80ebd2f7eaecf.js","0a8b9f3ef3eb123fb382efffa2e19f2c"],["/js/64.fe7cddd80ebd2f7eaecf.js","61e4b6416f1e943f14ac1b3fe5b0aa58"],["/js/65.fe7cddd80ebd2f7eaecf.js","3f0a1cb6f48ef1d791d34a093a73fbb5"],["/js/66.fe7cddd80ebd2f7eaecf.js","c1d51e23170e50218aac09336908559e"],["/js/67.fe7cddd80ebd2f7eaecf.js","eff96f7f9c1b90597ae998b826b401f4"],["/js/68.fe7cddd80ebd2f7eaecf.js","95ec4109ce66b8f7286fddc83f1c9c51"],["/js/69.fe7cddd80ebd2f7eaecf.js","0853e69fd6aa86cf32133e5cd9f8f38e"],["/js/7.fe7cddd80ebd2f7eaecf.js","ec6aaa9fe55ce3412a04ae9821c19351"],["/js/70.fe7cddd80ebd2f7eaecf.js","4de73a0648183b99c621635b6265ecb9"],["/js/71.fe7cddd80ebd2f7eaecf.js","4f8ce96d9380e1f52065e49bb4163585"],["/js/8.fe7cddd80ebd2f7eaecf.js","93ffd824ab58c15ed793ad0e0ed25882"],["/js/9.fe7cddd80ebd2f7eaecf.js","947fbc02e41cdc8fe423904ea08409ba"],["/js/contract.fe7cddd80ebd2f7eaecf.js","94c4233128f7442492773f79665e4030"],["/js/main.fe7cddd80ebd2f7eaecf.js","805bef352d50c0a128f2beed5017ab3b"],["/js/open_positions.fe7cddd80ebd2f7eaecf.js","785f49c1790ede7f776341423177e231"],["/js/open_positions~profit_table~statement.fe7cddd80ebd2f7eaecf.js","ae8128f5f017d88bdcc332556ee3ccd5"],["/js/profit_table.fe7cddd80ebd2f7eaecf.js","1b8958200f96e83b003aa3fb5ab583e1"],["/js/reports.fe7cddd80ebd2f7eaecf.js","d2bd75ab806613b4b64fe91d4d39cc7f"],["/js/smart_chart.fe7cddd80ebd2f7eaecf.js","1923163a9c7a3b0c4698298de2ce9013"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.fe7cddd80ebd2f7eaecf.js","4908834f78ffac006c157dfef338bbb2"],["/js/vendors~open_positions~profit_table~statement.fe7cddd80ebd2f7eaecf.js","ff83382a9b1a1a862488aca747b4c3b4"],["/js/vendors~smart_chart.fe7cddd80ebd2f7eaecf.js","87edf299c2368fa6b36cd0a575bdea72"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







