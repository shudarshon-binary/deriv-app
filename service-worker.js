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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","6bf6fe914761a36a8a8aa78625fc8cd5"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c16518fc1a5711d6fb51b3e86ab0d53f"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","8fa026334ee30814b22ff93ebab81aef"],["/js/0.872e1adbcea880e9a76f.js","e44949913a800e4860b6cf1a7305e80a"],["/js/1.872e1adbcea880e9a76f.js","daf8f874b458e4f55933a2aef098e131"],["/js/10.872e1adbcea880e9a76f.js","b1d5b05819f88380195b7108f0d48606"],["/js/11.872e1adbcea880e9a76f.js","2caf756634cc8f96fc419c269c90bb6d"],["/js/12.872e1adbcea880e9a76f.js","9edf2ade36ddb9152098188982aee07d"],["/js/13.872e1adbcea880e9a76f.js","7384d10b788c035e91852a6b9cd68bd9"],["/js/14.872e1adbcea880e9a76f.js","f821e070f0d4a154d636297b16960af4"],["/js/15.872e1adbcea880e9a76f.js","b8825dcf676ec3c76851539827ad3163"],["/js/16.872e1adbcea880e9a76f.js","c3ee39cd5227a3cabcf6739fac98cceb"],["/js/17.872e1adbcea880e9a76f.js","d10a055f6edc4fbd85e35048130b8094"],["/js/18.872e1adbcea880e9a76f.js","5f6efedc2cd67f71fc9ee9a7624fc738"],["/js/19.872e1adbcea880e9a76f.js","d61cbc09d88a5d7f0a22d7598ce223fd"],["/js/2.872e1adbcea880e9a76f.js","55cbbfb40933ee510428281fe8d151f1"],["/js/20.872e1adbcea880e9a76f.js","1da649ac52f9afd0a0f80b8fd9f528b0"],["/js/21.872e1adbcea880e9a76f.js","6e40cd62d619dff2428faa421057e83b"],["/js/22.872e1adbcea880e9a76f.js","262551dc8d90cebc4ca2a987f4625b6c"],["/js/23.872e1adbcea880e9a76f.js","713f6f782206aadd85183348c871f4a3"],["/js/24.872e1adbcea880e9a76f.js","9569bf8ef8357b564b8fef162981da34"],["/js/25.872e1adbcea880e9a76f.js","caf9e6d9d85d2d1c2f786daece6df515"],["/js/26.872e1adbcea880e9a76f.js","11d26f2fe37bc6284ad944f98abc18e8"],["/js/27.872e1adbcea880e9a76f.js","3690cee914f5b9c91a5b673c55613e2b"],["/js/28.872e1adbcea880e9a76f.js","c1a9b909a4bb803900db8f20db6dcf31"],["/js/29.872e1adbcea880e9a76f.js","54655a0d0df8c64e0d8802ff48ca99fc"],["/js/3.872e1adbcea880e9a76f.js","bbecc379b52b7940bc743ba36cbdf80e"],["/js/30.872e1adbcea880e9a76f.js","2acd6691cc967607ec7bc996136c7b9f"],["/js/31.872e1adbcea880e9a76f.js","6eb757b47fe11a35e7709037c594a5ce"],["/js/32.872e1adbcea880e9a76f.js","5b1486840182c4a34a231551a2decae2"],["/js/33.872e1adbcea880e9a76f.js","e4ec982d6f3765ff027e2af21cda9cbf"],["/js/34.872e1adbcea880e9a76f.js","d0f36ccb07bd71ea580c2f2ed037fa7e"],["/js/35.872e1adbcea880e9a76f.js","82d36054c66276766976295cdef19879"],["/js/36.872e1adbcea880e9a76f.js","d66a29a1c0c52d35e513b5d46636127a"],["/js/37.872e1adbcea880e9a76f.js","20459d7ae3f8c8c88669acaa57910786"],["/js/38.872e1adbcea880e9a76f.js","b1b63a00422abb72af6f2238d7fa6400"],["/js/39.872e1adbcea880e9a76f.js","8bc28d4d88f4a66cc7bb642379fcc01f"],["/js/4.872e1adbcea880e9a76f.js","eda9da948a376dce074dcdb51a648339"],["/js/40.872e1adbcea880e9a76f.js","a7db0106b85db13294782464a7184b60"],["/js/404.872e1adbcea880e9a76f.js","af3b79de3f7460c9766b65b1124aad0d"],["/js/41.872e1adbcea880e9a76f.js","36a4e6d5857b611fe1a21f104cdff495"],["/js/42.872e1adbcea880e9a76f.js","6d429ad2da5e2c6aec9cab3156ee3c98"],["/js/43.872e1adbcea880e9a76f.js","d679d46069c82c922649efd14fc8f6d0"],["/js/44.872e1adbcea880e9a76f.js","664586b2e57736fa59d905a04a9e6a74"],["/js/45.872e1adbcea880e9a76f.js","8aef3749ddf88a0197de2714b5b08643"],["/js/46.872e1adbcea880e9a76f.js","0748c4949df2aef1f738e1e43790d7c0"],["/js/47.872e1adbcea880e9a76f.js","fab48daf04b653c27f3308bc116b65ef"],["/js/48.872e1adbcea880e9a76f.js","75148b922f1b5852f40461592d50c6b0"],["/js/49.872e1adbcea880e9a76f.js","dc9f8454c7ef5ab249ddee5ddea3024f"],["/js/5.872e1adbcea880e9a76f.js","48d1ac6108fa213c57071230035d6697"],["/js/50.872e1adbcea880e9a76f.js","3617300417ae33dc298a649c0c1018e5"],["/js/51.872e1adbcea880e9a76f.js","82ef6939c64d1e09bd6f31de4fabfa5c"],["/js/52.872e1adbcea880e9a76f.js","d6a7747222afedf3708fd7c971f1eeb0"],["/js/53.872e1adbcea880e9a76f.js","8c3f5fe9d5047f1c36d0617d05d48dab"],["/js/54.872e1adbcea880e9a76f.js","aec0905e5e06d94f5c43a4ee2024470d"],["/js/55.872e1adbcea880e9a76f.js","89f834e7c67814c87d4a287bad7506bd"],["/js/56.872e1adbcea880e9a76f.js","8bba34870cd1357891e90bcf9e381e3c"],["/js/57.872e1adbcea880e9a76f.js","c927feece3157c7f465b4e5db0e7d8fe"],["/js/58.872e1adbcea880e9a76f.js","0aa8709c3296ad938a60af9b2cfb384c"],["/js/59.872e1adbcea880e9a76f.js","020e395f01f482f07eae56e90b6aebf3"],["/js/6.872e1adbcea880e9a76f.js","c087bd5afe70a4ab46c89b40dc6904a6"],["/js/60.872e1adbcea880e9a76f.js","6c11dac38e9dfce16127df7be70b5a5d"],["/js/61.872e1adbcea880e9a76f.js","96e43bf3e128d8e3cb6a1f68cee2cb90"],["/js/62.872e1adbcea880e9a76f.js","915970d6884de5064ddf9a700d8eed87"],["/js/63.872e1adbcea880e9a76f.js","0df388950d5e5dd4ae2660b935145795"],["/js/64.872e1adbcea880e9a76f.js","37ab3ceae6b74ce89843c372bc5e8e6f"],["/js/65.872e1adbcea880e9a76f.js","21d49732b2045e9554fa25c46945e782"],["/js/66.872e1adbcea880e9a76f.js","eb17a5271c5f9c09f5c8d26e7232d584"],["/js/67.872e1adbcea880e9a76f.js","d5b1cc1a69b6adfbdfb5857bb21a73cc"],["/js/68.872e1adbcea880e9a76f.js","a818b9ce456b9895ffecd08669d7d6b7"],["/js/69.872e1adbcea880e9a76f.js","d0144bf9313176a45d9b0a763ad9ec77"],["/js/7.872e1adbcea880e9a76f.js","e8c74de8153c34a9bbe64476aa4695e5"],["/js/70.872e1adbcea880e9a76f.js","21ff62a09e3a6f52bba48908c9f77994"],["/js/71.872e1adbcea880e9a76f.js","5da28212ca1f719a6f4c7545fcca7c59"],["/js/8.872e1adbcea880e9a76f.js","aa5a4ced3838fdfae047e4eb5e53cdfd"],["/js/9.872e1adbcea880e9a76f.js","89ebbf758bc2a931ed851046ef8aecbf"],["/js/AccountSignupModal.872e1adbcea880e9a76f.js","8a31bbcbf3c6cd3fc24bb640e0400b9f"],["/js/account-info.872e1adbcea880e9a76f.js","97bf7e7530082c5a8fe11e8e92e75ac3"],["/js/contract.872e1adbcea880e9a76f.js","726efaaf6f7dff3429adca1333316ce2"],["/js/default~open_position~1833eefb.872e1adbcea880e9a76f.js","4969646a9446fceaaf51cb71b7f1778a"],["/js/digits.872e1adbcea880e9a76f.js","1f74a7b8d5cff15dc3952ab721ca5999"],["/js/info-box.872e1adbcea880e9a76f.js","04ea39617f3f3d50aa1ab05fce62afa3"],["/js/main.872e1adbcea880e9a76f.js","f20a0fc0b102961df6ac2937b9ad147a"],["/js/modals.872e1adbcea880e9a76f.js","11c68c04bf6e10850258c976cc8e1c78"],["/js/notification-messages.872e1adbcea880e9a76f.js","52866f469659da47f7a44d1baf8e2cc6"],["/js/open_positions.872e1adbcea880e9a76f.js","18df476d2752fc45e2227568c63961c2"],["/js/profit_table.872e1adbcea880e9a76f.js","3841f0058dcd1da62861626410631c67"],["/js/push-notification.872e1adbcea880e9a76f.js","95048f8d31b64e5fd5c6c7a2fa4cdfb5"],["/js/reports.872e1adbcea880e9a76f.js","845ef210f0742d2f8997cb280e36c917"],["/js/screen-small.872e1adbcea880e9a76f.js","928c8edd7832a6540da0cdf94a891797"],["/js/settings-chart.872e1adbcea880e9a76f.js","1dc1d1df296b5ab108f57917c608a088"],["/js/settings-language.872e1adbcea880e9a76f.js","76d313ec973858e4920da44dae7c3f7b"],["/js/settings-theme.872e1adbcea880e9a76f.js","a610c8be4240fc3419a7749fa656b879"],["/js/smart_chart.872e1adbcea880e9a76f.js","9c0dd4339d879b05b3de0f9865ca1e79"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.872e1adbcea880e9a76f.js","b46dcbb1bdcd19064976114fd5d0623d"],["/js/toggle-menu-drawer.872e1adbcea880e9a76f.js","712ac8ceafb0dc14d8af8d2bd351355f"],["/js/two-month-picker.872e1adbcea880e9a76f.js","8ae937c3245cbfc7dc0c0df5b5de6f8e"],["/js/vendors~AccountSignupModal.872e1adbcea880e9a76f.js","3f9ec42e62ca183ebb263231fd5697a9"],["/js/vendors~main.872e1adbcea880e9a76f.js","1e0686e0274e4f26b0ce2d221eb00900"],["/js/vendors~open_position~7c650be5.872e1adbcea880e9a76f.js","77227944869a4c2aa2a67765af0f236b"],["/js/vendors~smart_chart.872e1adbcea880e9a76f.js","9693400af97a5042ecebe7172cfa02c7"],["/js/work-in-progress.872e1adbcea880e9a76f.js","1e4f7f5e87aee453947e286b6a918f49"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







