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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","4a11273fb884869734606519d698b76d"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","746745f640d719c952c449b89353cb09"],["/js/0.a444dbfe1c5a234ce5d0.js","9819a5960fcb71e624b48c36f6b27240"],["/js/1.a444dbfe1c5a234ce5d0.js","529d418fe9a5b6e9cc7a4e29114bab51"],["/js/10.a444dbfe1c5a234ce5d0.js","be07b0ba4572732a18bae2f36b21088b"],["/js/11.a444dbfe1c5a234ce5d0.js","a7a8cd1881b5c4e8635cfb812719eba6"],["/js/12.a444dbfe1c5a234ce5d0.js","b563ee5eeb109522cb770b1896fb31da"],["/js/13.a444dbfe1c5a234ce5d0.js","14b4b42c481f800382ba1005ea292404"],["/js/14.a444dbfe1c5a234ce5d0.js","b3c88512e16b54cd9e9faf2916f1eb62"],["/js/15.a444dbfe1c5a234ce5d0.js","36a8740221cd27a9b5506b4c2574db0d"],["/js/16.a444dbfe1c5a234ce5d0.js","4bf189a866cce6ae1c7cd944ccf4eb1c"],["/js/17.a444dbfe1c5a234ce5d0.js","b6a7da6b542d09d083633d0703277531"],["/js/18.a444dbfe1c5a234ce5d0.js","95a851fa7680eaa9fc57f7a9fcc8f906"],["/js/19.a444dbfe1c5a234ce5d0.js","b4bf96122b902970f541457030aad673"],["/js/2.a444dbfe1c5a234ce5d0.js","8814fb016eb2265517545aa3b7e30b65"],["/js/20.a444dbfe1c5a234ce5d0.js","8e79db676eedffaa6bccaedf82598134"],["/js/21.a444dbfe1c5a234ce5d0.js","43a8323fe2b1457e875c6fa87c5fc2b2"],["/js/22.a444dbfe1c5a234ce5d0.js","bd25bd3a78aa72dbb7f679f09074239f"],["/js/23.a444dbfe1c5a234ce5d0.js","07b861a13ee30e5b89bc7eafca5cb5c7"],["/js/24.a444dbfe1c5a234ce5d0.js","169c484f4ef51231f16057413654a8cb"],["/js/25.a444dbfe1c5a234ce5d0.js","c991a47eb329eeaf2ca6306abd96ebb8"],["/js/26.a444dbfe1c5a234ce5d0.js","d0bbbabaa0c6f869fc25d95980e50a97"],["/js/27.a444dbfe1c5a234ce5d0.js","ba15bd9528fc87ff52db66a5f2c36053"],["/js/28.a444dbfe1c5a234ce5d0.js","35b0f81883570bbdd8bca94554a9b4bc"],["/js/29.a444dbfe1c5a234ce5d0.js","5f35a5e16b6e40e2b322389d088f9a0f"],["/js/3.a444dbfe1c5a234ce5d0.js","103e43b0479c168883036eabb33e1c6f"],["/js/30.a444dbfe1c5a234ce5d0.js","1ebd6b38a31dfeac056ed3e78b210297"],["/js/31.a444dbfe1c5a234ce5d0.js","294b0fb1c4bd9292aaad6e515bd04eab"],["/js/32.a444dbfe1c5a234ce5d0.js","a1bea8869f20251afc0af5bf4bed1076"],["/js/33.a444dbfe1c5a234ce5d0.js","75ffdd72186612135f49317cdbc79906"],["/js/34.a444dbfe1c5a234ce5d0.js","b33ed3ff8c0b72c94acec87bb14399f1"],["/js/35.a444dbfe1c5a234ce5d0.js","fc17b4dd71991d442954c70b569c7475"],["/js/36.a444dbfe1c5a234ce5d0.js","4690f7f684c66e3cae66ab2e0eb175dd"],["/js/37.a444dbfe1c5a234ce5d0.js","8f8543a6eda118ddcbc9a4dc354c5655"],["/js/38.a444dbfe1c5a234ce5d0.js","99d9fadb24e35af8aacaa31ea321c863"],["/js/39.a444dbfe1c5a234ce5d0.js","c7a937ab49262486b852a421c2962011"],["/js/4.a444dbfe1c5a234ce5d0.js","c59e6cc051bf423ffb4f2f09619dda03"],["/js/40.a444dbfe1c5a234ce5d0.js","6698a7ef1c575827bdecd3c18282e1e5"],["/js/404.a444dbfe1c5a234ce5d0.js","b4912e3fe896a732016579a4b1f6fb15"],["/js/41.a444dbfe1c5a234ce5d0.js","7af16732ff560d4dfcac9adf59a1e5bd"],["/js/42.a444dbfe1c5a234ce5d0.js","c521df5bf45a7f5c872a2206e9878d47"],["/js/43.a444dbfe1c5a234ce5d0.js","340574cdddb1fa578cb50eb4fbb23684"],["/js/44.a444dbfe1c5a234ce5d0.js","d1711597ed223b5258888a4e0da1d22b"],["/js/45.a444dbfe1c5a234ce5d0.js","4d40eeb638b757ef98b41c0704decfae"],["/js/46.a444dbfe1c5a234ce5d0.js","c9b4d38b5c60d0d00e0b14aa99cf2272"],["/js/47.a444dbfe1c5a234ce5d0.js","a4ab0800bd7a472b1351c13754cf590f"],["/js/48.a444dbfe1c5a234ce5d0.js","162e5908ed52f5ac6435caad05eee345"],["/js/49.a444dbfe1c5a234ce5d0.js","16d1ec6ce8dff38de1a25aae6f5422e0"],["/js/5.a444dbfe1c5a234ce5d0.js","19a4340d2de497cc3ef1723d83452f7e"],["/js/50.a444dbfe1c5a234ce5d0.js","d0719751d5500e4b8608b559c63c94c6"],["/js/51.a444dbfe1c5a234ce5d0.js","4e84fb7b6f275084fe9390e916d4ce0f"],["/js/52.a444dbfe1c5a234ce5d0.js","d7557b33becdaf5dc6805e61d2b3f673"],["/js/53.a444dbfe1c5a234ce5d0.js","51eaf7410202d945e6ae05eb520ea0c1"],["/js/54.a444dbfe1c5a234ce5d0.js","d08343ec9dbe2e22fa3fd68ae094ba8e"],["/js/55.a444dbfe1c5a234ce5d0.js","b800b22f863f7ca3f59e0c24493f959a"],["/js/56.a444dbfe1c5a234ce5d0.js","e8380dc9607b33c6c68069e13a0fac74"],["/js/57.a444dbfe1c5a234ce5d0.js","c676aa2f9a0f2485b3b7415f110e14fa"],["/js/58.a444dbfe1c5a234ce5d0.js","b068c9126c6bb0859e230d31a7b7b377"],["/js/59.a444dbfe1c5a234ce5d0.js","817e01ba6318e1f51473ac50189c0d3a"],["/js/6.a444dbfe1c5a234ce5d0.js","b8c106f62c29f783846d1d43a8842219"],["/js/60.a444dbfe1c5a234ce5d0.js","ca46c18313f1ef5995b4bc5af6da0dcf"],["/js/61.a444dbfe1c5a234ce5d0.js","076ac1c56cf223d06131acef5b3f27dc"],["/js/62.a444dbfe1c5a234ce5d0.js","9e987d1a80e3fe6d2534578295e0cda9"],["/js/63.a444dbfe1c5a234ce5d0.js","8835b7227e32e5046dcd631b336b7fac"],["/js/64.a444dbfe1c5a234ce5d0.js","d8b0867e2bc53dad87854230c5f8b367"],["/js/65.a444dbfe1c5a234ce5d0.js","774a1f0feda05c4fc89f615981dadc23"],["/js/66.a444dbfe1c5a234ce5d0.js","591488118b41322b19b1d47b2bfcd025"],["/js/67.a444dbfe1c5a234ce5d0.js","f541dda1ebb84626816b418f62575f39"],["/js/68.a444dbfe1c5a234ce5d0.js","c2de403516e9eaec96f39da7f9d248f8"],["/js/69.a444dbfe1c5a234ce5d0.js","4494333077086e582ca6a087dd3313e1"],["/js/7.a444dbfe1c5a234ce5d0.js","38789aaeb37e22d1d6f3a10d9abaa4e9"],["/js/70.a444dbfe1c5a234ce5d0.js","cc0b65e772c1840e0015af19b8ff14eb"],["/js/71.a444dbfe1c5a234ce5d0.js","7b5df356d13ea6fb1880bee93f55ecb6"],["/js/8.a444dbfe1c5a234ce5d0.js","f8fe874c38e50ff7bfea36c4f0256fa8"],["/js/9.a444dbfe1c5a234ce5d0.js","978dea98371c2eb9f993be147f6378dc"],["/js/account-info.a444dbfe1c5a234ce5d0.js","e5935b4b915d0d89a8e889ed9d34dfba"],["/js/contract.a444dbfe1c5a234ce5d0.js","69c1b9ad22d1bc09869b5ae9e480160b"],["/js/default~open_position~1833eefb.a444dbfe1c5a234ce5d0.js","3ac87d221d994bc846b0ffc52236c839"],["/js/digits.a444dbfe1c5a234ce5d0.js","9dcffa6a7bc9c15b225e5ab696c64f37"],["/js/info-box.a444dbfe1c5a234ce5d0.js","032b5af4127b6993e00834b8e354922e"],["/js/main.a444dbfe1c5a234ce5d0.js","fa7b3da0ea0967af129ccc8728f14c36"],["/js/modals.a444dbfe1c5a234ce5d0.js","2bfac49d5b984eff569b3603ef5708d8"],["/js/notification-messages.a444dbfe1c5a234ce5d0.js","dfe5aea18354a00d44b374c4acb45ab7"],["/js/open_positions.a444dbfe1c5a234ce5d0.js","4a04071abb930f8a34c5a4126586d5a9"],["/js/profit_table.a444dbfe1c5a234ce5d0.js","34915eaac369ecdd69c03e95dd3ebdc5"],["/js/push-notification.a444dbfe1c5a234ce5d0.js","cdbf0f36d247bfe429e99a214c60c971"],["/js/reports.a444dbfe1c5a234ce5d0.js","ae4a793fd8a74d61c14cdfd31aec430e"],["/js/screen-small.a444dbfe1c5a234ce5d0.js","0dc8118154d5f7ca51a2dd5976caf4f7"],["/js/settings-chart.a444dbfe1c5a234ce5d0.js","432cb31c7daafb228eba949362bec359"],["/js/settings-language.a444dbfe1c5a234ce5d0.js","f6597af3824e0a106afa2fdc4dd7dc34"],["/js/settings-theme.a444dbfe1c5a234ce5d0.js","50ee16f9bc35d1aa23cbabcad1b94918"],["/js/smart_chart.a444dbfe1c5a234ce5d0.js","2b783226e5be7ca1128d9d298ddb5771"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.a444dbfe1c5a234ce5d0.js","ffd1e70f9b993487fca197e25a24d773"],["/js/toggle-menu-drawer.a444dbfe1c5a234ce5d0.js","7280e9d7e4a5d11420371a86c00dbef9"],["/js/two-month-picker.a444dbfe1c5a234ce5d0.js","40808b8f1ca1abdedce55db8e300e0f4"],["/js/vendors~main.a444dbfe1c5a234ce5d0.js","82c2a5e3f619b49c7da4826bfec0c6d8"],["/js/vendors~open_position~7c650be5.a444dbfe1c5a234ce5d0.js","75e19b6afc9e6a6097ad84b0e2af9a86"],["/js/vendors~smart_chart.a444dbfe1c5a234ce5d0.js","37176175298014b36a6c7a8ca825f2d3"],["/js/work-in-progress.a444dbfe1c5a234ce5d0.js","5f35db149888bc7a0bf07c7858df2b67"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







