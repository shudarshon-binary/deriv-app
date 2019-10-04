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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e8d20088e6d316057a83e821f8448762"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","c48f10a0647818989edfdaad40ae3805"],["/js/0.04bf618d5108375e45c1.js","41c70e18f6a8b33f1e828dfd50ee003f"],["/js/1.04bf618d5108375e45c1.js","ee584c352a03ad4dcb7662aa0de9264c"],["/js/10.04bf618d5108375e45c1.js","dba3fec8f6b6a1854712c706def3c822"],["/js/11.04bf618d5108375e45c1.js","c2acfd8f1065c1c6bbd6a7a65a4bb6bd"],["/js/12.04bf618d5108375e45c1.js","c4175892d260b22776908e818bad538d"],["/js/13.04bf618d5108375e45c1.js","a8d4150cdb736e3bdd4de135a187e03a"],["/js/14.04bf618d5108375e45c1.js","c8fe77663480693084019b04136bebe7"],["/js/15.04bf618d5108375e45c1.js","fd35c8b6849bbbb23c1b04ee0ec6956e"],["/js/16.04bf618d5108375e45c1.js","bfad7559e9430b09fcd00bf80660b972"],["/js/17.04bf618d5108375e45c1.js","d20062f1ede2813a4bc1841d972381dc"],["/js/18.04bf618d5108375e45c1.js","f1b341bd1b879de948e23473bb00072b"],["/js/19.04bf618d5108375e45c1.js","a1772ee48476869da0896ca40f19685d"],["/js/2.04bf618d5108375e45c1.js","807e6f715e5afd0315a559587524cff2"],["/js/20.04bf618d5108375e45c1.js","925cb697867d339d7bc11797d96b3025"],["/js/21.04bf618d5108375e45c1.js","911ddbad6693be95cc295ef113f8f6db"],["/js/22.04bf618d5108375e45c1.js","bf83be8f7ba66de219b4c9683322e288"],["/js/23.04bf618d5108375e45c1.js","2c9ee5b22ab6d084678f86cbc40c4b50"],["/js/24.04bf618d5108375e45c1.js","a172ac00a64fe0974e97886f3ae20ed5"],["/js/25.04bf618d5108375e45c1.js","bc1ab4a8b9701b12c16a1ac0edbfe2cf"],["/js/26.04bf618d5108375e45c1.js","5f5abb2682ca87b104afa56f6a72f0b3"],["/js/27.04bf618d5108375e45c1.js","8bf8835539d676637ccd05824e081cd5"],["/js/28.04bf618d5108375e45c1.js","bd190e04fabd8d9b6093ebc487a8009c"],["/js/29.04bf618d5108375e45c1.js","e2e75abee2aed5a18571de2bd7d7520b"],["/js/3.04bf618d5108375e45c1.js","3e60d1afd1b37f5c1ab9d14a3b0d85cf"],["/js/30.04bf618d5108375e45c1.js","5243a5732741cdefd97b2122859cc5af"],["/js/31.04bf618d5108375e45c1.js","95d28969ea9b3d70bddbf4600b6b67d4"],["/js/32.04bf618d5108375e45c1.js","8d9ac51f181ca019c41c67274c5d953a"],["/js/33.04bf618d5108375e45c1.js","7765bbf264534321885957864a81e06e"],["/js/34.04bf618d5108375e45c1.js","023e80c4f142aa11aa975a105399f7e3"],["/js/35.04bf618d5108375e45c1.js","146ad8b074248644febc763825e862ef"],["/js/36.04bf618d5108375e45c1.js","54a47a2034664de7b6e723f77c86ec3f"],["/js/37.04bf618d5108375e45c1.js","37b156b7e40ccc9e5e4ab2002f7b32e2"],["/js/38.04bf618d5108375e45c1.js","b10c607aa3423671ca0f9842a55feb04"],["/js/39.04bf618d5108375e45c1.js","0c708b75fbffbccd6dad80772e8dba53"],["/js/4.04bf618d5108375e45c1.js","7da369ee2cd9aa0b8be6722c77a00d30"],["/js/40.04bf618d5108375e45c1.js","0719fb5069a8271576095f87daf8f282"],["/js/404.04bf618d5108375e45c1.js","ba3c7536e38847d14529ce753bf71d1a"],["/js/41.04bf618d5108375e45c1.js","5333c93036a631565404b33a9bc90ace"],["/js/42.04bf618d5108375e45c1.js","6ec7534842d45cd9093549ea2e228bcd"],["/js/43.04bf618d5108375e45c1.js","f15afb0eb4f152bafe3dbb3159048f64"],["/js/44.04bf618d5108375e45c1.js","ab97fe332c26063c476c34272374a8e1"],["/js/45.04bf618d5108375e45c1.js","bf5c0c8f142dd6d1c5fb2995bd1d04fc"],["/js/46.04bf618d5108375e45c1.js","4257cdcd58fbbae649f174fab2787558"],["/js/47.04bf618d5108375e45c1.js","0d615bd0b06dff836d896c47f9d672d5"],["/js/48.04bf618d5108375e45c1.js","d8c20aa50669be36908a4cb3496827bb"],["/js/49.04bf618d5108375e45c1.js","d519a35bcd67b8646f8163b775ea2c39"],["/js/5.04bf618d5108375e45c1.js","452178f25ef16e96fdb84f34b96d848b"],["/js/50.04bf618d5108375e45c1.js","250ada74b117f3e62a8e7086a361d0e6"],["/js/51.04bf618d5108375e45c1.js","d13f4baa2f644c7fc8edc328e4bc19b1"],["/js/52.04bf618d5108375e45c1.js","22fc05286c21d3ceafcd92d008a8e0c6"],["/js/53.04bf618d5108375e45c1.js","ee764b859842cbf726323c430fd2697b"],["/js/54.04bf618d5108375e45c1.js","80ebededfcf52bc0c7357b15db90300c"],["/js/55.04bf618d5108375e45c1.js","13d0baba721abb40baa7b2bb7174bf46"],["/js/56.04bf618d5108375e45c1.js","d5316fa7346c7a0b6cd23c38f2fccf1f"],["/js/57.04bf618d5108375e45c1.js","e34d01c065b9b52c44b306470476c5c3"],["/js/58.04bf618d5108375e45c1.js","716d024d81579808068c3352a42bd9b8"],["/js/59.04bf618d5108375e45c1.js","b1210161577d45876c7d60bd21e0ceb2"],["/js/6.04bf618d5108375e45c1.js","20221fc1f891122befce334719e40967"],["/js/60.04bf618d5108375e45c1.js","9280f39183c4a806b8bf7ed5ea5fec88"],["/js/61.04bf618d5108375e45c1.js","7d898348bef2685a1cc8455aa0c4564c"],["/js/62.04bf618d5108375e45c1.js","183ee6d687d8e67d6da7a496b015dde5"],["/js/63.04bf618d5108375e45c1.js","321a4ce092c8f276b453fe013bf8b039"],["/js/64.04bf618d5108375e45c1.js","b370e37ab3bdec6381cb2a591a73f6f3"],["/js/65.04bf618d5108375e45c1.js","b9d0fe515d534b1894224cff47821acc"],["/js/66.04bf618d5108375e45c1.js","6b4bd52740872d936902530023e92015"],["/js/67.04bf618d5108375e45c1.js","5fff6cdd4d9e4de351c2021a762195c3"],["/js/68.04bf618d5108375e45c1.js","9e3e5cecc0145f968f2496a8184caad1"],["/js/69.04bf618d5108375e45c1.js","38332ce8de93ba03c44dac7cbb4e5e8e"],["/js/7.04bf618d5108375e45c1.js","a0b4da730e5d86b1e642a085b4458e92"],["/js/70.04bf618d5108375e45c1.js","7930dd2cf09bb070da1a29a691560dd4"],["/js/71.04bf618d5108375e45c1.js","e84a43f99456a8e298165b82b5a4f815"],["/js/72.04bf618d5108375e45c1.js","e9d3e90486494a02c81140bdb553c787"],["/js/73.04bf618d5108375e45c1.js","cf009f4b6b07453dd7e9fb4ecb224c3c"],["/js/74.04bf618d5108375e45c1.js","e588582c07c08f9f1d98cc171c3a745b"],["/js/75.04bf618d5108375e45c1.js","b66ae07dc0be7d521a0f621b7b80bd19"],["/js/76.04bf618d5108375e45c1.js","f0942ab14712c8b8ea95303b64a5f4f1"],["/js/77.04bf618d5108375e45c1.js","7dd27dd3eb7896e9dbb4f62fcaf0ca32"],["/js/78.04bf618d5108375e45c1.js","b5d0b15978517ad53367f739e2455e05"],["/js/79.04bf618d5108375e45c1.js","b00dbd8a3136623adca2680583ba004a"],["/js/8.04bf618d5108375e45c1.js","e933e9ddc6388276ad8b5f13eaa66ff7"],["/js/80.04bf618d5108375e45c1.js","d74fe46c8780520e4f00ac64f3798e7e"],["/js/81.04bf618d5108375e45c1.js","f173a23b89419fb90c02dfcfccd396f6"],["/js/82.04bf618d5108375e45c1.js","3b5fa0a6cb22881a24b7f376bb39b476"],["/js/83.04bf618d5108375e45c1.js","76f3eeb6272c8d22a2b78166ab4677b8"],["/js/84.04bf618d5108375e45c1.js","89dfe97be8500b90a15b54a5edafa56f"],["/js/85.04bf618d5108375e45c1.js","3e50d20da816916c90f1d16fa7143aa1"],["/js/86.04bf618d5108375e45c1.js","c1c0d3919232b2cad97d975e5bcab79d"],["/js/87.04bf618d5108375e45c1.js","97c4b95279e087f899a8bc10b0d6b9d9"],["/js/88.04bf618d5108375e45c1.js","91fe76ba4230484ed3de742cae2fbf01"],["/js/89.04bf618d5108375e45c1.js","c8c7ecfff7eb4bbc0417a37659937d5a"],["/js/9.04bf618d5108375e45c1.js","48be562e34a3e8f36433096050b08518"],["/js/90.04bf618d5108375e45c1.js","5bf73a03318b684c904116d29e04408f"],["/js/91.04bf618d5108375e45c1.js","af4abaaefcaff7aefa4d6fe5301576dc"],["/js/92.04bf618d5108375e45c1.js","2ad92a97c0548d3921de7c0afcc19e2a"],["/js/93.04bf618d5108375e45c1.js","0bf68323016094c9791ae91569315c04"],["/js/94.04bf618d5108375e45c1.js","c876f2c42b23e413580a2ed8d0793943"],["/js/95.04bf618d5108375e45c1.js","24a4a477737f13200f2bdb3aa54c0ada"],["/js/96.04bf618d5108375e45c1.js","2e610cbf1d3e4587b1a3d63d49d7b932"],["/js/AccountSignupModal.04bf618d5108375e45c1.js","892bd656f939ddb8091bcabbbc4d6331"],["/js/ResetPasswordModal.04bf618d5108375e45c1.js","0aaf39f854e5f6c8964166d72f28d1ce"],["/js/account-info.04bf618d5108375e45c1.js","ee44dc8f4d60d5ddbcc6c3cef2bfeb13"],["/js/account.04bf618d5108375e45c1.js","403f81f2cc36c9b8077b3b305e8e8d86"],["/js/contract.04bf618d5108375e45c1.js","2a9eeb787bc5566d24ee84a841750c5b"],["/js/default~modals~mt5.04bf618d5108375e45c1.js","bc46b723d104aff49d0263f5b661352f"],["/js/main.04bf618d5108375e45c1.js","bd7f486b9c9234662d2f8f728bb14a7f"],["/js/modals.04bf618d5108375e45c1.js","ea71c5ec24d6dd03f7ff3ded56baf86d"],["/js/mt5.04bf618d5108375e45c1.js","b3b95930e2655f43076ee5d8da33fba7"],["/js/notification-messages.04bf618d5108375e45c1.js","68ccef4fc8830f37abc76e6353e4e330"],["/js/push-notification.04bf618d5108375e45c1.js","ae926e1bd285aea7735d07f0c788886a"],["/js/reports.04bf618d5108375e45c1.js","4cf6d0e200c68effd4f5ded41cdcf5a9"],["/js/screen-small.04bf618d5108375e45c1.js","e12339358a8cba71703148bd7ba6a0de"],["/js/settings-chart.04bf618d5108375e45c1.js","d3038fab01bc873825b34ae6006656a6"],["/js/settings-language.04bf618d5108375e45c1.js","14e4ec5d4d403840db71dc4e2c259bdb"],["/js/settings-theme.04bf618d5108375e45c1.js","ae8f784d431b08a9e7902e07ad386206"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.04bf618d5108375e45c1.js","b1b5b2674d61432abd830f006c345273"],["/js/two-month-picker.04bf618d5108375e45c1.js","174ebefb5a5a6b9a76fad0e66c62c6a3"],["/js/vendors~smart_chart.04bf618d5108375e45c1.js","9b5d52fe761f5a666c4448b4ef4e2a67"],["/js/work-in-progress.04bf618d5108375e45c1.js","9d30cc22d6513dfb4d920d158ee5a2eb"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







