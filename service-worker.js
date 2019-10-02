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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","d1f96e09325537ad5e0a567b46ee67d0"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","e78657751fee33c81a74612b90316024"],["/js/0.3f1bf26b22bef8c7d9c0.js","0fffceeb432e66473144eba0f02c2a62"],["/js/1.3f1bf26b22bef8c7d9c0.js","0e8c12ce40b75baee103f12d1a8ec5f5"],["/js/10.3f1bf26b22bef8c7d9c0.js","f8e56ecdca10c5f688b1a2edf994247a"],["/js/11.3f1bf26b22bef8c7d9c0.js","98e74ed435e3e90665c641944d6b9a56"],["/js/12.3f1bf26b22bef8c7d9c0.js","61c6ff32e9ab94094df534387e9c6e63"],["/js/13.3f1bf26b22bef8c7d9c0.js","80fac64222ed4c136cdf479f9d36eecd"],["/js/14.3f1bf26b22bef8c7d9c0.js","838cc45baf6fd2fae6cbb3f3934b503c"],["/js/15.3f1bf26b22bef8c7d9c0.js","6ab4854d939436ea1f1329bbb9ca096c"],["/js/16.3f1bf26b22bef8c7d9c0.js","12dfd3df216a293f89327bfd078426dd"],["/js/17.3f1bf26b22bef8c7d9c0.js","4c0d8ba404ecbe7f300672e994c21d8e"],["/js/18.3f1bf26b22bef8c7d9c0.js","8c674da9e2d99c813f324013b62daac7"],["/js/19.3f1bf26b22bef8c7d9c0.js","bef0794116cfb0b725ff1ad64b24d4e2"],["/js/2.3f1bf26b22bef8c7d9c0.js","79de703db8ca9a926ddbde69184ff5b5"],["/js/20.3f1bf26b22bef8c7d9c0.js","38c8f4baa008b4994d8c24ec6795df65"],["/js/21.3f1bf26b22bef8c7d9c0.js","1de43b30955eacad8badd6446ba58b81"],["/js/22.3f1bf26b22bef8c7d9c0.js","dff2af980cec88b556b0c3b7ef8c3adb"],["/js/23.3f1bf26b22bef8c7d9c0.js","ebd32ba5061137bc27e3ca51219acddf"],["/js/24.3f1bf26b22bef8c7d9c0.js","dc583b5574283b53cdb7a19d8f8598ec"],["/js/25.3f1bf26b22bef8c7d9c0.js","74ff8dd6c5b691b64a3b298a2f66eaed"],["/js/26.3f1bf26b22bef8c7d9c0.js","39ed1e7dfb731af50a8d4c8521598039"],["/js/27.3f1bf26b22bef8c7d9c0.js","cc7912a9df590fb58be2a4ce62d9b555"],["/js/28.3f1bf26b22bef8c7d9c0.js","bf4d0c79a3b27a90beadccd67a876001"],["/js/29.3f1bf26b22bef8c7d9c0.js","f92e5daa6799632bb9c7da1bd0b0cbd0"],["/js/3.3f1bf26b22bef8c7d9c0.js","3733b799317591742f71f79c5d91b15d"],["/js/30.3f1bf26b22bef8c7d9c0.js","778988c34af0d7564b6fc534019d23c9"],["/js/31.3f1bf26b22bef8c7d9c0.js","6e89effa19bf871ceb69c750cd18693b"],["/js/32.3f1bf26b22bef8c7d9c0.js","4d4c02bdc8561c46221b14657fc2afde"],["/js/33.3f1bf26b22bef8c7d9c0.js","bcae3c1d488dac2ec2459fe1b0e7dc8b"],["/js/34.3f1bf26b22bef8c7d9c0.js","46cdb206f14f04e0ea86132be2eec6af"],["/js/35.3f1bf26b22bef8c7d9c0.js","1ad2c43ccbb4d1e4c901791d32d2a236"],["/js/36.3f1bf26b22bef8c7d9c0.js","438d0f2ce0b42c39ec2262eef2c96b85"],["/js/37.3f1bf26b22bef8c7d9c0.js","857f00ad45332dc6edeb7d58b187a61b"],["/js/38.3f1bf26b22bef8c7d9c0.js","91c0c2e8e426094ed42d7d61d7126011"],["/js/39.3f1bf26b22bef8c7d9c0.js","95a8fd20201fc2e82799789ecc7011d3"],["/js/4.3f1bf26b22bef8c7d9c0.js","52382c643babc6768dfad4f09bf1e6fa"],["/js/40.3f1bf26b22bef8c7d9c0.js","c6921c86704dc6b17013f71373295a24"],["/js/404.3f1bf26b22bef8c7d9c0.js","cc9f6e74a1e07695df798ff0379f8073"],["/js/41.3f1bf26b22bef8c7d9c0.js","177025dd54ab5084d150cdf118459fb0"],["/js/42.3f1bf26b22bef8c7d9c0.js","53223dd1c6ddbd17af357ac2e1bfcd49"],["/js/43.3f1bf26b22bef8c7d9c0.js","6a46eb7c47decb66981db17cc89c5db2"],["/js/44.3f1bf26b22bef8c7d9c0.js","9541fb26d09e4cbc3cbf99875b89dd45"],["/js/45.3f1bf26b22bef8c7d9c0.js","a105d0de83afe55d0a1f2772329609ca"],["/js/46.3f1bf26b22bef8c7d9c0.js","be49ce8c357aecd613680babbf34d4ba"],["/js/47.3f1bf26b22bef8c7d9c0.js","e9df8ee0df66f18d0279fee5d5f805a9"],["/js/48.3f1bf26b22bef8c7d9c0.js","b716b1cf5e491831fa9b5a5e61105aa6"],["/js/49.3f1bf26b22bef8c7d9c0.js","c92632dbd5915b7f5580106c99d3107c"],["/js/5.3f1bf26b22bef8c7d9c0.js","e9ad37caa4b1450b44a5949a931489a5"],["/js/50.3f1bf26b22bef8c7d9c0.js","3532014ee1a23dcbb67a588a26cd4cf3"],["/js/51.3f1bf26b22bef8c7d9c0.js","686fc0e792a22d8af586bc6217fa1cb7"],["/js/52.3f1bf26b22bef8c7d9c0.js","d188d935994a217102021c5fc7029e99"],["/js/53.3f1bf26b22bef8c7d9c0.js","64c036b3d9fc38bc17c7fa0d146c8cb0"],["/js/54.3f1bf26b22bef8c7d9c0.js","a4997692e9e86db54ee7d019a48d2ddd"],["/js/55.3f1bf26b22bef8c7d9c0.js","ec14b42ada306542e3f75703a11ee920"],["/js/56.3f1bf26b22bef8c7d9c0.js","91493e9dcb389054ba034e58ecff010f"],["/js/57.3f1bf26b22bef8c7d9c0.js","8b1c7e9c1e655f1eaf489222a9009f75"],["/js/58.3f1bf26b22bef8c7d9c0.js","b3bc784c7271a2d78a41a50f637a5ede"],["/js/59.3f1bf26b22bef8c7d9c0.js","0969edf7741858fedf6037a94b1b9eaf"],["/js/6.3f1bf26b22bef8c7d9c0.js","daf0b1e56a04a407d0b2a2866de18f20"],["/js/60.3f1bf26b22bef8c7d9c0.js","ef997e7394f0ab21db979b042ec6515b"],["/js/61.3f1bf26b22bef8c7d9c0.js","33ef70d29b912265f3280d7144416102"],["/js/62.3f1bf26b22bef8c7d9c0.js","ea39e5db34702888f83d92e108391998"],["/js/63.3f1bf26b22bef8c7d9c0.js","3bac6c436788c077ba4c12694491c6c6"],["/js/64.3f1bf26b22bef8c7d9c0.js","171a8723d1a2be0d3da0a52538c2811f"],["/js/65.3f1bf26b22bef8c7d9c0.js","162996280061a1e1661471b09e7ae2eb"],["/js/66.3f1bf26b22bef8c7d9c0.js","37f408490b0260dd511e2d3e0c4f64bb"],["/js/67.3f1bf26b22bef8c7d9c0.js","981687ef6d14a6e925d9a29cf39c544e"],["/js/68.3f1bf26b22bef8c7d9c0.js","44a4a2da99199cc91c00fc9f0d31f36c"],["/js/69.3f1bf26b22bef8c7d9c0.js","12aec8815f9024dda1d5a838a4e83994"],["/js/7.3f1bf26b22bef8c7d9c0.js","8aeb7056783afb20cd8426be45484c41"],["/js/70.3f1bf26b22bef8c7d9c0.js","f3d8fae6b1c73836bb94f3b78c137ef2"],["/js/71.3f1bf26b22bef8c7d9c0.js","d8e9439be3ace43628788c7d7ce1e54f"],["/js/72.3f1bf26b22bef8c7d9c0.js","d9655ae7ce42a3d18a794c7cfeb9e4e6"],["/js/73.3f1bf26b22bef8c7d9c0.js","8faa595977404d4915cb4128502448b5"],["/js/74.3f1bf26b22bef8c7d9c0.js","aef9756853f0df075365411cbcd2b1ad"],["/js/75.3f1bf26b22bef8c7d9c0.js","bf90a6a8d257efa6e8ca7226d48d24f4"],["/js/76.3f1bf26b22bef8c7d9c0.js","bfb919daf1ce874987ff1e849c7d914b"],["/js/77.3f1bf26b22bef8c7d9c0.js","196d47447f14e660148acd872b9e56f7"],["/js/78.3f1bf26b22bef8c7d9c0.js","96897e677f3d51c1c38884dda62ae0f5"],["/js/79.3f1bf26b22bef8c7d9c0.js","acb6416eeb630c5d780b31409dfd3c97"],["/js/8.3f1bf26b22bef8c7d9c0.js","1742868a9b3e88e71dd520a896a28a04"],["/js/80.3f1bf26b22bef8c7d9c0.js","e6cbe8aa2bd48ef8e1397758f6ef0f00"],["/js/81.3f1bf26b22bef8c7d9c0.js","0679292d964e686df795381bfc8cd123"],["/js/82.3f1bf26b22bef8c7d9c0.js","d53c2e17581a1618c80abac79f759242"],["/js/83.3f1bf26b22bef8c7d9c0.js","f94d304917fd756eea6ca1ec15098c99"],["/js/84.3f1bf26b22bef8c7d9c0.js","ef77f15f41c4a3d64b97524e6c027eeb"],["/js/85.3f1bf26b22bef8c7d9c0.js","3991ad828bfac68c9032a1ddc243fae1"],["/js/86.3f1bf26b22bef8c7d9c0.js","992f6d8a40fe5772674508c96ca03b6c"],["/js/87.3f1bf26b22bef8c7d9c0.js","24fabbd5d1c72f2c6e5a82ddfc7b48c9"],["/js/88.3f1bf26b22bef8c7d9c0.js","4c884d8300826a809654b13749351ec5"],["/js/89.3f1bf26b22bef8c7d9c0.js","81c8100bcacfa653366bdca2546f2da4"],["/js/9.3f1bf26b22bef8c7d9c0.js","41ea5ced3a70c4b88d376e9802ee85e7"],["/js/90.3f1bf26b22bef8c7d9c0.js","dfd733f47ee11a6c15ef9c3cb0ad7ba3"],["/js/91.3f1bf26b22bef8c7d9c0.js","f774787513d0439b784f549654da146e"],["/js/92.3f1bf26b22bef8c7d9c0.js","992ba5f0fd093ab50a642388a855f489"],["/js/AccountSignupModal.3f1bf26b22bef8c7d9c0.js","f14f83226bc5ad286b4dca69308707c2"],["/js/ResetPasswordModal.3f1bf26b22bef8c7d9c0.js","9a474706a5688c13160f153b37da9b3b"],["/js/account-info.3f1bf26b22bef8c7d9c0.js","1added816fcc754c594b22adfa2692a7"],["/js/account.3f1bf26b22bef8c7d9c0.js","9e4d5f04861a60c285701a31bcfd854f"],["/js/contract.3f1bf26b22bef8c7d9c0.js","6dec85a070d986fcfc05dbdb3ce9c423"],["/js/modals.3f1bf26b22bef8c7d9c0.js","0ce053581e35271b055caa66a08b610b"],["/js/mt5.3f1bf26b22bef8c7d9c0.js","9be0586d924e0ab11ba48e7fdd7ae88d"],["/js/notification-messages.3f1bf26b22bef8c7d9c0.js","49b56bea33ea1390321b588dd5105d6c"],["/js/push-notification.3f1bf26b22bef8c7d9c0.js","f453b715cf70b05738aceddd2bd6044a"],["/js/reports.3f1bf26b22bef8c7d9c0.js","a0b4d8df5677b3755db3f39abbf658fb"],["/js/screen-small.3f1bf26b22bef8c7d9c0.js","d3a55f04929fa998956c46c244e2435a"],["/js/settings-chart.3f1bf26b22bef8c7d9c0.js","e45386a18a1f7413e5bb4b70c230e33c"],["/js/settings-language.3f1bf26b22bef8c7d9c0.js","95cdce22e0a2be30df86c566396cc847"],["/js/settings-theme.3f1bf26b22bef8c7d9c0.js","07999da13c405df2b4aed1d754ce0ee6"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.3f1bf26b22bef8c7d9c0.js","7546d402703cbfaa9bef7d148d395997"],["/js/two-month-picker.3f1bf26b22bef8c7d9c0.js","3cb26c30ae927dfc7ac1e9be2b26b920"],["/js/vendors~main.3f1bf26b22bef8c7d9c0.js","2823abafda01cd55833f598d3233c041"],["/js/vendors~smart_chart.3f1bf26b22bef8c7d9c0.js","269672a7bd459d69c795134ff3ea455c"],["/js/work-in-progress.3f1bf26b22bef8c7d9c0.js","142b7be110f2674d4b35542f1b55a778"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







