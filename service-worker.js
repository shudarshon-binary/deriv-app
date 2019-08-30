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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d64dbc6ed555f2b62dca17e4d9e91e44"],["/css/app.css","1eb4c00d14572d5bf412ae5e94fb5f97"],["/css/default~open_position~1833eefb.css","8da0918fdacbca5459a66113585fe0e3"],["/css/digits.css","58caa3b1383e3642a2d10c36efde09ab"],["/css/modals.css","22136537dd8ce0b2ba942ed1dff5b222"],["/css/notification-messages.css","374f5607221a5522cd56716d5c85ddd2"],["/css/reports.css","7ce22ea1911714a7dd288be4939ba7f4"],["/css/screen-small.css","b4e5d5fe4a1ca0758f34ac4250558435"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","ff496f035e3576fabb0f7ba88b151612"],["/js/0.bd2896213472d4a6de84.js","23c45fe9472b5e7ef44a32c9ade201bd"],["/js/1.bd2896213472d4a6de84.js","83c03df1e085a97f73da43bcf6191df6"],["/js/10.bd2896213472d4a6de84.js","a4b154aee9600088d97439ea2bf8796e"],["/js/11.bd2896213472d4a6de84.js","9953eda5b98706c07680f23438a3fcd6"],["/js/12.bd2896213472d4a6de84.js","56cf98f5c4398f60772b7a41e2a59e2a"],["/js/13.bd2896213472d4a6de84.js","bf77268133297f9270f7a3e344c1713c"],["/js/14.bd2896213472d4a6de84.js","621fe3c17a06519fa4b8a2877b11bdda"],["/js/15.bd2896213472d4a6de84.js","fa68a7d271d4e40cec2a0e2c518a2a5e"],["/js/16.bd2896213472d4a6de84.js","fd29e71feeb3abc868fbd21a97b8e5e0"],["/js/17.bd2896213472d4a6de84.js","b8e9889145e31f87f674d37f3fce0faa"],["/js/18.bd2896213472d4a6de84.js","a2b3acef82e500b3caf44cc11fd491b8"],["/js/19.bd2896213472d4a6de84.js","1601bbf0a3a3ed3a3a02a42bce7d8bd8"],["/js/2.bd2896213472d4a6de84.js","003c1221ecd172f18483eb0410713c8e"],["/js/20.bd2896213472d4a6de84.js","f64295f6779049b12068fc7322e05e18"],["/js/21.bd2896213472d4a6de84.js","46c895ecf24ca21e8664e3534b44cfe3"],["/js/22.bd2896213472d4a6de84.js","56d2ef677aca4ebafafc81e946c3f4bc"],["/js/23.bd2896213472d4a6de84.js","d5f66a2a702951554bf5a0f3387dfcf2"],["/js/24.bd2896213472d4a6de84.js","9eed06cf6237cbd2c7ac903178d2caa8"],["/js/25.bd2896213472d4a6de84.js","9061f84236389a469894445d0eb50e80"],["/js/26.bd2896213472d4a6de84.js","fe367edf5ddcad83056018e766d02909"],["/js/27.bd2896213472d4a6de84.js","2eb267bfcd94dee5ed1370c88a401c57"],["/js/28.bd2896213472d4a6de84.js","8ca0dc171bd0d1a6fb0bb4d1e6f1a5c2"],["/js/29.bd2896213472d4a6de84.js","37687a95e7a558012ffb5fc2fbc5391c"],["/js/3.bd2896213472d4a6de84.js","0e20e52a5cdae4db19f659e3fee24f61"],["/js/30.bd2896213472d4a6de84.js","3ccab6cc3594721d287937c63b705452"],["/js/31.bd2896213472d4a6de84.js","4d5ea5a8b6091641a47861152b5885db"],["/js/32.bd2896213472d4a6de84.js","2d7b7ab4ef1d452622695c749ca280f6"],["/js/33.bd2896213472d4a6de84.js","6445e3d22bb21e64f5764865bd1547c5"],["/js/34.bd2896213472d4a6de84.js","05ff52067eebeb4fb5254bcc8dda0bd6"],["/js/35.bd2896213472d4a6de84.js","8e87955a8095ec85ca49b63d3c3a69e4"],["/js/36.bd2896213472d4a6de84.js","27dc79039755b3b2cb08caa6d744f843"],["/js/37.bd2896213472d4a6de84.js","b29d8f15de7d85d74e8d0183479c8d7d"],["/js/38.bd2896213472d4a6de84.js","9efa17e7610a7f3b63df30ac356da10a"],["/js/39.bd2896213472d4a6de84.js","576838a67596c586c27ecfaffdc05f9c"],["/js/4.bd2896213472d4a6de84.js","c129e57c996f55badfaebeac028eb55c"],["/js/40.bd2896213472d4a6de84.js","2bb899b61f24e4132bbab50fb1b1ea72"],["/js/404.bd2896213472d4a6de84.js","f9dbff2046a64cb83a59001c90320ac9"],["/js/41.bd2896213472d4a6de84.js","a3233a6e9c3df8dd05fee2ca337e1949"],["/js/42.bd2896213472d4a6de84.js","0d83766567c588bceb4ed69ee5a3808b"],["/js/43.bd2896213472d4a6de84.js","03845798866969e3dae1e46124003a7f"],["/js/44.bd2896213472d4a6de84.js","068f4038facb9151649f80273f72fdf6"],["/js/45.bd2896213472d4a6de84.js","6afc57b4c373ee39a5e154edd6910fd2"],["/js/46.bd2896213472d4a6de84.js","218b52d0e467c795f1020e16b1383ff9"],["/js/47.bd2896213472d4a6de84.js","3ab54f90db61978644891a480778cf48"],["/js/48.bd2896213472d4a6de84.js","998190f203a79c0e5aa7d597b7c5d0a9"],["/js/49.bd2896213472d4a6de84.js","b7d9f299d89e051024f28ddd0e837324"],["/js/5.bd2896213472d4a6de84.js","31ffeea1d6ce5b44aebbc7fde5c0b3c7"],["/js/50.bd2896213472d4a6de84.js","6607ec1f217b85eedc4d62ef90ff4669"],["/js/51.bd2896213472d4a6de84.js","959f1e2334d50fee1283b0986cc97389"],["/js/52.bd2896213472d4a6de84.js","d6bb67ada3f75f21c5bdcb3486ebc6a1"],["/js/53.bd2896213472d4a6de84.js","f6bd0df850c1187c069deaf4fd8ae535"],["/js/54.bd2896213472d4a6de84.js","7945cc84ed173ac64f71b291eeb538e0"],["/js/55.bd2896213472d4a6de84.js","8cfc620f9652c6ada4087ebb736088f1"],["/js/56.bd2896213472d4a6de84.js","1d0db3ddfd7a54b35619d6435795b8c0"],["/js/57.bd2896213472d4a6de84.js","72871cf5a60559322f5469f0db0a9a0e"],["/js/58.bd2896213472d4a6de84.js","91a8d14aae7bd676309b4f9f4ab6d369"],["/js/59.bd2896213472d4a6de84.js","16c030bb57325f89758642f1778aadf7"],["/js/6.bd2896213472d4a6de84.js","1947374f3196628ac9497aa8d35e3112"],["/js/60.bd2896213472d4a6de84.js","e15ce5997785d332a2d84663bb512ab0"],["/js/61.bd2896213472d4a6de84.js","25b028628979273bb6390b7acb68237e"],["/js/62.bd2896213472d4a6de84.js","eb81e57132b93e83dc87878f21170d00"],["/js/63.bd2896213472d4a6de84.js","e4743b6f58b24ca3f050592026a42c22"],["/js/64.bd2896213472d4a6de84.js","abe47aed1d830e2fd97cbefa7437e034"],["/js/65.bd2896213472d4a6de84.js","5872dd4f37079714639cf1a521980542"],["/js/66.bd2896213472d4a6de84.js","abe01513bc118d099056e56df841d804"],["/js/67.bd2896213472d4a6de84.js","36e717fe9027953214c3abbb59907d33"],["/js/68.bd2896213472d4a6de84.js","8d1407e56609faf6602ce6f3ad033973"],["/js/69.bd2896213472d4a6de84.js","b90e3e017dce5c640437b93986df0409"],["/js/7.bd2896213472d4a6de84.js","7ccfeadcd66b396b10189bf2f3490fdb"],["/js/70.bd2896213472d4a6de84.js","cfc2d68637e731f138e262059608fbbd"],["/js/71.bd2896213472d4a6de84.js","1e03d735574ed7770dfb504dd35d5dcc"],["/js/8.bd2896213472d4a6de84.js","9ef7e1207abaacda86a98cfa5f88cea0"],["/js/9.bd2896213472d4a6de84.js","711fa55132a763ef6048e1f9996fb686"],["/js/AccountSignupModal.bd2896213472d4a6de84.js","ecb106774a170a60faaa9f853c938414"],["/js/account-info.bd2896213472d4a6de84.js","f990167ec63022b026453a730a999e35"],["/js/contract.bd2896213472d4a6de84.js","b4d962a64416b133a05e1b0e8cf29729"],["/js/default~open_position~1833eefb.bd2896213472d4a6de84.js","cf4ce6e5d7ba95a9e791d72758351afb"],["/js/digits.bd2896213472d4a6de84.js","4156312e652958af5d102f471a244113"],["/js/info-box.bd2896213472d4a6de84.js","214085bec54120cdc0e7604563deb8cf"],["/js/main.bd2896213472d4a6de84.js","a600fe5f77f97d4058d9967f691d47f9"],["/js/modals.bd2896213472d4a6de84.js","3cb09b5cbd96e54635884e274ffa8e00"],["/js/notification-messages.bd2896213472d4a6de84.js","48a8b0a43f92d7cc5cb52899526066d9"],["/js/open_positions.bd2896213472d4a6de84.js","955893355cc52ef7acbf69192651ff1d"],["/js/profit_table.bd2896213472d4a6de84.js","eec509612bc382ccbe6a81e414ba52f5"],["/js/push-notification.bd2896213472d4a6de84.js","78d00235722dbf8e0f99a1d08dd787ea"],["/js/reports.bd2896213472d4a6de84.js","915ffb001a7d74b8a011f0206a648791"],["/js/screen-small.bd2896213472d4a6de84.js","90eba064921430fef3ac21a9b97704b7"],["/js/settings-chart.bd2896213472d4a6de84.js","42a6aaf9b0736dcc4b95f674a0e84567"],["/js/settings-language.bd2896213472d4a6de84.js","b6226d6852f578eca0b0fe478ef0581d"],["/js/settings-theme.bd2896213472d4a6de84.js","d8bb4877f816a7de61db897cb5c677c0"],["/js/smart_chart.bd2896213472d4a6de84.js","17e85d9b51f9a882d4bdb59fbdd2812f"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.bd2896213472d4a6de84.js","8d0e3e59465121a4529c376b338f3769"],["/js/toggle-menu-drawer.bd2896213472d4a6de84.js","40c1076a0b5c94a359e6acdc1aff6f26"],["/js/two-month-picker.bd2896213472d4a6de84.js","1117f7558aea9f5d69349dffd10712fb"],["/js/vendors~AccountSignupModal.bd2896213472d4a6de84.js","1ee277acef3ba69ffb83d73b1af56f38"],["/js/vendors~digits~info-b~897959f6.bd2896213472d4a6de84.js","5cb4241fcfce313735d49523203f82b0"],["/js/vendors~main.bd2896213472d4a6de84.js","c27522682d5eb1c06114739e53788f9a"],["/js/vendors~open_position~7c650be5.bd2896213472d4a6de84.js","8e9198fe77225b0099b387d6ef44f44f"],["/js/vendors~smart_chart.bd2896213472d4a6de84.js","ecbbe26dc7c21498dd0e3cfa0d97f57d"],["/js/work-in-progress.bd2896213472d4a6de84.js","5592403a98d82866bcc670bd9b30227e"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







