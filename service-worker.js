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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","5987dc74160f37a59686e161d747711d"],["/css/app.css","1480460d4799bdbbd262098550aae1f4"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","935090f78833a38ae941c5b818ad51eb"],["/js/0.e567ae7dd13ffaf227c9.js","ca1e7530bf5472886267ca1f6fa4bfa6"],["/js/1.e567ae7dd13ffaf227c9.js","f756f5f9fbc53b9f6d2ddf3f70f3af79"],["/js/10.e567ae7dd13ffaf227c9.js","5464695c84700194a3aa33529f0b4a61"],["/js/11.e567ae7dd13ffaf227c9.js","1519ae0066bb0f21357475fbc5995143"],["/js/12.e567ae7dd13ffaf227c9.js","3cc1ec9da4f03ac595c06f1b6b0f5af1"],["/js/13.e567ae7dd13ffaf227c9.js","4bcb5283cfa8f3f1d9484669fe9088f9"],["/js/14.e567ae7dd13ffaf227c9.js","2f8072e2883b4488018f9d1058e973bf"],["/js/15.e567ae7dd13ffaf227c9.js","1ccc325c9bb9d1a20622cbcba2fa13f9"],["/js/16.e567ae7dd13ffaf227c9.js","ee9871ae9a6cf2eec26f5eb00c20c028"],["/js/17.e567ae7dd13ffaf227c9.js","4445fa585b68637412950c15dbd9299b"],["/js/18.e567ae7dd13ffaf227c9.js","7661636f01d3f2f707b72c0e3a66b0f4"],["/js/19.e567ae7dd13ffaf227c9.js","c6e7eeb069457d20d5bccba48e072ab7"],["/js/2.e567ae7dd13ffaf227c9.js","80ab693261f093389b33a8af51ba02a1"],["/js/20.e567ae7dd13ffaf227c9.js","dd57e53c96d3c83831db30f94d55d110"],["/js/21.e567ae7dd13ffaf227c9.js","f33e05e32c0c4f57d866d7e8ed9e871f"],["/js/22.e567ae7dd13ffaf227c9.js","b6a46c70d775ed86c00fe8cec3260c91"],["/js/23.e567ae7dd13ffaf227c9.js","090971b4dc2d68606b5c8893a8698573"],["/js/24.e567ae7dd13ffaf227c9.js","ece8fb6966e3f02ac1142eb71ad0db5a"],["/js/25.e567ae7dd13ffaf227c9.js","86c961d5ede3d1053be031d409a9b2a9"],["/js/26.e567ae7dd13ffaf227c9.js","5ae484187c02eb8ff498f600224cdf89"],["/js/27.e567ae7dd13ffaf227c9.js","5b6ffbf73d7e2db04596b38acb32625e"],["/js/28.e567ae7dd13ffaf227c9.js","fe9b408afa0c240c528131b0b48be58e"],["/js/29.e567ae7dd13ffaf227c9.js","390522249198e678a5aa5866e6f8e75e"],["/js/3.e567ae7dd13ffaf227c9.js","b4d2d1c3be3fe6c3cb8f9a07618ee9c1"],["/js/30.e567ae7dd13ffaf227c9.js","13e6dadfd393a4a823e73d4a170b4404"],["/js/31.e567ae7dd13ffaf227c9.js","b020327c94ad5ebab614011d1d94bf65"],["/js/32.e567ae7dd13ffaf227c9.js","a21622a37e4b2b42dbbef7779d1ae6e0"],["/js/33.e567ae7dd13ffaf227c9.js","e57bfa30d174894f076454c7e5b785b5"],["/js/34.e567ae7dd13ffaf227c9.js","17f61ec115ea770f7b650e471458652f"],["/js/35.e567ae7dd13ffaf227c9.js","24442fbe6fdb320d2fc3be82064347c6"],["/js/36.e567ae7dd13ffaf227c9.js","21479a3140ac341336b3c35238921921"],["/js/37.e567ae7dd13ffaf227c9.js","844139ed91eedfbe819b91beeabe39cc"],["/js/38.e567ae7dd13ffaf227c9.js","a12ab786b5655eb4a8f81da2d41fecec"],["/js/39.e567ae7dd13ffaf227c9.js","7cf3b996309ef59f020502318715014c"],["/js/4.e567ae7dd13ffaf227c9.js","dee3e2d5eb2f7e58c786748c6b0edc09"],["/js/40.e567ae7dd13ffaf227c9.js","957625695bec61b504b6b3557f7ea593"],["/js/404.e567ae7dd13ffaf227c9.js","c090e42d8eaac5d8b9ac89109448b3c7"],["/js/41.e567ae7dd13ffaf227c9.js","bcb19f14025f1dfdc77225f2f20350f7"],["/js/42.e567ae7dd13ffaf227c9.js","0f3c56c5807e3e7a9e7d5d71aa6b05d7"],["/js/43.e567ae7dd13ffaf227c9.js","91be0f71f2dcec91f5545b6a6afaf266"],["/js/44.e567ae7dd13ffaf227c9.js","1cafa3bfaf9b269179265e65f598e30b"],["/js/45.e567ae7dd13ffaf227c9.js","0269690b878df685e942b06a35b1b266"],["/js/46.e567ae7dd13ffaf227c9.js","6bce934d462923ed5838a9089f8eb07e"],["/js/47.e567ae7dd13ffaf227c9.js","c6ab75dae40aa95ff89fe0ea2050d295"],["/js/48.e567ae7dd13ffaf227c9.js","db2dea20d3c40b54de7410ce8d2dbcd7"],["/js/49.e567ae7dd13ffaf227c9.js","fbfe4ad841652fc09f4c7cc0deca239b"],["/js/5.e567ae7dd13ffaf227c9.js","3abc77cb177ff1349c710bf52ef6dcd0"],["/js/50.e567ae7dd13ffaf227c9.js","4a3089ca9fe1c3e6547fecc40e72b8bc"],["/js/51.e567ae7dd13ffaf227c9.js","38e32f23d1310435ec6c908108a2617b"],["/js/52.e567ae7dd13ffaf227c9.js","db4df97dc82ec2f183d68257e71fcb8f"],["/js/53.e567ae7dd13ffaf227c9.js","a032c76b3fc9a7129d606eaa4a2c8560"],["/js/54.e567ae7dd13ffaf227c9.js","cde48beb46bd9d9bcb2c4f7728ca52af"],["/js/55.e567ae7dd13ffaf227c9.js","6df3d2967e9477e3115bbcb585bd0d57"],["/js/56.e567ae7dd13ffaf227c9.js","283cb185fc92a6caa175acd0291c17c8"],["/js/57.e567ae7dd13ffaf227c9.js","9ddf093ea208006d07fd293634faee1e"],["/js/58.e567ae7dd13ffaf227c9.js","4035495fcac313e7f65e89d95b921c7d"],["/js/59.e567ae7dd13ffaf227c9.js","ae00124bcbab83b6667547335e7dee28"],["/js/6.e567ae7dd13ffaf227c9.js","aaad44ef341e47bb9174f5401c6c0343"],["/js/60.e567ae7dd13ffaf227c9.js","0919e6cde622342d3fbb9affde060d32"],["/js/61.e567ae7dd13ffaf227c9.js","c123b3283f536c2c97514e22b62adbd6"],["/js/62.e567ae7dd13ffaf227c9.js","053f5e6e0f3f8365204043f1d5238423"],["/js/63.e567ae7dd13ffaf227c9.js","702c201950d2aff9a5d8dc4c8598fdbd"],["/js/64.e567ae7dd13ffaf227c9.js","4c3365fee5b0797918ad137febeca1bd"],["/js/65.e567ae7dd13ffaf227c9.js","15b5e4e6104126e08a53548b20d22a37"],["/js/66.e567ae7dd13ffaf227c9.js","d076999370dec8dbb77c5fe8832ec947"],["/js/67.e567ae7dd13ffaf227c9.js","88ec77ab9981c70b2f3b05778ae014be"],["/js/68.e567ae7dd13ffaf227c9.js","5e74e5000616b2b241c166a5f3175dd0"],["/js/69.e567ae7dd13ffaf227c9.js","a7c8cbad0b40035a0154cda2577a1741"],["/js/7.e567ae7dd13ffaf227c9.js","dc460dccb4df7a4fbc4e0649bea025a7"],["/js/70.e567ae7dd13ffaf227c9.js","1e04d340a2ac19a30c70026d009a0b53"],["/js/71.e567ae7dd13ffaf227c9.js","ee36ed9fbbd83c3ecf7df3dfb72cea94"],["/js/72.e567ae7dd13ffaf227c9.js","d22b42051e94d63f5169c2b807237dd0"],["/js/73.e567ae7dd13ffaf227c9.js","b9215c48c9913700122adcd89abf5dd0"],["/js/74.e567ae7dd13ffaf227c9.js","d3e1b4f9c285b639bba57518500a3f76"],["/js/75.e567ae7dd13ffaf227c9.js","e5717761f8fb4557ba967ba3e9d18564"],["/js/76.e567ae7dd13ffaf227c9.js","c1031f8c23c0ccbe0fc7e5eb975387a4"],["/js/77.e567ae7dd13ffaf227c9.js","037c1e1363d4e89c1b903327212defc7"],["/js/78.e567ae7dd13ffaf227c9.js","4dca0f63ec440b18becbf9701bc1720b"],["/js/79.e567ae7dd13ffaf227c9.js","5336bb98dc9df65c1e31d2e32ee428e2"],["/js/8.e567ae7dd13ffaf227c9.js","9027cb2b7f150a443c94bb808dd005e7"],["/js/80.e567ae7dd13ffaf227c9.js","5bcb68404f6d6f7634587c2eaf35955f"],["/js/81.e567ae7dd13ffaf227c9.js","6ce150b4c66c0bcf1cf8110f45c833ba"],["/js/82.e567ae7dd13ffaf227c9.js","bb99cdd19aa383aa1573c7e2fb7d7f1d"],["/js/83.e567ae7dd13ffaf227c9.js","6c836ff4906a5bdc0d292ca0faada4e6"],["/js/84.e567ae7dd13ffaf227c9.js","ec66265a4364a1f99d4f899f6bcfe81f"],["/js/85.e567ae7dd13ffaf227c9.js","9a1e950ec127d852d0a22bf28482c260"],["/js/86.e567ae7dd13ffaf227c9.js","431e3bcd793fc924fea7b5b49d1cc627"],["/js/87.e567ae7dd13ffaf227c9.js","41deae4873c518166520d7b6cbbb4176"],["/js/88.e567ae7dd13ffaf227c9.js","8fd54e91d20feb92af08f973502b990c"],["/js/89.e567ae7dd13ffaf227c9.js","840de882cfcda0754ce66af57e6c1fc3"],["/js/9.e567ae7dd13ffaf227c9.js","544b1918770dda1033df1ee23755db3f"],["/js/90.e567ae7dd13ffaf227c9.js","826b0dc5b93c14a0dc83ed993f9b4071"],["/js/91.e567ae7dd13ffaf227c9.js","5752981a4c677ce1582f7dbcf2b10c8d"],["/js/92.e567ae7dd13ffaf227c9.js","1d3f5e70a145004301382892e7c8d250"],["/js/AccountSignupModal.e567ae7dd13ffaf227c9.js","32d9e52d773af91ed999c94ae832fbb8"],["/js/ResetPasswordModal.e567ae7dd13ffaf227c9.js","56c4420d1db64365cddc7b8256159271"],["/js/account-info.e567ae7dd13ffaf227c9.js","4a0a1b7cff0194007007d9fbe1791510"],["/js/account.e567ae7dd13ffaf227c9.js","732feb858281c25ec63d1d083d2db584"],["/js/contract.e567ae7dd13ffaf227c9.js","c799c638139d84b0c8d842366365b121"],["/js/main.e567ae7dd13ffaf227c9.js","474f0f85948245b44d33aef8c98c9b81"],["/js/modals.e567ae7dd13ffaf227c9.js","0bd44c87fe76c8f5531370a9dbee49dc"],["/js/mt5.e567ae7dd13ffaf227c9.js","f9541d9d7d65185481c53cdaa377b055"],["/js/notification-messages.e567ae7dd13ffaf227c9.js","91c97227726b80ce4430e751d523a6f7"],["/js/push-notification.e567ae7dd13ffaf227c9.js","9abd81a2fcfe4b898230fd907a8e3649"],["/js/reports.e567ae7dd13ffaf227c9.js","2e8d9b76f09f8c8938fda6cec7e35f2b"],["/js/screen-small.e567ae7dd13ffaf227c9.js","b42de1c9129da84d0acbffdf2ff4b0c7"],["/js/settings-chart.e567ae7dd13ffaf227c9.js","01c9bda2fa10de8d5b2e573e115d40e8"],["/js/settings-language.e567ae7dd13ffaf227c9.js","1be7540125329767f0cdfad4e6063921"],["/js/settings-theme.e567ae7dd13ffaf227c9.js","42a7ce6b4a5ec2ee897f646d82e46c5f"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.e567ae7dd13ffaf227c9.js","b8561f8b27f17ce8d3e2060ea8338f9f"],["/js/two-month-picker.e567ae7dd13ffaf227c9.js","01bdb2645bd435227e607e0a83f47b2e"],["/js/vendors~smart_chart.e567ae7dd13ffaf227c9.js","d06a9705a2c8b2bfbd385affc75c6979"],["/js/work-in-progress.e567ae7dd13ffaf227c9.js","b58d389bf575855e72ca739a1601a6e8"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







