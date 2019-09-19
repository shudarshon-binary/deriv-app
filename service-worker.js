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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","572dba33a52e0f788183bdd2e42e2f04"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","1e371034ed43956e633bedcdec259070"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/wallet-information.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","f86282da71297adc4942aac6bbdb8163"],["/js/0.4c29efa5fd4582d17149.js","2b9ca3c22168ca663ba3372c347a46c4"],["/js/1.4c29efa5fd4582d17149.js","4a81fe7469b478b3aed75984a4d02d70"],["/js/10.4c29efa5fd4582d17149.js","5a2c953c64592bbc881f6d431440db2b"],["/js/11.4c29efa5fd4582d17149.js","4cf94ae890f646177b0f0354902b8f99"],["/js/12.4c29efa5fd4582d17149.js","8ff3ca9917aa55a64506b5215a285798"],["/js/13.4c29efa5fd4582d17149.js","a940975600edc7134e5dab16e8c05ba9"],["/js/14.4c29efa5fd4582d17149.js","434d37d3dd1a0dd0a3e714c374e2e8fd"],["/js/15.4c29efa5fd4582d17149.js","fc750e94badd7c16e54e9c106f675d5c"],["/js/16.4c29efa5fd4582d17149.js","6806e9cbfbe1c09fa7454a48d16bd8cc"],["/js/17.4c29efa5fd4582d17149.js","ce9f6912cbf1919ca8c4eaf1c6d8d350"],["/js/18.4c29efa5fd4582d17149.js","cb3150b4b590c8ae811c2cf24db33704"],["/js/19.4c29efa5fd4582d17149.js","d78873ee1a60c892bbb811df692f1714"],["/js/2.4c29efa5fd4582d17149.js","48d55bacf8b13263c0f652774f00ebbd"],["/js/20.4c29efa5fd4582d17149.js","fb91d0a92c84c6f84562d2840b1146ab"],["/js/21.4c29efa5fd4582d17149.js","d0fe077354ab49b69a85611d300ab917"],["/js/22.4c29efa5fd4582d17149.js","9d323781344bf71343093d16e7eb2204"],["/js/23.4c29efa5fd4582d17149.js","e663a1944a18377b70d0775a0b99dded"],["/js/24.4c29efa5fd4582d17149.js","8c47dccfb995f0f7d56d97387b10744c"],["/js/25.4c29efa5fd4582d17149.js","376df3d51b90f178b4a81e30346f19a5"],["/js/26.4c29efa5fd4582d17149.js","73803ca643bc0efa497e011606f176e1"],["/js/27.4c29efa5fd4582d17149.js","b0fa620f9431b7ee238e72c0c29e07a4"],["/js/28.4c29efa5fd4582d17149.js","10bb22cb3f5789d655d5736dad71bf1f"],["/js/29.4c29efa5fd4582d17149.js","9e15dcd19053946ddaf4045dfc3c07c5"],["/js/3.4c29efa5fd4582d17149.js","c2b7ff854c077b90334524be616f4776"],["/js/30.4c29efa5fd4582d17149.js","7be3f17d7227ae571b86d7659fd80d69"],["/js/31.4c29efa5fd4582d17149.js","eaa8f05cbd2e9f4aedecae7b97b876d0"],["/js/32.4c29efa5fd4582d17149.js","2dbc0dda68df1e682f2c2bd3d3f6bfc5"],["/js/33.4c29efa5fd4582d17149.js","3ecaa94580a904324ee7ae16085ea173"],["/js/34.4c29efa5fd4582d17149.js","b6283f1d4aefb7662cb82edfeab50a21"],["/js/35.4c29efa5fd4582d17149.js","aa16376e000cf873a62e55d6a736dd21"],["/js/36.4c29efa5fd4582d17149.js","50ab236dccd2bb491c20265b935a44e4"],["/js/37.4c29efa5fd4582d17149.js","297c02d573504ef114d589ea5e8878e1"],["/js/38.4c29efa5fd4582d17149.js","c3690eaad28ec35792976f65d4d75ada"],["/js/39.4c29efa5fd4582d17149.js","e620b68ce0ca6feadc30d69e6f9c5793"],["/js/4.4c29efa5fd4582d17149.js","5953f8ebbf5fdf7de0dd5f8d63e1caa7"],["/js/40.4c29efa5fd4582d17149.js","b1f3bb9ab565f36f7bae5ea0fd105ca6"],["/js/404.4c29efa5fd4582d17149.js","518e8672b8d976e9b5b27c515b53929c"],["/js/41.4c29efa5fd4582d17149.js","d5db407eb822d78676f5e94487f5a12c"],["/js/42.4c29efa5fd4582d17149.js","6c161ec965feaa6b0c647675c74edd0b"],["/js/43.4c29efa5fd4582d17149.js","e28ff18fff0842f9f672d682dd83d490"],["/js/44.4c29efa5fd4582d17149.js","085aa4e84fdb3f2d89716f51a4d5e537"],["/js/45.4c29efa5fd4582d17149.js","004b54f87d941dcf26493a651f36d334"],["/js/46.4c29efa5fd4582d17149.js","1c602c20e5feab103e3d609f4bddcf7c"],["/js/47.4c29efa5fd4582d17149.js","2c13c821deb4b69879c78ee4015bf863"],["/js/48.4c29efa5fd4582d17149.js","db3d756dbd1e8466a56d06d76b4af0c6"],["/js/49.4c29efa5fd4582d17149.js","be9942732091a4cc7ee081a2b5e06537"],["/js/5.4c29efa5fd4582d17149.js","aa844a11855249dcfab41543a08152df"],["/js/50.4c29efa5fd4582d17149.js","1fb1341b3fc50a38b1503ccf986e4adb"],["/js/51.4c29efa5fd4582d17149.js","f151680320c224274925959d789c2aba"],["/js/52.4c29efa5fd4582d17149.js","1f1d4e926c3fad1401ea007efe02c41b"],["/js/53.4c29efa5fd4582d17149.js","1857f3f2799859bce7aeb8010cb37347"],["/js/54.4c29efa5fd4582d17149.js","c18fda3fbdffdab8dd90c540a95d9d92"],["/js/55.4c29efa5fd4582d17149.js","351cd145ae09c0ef92de6df9295b81d3"],["/js/56.4c29efa5fd4582d17149.js","d72059dc51be9be25dac0b47a962838b"],["/js/57.4c29efa5fd4582d17149.js","df97356434997075a6f932d1396cfac8"],["/js/58.4c29efa5fd4582d17149.js","ab3b4d94eaaafd051dbaccd2c25b75d3"],["/js/59.4c29efa5fd4582d17149.js","ff1b90b4dce705836a3b1321d3a177cb"],["/js/6.4c29efa5fd4582d17149.js","bd8cede404dc61962fded87db1d01de9"],["/js/60.4c29efa5fd4582d17149.js","7fb896e5843a08c4cfef281cd56ec28f"],["/js/61.4c29efa5fd4582d17149.js","4634022a92adc6f753deb79fe939d1aa"],["/js/62.4c29efa5fd4582d17149.js","d0ec45320f312407e8af6f0865537d75"],["/js/63.4c29efa5fd4582d17149.js","d2f58009387533405177622bd4d5be6d"],["/js/64.4c29efa5fd4582d17149.js","44ec9fec73a6633c28410e8c8f7a9302"],["/js/65.4c29efa5fd4582d17149.js","417a73f86f630ced5608abae34048d41"],["/js/66.4c29efa5fd4582d17149.js","a8faba08285b494711a8b99010e5585c"],["/js/67.4c29efa5fd4582d17149.js","f01b1cb19b2d129c6425035ef6606cd8"],["/js/68.4c29efa5fd4582d17149.js","a71f16f42b38178b0485a769c5033247"],["/js/69.4c29efa5fd4582d17149.js","48b61b45bcc2cdbaaa3d9964349c207a"],["/js/7.4c29efa5fd4582d17149.js","bfe2663e3763e06a4ae64f8ffc939907"],["/js/70.4c29efa5fd4582d17149.js","c8fa17c9b44e382742c5b06a6f8dd46b"],["/js/71.4c29efa5fd4582d17149.js","67f86fd4637a93660d84c1d730d26496"],["/js/72.4c29efa5fd4582d17149.js","7739b1e8b7b69e2292adba4dd6a76e15"],["/js/73.4c29efa5fd4582d17149.js","c03827eff742d40898bf33c69515982b"],["/js/74.4c29efa5fd4582d17149.js","3344083cfbf77aadc74f196231467c05"],["/js/75.4c29efa5fd4582d17149.js","8c9f8fff180ae1e19cb7d099d1c321b5"],["/js/76.4c29efa5fd4582d17149.js","d9b9fb8d9e003fe86721b526101469c0"],["/js/77.4c29efa5fd4582d17149.js","3434f5cf2afc99be4798986454ac7b64"],["/js/78.4c29efa5fd4582d17149.js","4fc7f972ba6c6a62616437448937d3ee"],["/js/79.4c29efa5fd4582d17149.js","42986b300f35016524f0e45557abcd74"],["/js/8.4c29efa5fd4582d17149.js","c1698e47b8742bbf683dccc556c71767"],["/js/80.4c29efa5fd4582d17149.js","d070606e41ec59733fb6d83480e76518"],["/js/81.4c29efa5fd4582d17149.js","538db7e91ba5b1e224c51050f4d04e2d"],["/js/9.4c29efa5fd4582d17149.js","a0c2d739f4496f10a7f6ef88ca761e8a"],["/js/AccountSignupModal.4c29efa5fd4582d17149.js","e096a1a41841bcf9a02e669d21a966e5"],["/js/account-info.4c29efa5fd4582d17149.js","722060caade098503a55b2d397aabc80"],["/js/contract.4c29efa5fd4582d17149.js","030e601f211c2b2024b1b41013cf5a8c"],["/js/default~open_position~1833eefb.4c29efa5fd4582d17149.js","3db24ffee90b31a0104d96a9bd2d5be1"],["/js/main.4c29efa5fd4582d17149.js","6e3ccb866ebba4693f888fc21f53945b"],["/js/modals.4c29efa5fd4582d17149.js","1c09c9b034ed2451700e4cc92cc4da01"],["/js/notification-messages.4c29efa5fd4582d17149.js","3ca01ed8861af62c6c112cc7bb52b976"],["/js/open_positions.4c29efa5fd4582d17149.js","ce3b22a30ab1cdd88c1c473a2d00ad7c"],["/js/profit_table.4c29efa5fd4582d17149.js","f8946ac5363fedc250e700687db62b41"],["/js/push-notification.4c29efa5fd4582d17149.js","b38296dcd77385ea168d06df72a6e64a"],["/js/reports.4c29efa5fd4582d17149.js","ca6170c6dd076312f7d924861fa096ba"],["/js/screen-small.4c29efa5fd4582d17149.js","61029a44d6310dbec7b2ad0c5d6d311c"],["/js/settings-chart.4c29efa5fd4582d17149.js","22edc80a7f06306a39c6431351103b38"],["/js/settings-language.4c29efa5fd4582d17149.js","9eebef208c1bbf6ae9147666df3f964d"],["/js/settings-theme.4c29efa5fd4582d17149.js","ae9508f4479e334b2eab283a88d30ff2"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.4c29efa5fd4582d17149.js","d6c168a3996310c4e057706e25dc174d"],["/js/toggle-menu-drawer.4c29efa5fd4582d17149.js","aa7dc8b0c53113c17824e676411d308b"],["/js/two-month-picker.4c29efa5fd4582d17149.js","5fd0c8d508e479c8ff38dacadba26891"],["/js/vendors~main.4c29efa5fd4582d17149.js","bb28107ab99cf73ddc3bd039d39a438c"],["/js/vendors~open_position~7c650be5.4c29efa5fd4582d17149.js","93b0c5b3d57f4493b9e1087d225ed51f"],["/js/vendors~smart_chart.4c29efa5fd4582d17149.js","9e050cc6e52eb4930d2288b7e79d6719"],["/js/wallet-information.4c29efa5fd4582d17149.js","f3dd5c4d0c416f3b116bb81cd62c1a5a"],["/js/work-in-progress.4c29efa5fd4582d17149.js","32e02775f9f7cbd891f2db2a0bca5d65"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







