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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","f69e82734ad5d09d35ad931fea53cd49"],["/css/AccountSignupModal.css","5ebd9292d0c6f5d595d848f97380933c"],["/css/account.css","dcd212e04d0e138404b6290d08e12b15"],["/css/app.css","a3b7619189d7e1516cb5329a4e4a0c1c"],["/css/modals.css","e25ecabc68d33f6fbb5faba549548917"],["/css/notification-messages.css","f1a4ea4cd06e7c0bac4b9b977bcd85cb"],["/css/reports.css","baf4d804d52b024fc9d99642c2e739fb"],["/css/screen-small.css","ce4baed7a7eade02c5b527a996e4273c"],["/css/settings-chart.css","348fe12a5ddef728ea73ee48dcb9d73e"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fe4bc470c72ab0ada9e21a5c89e1ccc0"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","f7b2bdcbababf366a6fb74f9b0d64902"],["/js/0.506221dc8815d89165c4.js","5c5bafedda3a49ebe146b8ba24202572"],["/js/1.506221dc8815d89165c4.js","06b8065d66dad070252fc7fc3177da78"],["/js/10.506221dc8815d89165c4.js","eefc07e76bfd38e132eaa0459900541e"],["/js/11.506221dc8815d89165c4.js","eb52efdda634e655379874d9e20bc4db"],["/js/12.506221dc8815d89165c4.js","3e38d8f02cc442ffc85768eee19d8108"],["/js/13.506221dc8815d89165c4.js","655008cdf41c03779390697fbb330f43"],["/js/14.506221dc8815d89165c4.js","39f5b026bf4dfec10c8967ac05787a78"],["/js/15.506221dc8815d89165c4.js","c50d7197bf5599456b51bd296e18b537"],["/js/16.506221dc8815d89165c4.js","b7d47675a98b754cec9a525e94ce5f7c"],["/js/17.506221dc8815d89165c4.js","bedf3257b40373fd27f15a250ef56df2"],["/js/18.506221dc8815d89165c4.js","d0e1b1a987ad9ad4a5ffa1c148baf5ef"],["/js/19.506221dc8815d89165c4.js","f12029e94f35ad2a617c9faaae3a1c76"],["/js/2.506221dc8815d89165c4.js","696b4d401ca5e3f9ea0e0ec34d2a7a0e"],["/js/20.506221dc8815d89165c4.js","7cf799aba177de90ed73b2f4568ca4bd"],["/js/21.506221dc8815d89165c4.js","23eca99632e893243817db972223fa44"],["/js/22.506221dc8815d89165c4.js","adc89c89fdf165b6e493013298e0d00f"],["/js/23.506221dc8815d89165c4.js","95b42f8300aabc8c09fb34081187e9c0"],["/js/24.506221dc8815d89165c4.js","1e4ac9889a04a1a3507373551ff74919"],["/js/25.506221dc8815d89165c4.js","98c3e4ffa6d45b2a6b755516c7e62587"],["/js/26.506221dc8815d89165c4.js","be5c88727f0c7d677b0ad5cfd0f6f250"],["/js/27.506221dc8815d89165c4.js","522175791ff133002a534d276921d709"],["/js/28.506221dc8815d89165c4.js","4f7e6a17471728db498de94a0b29c261"],["/js/29.506221dc8815d89165c4.js","981e659accb93e99c98b6d35dec884a7"],["/js/3.506221dc8815d89165c4.js","78cbad3d8481641366cf26b020849ce8"],["/js/30.506221dc8815d89165c4.js","48f299a75976c4177645859295b599fb"],["/js/31.506221dc8815d89165c4.js","83cf9bed0bb50ecd05caacadda515398"],["/js/32.506221dc8815d89165c4.js","659d587342530abc2969024f3124d99f"],["/js/33.506221dc8815d89165c4.js","481278f471ffe5497b260b0db7038e7a"],["/js/34.506221dc8815d89165c4.js","d87c6d2adab45c7af554caed18c63e03"],["/js/35.506221dc8815d89165c4.js","fbe5e6a3379b5a290c1b888a3d1af76e"],["/js/36.506221dc8815d89165c4.js","2f34e8bda395c7be06916da4caa4b7fe"],["/js/37.506221dc8815d89165c4.js","b402767e985325b603b394552f2bf5ff"],["/js/38.506221dc8815d89165c4.js","0cf4e7b4b5860820b162be56c11cce5a"],["/js/39.506221dc8815d89165c4.js","ebe6813f098cdf60afc235f387d92662"],["/js/4.506221dc8815d89165c4.js","118d9d7513af36666ba800d2f13572d7"],["/js/40.506221dc8815d89165c4.js","fc1ece697e1998bac2a4bef225601d76"],["/js/404.506221dc8815d89165c4.js","76668e5f4a108745843ec2dbbb5e2c69"],["/js/41.506221dc8815d89165c4.js","a907ff89b52edb40de0217905dd2c3ec"],["/js/42.506221dc8815d89165c4.js","a46de4d85f3db14c01f6afdd492ab7bf"],["/js/43.506221dc8815d89165c4.js","f96d17473f3c183bdf2641b9c722168c"],["/js/44.506221dc8815d89165c4.js","18002b653be69365a944ac6a9002d70d"],["/js/45.506221dc8815d89165c4.js","7a9b33072145d1d2d85f7f5f3106fc23"],["/js/46.506221dc8815d89165c4.js","e804da3e5355ddfdef40a000bdc0e279"],["/js/47.506221dc8815d89165c4.js","1cb5778b9e64eaf84792b3d592b85681"],["/js/48.506221dc8815d89165c4.js","f4b69e70149fe232225a146f6df9b66d"],["/js/49.506221dc8815d89165c4.js","f28c60353afedb5b374e4e3b574b3f26"],["/js/5.506221dc8815d89165c4.js","3f3d8c735d99d54dc6ac5897f8afcefd"],["/js/50.506221dc8815d89165c4.js","a9b11214a0f17780b31319cf32010d11"],["/js/51.506221dc8815d89165c4.js","9124c4a91a89b407a521efa8036268d1"],["/js/52.506221dc8815d89165c4.js","02f87ecbaba4b09183d910c42db49b0d"],["/js/53.506221dc8815d89165c4.js","bc93ebbf8ba1058a8c58cf9a86e472d9"],["/js/54.506221dc8815d89165c4.js","8b8e82b1074593d7dadad466933bc6f0"],["/js/55.506221dc8815d89165c4.js","3fe0ca8ba3650d01230b2be7decb4ab2"],["/js/56.506221dc8815d89165c4.js","5cd26b215497864617bd32ad378c5dd2"],["/js/57.506221dc8815d89165c4.js","b3b46589c22c928a44ddd0e38bbc4909"],["/js/58.506221dc8815d89165c4.js","59b643b9f69297319b650c400b68ee87"],["/js/59.506221dc8815d89165c4.js","209ae0b0bcb893326caaba7b1ddb4593"],["/js/6.506221dc8815d89165c4.js","06619f533fdf30b3b61b172d5ef9c03b"],["/js/60.506221dc8815d89165c4.js","45ed4812e34e0bb234f0a1266507b202"],["/js/61.506221dc8815d89165c4.js","99102d4bb817ffba8b41b2bd7effa039"],["/js/62.506221dc8815d89165c4.js","bcc04a2afc410e30f9bad8e11581880c"],["/js/63.506221dc8815d89165c4.js","509f132dd0055b49137ef0a36e9a5032"],["/js/64.506221dc8815d89165c4.js","a2590bb683bf08d4f9cbbdc1e664b1a2"],["/js/65.506221dc8815d89165c4.js","94a3f93440cd56259a516144cc83080b"],["/js/66.506221dc8815d89165c4.js","b6bef759af56387eb9a5ca81540284ff"],["/js/67.506221dc8815d89165c4.js","466d8f61f1195745b07f5f1825c6e8bf"],["/js/68.506221dc8815d89165c4.js","7e3d40379bf68e89c1fd9b6bf80cec56"],["/js/69.506221dc8815d89165c4.js","b58fc3b8f582524289f6bd418ebc09d4"],["/js/7.506221dc8815d89165c4.js","c32520876c72bab2efaf69a052495073"],["/js/70.506221dc8815d89165c4.js","d8a357625822f9c99972b34a3fa52c3a"],["/js/71.506221dc8815d89165c4.js","1530521b5ce4c2faf9239f0cc02e30b1"],["/js/72.506221dc8815d89165c4.js","e37331f2a8bce46afe883a37d234fbbe"],["/js/73.506221dc8815d89165c4.js","d34feb3d1c8f8201d0c2b972e81598ca"],["/js/74.506221dc8815d89165c4.js","38ff06b3cbd6e8e9f2817facc4b92709"],["/js/75.506221dc8815d89165c4.js","62725782de57af2badea75f9b91d684a"],["/js/76.506221dc8815d89165c4.js","3c0d91b04dcbef420c71e4aba356c3a8"],["/js/77.506221dc8815d89165c4.js","0c49ec8911b9f3441e8408e86d220d3d"],["/js/78.506221dc8815d89165c4.js","5cbaf8eef868bf58e0132a77177b9d7b"],["/js/79.506221dc8815d89165c4.js","7e52887a16746ae1ba69bbcf92003072"],["/js/8.506221dc8815d89165c4.js","2bacdf7b03dee1ae07371656a672a7b9"],["/js/80.506221dc8815d89165c4.js","2646bc8ff62bce096266d9657d83c2d0"],["/js/81.506221dc8815d89165c4.js","9362738e05e7ccece4cf16bf6ce0afb6"],["/js/82.506221dc8815d89165c4.js","62eb925ff1d181a24d6a057036b49fc2"],["/js/83.506221dc8815d89165c4.js","f4fdbe0016f925f969cabec406478890"],["/js/84.506221dc8815d89165c4.js","9ecb84357a74da0f6efc995dd934f9d8"],["/js/85.506221dc8815d89165c4.js","bce06b9aca30f06cbda6c8bb72b7e1de"],["/js/86.506221dc8815d89165c4.js","5bf46586a360407879957712735e5c71"],["/js/87.506221dc8815d89165c4.js","fefa0d85c7132b310925714552cf3951"],["/js/88.506221dc8815d89165c4.js","f634f815eea2c9a4a56b07929c579c7f"],["/js/9.506221dc8815d89165c4.js","11d5d61aab2f2b8fc809510ace0877c1"],["/js/AccountSignupModal.506221dc8815d89165c4.js","0f529dca91c2c7c015293246e17d1435"],["/js/account-info.506221dc8815d89165c4.js","a023440c75b45f2787cfa1d420c207b1"],["/js/account.506221dc8815d89165c4.js","cd372d893aa16ce372e7f16ac8b59ceb"],["/js/contract.506221dc8815d89165c4.js","9ad48159dbac6ce361099c7614e6f8a7"],["/js/modals.506221dc8815d89165c4.js","186ec913567baec7f200bbf17b906765"],["/js/notification-messages.506221dc8815d89165c4.js","587722d7a8bde8ff6a9d0dcc27c28d62"],["/js/push-notification.506221dc8815d89165c4.js","de45567eb62970976f4bb92bccfda5d7"],["/js/reports.506221dc8815d89165c4.js","da807bae6b76cf75e0520753469843e2"],["/js/screen-small.506221dc8815d89165c4.js","e11ec6c2e16ccb30865deadfa4a7715a"],["/js/settings-chart.506221dc8815d89165c4.js","bea333acd51a875588b5171a280b96f3"],["/js/settings-language.506221dc8815d89165c4.js","0b660c2a4ff63d4545a8d6ad942e9c4f"],["/js/settings-theme.506221dc8815d89165c4.js","d8755a9705a128d0aa1ad451f2046b7d"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.506221dc8815d89165c4.js","d7b16eb124eb7a449b1252711805f421"],["/js/two-month-picker.506221dc8815d89165c4.js","735609eb2419980ef7bb7becd4192c55"],["/js/vendors~main.506221dc8815d89165c4.js","87893a7844f286bafd9954e235f26f5c"],["/js/vendors~smart_chart.506221dc8815d89165c4.js","e837a3ea27def37e07cc9fc6e86c7f8f"],["/js/work-in-progress.506221dc8815d89165c4.js","1cbd95b8bf9fd1b5ce847fec08331c08"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







