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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","b7839428ee783f395fe5ca1413d75ef7"],["/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","b332386fe26559a9af752f50d46bebd1"],["/js/0.4dd5ade30c65ffb7b3fc.js","fc83059dafb01bd70aec0327d9529348"],["/js/1.4dd5ade30c65ffb7b3fc.js","e5d7d8298b96bb9f42e86408547c26fd"],["/js/10.4dd5ade30c65ffb7b3fc.js","02a0300315fe9b56ed48a25a1954e656"],["/js/11.4dd5ade30c65ffb7b3fc.js","60d88959990f9627b412db5856ef81f8"],["/js/12.4dd5ade30c65ffb7b3fc.js","51626ea7107b0493f3510d344aed6c94"],["/js/13.4dd5ade30c65ffb7b3fc.js","6fd71e6e98d535f80bbf078078178cb4"],["/js/14.4dd5ade30c65ffb7b3fc.js","9691a8043cdfa9300092e02ff76a9a50"],["/js/15.4dd5ade30c65ffb7b3fc.js","3cbbd182c4674fe7e54bd9cb7cf0a850"],["/js/16.4dd5ade30c65ffb7b3fc.js","938c9d27024dda92baeabbbfe926f972"],["/js/17.4dd5ade30c65ffb7b3fc.js","d96172d554997dea9b9916274955c777"],["/js/18.4dd5ade30c65ffb7b3fc.js","916dacb97239c172bc8b218916a36ee4"],["/js/19.4dd5ade30c65ffb7b3fc.js","157e7bd410333866e48e10b469e9d6ce"],["/js/2.4dd5ade30c65ffb7b3fc.js","272d1ccb53d02e356b48eff3b1e5e7e3"],["/js/20.4dd5ade30c65ffb7b3fc.js","8a2d9d356ab8f46cb71b7384a556a9ce"],["/js/21.4dd5ade30c65ffb7b3fc.js","0f931397cfeedd815e23568df72669b9"],["/js/22.4dd5ade30c65ffb7b3fc.js","dedd894320888c67c41fbbe142273c0c"],["/js/23.4dd5ade30c65ffb7b3fc.js","6a6da582a547bcff4a7d39c8e2b50f84"],["/js/24.4dd5ade30c65ffb7b3fc.js","d3a107a4e7f7d923a51d55cec36dad27"],["/js/25.4dd5ade30c65ffb7b3fc.js","dc4abd4ea4fb6da0e617c7a0665ad30c"],["/js/26.4dd5ade30c65ffb7b3fc.js","26a2c20dee1edbe4d027d6931c44ebd3"],["/js/27.4dd5ade30c65ffb7b3fc.js","0996a746c40629bae1e404081305e329"],["/js/28.4dd5ade30c65ffb7b3fc.js","3bd4c5557fd25a83fc89083ab7c2534e"],["/js/29.4dd5ade30c65ffb7b3fc.js","72e148ccf5d808380d58118fc7ffa1af"],["/js/3.4dd5ade30c65ffb7b3fc.js","21c9d657995abfbd83f66a267c408226"],["/js/30.4dd5ade30c65ffb7b3fc.js","3b5292bbb36cf058e4be103bf06c8905"],["/js/31.4dd5ade30c65ffb7b3fc.js","81111255653dd59433c4a08115d79431"],["/js/32.4dd5ade30c65ffb7b3fc.js","6177e3d700f7f0b756b0ea8b489574d7"],["/js/33.4dd5ade30c65ffb7b3fc.js","96a413d43d7a569077cf13a7565849a2"],["/js/34.4dd5ade30c65ffb7b3fc.js","1282cc18c36907c399d611592cfdcb45"],["/js/35.4dd5ade30c65ffb7b3fc.js","bcb7f9e9da2720e047644feffb8e73c8"],["/js/36.4dd5ade30c65ffb7b3fc.js","2ef74780be012d5698c9ce692c2d78dd"],["/js/37.4dd5ade30c65ffb7b3fc.js","b0b2164f29bbedc4233e36b54a95975e"],["/js/38.4dd5ade30c65ffb7b3fc.js","c763d1e10ff523a13c491fb9749b5dd7"],["/js/39.4dd5ade30c65ffb7b3fc.js","3bc52d416b5ad91d830ec8bc5ab10cc4"],["/js/4.4dd5ade30c65ffb7b3fc.js","9eab2597be9262a08abe88269f369f8e"],["/js/40.4dd5ade30c65ffb7b3fc.js","179c038bfc686665e67384b4f363e763"],["/js/404.4dd5ade30c65ffb7b3fc.js","80e7f9b292430f2bd63e0ec71efa1189"],["/js/41.4dd5ade30c65ffb7b3fc.js","cad3e2875603a9e35bab5609bfa884e7"],["/js/42.4dd5ade30c65ffb7b3fc.js","2e84969a82899a17b9321761b1cd5bfb"],["/js/43.4dd5ade30c65ffb7b3fc.js","cfc04068b72dd8f8e46ec4eadeae3401"],["/js/44.4dd5ade30c65ffb7b3fc.js","f13e3400fe2e6927a6d6ff57699cdcd9"],["/js/45.4dd5ade30c65ffb7b3fc.js","d7b91d5651b8dfa20ea6c349236f8f3c"],["/js/46.4dd5ade30c65ffb7b3fc.js","da55f8940e1e4bbb5a9b75a479b6351d"],["/js/47.4dd5ade30c65ffb7b3fc.js","eef7a966f3b2d68e612cff2cb664fa3f"],["/js/48.4dd5ade30c65ffb7b3fc.js","fe7e898196c1fc4553809ddd610f1aa5"],["/js/49.4dd5ade30c65ffb7b3fc.js","8e1f8adacb2baebd2862a1da62d55441"],["/js/5.4dd5ade30c65ffb7b3fc.js","c85f8bbc58e3ee1beb635b6e5318fcb7"],["/js/50.4dd5ade30c65ffb7b3fc.js","bcd3b550943ac6120785b46ea5bc81e7"],["/js/51.4dd5ade30c65ffb7b3fc.js","f692dcf5e8ab07bfd05d4a6f4e3738af"],["/js/52.4dd5ade30c65ffb7b3fc.js","0c60f7fdb2a48b2c8a0687466cc48de1"],["/js/53.4dd5ade30c65ffb7b3fc.js","8d056f6177818e49153ea2a3ae264498"],["/js/54.4dd5ade30c65ffb7b3fc.js","ffd4c6d71bec4e3ff4834ba36c4a29e8"],["/js/55.4dd5ade30c65ffb7b3fc.js","c813166a0f4b254a44e23ec850a9a2c3"],["/js/56.4dd5ade30c65ffb7b3fc.js","2d23052e3830b4ce593c66752c14ab4f"],["/js/57.4dd5ade30c65ffb7b3fc.js","ff3de30e2703ba41c367e9d424957e3d"],["/js/58.4dd5ade30c65ffb7b3fc.js","ea4e2d2ee914e823b433d3760ca1f5b7"],["/js/59.4dd5ade30c65ffb7b3fc.js","6539a5a6902b7b202b1a42168faa287b"],["/js/6.4dd5ade30c65ffb7b3fc.js","d45c9ff455a2f767945305cb0c1cfc1a"],["/js/60.4dd5ade30c65ffb7b3fc.js","15bdfb8d9e9ee14a045f707d39a29f61"],["/js/61.4dd5ade30c65ffb7b3fc.js","20fb6b960f3b33eadb647a562c682c6e"],["/js/62.4dd5ade30c65ffb7b3fc.js","ef8739962cb2e6cbfbac6945f5de3d7b"],["/js/63.4dd5ade30c65ffb7b3fc.js","eebbf7996b2dbc5866a7bfc82c48799d"],["/js/64.4dd5ade30c65ffb7b3fc.js","9d648ce1feda1bab91862084a9c3e549"],["/js/65.4dd5ade30c65ffb7b3fc.js","e5b707af9fb1dd177d0e56afd8da6558"],["/js/66.4dd5ade30c65ffb7b3fc.js","cc7bc07b463824a3d39ddff46afc558f"],["/js/67.4dd5ade30c65ffb7b3fc.js","e942cb354a770265574266a219047041"],["/js/68.4dd5ade30c65ffb7b3fc.js","24d6f3dc9fc18171ff90fd388eeaa4fa"],["/js/69.4dd5ade30c65ffb7b3fc.js","ca6b4892362427e910d34976dc2c7ebf"],["/js/7.4dd5ade30c65ffb7b3fc.js","8089790bfb5d18a60ff1f73db58531ee"],["/js/70.4dd5ade30c65ffb7b3fc.js","5fae62f5b95975567f78e710d9526187"],["/js/8.4dd5ade30c65ffb7b3fc.js","ae126788ecdef2fd8bbdecd801fcf2d6"],["/js/9.4dd5ade30c65ffb7b3fc.js","9d69641732c343aa693a43dcf406dcaa"],["/js/account-info.4dd5ade30c65ffb7b3fc.js","6441b72aec8feb5341df6c1b8f42e41f"],["/js/contract.4dd5ade30c65ffb7b3fc.js","6fdfc9bed425d40d24137b4da66113fd"],["/js/default~open_position~1833eefb.4dd5ade30c65ffb7b3fc.js","fb5393df47acf7ba10235cc5b358c31a"],["/js/digits.4dd5ade30c65ffb7b3fc.js","e073e46b473059910397858fc885136b"],["/js/info-box.4dd5ade30c65ffb7b3fc.js","2b3b7b23ab7ffb04eba299b68f1a2482"],["/js/main.4dd5ade30c65ffb7b3fc.js","2b433f4e6da398b0dcba06e362dedfbb"],["/js/modals.4dd5ade30c65ffb7b3fc.js","1088b704175fb7b8c60583d30f7dca88"],["/js/notification-messages.4dd5ade30c65ffb7b3fc.js","21af1d62105697def82ee260487df510"],["/js/open_positions.4dd5ade30c65ffb7b3fc.js","5252c6a890301dfd97a965b62d5127bf"],["/js/profit_table.4dd5ade30c65ffb7b3fc.js","a94a5a5c285ac0d19e615c0a86801e9e"],["/js/push-notification.4dd5ade30c65ffb7b3fc.js","e72edb4bf4e83f38a76d632ce88ddf41"],["/js/reports.4dd5ade30c65ffb7b3fc.js","13be74192537164003faca150032e02f"],["/js/screen-small.4dd5ade30c65ffb7b3fc.js","a01ff467aefdeafdcfdcc9f561357983"],["/js/settings-chart.4dd5ade30c65ffb7b3fc.js","9188a0107b08047bae1aa14153875bad"],["/js/settings-language.4dd5ade30c65ffb7b3fc.js","82cb4ae69cccf9e1e2722be6aa614a6c"],["/js/settings-theme.4dd5ade30c65ffb7b3fc.js","c76b8d448e598ed04e3b583ba4f281f1"],["/js/smart_chart.4dd5ade30c65ffb7b3fc.js","a0699158389eb0c94c3da93b09fe5ca6"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.4dd5ade30c65ffb7b3fc.js","9466d0663b281211caa320604806a9f0"],["/js/toggle-menu-drawer.4dd5ade30c65ffb7b3fc.js","1c1ed6d3987276ae9ec1b8ac6f38c594"],["/js/two-month-picker.4dd5ade30c65ffb7b3fc.js","a9940c5b772f1d2b8f5ce48f0b75688b"],["/js/vendors~main.4dd5ade30c65ffb7b3fc.js","37882d87417de537d7f7f8bc26178481"],["/js/vendors~open_position~7c650be5.4dd5ade30c65ffb7b3fc.js","be2914839a74abe0eadc251e708971a9"],["/js/vendors~smart_chart.4dd5ade30c65ffb7b3fc.js","9858b0c8797521ca905e3f26b95d6877"],["/js/work-in-progress.4dd5ade30c65ffb7b3fc.js","bfea66293a52a8b213154cc758daeb2b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







