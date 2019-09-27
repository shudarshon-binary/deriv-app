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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","4c550d8bcc0e53038025121b1adf95c1"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","007fc0d38a6950834223c1ba71b89032"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","14185ce92d4c9fb40ab79d24c4a9bb7e"],["/js/0.36306afc58af738d408a.js","c10d1b052c3efa8fa65808ab6637265d"],["/js/1.36306afc58af738d408a.js","bca744577e0da4338eb7ee5711f971d3"],["/js/10.36306afc58af738d408a.js","ce4755c0363fa9da4592a1c1c54e858e"],["/js/11.36306afc58af738d408a.js","60bd6fb297c3b9cbfe119254c07e4fd4"],["/js/12.36306afc58af738d408a.js","e7e0271367a20dca46bdf3753453a1ef"],["/js/13.36306afc58af738d408a.js","9440f598381059c787cc7569396d9e94"],["/js/14.36306afc58af738d408a.js","b473ff062147747765a763c299a57eb7"],["/js/15.36306afc58af738d408a.js","94f8c72361c74ff8ce9921ccf515f169"],["/js/16.36306afc58af738d408a.js","1a11273713d8ad5c01058b9189b0f032"],["/js/17.36306afc58af738d408a.js","13b0103cf9596ae79eac27b577d3db8e"],["/js/18.36306afc58af738d408a.js","be2d72e4c637721dc54b4d01a57ffcc8"],["/js/19.36306afc58af738d408a.js","75a0cd5689310f37de4b13a63cfced9a"],["/js/2.36306afc58af738d408a.js","21ee5c6f37a8b5cdc24c910d4e24cbf2"],["/js/20.36306afc58af738d408a.js","541d6604edc9f94e33e5ce5304db8796"],["/js/21.36306afc58af738d408a.js","2876a0c89c58e4d08e39531c4c5c802f"],["/js/22.36306afc58af738d408a.js","dd1da6ceb062fdebb1b17e6d634eec34"],["/js/23.36306afc58af738d408a.js","02451326444f6ba787a3f42984311584"],["/js/24.36306afc58af738d408a.js","7ee97c3c45b44f003254ecc003c769f4"],["/js/25.36306afc58af738d408a.js","e5fc2f0c050a638badb22e01de13305a"],["/js/26.36306afc58af738d408a.js","2017efd6365d64ba7c6e04a13ef2f482"],["/js/27.36306afc58af738d408a.js","064fd8e537620e5419382b0dba6f8772"],["/js/28.36306afc58af738d408a.js","8ae023cd122344b2f6c36a858c6dba09"],["/js/29.36306afc58af738d408a.js","61453b2de4728ed00df824d86f590245"],["/js/3.36306afc58af738d408a.js","6adb04497bbd2722d3224ed654fe49b2"],["/js/30.36306afc58af738d408a.js","b3c2cda3bfdbc2b8167b4dddb3fc2f3a"],["/js/31.36306afc58af738d408a.js","45ed68c7f1130f39182a15b3599c1e8f"],["/js/32.36306afc58af738d408a.js","7fa3086bb9b16c7fe9421ed9339614e6"],["/js/33.36306afc58af738d408a.js","9dda05bb9d59a0d71624eff39ad75a83"],["/js/34.36306afc58af738d408a.js","e2b9afc3bc2352289cfe11442b0f8d9b"],["/js/35.36306afc58af738d408a.js","5db3de62c6ae5c70284289d948f959bb"],["/js/36.36306afc58af738d408a.js","5505e0ac5d58adf8f27606691dea26da"],["/js/37.36306afc58af738d408a.js","41d994fff8b10719b6e75623b1930d61"],["/js/38.36306afc58af738d408a.js","74f48b7a21a41e4ec5455969a77109ff"],["/js/39.36306afc58af738d408a.js","13083474a6209bac61b74d3bf527c472"],["/js/4.36306afc58af738d408a.js","45b804891f6cea6d7f6f7aa11629f5a0"],["/js/40.36306afc58af738d408a.js","e42b7dc17dd1170567127a247a694bb0"],["/js/404.36306afc58af738d408a.js","777f1b5a36df6c3589bdbcb8a7333e93"],["/js/41.36306afc58af738d408a.js","e5a389d834c832a2d11eccdcdfb0752e"],["/js/42.36306afc58af738d408a.js","9f81fdbef1b692035f58bdb98cd7c40e"],["/js/43.36306afc58af738d408a.js","d30bdea1b783cb514f277cd8bd65f274"],["/js/44.36306afc58af738d408a.js","7ed2685bb28f4f47ee0e23410e0ee1d7"],["/js/45.36306afc58af738d408a.js","c308d01ccaad63665a4847ead55236bf"],["/js/46.36306afc58af738d408a.js","f5d5a122adde38dc65ff37e60e8b9bd0"],["/js/47.36306afc58af738d408a.js","ae6a50b4d00a3c981c3a55bc8ea64813"],["/js/48.36306afc58af738d408a.js","8e2787dbb926b30da38d5cb53da17d16"],["/js/49.36306afc58af738d408a.js","2109687d850d472001e510efd67146cb"],["/js/5.36306afc58af738d408a.js","f3046a9569035633d1f172cd6bc8d816"],["/js/50.36306afc58af738d408a.js","2ddcf49294e7da3d498d26ac16885641"],["/js/51.36306afc58af738d408a.js","0ce476cab8956e6a7d669caad1552210"],["/js/52.36306afc58af738d408a.js","1c0267229fa7b6b0f91b40e6d15e808f"],["/js/53.36306afc58af738d408a.js","d9f550cce7f60bf618a13d90a6026943"],["/js/54.36306afc58af738d408a.js","d6f94c150bcd7637c36a7681fd1b968d"],["/js/55.36306afc58af738d408a.js","1ecf0c5809ed9ed52771f6040fb252c6"],["/js/56.36306afc58af738d408a.js","b5aae19900b2ab30c9e68defc29835c6"],["/js/57.36306afc58af738d408a.js","f2e20cd8de7d7e6e8ee2101fe73d097a"],["/js/58.36306afc58af738d408a.js","ac6c5b9d23c5d0e1965b0d947fcb6ed6"],["/js/59.36306afc58af738d408a.js","23815292858770ee5c5bfce47ecd4619"],["/js/6.36306afc58af738d408a.js","c56a2325f4291e66e65d4001613c2aa9"],["/js/60.36306afc58af738d408a.js","2a3ba872073850274f725d51fda7df96"],["/js/61.36306afc58af738d408a.js","4d7c00b84c5bccf786448376dda36289"],["/js/62.36306afc58af738d408a.js","a196da9402defe34c87d2c3f02215361"],["/js/63.36306afc58af738d408a.js","9c937a71c8461cd7fa8966c382d07b25"],["/js/64.36306afc58af738d408a.js","af4f0cf04fa4bc787983deeb742b2f00"],["/js/65.36306afc58af738d408a.js","21fc0b0afc040d104f52e7a9f138c026"],["/js/66.36306afc58af738d408a.js","96fd0a9704074aba7ef6fa84cd393e43"],["/js/67.36306afc58af738d408a.js","568301ea5809501ce385fc86b4409809"],["/js/68.36306afc58af738d408a.js","b4b08d95b617459c81cbc678bd342673"],["/js/69.36306afc58af738d408a.js","a94b06087bacad06081a2d94fed57726"],["/js/7.36306afc58af738d408a.js","7b45ede85e776cc47444d46287be1272"],["/js/70.36306afc58af738d408a.js","627a5913e57c77e156e6e9faf432fa01"],["/js/71.36306afc58af738d408a.js","b2ff2bfd1a77c9f4fa3226a74be60c9d"],["/js/72.36306afc58af738d408a.js","449a75eb266fab14138676022348ba81"],["/js/73.36306afc58af738d408a.js","1956d5f729c136d0a367869f10c47149"],["/js/74.36306afc58af738d408a.js","3776fcb7c77d0da54ee20ad09429923a"],["/js/75.36306afc58af738d408a.js","e314fb3e795543c818242688c49faf83"],["/js/76.36306afc58af738d408a.js","32719c955d352aae46f9d0205f82173a"],["/js/77.36306afc58af738d408a.js","78c9869c2022f8e7def92719484f1430"],["/js/78.36306afc58af738d408a.js","464c9cfb8c461a444835baeb18c7b552"],["/js/79.36306afc58af738d408a.js","95c12e29467105dc57a7cc9582fd4483"],["/js/8.36306afc58af738d408a.js","8af4c10585a9efc27a95ba1391565bd7"],["/js/80.36306afc58af738d408a.js","f1a4a5465a1f2a296a639f6a055a5340"],["/js/81.36306afc58af738d408a.js","2fff7c9f6de73aa38ee009c1e2edb7ad"],["/js/82.36306afc58af738d408a.js","da50a2cada9be153b3a6f6e1bdc75846"],["/js/83.36306afc58af738d408a.js","2fe915c4d4fa62fc91035144c80ed25a"],["/js/84.36306afc58af738d408a.js","323c2b5b5caf2352494bac624973419d"],["/js/85.36306afc58af738d408a.js","d3e0b71c344ea2cbd092ba85ac90dda1"],["/js/86.36306afc58af738d408a.js","72d1bffdd993667bfaa83f05797e9d25"],["/js/87.36306afc58af738d408a.js","c374109809179a9ff03e70df20bea49c"],["/js/88.36306afc58af738d408a.js","6e0df22287ea82639a428c4ad474dbe8"],["/js/89.36306afc58af738d408a.js","91a846da5ab993685fcfba1629d8d3cf"],["/js/9.36306afc58af738d408a.js","1705948ee10bafcd46533325aabfa5fc"],["/js/90.36306afc58af738d408a.js","ba1e2f8a464a5da5114b5f52bb841640"],["/js/91.36306afc58af738d408a.js","0e171617ff322ae0c0384ae0c4e8f304"],["/js/AccountSignupModal.36306afc58af738d408a.js","94928a7795e809d6e7852751af7e73a9"],["/js/ResetPasswordModal.36306afc58af738d408a.js","304131e4daeaa0b513269e156745f49f"],["/js/account-info.36306afc58af738d408a.js","0702f2b285cd6f6e008ed1757e6aa4af"],["/js/account.36306afc58af738d408a.js","a5a8df7c071ee369e9ae760237dab23a"],["/js/contract.36306afc58af738d408a.js","df4d69a978732a4bb3c12a131b89a92b"],["/js/modals.36306afc58af738d408a.js","71d5b428bf907769ffb6fa32361855eb"],["/js/mt5.36306afc58af738d408a.js","3211744888185b5ea7e59889d3c0c533"],["/js/notification-messages.36306afc58af738d408a.js","ddf9e9bf3160366be7627c4032d1b54c"],["/js/push-notification.36306afc58af738d408a.js","46c3f8b0c0832b4e49d3b791e50d0c33"],["/js/reports.36306afc58af738d408a.js","e56ad350bdb170f4e69533f97fdbf63d"],["/js/screen-small.36306afc58af738d408a.js","1ed2c98cbb50e3acec161d1ec98d1bb6"],["/js/settings-chart.36306afc58af738d408a.js","82ac00e812293f2ef9c01e6c90a44d44"],["/js/settings-language.36306afc58af738d408a.js","2f2376456f552a0b538df1858233d00c"],["/js/settings-theme.36306afc58af738d408a.js","e3f0e3be2180fbdf2ecedf26916aa90b"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.36306afc58af738d408a.js","42817ed61ce603ca5a5474bc51c1c9c1"],["/js/two-month-picker.36306afc58af738d408a.js","225e8a8c391956896fb45d8aa6ea83ad"],["/js/vendors~main.36306afc58af738d408a.js","3173bd8ac16b3abcc10eee95c162a2e4"],["/js/vendors~smart_chart.36306afc58af738d408a.js","b84a1644ce01b724482699fb9db3c2cc"],["/js/work-in-progress.36306afc58af738d408a.js","caa647ddcc93766985b6c0647e8ce319"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







