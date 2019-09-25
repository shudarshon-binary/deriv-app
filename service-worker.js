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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","5b27732c6acd66f9087b26930992bf0a"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","3acfe93cd957716fd5d70f02d428a386"],["/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/css/mt5.css","9fa787fcceef267e0dcdf397e8e39271"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","2a6f5da99dc9816296cc1f49f1d4e513"],["/js/0.28914c1d591be976ad91.js","0206ab3639d9316e6dccd2f35369ff8d"],["/js/1.28914c1d591be976ad91.js","e4dffb6443ff9f26cece40fa6b18ff94"],["/js/10.28914c1d591be976ad91.js","f94200370fcafb35de2dec95a9468d4a"],["/js/11.28914c1d591be976ad91.js","385f4ce2971da14633a9d67fdab4594f"],["/js/12.28914c1d591be976ad91.js","e3321fd44077d4d033111d25b0c1afbe"],["/js/13.28914c1d591be976ad91.js","f95472f20b251410cd74b275991aeb20"],["/js/14.28914c1d591be976ad91.js","61ed6914bbcb65a83c3f002560bf6655"],["/js/15.28914c1d591be976ad91.js","7fdfd380f218eea46cdcf057be77c37f"],["/js/16.28914c1d591be976ad91.js","3a2499bd3889b73523ba7cbf35df3323"],["/js/17.28914c1d591be976ad91.js","a60f04920b6fea4d9935604254d156a3"],["/js/18.28914c1d591be976ad91.js","99d9a1032aec4c75a63367c14326ede7"],["/js/19.28914c1d591be976ad91.js","da1f48bf9705d009da3a73fd85f08a61"],["/js/2.28914c1d591be976ad91.js","c2d42865d5e75b3b8b42639a294fe153"],["/js/20.28914c1d591be976ad91.js","2bc903563a04eb198d6bfd7c7f7731d9"],["/js/21.28914c1d591be976ad91.js","11ee10893ef827a915e6dc669f30be01"],["/js/22.28914c1d591be976ad91.js","76dd8f65bb1fe700f1c3025c7a98d55e"],["/js/23.28914c1d591be976ad91.js","44b7c30dc2309c1a1bd41fc76d317ed4"],["/js/24.28914c1d591be976ad91.js","bd1d6ef94574d1239620426a2e42c9e9"],["/js/25.28914c1d591be976ad91.js","c1c78a999a24cd950758aba8d1327177"],["/js/26.28914c1d591be976ad91.js","30accd662a6c903e9a894a01802a043a"],["/js/27.28914c1d591be976ad91.js","e97d10fa2cbadf7b5ff7122ef4bfc80d"],["/js/28.28914c1d591be976ad91.js","75cb7bb7dfe6fa3c1467845660d5a6e7"],["/js/29.28914c1d591be976ad91.js","b9ef23bdff02bd0317d653def085cfd1"],["/js/3.28914c1d591be976ad91.js","f36b2218b465390bfde9287181585d18"],["/js/30.28914c1d591be976ad91.js","c6a241406e8558b6b8081854e17cd433"],["/js/31.28914c1d591be976ad91.js","834ea28a50907f1feed0ac44c8045c69"],["/js/32.28914c1d591be976ad91.js","c0b73165b7a429dab8120e569d8ae3a7"],["/js/33.28914c1d591be976ad91.js","e22b9693269c9a17a5672e5181ce9511"],["/js/34.28914c1d591be976ad91.js","606c37e30250f071e74a42a2e1408230"],["/js/35.28914c1d591be976ad91.js","5a8665a41af2e674599fdf7a731a174c"],["/js/36.28914c1d591be976ad91.js","312d28bc48b8ab4c58339ad7460292d5"],["/js/37.28914c1d591be976ad91.js","fbec152b994dad62b9c3bf5f84574321"],["/js/38.28914c1d591be976ad91.js","95c4e1f4303bbe1e0980aafc737634bd"],["/js/39.28914c1d591be976ad91.js","deaf48dd1ecb5dbea798ff2cd705b286"],["/js/4.28914c1d591be976ad91.js","37a7a47d9979e13606e96aa8dd4e5e6c"],["/js/40.28914c1d591be976ad91.js","e2b49a8025107b9d893a09b7cec09280"],["/js/404.28914c1d591be976ad91.js","de5a99b26933aef0b8013d89dc2be107"],["/js/41.28914c1d591be976ad91.js","74abdfd5ce2d744c550faabc7ee9a554"],["/js/42.28914c1d591be976ad91.js","7f89972ecabd6b8c4a18fff7584c8182"],["/js/43.28914c1d591be976ad91.js","3f782ec5474777247b32eadab813cc08"],["/js/44.28914c1d591be976ad91.js","a9ce7eabd0936c721d79d79ab6ed7fd0"],["/js/45.28914c1d591be976ad91.js","d364aac1c9fa29474b4436bb799bd3b6"],["/js/46.28914c1d591be976ad91.js","0f7bae42ea978c4f8d64270e59ea1daf"],["/js/47.28914c1d591be976ad91.js","eed2296c0922a23d4a8a22c42b907abe"],["/js/48.28914c1d591be976ad91.js","d95f1a9ef619f12c8a08b16ec549d919"],["/js/49.28914c1d591be976ad91.js","138fa1fd5e2e77e03a5760e0f9eaec19"],["/js/5.28914c1d591be976ad91.js","8b6454b0066a87abda2796d1101b0f05"],["/js/50.28914c1d591be976ad91.js","10a236abf97fb2f4d8cf37776d630caa"],["/js/51.28914c1d591be976ad91.js","35c27f583013e6e6fbdfb0b48d3b643f"],["/js/52.28914c1d591be976ad91.js","321fd3631f528ac41016e7338ed9c199"],["/js/53.28914c1d591be976ad91.js","6798b388af2a14182dd718ee59906d28"],["/js/54.28914c1d591be976ad91.js","d21d09f5bd868d63e3a5b787a32bf3c9"],["/js/55.28914c1d591be976ad91.js","578ab013f7243435559db60ead312cd6"],["/js/56.28914c1d591be976ad91.js","cd7d59b97fbedf7be59c39062d4170c6"],["/js/57.28914c1d591be976ad91.js","4ee1779b6d6cf333417044f1e2d1fbe6"],["/js/58.28914c1d591be976ad91.js","53ca01c8df52a4627fa60e81de903e5b"],["/js/59.28914c1d591be976ad91.js","2ea5da2e8f43fa9252258a721d8a234e"],["/js/6.28914c1d591be976ad91.js","0fbc2cb3ed8fa27e6e6fea5d179a7dbd"],["/js/60.28914c1d591be976ad91.js","c3f1c418771c92ce00a21785c469a1cf"],["/js/61.28914c1d591be976ad91.js","7183f084be73e03ba4688eae420f3fd3"],["/js/62.28914c1d591be976ad91.js","6a1a0b7e9918c75c373a3399e108ba57"],["/js/63.28914c1d591be976ad91.js","2db36e4aa8beade3b28f9428582657ef"],["/js/64.28914c1d591be976ad91.js","10d71d67178e7080fc1ed99017fb0082"],["/js/65.28914c1d591be976ad91.js","c3bc719fe77698c466f01129c3f65820"],["/js/66.28914c1d591be976ad91.js","88b6baf207a3137415c1e3e8e5f893b9"],["/js/67.28914c1d591be976ad91.js","ae7c122532601296efcfc74c8ff588e9"],["/js/68.28914c1d591be976ad91.js","8081f37f4bf03097cb23412f1d2af48a"],["/js/69.28914c1d591be976ad91.js","95c1ad7b6eee922d051671231aacf3bf"],["/js/7.28914c1d591be976ad91.js","9c1219420ef85cb50b2776af7f9e44ea"],["/js/70.28914c1d591be976ad91.js","0e1da3cc8fc45672aaaa636cd288a703"],["/js/71.28914c1d591be976ad91.js","99fc410050c61a5f0faaffa3214390a9"],["/js/72.28914c1d591be976ad91.js","8ba1e0aded48c006c06623b1090c991e"],["/js/73.28914c1d591be976ad91.js","e00d37f0effab42baf7fd2f46bd1fb76"],["/js/74.28914c1d591be976ad91.js","641ab097f2b9f42989e04fb9b76951b4"],["/js/75.28914c1d591be976ad91.js","f0dfc173c88e70d4dd6e880f393237b4"],["/js/76.28914c1d591be976ad91.js","152c8213d149d6e0a65855f29a28399e"],["/js/77.28914c1d591be976ad91.js","26af9b92fe102638352b50ab0e825ca5"],["/js/78.28914c1d591be976ad91.js","25816c2ea030ae45d3c99fdfa712a858"],["/js/79.28914c1d591be976ad91.js","72d4cf0024261d6801992b97bc916b89"],["/js/8.28914c1d591be976ad91.js","544d348d2dea9a8cbe085d38b9a0d51a"],["/js/80.28914c1d591be976ad91.js","4ea8f8c68a2643cb5279ade0d07faba8"],["/js/81.28914c1d591be976ad91.js","3211d3587725b69d6b157efb9cd49277"],["/js/82.28914c1d591be976ad91.js","11c6a357444a39e4d61a9a4d98689f1f"],["/js/83.28914c1d591be976ad91.js","21e3f63af520da630c32f5b3633554ca"],["/js/84.28914c1d591be976ad91.js","64dde068ca521e6b719c539e1665ca1d"],["/js/85.28914c1d591be976ad91.js","994559e29ad80cea2e22219eadfdf8ea"],["/js/86.28914c1d591be976ad91.js","ad5f82689c27e52ee06c3871a78f1d44"],["/js/87.28914c1d591be976ad91.js","e938f9608638b2b3d6866353fd747d61"],["/js/88.28914c1d591be976ad91.js","6db8d8b1a27ca9b04e78bf31c8f52bd3"],["/js/89.28914c1d591be976ad91.js","634e5b2bd11df6b8e63928d066638048"],["/js/9.28914c1d591be976ad91.js","2bd3115fcc4d1b001ac48c79670a2587"],["/js/90.28914c1d591be976ad91.js","13b16f4c13a6b7b444704d0086f0a7b1"],["/js/91.28914c1d591be976ad91.js","2e9a2b1b9b8dd2a713dfca5020af8478"],["/js/AccountSignupModal.28914c1d591be976ad91.js","438f284cdd9b0ff02e31d081fad12dcb"],["/js/account-info.28914c1d591be976ad91.js","80589d5cb3907d79da96b49eb21fad82"],["/js/account.28914c1d591be976ad91.js","c166628e2621a6c618d2bc652c5e50e4"],["/js/contract.28914c1d591be976ad91.js","77ab26fd76e5e8a99306f9f8869e0353"],["/js/modals.28914c1d591be976ad91.js","d8dd5df1837a71138434683dc1d74254"],["/js/mt5.28914c1d591be976ad91.js","b4c6d83f8b7f3e552c1cf4d8e0c48ff5"],["/js/notification-messages.28914c1d591be976ad91.js","0aaf55103543f81234ae146820f2f650"],["/js/push-notification.28914c1d591be976ad91.js","50e5d11c7bc31fda90681d75b99e7e0d"],["/js/reports.28914c1d591be976ad91.js","d03116e4c4cd9556a0382c681883afc1"],["/js/screen-small.28914c1d591be976ad91.js","77aae8a4af19135b6529db97f89f49bb"],["/js/settings-chart.28914c1d591be976ad91.js","4b30e9bf583ad8cff7da5d3d6ffd11c6"],["/js/settings-language.28914c1d591be976ad91.js","aae9308fe3487d035153ae727e4c8e84"],["/js/settings-theme.28914c1d591be976ad91.js","3374865d64550912c3a5c1801c4e8afd"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.28914c1d591be976ad91.js","cccb892f1b1a140f5734dbaef6e4c7b7"],["/js/two-month-picker.28914c1d591be976ad91.js","03fe5103e19c5ebcd6775a234531cb5d"],["/js/vendors~main.28914c1d591be976ad91.js","91a31e972abfc3a55f25fde1056da95d"],["/js/vendors~smart_chart.28914c1d591be976ad91.js","24afd74bc87120f7221ee2ad7b6cf98d"],["/js/work-in-progress.28914c1d591be976ad91.js","56dc8f74300f56fbc1b18a3306c2c94b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







