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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","b005d2fcc8f2493fa45fcf2c748bcfb2"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","622db92105d403777f07bbe765e846a4"],["/js/0.c1ffd965e56d363ed184.js","e2dad1c995f24f205dd4ce6bc9c063ab"],["/js/1.c1ffd965e56d363ed184.js","61ba504c27d788a0705ec72cf34711b4"],["/js/10.c1ffd965e56d363ed184.js","6a756b7f26899956f1a88e2c5dea25cd"],["/js/11.c1ffd965e56d363ed184.js","960f0d3c7664be8f68b21b8458373945"],["/js/12.c1ffd965e56d363ed184.js","fdd4f0a963aab80111d694948f400b99"],["/js/13.c1ffd965e56d363ed184.js","bbe984d07c9c03829b479ca1dd997968"],["/js/14.c1ffd965e56d363ed184.js","1cc5525a80cdc825bfdda621fd4e41a2"],["/js/15.c1ffd965e56d363ed184.js","8c1aef06027efb79f82106c0282554ac"],["/js/16.c1ffd965e56d363ed184.js","5ac7cd93fbadcf0f894fc6692a82133a"],["/js/17.c1ffd965e56d363ed184.js","3179bd556bf3ac92ae1682cdf37a01d5"],["/js/18.c1ffd965e56d363ed184.js","883d27e64c9dddb14432ef8641fc07dc"],["/js/19.c1ffd965e56d363ed184.js","d9e3699b04a4f8932adc7bd09b58ab11"],["/js/2.c1ffd965e56d363ed184.js","b9dbe00d7e1725fea15c521b27dc6e96"],["/js/20.c1ffd965e56d363ed184.js","c0849a6daee7eb9652232659176bc674"],["/js/21.c1ffd965e56d363ed184.js","303075576913e53bd8993c5dc1038525"],["/js/22.c1ffd965e56d363ed184.js","8fbf03fce7e473c2378cc819820103b4"],["/js/23.c1ffd965e56d363ed184.js","9960a7bae097e802b5c5ab22eaa5406d"],["/js/24.c1ffd965e56d363ed184.js","d056616dbc20175c86354ba19cbe8c7e"],["/js/25.c1ffd965e56d363ed184.js","c69934592cb23757dceeee50faf5f73b"],["/js/26.c1ffd965e56d363ed184.js","d981f51fe38962bbf920b6808c621747"],["/js/27.c1ffd965e56d363ed184.js","b4bc040799c4062b9bc2901a648e666e"],["/js/28.c1ffd965e56d363ed184.js","fcdeee755d408ee46d53a3a2955adc6a"],["/js/29.c1ffd965e56d363ed184.js","1fd55d69e7350a53aadf83b03d315971"],["/js/3.c1ffd965e56d363ed184.js","b1eecbfdbf36adc600e919d79859626a"],["/js/30.c1ffd965e56d363ed184.js","efef3eaf0f79400857dc3ac7fdd6df54"],["/js/31.c1ffd965e56d363ed184.js","cf80eb97214bf10f865f64d8ddc95439"],["/js/32.c1ffd965e56d363ed184.js","8b442a9f34e9b85b847553d9cf4acd10"],["/js/33.c1ffd965e56d363ed184.js","fef55e905e27a53c8929d77324379e84"],["/js/34.c1ffd965e56d363ed184.js","700cb11038fff3d8d215d9e88678dc4a"],["/js/35.c1ffd965e56d363ed184.js","edf9c6de99c127fb37dc8836c2070f93"],["/js/36.c1ffd965e56d363ed184.js","d70b94179aaa1f7644e7b32a34586727"],["/js/37.c1ffd965e56d363ed184.js","9717ba3ed6894f1da9c7b66746a1760a"],["/js/38.c1ffd965e56d363ed184.js","b38e7c46206a2098a5818da4ae6b6d9c"],["/js/39.c1ffd965e56d363ed184.js","b6c398eb95f00a4badde130f29ee4dc9"],["/js/4.c1ffd965e56d363ed184.js","ec54cd49f4d13df753fc2524a9cf305a"],["/js/40.c1ffd965e56d363ed184.js","d7f16c660c2c4bfd801a3843366522a8"],["/js/404.c1ffd965e56d363ed184.js","8a0f9b922ec563fbed50e5acc9903956"],["/js/41.c1ffd965e56d363ed184.js","f726e7efa005260fca6cef5ac266d70f"],["/js/42.c1ffd965e56d363ed184.js","dc8bb693b7db43006bcba790c042ecfd"],["/js/43.c1ffd965e56d363ed184.js","ed47350e0ba6204c1ef3cdbe73dcda1f"],["/js/44.c1ffd965e56d363ed184.js","76d4da1cf5292133f4afa41be47d865d"],["/js/45.c1ffd965e56d363ed184.js","4c2a33807b6fabe12347327c75b97fb6"],["/js/46.c1ffd965e56d363ed184.js","22d19db48ea3816bfc19be8a375ddd31"],["/js/47.c1ffd965e56d363ed184.js","e5a58d9b26ea30447a90e333fd072c1a"],["/js/48.c1ffd965e56d363ed184.js","2781418af56942cb0ab5386d3fca88b7"],["/js/49.c1ffd965e56d363ed184.js","51ca35831b4146474ffcee78d64cdfb2"],["/js/5.c1ffd965e56d363ed184.js","fe473bd755d018802c7fe25aacbb49e3"],["/js/50.c1ffd965e56d363ed184.js","d7fc8f5b569768d1d90f28c7ba46fa59"],["/js/51.c1ffd965e56d363ed184.js","be4dc82913cbd54b288f1fdadc3eeeeb"],["/js/52.c1ffd965e56d363ed184.js","c3a61a80b5996a893198a125f2d9eb8b"],["/js/53.c1ffd965e56d363ed184.js","99d9b3c1e641871325b1e039dd5438f7"],["/js/54.c1ffd965e56d363ed184.js","c9efbd6e73a8c3a7abe278b5438a341c"],["/js/55.c1ffd965e56d363ed184.js","ad6f68ab58ac92a955a42e02d4504b76"],["/js/56.c1ffd965e56d363ed184.js","71a12740e3f6db58c780754ea1f7809f"],["/js/57.c1ffd965e56d363ed184.js","4b7be5f312f2b18c0c361fa55b2f0b1a"],["/js/58.c1ffd965e56d363ed184.js","f42cdeac6793b64fff763f2ef549b94c"],["/js/59.c1ffd965e56d363ed184.js","f17c5ac2d3482ded688d23a8c98385ef"],["/js/6.c1ffd965e56d363ed184.js","6cd838a394fcffc7c6cf5bf08f139ecb"],["/js/60.c1ffd965e56d363ed184.js","f480226e470dcb680e14621b10e5025c"],["/js/61.c1ffd965e56d363ed184.js","81d9cf5ebcdacd46338dc2d40ffdb9ad"],["/js/62.c1ffd965e56d363ed184.js","19a548aed3fa3030825cd023600fbf25"],["/js/63.c1ffd965e56d363ed184.js","f34288bba81fbb3876ae58cd580593a0"],["/js/64.c1ffd965e56d363ed184.js","204d24edf0bddd4c7c5add91021e159b"],["/js/65.c1ffd965e56d363ed184.js","b02fc7fc72626c31ef6bd0076ebacc0b"],["/js/66.c1ffd965e56d363ed184.js","7f9f4e653eb205490a3bcca52958db89"],["/js/67.c1ffd965e56d363ed184.js","de5346c0165440727062062cb09877e7"],["/js/68.c1ffd965e56d363ed184.js","06b72ab8fba35a1a00792102fcac59e7"],["/js/69.c1ffd965e56d363ed184.js","b56a49690c46786a0c822ece60083d98"],["/js/7.c1ffd965e56d363ed184.js","63e9864eeac19f9a6837948307ebdb85"],["/js/70.c1ffd965e56d363ed184.js","c8a1e6d3b510c4b004d3f0d0b34195fc"],["/js/71.c1ffd965e56d363ed184.js","4b95491c899efaab9f437dc5d34418c0"],["/js/72.c1ffd965e56d363ed184.js","d730e9603f62da4c0d8d208a172dcb29"],["/js/73.c1ffd965e56d363ed184.js","fa1ac4e9f8eab71295517b03b104bed6"],["/js/74.c1ffd965e56d363ed184.js","c55249fa0c54984cccdc802c70217874"],["/js/75.c1ffd965e56d363ed184.js","7e37cfda06b6efc61d65c1edb8e30ded"],["/js/76.c1ffd965e56d363ed184.js","6053830ead266cc29df15194a6cb57ef"],["/js/77.c1ffd965e56d363ed184.js","ff2872f4b92604f752da79d7b38a5eaf"],["/js/78.c1ffd965e56d363ed184.js","940b1cf5556786860689499959ebd3d9"],["/js/79.c1ffd965e56d363ed184.js","9769e274658db746f9127ec11390a9ff"],["/js/8.c1ffd965e56d363ed184.js","1083a34e18af13931e59a0312c376f1e"],["/js/80.c1ffd965e56d363ed184.js","6b46e07b095c7046d45af31f8e503bb9"],["/js/81.c1ffd965e56d363ed184.js","0e71e481e0fe421519329fb3dd52130d"],["/js/82.c1ffd965e56d363ed184.js","1ad84146b7ea6340f9a53021d4c6c361"],["/js/83.c1ffd965e56d363ed184.js","481ccb7c2625820117576e9ba4948f97"],["/js/84.c1ffd965e56d363ed184.js","4c432bfb69be52fdd464d85863091aed"],["/js/85.c1ffd965e56d363ed184.js","f82ca3126392686a1eb95d29f7be67d0"],["/js/86.c1ffd965e56d363ed184.js","049d649d7f83e1691ff49b6f5ecbce71"],["/js/87.c1ffd965e56d363ed184.js","525a0e2f2bfe28406fc6c55e3306c783"],["/js/88.c1ffd965e56d363ed184.js","09fcbad4bd847c84479854049c28ffb8"],["/js/89.c1ffd965e56d363ed184.js","18e27ede5176d3cbb114a3b43f847421"],["/js/9.c1ffd965e56d363ed184.js","1635b863d1cefd1217c14542768e859c"],["/js/90.c1ffd965e56d363ed184.js","eb7e12fc10ba16bb7720f6cbb5b53d34"],["/js/91.c1ffd965e56d363ed184.js","0c0c9e0aec2999e7dd578b769393d4a3"],["/js/AccountSignupModal.c1ffd965e56d363ed184.js","6dd8d6e6adfd5b9735f394b5175eb480"],["/js/ResetPasswordModal.c1ffd965e56d363ed184.js","fa1694e2b8ac0666dce08c7492db2f5e"],["/js/account-info.c1ffd965e56d363ed184.js","22a7b318132af751692e1fb876b4e2d9"],["/js/account.c1ffd965e56d363ed184.js","b937b0934a5f87bbfabcb3376874fa0f"],["/js/contract.c1ffd965e56d363ed184.js","8c6da91c8be654e4830bbb94141c6807"],["/js/modals.c1ffd965e56d363ed184.js","724f6a33e62ed6d9913b4335c6327488"],["/js/mt5.c1ffd965e56d363ed184.js","0179e78e3ffbdc57e6a99faf429f0241"],["/js/notification-messages.c1ffd965e56d363ed184.js","924f3b9c7140e22a6c9212b913b01e50"],["/js/push-notification.c1ffd965e56d363ed184.js","e960b64df58b58e700542683cab9f4ad"],["/js/reports.c1ffd965e56d363ed184.js","995e6f34deec85c792bdfb67889d3c8d"],["/js/screen-small.c1ffd965e56d363ed184.js","eb7b13c10c7ba9648d99ec14858753e2"],["/js/settings-chart.c1ffd965e56d363ed184.js","b4c86773ec0272ad522c4ac549bb7500"],["/js/settings-language.c1ffd965e56d363ed184.js","330f81b30d573ecfa1fffb2e2f016dff"],["/js/settings-theme.c1ffd965e56d363ed184.js","4386d5cbd228b12148aa0ba1798aeef2"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.c1ffd965e56d363ed184.js","180e5fae18a890b06ad8f5e0d402962f"],["/js/two-month-picker.c1ffd965e56d363ed184.js","8269558331560f18b066095c3d5c9df6"],["/js/vendors~main.c1ffd965e56d363ed184.js","d2155e807cc5e36b17010c5862ec3e37"],["/js/vendors~smart_chart.c1ffd965e56d363ed184.js","7117995fa90f29bb8e58e3530bc2ed57"],["/js/work-in-progress.c1ffd965e56d363ed184.js","dd6039c35b7d713ed947b6ab46d9232a"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







