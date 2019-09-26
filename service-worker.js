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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","1c4cced6525e16f892dfe9b12a332407"],["/css/modals.css","62e7597ca1172b727f92bf4019a051f6"],["/css/mt5.css","9fa787fcceef267e0dcdf397e8e39271"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","9c4b33c875bc184e44f3b162450c1be5"],["/js/0.aa97bab696462fc8fed7.js","aeab49338e9087fa9701a79ec3d1df9e"],["/js/1.aa97bab696462fc8fed7.js","00689d1fafdc0d96267e23d3639048ec"],["/js/10.aa97bab696462fc8fed7.js","d53db57bca0b208f6a6f22a1ee70e084"],["/js/11.aa97bab696462fc8fed7.js","e88b90e25523fc70de0a1ae5138731d8"],["/js/12.aa97bab696462fc8fed7.js","2bc806f09ebb02c325ebae4dd0e2f10b"],["/js/13.aa97bab696462fc8fed7.js","4ca7db83342cba5ee25b85dfb03a7cd2"],["/js/14.aa97bab696462fc8fed7.js","0175e079a6beac572b61a1421657c8fd"],["/js/15.aa97bab696462fc8fed7.js","d6971952273276b1efe4b9bb942a2265"],["/js/16.aa97bab696462fc8fed7.js","00ad233730b5b5b2252fea4ce22ad135"],["/js/17.aa97bab696462fc8fed7.js","11c91f0e31770164c69a5ae840e19f47"],["/js/18.aa97bab696462fc8fed7.js","cd7a40cfab46fc0f3223692bcd728ad0"],["/js/19.aa97bab696462fc8fed7.js","2b2d6e4e2dbfd4aa24f4a32b41d4d1e3"],["/js/2.aa97bab696462fc8fed7.js","d6cfc76606e0438e63826ba251346e40"],["/js/20.aa97bab696462fc8fed7.js","008e5552c43013ce37cc847f478565cd"],["/js/21.aa97bab696462fc8fed7.js","57841e23b7d77997df7a07bddc02b365"],["/js/22.aa97bab696462fc8fed7.js","0a1ecb3136cd54f9d51aaa3dfd6c248a"],["/js/23.aa97bab696462fc8fed7.js","ea8c0057b8ea9ea787087e08de4b547e"],["/js/24.aa97bab696462fc8fed7.js","f362f3a783cd8ed8a6584405b6e4ed79"],["/js/25.aa97bab696462fc8fed7.js","6429f6158daa287b0253106bdd8a054a"],["/js/26.aa97bab696462fc8fed7.js","94471d246d776bd5e8cf3d909ec98f6c"],["/js/27.aa97bab696462fc8fed7.js","1c7ef211d7d7d0a06bfb869b22746c81"],["/js/28.aa97bab696462fc8fed7.js","b1a995c9ae06b7994aca251b6c298f0d"],["/js/29.aa97bab696462fc8fed7.js","343544e89a6c03c3d9655e83b1c4141e"],["/js/3.aa97bab696462fc8fed7.js","a7a0184d97c3fa897ea5be7d656ceee0"],["/js/30.aa97bab696462fc8fed7.js","b9be98cdf314ca43194a1bce58bc6e94"],["/js/31.aa97bab696462fc8fed7.js","03a897ed13f69edd0b1497a45df66333"],["/js/32.aa97bab696462fc8fed7.js","d232d05e5703b673b5c742d53652e0c7"],["/js/33.aa97bab696462fc8fed7.js","82f87545bac17584a42bbb077e062da4"],["/js/34.aa97bab696462fc8fed7.js","d7087cde813c7dde5b476a1dc24ffaae"],["/js/35.aa97bab696462fc8fed7.js","d97460599fcfaf875ef3322764bd2d6e"],["/js/36.aa97bab696462fc8fed7.js","275077c7f131efa29215fe0ee32f5322"],["/js/37.aa97bab696462fc8fed7.js","50ba707e086acee1951db7cec38d298f"],["/js/38.aa97bab696462fc8fed7.js","be2094d4deb3717e7894850ae2f928a4"],["/js/39.aa97bab696462fc8fed7.js","42d93c75568d6559e7b65333b5223029"],["/js/4.aa97bab696462fc8fed7.js","0d0aaa3f0b8be40aa08485105049cda7"],["/js/40.aa97bab696462fc8fed7.js","70063b0b6e1fca0166253a56f85894ce"],["/js/404.aa97bab696462fc8fed7.js","54ca8cd5099dcd9084848f2bebe0bc8a"],["/js/41.aa97bab696462fc8fed7.js","ca6749e6b3d24aac39912863af9e1876"],["/js/42.aa97bab696462fc8fed7.js","eee678ef42c5f12c0857a30d76d696d1"],["/js/43.aa97bab696462fc8fed7.js","1e0e80e56cfb905450fe7a364b49b1a5"],["/js/44.aa97bab696462fc8fed7.js","cc9cb87e5c3e386c824004f1a389d542"],["/js/45.aa97bab696462fc8fed7.js","44303e0a7023341515dd4953b2e76513"],["/js/46.aa97bab696462fc8fed7.js","9f11318d7c25c6cd2b6de86e9f05f7f6"],["/js/47.aa97bab696462fc8fed7.js","4d9584591d5a8863c01a217344898d15"],["/js/48.aa97bab696462fc8fed7.js","bb9b934f32e7b4fdcb16675f622a714f"],["/js/49.aa97bab696462fc8fed7.js","30cab743669c23b3e45750ffead718af"],["/js/5.aa97bab696462fc8fed7.js","8abe05a3ebb0edf02cc1c7e8f6bb0fe2"],["/js/50.aa97bab696462fc8fed7.js","91226bc6e05321b524561d67a690c7d1"],["/js/51.aa97bab696462fc8fed7.js","96692396de90f0b6560adccb032847b5"],["/js/52.aa97bab696462fc8fed7.js","d9c5b42b1eac122419973320ee50b7d2"],["/js/53.aa97bab696462fc8fed7.js","d1ca60143943972e8071f22e9d525531"],["/js/54.aa97bab696462fc8fed7.js","11de490788fb4dddfa7b4be02a568591"],["/js/55.aa97bab696462fc8fed7.js","6240cd7f2ce522b11afac7b798650cd0"],["/js/56.aa97bab696462fc8fed7.js","6cdfae8e90e71884d514179f00df8ba1"],["/js/57.aa97bab696462fc8fed7.js","a47639d9896813c8ef7cf097098dc4a2"],["/js/58.aa97bab696462fc8fed7.js","cc5c4b6d6d81b01404877c11c160d7de"],["/js/59.aa97bab696462fc8fed7.js","b052d7d99cfb104639b3f97915debd1c"],["/js/6.aa97bab696462fc8fed7.js","8d2cced956de78b274f3544369fd8d2d"],["/js/60.aa97bab696462fc8fed7.js","c6d9071ade6f3ddac50b35d56a3979aa"],["/js/61.aa97bab696462fc8fed7.js","2e29625d7a49a66171de087b8d3eece8"],["/js/62.aa97bab696462fc8fed7.js","ac62abacc2f04f6ec3d6c33a8dd822cd"],["/js/63.aa97bab696462fc8fed7.js","b10001a608f23e8f7cbd0ce65c7e207b"],["/js/64.aa97bab696462fc8fed7.js","d61ae578c99628420fa6573d37952e72"],["/js/65.aa97bab696462fc8fed7.js","61042ed579e511858501880f71140e56"],["/js/66.aa97bab696462fc8fed7.js","047420ae2fc32a9e2095ba9e00397569"],["/js/67.aa97bab696462fc8fed7.js","7e1de9bbb5fbbe251d2e96d7a870dfe2"],["/js/68.aa97bab696462fc8fed7.js","33296a4f8e7eee411e456da2430fa6d9"],["/js/69.aa97bab696462fc8fed7.js","c14b7894e5daa6e6d7ac9665f0358243"],["/js/7.aa97bab696462fc8fed7.js","a9613ea0601547e028c7158218d0bd01"],["/js/70.aa97bab696462fc8fed7.js","4157a5d2f22b5d794b39a5701ff21651"],["/js/71.aa97bab696462fc8fed7.js","22d3392cd44198fb600070a42dfa451b"],["/js/72.aa97bab696462fc8fed7.js","61b595f35334b1a1c5ab59dbc2c8dbcf"],["/js/73.aa97bab696462fc8fed7.js","b4d9198d8b2a41dbed3274eed04c9394"],["/js/74.aa97bab696462fc8fed7.js","700a8ab8541ecb229b8d2a005060ef2f"],["/js/75.aa97bab696462fc8fed7.js","3f7d09dab5254478bff0332b81d54892"],["/js/76.aa97bab696462fc8fed7.js","74a1f77a8c03f98e2c6e612b95b599bb"],["/js/77.aa97bab696462fc8fed7.js","cd4c6241345e418478652e9f62eddfc5"],["/js/78.aa97bab696462fc8fed7.js","a1a0411f73c73485345a787df3552774"],["/js/79.aa97bab696462fc8fed7.js","dcb4a74c184fef9585b14af485e76c67"],["/js/8.aa97bab696462fc8fed7.js","af41ef8105956637f49416693960c875"],["/js/80.aa97bab696462fc8fed7.js","7c0c4eee3fc89b8b325b099b056524d6"],["/js/81.aa97bab696462fc8fed7.js","b438652fc6120c4d2fb2c22b2d7a6f66"],["/js/82.aa97bab696462fc8fed7.js","ffe6349d82a8c8600e3c13b6b600de24"],["/js/83.aa97bab696462fc8fed7.js","0c6907876d53d6085c7eb4a1d61eea56"],["/js/84.aa97bab696462fc8fed7.js","0b9d7209633379d3a07431efbdf453c4"],["/js/85.aa97bab696462fc8fed7.js","85ee403fcdff823090e51b63c4f96c22"],["/js/86.aa97bab696462fc8fed7.js","19192dee3c3322d3aa6fe883c4fc042c"],["/js/87.aa97bab696462fc8fed7.js","aaf8919d7ede8d104aedd53e6b306f20"],["/js/88.aa97bab696462fc8fed7.js","75a403db69848790730624d634bbb094"],["/js/89.aa97bab696462fc8fed7.js","1df29f25f0be2bd4a537a6acd1679bdf"],["/js/9.aa97bab696462fc8fed7.js","d15873cf69984841a09c66e85a80c876"],["/js/90.aa97bab696462fc8fed7.js","a532291960184df6392ec83d50f0b81c"],["/js/91.aa97bab696462fc8fed7.js","2ffd28921acecf1fb5902622783fff14"],["/js/AccountSignupModal.aa97bab696462fc8fed7.js","488a1b94a4d3fc20430e3b804e2122e9"],["/js/ResetPasswordModal.aa97bab696462fc8fed7.js","a56f467b5ef3b84a3ed7d3a5dfddf03c"],["/js/account-info.aa97bab696462fc8fed7.js","5434c582a21c542b0e50d4731d77fe35"],["/js/account.aa97bab696462fc8fed7.js","fc03c25fb1e04e5490b41e83bcbcd441"],["/js/contract.aa97bab696462fc8fed7.js","f353d87683ee68d4e6b1fd23a58603ab"],["/js/modals.aa97bab696462fc8fed7.js","097130aa807c7f0ef3be2ff20d28b35a"],["/js/mt5.aa97bab696462fc8fed7.js","f8cd10366a60009738158c9de99ae4e9"],["/js/notification-messages.aa97bab696462fc8fed7.js","f56feb17150bf8b083367724defa4aed"],["/js/push-notification.aa97bab696462fc8fed7.js","830b859c44877d4118f56cba46b1e999"],["/js/reports.aa97bab696462fc8fed7.js","07c0165b37a4bb8de51143652d133c3f"],["/js/screen-small.aa97bab696462fc8fed7.js","a118f8cb857d10924cef678533f88863"],["/js/settings-chart.aa97bab696462fc8fed7.js","21c51a28dfd25b3be491c2da861c1f23"],["/js/settings-language.aa97bab696462fc8fed7.js","d03dd089866cae0966a959e73796be28"],["/js/settings-theme.aa97bab696462fc8fed7.js","1354d99436ae3b10d158577591c05e1c"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.aa97bab696462fc8fed7.js","f9bc05e2d1f908959acd45c2c8b505bd"],["/js/two-month-picker.aa97bab696462fc8fed7.js","627ef6e3a0db8f4f784572354db2a063"],["/js/vendors~main.aa97bab696462fc8fed7.js","7c619da411048ae035a7119ac0b5728b"],["/js/vendors~smart_chart.aa97bab696462fc8fed7.js","ca4569e8c6f2334ef83df2fd432e2fcf"],["/js/work-in-progress.aa97bab696462fc8fed7.js","54c5b4a75c30f374bf86459428acd039"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







