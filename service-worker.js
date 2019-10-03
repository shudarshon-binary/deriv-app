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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","fd506e50c770af4843fb5e2e5add1789"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e360a390dae68746592cd45ef0007511"],["/css/modals.css","59c76be941d6feafa7886a8aba932c3b"],["/css/mt5.css","bf009c6f130ce412e3bb83da58900547"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","6e3ad4d4516f2b76d8abac49da3a4126"],["/js/0.b3afda414dd50c93fa43.js","b2549eb631ae06b2edac7d60b4a35bf2"],["/js/1.b3afda414dd50c93fa43.js","53144a97e942d76f169337bdd8fbe4d3"],["/js/10.b3afda414dd50c93fa43.js","7cddd0be8d9b6a1ca53107bb98ca5754"],["/js/11.b3afda414dd50c93fa43.js","fff42d9335a783af6a245fd73dc93a59"],["/js/12.b3afda414dd50c93fa43.js","3905326220a591fb7c1ff1262c737ac9"],["/js/13.b3afda414dd50c93fa43.js","15fe01e849a37d653d664fe66e8ecf15"],["/js/14.b3afda414dd50c93fa43.js","3721a27c7179f067b9bc106e317da7f1"],["/js/15.b3afda414dd50c93fa43.js","e70b717363aa1e0c3f9c584b93ee5d40"],["/js/16.b3afda414dd50c93fa43.js","bdcec18f2ba33f1a1b1d546715b871a0"],["/js/17.b3afda414dd50c93fa43.js","30e4b8a3de801f1b8ee2d8a3e37c2fcc"],["/js/18.b3afda414dd50c93fa43.js","58bb65c43bf3d3d908ba31fab0fa6ecc"],["/js/19.b3afda414dd50c93fa43.js","a81741f4d6e7142f3ee72a53c3c34a65"],["/js/2.b3afda414dd50c93fa43.js","796605ee5025bbca9390f1cc7da9ac96"],["/js/20.b3afda414dd50c93fa43.js","5ebbd3f1c35a8e7c1136c761492efc53"],["/js/21.b3afda414dd50c93fa43.js","0c456cbca8e56e74c9682de666458a4a"],["/js/22.b3afda414dd50c93fa43.js","20ff7e110173b54edad84e188d930110"],["/js/23.b3afda414dd50c93fa43.js","76d8dbc09c5f91dc5f8fffd589f83f7e"],["/js/24.b3afda414dd50c93fa43.js","0a6c6e3e74730f365fa0911d13cdb132"],["/js/25.b3afda414dd50c93fa43.js","8f70a1aad8487046b7162d32dfe8ce43"],["/js/26.b3afda414dd50c93fa43.js","7a8194c3bd09cb2fc9f4765b04f4e7b8"],["/js/27.b3afda414dd50c93fa43.js","271a98c1ed8e2192b88857b2e04e89a1"],["/js/28.b3afda414dd50c93fa43.js","750b83017734c233869a7805a4da2df0"],["/js/29.b3afda414dd50c93fa43.js","26eb4e2591ab9703a3ab60b65d0d677f"],["/js/3.b3afda414dd50c93fa43.js","772f4799575ab89bd110e17525aa4330"],["/js/30.b3afda414dd50c93fa43.js","cea90f5e3ebe919b3ff0fe2531a6e92f"],["/js/31.b3afda414dd50c93fa43.js","ba8cf16167053f1180c5205d214773d7"],["/js/32.b3afda414dd50c93fa43.js","46e5836a6ef63e2416a7b6138585b63a"],["/js/33.b3afda414dd50c93fa43.js","f2b4860848b721eb799b236d14cbf51e"],["/js/34.b3afda414dd50c93fa43.js","92bac80e119d519cc127cd2d0c16a96b"],["/js/35.b3afda414dd50c93fa43.js","95b814b907a6b94e6000f988e9dfc179"],["/js/36.b3afda414dd50c93fa43.js","faa7c1bfa8736c85260a55a85c86887d"],["/js/37.b3afda414dd50c93fa43.js","764e98768ec61eb3aac883a11ec471f9"],["/js/38.b3afda414dd50c93fa43.js","c08077ea986b1a62f0f249aafc4ac031"],["/js/39.b3afda414dd50c93fa43.js","5a08d08fb71c727cfdc2c6ba04954316"],["/js/4.b3afda414dd50c93fa43.js","e7b4490ecfe26097d3dbdba483fa0771"],["/js/40.b3afda414dd50c93fa43.js","96719db216910a6240a790b327d0b086"],["/js/404.b3afda414dd50c93fa43.js","d75338968e2b5a6bef8d1d16775b9293"],["/js/41.b3afda414dd50c93fa43.js","79e9f0f8394c846a8fd29a0d3e7c03b6"],["/js/42.b3afda414dd50c93fa43.js","9c3a64edbd5b2927163db60edcc03e6e"],["/js/43.b3afda414dd50c93fa43.js","d217669c3439cc8c70ad4f8fa07ce784"],["/js/44.b3afda414dd50c93fa43.js","692126a6fb552e2ce9aaca2b4a3880ab"],["/js/45.b3afda414dd50c93fa43.js","4baff08a1d88376b94fd6b075f4460dc"],["/js/46.b3afda414dd50c93fa43.js","2abf2d8e5e882d30adbb3b417fb7c1a2"],["/js/47.b3afda414dd50c93fa43.js","bdd6205b42858ecc2aa1cc3746577475"],["/js/48.b3afda414dd50c93fa43.js","ca52101f4561e1a2816229ee46e417fa"],["/js/49.b3afda414dd50c93fa43.js","3e3a88266e27a169e7ad0d254827d977"],["/js/5.b3afda414dd50c93fa43.js","8406daa841cc35c09f6beb1a3b5de8e5"],["/js/50.b3afda414dd50c93fa43.js","671f1b1d02a5afae6b3b7590e9977839"],["/js/51.b3afda414dd50c93fa43.js","733da5209e6b0f89c3826cc3507a0331"],["/js/52.b3afda414dd50c93fa43.js","d6b894926c53922b9f157ec4720b366c"],["/js/53.b3afda414dd50c93fa43.js","af963549770ade091d452ebd91aba6a2"],["/js/54.b3afda414dd50c93fa43.js","11be9e0b07114847e536950ea62a48eb"],["/js/55.b3afda414dd50c93fa43.js","7a96c05767d388010fc22ac4b3bff8de"],["/js/56.b3afda414dd50c93fa43.js","51b8e1f611c2cb9c1005a8b7e4aea2ff"],["/js/57.b3afda414dd50c93fa43.js","9184b5b09f4a41f602a411732bda8e3e"],["/js/58.b3afda414dd50c93fa43.js","6e102617adfecc4773fac8d652b4116e"],["/js/59.b3afda414dd50c93fa43.js","9301bd5d76f23f114ed06c51ef70c8b6"],["/js/6.b3afda414dd50c93fa43.js","e08a1d48fd073940589dd34037ec5e48"],["/js/60.b3afda414dd50c93fa43.js","a721e528230f26e3576a64f7b0fa0f08"],["/js/61.b3afda414dd50c93fa43.js","ac4f8d43e74d4354be2398ff2922bb0e"],["/js/62.b3afda414dd50c93fa43.js","56a509eaad066cba24a1eaecd9e38916"],["/js/63.b3afda414dd50c93fa43.js","7a9385fb19a71addd4ec1a9757a9a347"],["/js/64.b3afda414dd50c93fa43.js","8857794abb3199982f78b74b2d05332c"],["/js/65.b3afda414dd50c93fa43.js","6bd9d42ac4afc9e2b02add795d0c91f1"],["/js/66.b3afda414dd50c93fa43.js","82bbdcb478e0a18033b05efec01058b7"],["/js/67.b3afda414dd50c93fa43.js","a826ee0aa1541ed60ec51391d9f6627d"],["/js/68.b3afda414dd50c93fa43.js","05408fce5599e791ebc899ff32b8efd2"],["/js/69.b3afda414dd50c93fa43.js","db9723625b723b65428c25b5425acf88"],["/js/7.b3afda414dd50c93fa43.js","ed3f5530e5eb8f8ea411dad66c4228b4"],["/js/70.b3afda414dd50c93fa43.js","4696381ba03ff15a0683fb3179ff369a"],["/js/71.b3afda414dd50c93fa43.js","a5c1e33201852c18a2a27cf157faa829"],["/js/72.b3afda414dd50c93fa43.js","f9d6ed5ab3ab47e3eb3e815de0a61690"],["/js/73.b3afda414dd50c93fa43.js","2346da3b95c4d1d0f0f55697d454dca1"],["/js/74.b3afda414dd50c93fa43.js","c941f72705750c8ed3433ac229698c37"],["/js/75.b3afda414dd50c93fa43.js","bddb8431cf90ac35833de5cc0b46345c"],["/js/76.b3afda414dd50c93fa43.js","1b370ba31c4306786fa1fff927eb5cd9"],["/js/77.b3afda414dd50c93fa43.js","47d5dc9c15279c5ffb31eead3ccea77d"],["/js/78.b3afda414dd50c93fa43.js","f3eb11b469b7fd27e103656bc6f59600"],["/js/79.b3afda414dd50c93fa43.js","34afa7f7cee2b5792ef08ab8ee1294b9"],["/js/8.b3afda414dd50c93fa43.js","5473b5d0919beaf1fc5f016f3d03aebd"],["/js/80.b3afda414dd50c93fa43.js","898f47f486dce06f6cb633d560feb6c7"],["/js/81.b3afda414dd50c93fa43.js","bbc02c92ac3774d2caf784c7fba7b67a"],["/js/82.b3afda414dd50c93fa43.js","05f794b3fb09d9382e3f591c5467277c"],["/js/83.b3afda414dd50c93fa43.js","cca7e6c144c5c401ab6e9bbcb1a6c5c8"],["/js/84.b3afda414dd50c93fa43.js","084a99c5f693255d2628301632b2405e"],["/js/85.b3afda414dd50c93fa43.js","e7214b22b4567e4fc8b61b8759743cf6"],["/js/86.b3afda414dd50c93fa43.js","733e934b440af91a0d57061b48baeba6"],["/js/87.b3afda414dd50c93fa43.js","80c978cd6a50040e246bb037d601a1fb"],["/js/88.b3afda414dd50c93fa43.js","a5da6991558677ece1268c2abcdee77e"],["/js/89.b3afda414dd50c93fa43.js","6de9217f72b8b54e0946ba85b285de15"],["/js/9.b3afda414dd50c93fa43.js","b8d7662abd6a0beb2b8c229c9bd8dc28"],["/js/90.b3afda414dd50c93fa43.js","e3419b571495babb5048a63efd402843"],["/js/91.b3afda414dd50c93fa43.js","2bb25f1010562bf30a5abf08d589d49f"],["/js/92.b3afda414dd50c93fa43.js","bb49f02924d80e8d0e71cd3d2c651dc4"],["/js/AccountSignupModal.b3afda414dd50c93fa43.js","39c376306186cb06b03dcbf100dafb97"],["/js/ResetPasswordModal.b3afda414dd50c93fa43.js","32cf3de11e65d89f18b6bcaa658af9cc"],["/js/account-info.b3afda414dd50c93fa43.js","42c3e245f50a44450019ce3496e4a591"],["/js/account.b3afda414dd50c93fa43.js","3ba1cd74f7a3de8cbff1e1d49db45bd0"],["/js/contract.b3afda414dd50c93fa43.js","4ea04c81523ef75052f21342d3db3b6f"],["/js/main.b3afda414dd50c93fa43.js","af83506caf94b21addf95052967579c8"],["/js/modals.b3afda414dd50c93fa43.js","63fa2b9b1f0d5e6334f9e0b9ac078880"],["/js/mt5.b3afda414dd50c93fa43.js","428a7ab1974d0097ab7e3c3ea9a0a1aa"],["/js/notification-messages.b3afda414dd50c93fa43.js","2d4d65bd28d1ba9958ad009042630983"],["/js/push-notification.b3afda414dd50c93fa43.js","12f909694eb8ac5b142f5e8169a60f22"],["/js/reports.b3afda414dd50c93fa43.js","116ebebf9ddf2cf54fba857f0da216df"],["/js/screen-small.b3afda414dd50c93fa43.js","f843cf36ac91864aa4d405f6391f5d19"],["/js/settings-chart.b3afda414dd50c93fa43.js","39199774b0b089fefc5aa8fa3c4a4738"],["/js/settings-language.b3afda414dd50c93fa43.js","6093cb9a08ebd4519060f86503e19046"],["/js/settings-theme.b3afda414dd50c93fa43.js","38682658dd577cb51c01756405c562e4"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.b3afda414dd50c93fa43.js","f38eed92e7840ee81f8c00a005e98bdc"],["/js/two-month-picker.b3afda414dd50c93fa43.js","9765ca8d2f4c599186a8a1116b76503a"],["/js/vendors~smart_chart.b3afda414dd50c93fa43.js","31634569c884c83d553be8851c7002fe"],["/js/work-in-progress.b3afda414dd50c93fa43.js","6b0adae5f27befb1633f2cd659e8ee07"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







