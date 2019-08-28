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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","5104c2849d9f05391a1d0638d7617522"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c16518fc1a5711d6fb51b3e86ab0d53f"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","a7a0b0af7cef352e68ebacb3f0108106"],["/js/0.b894c91e78f2043f4dbf.js","75b99c3f6fbfc07d90a708e6fd5c92e4"],["/js/1.b894c91e78f2043f4dbf.js","6aa2b690b31585e026b8780ab5906ea8"],["/js/10.b894c91e78f2043f4dbf.js","51304687908ef17b3259601bf3c50ac2"],["/js/11.b894c91e78f2043f4dbf.js","b58041cd04918df3efaf8b83ffb8cc2c"],["/js/12.b894c91e78f2043f4dbf.js","e239246731d0e99da1e5ee749391c4ab"],["/js/13.b894c91e78f2043f4dbf.js","fff724d68575a81ad3b442f20499c042"],["/js/14.b894c91e78f2043f4dbf.js","8fd3f50dd26e1eb1fd9e3ef4c717a613"],["/js/15.b894c91e78f2043f4dbf.js","a6e821a3db7595cbb5c205714317a57f"],["/js/16.b894c91e78f2043f4dbf.js","e2e366a2738b338f1a5b929ae34de830"],["/js/17.b894c91e78f2043f4dbf.js","4cf20d6e508f4aacff5b4c0ad9810f4b"],["/js/18.b894c91e78f2043f4dbf.js","eaa436b9d4c42f42d6156f4d71f38c9f"],["/js/19.b894c91e78f2043f4dbf.js","1c4cbab7a2af62496f8c93e5b75410a6"],["/js/2.b894c91e78f2043f4dbf.js","8af776bc1d0ae1ae6c5c4bc60b6801ba"],["/js/20.b894c91e78f2043f4dbf.js","bb0c22807aecd3ccc7aa31071d67e599"],["/js/21.b894c91e78f2043f4dbf.js","d6c4fd9ca211b04fda3dffe96e4d1444"],["/js/22.b894c91e78f2043f4dbf.js","1a250b71c7a4b5ec4ca723de34ffa27e"],["/js/23.b894c91e78f2043f4dbf.js","d430543219a362f5ffa82be71592ed64"],["/js/24.b894c91e78f2043f4dbf.js","65b05377668291227a1a998e847add3b"],["/js/25.b894c91e78f2043f4dbf.js","c8c3fbe33ca16bde0621048ae63db6ed"],["/js/26.b894c91e78f2043f4dbf.js","819c1d18a0b24ed8b82a22d1d1cde50c"],["/js/27.b894c91e78f2043f4dbf.js","7a8c370a0dd92538383d94d425607c0b"],["/js/28.b894c91e78f2043f4dbf.js","6084a376d33f5395d041d44f428b34fd"],["/js/29.b894c91e78f2043f4dbf.js","4072726ee25139b4e68db5ec6addee91"],["/js/3.b894c91e78f2043f4dbf.js","c62cfb2ad8670e9a2ba72ee470e02bc6"],["/js/30.b894c91e78f2043f4dbf.js","172394f58d71ac894d4d69a16e693d7e"],["/js/31.b894c91e78f2043f4dbf.js","545bfb9fc900b99efc725748cd16b75b"],["/js/32.b894c91e78f2043f4dbf.js","dfc3d1acb323855c9458a6f646afecb5"],["/js/33.b894c91e78f2043f4dbf.js","5a46005d03709dd556f3cdb11f36748e"],["/js/34.b894c91e78f2043f4dbf.js","8bb7abfbbc75c5eddf83582820d4bcff"],["/js/35.b894c91e78f2043f4dbf.js","7a4531384d3dc149a7f5d1a50517c60b"],["/js/36.b894c91e78f2043f4dbf.js","60264f182e76f77616a932961f00ead3"],["/js/37.b894c91e78f2043f4dbf.js","ba4f269a6adb35f60c142f7570cbab1c"],["/js/38.b894c91e78f2043f4dbf.js","d2db1b4a9f713e217150baa252e8b768"],["/js/39.b894c91e78f2043f4dbf.js","404b0abfa85c89eb06bb7a827114efcd"],["/js/4.b894c91e78f2043f4dbf.js","c202560fa2821caa9618672c0e5ec98f"],["/js/40.b894c91e78f2043f4dbf.js","294ed22a9aa4173ef1f4ca5f493764d3"],["/js/404.b894c91e78f2043f4dbf.js","7cd82b75a1537ca1cf58555c9f33b0c0"],["/js/41.b894c91e78f2043f4dbf.js","ef42931e52772af931864f2428a57841"],["/js/42.b894c91e78f2043f4dbf.js","3f166d3f82bfec44497d14f263281e49"],["/js/43.b894c91e78f2043f4dbf.js","b0e8d91addd9fa4a275196b6abfa7813"],["/js/44.b894c91e78f2043f4dbf.js","c61fdaf5c2a96539566ed9bbf41f6839"],["/js/45.b894c91e78f2043f4dbf.js","7b32f9a421966a20b9a345b744223ec7"],["/js/46.b894c91e78f2043f4dbf.js","1925d8fb9991344b6f972cde7351f81a"],["/js/47.b894c91e78f2043f4dbf.js","d1ac7fb69b03a4681feafe6bbc489269"],["/js/48.b894c91e78f2043f4dbf.js","c7fc27ddf9755e7e3db34b034d9edd50"],["/js/49.b894c91e78f2043f4dbf.js","3161462f25017818391fe007985767df"],["/js/5.b894c91e78f2043f4dbf.js","3dd2f3c3e8602b28815ff96bb0d6ff3b"],["/js/50.b894c91e78f2043f4dbf.js","0f42ec16abae38e84f2fa09faf9fddab"],["/js/51.b894c91e78f2043f4dbf.js","f1781f120ff8adf4e195793f42f81e3c"],["/js/52.b894c91e78f2043f4dbf.js","8e9f2c97beb60f7c3c9f25be4c133c91"],["/js/53.b894c91e78f2043f4dbf.js","4cf2959f0104c700e374b1e3f7c2886b"],["/js/54.b894c91e78f2043f4dbf.js","a50a821f86ea2b2341ba795961c361ad"],["/js/55.b894c91e78f2043f4dbf.js","bae6b8a532344b191bacff97dc7781b0"],["/js/56.b894c91e78f2043f4dbf.js","7bf7ff0b3dcebd312871bb3984031810"],["/js/57.b894c91e78f2043f4dbf.js","0b2cbcc8f3323123f0aaebfc3f17be6e"],["/js/58.b894c91e78f2043f4dbf.js","550d55dab7487d13c699e799be41959e"],["/js/59.b894c91e78f2043f4dbf.js","c2b30bc7824144e73dc56d12504a345a"],["/js/6.b894c91e78f2043f4dbf.js","bd08db4a6ca993358341ec3b45cb66ba"],["/js/60.b894c91e78f2043f4dbf.js","7a61d7a67c2cf05bf5f191d2676ef3fd"],["/js/61.b894c91e78f2043f4dbf.js","8328e8bc259fd621c1f14d1b9240f70c"],["/js/62.b894c91e78f2043f4dbf.js","55d135a70be3ea7b3a3b8ff8c1811630"],["/js/63.b894c91e78f2043f4dbf.js","f5600eeb85d96d0d726cfd2982fe0407"],["/js/64.b894c91e78f2043f4dbf.js","33bfcba351aa4716f897b6eec2da7709"],["/js/65.b894c91e78f2043f4dbf.js","aca823be7c0e0c0e19fa9a8787a2ad22"],["/js/66.b894c91e78f2043f4dbf.js","dd469dc5ae7d2d85b2ab8c1505863e10"],["/js/67.b894c91e78f2043f4dbf.js","e50ac8b4b114f78e2449ff6eee24a0b1"],["/js/68.b894c91e78f2043f4dbf.js","c8e02e70906e98bd4d24a599b60040c6"],["/js/69.b894c91e78f2043f4dbf.js","843ff8a8eae2335c918c35184bcc4c0a"],["/js/7.b894c91e78f2043f4dbf.js","6c6edb555ba668fc836d06b794080c04"],["/js/70.b894c91e78f2043f4dbf.js","153ad847dc858db3fff761f1000b4a40"],["/js/71.b894c91e78f2043f4dbf.js","80e2e31011f7dae23ec076debb63d24b"],["/js/8.b894c91e78f2043f4dbf.js","7f8e7990ded5054f39a1db475e43bc49"],["/js/9.b894c91e78f2043f4dbf.js","ae65ec219d6efad9e719a7bdb740efac"],["/js/AccountSignupModal.b894c91e78f2043f4dbf.js","4110bc9ad4366e424f9accad66bf48d0"],["/js/account-info.b894c91e78f2043f4dbf.js","7a14d86c32be125bdb71f8bff07ee671"],["/js/contract.b894c91e78f2043f4dbf.js","30c242393c67b8c8967550a19f9626f6"],["/js/default~open_position~1833eefb.b894c91e78f2043f4dbf.js","34e631f7f9a77a19c23e91277c136b53"],["/js/digits.b894c91e78f2043f4dbf.js","8e7513072d2c64d9fef7b1b6b95bfca6"],["/js/info-box.b894c91e78f2043f4dbf.js","39e07495735239c54e260c30ed5ab928"],["/js/main.b894c91e78f2043f4dbf.js","0d89260a0cc3edf4f8eecf50fddd32a7"],["/js/modals.b894c91e78f2043f4dbf.js","6300da3b557bd1012096e1e1d20e460b"],["/js/notification-messages.b894c91e78f2043f4dbf.js","2ec5b9e3b6a722e64392d650ee94191c"],["/js/open_positions.b894c91e78f2043f4dbf.js","027e5b162d7eb08aebe2775e324b4d5c"],["/js/profit_table.b894c91e78f2043f4dbf.js","3f18bbb7fd447cd9de9199c479e7c0b7"],["/js/push-notification.b894c91e78f2043f4dbf.js","947b2ed4d0803f13a939b5166c10d6d5"],["/js/reports.b894c91e78f2043f4dbf.js","11e1154dc64c74ab7193bdcab19e441b"],["/js/screen-small.b894c91e78f2043f4dbf.js","f0c725739527c8efc06aa3eb94ec9d4d"],["/js/settings-chart.b894c91e78f2043f4dbf.js","d1d160d8c4d5423c1a8110f9c5cc39d7"],["/js/settings-language.b894c91e78f2043f4dbf.js","ace100b55cdc02135bd207ec3796d439"],["/js/settings-theme.b894c91e78f2043f4dbf.js","04db9c7fd435e0f901b1bd34393e7f14"],["/js/smart_chart.b894c91e78f2043f4dbf.js","6bf415352b4204a9fa36154babd63e19"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.b894c91e78f2043f4dbf.js","61f84763a75fa83eda7d09bfe234d9d6"],["/js/toggle-menu-drawer.b894c91e78f2043f4dbf.js","8b61575ecc811650eaef91ce3e462b44"],["/js/two-month-picker.b894c91e78f2043f4dbf.js","3597649b3d2f36e0a214ace8f896360f"],["/js/vendors~AccountSignupModal.b894c91e78f2043f4dbf.js","f62dd9a8ea802dc88acb94b7c7add048"],["/js/vendors~main.b894c91e78f2043f4dbf.js","57a170001bfe63fbc61d4e4e5763298d"],["/js/vendors~open_position~7c650be5.b894c91e78f2043f4dbf.js","662e79a2fbb1377dc191008a02de9937"],["/js/vendors~smart_chart.b894c91e78f2043f4dbf.js","c7475dc9d2b203fc125e7722fd9bc74a"],["/js/work-in-progress.b894c91e78f2043f4dbf.js","8b7a311c8376e1201aa24bab1bf50774"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







