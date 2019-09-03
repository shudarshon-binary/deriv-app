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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d64dbc6ed555f2b62dca17e4d9e91e44"],["/css/app.css","1eb4c00d14572d5bf412ae5e94fb5f97"],["/css/default~open_position~1833eefb.css","8da0918fdacbca5459a66113585fe0e3"],["/css/digits.css","58caa3b1383e3642a2d10c36efde09ab"],["/css/modals.css","22136537dd8ce0b2ba942ed1dff5b222"],["/css/notification-messages.css","374f5607221a5522cd56716d5c85ddd2"],["/css/reports.css","7ce22ea1911714a7dd288be4939ba7f4"],["/css/screen-small.css","b4e5d5fe4a1ca0758f34ac4250558435"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","dd571c3fcc352708c2c241e156449c86"],["/js/0.19e56578ae2beb488476.js","8843761be5ecd561eef4c6fd7c4f17a7"],["/js/1.19e56578ae2beb488476.js","3e345932471041ef8b2932505aad3455"],["/js/10.19e56578ae2beb488476.js","f0d07d924ba004892edac966acbd7204"],["/js/11.19e56578ae2beb488476.js","a4fce2cf4aa4a8d5eda2f966b9b7d79d"],["/js/12.19e56578ae2beb488476.js","b8358de927e6b905c1ad54eee481f068"],["/js/13.19e56578ae2beb488476.js","6abb01c22a79005fdae38b6443eda952"],["/js/14.19e56578ae2beb488476.js","0284d33cb94f20d63e8a09973bc52d47"],["/js/15.19e56578ae2beb488476.js","cb700faac6b972c8a22c447a9f7f6e82"],["/js/16.19e56578ae2beb488476.js","298f07f6d8ac1f6d5837cf5ec33c64d4"],["/js/17.19e56578ae2beb488476.js","8d3960d8e8bb914883cd113a533a4ea6"],["/js/18.19e56578ae2beb488476.js","190c6e546ddc5f4ef6cad84c0f90b496"],["/js/19.19e56578ae2beb488476.js","c0e7dbbaeb8cd3a333a053c49b3d02fe"],["/js/2.19e56578ae2beb488476.js","67ead0443a1991ab44ea66bc0b244caf"],["/js/20.19e56578ae2beb488476.js","fccd7f78723e1dc0595c5620f24418ab"],["/js/21.19e56578ae2beb488476.js","52cef0ebdc21a8859192f1d2d29f6cb9"],["/js/22.19e56578ae2beb488476.js","ed4a5707993d419a12fe43dcbe8c6096"],["/js/23.19e56578ae2beb488476.js","2c5db4ba23101681e1ac3b3f5f5d8b73"],["/js/24.19e56578ae2beb488476.js","0cbe2ff89a2eca21306be5ec38bf3026"],["/js/25.19e56578ae2beb488476.js","f85197cd1700544a1f18db65249e22e1"],["/js/26.19e56578ae2beb488476.js","07259ec57282cc92071c854146f8f062"],["/js/27.19e56578ae2beb488476.js","31a6940843f64ef71f8bf924db871376"],["/js/28.19e56578ae2beb488476.js","55b925c83ca85ed8319307a3cb923eb8"],["/js/29.19e56578ae2beb488476.js","6a29b662616a8e985ae0e23fbab0377f"],["/js/3.19e56578ae2beb488476.js","49103da90837ca199d37296fa58c8ffd"],["/js/30.19e56578ae2beb488476.js","8ac72f57d05fe6811786fa312c3f543b"],["/js/31.19e56578ae2beb488476.js","c35f9413356b4fa9a34d4599847a9d15"],["/js/32.19e56578ae2beb488476.js","2394cc417062306c7d01b3fe74a3d805"],["/js/33.19e56578ae2beb488476.js","5ce2173844425ecf2650f256adc1c588"],["/js/34.19e56578ae2beb488476.js","5d19576a7f614bdbd16c04387ad7ce14"],["/js/35.19e56578ae2beb488476.js","06f097f930658e3d2fcbe095e62bb50e"],["/js/36.19e56578ae2beb488476.js","444542883da8868483b2de4bf5c54aed"],["/js/37.19e56578ae2beb488476.js","ff22e15cc556699bfaa319367e0b3007"],["/js/38.19e56578ae2beb488476.js","a8f9bc5d5dd83199aadfc3118d190608"],["/js/39.19e56578ae2beb488476.js","7aa83210d3c0a131e0c69cbb6c631d82"],["/js/4.19e56578ae2beb488476.js","d972f8da33bc2308a4b116a6abba6a06"],["/js/40.19e56578ae2beb488476.js","c5af78ca0e9fd373a33b52dca5153746"],["/js/404.19e56578ae2beb488476.js","920fe7ad9568936ccc38d1f393d8d418"],["/js/41.19e56578ae2beb488476.js","998b6d280d0b4eaf6cc71d943a7c7312"],["/js/42.19e56578ae2beb488476.js","76e626d795cfcc211f71a17e2d9b4f85"],["/js/43.19e56578ae2beb488476.js","2af4da76f67a9de9c78e33284367dff8"],["/js/44.19e56578ae2beb488476.js","18554c7ab8b6c692b13a1c15a5f58361"],["/js/45.19e56578ae2beb488476.js","1573fcd2c0b7b9de8b7c86acf9726354"],["/js/46.19e56578ae2beb488476.js","b5f04e521e676517f7326264f956365c"],["/js/47.19e56578ae2beb488476.js","cc06bf33f3387421407fd1bcea73952e"],["/js/48.19e56578ae2beb488476.js","8d04894f4555a7828076fffb3314832d"],["/js/49.19e56578ae2beb488476.js","1350cee5a2ec93f6fea8fc08e70d8da8"],["/js/5.19e56578ae2beb488476.js","304b07432fd57cab67eefb9ea2c1d916"],["/js/50.19e56578ae2beb488476.js","5cc462b0ebd304b4ae964fdac88cd934"],["/js/51.19e56578ae2beb488476.js","dca543df1b678d5fb85482c84ff5ca76"],["/js/52.19e56578ae2beb488476.js","753534e3cc0b990aaf1fb0664c4803f8"],["/js/53.19e56578ae2beb488476.js","b498ea90f0b3ae4dcfd3a89c0a19f72e"],["/js/54.19e56578ae2beb488476.js","5c3dc51617759b052b1911c19b970623"],["/js/55.19e56578ae2beb488476.js","3fe07f274bbff69f83564e174a64dab2"],["/js/56.19e56578ae2beb488476.js","19d5761f8f08cd2a8fe65005bebbcc3d"],["/js/57.19e56578ae2beb488476.js","40e31cc762984382359da776ffda7dad"],["/js/58.19e56578ae2beb488476.js","1ed3a8f02c2add486312b973494f4261"],["/js/59.19e56578ae2beb488476.js","c277319aac2a00a09b48fb6afec28da2"],["/js/6.19e56578ae2beb488476.js","13416a21c21d2d4c93ab910c808e2905"],["/js/60.19e56578ae2beb488476.js","7f54525ead1f9ff81617fd2b102ae0f4"],["/js/61.19e56578ae2beb488476.js","d315a389c14b60d67bb9b6463d31afbe"],["/js/62.19e56578ae2beb488476.js","d4dd6515a1bcfea29153e50de79c1fe8"],["/js/63.19e56578ae2beb488476.js","03ecc69c66ce9a353115bab10904cb87"],["/js/64.19e56578ae2beb488476.js","3510a6182b6ffbd114ceb2c4b9b7e324"],["/js/65.19e56578ae2beb488476.js","59f3998eb2baa878e877407c5001e0a6"],["/js/66.19e56578ae2beb488476.js","659b66ba400a7ef27f334c93553b3c8b"],["/js/67.19e56578ae2beb488476.js","00ccf024030fdf161d10b86aaa247458"],["/js/68.19e56578ae2beb488476.js","ca142323105c31fae2abc7d2f6fc7577"],["/js/69.19e56578ae2beb488476.js","29f5416de6a72541567371d940961889"],["/js/7.19e56578ae2beb488476.js","b2363b0931639003662e6f9ec54d811e"],["/js/70.19e56578ae2beb488476.js","aa31b168b0bb40a8d77499ed8574cdb3"],["/js/71.19e56578ae2beb488476.js","51852e05b28cbda7702752ccdfa3c9b1"],["/js/8.19e56578ae2beb488476.js","90af32d27a4f13b4e4b8049af15a7f3c"],["/js/9.19e56578ae2beb488476.js","79513a1420f86780ef193e2145e40579"],["/js/AccountSignupModal.19e56578ae2beb488476.js","d48a6f25a897a38ae84387c8ed736528"],["/js/account-info.19e56578ae2beb488476.js","a5783c5513fd0dbec69e79a903272be0"],["/js/contract.19e56578ae2beb488476.js","81e9348b86737cb28500c92df9142a91"],["/js/default~open_position~1833eefb.19e56578ae2beb488476.js","16121f236780e5a5c93898c6ed33929d"],["/js/digits.19e56578ae2beb488476.js","25e7cadcd548d8f03d40ff276bf453c2"],["/js/info-box.19e56578ae2beb488476.js","7ade784cb865a5ac25055324fdee9ed4"],["/js/main.19e56578ae2beb488476.js","6223415be7072bdb6ad89e405b197aed"],["/js/modals.19e56578ae2beb488476.js","35204d1f15a6f061b81a77f4e7b41fad"],["/js/notification-messages.19e56578ae2beb488476.js","06b16e5b8c1583cd04d9f79df37bdc06"],["/js/open_positions.19e56578ae2beb488476.js","74a3962a328833f3a64f0881d510ce95"],["/js/profit_table.19e56578ae2beb488476.js","ca47e56f2f34e97016835492cf00a11f"],["/js/push-notification.19e56578ae2beb488476.js","d4f15df52cdd8e5dca22c93b635cefda"],["/js/reports.19e56578ae2beb488476.js","b1712d731d0decbf737d6c5cb3bbd40b"],["/js/screen-small.19e56578ae2beb488476.js","0c1202f0dd4a7d93597070f9acd3f149"],["/js/settings-chart.19e56578ae2beb488476.js","51ad1107396a2dd70604cb8c6fa41c15"],["/js/settings-language.19e56578ae2beb488476.js","8c9f857aeb1ffdab07ac0f346305169c"],["/js/settings-theme.19e56578ae2beb488476.js","61c41a287296d380e79dd804063cd6da"],["/js/smart_chart.19e56578ae2beb488476.js","7baec6a05954f3bc7a15c6c657c58eb6"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.19e56578ae2beb488476.js","4b352ddf5fd0e850f18ec9eaf2ac6c19"],["/js/toggle-menu-drawer.19e56578ae2beb488476.js","b4078ff26921b7e7469ed77d66e3e7f5"],["/js/two-month-picker.19e56578ae2beb488476.js","35e96144e0387d96559e282c33aa6f01"],["/js/vendors~AccountSignupModal.19e56578ae2beb488476.js","531253fd56ff4d5ade09263f711fbfbe"],["/js/vendors~digits~info-b~897959f6.19e56578ae2beb488476.js","96eda711a49ffd76f9d73f55aae54437"],["/js/vendors~main.19e56578ae2beb488476.js","3f60e1c0c38f0215f821c0720b90beed"],["/js/vendors~open_position~7c650be5.19e56578ae2beb488476.js","d5b989c296c5606e3ce95337f1197b3c"],["/js/vendors~smart_chart.19e56578ae2beb488476.js","169127fc07052d95fe4703d44026c34d"],["/js/work-in-progress.19e56578ae2beb488476.js","e29410189f2b515c79101562a3597a2b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







