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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","99ba5d77e040d470ec4be4dd0bcec842"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","c367662ce5f8dac40a43b790d9f4efcd"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","55e2f4c08eddbfef5bed16a6f1528c8e"],["/js/0.986b2fc4b940ea9a4cfd.js","a1922a97b0231c238e5d0c240c2fd301"],["/js/1.986b2fc4b940ea9a4cfd.js","26ccbcd6c238dec60c8633646cfedc55"],["/js/10.986b2fc4b940ea9a4cfd.js","3609a0c0661983d8477477abd4e69867"],["/js/11.986b2fc4b940ea9a4cfd.js","b90dac4ceb7c4b3f1ea73c52eb4f84e2"],["/js/12.986b2fc4b940ea9a4cfd.js","fbf65fb7801937e40949c732216c3478"],["/js/13.986b2fc4b940ea9a4cfd.js","c7c8e2245808c511d0a6c1edf9d5d7db"],["/js/14.986b2fc4b940ea9a4cfd.js","68b94dc3527748b93bf39691a0fc47eb"],["/js/15.986b2fc4b940ea9a4cfd.js","b5ce70e36635a2ff25bfda5ea68acd4f"],["/js/16.986b2fc4b940ea9a4cfd.js","ad4b3bee78a90698aa89ae4995e4f468"],["/js/17.986b2fc4b940ea9a4cfd.js","637fea41ace91d2d879922896b9f15f7"],["/js/18.986b2fc4b940ea9a4cfd.js","8ccaf3fa2be3f71c49889d47334d7b2c"],["/js/19.986b2fc4b940ea9a4cfd.js","46d450f32c4c4a303c629eafd7eb684e"],["/js/2.986b2fc4b940ea9a4cfd.js","510811f6b92330db688a42c2dd001477"],["/js/20.986b2fc4b940ea9a4cfd.js","2ec93a6134212796cfc0b4e03916cbcd"],["/js/21.986b2fc4b940ea9a4cfd.js","d85c6fe41d26185966b6c5026607498d"],["/js/22.986b2fc4b940ea9a4cfd.js","1c95aef0958b00ae76fba15c71d9d379"],["/js/23.986b2fc4b940ea9a4cfd.js","d9f0caa64a04178bda2af004f35af97e"],["/js/24.986b2fc4b940ea9a4cfd.js","cdad6dd65dedba9a5d4ec9fc1f616457"],["/js/25.986b2fc4b940ea9a4cfd.js","d9c53eb5093d4e511a4cd3db778a2eec"],["/js/26.986b2fc4b940ea9a4cfd.js","63f4e2cb2cf6feb4d88f7a0d6215343f"],["/js/27.986b2fc4b940ea9a4cfd.js","5d0742f39407a600de1b03e70d9897ce"],["/js/28.986b2fc4b940ea9a4cfd.js","d936e629189b1ef9542e9d8b3da47da0"],["/js/29.986b2fc4b940ea9a4cfd.js","18bc527a1daca2fc187846d3c49356ac"],["/js/3.986b2fc4b940ea9a4cfd.js","379ef954a150e66358dc91a37782b604"],["/js/30.986b2fc4b940ea9a4cfd.js","d312296a7a030963900b157f8daa837a"],["/js/31.986b2fc4b940ea9a4cfd.js","1366aff246a3276f6a6929658f435e4b"],["/js/32.986b2fc4b940ea9a4cfd.js","4774a60aa87166b64d0f9d4f5e54de1c"],["/js/33.986b2fc4b940ea9a4cfd.js","0a8dbe7df18e0dea2bf1e9a36bdd96aa"],["/js/34.986b2fc4b940ea9a4cfd.js","fdb7763bd185a74f04c70e91c4217f21"],["/js/35.986b2fc4b940ea9a4cfd.js","460655d9e682d3012117bdee7cbbc19d"],["/js/36.986b2fc4b940ea9a4cfd.js","b5b51882093dfdafebad793ae8bc0512"],["/js/37.986b2fc4b940ea9a4cfd.js","088359e72289738fb7ecf2853a0ca8cf"],["/js/38.986b2fc4b940ea9a4cfd.js","a21f1419e3925f7132677e2e24ddc18c"],["/js/39.986b2fc4b940ea9a4cfd.js","30467df29084dce82ef90d7c4a1da9ca"],["/js/4.986b2fc4b940ea9a4cfd.js","a52a141ba13640204b5cf1d344f40aed"],["/js/40.986b2fc4b940ea9a4cfd.js","1f434020edec254c7ef1df0172d78668"],["/js/404.986b2fc4b940ea9a4cfd.js","5e6955562c3ab8b0b88a60a29ca05573"],["/js/41.986b2fc4b940ea9a4cfd.js","bf0aff61e2ab36d306996f44bea1a4e2"],["/js/42.986b2fc4b940ea9a4cfd.js","db9b53e09483df8727e514c9431ba0f0"],["/js/43.986b2fc4b940ea9a4cfd.js","12815821d9cd71af167eecc9e8490c00"],["/js/44.986b2fc4b940ea9a4cfd.js","2e5484db94129d4a50bfc0b4e9c0ef65"],["/js/45.986b2fc4b940ea9a4cfd.js","41df3df658b5a3e29c08f42bf1b823d5"],["/js/46.986b2fc4b940ea9a4cfd.js","f9bdc347d21bc69973239a2225576657"],["/js/47.986b2fc4b940ea9a4cfd.js","13adaf7895e4529daed31343ca9a902f"],["/js/48.986b2fc4b940ea9a4cfd.js","ec5b0c8824278c1111ef89e7a779d6ea"],["/js/49.986b2fc4b940ea9a4cfd.js","3b4ad20697c4116aeb451c3582e63227"],["/js/5.986b2fc4b940ea9a4cfd.js","caa33b89d6a691e189a914396dea258f"],["/js/50.986b2fc4b940ea9a4cfd.js","8d219c5b6e6baf0c247819f8ecc0085c"],["/js/51.986b2fc4b940ea9a4cfd.js","64cf6f796c138bdcdfc1a10f9cb21df2"],["/js/52.986b2fc4b940ea9a4cfd.js","78eee794a0c69fd2d28990c2c3b3b107"],["/js/53.986b2fc4b940ea9a4cfd.js","42f69a99fc5e4a976a67f30a41b7f1bf"],["/js/54.986b2fc4b940ea9a4cfd.js","c632767b38df28ffe902837e5800601d"],["/js/55.986b2fc4b940ea9a4cfd.js","3e0a3659927a53e3bd083e937de59d58"],["/js/56.986b2fc4b940ea9a4cfd.js","e91c71716a9ac139c13da1ae20bf2f25"],["/js/57.986b2fc4b940ea9a4cfd.js","7765343424f171a6bebc7d1dd156ef42"],["/js/58.986b2fc4b940ea9a4cfd.js","6c46ef5ba11da73084535436998bf734"],["/js/59.986b2fc4b940ea9a4cfd.js","9d75288c1308d74bd91489755e904cc7"],["/js/6.986b2fc4b940ea9a4cfd.js","0f128d84bb655d7fbb098ca68b1a2a72"],["/js/60.986b2fc4b940ea9a4cfd.js","b8633accf8b8581cbd8d561747d78b87"],["/js/61.986b2fc4b940ea9a4cfd.js","3c808957e282e153c01722f823c86035"],["/js/62.986b2fc4b940ea9a4cfd.js","4ff3496f3dd83734840e5921b146e059"],["/js/63.986b2fc4b940ea9a4cfd.js","fe5287e4b4761ffb1fc318fed9e4096b"],["/js/64.986b2fc4b940ea9a4cfd.js","e12029edc2638285f691619f7c439f1f"],["/js/65.986b2fc4b940ea9a4cfd.js","3890d327b3cab75c0f015f3fd35550cc"],["/js/66.986b2fc4b940ea9a4cfd.js","b26f9ce1ab4d42a1a97e403199cb4bea"],["/js/67.986b2fc4b940ea9a4cfd.js","8443fe2504ac99ce6e5f35ecb2428cb6"],["/js/68.986b2fc4b940ea9a4cfd.js","558f6e53b3cb19d2ad632ce98b68d5e7"],["/js/69.986b2fc4b940ea9a4cfd.js","65061d1a72f8bd42c21aabb3792cc6e4"],["/js/7.986b2fc4b940ea9a4cfd.js","dd678a6bae390dcd9109f2da2e467299"],["/js/70.986b2fc4b940ea9a4cfd.js","ce0e96e068a756b617d823c76d0a1de8"],["/js/71.986b2fc4b940ea9a4cfd.js","80d36f10c450337eead2e000910b5923"],["/js/8.986b2fc4b940ea9a4cfd.js","890a9c61f853b67348a03795276c3ede"],["/js/9.986b2fc4b940ea9a4cfd.js","14ead19530c84c6e4f58434064314734"],["/js/DenialOfServiceModal.986b2fc4b940ea9a4cfd.js","24bb4ce788eda38ece58f3ca06b5d68c"],["/js/MarketUnavailableModal.986b2fc4b940ea9a4cfd.js","93166cb62aa3a880c8d015f7fd6062ab"],["/js/ServicesErrorModal.986b2fc4b940ea9a4cfd.js","f35d64406cd1b0268a693a3ce1697828"],["/js/UnsupportedContractModal.986b2fc4b940ea9a4cfd.js","9670eb23f5af6b1be8fcb295e9d50622"],["/js/account-info.986b2fc4b940ea9a4cfd.js","7e3bff089ae3e083316386a28b639672"],["/js/contract.986b2fc4b940ea9a4cfd.js","8f992c5a696bd547f13037bcf17ec193"],["/js/default~open_position~1833eefb.986b2fc4b940ea9a4cfd.js","05473d0de347bf32e12496197edfd7fd"],["/js/digits.986b2fc4b940ea9a4cfd.js","f3d0c4e6f8606694958c621207327e88"],["/js/info-box.986b2fc4b940ea9a4cfd.js","39164507868b9cf031c5342151deee2a"],["/js/main.986b2fc4b940ea9a4cfd.js","866c906c0b60295ce684d196f822fad1"],["/js/notification-messages.986b2fc4b940ea9a4cfd.js","e01d8e1f890714896da10e56f4613675"],["/js/open_positions.986b2fc4b940ea9a4cfd.js","9fe248c78becc852629b772cf800401e"],["/js/profit_table.986b2fc4b940ea9a4cfd.js","ecb11726fb174f6a8e5f574ee0408649"],["/js/push-notification.986b2fc4b940ea9a4cfd.js","c7866e9c9a83888727178561c2e9e1f2"],["/js/reports.986b2fc4b940ea9a4cfd.js","a0ce04e039d2cf21f52b5e3fc310fa50"],["/js/screen-small.986b2fc4b940ea9a4cfd.js","b95e6bd6cbb4e74ee18e3020b14a97ae"],["/js/settings-chart.986b2fc4b940ea9a4cfd.js","ead9f1ffafa383ef64cb6d98055ffd31"],["/js/settings-language.986b2fc4b940ea9a4cfd.js","47ffa35c079173ff0940fd95daabdc04"],["/js/settings-theme.986b2fc4b940ea9a4cfd.js","295241364ae4a07a3efe4fc1d082558c"],["/js/smart_chart.986b2fc4b940ea9a4cfd.js","3708ae64c26f79163a29e74bbefc8ebc"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.986b2fc4b940ea9a4cfd.js","109864a26619ca719f6a188ecf97e611"],["/js/toggle-cashier.986b2fc4b940ea9a4cfd.js","21dc008f0e48d9fece077157f9df4d0d"],["/js/toggle-menu-drawer.986b2fc4b940ea9a4cfd.js","31113c2e3bb7d30f49305339ddd951fd"],["/js/two-month-picker.986b2fc4b940ea9a4cfd.js","2a261ba545010bbda1d0b1f88f0d496e"],["/js/vendors~main.986b2fc4b940ea9a4cfd.js","cc223a3e630ed47979fc63caf4c2cd35"],["/js/vendors~open_position~7c650be5.986b2fc4b940ea9a4cfd.js","03da4325fcfe442942552dabd420eac4"],["/js/vendors~smart_chart.986b2fc4b940ea9a4cfd.js","48e67c0765506864ad2ed5f8c3f0f244"],["/js/wallet-information.986b2fc4b940ea9a4cfd.js","570064b16af2f2f1af1e94738e56da99"],["/js/work-in-progress.986b2fc4b940ea9a4cfd.js","9692520707cd0c1a4704fd56e31bc36b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







