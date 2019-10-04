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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e8d20088e6d316057a83e821f8448762"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","998e8e5018add31957a1f5e681233292"],["/js/0.52c61f579ae9d5f7956e.js","e02210bea34bbaf3219be7de25be8063"],["/js/1.52c61f579ae9d5f7956e.js","4982c96000d2baa1ff7c3748e57ca9e3"],["/js/10.52c61f579ae9d5f7956e.js","770db3481f8dc574ccd0cc1f7ea2a05d"],["/js/11.52c61f579ae9d5f7956e.js","d44923d2e3b6515fbc9f96ef806a6dde"],["/js/12.52c61f579ae9d5f7956e.js","1d31e1d319165cbe6517e505091f4102"],["/js/13.52c61f579ae9d5f7956e.js","504c7bb90e23ce4c9efc581645d7b03a"],["/js/14.52c61f579ae9d5f7956e.js","5ccfe57c26d3bdb8230032355153a008"],["/js/15.52c61f579ae9d5f7956e.js","b33b6bfb8c63ef4907e4cdc70d8975de"],["/js/16.52c61f579ae9d5f7956e.js","35337eb5c5d4614df1672a7cd55364f5"],["/js/17.52c61f579ae9d5f7956e.js","6af90640ac487f25daa435d4ebad6f9a"],["/js/18.52c61f579ae9d5f7956e.js","446f33e60a692672707a4848f128ad72"],["/js/19.52c61f579ae9d5f7956e.js","55301722a71321d55d2804cafb2e32dc"],["/js/2.52c61f579ae9d5f7956e.js","74144465d29a0c275ab5d9df7df948f6"],["/js/20.52c61f579ae9d5f7956e.js","31dcf1cc7482490d61b8c37312f4a0c0"],["/js/21.52c61f579ae9d5f7956e.js","54d2b2db5504b0561da74785f4bc9e67"],["/js/22.52c61f579ae9d5f7956e.js","bdf0c2630b051b34f5b4a5bc2c3dadce"],["/js/23.52c61f579ae9d5f7956e.js","fe586755accfcb3dfe1b289440b92f2d"],["/js/24.52c61f579ae9d5f7956e.js","d0ad48cf006b176cd402fc5b88b2bbb0"],["/js/25.52c61f579ae9d5f7956e.js","c29b8f5efac4d90507ae4627fff133e4"],["/js/26.52c61f579ae9d5f7956e.js","297004106b1c018b21eecf57ea1db283"],["/js/27.52c61f579ae9d5f7956e.js","876aa92c832695d0a310d8d8e233ac50"],["/js/28.52c61f579ae9d5f7956e.js","bde0a17ae682db296d7fa6631cfa5e9e"],["/js/29.52c61f579ae9d5f7956e.js","13083c7fc83a22584819884d9b4fbcf8"],["/js/3.52c61f579ae9d5f7956e.js","3e891c933313cce7e13be8156f5e264b"],["/js/30.52c61f579ae9d5f7956e.js","c894132c100ba4fd1b2b80d8512db15c"],["/js/31.52c61f579ae9d5f7956e.js","8231af7950750e555492955787982916"],["/js/32.52c61f579ae9d5f7956e.js","7ae173fb26ea2a334eeb380ce9271f25"],["/js/33.52c61f579ae9d5f7956e.js","fce44f3849755b43b4c0446498689b5c"],["/js/34.52c61f579ae9d5f7956e.js","b6759f667e31f36d4580f912e548cbc9"],["/js/35.52c61f579ae9d5f7956e.js","006c681cb1daeb74bd58f0ce69bfd7e4"],["/js/36.52c61f579ae9d5f7956e.js","c47fb308970a4d0891d2d16a4adfe5a9"],["/js/37.52c61f579ae9d5f7956e.js","3dd03bf790cdd329c52fc8c020a198cc"],["/js/38.52c61f579ae9d5f7956e.js","b3e564ff4040a5c92bc5d228429cef40"],["/js/39.52c61f579ae9d5f7956e.js","ac31321052f9a9792ed5e4233554ee2f"],["/js/4.52c61f579ae9d5f7956e.js","e001e93f8a221a24e5248c728daae0f4"],["/js/40.52c61f579ae9d5f7956e.js","f98d69837bf4382dbf31c277aa3e2005"],["/js/404.52c61f579ae9d5f7956e.js","edfa41aa9a541197b7a6c22226108d5b"],["/js/41.52c61f579ae9d5f7956e.js","585f163657a534fb55cdffe834b5e75f"],["/js/42.52c61f579ae9d5f7956e.js","4976540eede07f856bc4e7c2b8e6c30d"],["/js/43.52c61f579ae9d5f7956e.js","4f2ea853c3a9e3f84db1c585dac874ce"],["/js/44.52c61f579ae9d5f7956e.js","04026a5189b45889fa60ec79cd071402"],["/js/45.52c61f579ae9d5f7956e.js","3c1476910da875e2f0a9c44b3c976378"],["/js/46.52c61f579ae9d5f7956e.js","fba72606af089d1811f704286f82d168"],["/js/47.52c61f579ae9d5f7956e.js","66fcffd4efcb25fadee583007ca1d9cd"],["/js/48.52c61f579ae9d5f7956e.js","61ff6c4d88853a9daa264a4fdc0e9c1c"],["/js/49.52c61f579ae9d5f7956e.js","2d961b1c1f8448216d273173dc111da0"],["/js/5.52c61f579ae9d5f7956e.js","da3e72f4b8634e400b6825ea798d9fa2"],["/js/50.52c61f579ae9d5f7956e.js","ff1522c545873aed9183ed555d0d85f7"],["/js/51.52c61f579ae9d5f7956e.js","1e335795ce4f94e4cb811dca5bd3a387"],["/js/52.52c61f579ae9d5f7956e.js","6f48fda1a6caa5b366b19a86bf8b99a7"],["/js/53.52c61f579ae9d5f7956e.js","d11234dd301ab2a961e87fa0719c3375"],["/js/54.52c61f579ae9d5f7956e.js","6310047716ed916adbfa57d5a0d3c6d3"],["/js/55.52c61f579ae9d5f7956e.js","52a176d851ac64be99415b5b7686bbec"],["/js/56.52c61f579ae9d5f7956e.js","c9877165c6ded1ee89e53f5d2da50dad"],["/js/57.52c61f579ae9d5f7956e.js","56dc914f75bcd1d2c6b8c26826e4d40a"],["/js/58.52c61f579ae9d5f7956e.js","39b5b1adf009fed237852d6fad4d0718"],["/js/59.52c61f579ae9d5f7956e.js","1f5b84f6188dce20c3f6d7c41f4cfe75"],["/js/6.52c61f579ae9d5f7956e.js","37387cfd07306b6f3c72439ca7d2a1ca"],["/js/60.52c61f579ae9d5f7956e.js","e1580250bb482e0f9ac57ddf4be91cbe"],["/js/61.52c61f579ae9d5f7956e.js","a27679b23c7af10452e8950babc68a25"],["/js/62.52c61f579ae9d5f7956e.js","b6c64707851a3f8b76c8375118153444"],["/js/63.52c61f579ae9d5f7956e.js","69a9c15dfeaccd99cffd0e959cbc179f"],["/js/64.52c61f579ae9d5f7956e.js","81cd6dc670444a6b67d9b12d6d0e47e0"],["/js/65.52c61f579ae9d5f7956e.js","696a80b89b250cebbab1193f1e91f03e"],["/js/66.52c61f579ae9d5f7956e.js","4edfc81441d4d41304c5a8075df7efa1"],["/js/67.52c61f579ae9d5f7956e.js","bc4b4bdcc4f0968bea4f5ffd6bd5c076"],["/js/68.52c61f579ae9d5f7956e.js","1b5021dd830ba12782f705d2c125308a"],["/js/69.52c61f579ae9d5f7956e.js","c9821d645dda8096fe6b945bbb718c13"],["/js/7.52c61f579ae9d5f7956e.js","e35158717f18ce34c8785392f6a0dc7f"],["/js/70.52c61f579ae9d5f7956e.js","47f63b98b79d89f8268ae203e6052139"],["/js/71.52c61f579ae9d5f7956e.js","9950a21b78d118a6481eebf49a61860a"],["/js/72.52c61f579ae9d5f7956e.js","d80592bfb83a7ae345ef20d74d857413"],["/js/73.52c61f579ae9d5f7956e.js","309bdd035333a492b1866decf046c86c"],["/js/74.52c61f579ae9d5f7956e.js","8a0fb8027c46aa70861e7caee562dea4"],["/js/75.52c61f579ae9d5f7956e.js","9fe049b68969ce966d1d145d87f63dee"],["/js/76.52c61f579ae9d5f7956e.js","31b69334cdca41b2decb3ea4260c4646"],["/js/77.52c61f579ae9d5f7956e.js","db0bf9958cf49fcf71bc9f885b06f530"],["/js/78.52c61f579ae9d5f7956e.js","b330f1f18b1d00674027a8aff177550e"],["/js/79.52c61f579ae9d5f7956e.js","e85ea647102819484f92f0ce72c1d510"],["/js/8.52c61f579ae9d5f7956e.js","ed603b588eca3410c44dd2d0c24b7149"],["/js/80.52c61f579ae9d5f7956e.js","c45f95600a03c523f6ae6d3bd2343865"],["/js/81.52c61f579ae9d5f7956e.js","bcae35167145fb27474ad8e200fa78d2"],["/js/82.52c61f579ae9d5f7956e.js","d64a004fe490de09a5a1c17122106623"],["/js/83.52c61f579ae9d5f7956e.js","64c8f30a6ec1e2dfa1c510962285df7d"],["/js/84.52c61f579ae9d5f7956e.js","3f21e1cf39be410630b7544480b8124f"],["/js/85.52c61f579ae9d5f7956e.js","38ae99d8c78ca3df30f16566c97c4f3c"],["/js/86.52c61f579ae9d5f7956e.js","72a22a7d88ded6c06b100e4adeed557b"],["/js/87.52c61f579ae9d5f7956e.js","46125767087931c03f87426d8ae2001a"],["/js/88.52c61f579ae9d5f7956e.js","9e24e30a674973844dc5430bddfe1cbc"],["/js/89.52c61f579ae9d5f7956e.js","115b7c76a8de01dc6fccf198ab2cd905"],["/js/9.52c61f579ae9d5f7956e.js","73b7b5aefc337ad409df1ad18445d727"],["/js/90.52c61f579ae9d5f7956e.js","285fdd5d1e417137654575308922bff5"],["/js/91.52c61f579ae9d5f7956e.js","40aa04cba93c51beadb3badbc6287f7b"],["/js/92.52c61f579ae9d5f7956e.js","0d90196168aba2f0282758047de24d63"],["/js/93.52c61f579ae9d5f7956e.js","d97de08bc9b3a1310d208ad374dfa940"],["/js/94.52c61f579ae9d5f7956e.js","7f5b1c1cbfc758165d70a14cd3b111c3"],["/js/95.52c61f579ae9d5f7956e.js","20267aba7efa2afdc5ff59b416752999"],["/js/96.52c61f579ae9d5f7956e.js","c78fb09353bee6ff9d193daa2c51f4dc"],["/js/AccountSignupModal.52c61f579ae9d5f7956e.js","af9e05561950f82f397990e0a884c931"],["/js/ResetPasswordModal.52c61f579ae9d5f7956e.js","c2af5892aebcdee64caf669b94276a90"],["/js/account-info.52c61f579ae9d5f7956e.js","ee7903fadcb26f48d051a2ccb9d0b73d"],["/js/account.52c61f579ae9d5f7956e.js","962b23a9c9bde1f76a39f2d02aee002d"],["/js/contract.52c61f579ae9d5f7956e.js","b4dc4eeaebc3636c50c8cd688f8be0ba"],["/js/default~modals~mt5.52c61f579ae9d5f7956e.js","88e1f7381dc15c20c5d30099a66f8ce1"],["/js/main.52c61f579ae9d5f7956e.js","51e98cdcba727390ba850b88484c60d9"],["/js/modals.52c61f579ae9d5f7956e.js","920c81cd4e2b3b0a835a82232b38560d"],["/js/mt5.52c61f579ae9d5f7956e.js","d7ac89e69292e150a0b2348573723ce8"],["/js/notification-messages.52c61f579ae9d5f7956e.js","8185977c3de2c02c02d00bf4df654019"],["/js/push-notification.52c61f579ae9d5f7956e.js","f349ab6237b36d8f9f58e67bb17691aa"],["/js/reports.52c61f579ae9d5f7956e.js","a02a52da5ed84ee1fd0a518082927718"],["/js/screen-small.52c61f579ae9d5f7956e.js","62ec4d2d691c1dd78265e065f524959f"],["/js/settings-chart.52c61f579ae9d5f7956e.js","013afe2f64c5988f946d4c20fd74415a"],["/js/settings-language.52c61f579ae9d5f7956e.js","d8017d5c7a1473b3ba26db994b58f8e9"],["/js/settings-theme.52c61f579ae9d5f7956e.js","668cd7356abac1563d5c38b94243928c"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.52c61f579ae9d5f7956e.js","c53d433a7ef2c137c91970be592b67cc"],["/js/two-month-picker.52c61f579ae9d5f7956e.js","3e8fed0c9faa341b6c0d0ee3d59a3751"],["/js/vendors~smart_chart.52c61f579ae9d5f7956e.js","ab5700e46d301e3813908f12d16d0ab4"],["/js/work-in-progress.52c61f579ae9d5f7956e.js","b54b049ba28a324a4294153ea044e86f"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







