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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","b7839428ee783f395fe5ca1413d75ef7"],["/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","40e4c0d17b6f6e8b7b612d6a1fbac40f"],["/js/0.bc1bae03a7065d860954.js","e78043d432622c79097ee1fe430670d9"],["/js/1.bc1bae03a7065d860954.js","feaede185fb172c592c075138bb085a4"],["/js/10.bc1bae03a7065d860954.js","2dca2f8f5174f2b97355409ce5fc48c2"],["/js/11.bc1bae03a7065d860954.js","178d1147e90558b0a20f1ff4ce3c2ed7"],["/js/12.bc1bae03a7065d860954.js","a2a41b1ee35d4d684be4d4f008c49ac6"],["/js/13.bc1bae03a7065d860954.js","d78608d43518e3571b3d6dc6bddef689"],["/js/14.bc1bae03a7065d860954.js","e039d5a555c02d2f3412f55d0384d942"],["/js/15.bc1bae03a7065d860954.js","b28b25ae99960a1738ee12e0016e6158"],["/js/16.bc1bae03a7065d860954.js","a0c5a25b7a493432161ba4b8bf24c34a"],["/js/17.bc1bae03a7065d860954.js","b27d71a5031f63714b1589a67deb76a3"],["/js/18.bc1bae03a7065d860954.js","ca83e2eb6c1b6bf1b896110496a4b2bb"],["/js/19.bc1bae03a7065d860954.js","91cf5882d3f4d91b96b1a06b7301588b"],["/js/2.bc1bae03a7065d860954.js","73bd0b04d00e94638cfe2409e6c1ae2e"],["/js/20.bc1bae03a7065d860954.js","85e337b348f71caf8cdb2f45e118c871"],["/js/21.bc1bae03a7065d860954.js","a04931d7d8c3a0c54de15a51dd963903"],["/js/22.bc1bae03a7065d860954.js","b082cc62615ec24d904167c8e0071b22"],["/js/23.bc1bae03a7065d860954.js","16540173ad9bf3d1803148ca2e65dcc8"],["/js/24.bc1bae03a7065d860954.js","dd41ca08f3d656da3f9e30f19d43b029"],["/js/25.bc1bae03a7065d860954.js","183c5ae1b03e4ac5b383b9ba3c56450e"],["/js/26.bc1bae03a7065d860954.js","b18a9b0564b9663341b918c849976888"],["/js/27.bc1bae03a7065d860954.js","8abe23c1345aca1e9a4d2f8f02c534b8"],["/js/28.bc1bae03a7065d860954.js","1a7b0cfbdd56f50034ad5cbe35eb4922"],["/js/29.bc1bae03a7065d860954.js","5fe97621e336adc4e9283f6259398205"],["/js/3.bc1bae03a7065d860954.js","5286d15d7968994342291ab2f2f2eb60"],["/js/30.bc1bae03a7065d860954.js","21d13b1dbe278be4e57389f6881376b7"],["/js/31.bc1bae03a7065d860954.js","b35d8aba6809db1fa509efb7c2e5ca9f"],["/js/32.bc1bae03a7065d860954.js","02a1a8f076630a8246f453b95dc11ab2"],["/js/33.bc1bae03a7065d860954.js","a8bf48d3b3dd25046a6bc87ff9f9ab0a"],["/js/34.bc1bae03a7065d860954.js","6e3303aa34da4ce928a35610fd749d19"],["/js/35.bc1bae03a7065d860954.js","23e98a06a2d7658eebb61083dd6fc801"],["/js/36.bc1bae03a7065d860954.js","51e17cc216e87fb96ae1b2f36c9175ca"],["/js/37.bc1bae03a7065d860954.js","db194828f2b3a063b471f074d2e5fcab"],["/js/38.bc1bae03a7065d860954.js","0274a806bf0cfe912aeef560d5736ae7"],["/js/39.bc1bae03a7065d860954.js","cca2610f6dbdaecc54b999084b027854"],["/js/4.bc1bae03a7065d860954.js","5d8e4d0dd812b7b34b494eed9d49f6af"],["/js/40.bc1bae03a7065d860954.js","175f4f01cb84c7ed81c72d4e1c679261"],["/js/404.bc1bae03a7065d860954.js","d9a62ca38badc51cdf09b4ecf9b12b76"],["/js/41.bc1bae03a7065d860954.js","4f7791a1f93dc1e3a4b3fed17aed48d2"],["/js/42.bc1bae03a7065d860954.js","9c5ae4c29feeb5a80356627bb1efb057"],["/js/43.bc1bae03a7065d860954.js","44d6f9208f23909639c7c08aeb4a5ec3"],["/js/44.bc1bae03a7065d860954.js","9f051c66c07757eb4d6b3d0936958d2c"],["/js/45.bc1bae03a7065d860954.js","f70b12153c36fee388c3be97dd42dd81"],["/js/46.bc1bae03a7065d860954.js","9efc484a0aedcef752b5c87fad65672e"],["/js/47.bc1bae03a7065d860954.js","4832cce0e8e12a605ea3a5679cd83126"],["/js/48.bc1bae03a7065d860954.js","bcc94930cc6057fba9cd93667bb47a1d"],["/js/49.bc1bae03a7065d860954.js","6d7317e4e634d22cfa6f0820440f5e01"],["/js/5.bc1bae03a7065d860954.js","3f05e4409d2d295c305cb89f2fc65665"],["/js/50.bc1bae03a7065d860954.js","c64eb535bc4b46d41fbcbfeee62e5da8"],["/js/51.bc1bae03a7065d860954.js","eb0afc0d7ac9181c8488210d929e57ce"],["/js/52.bc1bae03a7065d860954.js","ea1d3eff9f55bcc5f3229a6e015af3de"],["/js/53.bc1bae03a7065d860954.js","de721d0ca5cb1bab46b3c49240473251"],["/js/54.bc1bae03a7065d860954.js","3c44d756b0aa6478892a6ec1dcfc521f"],["/js/55.bc1bae03a7065d860954.js","5d92fcc692d5d36bbb37d68fccef4fab"],["/js/56.bc1bae03a7065d860954.js","4d7c0855434e27a9bed1714bf63a25d3"],["/js/57.bc1bae03a7065d860954.js","d669e1edef6ed98ad09846052bf0cae5"],["/js/58.bc1bae03a7065d860954.js","02c2e6a2a99c1fd62079e43fd6c7dea4"],["/js/59.bc1bae03a7065d860954.js","789cde7177b096ab5c743dd7d99290af"],["/js/6.bc1bae03a7065d860954.js","7eec141d20965de4f619a3eac9ad33b9"],["/js/60.bc1bae03a7065d860954.js","1ede74d48686c2204e54d8573ece2863"],["/js/61.bc1bae03a7065d860954.js","13080ff5187d2c5923b0bffd2923e492"],["/js/62.bc1bae03a7065d860954.js","2fcffb4155dfadaa1325a91d89469324"],["/js/63.bc1bae03a7065d860954.js","a1c8e3bfa9f2eeb1eb084a40dbe9b510"],["/js/64.bc1bae03a7065d860954.js","97c26d1cf197097d1155bb0b7bdba739"],["/js/65.bc1bae03a7065d860954.js","71b2ac5eb89c1818819d332ea40801e1"],["/js/66.bc1bae03a7065d860954.js","f224cd2b3b67b331a18fe9afcc328dae"],["/js/67.bc1bae03a7065d860954.js","b218f5ba54f3bba4cddc486d72a56569"],["/js/68.bc1bae03a7065d860954.js","b648b9ea252ed07e7bc9b9db68c8aa33"],["/js/69.bc1bae03a7065d860954.js","9d067761909898bbd711b5d065cf4fc4"],["/js/7.bc1bae03a7065d860954.js","1e055b4d9afde0b73d2aa8b44c1ddf53"],["/js/70.bc1bae03a7065d860954.js","af4b689a137a8682400616dc181df7e2"],["/js/8.bc1bae03a7065d860954.js","259fc50ada6ee3cb4029cd4416298268"],["/js/9.bc1bae03a7065d860954.js","16a2548458d20829acd19b7fdd02412f"],["/js/account-info.bc1bae03a7065d860954.js","523645f75ff56eda437646e75861013e"],["/js/contract.bc1bae03a7065d860954.js","6ab29533c32bfb6fdd47956938e414ec"],["/js/default~open_position~1833eefb.bc1bae03a7065d860954.js","4e1e361d07d505cfc708160815fa8e0f"],["/js/digits.bc1bae03a7065d860954.js","159c760f0bb005a7b27bcb3f380c2496"],["/js/info-box.bc1bae03a7065d860954.js","b4f220e6c49597ba4351385d57fa60cb"],["/js/main.bc1bae03a7065d860954.js","a902c955e897ff93eae92f76eead78f4"],["/js/modals.bc1bae03a7065d860954.js","259948870bf013b8c9caec18153fae95"],["/js/notification-messages.bc1bae03a7065d860954.js","937d3b526582addc27187b2d685d9bc7"],["/js/open_positions.bc1bae03a7065d860954.js","7254e9b295932aa4885b2f45bcd5f021"],["/js/profit_table.bc1bae03a7065d860954.js","43c1f7138d51ca48810c44abee5f7447"],["/js/push-notification.bc1bae03a7065d860954.js","983400e819848fb9820e0cc575fe301c"],["/js/reports.bc1bae03a7065d860954.js","bbeefcd7bf6f189c756caf4e6d7635f6"],["/js/screen-small.bc1bae03a7065d860954.js","47a954d7ef8a0ae321419c7f8a4411d7"],["/js/settings-chart.bc1bae03a7065d860954.js","6cd605f428c11fe15a6910ed96da30c9"],["/js/settings-language.bc1bae03a7065d860954.js","212355d82aab1d0bb67ffafb3bd7a6ee"],["/js/settings-theme.bc1bae03a7065d860954.js","e7af2ab13968ba160235549681163209"],["/js/smart_chart.bc1bae03a7065d860954.js","336e5ff1c747f62c5445533218bd62e6"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.bc1bae03a7065d860954.js","a69c41346e36f05fc25a32714c926330"],["/js/toggle-menu-drawer.bc1bae03a7065d860954.js","e33a6d4e17b4476597e789e6213b0492"],["/js/two-month-picker.bc1bae03a7065d860954.js","76accd3dce1b9245bc82ddca9121a830"],["/js/vendors~main.bc1bae03a7065d860954.js","0c35361780d99fed08820f45d641d63d"],["/js/vendors~open_position~7c650be5.bc1bae03a7065d860954.js","7ab51b6ac35b18595199d360b27fc082"],["/js/vendors~smart_chart.bc1bae03a7065d860954.js","e75b854a883166637a5faf7fb5581c22"],["/js/work-in-progress.bc1bae03a7065d860954.js","951e0c0e3bf1e334c265d8456beb424d"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







