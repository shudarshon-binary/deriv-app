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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","1eba88204d2cc73d264991f71dfcd857"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","3a7eaa03c4ebd872d83f39ad2f712dcc"],["/js/0.930a8bb2fb2129fb5de2.js","de826a3c47d2d55de08854b56031f507"],["/js/1.930a8bb2fb2129fb5de2.js","af686ba0c711681cf85b64b43bb0e419"],["/js/10.930a8bb2fb2129fb5de2.js","89a81b963bb975f339b5d0774864d6d0"],["/js/11.930a8bb2fb2129fb5de2.js","cac07509732a83dfeefa86b6227fe3a3"],["/js/12.930a8bb2fb2129fb5de2.js","9a1a6d45263ebca3a190f65de32d904f"],["/js/13.930a8bb2fb2129fb5de2.js","80066864913d1c38ec046a1c59830677"],["/js/14.930a8bb2fb2129fb5de2.js","790f9db7a9e0e0602103790be0a29a87"],["/js/15.930a8bb2fb2129fb5de2.js","ad5c78530bb1471846021e34527dcfe4"],["/js/16.930a8bb2fb2129fb5de2.js","495cfa2843a5c9629674dfcb04ae4652"],["/js/17.930a8bb2fb2129fb5de2.js","9a032c8c067800b5225618da8e6623f0"],["/js/18.930a8bb2fb2129fb5de2.js","9f91bd18c053538a5c198259b1a33d20"],["/js/19.930a8bb2fb2129fb5de2.js","d3e753c7b2266f455fc154d6e0f4a9bb"],["/js/2.930a8bb2fb2129fb5de2.js","67a2d5bd70656b7deebd2554eeebdadb"],["/js/20.930a8bb2fb2129fb5de2.js","fe3d83a640d6aa02e759e5d6a4f7533f"],["/js/21.930a8bb2fb2129fb5de2.js","f1f2691150e5dfa49cede540def8c39f"],["/js/22.930a8bb2fb2129fb5de2.js","626a894c287fdab91c7a30f78a5a4aeb"],["/js/23.930a8bb2fb2129fb5de2.js","521bcfc5a607ad52c64d02e212b9db02"],["/js/24.930a8bb2fb2129fb5de2.js","49763b4f10576385112f8d8b62ca70c9"],["/js/25.930a8bb2fb2129fb5de2.js","44cf2c87032bff006d00a49383b0bf50"],["/js/26.930a8bb2fb2129fb5de2.js","b7aeed5e8614181e0ea3c2dca71a228f"],["/js/27.930a8bb2fb2129fb5de2.js","9336dc6dde3db327d3d386106c2c6cde"],["/js/28.930a8bb2fb2129fb5de2.js","411e44112813b2db8c6d70086abac5dd"],["/js/29.930a8bb2fb2129fb5de2.js","824fd5ba951aa877fdd415ae756e2ec0"],["/js/3.930a8bb2fb2129fb5de2.js","11a87814558cc048c09ecc08710846dd"],["/js/30.930a8bb2fb2129fb5de2.js","9e275508761c40f410baf4aa0081db09"],["/js/31.930a8bb2fb2129fb5de2.js","56633f4c61fef3b5ce46aa36f60ee4f7"],["/js/32.930a8bb2fb2129fb5de2.js","641c502b8dacf46711d4437a654f9617"],["/js/33.930a8bb2fb2129fb5de2.js","b9c0be3126714a7d2b95b9964f546fe0"],["/js/34.930a8bb2fb2129fb5de2.js","0cf7cfa64de1ff6e7fbab18a1da4d248"],["/js/35.930a8bb2fb2129fb5de2.js","37777b252dfb33b9f662f4882d4444cd"],["/js/36.930a8bb2fb2129fb5de2.js","27165f73036cdf6e5fc3631e3a87cca8"],["/js/37.930a8bb2fb2129fb5de2.js","a5f6dfc0222b1817291627580ded93d1"],["/js/38.930a8bb2fb2129fb5de2.js","a08d2db0b2e0bcf32de912d181efc98f"],["/js/39.930a8bb2fb2129fb5de2.js","1adfeab59ccd76a16f3c90de7cbe30f6"],["/js/4.930a8bb2fb2129fb5de2.js","4a0e55db6a89f09ca49d5a6b48d2fde0"],["/js/40.930a8bb2fb2129fb5de2.js","df77a31428b43e167592b2a38fb55347"],["/js/404.930a8bb2fb2129fb5de2.js","3bd657ac555ce568bc73215a4b898bae"],["/js/41.930a8bb2fb2129fb5de2.js","a3d8a07f239670b07207e652a43928f8"],["/js/42.930a8bb2fb2129fb5de2.js","06e28f5298e8c42609ee420c26f9ee5a"],["/js/43.930a8bb2fb2129fb5de2.js","9bf3c098ab0f900bbc6c1d7ec0343cc1"],["/js/44.930a8bb2fb2129fb5de2.js","2ba03aa3750b5bac8bd37ed8c7bc764e"],["/js/45.930a8bb2fb2129fb5de2.js","04f7e2448ac744a8526b5f877f1f298a"],["/js/46.930a8bb2fb2129fb5de2.js","56e293d8286c46cd50faac616e771f05"],["/js/47.930a8bb2fb2129fb5de2.js","42a2bf57446f048529fe2c605a72f03f"],["/js/48.930a8bb2fb2129fb5de2.js","74f809ba02e7d574ed6113b3831e05af"],["/js/49.930a8bb2fb2129fb5de2.js","1b3009bb101a4680dacf328873f0f920"],["/js/5.930a8bb2fb2129fb5de2.js","85e5d3c345215d6e2e6c084f77dcc14d"],["/js/50.930a8bb2fb2129fb5de2.js","ce11cee2688cd7c77c95bf81df77369c"],["/js/51.930a8bb2fb2129fb5de2.js","9ad7d4251f6dc2a52304942b5973cd40"],["/js/52.930a8bb2fb2129fb5de2.js","e22a9e5aea784c2c3b6cc78842ed1715"],["/js/53.930a8bb2fb2129fb5de2.js","f255ae995d8b360848c5a592b0b6be0a"],["/js/54.930a8bb2fb2129fb5de2.js","f99f2d92d65ff669c55abda5693cf683"],["/js/55.930a8bb2fb2129fb5de2.js","ed47a587f6cc4c8fb3b24d918ee29fb5"],["/js/56.930a8bb2fb2129fb5de2.js","7672044c75da75f34c4a8666d5a6c843"],["/js/57.930a8bb2fb2129fb5de2.js","58d2433ec2fce0ec3758b8731c411eab"],["/js/58.930a8bb2fb2129fb5de2.js","b929e74e53e060b9eccf768c560e7680"],["/js/59.930a8bb2fb2129fb5de2.js","85c5c3fc02f56aae40e0f12cf0c26319"],["/js/6.930a8bb2fb2129fb5de2.js","8254ba18e495f7b0869562df137e49b3"],["/js/60.930a8bb2fb2129fb5de2.js","3fa3fb63ce03f2056e232bbab9a73232"],["/js/61.930a8bb2fb2129fb5de2.js","208c635ef0858fd9c9787176716eaf55"],["/js/62.930a8bb2fb2129fb5de2.js","259af4d5faf123a643aef6973f933788"],["/js/63.930a8bb2fb2129fb5de2.js","b92f1e4c19bd2c232df29c16a96f5cc2"],["/js/64.930a8bb2fb2129fb5de2.js","ae9f458486b9587659ad947cc0d469bf"],["/js/65.930a8bb2fb2129fb5de2.js","1fe0526657febe83bb88871061c2ba0e"],["/js/66.930a8bb2fb2129fb5de2.js","c1aabef5526f9de6f89b101bbade297c"],["/js/67.930a8bb2fb2129fb5de2.js","1fe89a05b5a2876e142ef4f6b6248a54"],["/js/68.930a8bb2fb2129fb5de2.js","2e672812909fc7775bb76792bf47ca1c"],["/js/69.930a8bb2fb2129fb5de2.js","faa62194d77f0ecad689527de232d984"],["/js/7.930a8bb2fb2129fb5de2.js","dffe74650ac22a1629f1f9e0d52608b1"],["/js/70.930a8bb2fb2129fb5de2.js","a2a451eabec2702d83ddff991c5ebae7"],["/js/71.930a8bb2fb2129fb5de2.js","b41d2adefa20e0658b40f974796593f8"],["/js/72.930a8bb2fb2129fb5de2.js","597b93cb8d13aad71890ffd72c65f3ee"],["/js/73.930a8bb2fb2129fb5de2.js","70a0f6c8fefd1024eeaa8f351393758d"],["/js/74.930a8bb2fb2129fb5de2.js","a10d54ad54765ce344c1f7e5c2b30c9e"],["/js/75.930a8bb2fb2129fb5de2.js","aef7fb9de4e71b3a587ba296fb587f68"],["/js/76.930a8bb2fb2129fb5de2.js","05d79eb2106bca3a68e2e2b18f4c521f"],["/js/77.930a8bb2fb2129fb5de2.js","a2403664b59cb3fda0534678adc74cb5"],["/js/78.930a8bb2fb2129fb5de2.js","4ebfc5a76e34f8d1c5207d6a95c7760e"],["/js/79.930a8bb2fb2129fb5de2.js","70dda56a200bd6de2a9743a425f9dfd2"],["/js/8.930a8bb2fb2129fb5de2.js","a992fc143ffc5071cf9857d64eaeff07"],["/js/80.930a8bb2fb2129fb5de2.js","3b34549ffe09720c6fd578bda5425431"],["/js/81.930a8bb2fb2129fb5de2.js","ddd01dd24d2f6f78902a4b2b8b2f91e6"],["/js/82.930a8bb2fb2129fb5de2.js","13c2437add9b33f561ad8dbc9688beba"],["/js/83.930a8bb2fb2129fb5de2.js","b9245b3b320b4bc0c6c106991386691f"],["/js/84.930a8bb2fb2129fb5de2.js","4f753d17307c1acfc49c0b38ec7347cb"],["/js/85.930a8bb2fb2129fb5de2.js","d09a923ba6e88d80d046a423b039ad8c"],["/js/86.930a8bb2fb2129fb5de2.js","6966ef4eade7c2afa29cc7157b4743d7"],["/js/87.930a8bb2fb2129fb5de2.js","9725817309b08649cdd64483b4fbefde"],["/js/88.930a8bb2fb2129fb5de2.js","45004a6478bf657aa26641cdc154964b"],["/js/89.930a8bb2fb2129fb5de2.js","4d443e0fce426f564f9e9224bb8f3bfe"],["/js/9.930a8bb2fb2129fb5de2.js","1d11e1f69d05465c660e8771126c8ec3"],["/js/90.930a8bb2fb2129fb5de2.js","6b69b90572308ced475445dd80a44e76"],["/js/91.930a8bb2fb2129fb5de2.js","5aa0c4f43232a61f253d2bd3a215e180"],["/js/92.930a8bb2fb2129fb5de2.js","3064b81126c203c43b60892190b319e8"],["/js/93.930a8bb2fb2129fb5de2.js","dc682895c2546aa53b91d46fbda923f5"],["/js/94.930a8bb2fb2129fb5de2.js","6323224d8c19fa6f943bbc77678bfe82"],["/js/95.930a8bb2fb2129fb5de2.js","eae48ff94461e61b3e01a87a34ad984b"],["/js/96.930a8bb2fb2129fb5de2.js","d8a80d9f9ff4de9ff1e1f8412d764b03"],["/js/AccountSignupModal.930a8bb2fb2129fb5de2.js","9d6972650f1157537bec8ce3d4f7f93a"],["/js/ResetPasswordModal.930a8bb2fb2129fb5de2.js","a8006a9e2f76d4567eeb2a785a46519c"],["/js/account-info.930a8bb2fb2129fb5de2.js","25c8a52096e29c9d5bd72e57c2635920"],["/js/account.930a8bb2fb2129fb5de2.js","a4eac20431461028a097842bb4db407e"],["/js/contract.930a8bb2fb2129fb5de2.js","41c8871d1ff498d7b1454241644a3e71"],["/js/default~modals~mt5.930a8bb2fb2129fb5de2.js","fcf627be57f4b4a7dc187c40df09fe86"],["/js/main.930a8bb2fb2129fb5de2.js","63858d2da8043835f080de5d92a5cae8"],["/js/modals.930a8bb2fb2129fb5de2.js","31551d7d2c81aad43c756dffe475880c"],["/js/mt5.930a8bb2fb2129fb5de2.js","4369a175a89f09ca6198365eedfaad17"],["/js/notification-messages.930a8bb2fb2129fb5de2.js","296359f878359375391ceb0c1e860843"],["/js/push-notification.930a8bb2fb2129fb5de2.js","f2f309bc8e62e176754c2054136ddfb2"],["/js/reports.930a8bb2fb2129fb5de2.js","57972de76fd880ab4a850f848cab91b0"],["/js/screen-small.930a8bb2fb2129fb5de2.js","31063a3472a33ab190c1b18d7d91bdcc"],["/js/settings-chart.930a8bb2fb2129fb5de2.js","3cd1db8a7fb77afb457802bfb576f977"],["/js/settings-language.930a8bb2fb2129fb5de2.js","9c937261d0fefb0b8adacc23c1f93d77"],["/js/settings-theme.930a8bb2fb2129fb5de2.js","990dfb6cb598f39206de4c04e4076bd7"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.930a8bb2fb2129fb5de2.js","b21457e975a2df957f5a359897e73036"],["/js/two-month-picker.930a8bb2fb2129fb5de2.js","8ab0803f28a031c6828fb240d366e1e6"],["/js/vendors~smart_chart.930a8bb2fb2129fb5de2.js","26ebf6e24f5466126826cd5a6c6df89a"],["/js/work-in-progress.930a8bb2fb2129fb5de2.js","3cad7d76ec68af389183a707602e0998"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







