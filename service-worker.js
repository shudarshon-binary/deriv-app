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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","f69e82734ad5d09d35ad931fea53cd49"],["/css/AccountSignupModal.css","5ebd9292d0c6f5d595d848f97380933c"],["/css/account.css","dcd212e04d0e138404b6290d08e12b15"],["/css/app.css","882e7beeed8515ff9dc81950738c42b9"],["/css/modals.css","e25ecabc68d33f6fbb5faba549548917"],["/css/notification-messages.css","f1a4ea4cd06e7c0bac4b9b977bcd85cb"],["/css/reports.css","baf4d804d52b024fc9d99642c2e739fb"],["/css/screen-small.css","ce4baed7a7eade02c5b527a996e4273c"],["/css/settings-chart.css","348fe12a5ddef728ea73ee48dcb9d73e"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fe4bc470c72ab0ada9e21a5c89e1ccc0"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","6e231588b7d9dc582c410ed050297b68"],["/js/0.8d7385b0b8621a459df1.js","3e95be53ee192003612ee4b0e493c9ea"],["/js/1.8d7385b0b8621a459df1.js","09f1a2d814f29899ac793c32bb28bd36"],["/js/10.8d7385b0b8621a459df1.js","3ed19ae68022c56150ab1355b4af748f"],["/js/11.8d7385b0b8621a459df1.js","75bd9ef98ba4f0a444621fa2ae337309"],["/js/12.8d7385b0b8621a459df1.js","19907b893ed0bcaf36c469edefea8fa0"],["/js/13.8d7385b0b8621a459df1.js","b3dfcacebb6ce61643d3bd140ca78f7d"],["/js/14.8d7385b0b8621a459df1.js","f472c20062aa829774db2db2397fb8f3"],["/js/15.8d7385b0b8621a459df1.js","c7a45af8b12232c4ac2c35af66d502b0"],["/js/16.8d7385b0b8621a459df1.js","3b4c59afdeebc4a604c70dfb8906474d"],["/js/17.8d7385b0b8621a459df1.js","f10f3630f10b1b839f56484389c733ce"],["/js/18.8d7385b0b8621a459df1.js","4f1b9a0446898fadcc4d99e2b39cbb0c"],["/js/19.8d7385b0b8621a459df1.js","52cb1a1bf2b8d41dec7d24eedb62c3e2"],["/js/2.8d7385b0b8621a459df1.js","55560d85ea6e41cc845d637cb2c96008"],["/js/20.8d7385b0b8621a459df1.js","252164aa2ae5060269d19fd19fb7490d"],["/js/21.8d7385b0b8621a459df1.js","90f0b4d7f049c133affc984d02b0ebe1"],["/js/22.8d7385b0b8621a459df1.js","4225e6fa2c46fdf9e13143dad4f9177b"],["/js/23.8d7385b0b8621a459df1.js","7d0581b604f264a58e35842bdf64424d"],["/js/24.8d7385b0b8621a459df1.js","136ac275ceb93126af6b72cdfc085015"],["/js/25.8d7385b0b8621a459df1.js","61e28900c1b39338b61a14f1813440b3"],["/js/26.8d7385b0b8621a459df1.js","82b4507a5ef5c1de83c78b2586626bfb"],["/js/27.8d7385b0b8621a459df1.js","1578f1509b0a59ca0b5e842387a76f23"],["/js/28.8d7385b0b8621a459df1.js","d0df0d4cfb9a83d2da34e6f8971cff9d"],["/js/29.8d7385b0b8621a459df1.js","5f35795b86ace55a65a87cd8a5b96eb6"],["/js/3.8d7385b0b8621a459df1.js","154c977a21fcc31a4644574e0e2c221a"],["/js/30.8d7385b0b8621a459df1.js","1b651c7596df7985918540522572506b"],["/js/31.8d7385b0b8621a459df1.js","3ca967bd8ffde8aa30918dc6826f2e8d"],["/js/32.8d7385b0b8621a459df1.js","a55a5816167c0803ac8617c63a11e9e1"],["/js/33.8d7385b0b8621a459df1.js","5530eef308dd651d1c443eb348d9426b"],["/js/34.8d7385b0b8621a459df1.js","04627f43000e5b0250f46bd0f97c534f"],["/js/35.8d7385b0b8621a459df1.js","fd36d4efc6b0ecd441b6728daf177a71"],["/js/36.8d7385b0b8621a459df1.js","c97590f380c7b41479bd3fab15d68e85"],["/js/37.8d7385b0b8621a459df1.js","690174a76ae84f840346d7eebd58c8bb"],["/js/38.8d7385b0b8621a459df1.js","86b83394e2ca303622e2e7259c78ed49"],["/js/39.8d7385b0b8621a459df1.js","78941c626467dad25b50bf2c48f8b32e"],["/js/4.8d7385b0b8621a459df1.js","dd0f12f7f12af2346f403e0b786ec75f"],["/js/40.8d7385b0b8621a459df1.js","1a79a82370eacb929a0980fa62122f96"],["/js/404.8d7385b0b8621a459df1.js","d265c5cb75496c35f72ba57e56fed14e"],["/js/41.8d7385b0b8621a459df1.js","33628e88e2753af80c2da349ae05afcb"],["/js/42.8d7385b0b8621a459df1.js","596437a20c987952c143bda8dedc209a"],["/js/43.8d7385b0b8621a459df1.js","2e0454a5e34b7d052593897eb1c8e022"],["/js/44.8d7385b0b8621a459df1.js","0ed6fa71c62976e79c3ef8f9f786d551"],["/js/45.8d7385b0b8621a459df1.js","8cc5358f75eb4aeea6b5654a49f994d0"],["/js/46.8d7385b0b8621a459df1.js","83db93310e89609edd41a47aae4bcd36"],["/js/47.8d7385b0b8621a459df1.js","59e0987c19fb143aef278bede6a19fa7"],["/js/48.8d7385b0b8621a459df1.js","eb9de66dbf3e173eda3ccfebee4abc2f"],["/js/49.8d7385b0b8621a459df1.js","323b49f4f809cf2cc8801604b17d2146"],["/js/5.8d7385b0b8621a459df1.js","f831f2a8599a3ef4c0dd557e5114e7af"],["/js/50.8d7385b0b8621a459df1.js","88e1f72c0fe8ce2cf400feb280344613"],["/js/51.8d7385b0b8621a459df1.js","9a82a618e8a30d5f11709867703b1252"],["/js/52.8d7385b0b8621a459df1.js","c8901d684f94325577aeea2cca0fec98"],["/js/53.8d7385b0b8621a459df1.js","a73d79427f0a68018e86638dbae96fab"],["/js/54.8d7385b0b8621a459df1.js","cb3a90873209a2ed923162c1bcfa1309"],["/js/55.8d7385b0b8621a459df1.js","7a29289c875b0e6b8ed8ae835bff0c12"],["/js/56.8d7385b0b8621a459df1.js","091af3fc6a034f4d334c20625ed10dfd"],["/js/57.8d7385b0b8621a459df1.js","ec687be691354584ea98780cb0ac4b17"],["/js/58.8d7385b0b8621a459df1.js","1aef8f7e39901f0100051921990f3404"],["/js/59.8d7385b0b8621a459df1.js","ab3f9e432df09d449836497fe6d20e35"],["/js/6.8d7385b0b8621a459df1.js","a6ac49138a58a1aa4b50d0e27c0edc0e"],["/js/60.8d7385b0b8621a459df1.js","8e46edee33df36544876e063fae952ee"],["/js/61.8d7385b0b8621a459df1.js","fe99605143441e74db98ea78719fc260"],["/js/62.8d7385b0b8621a459df1.js","dcde7da427a44526ab60f2c22615b275"],["/js/63.8d7385b0b8621a459df1.js","ea3822dbae6bb178611043fe636a4774"],["/js/64.8d7385b0b8621a459df1.js","e883c9908ad2f00e4ab3a29225e3ede9"],["/js/65.8d7385b0b8621a459df1.js","87144c3428e0fcc72f94cb29d4368089"],["/js/66.8d7385b0b8621a459df1.js","d8b63762a14a8b1f7416943459708180"],["/js/67.8d7385b0b8621a459df1.js","990b95323791afe967da018ddc20b12f"],["/js/68.8d7385b0b8621a459df1.js","01ee3c549e7496f4f15b4e8d3fc20ec7"],["/js/69.8d7385b0b8621a459df1.js","483f2c9fbe1f7a7f16afbd88cc4b2738"],["/js/7.8d7385b0b8621a459df1.js","54dc3abc792bd73fe5809a5d87f87442"],["/js/70.8d7385b0b8621a459df1.js","2cb7fcc2aa29cfb571eac13eb72dace8"],["/js/71.8d7385b0b8621a459df1.js","63349eb278dee617b19b1c260d02a32f"],["/js/72.8d7385b0b8621a459df1.js","f8d0fe83f14488afc7362a33247b70cd"],["/js/73.8d7385b0b8621a459df1.js","b49f939899e156dd9a47b7dac743732a"],["/js/74.8d7385b0b8621a459df1.js","0b8901f410ee8262833fab06b6478228"],["/js/75.8d7385b0b8621a459df1.js","6adc14276c75544ae059c49fa475c3f4"],["/js/76.8d7385b0b8621a459df1.js","6758b6712cb3531e9b60ab26fa2f08f7"],["/js/77.8d7385b0b8621a459df1.js","d801dacf3e27849eb8d930282f8ec3fc"],["/js/78.8d7385b0b8621a459df1.js","b1025f4b9644e2c66e6b007222f29e7d"],["/js/79.8d7385b0b8621a459df1.js","0334c3cc29de15ae6f0b703d090b3775"],["/js/8.8d7385b0b8621a459df1.js","6c178782ac87532032e8f1a8000ee480"],["/js/80.8d7385b0b8621a459df1.js","4d5f4b85739332eaf7c76442ddd0b72c"],["/js/81.8d7385b0b8621a459df1.js","ba8ebf5a3f70291ffadd63c519e23094"],["/js/82.8d7385b0b8621a459df1.js","6455b021bdf22b18892c3d163961dfbf"],["/js/83.8d7385b0b8621a459df1.js","bf01f08c1e1cfbd2b6f75b40b6572f22"],["/js/84.8d7385b0b8621a459df1.js","dcc8fc168328e726bb5e64c94a84dc49"],["/js/85.8d7385b0b8621a459df1.js","976816e14b44d234667f58641977ea08"],["/js/86.8d7385b0b8621a459df1.js","5d696785326c794974a6dae834565f4c"],["/js/87.8d7385b0b8621a459df1.js","f2ae3772dce6233a3e3d5248f59e008f"],["/js/88.8d7385b0b8621a459df1.js","9fa49a73248ce7f80da4dbab98edabc7"],["/js/9.8d7385b0b8621a459df1.js","804f547a39669fb15d6b1f022975a261"],["/js/AccountSignupModal.8d7385b0b8621a459df1.js","ff0800886eb1e2145064092f163d5dc7"],["/js/account-info.8d7385b0b8621a459df1.js","03f6873d947d4aeee20093eff7ecfaed"],["/js/account.8d7385b0b8621a459df1.js","18e4b860c9a425433a04777ae4da09b2"],["/js/contract.8d7385b0b8621a459df1.js","1d93de7e8eee21a21e9d3d11811007a4"],["/js/modals.8d7385b0b8621a459df1.js","110f5de5351549ecd6e1e744d4ee2ded"],["/js/notification-messages.8d7385b0b8621a459df1.js","cb4f2415c5b404868759281b46ca5191"],["/js/push-notification.8d7385b0b8621a459df1.js","fc0dc72f634271cd0e238fd1d4f932be"],["/js/reports.8d7385b0b8621a459df1.js","9adb21be5bc526d0010aaf504a59ebf5"],["/js/screen-small.8d7385b0b8621a459df1.js","38eff8854f7a111893b6ee87827159a0"],["/js/settings-chart.8d7385b0b8621a459df1.js","4e7ddedb7ed7a0a3ec8cddae24ad9f50"],["/js/settings-language.8d7385b0b8621a459df1.js","575ff3be3cc85830d0489838192c96fd"],["/js/settings-theme.8d7385b0b8621a459df1.js","16809e96d79669a7a4b8d5e0969f80fb"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.8d7385b0b8621a459df1.js","4d492fd0f7fd7521d793a8de6660435b"],["/js/two-month-picker.8d7385b0b8621a459df1.js","728f51e8c5f45c7bb57f4e3d95733174"],["/js/vendors~main.8d7385b0b8621a459df1.js","530d599ae059b3ba818007d74f42d0f5"],["/js/vendors~smart_chart.8d7385b0b8621a459df1.js","5aef687f1b9b7c55d3b4de3f46e7342e"],["/js/work-in-progress.8d7385b0b8621a459df1.js","9286f0668bd89d2576a1f7a5399bc4e1"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







