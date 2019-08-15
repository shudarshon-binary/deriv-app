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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","888c9596a2b40b1fb3a8f82f8be67a97"],["/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","9f93e2c88a9df8e88f18adb452803ec5"],["/js/0.606f701a412b25853de1.js","b2a6c6f00490645590759e7ace280e5d"],["/js/1.606f701a412b25853de1.js","4138b84ea1aa8edd944fae7a781cab82"],["/js/10.606f701a412b25853de1.js","725c3ae25cc063732b611cfc9b507aa7"],["/js/11.606f701a412b25853de1.js","7f1d71c2b5680fece0501253a0bd3462"],["/js/12.606f701a412b25853de1.js","0f48ec97afc120ad797993aedbfe3bfd"],["/js/13.606f701a412b25853de1.js","b921c6042fb49a2c9a3c06a4084a350e"],["/js/14.606f701a412b25853de1.js","7b326157b3d4fa58a8aa36180f1ce089"],["/js/15.606f701a412b25853de1.js","5286c406d77fb6ffc4b4bed5e33d6c63"],["/js/16.606f701a412b25853de1.js","97e1b255afba2f7a440b565996cbe02a"],["/js/17.606f701a412b25853de1.js","788e43f3827b7fe50c8e176e268a61aa"],["/js/18.606f701a412b25853de1.js","327925aba48ade32093828201402912c"],["/js/19.606f701a412b25853de1.js","d19e99254f254f3eefa1e0adae1c980d"],["/js/2.606f701a412b25853de1.js","e8c2e0bec3047966f3d928cce8889aa3"],["/js/20.606f701a412b25853de1.js","58b0fb0b461707ba0ee1fbb6cc5b4372"],["/js/21.606f701a412b25853de1.js","10b3b5dd2260968b211821e759a238f7"],["/js/22.606f701a412b25853de1.js","47061f3a195a47799a785166a7703010"],["/js/23.606f701a412b25853de1.js","b9c9f0fa66c4359d38f4703062318782"],["/js/24.606f701a412b25853de1.js","4da997687ea2b1affcaad490ce21a7cd"],["/js/25.606f701a412b25853de1.js","21f9a60318be7ee4a328e9d466388ab4"],["/js/26.606f701a412b25853de1.js","dc57e46cdc6597510637b3eb12c97add"],["/js/27.606f701a412b25853de1.js","626676d1204796ddde5f4f1ad1977d66"],["/js/28.606f701a412b25853de1.js","2efd19cdd5638b5fea1768b4f6944a73"],["/js/29.606f701a412b25853de1.js","677b9311fc65ea78a55ffb59be7ed005"],["/js/3.606f701a412b25853de1.js","398f9e84eeaafb2dd0878f3216c17d9e"],["/js/30.606f701a412b25853de1.js","16cc3e192f7e54911be9a2e3404e43db"],["/js/31.606f701a412b25853de1.js","e17b0aa6e398e87a5b4fac07b2971bde"],["/js/32.606f701a412b25853de1.js","251f4c3a6d5248136aa864f3bac4bf14"],["/js/33.606f701a412b25853de1.js","1ffdc6628b852594709ede8afe810178"],["/js/34.606f701a412b25853de1.js","4854df3be42a60dbf05ab8b66978c316"],["/js/35.606f701a412b25853de1.js","607d99784a770be537dcfcb565066db2"],["/js/36.606f701a412b25853de1.js","529325d39f72f54eff8b6b431333f416"],["/js/37.606f701a412b25853de1.js","46c4d2e5ba3be8a29e54c0865aa29c1b"],["/js/38.606f701a412b25853de1.js","f55756771f4703d76bdc21363185f392"],["/js/39.606f701a412b25853de1.js","78d9502f562abc84a87a59d43a772b9a"],["/js/4.606f701a412b25853de1.js","54e95a5ca6a550bd4378cf4397f6b6fd"],["/js/40.606f701a412b25853de1.js","bb5266229ef91cae3c37fe457ff545be"],["/js/404.606f701a412b25853de1.js","0a6e2a3bb463c39760bed7aa5b22a58c"],["/js/41.606f701a412b25853de1.js","417e6be0bc6ede850463b86ffb30fff5"],["/js/42.606f701a412b25853de1.js","ad1d5e1907bdb53f1f3709b7928d4f52"],["/js/43.606f701a412b25853de1.js","5807b05ffac1511a68497addf69f8c15"],["/js/44.606f701a412b25853de1.js","954e610797f8ae77fb4152b639e264cd"],["/js/45.606f701a412b25853de1.js","e810844d519fc2cbac94ed7f7df115f6"],["/js/46.606f701a412b25853de1.js","a9ec68c1150dea9aa5e2de13964c3374"],["/js/47.606f701a412b25853de1.js","4b2e077e3b19928317985707d8133ccc"],["/js/48.606f701a412b25853de1.js","c20b1c2e888acab51567a0abd64deb12"],["/js/49.606f701a412b25853de1.js","97b1d0fbedb0f646187b6db0f6993cc6"],["/js/5.606f701a412b25853de1.js","f20b00dc11fc79923e968a334d00b0c7"],["/js/50.606f701a412b25853de1.js","214f14f5aa9c8601fa4fd775a82a3023"],["/js/51.606f701a412b25853de1.js","f6455c6f23e0afc040274d2fb2fe112a"],["/js/52.606f701a412b25853de1.js","434401afd9a53b530cb304c9de44debc"],["/js/53.606f701a412b25853de1.js","6e867a30e0c601f30d660320d5887e72"],["/js/54.606f701a412b25853de1.js","038d3bc2be13869a65a00704a32d67cb"],["/js/55.606f701a412b25853de1.js","99ddcc1dc60edcafc82e8ba1fa3d45a5"],["/js/56.606f701a412b25853de1.js","163177ea7201b600dd3717c855b8eb76"],["/js/57.606f701a412b25853de1.js","3bb654df18090e89ff075e8495a3c691"],["/js/58.606f701a412b25853de1.js","86d5bc12af0465eb008d4bb6b60347d1"],["/js/59.606f701a412b25853de1.js","ae8f36c0df6efde07cc71a783fe2b428"],["/js/6.606f701a412b25853de1.js","d618093e994db530df5bd09ad48a448a"],["/js/60.606f701a412b25853de1.js","ff4ca6174b6f0501016c3e68d8580ee7"],["/js/61.606f701a412b25853de1.js","50b13693973f2b8d950f631d67b65ffd"],["/js/62.606f701a412b25853de1.js","8eb8c6be57190a9d90c0f93e943bade6"],["/js/63.606f701a412b25853de1.js","180440e7dcecd00e96e9bb0d0ad78b2c"],["/js/64.606f701a412b25853de1.js","f0f8d78bfb98a137c6b6c2fc82d81064"],["/js/65.606f701a412b25853de1.js","643c3005e4d9a70225d0adf79e189f6f"],["/js/66.606f701a412b25853de1.js","b451fa969050e25206ab7c49e3d8ad6f"],["/js/67.606f701a412b25853de1.js","9dffb5524c44baa5652325117ba82f1f"],["/js/68.606f701a412b25853de1.js","0e2f10d9d219cbbb6a2031f51fd058c8"],["/js/69.606f701a412b25853de1.js","d1425279e33fb59d5f6ebca2315b9cd7"],["/js/7.606f701a412b25853de1.js","028d6befd8d53fd369d1f07dede6edac"],["/js/70.606f701a412b25853de1.js","b798b6d966affcf504ebe8d8b8bba1ed"],["/js/71.606f701a412b25853de1.js","e421d0913aaff62dd02c185f6ee4832d"],["/js/8.606f701a412b25853de1.js","8f117decbf9682bcb5c6e61425a26f12"],["/js/9.606f701a412b25853de1.js","fa568eb810c53e0351950d0a2ce7b26f"],["/js/account-info.606f701a412b25853de1.js","e7fee2cac9d59a70b5f06502735e3073"],["/js/contract.606f701a412b25853de1.js","503ad8c6c65bcdf578cd01a7b5bb5d8c"],["/js/default~open_position~1833eefb.606f701a412b25853de1.js","603fae54ab587bd5caf5b280b2b98b39"],["/js/digits.606f701a412b25853de1.js","32f7b1fc620b2d618a902c02f3cb9ce1"],["/js/info-box.606f701a412b25853de1.js","c508598f05de1eacf0eea7668aa05968"],["/js/main.606f701a412b25853de1.js","62109132338ccb863df1cae6ebe547aa"],["/js/modals.606f701a412b25853de1.js","c7b39070ed221b650340cbc549a050a5"],["/js/notification-messages.606f701a412b25853de1.js","e46b6142f4aaffa04244794dc5e1ef63"],["/js/open_positions.606f701a412b25853de1.js","6ab50817477aee28f3025ea889f0095d"],["/js/profit_table.606f701a412b25853de1.js","3d63bf7e16b36569eb91aa31cd798aa0"],["/js/push-notification.606f701a412b25853de1.js","ac1c893925ddd8d95ae311f79c46a4b3"],["/js/reports.606f701a412b25853de1.js","803a9a3742325bd6442d4f841f2ebc1b"],["/js/screen-small.606f701a412b25853de1.js","e878541190ae5144f0ac65360ae29bcb"],["/js/settings-chart.606f701a412b25853de1.js","ef8b0475df3370626cf6177e2c83b2cb"],["/js/settings-language.606f701a412b25853de1.js","dfa269b2e8a3f2094cbf6dfa75635ba0"],["/js/settings-theme.606f701a412b25853de1.js","e7953a1bbf8370b34245b892c9ebfb3a"],["/js/smart_chart.606f701a412b25853de1.js","d7bb5f69c8e1c5f529a0b882c253b118"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.606f701a412b25853de1.js","d73dcedb7bbad2c6aa0d6b98e46d8fef"],["/js/toggle-menu-drawer.606f701a412b25853de1.js","3cc706f4aa3ee6d18967d62d0266c56a"],["/js/two-month-picker.606f701a412b25853de1.js","b1ce4d61b91777cfbb20286e161667f8"],["/js/vendors~main.606f701a412b25853de1.js","ad06aacb29c4d56850712babfbde87cd"],["/js/vendors~open_position~7c650be5.606f701a412b25853de1.js","2f229f74f755a9952b8a238ff77ab15e"],["/js/vendors~smart_chart.606f701a412b25853de1.js","6850553e0d7d9b6057e096f0d38b7b9a"],["/js/work-in-progress.606f701a412b25853de1.js","96ade66685250a210deff50d629425ee"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







