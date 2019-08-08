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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","dcd7e29b5cd2c8365594ad88bdbc5a2c"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","e8cd992c74276ff6e76019af3f2298c6"],["/js/0.cdc42d8f560571f8f25e.js","426416119ad9210fa7f560b52dd12703"],["/js/1.cdc42d8f560571f8f25e.js","c0b32584a65c715affadd280f5d6b44c"],["/js/10.cdc42d8f560571f8f25e.js","d1a2e27de5f7c8e9248682442ba5c6bf"],["/js/11.cdc42d8f560571f8f25e.js","c5249759b0aa7409854ef50e51826a66"],["/js/12.cdc42d8f560571f8f25e.js","2a0375a74d301402c2a48a12693f6a0d"],["/js/13.cdc42d8f560571f8f25e.js","09ab23970ed807bf445d92a90a2ba22a"],["/js/14.cdc42d8f560571f8f25e.js","e53e5a8053818ef0c79ea704943ae394"],["/js/15.cdc42d8f560571f8f25e.js","a1630f32d60a045ede5bedfeb29bf97a"],["/js/16.cdc42d8f560571f8f25e.js","77f1b21fe9d49c70986ad55341323817"],["/js/17.cdc42d8f560571f8f25e.js","ea0c5984c83918358cbd233549849473"],["/js/18.cdc42d8f560571f8f25e.js","2f07e4376c9bd7f759b632d950079a50"],["/js/19.cdc42d8f560571f8f25e.js","faa8a472009a34a54771d49685261539"],["/js/2.cdc42d8f560571f8f25e.js","3cccac9a5b17777cd408bbcc5f5f7b30"],["/js/20.cdc42d8f560571f8f25e.js","75bd476b9a3855012976abbd3701191a"],["/js/21.cdc42d8f560571f8f25e.js","99c858cdf3dd32bbf354a5b25fbb9022"],["/js/22.cdc42d8f560571f8f25e.js","718b48e7888f6f4dc8e7805e7acedd2d"],["/js/23.cdc42d8f560571f8f25e.js","ec03e612c45ebaa19be47e0436984d1f"],["/js/24.cdc42d8f560571f8f25e.js","4a4711892195cea36ba8a536dc70e229"],["/js/25.cdc42d8f560571f8f25e.js","737a3af6a5f830c5e16da4800e565c16"],["/js/26.cdc42d8f560571f8f25e.js","f47b61287aa0ffee2fec7426faa47fe9"],["/js/27.cdc42d8f560571f8f25e.js","96ee5dd5a741cff0013cfd92c36f1743"],["/js/28.cdc42d8f560571f8f25e.js","6a414fcdf7201cbe534230f5ede50024"],["/js/29.cdc42d8f560571f8f25e.js","591630485cea530b0e9e3498a7d9e8ff"],["/js/3.cdc42d8f560571f8f25e.js","30f22cf631281527bcc64a5f17ed6087"],["/js/30.cdc42d8f560571f8f25e.js","16cf50c678858e59243669b144650497"],["/js/31.cdc42d8f560571f8f25e.js","f6252b4807c2fafed82ce6a9859137e8"],["/js/32.cdc42d8f560571f8f25e.js","a29bf317b0966697bd4d198b03ad9abe"],["/js/33.cdc42d8f560571f8f25e.js","fb4562c9a31eaea21af3827b55ac26fd"],["/js/34.cdc42d8f560571f8f25e.js","e57ccebbacc69f83b324d68a31a94e21"],["/js/35.cdc42d8f560571f8f25e.js","13f89dad4709148c677f61dc4d885494"],["/js/36.cdc42d8f560571f8f25e.js","7facf5deeed125a755f55afe68863a77"],["/js/37.cdc42d8f560571f8f25e.js","17b86d4a80ed53f5a1b48de3ab13fda7"],["/js/38.cdc42d8f560571f8f25e.js","39a28a2b029ae35159ccb15d13a5a0cd"],["/js/39.cdc42d8f560571f8f25e.js","083419630dd0a685e5d00fb5e3b468a6"],["/js/4.cdc42d8f560571f8f25e.js","ed7c719e1b1dd06177906fa8daf87083"],["/js/40.cdc42d8f560571f8f25e.js","4bc891a11796e7c42ea2020d7c131ab6"],["/js/404.cdc42d8f560571f8f25e.js","a026f5abaf1f890a4e7a158c4f93ba1e"],["/js/41.cdc42d8f560571f8f25e.js","1c4b980a0fb65e6b91413eb1d5130e34"],["/js/42.cdc42d8f560571f8f25e.js","dc6e4e911d6919d690a84efa170b6922"],["/js/43.cdc42d8f560571f8f25e.js","06c913c8646bb7952b4e2b2e29ca9715"],["/js/44.cdc42d8f560571f8f25e.js","1da993ceaadddb1bb67a2fab07217157"],["/js/45.cdc42d8f560571f8f25e.js","0ff21993ed95030287a1795516ef8c87"],["/js/46.cdc42d8f560571f8f25e.js","6ae11217447f6322ebbbe1ff11117818"],["/js/47.cdc42d8f560571f8f25e.js","716bed34d716e12714dabe5a588a8f1c"],["/js/48.cdc42d8f560571f8f25e.js","9a69391882e18156f560f8861f9ca3fa"],["/js/49.cdc42d8f560571f8f25e.js","d2a7ea1686ee123adaa4cbc91877f7bc"],["/js/5.cdc42d8f560571f8f25e.js","efe259487a5b4cfb5733e36791b76b99"],["/js/50.cdc42d8f560571f8f25e.js","7ae5f641d24a21a5d71461f005d8a9c5"],["/js/51.cdc42d8f560571f8f25e.js","e66596af53f8bd5ddd3edebc6ddc9194"],["/js/52.cdc42d8f560571f8f25e.js","2aad0c9e61a773ad0c3d4b8f04a8e2b2"],["/js/53.cdc42d8f560571f8f25e.js","86f2512b317b2e0706fb8f599c18e17d"],["/js/54.cdc42d8f560571f8f25e.js","05bb1b98e772ae88b47b3b37d6ff5608"],["/js/55.cdc42d8f560571f8f25e.js","67c4a68bf3d68fffa6c83eecdbd11dc4"],["/js/56.cdc42d8f560571f8f25e.js","209bacbd073b36180908b7a668c8e627"],["/js/57.cdc42d8f560571f8f25e.js","f38f706b836eb01a2bca6d48318e8a7b"],["/js/58.cdc42d8f560571f8f25e.js","f1b7fc96491d740c1d7a1cd4907fe6e3"],["/js/59.cdc42d8f560571f8f25e.js","16d1cee05f9ecd105e4811c5b0fe3d5d"],["/js/6.cdc42d8f560571f8f25e.js","5c3698b9041dab3e178946e6cb1c4df9"],["/js/60.cdc42d8f560571f8f25e.js","dc2ce027444013c3bcc366d1fd685f88"],["/js/61.cdc42d8f560571f8f25e.js","d40542cd3588b094767388d1fecc353c"],["/js/62.cdc42d8f560571f8f25e.js","98088a341e6cec0cce7a6780dd9c9624"],["/js/63.cdc42d8f560571f8f25e.js","40fb7bc3721c3e143e3ad2c170fed18b"],["/js/64.cdc42d8f560571f8f25e.js","b7f13b975f378d3b79635266434c867c"],["/js/65.cdc42d8f560571f8f25e.js","087df1bf34e47b27215e86b5c41d7e41"],["/js/66.cdc42d8f560571f8f25e.js","0868ad2f5b69646e271aab3e92948a15"],["/js/67.cdc42d8f560571f8f25e.js","af60d9162fbb7e976b7d262bead5a145"],["/js/68.cdc42d8f560571f8f25e.js","875fc142c3270fe80cde2eb79c33a855"],["/js/69.cdc42d8f560571f8f25e.js","98dcaece362611dca57f51f1d6862764"],["/js/7.cdc42d8f560571f8f25e.js","abd44b28ca74885e1d7a9bc83b141807"],["/js/70.cdc42d8f560571f8f25e.js","dbecd1eaf9a098bb603d5ce424f0c650"],["/js/71.cdc42d8f560571f8f25e.js","1830af488ef0c714553e7c18898915d6"],["/js/8.cdc42d8f560571f8f25e.js","77db08882070adeb4d1294e105e589cd"],["/js/9.cdc42d8f560571f8f25e.js","3a27ed36f5bbb28d8a74a12f6b296ac3"],["/js/DenialOfServiceModal.cdc42d8f560571f8f25e.js","d5e39d1f628f454b2032c886bbc2a2bf"],["/js/MarketUnavailableModal.cdc42d8f560571f8f25e.js","3f66a637fe398776b21b87c198630c0b"],["/js/ServicesErrorModal.cdc42d8f560571f8f25e.js","1dab517dab2b33ed20e9405853a0fc21"],["/js/UnsupportedContractModal.cdc42d8f560571f8f25e.js","67432f5751b325a97bbd2f21e0c55922"],["/js/account-info.cdc42d8f560571f8f25e.js","f2be3dfffeabf290ba905609e0019110"],["/js/contract.cdc42d8f560571f8f25e.js","8ae7d31722b1b3177dab55a179777515"],["/js/default~open_position~1833eefb.cdc42d8f560571f8f25e.js","4db02d66f6db3d66a638885233359208"],["/js/digits.cdc42d8f560571f8f25e.js","6c23c03f96f3351ca19e9a5eb36e244d"],["/js/info-box.cdc42d8f560571f8f25e.js","274a5e465ee765bd3c020fab1eec72c1"],["/js/main.cdc42d8f560571f8f25e.js","51552c2e4e550089750401cae9f67ba9"],["/js/notification-messages.cdc42d8f560571f8f25e.js","2b3b98182dd5c535704c15408cc91f42"],["/js/open_positions.cdc42d8f560571f8f25e.js","f1758f7b2d22dc37867a90eac81f2cfd"],["/js/profit_table.cdc42d8f560571f8f25e.js","2d4a0e469557ce29aa888ce1eb29ef9a"],["/js/push-notification.cdc42d8f560571f8f25e.js","da948264de3d4508b593e350f92b8ea5"],["/js/reports.cdc42d8f560571f8f25e.js","15cca78a5fd68bb2431206fe32fcef29"],["/js/screen-small.cdc42d8f560571f8f25e.js","4e1eaa688142ca3851eb2e8953d4c0a8"],["/js/settings-chart.cdc42d8f560571f8f25e.js","6295ca4340f7af89889217c728c3edd4"],["/js/settings-language.cdc42d8f560571f8f25e.js","aff2d4e32757ebff424499e27cee388b"],["/js/settings-theme.cdc42d8f560571f8f25e.js","cded77cd1ecf6f078789820f0e2d932f"],["/js/smart_chart.cdc42d8f560571f8f25e.js","f8820b94851ce25cae9f0de39c874f02"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.cdc42d8f560571f8f25e.js","8fc2f7d4440ce5e66a3806d65a0c428c"],["/js/toggle-cashier.cdc42d8f560571f8f25e.js","3604bf7357dfd46994091c12bb7a405c"],["/js/toggle-menu-drawer.cdc42d8f560571f8f25e.js","afe09860cf33f101fb54694b00e183dc"],["/js/two-month-picker.cdc42d8f560571f8f25e.js","65a918fb305569ec7ba97a720aa031d2"],["/js/vendors~main.cdc42d8f560571f8f25e.js","56316b67c9f368ed573a77d66be9e767"],["/js/vendors~open_position~7c650be5.cdc42d8f560571f8f25e.js","03ee55ec25d867e5de32bf15190db6f4"],["/js/vendors~smart_chart.cdc42d8f560571f8f25e.js","081e11a9653b6e711fb29b9b65016553"],["/js/wallet-information.cdc42d8f560571f8f25e.js","76c57bb0e8f139d1fa6fba5f1a99aae4"],["/js/work-in-progress.cdc42d8f560571f8f25e.js","f2be81a989a90a9e8e66b91b4cda303b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







