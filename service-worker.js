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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","f69e82734ad5d09d35ad931fea53cd49"],["/css/AccountSignupModal.css","5ebd9292d0c6f5d595d848f97380933c"],["/css/account.css","dcd212e04d0e138404b6290d08e12b15"],["/css/app.css","b36e838bbd76b4683b1547ec04ce7966"],["/css/modals.css","e25ecabc68d33f6fbb5faba549548917"],["/css/notification-messages.css","f1a4ea4cd06e7c0bac4b9b977bcd85cb"],["/css/reports.css","baf4d804d52b024fc9d99642c2e739fb"],["/css/screen-small.css","ce4baed7a7eade02c5b527a996e4273c"],["/css/settings-chart.css","348fe12a5ddef728ea73ee48dcb9d73e"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fe4bc470c72ab0ada9e21a5c89e1ccc0"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","e2d1cce03929eb6698593dea41185977"],["/js/0.c37ad45b9e584e844306.js","0b33103e30225c3da58263d2a5ecd353"],["/js/1.c37ad45b9e584e844306.js","ccee5762f1fa663d95822ebd1cda99a5"],["/js/10.c37ad45b9e584e844306.js","6b273d6fcafd65d81c7635d03ca9f7c5"],["/js/11.c37ad45b9e584e844306.js","920143d28c48eb375702da5bd2677c86"],["/js/12.c37ad45b9e584e844306.js","bb444f74acac4f10403d55922b3f93a0"],["/js/13.c37ad45b9e584e844306.js","2d8b0754939a46e62fbfbea9d6a88d99"],["/js/14.c37ad45b9e584e844306.js","e54f9f5cc1fa67dcaabc5e79ce6dd0b5"],["/js/15.c37ad45b9e584e844306.js","73a991ac351c146baaa0e24899e5d0ab"],["/js/16.c37ad45b9e584e844306.js","aa1936fd21de11b06a0c868025865217"],["/js/17.c37ad45b9e584e844306.js","2c8d4fc7ba97a3be8eff1b32b814d708"],["/js/18.c37ad45b9e584e844306.js","0d3f267050e2b5962c57adb29a161e43"],["/js/19.c37ad45b9e584e844306.js","8163d6628ddd6cd9d3e541b485378018"],["/js/2.c37ad45b9e584e844306.js","799b3700814746c039c6115ff0e39ea7"],["/js/20.c37ad45b9e584e844306.js","c47375632a3baacfdb601f4ab1e38e90"],["/js/21.c37ad45b9e584e844306.js","e3e96b34230486f72c6ffa116d9c62a9"],["/js/22.c37ad45b9e584e844306.js","779bcc98b96fcbfaea24f0ccb106b934"],["/js/23.c37ad45b9e584e844306.js","35af347173e1d56ce53e4e8bedc14c42"],["/js/24.c37ad45b9e584e844306.js","2bd4d127d58d37f48163e8a910dc92b6"],["/js/25.c37ad45b9e584e844306.js","db5da12930f0079b9f4a32923ae0a5d7"],["/js/26.c37ad45b9e584e844306.js","27da95edd6396128339f82270e7c419a"],["/js/27.c37ad45b9e584e844306.js","f6b10f13c46a98830d98e5fddfe0642b"],["/js/28.c37ad45b9e584e844306.js","5f47b3f1ea2962fcc9f9194fdf8dc487"],["/js/29.c37ad45b9e584e844306.js","f81cb4163f14b605fa7da256989eac02"],["/js/3.c37ad45b9e584e844306.js","c9623af61215026495f090c5adf4b6f1"],["/js/30.c37ad45b9e584e844306.js","465b1e9e46507f16b75906ad398c72cc"],["/js/31.c37ad45b9e584e844306.js","d60d82dba6d7b0d860abd1eef63ee4f9"],["/js/32.c37ad45b9e584e844306.js","bda10994cff900eaf1ba1ae473277d3e"],["/js/33.c37ad45b9e584e844306.js","af5bdcfbe61ff6fe16d58c87f0eadc39"],["/js/34.c37ad45b9e584e844306.js","6be3b34ad7d19b153dd4e5d901f08997"],["/js/35.c37ad45b9e584e844306.js","2aaabd18658d66b62b2ab6cbc4df7f8d"],["/js/36.c37ad45b9e584e844306.js","6c0b3dd9073e944dafb8cd5cb863d10d"],["/js/37.c37ad45b9e584e844306.js","b0ad329c01d2239a4ab9ad2ff788b437"],["/js/38.c37ad45b9e584e844306.js","33444f02728de083caca4690b79d936a"],["/js/39.c37ad45b9e584e844306.js","5ae86e7bfe93918496a93b6555d3a7ec"],["/js/4.c37ad45b9e584e844306.js","6984b2f2404104a5440c26ea3c3ab900"],["/js/40.c37ad45b9e584e844306.js","a22eeaafbf094e95348b930e457c0d62"],["/js/404.c37ad45b9e584e844306.js","3ed6aa505f0ce4ba822ced599a183ebc"],["/js/41.c37ad45b9e584e844306.js","0c26afafb86e81af6fec8da4c293ac28"],["/js/42.c37ad45b9e584e844306.js","7347ceb37d17c3c561f6e32e477b6ad9"],["/js/43.c37ad45b9e584e844306.js","8af36d1cf4582c06ed35cb71efbb4d85"],["/js/44.c37ad45b9e584e844306.js","605c70f12afdea1eb2fdf9c2286778b1"],["/js/45.c37ad45b9e584e844306.js","6e08123518f2c40cd1e707474a6daf1c"],["/js/46.c37ad45b9e584e844306.js","958ab00b83ce9c5b7f6a230e0a01da4f"],["/js/47.c37ad45b9e584e844306.js","70c141812f5037c915bfb3e356504d5c"],["/js/48.c37ad45b9e584e844306.js","cd1380f93f9349ea006ec740b8fd2f33"],["/js/49.c37ad45b9e584e844306.js","c063d62de81dcf4175eba54abfcb9f10"],["/js/5.c37ad45b9e584e844306.js","11eb0a84b53ed799ec13fc6f57264013"],["/js/50.c37ad45b9e584e844306.js","2b7ab16f76df674fc7ba779193d189e1"],["/js/51.c37ad45b9e584e844306.js","3bc04ca64abe0737ae89c5ca045b1dac"],["/js/52.c37ad45b9e584e844306.js","065417f4508a15e6f5bd371082bbe8b8"],["/js/53.c37ad45b9e584e844306.js","1814e0b63cb332e8217caa5d84db2830"],["/js/54.c37ad45b9e584e844306.js","5b855a5cac3b48a5fd05f84506de37d7"],["/js/55.c37ad45b9e584e844306.js","ba104d4d49a9048e390b9b3886a6fb79"],["/js/56.c37ad45b9e584e844306.js","f507f857d4ac6e537f45940f2415ca04"],["/js/57.c37ad45b9e584e844306.js","fcca7743b146236b9f069ddab10caf92"],["/js/58.c37ad45b9e584e844306.js","0e958d01b93547b6c7e64405615782e2"],["/js/59.c37ad45b9e584e844306.js","533698e6bb013f3b6c504baa5a206d6f"],["/js/6.c37ad45b9e584e844306.js","5e47954220aa7183a0d6a2e0fefa1835"],["/js/60.c37ad45b9e584e844306.js","9b7cd7351414ca77156742becda91663"],["/js/61.c37ad45b9e584e844306.js","c04247e7decc6ed37d8af9bf92e1b223"],["/js/62.c37ad45b9e584e844306.js","053d0a1a13f40fb73c350ff6155f1db1"],["/js/63.c37ad45b9e584e844306.js","e30b04fe18118be103c14efe05d7cedd"],["/js/64.c37ad45b9e584e844306.js","2b4915e7bb89c45e090855f81c107379"],["/js/65.c37ad45b9e584e844306.js","4dad22c9daf37449b237f7a2514217a7"],["/js/66.c37ad45b9e584e844306.js","752e63b622afefcc98835275201bde4b"],["/js/67.c37ad45b9e584e844306.js","dd6aa7e3e382eb0190adc2f24393f79f"],["/js/68.c37ad45b9e584e844306.js","a5b67a88d1ce9e313123292cfbb806c5"],["/js/69.c37ad45b9e584e844306.js","a354ceaa170fedd7a6f611d59039c0fa"],["/js/7.c37ad45b9e584e844306.js","aa97e4fb9ea27ca345788f39e7b6a1f2"],["/js/70.c37ad45b9e584e844306.js","67dd7ff8d3b24f39303fc75119f5e03f"],["/js/71.c37ad45b9e584e844306.js","f0244ac053d2be33bf7745393277f3bb"],["/js/72.c37ad45b9e584e844306.js","79ac0f8ba5740b5d615b80f40dfdc951"],["/js/73.c37ad45b9e584e844306.js","c680bd6a793c0653ffed4f1beed0edea"],["/js/74.c37ad45b9e584e844306.js","3ec48c4bb3ad09f60a974bcb71b080f9"],["/js/75.c37ad45b9e584e844306.js","a3fba26aa921e804d46355b34a46f49a"],["/js/76.c37ad45b9e584e844306.js","15e057b103af829ab3a3acd7f7c1e7d2"],["/js/77.c37ad45b9e584e844306.js","f383f6701358dc9cc37b153befdaf7e5"],["/js/78.c37ad45b9e584e844306.js","5c052779eed0c6415fd452fea1843d19"],["/js/79.c37ad45b9e584e844306.js","33ff499c9681ecafe2a8ad195b8f97e1"],["/js/8.c37ad45b9e584e844306.js","5da0a7bb575f4f37498104b1dae53e8e"],["/js/80.c37ad45b9e584e844306.js","f467b696fc0772956300cc72155682e3"],["/js/81.c37ad45b9e584e844306.js","c4568b3c821d97e956c8cc9688623eaa"],["/js/82.c37ad45b9e584e844306.js","9e9d1ce9427dd47c195d47fb8d188761"],["/js/83.c37ad45b9e584e844306.js","930284edb92a5120797b62a3ef84d5b8"],["/js/84.c37ad45b9e584e844306.js","da8a1c2fe8f07b7f445c9f725ae2e0eb"],["/js/85.c37ad45b9e584e844306.js","6d25b55a8bf4a7d1efb9fc1eed53083e"],["/js/86.c37ad45b9e584e844306.js","8d32e401c55790b17243586d505d1e87"],["/js/87.c37ad45b9e584e844306.js","b34a19890e34ddf1f0992dd9740599bd"],["/js/88.c37ad45b9e584e844306.js","a6d177e00feb298bc2c0c58f0030ee87"],["/js/9.c37ad45b9e584e844306.js","8432e7de4b084d4d237a89e36064d0e9"],["/js/AccountSignupModal.c37ad45b9e584e844306.js","e0fc3c85655a572996bd896b4d2bec24"],["/js/account-info.c37ad45b9e584e844306.js","ce55f237b3814cd89db77cbfba437d46"],["/js/account.c37ad45b9e584e844306.js","6ae07f452b58e101c2f206a06f9ef3bc"],["/js/contract.c37ad45b9e584e844306.js","2afe00c1d9da3556a7ab870fb92d64c5"],["/js/modals.c37ad45b9e584e844306.js","a837cee7207de12c73dcb3cea6cdfb1a"],["/js/notification-messages.c37ad45b9e584e844306.js","4bfa86675b0feb2c3188ff99075ed856"],["/js/push-notification.c37ad45b9e584e844306.js","d73a8d3b340d204c7125b5cd53ef7baa"],["/js/reports.c37ad45b9e584e844306.js","e153712f28c8234034107604448869d2"],["/js/screen-small.c37ad45b9e584e844306.js","1b3fc49816cf5741e609b248969d90b6"],["/js/settings-chart.c37ad45b9e584e844306.js","375634596208a76bc645cf55a1a57362"],["/js/settings-language.c37ad45b9e584e844306.js","314826af5fbf22b2e9a2ef232117394a"],["/js/settings-theme.c37ad45b9e584e844306.js","f957da7ba2a2794446b3ec0ae5638bf8"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.c37ad45b9e584e844306.js","cb08fd8418c5528d70328acb2f95a624"],["/js/two-month-picker.c37ad45b9e584e844306.js","f6d15ee9000aa0820ccb1fd6229b1bab"],["/js/vendors~main.c37ad45b9e584e844306.js","ad0fffb805e3cef83c2d950415c01068"],["/js/vendors~smart_chart.c37ad45b9e584e844306.js","793ea45b50d17abef2daa6fa4cd36bd4"],["/js/work-in-progress.c37ad45b9e584e844306.js","d9d1fab8f7a246ee713a99fe9e165a0f"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







