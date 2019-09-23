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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","5b27732c6acd66f9087b26930992bf0a"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","de035a18b965aa06354124df3d0b5dd7"],["/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","60cd666aeb8580922ed2bce64699ef05"],["/js/0.ae3a56e49b914aa3fea4.js","4d558d7740300df645da90d0cb2cc66c"],["/js/1.ae3a56e49b914aa3fea4.js","3afcf48a2b047991079274c795617c68"],["/js/10.ae3a56e49b914aa3fea4.js","193febc34b14ef31e318f71206eae8fa"],["/js/11.ae3a56e49b914aa3fea4.js","9297a0d55441cebd310cf925132b95b2"],["/js/12.ae3a56e49b914aa3fea4.js","fbaa1545adc0c8fc4cc228f7f4677f81"],["/js/13.ae3a56e49b914aa3fea4.js","8576897f54706fe36fd72995649d2bf4"],["/js/14.ae3a56e49b914aa3fea4.js","e2ee6070c543f223e9b9e6e88d1f59f4"],["/js/15.ae3a56e49b914aa3fea4.js","ca1ad0a7c73f7693dd9378e9dc725c3f"],["/js/16.ae3a56e49b914aa3fea4.js","40d764eb57e66b08a6c3a6b60e6087da"],["/js/17.ae3a56e49b914aa3fea4.js","38cc8ef38b1a91564c30634a9e21ba5e"],["/js/18.ae3a56e49b914aa3fea4.js","220e64701fa13ca72ea831a2b2e07035"],["/js/19.ae3a56e49b914aa3fea4.js","c71bdbf67f50d58a339d3acd681bd7e3"],["/js/2.ae3a56e49b914aa3fea4.js","8923ca4d424b0072b9485c4f530a8cfe"],["/js/20.ae3a56e49b914aa3fea4.js","94357029fd70534934631e363598884f"],["/js/21.ae3a56e49b914aa3fea4.js","eeb6eb7e3684f49757a0a22b699937ba"],["/js/22.ae3a56e49b914aa3fea4.js","70c0dcbd01481cd7cc952567740e3f1c"],["/js/23.ae3a56e49b914aa3fea4.js","7ec23b652ea136852c259cf0748ed9c0"],["/js/24.ae3a56e49b914aa3fea4.js","8e072874905a72f5db2e255ad5faf9eb"],["/js/25.ae3a56e49b914aa3fea4.js","62b5c54afd803304c7471c5b166782b7"],["/js/26.ae3a56e49b914aa3fea4.js","e78d4cb0c647b91762f3f3f0409aec46"],["/js/27.ae3a56e49b914aa3fea4.js","eb5618339129c92d0dfb9be140c5b7c2"],["/js/28.ae3a56e49b914aa3fea4.js","9f8ba3913f437c80cdc7d3801253a3c4"],["/js/29.ae3a56e49b914aa3fea4.js","d51af0e07f8ad3fb9be6ca2055e19f4a"],["/js/3.ae3a56e49b914aa3fea4.js","ddb8b322eaaf2029b23bd2a29ca122ab"],["/js/30.ae3a56e49b914aa3fea4.js","66fdcf8896f6bb83db7872f10456b2d5"],["/js/31.ae3a56e49b914aa3fea4.js","143a67d896b7d3c59ea3ce0bc6b87f97"],["/js/32.ae3a56e49b914aa3fea4.js","056d5baa0d75302b4707f3f37da4ad23"],["/js/33.ae3a56e49b914aa3fea4.js","bd430f27d869df5c1228d08c0c7d84be"],["/js/34.ae3a56e49b914aa3fea4.js","44e65fb89683d69e79224c76be5085d1"],["/js/35.ae3a56e49b914aa3fea4.js","42d9f31ae2ea8eb4bbca44b57362b6f9"],["/js/36.ae3a56e49b914aa3fea4.js","e0a122bb9acf27e9e5064806c5f8c98c"],["/js/37.ae3a56e49b914aa3fea4.js","b0195338583e1cc968ab73734d617173"],["/js/38.ae3a56e49b914aa3fea4.js","4809021bf1d0bb6df90afdb95f8f9b2d"],["/js/39.ae3a56e49b914aa3fea4.js","8ba9fa1510b23436a7ce6c534057489c"],["/js/4.ae3a56e49b914aa3fea4.js","603dd0b29d2da06f5804afc77c63cea9"],["/js/40.ae3a56e49b914aa3fea4.js","a28c1f6ea812810ee8dddb6b24d98248"],["/js/404.ae3a56e49b914aa3fea4.js","b387d15666e732b5cc59e93c4b15950b"],["/js/41.ae3a56e49b914aa3fea4.js","e71620f16c5319ef835cf550b2afb489"],["/js/42.ae3a56e49b914aa3fea4.js","505517ddc94de010818d7c34a216f223"],["/js/43.ae3a56e49b914aa3fea4.js","38493f5a63ffeddb50603e09dec935f2"],["/js/44.ae3a56e49b914aa3fea4.js","e8f148a016de85a24b9bf148e3628ac7"],["/js/45.ae3a56e49b914aa3fea4.js","ffb9592d9fadf066da1c394012590ecd"],["/js/46.ae3a56e49b914aa3fea4.js","a4100384de6e0a1f35df47e6dcab0de6"],["/js/47.ae3a56e49b914aa3fea4.js","8de8348105f13b37bff3dd68cd4edd75"],["/js/48.ae3a56e49b914aa3fea4.js","5893e4175e673771a2e8f6787fd9433c"],["/js/49.ae3a56e49b914aa3fea4.js","0ed0709f53990a1448a54d84d6d74e26"],["/js/5.ae3a56e49b914aa3fea4.js","08f08a83b295da52a325dc99d3a1ddbe"],["/js/50.ae3a56e49b914aa3fea4.js","0bfd41670f48129e1091cbb280739a3d"],["/js/51.ae3a56e49b914aa3fea4.js","6a962b75b074a7c0afe74d6d97bb4098"],["/js/52.ae3a56e49b914aa3fea4.js","ddaf227acb2b17e14fa41dba45b8f0e3"],["/js/53.ae3a56e49b914aa3fea4.js","21975dd9c4ee4081e09af978a95ff1cf"],["/js/54.ae3a56e49b914aa3fea4.js","db32366c274c16acd72f359d26c59da3"],["/js/55.ae3a56e49b914aa3fea4.js","7250645eb0ae3ed737c435be344985c7"],["/js/56.ae3a56e49b914aa3fea4.js","967529ec93e2568114354c7688429ab0"],["/js/57.ae3a56e49b914aa3fea4.js","c524e64558965432d465e41609c10036"],["/js/58.ae3a56e49b914aa3fea4.js","91624072a2ff8cbeb0e6e155c7b9685b"],["/js/59.ae3a56e49b914aa3fea4.js","59bd79b950dbdea23a943c4d811790b1"],["/js/6.ae3a56e49b914aa3fea4.js","95d4ddbe86b06056d2a49f2072c63b28"],["/js/60.ae3a56e49b914aa3fea4.js","b84b18e9d17fe728a2bfb54a2f239fbe"],["/js/61.ae3a56e49b914aa3fea4.js","a79a54cee52ffa60b9227aabce6a2d11"],["/js/62.ae3a56e49b914aa3fea4.js","c68e8ec0dfe95cf3e518598b56ebde77"],["/js/63.ae3a56e49b914aa3fea4.js","b5584c3fe3b63fc6ab82673ac777a355"],["/js/64.ae3a56e49b914aa3fea4.js","2363200c2b96a6fd2d7ce8eb0d116c0b"],["/js/65.ae3a56e49b914aa3fea4.js","fab5535a41776f7d6d2aec9825f67499"],["/js/66.ae3a56e49b914aa3fea4.js","06f457c33298c0d7ad18800671c800e3"],["/js/67.ae3a56e49b914aa3fea4.js","855eb9e9c435aacae7cb3cac6c8612b9"],["/js/68.ae3a56e49b914aa3fea4.js","b4c7780182b29873039af369d9bc297b"],["/js/69.ae3a56e49b914aa3fea4.js","d29b036fd81b50f9136426d48059f637"],["/js/7.ae3a56e49b914aa3fea4.js","9dbf6241b2b7aadab34be51f88501382"],["/js/70.ae3a56e49b914aa3fea4.js","7284973041d3d9e1cf474cc33bf3e756"],["/js/71.ae3a56e49b914aa3fea4.js","1aa1487606f072d78d399ae6b0ccb14b"],["/js/72.ae3a56e49b914aa3fea4.js","0153db0146e5b6e8f0d4d8f15409e4af"],["/js/73.ae3a56e49b914aa3fea4.js","edc4aa3e3d0140be06b5b021978188a1"],["/js/74.ae3a56e49b914aa3fea4.js","e419a360322ddf138ab608106be91c1e"],["/js/75.ae3a56e49b914aa3fea4.js","816c0f940127dae1f03496b398b0ff7f"],["/js/76.ae3a56e49b914aa3fea4.js","d4e03d720c8b9cbeb69c78f5a66d8ff9"],["/js/77.ae3a56e49b914aa3fea4.js","a102f4e91fdaab2fd0ed878784389cbb"],["/js/78.ae3a56e49b914aa3fea4.js","c54d63bad4e0cfb26d2abd7e512646a9"],["/js/79.ae3a56e49b914aa3fea4.js","87701f38c49856eef37de0291f339248"],["/js/8.ae3a56e49b914aa3fea4.js","3b7e51fcc728592ba44ace624ed78d74"],["/js/80.ae3a56e49b914aa3fea4.js","1b2a9989c4ba624aa43e6eb9b668dc3f"],["/js/81.ae3a56e49b914aa3fea4.js","be252fadae43b69087a0e12d1568cae3"],["/js/82.ae3a56e49b914aa3fea4.js","b3bbfa806d37cb7596e41d62b486cf64"],["/js/83.ae3a56e49b914aa3fea4.js","92976ccc58e3b5554a13c71420dfee3f"],["/js/84.ae3a56e49b914aa3fea4.js","87f055c7659c534712cdc06d8d0c6c1c"],["/js/85.ae3a56e49b914aa3fea4.js","e7bd1c16f41452ba5c0caf2c83bc780f"],["/js/86.ae3a56e49b914aa3fea4.js","a1494bd88b982a090d9972f1269b1025"],["/js/87.ae3a56e49b914aa3fea4.js","b38bf48c7b872a23b9897aed4c9a10e3"],["/js/88.ae3a56e49b914aa3fea4.js","33f313bd8f7d67661ba5c94f58e42e5c"],["/js/9.ae3a56e49b914aa3fea4.js","f155ef0f57d1e8a7b85a09f0cf674db0"],["/js/AccountSignupModal.ae3a56e49b914aa3fea4.js","7fddb0992d9ce18ac86d8682cacfb6f1"],["/js/account-info.ae3a56e49b914aa3fea4.js","58e4dd73987b301913027f1153612133"],["/js/account.ae3a56e49b914aa3fea4.js","e1cf792ea426de6065c2d1d904955674"],["/js/contract.ae3a56e49b914aa3fea4.js","e53e9ef4b3e164e365bfab49015ce9e8"],["/js/modals.ae3a56e49b914aa3fea4.js","70db02a08b072bdf70bc0b3ef97b4dee"],["/js/notification-messages.ae3a56e49b914aa3fea4.js","39bb314f9c8a63184f7ac26574c04ee7"],["/js/push-notification.ae3a56e49b914aa3fea4.js","fba37d3e938c9f8f5ebbf8f7d0bb9ec5"],["/js/reports.ae3a56e49b914aa3fea4.js","19d9574bf3bad7a26c4b5581cd7b467e"],["/js/screen-small.ae3a56e49b914aa3fea4.js","a616bb80cd4ee4f71aab3cde7c738367"],["/js/settings-chart.ae3a56e49b914aa3fea4.js","4830e8432f46b3fc52ce70bafb4ebd09"],["/js/settings-language.ae3a56e49b914aa3fea4.js","8c974ea3518104e19e117f289b1bfc6d"],["/js/settings-theme.ae3a56e49b914aa3fea4.js","530324ede96c10ab65828388227e6369"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.ae3a56e49b914aa3fea4.js","28fb55d6f65e5de197099e3539c2d55e"],["/js/two-month-picker.ae3a56e49b914aa3fea4.js","9857e68d07b723a5b4d3878fd7a871b2"],["/js/vendors~main.ae3a56e49b914aa3fea4.js","9b924b9dca20f797243d25e187b8a93a"],["/js/vendors~smart_chart.ae3a56e49b914aa3fea4.js","1bf369f593cd2d3724f2ab278b426b49"],["/js/work-in-progress.ae3a56e49b914aa3fea4.js","1a2df70abe1ee1c234964071c5c004a6"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







