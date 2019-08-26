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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","c34882250b0d7870a955a76bdefcadbe"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","e6b0246539cf0262ab0809af8d3e369a"],["/js/0.ed9079439eb6fa835cbb.js","b619183f33025eafd64e202abc73311d"],["/js/1.ed9079439eb6fa835cbb.js","bbea1c6e734e68253f3a44770ef9d0c4"],["/js/10.ed9079439eb6fa835cbb.js","983a1b7bbd48523e34905690d273acac"],["/js/11.ed9079439eb6fa835cbb.js","252c045a9b7a704e81b8f27d9c95d7ec"],["/js/12.ed9079439eb6fa835cbb.js","74f2f0056e3579b9673e8b58ce65fcb0"],["/js/13.ed9079439eb6fa835cbb.js","b5baeb1fbb55a3889f129ef41a71e478"],["/js/14.ed9079439eb6fa835cbb.js","06096511cccac7d2a4f889fb92cc1bc1"],["/js/15.ed9079439eb6fa835cbb.js","46474556c8ac62e26427f6e92ce80baf"],["/js/16.ed9079439eb6fa835cbb.js","893ddb4fbd047d23b31cc9d9e18c703f"],["/js/17.ed9079439eb6fa835cbb.js","0dbce3cd222e6cb752e11f997c97f09b"],["/js/18.ed9079439eb6fa835cbb.js","d5fc7035658b045aced9ccd17b721e23"],["/js/19.ed9079439eb6fa835cbb.js","8931a40ab0b6b86702ab46c5e834591c"],["/js/2.ed9079439eb6fa835cbb.js","fbe9fe56c5f65a81d4c0b10877a3a4cb"],["/js/20.ed9079439eb6fa835cbb.js","f1a1cf04a00632b2c2a42fee3e49ca66"],["/js/21.ed9079439eb6fa835cbb.js","7ae0f69c0e74f357b26836ec3994a329"],["/js/22.ed9079439eb6fa835cbb.js","8966a029d8d30be0df9609e3c6f93d91"],["/js/23.ed9079439eb6fa835cbb.js","4c0181875b01cd186943aedf916c0389"],["/js/24.ed9079439eb6fa835cbb.js","fde825e722ad55aecd07e598c8e98a2b"],["/js/25.ed9079439eb6fa835cbb.js","318bd8cbc15127bc8df9ca731281e2c4"],["/js/26.ed9079439eb6fa835cbb.js","8313ef5a3f038679d18120899dc8188e"],["/js/27.ed9079439eb6fa835cbb.js","82ed03cbffc54824cba75c65017c158a"],["/js/28.ed9079439eb6fa835cbb.js","1a0807cd4febd64f81b75f148a6788c3"],["/js/29.ed9079439eb6fa835cbb.js","14f4be6b5172f5805c9a367fba7d4b5d"],["/js/3.ed9079439eb6fa835cbb.js","6fcfc52a1da9be26947e97fb8e6a71cd"],["/js/30.ed9079439eb6fa835cbb.js","c639d9060bb2088a6cc7d6941f4e1983"],["/js/31.ed9079439eb6fa835cbb.js","e52f571e0cbc60d8d598aab75e146aae"],["/js/32.ed9079439eb6fa835cbb.js","e11a0a8214c78d849168b78c46e36d9e"],["/js/33.ed9079439eb6fa835cbb.js","4a1588fa9aeffcfeec7524d1578739d7"],["/js/34.ed9079439eb6fa835cbb.js","f90735381e390578f1a0ed9fa542d585"],["/js/35.ed9079439eb6fa835cbb.js","02e010a494a5d420357347e24b35f6f9"],["/js/36.ed9079439eb6fa835cbb.js","9a4c62912389a0f94cf3783de0e52e66"],["/js/37.ed9079439eb6fa835cbb.js","cfb81e8f5283de225ff49b914a074714"],["/js/38.ed9079439eb6fa835cbb.js","240a6e617e96e8e43062d8f89a49f74f"],["/js/39.ed9079439eb6fa835cbb.js","3e94514e4e91201139ff3067383b639d"],["/js/4.ed9079439eb6fa835cbb.js","f7ba38688a99220476a2f968d2439739"],["/js/40.ed9079439eb6fa835cbb.js","2627bb62b6c8b01af20c2f49ec1ada7d"],["/js/404.ed9079439eb6fa835cbb.js","28b40540d60e15df5ef3c14ed100c1e1"],["/js/41.ed9079439eb6fa835cbb.js","991a032f72510b837a18fe5534f9c6cf"],["/js/42.ed9079439eb6fa835cbb.js","f27717207e36ac1e65191c89b74ace80"],["/js/43.ed9079439eb6fa835cbb.js","b4b7723fc618a02155cf5c3b869c5c08"],["/js/44.ed9079439eb6fa835cbb.js","73d31e3eaea654ded25d00f828ba8939"],["/js/45.ed9079439eb6fa835cbb.js","f89eaf06d9f3c0c9acf24e2d3112ea32"],["/js/46.ed9079439eb6fa835cbb.js","112338a7cbf49bd594d49357c7958b08"],["/js/47.ed9079439eb6fa835cbb.js","877823fd9587a90ce2d8c883c77c7073"],["/js/48.ed9079439eb6fa835cbb.js","dd26773c14110c48df3ebb948cf03908"],["/js/49.ed9079439eb6fa835cbb.js","2a3bc0fabe51bcd706feecb6644a707e"],["/js/5.ed9079439eb6fa835cbb.js","a558e346565e76e39235b1a58f56921f"],["/js/50.ed9079439eb6fa835cbb.js","178e6223d3d91f6adc3a2c9923072d5f"],["/js/51.ed9079439eb6fa835cbb.js","c140a5f065b64a29ca8757f967a8121f"],["/js/52.ed9079439eb6fa835cbb.js","2b039a7514c4e975b56396956439a2ad"],["/js/53.ed9079439eb6fa835cbb.js","534efee6e72374bf49c0d4e4add87e58"],["/js/54.ed9079439eb6fa835cbb.js","4147b969ccfa2503a56c88a71de72505"],["/js/55.ed9079439eb6fa835cbb.js","f8013808cdf24e7c5589e823fa58d145"],["/js/56.ed9079439eb6fa835cbb.js","0a4decb8e88c2fb9bd0d0c40a973685d"],["/js/57.ed9079439eb6fa835cbb.js","c0dbaa6f67eb339190b29e0ab387f322"],["/js/58.ed9079439eb6fa835cbb.js","b4a0fb83e9fc749f12fdca76a919c9cd"],["/js/59.ed9079439eb6fa835cbb.js","3b7a3a12a87b251064b12e465178175d"],["/js/6.ed9079439eb6fa835cbb.js","88809645849c42d4027ad722f4b79fef"],["/js/60.ed9079439eb6fa835cbb.js","6db168039351f90b55644d4f9984b602"],["/js/61.ed9079439eb6fa835cbb.js","ae365ecc6f38339f39d16178f62d9774"],["/js/62.ed9079439eb6fa835cbb.js","c1bc6b5cd60a0a67641092143e47da52"],["/js/63.ed9079439eb6fa835cbb.js","7eefecdadba31007806d99bbfcd56f8a"],["/js/64.ed9079439eb6fa835cbb.js","a0a87a1f0c171ee835ff4652b6acb170"],["/js/65.ed9079439eb6fa835cbb.js","3db5f113596e22dfda1f11ad1aa68f5f"],["/js/66.ed9079439eb6fa835cbb.js","bb1706fafdeae860ffe8a62fad5b0326"],["/js/67.ed9079439eb6fa835cbb.js","d608db907143914d74e2edc3ede23217"],["/js/68.ed9079439eb6fa835cbb.js","915dd215a34444e7a7230a8ddf0bf664"],["/js/69.ed9079439eb6fa835cbb.js","06ba9ce82b3d1f1d8ccd5a6371886951"],["/js/7.ed9079439eb6fa835cbb.js","d8985d8fc0bd0b9bbf4fc070c42d7d92"],["/js/70.ed9079439eb6fa835cbb.js","b47ef310987a6fa4d298f6842e6346f4"],["/js/71.ed9079439eb6fa835cbb.js","b16770aa1eaaccb66bb812b7e27d2498"],["/js/8.ed9079439eb6fa835cbb.js","853efb07c8a90a431ddafb717cee0306"],["/js/9.ed9079439eb6fa835cbb.js","99509a36bec5bb277bb235a59ed5d7fe"],["/js/AccountSignupModal.ed9079439eb6fa835cbb.js","97e7c11d16ee540795337c71cd952944"],["/js/account-info.ed9079439eb6fa835cbb.js","4e212e161250e65e1bad9a472aa20231"],["/js/contract.ed9079439eb6fa835cbb.js","aac2d70abbb1dfd3d590930461fd2acc"],["/js/default~open_position~1833eefb.ed9079439eb6fa835cbb.js","21d3f1e5dcbb29e907b952a7f5ca87e8"],["/js/digits.ed9079439eb6fa835cbb.js","6c8dc50542d5e30fe8dca0f7e801ed5f"],["/js/info-box.ed9079439eb6fa835cbb.js","a188eb1baf7cbf9c9677770f9ecdffe7"],["/js/main.ed9079439eb6fa835cbb.js","724f0a4837ec1c26a0787a07c1812c24"],["/js/modals.ed9079439eb6fa835cbb.js","23c595b2e5393f12a8686250dd4a43f6"],["/js/notification-messages.ed9079439eb6fa835cbb.js","791f390b14912994be6e2424531d06c1"],["/js/open_positions.ed9079439eb6fa835cbb.js","b79f2bd09e92a0447a22960046c0e655"],["/js/profit_table.ed9079439eb6fa835cbb.js","ff54ae39f12c5f11790e0482d353cb8c"],["/js/push-notification.ed9079439eb6fa835cbb.js","e7e98f89486998d2b56caa27707eb9f2"],["/js/reports.ed9079439eb6fa835cbb.js","981cc7884c806adc114599fd11f3f3ae"],["/js/screen-small.ed9079439eb6fa835cbb.js","dec00523e9793d80e6c7a0f1330a46b7"],["/js/settings-chart.ed9079439eb6fa835cbb.js","56e8c2d2e5596d06323693ec89d0a51b"],["/js/settings-language.ed9079439eb6fa835cbb.js","4d8826f34b4dc1c369a9be9b2bd78f02"],["/js/settings-theme.ed9079439eb6fa835cbb.js","61565e6638e0d4120f88d196f63c7ba7"],["/js/smart_chart.ed9079439eb6fa835cbb.js","9bf13943e8b878e426dff179e893ba57"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.ed9079439eb6fa835cbb.js","a1e22044ba707825973dbd09f66b7b57"],["/js/toggle-menu-drawer.ed9079439eb6fa835cbb.js","42b8be1b2a7e343f550fa82d062c9036"],["/js/two-month-picker.ed9079439eb6fa835cbb.js","f1b972b70511daecaa83d242d4e18543"],["/js/vendors~AccountSignupModal.ed9079439eb6fa835cbb.js","bf0e1518000695c1d12b5a35eed5d59a"],["/js/vendors~main.ed9079439eb6fa835cbb.js","9c48f54b292cdca21ced14e0c13663cf"],["/js/vendors~open_position~7c650be5.ed9079439eb6fa835cbb.js","32827d14274abb2f22c1bd50699549da"],["/js/vendors~smart_chart.ed9079439eb6fa835cbb.js","5f3694aae4ce4cd2a69d70eb179ae8f2"],["/js/work-in-progress.ed9079439eb6fa835cbb.js","335fdfe6da9c286dc9233aafb647fba3"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







