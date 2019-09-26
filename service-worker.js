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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","5b27732c6acd66f9087b26930992bf0a"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","5b691acbb846bc536abc04fcf61cc545"],["/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/css/mt5.css","9fa787fcceef267e0dcdf397e8e39271"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","dfe22c5e7cf7c2a5264818a9caa4f1b3"],["/js/0.34fa5962ece3ff55e3f2.js","937bb21a12ffbdd91ddb5f56c32222f2"],["/js/1.34fa5962ece3ff55e3f2.js","c964d337cf660a1c5c568652d78a5f1b"],["/js/10.34fa5962ece3ff55e3f2.js","4fb82ca7a2a8c0b11e96edb3966ab54c"],["/js/11.34fa5962ece3ff55e3f2.js","73422b7211227c76cee5a86f6f7e4486"],["/js/12.34fa5962ece3ff55e3f2.js","0f662fdd4af752fc2c1637df0e05de28"],["/js/13.34fa5962ece3ff55e3f2.js","ac275b3af3f39d87ba710194f8183da7"],["/js/14.34fa5962ece3ff55e3f2.js","e7f1fa982175f1ad0593787a3832252b"],["/js/15.34fa5962ece3ff55e3f2.js","ffa3d566bc5cf225691ac74f91ae0610"],["/js/16.34fa5962ece3ff55e3f2.js","1f9d8cdb9dad7fc7532447058ad4b550"],["/js/17.34fa5962ece3ff55e3f2.js","cd2beb3853feb2f3a29356086ddeb70a"],["/js/18.34fa5962ece3ff55e3f2.js","cb9a485ff4ea1e03eda80bb03a28b13a"],["/js/19.34fa5962ece3ff55e3f2.js","8f81ec2375daf278c9b315bd5a5566e2"],["/js/2.34fa5962ece3ff55e3f2.js","1f580e962be25ad950af8afc5dbb0945"],["/js/20.34fa5962ece3ff55e3f2.js","286077eac0f8fc230ab2c452602aa28b"],["/js/21.34fa5962ece3ff55e3f2.js","4b063e76eb7e83b23421ef34d3ff0838"],["/js/22.34fa5962ece3ff55e3f2.js","a4e124cffe815153bc4dc1eafc27c8c5"],["/js/23.34fa5962ece3ff55e3f2.js","937fded0abf794ed5a34fde5cd22ead9"],["/js/24.34fa5962ece3ff55e3f2.js","4af129aeec6ba0f978c08b7ddf052b21"],["/js/25.34fa5962ece3ff55e3f2.js","65111fd7b35d156d30b6d23c97430ef9"],["/js/26.34fa5962ece3ff55e3f2.js","0a6378bf24bbac601d80358cf8346e8e"],["/js/27.34fa5962ece3ff55e3f2.js","8e5ca400ffc168bad5aa6d58ccb6c093"],["/js/28.34fa5962ece3ff55e3f2.js","51f1439429a1b8fce20e0a7c900ca682"],["/js/29.34fa5962ece3ff55e3f2.js","9a997c343bbfd17a80c906004760e0ed"],["/js/3.34fa5962ece3ff55e3f2.js","66ba6776236e3de014802bd4011ea29f"],["/js/30.34fa5962ece3ff55e3f2.js","4e4fdd8d97ae9f663cb09eb12bb1e30c"],["/js/31.34fa5962ece3ff55e3f2.js","ce5f5d15011f79b0dd81abaca3edbf4a"],["/js/32.34fa5962ece3ff55e3f2.js","d866ac50a83732097a4f21933872d992"],["/js/33.34fa5962ece3ff55e3f2.js","edfc86fb3f58339e46d2a18302ca9594"],["/js/34.34fa5962ece3ff55e3f2.js","38e59b490d481524de3e617e9bcb0966"],["/js/35.34fa5962ece3ff55e3f2.js","befc8932df6327656603c3051c5b95b6"],["/js/36.34fa5962ece3ff55e3f2.js","9d2d17f10dee08e421acd6f280d9c6e4"],["/js/37.34fa5962ece3ff55e3f2.js","e268d9fcf63abb82f30564bbc77e16cc"],["/js/38.34fa5962ece3ff55e3f2.js","86f7179d590265bd7e331e41b81c9cb2"],["/js/39.34fa5962ece3ff55e3f2.js","5b715b33e79b2e5c466797e89546cfdb"],["/js/4.34fa5962ece3ff55e3f2.js","acfb11705ec9c55f47685abdf263a675"],["/js/40.34fa5962ece3ff55e3f2.js","dbbf822074d05f61534cc3b54d71236a"],["/js/404.34fa5962ece3ff55e3f2.js","8231829afac4eb5942f531955e7d3423"],["/js/41.34fa5962ece3ff55e3f2.js","70c9c3ab0b10e95b6597b09b27e755bd"],["/js/42.34fa5962ece3ff55e3f2.js","edfe490da23feae38c2a131d41aff98b"],["/js/43.34fa5962ece3ff55e3f2.js","169eb505e675a25c4a36c4e990a79d66"],["/js/44.34fa5962ece3ff55e3f2.js","f0d1d79143bd637f8705250346da1e5a"],["/js/45.34fa5962ece3ff55e3f2.js","680054f90b62d8da2613be6effae098a"],["/js/46.34fa5962ece3ff55e3f2.js","9da6230d72b15b750086c7170d0d302f"],["/js/47.34fa5962ece3ff55e3f2.js","1e53ad0228597508930629c6228f1d1d"],["/js/48.34fa5962ece3ff55e3f2.js","6154f3ef97a82489f58de5566ca4a3b1"],["/js/49.34fa5962ece3ff55e3f2.js","b254f2008afcca19879a267945526b59"],["/js/5.34fa5962ece3ff55e3f2.js","f0e4384f028971b7625816a8dd13e1e8"],["/js/50.34fa5962ece3ff55e3f2.js","5f2a975ebcfaddebfea828c0629890a8"],["/js/51.34fa5962ece3ff55e3f2.js","65511a522239673fe6ffa623ad2caa21"],["/js/52.34fa5962ece3ff55e3f2.js","4212caf1575c08aee77cb65d31648fb3"],["/js/53.34fa5962ece3ff55e3f2.js","96a5e618793a89cfae06a8cac3dce85b"],["/js/54.34fa5962ece3ff55e3f2.js","7717376e65609106366141fac9c20d55"],["/js/55.34fa5962ece3ff55e3f2.js","8132c647345e81bbf7722f8ddda0e614"],["/js/56.34fa5962ece3ff55e3f2.js","869c481898c72a1cbb12f84d3debc2a0"],["/js/57.34fa5962ece3ff55e3f2.js","d55699c74dc695e6c3f9c8853b03c7be"],["/js/58.34fa5962ece3ff55e3f2.js","588cd16388b6008cc0ada44972912d11"],["/js/59.34fa5962ece3ff55e3f2.js","1d754b93afa2cc40acc3f56dc91f530a"],["/js/6.34fa5962ece3ff55e3f2.js","a60cb31ab8e3ce477fa1d8e2db51b763"],["/js/60.34fa5962ece3ff55e3f2.js","6bdb70cd3ba87c20e322e6a128c0e914"],["/js/61.34fa5962ece3ff55e3f2.js","f843141afeb8ab0a35287658767e2db1"],["/js/62.34fa5962ece3ff55e3f2.js","f465e4636fa8075c3298588afea2aa73"],["/js/63.34fa5962ece3ff55e3f2.js","4d518340420a2d8dd4b9df6818decea5"],["/js/64.34fa5962ece3ff55e3f2.js","b22bde168c1579f1d8a7d112a93cea94"],["/js/65.34fa5962ece3ff55e3f2.js","8990315922a7fe4252392b57891e997f"],["/js/66.34fa5962ece3ff55e3f2.js","caea66bb74ff5d4dfd790a99b432f034"],["/js/67.34fa5962ece3ff55e3f2.js","d2ef5c1f8c2d006a041a1a55881878ed"],["/js/68.34fa5962ece3ff55e3f2.js","c36639240c5030946ebc7d9d1c6448ba"],["/js/69.34fa5962ece3ff55e3f2.js","cb91e9fd66cf85ccacf866f19a4d8548"],["/js/7.34fa5962ece3ff55e3f2.js","db3d78bd795afaaad626acad6976ebdd"],["/js/70.34fa5962ece3ff55e3f2.js","15874c15426e368397468e83911b2270"],["/js/71.34fa5962ece3ff55e3f2.js","6b6559a6b7c6a82ab58e07bf0cdeb4e8"],["/js/72.34fa5962ece3ff55e3f2.js","5fd24d766a14b795c2c72b760906f61f"],["/js/73.34fa5962ece3ff55e3f2.js","b509cbe532f15e3f004c92995aa39e74"],["/js/74.34fa5962ece3ff55e3f2.js","7ddaec06d1ecfc6584f9f28801cb631c"],["/js/75.34fa5962ece3ff55e3f2.js","df1d802beee7d53eda1f26cdd5eb8bb9"],["/js/76.34fa5962ece3ff55e3f2.js","66a9f8365fb00b4ec77a66921f0d00a6"],["/js/77.34fa5962ece3ff55e3f2.js","eec280dcb06979b8d3bc2afa14b2351b"],["/js/78.34fa5962ece3ff55e3f2.js","76c0295c9a625bcadf197694564f2c97"],["/js/79.34fa5962ece3ff55e3f2.js","29950aaf8a7032f06c19022d7400ed6f"],["/js/8.34fa5962ece3ff55e3f2.js","341b2489dcfd9351cf4e373a8eda82af"],["/js/80.34fa5962ece3ff55e3f2.js","f7c8a6d5a5b902579325cf3e0c68ca47"],["/js/81.34fa5962ece3ff55e3f2.js","ac44d89a5481c15ffa44cd63fbab2d93"],["/js/82.34fa5962ece3ff55e3f2.js","ae57ccd196dfcab12a2f9669b3fef33c"],["/js/83.34fa5962ece3ff55e3f2.js","996fcd25ced27db64fe4a4d1346068f2"],["/js/84.34fa5962ece3ff55e3f2.js","8932a53b29ab1664f4feb76879622dec"],["/js/85.34fa5962ece3ff55e3f2.js","6711441520253379c28881991bc1759e"],["/js/86.34fa5962ece3ff55e3f2.js","876cb1b78ddd75e950dc282f188c7f2f"],["/js/87.34fa5962ece3ff55e3f2.js","d483ff9c087cb2f67b523a53d294beae"],["/js/88.34fa5962ece3ff55e3f2.js","f6bc2bcf798e8892e9a040ff3c7b637b"],["/js/89.34fa5962ece3ff55e3f2.js","95af79950a841c529669ba33feecf997"],["/js/9.34fa5962ece3ff55e3f2.js","8a79900320a6ed1a156963ce7e583580"],["/js/90.34fa5962ece3ff55e3f2.js","98d916d86710e0efb91acefe621e3904"],["/js/91.34fa5962ece3ff55e3f2.js","4d826c1de81c75fe82ea61cf400549f4"],["/js/AccountSignupModal.34fa5962ece3ff55e3f2.js","e211e37c8e8bf5451dcac4104bee0bf2"],["/js/account-info.34fa5962ece3ff55e3f2.js","943bde86756f7a726978d8b3c83b73f5"],["/js/account.34fa5962ece3ff55e3f2.js","77295fe66239466e22f8b3d9a6340d64"],["/js/contract.34fa5962ece3ff55e3f2.js","1ff2d8283cd90a533760ecf75389671f"],["/js/modals.34fa5962ece3ff55e3f2.js","c7b71d571fdc8317120d7e7f45e8698f"],["/js/mt5.34fa5962ece3ff55e3f2.js","b455d0399d8e9d0d01c53881359e9387"],["/js/notification-messages.34fa5962ece3ff55e3f2.js","b85ac5e94fa625190c45c0c418956729"],["/js/push-notification.34fa5962ece3ff55e3f2.js","200db1ed1a56be475aae7d5a0c9d9d59"],["/js/reports.34fa5962ece3ff55e3f2.js","8f53c8ce7dbb152701b0487aebc64b60"],["/js/screen-small.34fa5962ece3ff55e3f2.js","f655706715e031c0b3bff4d166b8009d"],["/js/settings-chart.34fa5962ece3ff55e3f2.js","396930d606ce88d0b74fc20a296d58d0"],["/js/settings-language.34fa5962ece3ff55e3f2.js","4f42511585e042dc6f4a3a674537567a"],["/js/settings-theme.34fa5962ece3ff55e3f2.js","2b5fadfff02f2502a165fde093d3b2ca"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.34fa5962ece3ff55e3f2.js","0fdc7f060f4bce5498635bf528c7dd20"],["/js/two-month-picker.34fa5962ece3ff55e3f2.js","8729d6738cf2d698844fe4d24dd8091a"],["/js/vendors~main.34fa5962ece3ff55e3f2.js","16cf7b4b8609edd780a49a50f9d5dc9d"],["/js/vendors~smart_chart.34fa5962ece3ff55e3f2.js","f6d50281e0eadfb31babf0a73341b22d"],["/js/work-in-progress.34fa5962ece3ff55e3f2.js","ccbb49fe7158e3f64915ff2bb6211a23"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







