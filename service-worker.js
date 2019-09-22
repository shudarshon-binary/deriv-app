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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","62e50cc66a550d54db780faf91536a64"],["/css/AccountSignupModal.css","a3e4a91595bb165559ecc567f9cacdd6"],["/css/account.css","115aa0b4c2335795ee4077542a9c2611"],["/css/app.css","7bd73c05eb9a2fcbce7ef3a4bb84384b"],["/css/modals.css","276fcade32675ab8a4291e269097ce23"],["/css/notification-messages.css","d33c74d4b5b4c7204793ce20f6b3b7c9"],["/css/reports.css","39215b6c6b61725478d1230b66aa93de"],["/css/screen-small.css","c4bb769564f25b9a50daa48557f884ac"],["/css/settings-chart.css","24f4a7bed6641898f9809d7d1a6a978e"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","e819df40da493a959a2f68d82900b213"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","c3f6f9efa2c8449bc94e0fe8598e9563"],["/js/0.3e0af10214f5a6e1a608.js","6e385df4ed3eb4334ffd2da1709341e7"],["/js/1.3e0af10214f5a6e1a608.js","e9920b2ab4f92ab6bf8797b01b5b85b5"],["/js/10.3e0af10214f5a6e1a608.js","9797d778b0e518973ed73f5dd87c2571"],["/js/11.3e0af10214f5a6e1a608.js","33cdca8b7911342b63174887a7fb8bc3"],["/js/12.3e0af10214f5a6e1a608.js","88d43cb3e0af9c53d1372ca9ba7cf025"],["/js/13.3e0af10214f5a6e1a608.js","910e73b3cbd9e8349556a827fa74ca4d"],["/js/14.3e0af10214f5a6e1a608.js","cfcb0588f65fcf32acd7e74bb1abaef3"],["/js/15.3e0af10214f5a6e1a608.js","048aa8e20d1691af9e40539a2ac411ff"],["/js/16.3e0af10214f5a6e1a608.js","2b98b6398d6c0559072c8085ebb006e2"],["/js/17.3e0af10214f5a6e1a608.js","66b0026c456673ab7f45ef947a0c5342"],["/js/18.3e0af10214f5a6e1a608.js","3945cbbe116ae7d0ca99bf9f5969aae3"],["/js/19.3e0af10214f5a6e1a608.js","1130c6aa62c9a9ad24805d032e98bf8f"],["/js/2.3e0af10214f5a6e1a608.js","fc755c792bed68f0af75d59a1ec80cad"],["/js/20.3e0af10214f5a6e1a608.js","ca158c73167918875ef44b69fc5d11f1"],["/js/21.3e0af10214f5a6e1a608.js","8563e75084f8d2c021a2ed1e7b3b6af5"],["/js/22.3e0af10214f5a6e1a608.js","54cc775ac5bb1f6f571c2a613bd41b05"],["/js/23.3e0af10214f5a6e1a608.js","5e418f471382c0283e4f0a0449f1f3a6"],["/js/24.3e0af10214f5a6e1a608.js","07eb4a6ac48ae3e52993c0ea13efc8ef"],["/js/25.3e0af10214f5a6e1a608.js","862cbd6b0e3225b753977ab1428c1255"],["/js/26.3e0af10214f5a6e1a608.js","0a4b5863a4798dce4212de828f3ff436"],["/js/27.3e0af10214f5a6e1a608.js","ebcdc324bb0b781cbe37aabe24c0c3e4"],["/js/28.3e0af10214f5a6e1a608.js","1fa6e0b3de2d991fe2e61001799024c3"],["/js/29.3e0af10214f5a6e1a608.js","cd839b0578a8dda04cbbad7d72e60a1f"],["/js/3.3e0af10214f5a6e1a608.js","9d3dcb5871b59a7032934da9e310e694"],["/js/30.3e0af10214f5a6e1a608.js","32181a287e273863b74b1f6c0fbad83d"],["/js/31.3e0af10214f5a6e1a608.js","430a145e975d59a442e54616fee25ac9"],["/js/32.3e0af10214f5a6e1a608.js","deb74daa24c2987afe7429f9432b7f68"],["/js/33.3e0af10214f5a6e1a608.js","f1a2bbd9b21aa928b83de8051f6fbb04"],["/js/34.3e0af10214f5a6e1a608.js","6693885e7c5dd210f6020739a41abae0"],["/js/35.3e0af10214f5a6e1a608.js","9185f02a72c12678f9356c046d76c5a5"],["/js/36.3e0af10214f5a6e1a608.js","e3c42e6fbabb5401409439c2bcc88125"],["/js/37.3e0af10214f5a6e1a608.js","77f6124fcd0f2e6c6a14ba7540dd6f2f"],["/js/38.3e0af10214f5a6e1a608.js","37cc141acd4cd1d469e4f54e23689b8f"],["/js/39.3e0af10214f5a6e1a608.js","6bef89b8543dcc0fbdd7127e1171d872"],["/js/4.3e0af10214f5a6e1a608.js","50f1c21be72c8b1371a0b83462f7006a"],["/js/40.3e0af10214f5a6e1a608.js","c478f0ca7d57680c372cbc4926a22888"],["/js/404.3e0af10214f5a6e1a608.js","c3acb33c9e491148f52de6d0c9466844"],["/js/41.3e0af10214f5a6e1a608.js","383076636c28c6a5facca8b18ffa82a0"],["/js/42.3e0af10214f5a6e1a608.js","45d95e615fa942e382fbb370a474df30"],["/js/43.3e0af10214f5a6e1a608.js","4438aef5e56a47a4149665c9d4e15649"],["/js/44.3e0af10214f5a6e1a608.js","23e86063a7066cdbdc51ac40fc8480b8"],["/js/45.3e0af10214f5a6e1a608.js","79705b01c884407778c1ac5dd1648ca3"],["/js/46.3e0af10214f5a6e1a608.js","3b3606b2539c7da758f2d4e37a1f7f2a"],["/js/47.3e0af10214f5a6e1a608.js","d68b4716c5b9a7d8aa03cc9e5237be7d"],["/js/48.3e0af10214f5a6e1a608.js","63783c8da3731b52a8654f00ff3c4f76"],["/js/49.3e0af10214f5a6e1a608.js","0f83e34734c2842f471556fde6d780ef"],["/js/5.3e0af10214f5a6e1a608.js","afc85340ba7045ec1c145bf307ebecef"],["/js/50.3e0af10214f5a6e1a608.js","539c848e0089263d4efe4ce632c0162e"],["/js/51.3e0af10214f5a6e1a608.js","f23fae53c95d448061d38bbe7a1dff74"],["/js/52.3e0af10214f5a6e1a608.js","608a642a51c2f814a90a5d6b07704ecd"],["/js/53.3e0af10214f5a6e1a608.js","bd6129ad390bc2d37df9a2bf77bb17a2"],["/js/54.3e0af10214f5a6e1a608.js","748b444844c8584c69648eb76c2e0d5a"],["/js/55.3e0af10214f5a6e1a608.js","45c82221ba93c8356419b75489097c83"],["/js/56.3e0af10214f5a6e1a608.js","2c5a3ea78499653716a7cf220bb99cf3"],["/js/57.3e0af10214f5a6e1a608.js","8f22a14c758f97273fc3147db6c52787"],["/js/58.3e0af10214f5a6e1a608.js","231facf7faf9318b4f14d46fd4ec4f42"],["/js/59.3e0af10214f5a6e1a608.js","a692ce5bb092207e75933b2361b2090e"],["/js/6.3e0af10214f5a6e1a608.js","25c60070a014f03aca903ae66179f1cd"],["/js/60.3e0af10214f5a6e1a608.js","8d916453be9bd2e2b1a10da416641641"],["/js/61.3e0af10214f5a6e1a608.js","d1b8d83ac288e5f28179de66e990229b"],["/js/62.3e0af10214f5a6e1a608.js","a994ab143ae73eeec436dece7359acdc"],["/js/63.3e0af10214f5a6e1a608.js","ad34d741c3dc8ab96004b520fec1e5c0"],["/js/64.3e0af10214f5a6e1a608.js","02b6dfc734fa181ad66a605a5c87e659"],["/js/65.3e0af10214f5a6e1a608.js","a8b935ec028c7ade1e9e61f39253ed86"],["/js/66.3e0af10214f5a6e1a608.js","21e8043ee416190324baee00f92956ac"],["/js/67.3e0af10214f5a6e1a608.js","c0f3e70fb4b3a1505c7da17422d0dd71"],["/js/68.3e0af10214f5a6e1a608.js","67022b6b01a4c4bfe524db22ca2c4981"],["/js/69.3e0af10214f5a6e1a608.js","fc6f63db367336f9496db32f64584f4e"],["/js/7.3e0af10214f5a6e1a608.js","788cbae89694693176ebeb0d05cc249c"],["/js/70.3e0af10214f5a6e1a608.js","6714dec6b3d20d32e2fbc1de5ac4b397"],["/js/71.3e0af10214f5a6e1a608.js","64c0b70e8e62976ad364c1c01e4cd756"],["/js/72.3e0af10214f5a6e1a608.js","5d9337decc3bed2b0be4f6d6aaa3576a"],["/js/73.3e0af10214f5a6e1a608.js","0207f520defe983f28d67948344d7af4"],["/js/74.3e0af10214f5a6e1a608.js","eeee819b8b3e6727079cd7993b778749"],["/js/75.3e0af10214f5a6e1a608.js","e7dc08e46d20f0383b95118d7e311c34"],["/js/76.3e0af10214f5a6e1a608.js","ba1c7195a2d0f0fb81c68272ef085c4d"],["/js/77.3e0af10214f5a6e1a608.js","610a8cc217ce57fe2267fe7ae7b80880"],["/js/78.3e0af10214f5a6e1a608.js","81fb70420c364a2ad630aa662042bb8e"],["/js/79.3e0af10214f5a6e1a608.js","1b8db2ae1d3b5aeda87ed19c5ec7f34b"],["/js/8.3e0af10214f5a6e1a608.js","241db299df4e3eccc2b324d05358ee69"],["/js/80.3e0af10214f5a6e1a608.js","7f1428c1bc660ecad8c6d5deb1eb95c3"],["/js/81.3e0af10214f5a6e1a608.js","d4c25d65dd2aee662cec2153a2c7f635"],["/js/82.3e0af10214f5a6e1a608.js","e418bd9da2d63f1159ee91bac55c1ad9"],["/js/83.3e0af10214f5a6e1a608.js","91a5a3c18015f5494b66ee8d4f18a0aa"],["/js/84.3e0af10214f5a6e1a608.js","e7a10d5308616d58a43895a3b0ac1efd"],["/js/9.3e0af10214f5a6e1a608.js","4cc432b119fd6609fc6edbc32562d62f"],["/js/AccountSignupModal.3e0af10214f5a6e1a608.js","fe12e08d195146cfc300fe186e1bc4b2"],["/js/account-info.3e0af10214f5a6e1a608.js","254c6df4e5ad2589bf0dc5a52b9dbe2c"],["/js/account.3e0af10214f5a6e1a608.js","446e581f6fc324f3aeb1fe37a3d6689e"],["/js/contract.3e0af10214f5a6e1a608.js","8a76d7cd216833c058dc4332bacbbd5e"],["/js/modals.3e0af10214f5a6e1a608.js","c4bdbd14ea7f37ad32fd6f8753790e5f"],["/js/notification-messages.3e0af10214f5a6e1a608.js","8a41b4ada88d41d0f458e9ccfe21c4a1"],["/js/push-notification.3e0af10214f5a6e1a608.js","7a28ce8cf7196c89d8ef07b6896daf48"],["/js/reports.3e0af10214f5a6e1a608.js","69dfa832550fbdd8bbd88535bdf8b8a6"],["/js/screen-small.3e0af10214f5a6e1a608.js","dde8c47e9468eb89cafc06ccf95f3045"],["/js/settings-chart.3e0af10214f5a6e1a608.js","de4423ab9ad15d50e12e6e42a8f15f2a"],["/js/settings-language.3e0af10214f5a6e1a608.js","1c4fbd45c924f013483ce61389ba32c1"],["/js/settings-theme.3e0af10214f5a6e1a608.js","7b432f9784cbfaa6740a751469899b3c"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.3e0af10214f5a6e1a608.js","6b45c179bc1034bd30a2ba147bf35af7"],["/js/two-month-picker.3e0af10214f5a6e1a608.js","3100b0304ed523841f198e104401471e"],["/js/vendors~main.3e0af10214f5a6e1a608.js","69ec602e097363b62daeebfa32ba83e6"],["/js/vendors~smart_chart.3e0af10214f5a6e1a608.js","19e9619308fac3438ef32d3da7eff7cd"],["/js/work-in-progress.3e0af10214f5a6e1a608.js","267ef6724bd6239e5e77d218642446e4"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







