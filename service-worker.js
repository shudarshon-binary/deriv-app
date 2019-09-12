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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","dd2ec7c8ac5f802750805fa9bc2d0281"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/digits.css","6ed77e3637e6b7ddfe52cf4de88551ab"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","28ae8c6160772679186d0e96332c0ca8"],["/js/0.709db9eb59d02dc46613.js","7c3f052e8f2fe1eb797900a8cefb50d1"],["/js/1.709db9eb59d02dc46613.js","56929e93d71c0ad650b4b1b2f0e16549"],["/js/10.709db9eb59d02dc46613.js","cc987e12d15cff3c2c665f1d5f574ba6"],["/js/11.709db9eb59d02dc46613.js","e05de0ba6d7a8483ec7cbd71bb02c15b"],["/js/12.709db9eb59d02dc46613.js","eff24c5c1e86d3321b42ac457ea0c683"],["/js/13.709db9eb59d02dc46613.js","0dd1e40e719504cccad53b803648c53f"],["/js/14.709db9eb59d02dc46613.js","548c39a10bbe2906300ebc26e73b7683"],["/js/15.709db9eb59d02dc46613.js","ee37ebb4736382ad0a55932b293a50a8"],["/js/16.709db9eb59d02dc46613.js","74e9c16c9e065e2708a590456da5b289"],["/js/17.709db9eb59d02dc46613.js","1f8383e943d566f290fdf42266d88c22"],["/js/18.709db9eb59d02dc46613.js","87708c1af7f48e3b9e6c7f788fd23159"],["/js/19.709db9eb59d02dc46613.js","b3aedfdd01d9eca4ff1c122d40e5db99"],["/js/2.709db9eb59d02dc46613.js","04ffbb84f690ef5d0fae9b954a3f084c"],["/js/20.709db9eb59d02dc46613.js","a8c4886cc428790ab50d583850b470ed"],["/js/21.709db9eb59d02dc46613.js","aecb65af86c727ba67b15029fc073bb8"],["/js/22.709db9eb59d02dc46613.js","af5fd2ddc5bdfba37fec836b51236f78"],["/js/23.709db9eb59d02dc46613.js","8d678acb98f63694dbe4d5f73ad50193"],["/js/24.709db9eb59d02dc46613.js","19dc82cdfb76fdfde02705b716f052a4"],["/js/25.709db9eb59d02dc46613.js","805b0ac94bfb5e2b7f6944b8f0397169"],["/js/26.709db9eb59d02dc46613.js","903c0c6fafb4157644da72abab81ef81"],["/js/27.709db9eb59d02dc46613.js","3ed6afd68338c7bf9253f6953f758523"],["/js/28.709db9eb59d02dc46613.js","12a4625532f45d19a1540fe65d705971"],["/js/29.709db9eb59d02dc46613.js","b4612c997e2023609f3cd019c6fd303b"],["/js/3.709db9eb59d02dc46613.js","1e5745a555dde46afe718d5ba0d10905"],["/js/30.709db9eb59d02dc46613.js","383da417d36517e2448f86298a889506"],["/js/31.709db9eb59d02dc46613.js","acf177cbf4bbb1a5720f147a5727f817"],["/js/32.709db9eb59d02dc46613.js","e57469ecc5a3399765f822f98647af8c"],["/js/33.709db9eb59d02dc46613.js","fe8a5391724afda6733147ac0ddec179"],["/js/34.709db9eb59d02dc46613.js","816a9d5f8dd142780acdae64ea994ac4"],["/js/35.709db9eb59d02dc46613.js","7fa6163b922488821b7cdb40208422f4"],["/js/36.709db9eb59d02dc46613.js","68a4675c2ca553f4032065968e8a957b"],["/js/37.709db9eb59d02dc46613.js","57fdea0705aba5af497c7ece881d1bb0"],["/js/38.709db9eb59d02dc46613.js","ffa29e58d74e765ef9546adfeefb4c15"],["/js/39.709db9eb59d02dc46613.js","d224e9d5c42b539fc06e81dec7f205bf"],["/js/4.709db9eb59d02dc46613.js","af5827c83ec1797ebf346365cd97d699"],["/js/40.709db9eb59d02dc46613.js","7cfbdb7b3bb7fd0230e6cb0b5b463c2c"],["/js/404.709db9eb59d02dc46613.js","e698f830604bb21659e3eec14300a76c"],["/js/41.709db9eb59d02dc46613.js","cbc18a91fa75e6b2181495502ae651a4"],["/js/42.709db9eb59d02dc46613.js","6d0a47f3dd82f1a44d95eecd8f0b43c4"],["/js/43.709db9eb59d02dc46613.js","dda76cf9360755c80862340550bb94a0"],["/js/44.709db9eb59d02dc46613.js","ec346c731579b066b084574025630aa8"],["/js/45.709db9eb59d02dc46613.js","b65b089b98895cc6b4cd269673f1f8aa"],["/js/46.709db9eb59d02dc46613.js","ca91ac3110da2a97e664c96a31728a35"],["/js/47.709db9eb59d02dc46613.js","624b94ddafabf4a325bb5280a301a19a"],["/js/48.709db9eb59d02dc46613.js","2a15e65c21c61a3863d557a44b9a2204"],["/js/49.709db9eb59d02dc46613.js","f6d3750af4fd5d842b2a463e5febf4b3"],["/js/5.709db9eb59d02dc46613.js","9ada52f433ad698831832912535b0683"],["/js/50.709db9eb59d02dc46613.js","8f6d2b044583cc9f4c01b2474f564efb"],["/js/51.709db9eb59d02dc46613.js","6ae88a15a52050947ae09145ac9dc9e5"],["/js/52.709db9eb59d02dc46613.js","0265332015b419acc275ef9e5efeb303"],["/js/53.709db9eb59d02dc46613.js","7bd5af3a38299a0d5180b6bdd9b20271"],["/js/54.709db9eb59d02dc46613.js","49051a2768742966ea7e9048d748798d"],["/js/55.709db9eb59d02dc46613.js","54f915b330fdf4f5c59fe6b25754f8ec"],["/js/56.709db9eb59d02dc46613.js","d147ea457a3304e7707515d4196b7411"],["/js/57.709db9eb59d02dc46613.js","9790867a68893ae20c44221a6516b296"],["/js/58.709db9eb59d02dc46613.js","e6aab099058e72e3be91c8ca804c6d65"],["/js/59.709db9eb59d02dc46613.js","9ec3f0b4bdc43e26a2e9b4345cdd693e"],["/js/6.709db9eb59d02dc46613.js","e89287cc0d858667c4cd5c5d03e4b7f1"],["/js/60.709db9eb59d02dc46613.js","8c4345b044b5a5f34e913e3604e333c1"],["/js/61.709db9eb59d02dc46613.js","499a6b9f90d19066304b65856297b787"],["/js/62.709db9eb59d02dc46613.js","9da8a76f46ebaba2196d26bc27d4ec23"],["/js/63.709db9eb59d02dc46613.js","b40442eab2bcce3d65710b9f21e10f34"],["/js/64.709db9eb59d02dc46613.js","1e2100859a8bbe71fc984ea16890b3ee"],["/js/65.709db9eb59d02dc46613.js","0b6880e4b0a21027f98f61f7aca8ac73"],["/js/66.709db9eb59d02dc46613.js","cd811861e40c945287f04eb3701c78f0"],["/js/67.709db9eb59d02dc46613.js","5e8f6c50b94d4a6109f461a1ed27e84a"],["/js/68.709db9eb59d02dc46613.js","4df33a03d75b4564ffb9124550bda103"],["/js/69.709db9eb59d02dc46613.js","362fd441b917ff45d95ad114a79aca6a"],["/js/7.709db9eb59d02dc46613.js","0880471786c04a6be84b69f955d92029"],["/js/70.709db9eb59d02dc46613.js","ef897adcd51f503e3e2642344121091b"],["/js/71.709db9eb59d02dc46613.js","09aba258bc38ca55ab9185b7b8ca4dac"],["/js/72.709db9eb59d02dc46613.js","550f748adbc1604a21bd6a1ee3e269f9"],["/js/73.709db9eb59d02dc46613.js","ad98e82792e1c86391b11169175213dc"],["/js/74.709db9eb59d02dc46613.js","8df9cb350507b223d0d794463b9c9133"],["/js/75.709db9eb59d02dc46613.js","5bd8d1e4c73730601fcfb2c5abf1ddcf"],["/js/76.709db9eb59d02dc46613.js","b1389655c55330d5964b9f08669d7078"],["/js/77.709db9eb59d02dc46613.js","f50cc0c163a129e39865eb8b4f339ff8"],["/js/8.709db9eb59d02dc46613.js","f7f31f54769f71a52afddd1c35b5c702"],["/js/9.709db9eb59d02dc46613.js","088c8da12511f7e5151e91dd13d809f1"],["/js/AccountSignupModal.709db9eb59d02dc46613.js","195cd0bd9725a2f02e5f3af6ce7e2ad7"],["/js/account-info.709db9eb59d02dc46613.js","1df95ae6e401b86a8e1812fcb2c37d61"],["/js/contract.709db9eb59d02dc46613.js","3d7307348c1f57a51a10af1ef80513f9"],["/js/default~open_position~1833eefb.709db9eb59d02dc46613.js","086edc8389ea5fcb77379906f94d64fb"],["/js/digits.709db9eb59d02dc46613.js","2b8888e35605b7ef2b366db3de108b53"],["/js/info-box.709db9eb59d02dc46613.js","fe6c0a33ef684bf122c2915b03ae6148"],["/js/main.709db9eb59d02dc46613.js","8c4eda39a4f784edbdca5bc8fc9001e1"],["/js/modals.709db9eb59d02dc46613.js","51528a0990ef0cdcab4b3397058eebad"],["/js/notification-messages.709db9eb59d02dc46613.js","8d9392475022eec99a12f6d52ba7c10b"],["/js/open_positions.709db9eb59d02dc46613.js","fadb58eed4dce9e66b1558cb72227159"],["/js/profit_table.709db9eb59d02dc46613.js","cdf5c8a60d3afb3fbd2a21493684421c"],["/js/push-notification.709db9eb59d02dc46613.js","b6474fc3b260c960edf739781613dcd6"],["/js/reports.709db9eb59d02dc46613.js","f92273925eec6aee8f39b042e9482eb0"],["/js/screen-small.709db9eb59d02dc46613.js","e046a991aba537e4723934dffb3c0306"],["/js/settings-chart.709db9eb59d02dc46613.js","c7b6bfe8661d006bc10d1742f3c92df2"],["/js/settings-language.709db9eb59d02dc46613.js","9c3d4fccd063cefd2021f540ac8a02bc"],["/js/settings-theme.709db9eb59d02dc46613.js","acf3e5ee41b1bfa810532f9cced495a0"],["/js/smart_chart.709db9eb59d02dc46613.js","2e64c346c1a6efbd9f4848bcd0417eb7"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.709db9eb59d02dc46613.js","bb64e6aa0f96b92655ce4332db75a9c7"],["/js/toggle-menu-drawer.709db9eb59d02dc46613.js","781ac59d037cbd0d1a37368512746aa4"],["/js/two-month-picker.709db9eb59d02dc46613.js","86b981dca83d74667d90c72a1771975f"],["/js/vendors~AccountSignupModal.709db9eb59d02dc46613.js","276e8c6b3c3eb3093da93847bd3d7c74"],["/js/vendors~digits~info-b~897959f6.709db9eb59d02dc46613.js","6e69c256b316b3b27130f5628d452001"],["/js/vendors~main.709db9eb59d02dc46613.js","5d499d6986640577fa15995e5d6e4e79"],["/js/vendors~open_position~7c650be5.709db9eb59d02dc46613.js","030207a5539cdb80dff61b39c33c244d"],["/js/vendors~smart_chart.709db9eb59d02dc46613.js","926b39231a310d8dd6baf584164170b1"],["/js/work-in-progress.709db9eb59d02dc46613.js","3123ff151d28913d45a9ab55f120d6b1"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







