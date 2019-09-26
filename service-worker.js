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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","82d7c05d392071b4b64f71e038564bb1"],["/css/modals.css","62e7597ca1172b727f92bf4019a051f6"],["/css/mt5.css","9fa787fcceef267e0dcdf397e8e39271"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","197cce4a423bf3902db1ecec82ce12e6"],["/js/0.6e31bc51db8f8b575ece.js","f7ebe0226c6ccd7787424683cdb00658"],["/js/1.6e31bc51db8f8b575ece.js","fcb0068d6998f297e23b8435dfcf5195"],["/js/10.6e31bc51db8f8b575ece.js","96ab72eaf91724e037a0a31143b60172"],["/js/11.6e31bc51db8f8b575ece.js","38cd5d54a35472ab3be2ca1549de0354"],["/js/12.6e31bc51db8f8b575ece.js","20f4b99d6064b39cececfadce0ce4642"],["/js/13.6e31bc51db8f8b575ece.js","d061d69056e1c8669d6565e3856c845b"],["/js/14.6e31bc51db8f8b575ece.js","033016d45ef4632096d28cebd1c7887e"],["/js/15.6e31bc51db8f8b575ece.js","fa939bce3fbe1563ae3262c74e808280"],["/js/16.6e31bc51db8f8b575ece.js","9d861876c1bc7c249d1f2695b9d5ba80"],["/js/17.6e31bc51db8f8b575ece.js","1ed72d9c07d76f86d39dd277feb3d5c9"],["/js/18.6e31bc51db8f8b575ece.js","334e50526aca2ff33ab731ae2b937d31"],["/js/19.6e31bc51db8f8b575ece.js","2a7fa30d90564ce9ffda34e0c5f0a2c5"],["/js/2.6e31bc51db8f8b575ece.js","25ba5dc2468702c2baeffe1a5c6dd16b"],["/js/20.6e31bc51db8f8b575ece.js","1f6104b0aa77798b9a08708ff5ecde3a"],["/js/21.6e31bc51db8f8b575ece.js","8dfa1cb785bebdee3626416f07c03c4e"],["/js/22.6e31bc51db8f8b575ece.js","4b194849f55fb08fdc1cc9066411c9f2"],["/js/23.6e31bc51db8f8b575ece.js","2835826442c5b50729fbc49034d9d39a"],["/js/24.6e31bc51db8f8b575ece.js","bfcdb7844e38b12859e7868324f86021"],["/js/25.6e31bc51db8f8b575ece.js","e3e91afae8734dfe1568cde2328aca87"],["/js/26.6e31bc51db8f8b575ece.js","d487f8d438f0f48adc7a63645c724074"],["/js/27.6e31bc51db8f8b575ece.js","71a96bdbd8c2caf6dab81936721b878f"],["/js/28.6e31bc51db8f8b575ece.js","ec50dbee990efc0c668bfc3f6e35f2e1"],["/js/29.6e31bc51db8f8b575ece.js","44be4a617b0aeabb9a41271b248dc68d"],["/js/3.6e31bc51db8f8b575ece.js","83f230f65ad50ad6975e9808fded5980"],["/js/30.6e31bc51db8f8b575ece.js","664e6621c751fca1b96bce2bdd4381d7"],["/js/31.6e31bc51db8f8b575ece.js","a886ee68fa6c7f6db0a70d39f9f3f30d"],["/js/32.6e31bc51db8f8b575ece.js","446f9f76245357515fe906eaf6979b86"],["/js/33.6e31bc51db8f8b575ece.js","3484aee3ae4e9bb28fe98adda724e6cc"],["/js/34.6e31bc51db8f8b575ece.js","dfeade43dff3a499119e7f279989c8f0"],["/js/35.6e31bc51db8f8b575ece.js","7d22ac097c6348b7999f2c82ec97db18"],["/js/36.6e31bc51db8f8b575ece.js","55ac10be33b60c103a2c82b67f5cf789"],["/js/37.6e31bc51db8f8b575ece.js","2ff7efe5902dec6bafde4c46ef8b4607"],["/js/38.6e31bc51db8f8b575ece.js","3921fed2f405fac056ff10dd21625826"],["/js/39.6e31bc51db8f8b575ece.js","b59046489a1d468da86d55263c8f4763"],["/js/4.6e31bc51db8f8b575ece.js","378371649a3f3d00c3ec3981d3e352fa"],["/js/40.6e31bc51db8f8b575ece.js","37af8f2b2d66641c5547f2a64bfe6c36"],["/js/404.6e31bc51db8f8b575ece.js","d12393e72500eed0a245f8769407622d"],["/js/41.6e31bc51db8f8b575ece.js","f627555bc4cf713c1ab7665963c79d6d"],["/js/42.6e31bc51db8f8b575ece.js","5c3bde48a64020259cc6a05731b8dca4"],["/js/43.6e31bc51db8f8b575ece.js","fb1390465f1e5cfa3177289779fa4f65"],["/js/44.6e31bc51db8f8b575ece.js","ba0f383acbdbf0291fea856f97057c32"],["/js/45.6e31bc51db8f8b575ece.js","23dcfe586222334b2d429b64f50b003b"],["/js/46.6e31bc51db8f8b575ece.js","06d56d2918e6d365bb68c48f8f6b4c4d"],["/js/47.6e31bc51db8f8b575ece.js","5df70a43f57715dcf99a25a4fd378d0c"],["/js/48.6e31bc51db8f8b575ece.js","12aac6cf51b95cf7fa203a5c6f21ad4f"],["/js/49.6e31bc51db8f8b575ece.js","0f79d6d932b0372641fd185c1e72ffd3"],["/js/5.6e31bc51db8f8b575ece.js","60f4c068f108944611dfe1906245f862"],["/js/50.6e31bc51db8f8b575ece.js","cf3e3a86d3431d5e9964fcdb69efbb67"],["/js/51.6e31bc51db8f8b575ece.js","a084a5dd0acc228d6d0f86de23b48750"],["/js/52.6e31bc51db8f8b575ece.js","c6fec08680e9e5c4d5b920f3aff43155"],["/js/53.6e31bc51db8f8b575ece.js","64be2ee1426ad4427fa1bdbd04c23363"],["/js/54.6e31bc51db8f8b575ece.js","c79ae5dc0cee5c2d4e341063bf14b384"],["/js/55.6e31bc51db8f8b575ece.js","15bc4214948e209b0b3b236aecced536"],["/js/56.6e31bc51db8f8b575ece.js","6d8f52331a2a886d5ca3c5c43be5f5b5"],["/js/57.6e31bc51db8f8b575ece.js","13a2777b6be4e61bcea93265bf81fe3e"],["/js/58.6e31bc51db8f8b575ece.js","4edcfd1985f7f750de92bc50259f8673"],["/js/59.6e31bc51db8f8b575ece.js","1232f3f1bfd834cfcafeb47d32aac6e9"],["/js/6.6e31bc51db8f8b575ece.js","02d9095d85f8c44ba004c8d5d122654f"],["/js/60.6e31bc51db8f8b575ece.js","aa0aceb5a26d85b6bee0b8db0995fe66"],["/js/61.6e31bc51db8f8b575ece.js","55a3a061cf1ded81d7721a5e31661bd7"],["/js/62.6e31bc51db8f8b575ece.js","e9de9051d3809e9034f3d948d087c8d9"],["/js/63.6e31bc51db8f8b575ece.js","5f0dc47ddb678d53c400db5fee3718cf"],["/js/64.6e31bc51db8f8b575ece.js","c26d9c54eebb4bd78c8e957524b6e223"],["/js/65.6e31bc51db8f8b575ece.js","53c304c4c78df214333e5a05617b1b1d"],["/js/66.6e31bc51db8f8b575ece.js","5b17d668159173a23401be811c5855a9"],["/js/67.6e31bc51db8f8b575ece.js","31c630d98d514902f366b31af257817e"],["/js/68.6e31bc51db8f8b575ece.js","4d8af6d2a81a7172488db89d447e007a"],["/js/69.6e31bc51db8f8b575ece.js","f05c2697f5a10b037ea78f20239bf2be"],["/js/7.6e31bc51db8f8b575ece.js","851bbf7ea985b4fca24cfcd340708b91"],["/js/70.6e31bc51db8f8b575ece.js","8ce3dbd77ae5e75567369b306b638ce6"],["/js/71.6e31bc51db8f8b575ece.js","cb7faedd9a91242d58026f19b4c0af50"],["/js/72.6e31bc51db8f8b575ece.js","439818c55a9c305beb9332faed8d757b"],["/js/73.6e31bc51db8f8b575ece.js","4a8fa694b2e3f30a4d58c51d089cb470"],["/js/74.6e31bc51db8f8b575ece.js","40e09230770d04f742b8005d2c2f0540"],["/js/75.6e31bc51db8f8b575ece.js","e3278994c831184ef957acaa64ae75d1"],["/js/76.6e31bc51db8f8b575ece.js","e4fe75502d7045723d75658b47db0281"],["/js/77.6e31bc51db8f8b575ece.js","2595770e16570cb6bc92f8c954079ad6"],["/js/78.6e31bc51db8f8b575ece.js","5a405e3bd9d31f638827ced4b37cc736"],["/js/79.6e31bc51db8f8b575ece.js","8dfffcc1a22192849cc84e0491dbbc96"],["/js/8.6e31bc51db8f8b575ece.js","3ddde0d35fc323eb8a078d2dadad8fe5"],["/js/80.6e31bc51db8f8b575ece.js","e832c811b02c9ee17e113ffc180c48b5"],["/js/81.6e31bc51db8f8b575ece.js","1696b524605b23bcca1963255351ffd8"],["/js/82.6e31bc51db8f8b575ece.js","cb61373c4bc4f2336485eceaac34c097"],["/js/83.6e31bc51db8f8b575ece.js","fc17d0c5d85e5aa34de31d124acaf259"],["/js/84.6e31bc51db8f8b575ece.js","40213afbb04790abf268427eef0a2747"],["/js/85.6e31bc51db8f8b575ece.js","9e655538a6ca2a951f54e158927ab0f8"],["/js/86.6e31bc51db8f8b575ece.js","59680d621941763bcf152c52cb0e5985"],["/js/87.6e31bc51db8f8b575ece.js","f05aca9e1562ccac41506b52f143061f"],["/js/88.6e31bc51db8f8b575ece.js","a3b3972ef0eca10152ceb3dbce9a02a7"],["/js/89.6e31bc51db8f8b575ece.js","bf68b9c45a646f45d6738c85ef2c1b00"],["/js/9.6e31bc51db8f8b575ece.js","4588196598f9ee68fe473a97f6d18f0a"],["/js/90.6e31bc51db8f8b575ece.js","481bcec343f47fa116a5d25f931338d7"],["/js/91.6e31bc51db8f8b575ece.js","6cd197da82307d728af68975185c1397"],["/js/AccountSignupModal.6e31bc51db8f8b575ece.js","5a3c2e493fa2fdc7e61a63cc53e1d3de"],["/js/ResetPasswordModal.6e31bc51db8f8b575ece.js","2ec2052da36971aac7361da3581d6524"],["/js/account-info.6e31bc51db8f8b575ece.js","da1bf2651087e0d7e6fabf53de29a9ad"],["/js/account.6e31bc51db8f8b575ece.js","9650e41544ac68fd9ad2f3d7c8a10a5a"],["/js/contract.6e31bc51db8f8b575ece.js","838c6a4cd957c48570fb7ba08f325af2"],["/js/modals.6e31bc51db8f8b575ece.js","a6ceb4191126ef9f715853ff1802fba4"],["/js/mt5.6e31bc51db8f8b575ece.js","f7657053250a7b723bd5abede8ea1310"],["/js/notification-messages.6e31bc51db8f8b575ece.js","b2147d909c5419a4e581db0d9e8e737f"],["/js/push-notification.6e31bc51db8f8b575ece.js","d84e3e09e4f8be661fdce8dc11d60d88"],["/js/reports.6e31bc51db8f8b575ece.js","9c8754352f761ef934a0ce1e46272b18"],["/js/screen-small.6e31bc51db8f8b575ece.js","1aab3e6d621b7f2becaf7423a88131d8"],["/js/settings-chart.6e31bc51db8f8b575ece.js","c4554a0924cc72c00b0f1426683be0d9"],["/js/settings-language.6e31bc51db8f8b575ece.js","75d9e8675d8c6c063c285a250ab480b5"],["/js/settings-theme.6e31bc51db8f8b575ece.js","66b3276a7701b785140b3a858c63f8bc"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.6e31bc51db8f8b575ece.js","d3fd635d349fd4d907e94d6b6058bec4"],["/js/two-month-picker.6e31bc51db8f8b575ece.js","0835eabb1205e4b47a851295532f2e4f"],["/js/vendors~main.6e31bc51db8f8b575ece.js","2b0b2094e8328f9f4e65d55046da8e68"],["/js/vendors~smart_chart.6e31bc51db8f8b575ece.js","4afe71d368ec683e54ac58c1635f143e"],["/js/work-in-progress.6e31bc51db8f8b575ece.js","65c043b33c907969614c80e4ba734009"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







