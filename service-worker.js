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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","82d7c05d392071b4b64f71e038564bb1"],["/css/modals.css","62e7597ca1172b727f92bf4019a051f6"],["/css/mt5.css","9fa787fcceef267e0dcdf397e8e39271"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","7616e598d2afc98e8eaa5f6a8d19741b"],["/js/0.2e102dba8e018f15a22b.js","d61f68152ba7e61cdfaac2cf8433a049"],["/js/1.2e102dba8e018f15a22b.js","6cd8aa168e82002c1f188c600b96d9ab"],["/js/10.2e102dba8e018f15a22b.js","a97ac68f721f67f7836a3faaf4219e70"],["/js/11.2e102dba8e018f15a22b.js","4f51dd34a0d4c0931b5463b4b50b38b1"],["/js/12.2e102dba8e018f15a22b.js","e02ad423e01f9590a3f9c7d65aba2705"],["/js/13.2e102dba8e018f15a22b.js","d9ce0dedcc768ccc66b418b3afab64ef"],["/js/14.2e102dba8e018f15a22b.js","cf766bca8d1f3cb10f8ddc19cad6c1f0"],["/js/15.2e102dba8e018f15a22b.js","7e9fe18ff15a8a43f342746bbab9576a"],["/js/16.2e102dba8e018f15a22b.js","1d73e6f714f54ad0c5698ee9cf28013d"],["/js/17.2e102dba8e018f15a22b.js","26688ba2278ec744dac59780883b54c2"],["/js/18.2e102dba8e018f15a22b.js","6486b3cb605d74ff5730b3a3f7129302"],["/js/19.2e102dba8e018f15a22b.js","166dc07ca8f412508ed532c065f88cb3"],["/js/2.2e102dba8e018f15a22b.js","3c58ea2c9807a2dff679068fb674a0fa"],["/js/20.2e102dba8e018f15a22b.js","d1f5dedaafbf9faaf26f4721a2a252d6"],["/js/21.2e102dba8e018f15a22b.js","0dfc0a88245c05a72eee634f506bd09e"],["/js/22.2e102dba8e018f15a22b.js","a3381bd958eae69018f4a682448a9b00"],["/js/23.2e102dba8e018f15a22b.js","0a0a9bd6f02c42c0b2e86dadfa65943c"],["/js/24.2e102dba8e018f15a22b.js","2c0a17d91e1ee03eb8bca588dde3e81a"],["/js/25.2e102dba8e018f15a22b.js","596168f48e630404731481c9570c0c76"],["/js/26.2e102dba8e018f15a22b.js","2ffe44c4f86fb86c28ea974dc6941220"],["/js/27.2e102dba8e018f15a22b.js","0fa4f88691d82698da5117659f4b3c61"],["/js/28.2e102dba8e018f15a22b.js","7033568d9958b6c4dc7f87a6f92e24d4"],["/js/29.2e102dba8e018f15a22b.js","3a9ad2a99d1738c57dcbf0fb409fdc92"],["/js/3.2e102dba8e018f15a22b.js","79f62d698e47bd4a30cc12300d7f6c43"],["/js/30.2e102dba8e018f15a22b.js","8fb75ae908dbcd30392c78484618f8f1"],["/js/31.2e102dba8e018f15a22b.js","4a8abfd844dbde9f15d9cb380ec8f88c"],["/js/32.2e102dba8e018f15a22b.js","c4ac6f1c88758d7bc7263e28e642aed7"],["/js/33.2e102dba8e018f15a22b.js","cf149497deab6c16e669bce7bc151b99"],["/js/34.2e102dba8e018f15a22b.js","ae6a2533d539b83cd35904ccbc0ddb91"],["/js/35.2e102dba8e018f15a22b.js","14a3556f01110f6a972f73d41187142b"],["/js/36.2e102dba8e018f15a22b.js","f4995977b91deb4025936bde5b0c77c4"],["/js/37.2e102dba8e018f15a22b.js","2425a502fa88164274e95615e139201f"],["/js/38.2e102dba8e018f15a22b.js","3a39fe360d5a7fa66b74f7e9d484820c"],["/js/39.2e102dba8e018f15a22b.js","22925aed612a9175798a96dd221e9a31"],["/js/4.2e102dba8e018f15a22b.js","230a7475d74228644f9ddda8d8fc2dc2"],["/js/40.2e102dba8e018f15a22b.js","44b55f4c345f3ce3ba7f532612f6a3bf"],["/js/404.2e102dba8e018f15a22b.js","3e88b082271fd25faf4333aa9c7c3284"],["/js/41.2e102dba8e018f15a22b.js","f3035aac069718d52e01ae6e4fa7fb05"],["/js/42.2e102dba8e018f15a22b.js","5eca6bcda2bfa6f1bc4cdd087a7554af"],["/js/43.2e102dba8e018f15a22b.js","e58b48ad0723b0270ffa59463c5f8190"],["/js/44.2e102dba8e018f15a22b.js","8410c8b65e065649b3697ed07519540a"],["/js/45.2e102dba8e018f15a22b.js","cc9c2f2db63dd136a679d16caa869434"],["/js/46.2e102dba8e018f15a22b.js","374543695104741dc7c15c15b5fb7234"],["/js/47.2e102dba8e018f15a22b.js","c5640a279a5e7cba087f32fe2fd46e03"],["/js/48.2e102dba8e018f15a22b.js","81bd4909ee77230fd3c7f8e7aa145fe5"],["/js/49.2e102dba8e018f15a22b.js","b6ce1769514b8c83df828a746e47dfca"],["/js/5.2e102dba8e018f15a22b.js","f589972883523007dc0b8d90df63a13a"],["/js/50.2e102dba8e018f15a22b.js","c4d5c9d34dda17efed933c87d7f11901"],["/js/51.2e102dba8e018f15a22b.js","8854ffb349f8554fc177180eb62c9d31"],["/js/52.2e102dba8e018f15a22b.js","dc184e79582468254b98d916c4eadeb0"],["/js/53.2e102dba8e018f15a22b.js","c4ea0679eff1d3bae4297eec3dc6515c"],["/js/54.2e102dba8e018f15a22b.js","43b1f3a80d61eff670516850c4b2b63f"],["/js/55.2e102dba8e018f15a22b.js","cccda6acdb8d6e4a647bc5df66c1c076"],["/js/56.2e102dba8e018f15a22b.js","168fd069ce528da14ba2b5df2214bf79"],["/js/57.2e102dba8e018f15a22b.js","0be819634c25fa03a0765cb8b3f08764"],["/js/58.2e102dba8e018f15a22b.js","f4f144bbed3246cc784b2cf45b95aab0"],["/js/59.2e102dba8e018f15a22b.js","29b208ba50b070c2744bb42dae85f399"],["/js/6.2e102dba8e018f15a22b.js","445424debbb5a27aeb72cc73b1dd2d2f"],["/js/60.2e102dba8e018f15a22b.js","537d19064ff6d7b609bbc57025c0ed6b"],["/js/61.2e102dba8e018f15a22b.js","ce449d52a7e82d56652a59b6753d3714"],["/js/62.2e102dba8e018f15a22b.js","3186a7b93482d58dc1ddacc2f10bc1a1"],["/js/63.2e102dba8e018f15a22b.js","e5469dca243acc223b94a687726eaeb2"],["/js/64.2e102dba8e018f15a22b.js","5f6b51b8052843c2d8e33705e7d3857b"],["/js/65.2e102dba8e018f15a22b.js","05097d643c6bfcd38ddd7a898f032757"],["/js/66.2e102dba8e018f15a22b.js","6025776720e873582b1a643bb3d77c5b"],["/js/67.2e102dba8e018f15a22b.js","e202b4b63fab2509b0dfc18ddfb932e5"],["/js/68.2e102dba8e018f15a22b.js","0642562bf891e59c2d380247eb43a5f7"],["/js/69.2e102dba8e018f15a22b.js","b0017ce89f4ddfcbf0cd580ef47a45ba"],["/js/7.2e102dba8e018f15a22b.js","3ecc8f6493cf9e217205613d9085c792"],["/js/70.2e102dba8e018f15a22b.js","5fea4af4c9e25fb57a6c76418eca897b"],["/js/71.2e102dba8e018f15a22b.js","1aa41efcd02e17b2583590b47cd800b1"],["/js/72.2e102dba8e018f15a22b.js","71f728231ed65f7d2d8406a2f1b31028"],["/js/73.2e102dba8e018f15a22b.js","adc0385628a6808eb00396f13e8c6c24"],["/js/74.2e102dba8e018f15a22b.js","d4c26ed298907e9ea0c27d41f0a120ff"],["/js/75.2e102dba8e018f15a22b.js","61279e121d15897cad30b6cca6c25a2a"],["/js/76.2e102dba8e018f15a22b.js","ae5971316857a21be4b9a1dbbbe08d66"],["/js/77.2e102dba8e018f15a22b.js","519d32fe1ac3fc321627d045343fbda1"],["/js/78.2e102dba8e018f15a22b.js","e010fd1d2bdf2d18d27b34faf7b9fa10"],["/js/79.2e102dba8e018f15a22b.js","2030b8b3ae9a225bb07dc6f8150738af"],["/js/8.2e102dba8e018f15a22b.js","4c74da0e9b9e83f8af564e88f8652e5c"],["/js/80.2e102dba8e018f15a22b.js","e767533d0e7ca2f29dc704e6d8a63e54"],["/js/81.2e102dba8e018f15a22b.js","8c65afaf2e87572344a355f8c941ad88"],["/js/82.2e102dba8e018f15a22b.js","cd46c55422351a8ff7221d414af6bcb9"],["/js/83.2e102dba8e018f15a22b.js","9c66ae54471815a4f5b4741b09bcee5f"],["/js/84.2e102dba8e018f15a22b.js","e2e31cfd9a78997496107fee74b4b69e"],["/js/85.2e102dba8e018f15a22b.js","309955d88895019e8c9738cb488e82f7"],["/js/86.2e102dba8e018f15a22b.js","b8964695dad70cabeb4e2db16ed0b650"],["/js/87.2e102dba8e018f15a22b.js","bdc9fe3b86f96f70accc3d7ecc06bb88"],["/js/88.2e102dba8e018f15a22b.js","812c50f6ba9cc6afc1fff202d529bc76"],["/js/89.2e102dba8e018f15a22b.js","f914b2b65e2fc5fbca2d528b711ccdb0"],["/js/9.2e102dba8e018f15a22b.js","cfb6e1fcd08110462382204b253c0de6"],["/js/90.2e102dba8e018f15a22b.js","b121eacb48e754ff10bb339b00a33765"],["/js/91.2e102dba8e018f15a22b.js","ceee837d84e34f09da8b78add05769ad"],["/js/AccountSignupModal.2e102dba8e018f15a22b.js","12346a96377238ce773ed05f772575d6"],["/js/ResetPasswordModal.2e102dba8e018f15a22b.js","7dec76ffe1aaa4d80a040ae9eaf32a92"],["/js/account-info.2e102dba8e018f15a22b.js","40666b5adc28aeab5aa962a9ff52869d"],["/js/account.2e102dba8e018f15a22b.js","929884115b12f8799eba47fb592560e6"],["/js/contract.2e102dba8e018f15a22b.js","709d1f942c927105667f799bd9ab4ed9"],["/js/modals.2e102dba8e018f15a22b.js","84da3c3d92f7caf17b0f4cb61a5223a8"],["/js/mt5.2e102dba8e018f15a22b.js","d7f91a3885733b9fa60d389aaa86b387"],["/js/notification-messages.2e102dba8e018f15a22b.js","c0c7119bcf6bba6cd55370ff35a30d02"],["/js/push-notification.2e102dba8e018f15a22b.js","4df4f14d074b4899096531fecb37ee6f"],["/js/reports.2e102dba8e018f15a22b.js","d470ebe6336f142995604d77f4c2a3d9"],["/js/screen-small.2e102dba8e018f15a22b.js","dc04d928f6a85d8fa15ed0ad27b2a7d8"],["/js/settings-chart.2e102dba8e018f15a22b.js","2c1b41119f1b9e2ea9fbb8f53835857e"],["/js/settings-language.2e102dba8e018f15a22b.js","0d4f3235696136fd76f96583c09d5402"],["/js/settings-theme.2e102dba8e018f15a22b.js","4b0c146aa0dcadad2fc34d2729f7c5a3"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.2e102dba8e018f15a22b.js","ef421502a5114a08e4b58f008810f0d5"],["/js/two-month-picker.2e102dba8e018f15a22b.js","bcfcbbcb2e7e93d9037aa9fbcd8b4ab7"],["/js/vendors~main.2e102dba8e018f15a22b.js","54a58d75342b1ee4b6b2aa86015e69c2"],["/js/vendors~smart_chart.2e102dba8e018f15a22b.js","72b23cd624b23377fa7610f164dc3162"],["/js/work-in-progress.2e102dba8e018f15a22b.js","a30df5f2aa5b576a53dfd5c26f8ca2d9"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







