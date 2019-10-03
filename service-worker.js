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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","fd506e50c770af4843fb5e2e5add1789"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","83652ff957658a987e8b9f1ef1d035d5"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","1668f575b78b77428247e933e2122343"],["/js/0.d377442b551b815e4658.js","86f3e87a4ab326bc1678f402529a5707"],["/js/1.d377442b551b815e4658.js","1b401309c5399d994677f6a3951d8a5b"],["/js/10.d377442b551b815e4658.js","b8e901610f5e63e1bfc8b6686037eda9"],["/js/11.d377442b551b815e4658.js","6216222d0b758a2fc92cefefa9398d05"],["/js/12.d377442b551b815e4658.js","5d7f41ad84cf488c1506f21962c4c857"],["/js/13.d377442b551b815e4658.js","d11a2723de30036532d9109fd29aa2cf"],["/js/14.d377442b551b815e4658.js","126e99b809b7bb001e3f1c64581994c8"],["/js/15.d377442b551b815e4658.js","21b2c04a1a45d119c943228722ec0957"],["/js/16.d377442b551b815e4658.js","8cfe37d91364f47798f821578236dfa3"],["/js/17.d377442b551b815e4658.js","b9ee00671ac6cbbc9d3be76aa83116f8"],["/js/18.d377442b551b815e4658.js","183bba66207b9bf8ca7135f6c49655e3"],["/js/19.d377442b551b815e4658.js","9f6edff1120239e2ff24658fdf577124"],["/js/2.d377442b551b815e4658.js","90e076ea6c0dcb1833c91287ad1faf46"],["/js/20.d377442b551b815e4658.js","57a0891790019df772daf092b6c3cf18"],["/js/21.d377442b551b815e4658.js","212af141b70100ac110b9726a8740ab6"],["/js/22.d377442b551b815e4658.js","a626c0157af0bfc5c1aa7bfcf7aea391"],["/js/23.d377442b551b815e4658.js","3fd3491eeb104d8df8ab88b34c21f713"],["/js/24.d377442b551b815e4658.js","d2f672f80a2559d96a5f401d452e109a"],["/js/25.d377442b551b815e4658.js","456539fe5d29a12992dab25c41e69c5d"],["/js/26.d377442b551b815e4658.js","a51b28673444b7dbb0de5fa1bdd8d762"],["/js/27.d377442b551b815e4658.js","84b2f6eeb04665a3781024df179c01dd"],["/js/28.d377442b551b815e4658.js","f608c4d052baf76202f9a8fd334efd23"],["/js/29.d377442b551b815e4658.js","1505e3ebc60432946941a99db814a2f4"],["/js/3.d377442b551b815e4658.js","e1ea343e657bd06c3358c17b4fb4cdd9"],["/js/30.d377442b551b815e4658.js","ee349f40031d8afeffe0915c7e35e826"],["/js/31.d377442b551b815e4658.js","83974910b99cbd97124f6976bdb728bb"],["/js/32.d377442b551b815e4658.js","b3f4b042c31d5cc76c737874b5f49c3e"],["/js/33.d377442b551b815e4658.js","4bd5097ac203b0907372c0ccde555790"],["/js/34.d377442b551b815e4658.js","f2bd070d39e0187f33bf5aa25743a0eb"],["/js/35.d377442b551b815e4658.js","c396ff25c99d20a2d93460f2511e6abe"],["/js/36.d377442b551b815e4658.js","b702e2177218d2f69b13234e44cd0edd"],["/js/37.d377442b551b815e4658.js","0f8a0d33a60eb921016bdd7b659e26c3"],["/js/38.d377442b551b815e4658.js","7b7a43c55e4a61dc87bf4bab9d45e4bd"],["/js/39.d377442b551b815e4658.js","135d7a675d8f464fd6b3606d5e615908"],["/js/4.d377442b551b815e4658.js","3004f0da4158542f474c3bebf85d37dd"],["/js/40.d377442b551b815e4658.js","3d8c9b13d1fb89976b0c35fdc8e25494"],["/js/404.d377442b551b815e4658.js","dbd4495098a4a941b11265cf55ea190b"],["/js/41.d377442b551b815e4658.js","0b6bfcafe67e346f72153e112e49be2e"],["/js/42.d377442b551b815e4658.js","e79a0de62a7544c0ba3cdc62ab7444b1"],["/js/43.d377442b551b815e4658.js","5ebc6a4d03e9f3945fb30a5872311230"],["/js/44.d377442b551b815e4658.js","90a0a47e9df744751dd61473c907e492"],["/js/45.d377442b551b815e4658.js","f930e4c1a1b75f44684efa9caee5bd73"],["/js/46.d377442b551b815e4658.js","50996eaf601fcd930e9967e30b15ec58"],["/js/47.d377442b551b815e4658.js","00bc64b9b02f2539eb08d691a4e841b5"],["/js/48.d377442b551b815e4658.js","9c874e8a6d2ee68684458290d367a4bd"],["/js/49.d377442b551b815e4658.js","e95df76fb8a823d19696568578faf73a"],["/js/5.d377442b551b815e4658.js","5826df9d346eac69cc678ec78eccdcc3"],["/js/50.d377442b551b815e4658.js","910db0fd4a067cd9df6464f021adcb46"],["/js/51.d377442b551b815e4658.js","e834ec54de686df9477680c7ff4e36ee"],["/js/52.d377442b551b815e4658.js","ab1294b1eca0772e63c6c1213d02d4d6"],["/js/53.d377442b551b815e4658.js","11e5a1d89b4b1aa31536db0d5fd3e269"],["/js/54.d377442b551b815e4658.js","809d4aff9b2479de9059b4cdd97c729e"],["/js/55.d377442b551b815e4658.js","3a1d529224281c82f68699f854919841"],["/js/56.d377442b551b815e4658.js","b6d843314bf7fbf70c89cb6a0d5e3f7c"],["/js/57.d377442b551b815e4658.js","42926be9c26b78f10dde65cc8dc20e36"],["/js/58.d377442b551b815e4658.js","932b2b79baa9b34f84e649aa2d44c3ea"],["/js/59.d377442b551b815e4658.js","7ee50b2022fc3ec50bae1f92eecc0177"],["/js/6.d377442b551b815e4658.js","ac7247cee38f4ce9d9dbc8fc44004370"],["/js/60.d377442b551b815e4658.js","b56fdfcc83f08ea2b4e661b3738a3543"],["/js/61.d377442b551b815e4658.js","4b58f2ac907e9ad96ada1dd9277ab7c0"],["/js/62.d377442b551b815e4658.js","247825fe0e9af83bd86bd9403ea4a7d2"],["/js/63.d377442b551b815e4658.js","b78fcb13144c12d84e9d5c0a246874ec"],["/js/64.d377442b551b815e4658.js","5e96ef288bb24b51efc02799c1cea189"],["/js/65.d377442b551b815e4658.js","6471251d4b6f40f4a319aff2d3d30f6d"],["/js/66.d377442b551b815e4658.js","dbdeb6d4be7632adabb0448ccf859ef2"],["/js/67.d377442b551b815e4658.js","2ecc9805b1f498d3c93ecb9481ad57a3"],["/js/68.d377442b551b815e4658.js","3e9e5805c54bc0f1b127795df9d556bf"],["/js/69.d377442b551b815e4658.js","7058f9ee51a7e412111b86001f5ca452"],["/js/7.d377442b551b815e4658.js","03a891f98748d5edb65720fc3b0bd21a"],["/js/70.d377442b551b815e4658.js","878ef168b2ea3da97bc521825f9e4231"],["/js/71.d377442b551b815e4658.js","e88ce5b6940f438c54f3d667c4634048"],["/js/72.d377442b551b815e4658.js","877319f4b7fe98fc7cf1d38ff81a2dce"],["/js/73.d377442b551b815e4658.js","545a8fbd4adece71f1c9b063d0a0f7fb"],["/js/74.d377442b551b815e4658.js","4d6eaf6a0e6ee90b8d0f118c2eea8ffd"],["/js/75.d377442b551b815e4658.js","4a8fa4c73a228e580bcc6acd481a675b"],["/js/76.d377442b551b815e4658.js","a2b7fd858a0e0318348d538460d59b2e"],["/js/77.d377442b551b815e4658.js","f580fae71009eb2591ed124d90fcb429"],["/js/78.d377442b551b815e4658.js","fcb027ff986f8b53b4a28607fc46e7e7"],["/js/79.d377442b551b815e4658.js","00758273c0abbc834673f6812190dd4f"],["/js/8.d377442b551b815e4658.js","00bdba3fb14f50444e83bddee4c3ca0b"],["/js/80.d377442b551b815e4658.js","535714d2775d45020f6aa24fd6e6b64e"],["/js/81.d377442b551b815e4658.js","4a65f5cc2f5171e8f4a11b74ae290eb8"],["/js/82.d377442b551b815e4658.js","8389a06be4de7f87c5c5e9bb62ab4c24"],["/js/83.d377442b551b815e4658.js","a594ecfa2bd381f7caab96fefd5622a6"],["/js/84.d377442b551b815e4658.js","0eab0637138ed24d919d492afe9c4012"],["/js/85.d377442b551b815e4658.js","fa7a7bbc8955f5e9ee3275103f13e477"],["/js/86.d377442b551b815e4658.js","d5579e0a9657717681df862f6c45e666"],["/js/87.d377442b551b815e4658.js","aec8e2c3316a8267f7fbbd07b904b9b9"],["/js/88.d377442b551b815e4658.js","1ff1c2b92034555e9d328612b1f40194"],["/js/89.d377442b551b815e4658.js","7f83281b65f9068481d6cdacd69ee9d0"],["/js/9.d377442b551b815e4658.js","0535d5c2d3f87a8253684814d3e56b2b"],["/js/90.d377442b551b815e4658.js","bc5aadbb10aeed33f1d30c9459b5fcae"],["/js/91.d377442b551b815e4658.js","2619084817a56fc12680499aaba6b6f2"],["/js/92.d377442b551b815e4658.js","9b690da2c4ffe35eeeb7e6ee7371eab9"],["/js/93.d377442b551b815e4658.js","6f21a9fcad4ab24e9c955b97de1af693"],["/js/AccountSignupModal.d377442b551b815e4658.js","5ad8e5f41978c759369607fc94db0899"],["/js/ResetPasswordModal.d377442b551b815e4658.js","4cdda48e2e8a997c475be25c48f9a4f0"],["/js/account-info.d377442b551b815e4658.js","77669e7f4f316079319f689ec2137776"],["/js/account.d377442b551b815e4658.js","95821c67ee1cc8850f6fabd2e96db408"],["/js/contract.d377442b551b815e4658.js","ae8e041400ceb1ccc348976c85c37db6"],["/js/default~modals~mt5.d377442b551b815e4658.js","014a2ef83b36cb0c37df18a330b77fc1"],["/js/main.d377442b551b815e4658.js","d10be1bce140e94dd6fc92b6a9d12211"],["/js/modals.d377442b551b815e4658.js","45104c9b3e755f4692d7134f437fea55"],["/js/mt5.d377442b551b815e4658.js","12a7cc22fd1c6bfe12a85af873d04340"],["/js/notification-messages.d377442b551b815e4658.js","df4920c93512d39b10676aece1d94744"],["/js/push-notification.d377442b551b815e4658.js","71a466094d7bea60af3517f713b62068"],["/js/reports.d377442b551b815e4658.js","26db08e4730956ce6184625b6b12a07a"],["/js/screen-small.d377442b551b815e4658.js","05c5120307b39e1f769893e1ef72a366"],["/js/settings-chart.d377442b551b815e4658.js","76f018279a8c9004a78a39fa8b7df061"],["/js/settings-language.d377442b551b815e4658.js","d25c8f60484b8956f50c7ee3a5620784"],["/js/settings-theme.d377442b551b815e4658.js","bea1f7783dac53df7a8d55ce6cde5ac8"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.d377442b551b815e4658.js","b72b47d25b6116fa676795143f240dd7"],["/js/two-month-picker.d377442b551b815e4658.js","ec96dc5d40011e51c2f0c4cf68fd3cc0"],["/js/vendors~smart_chart.d377442b551b815e4658.js","3a8c46fe51c5c3d03aca9c823d69758c"],["/js/work-in-progress.d377442b551b815e4658.js","8387dc33bc81b03d5f9551bf32feb235"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







