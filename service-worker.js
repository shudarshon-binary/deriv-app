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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","c34882250b0d7870a955a76bdefcadbe"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","855fed5773feaccee1271023e4da1fbd"],["/js/0.37e82fce15d838e79cd4.js","95ce2ed508c852d0a2e4d9ce1a3b06ff"],["/js/1.37e82fce15d838e79cd4.js","2af9b439071ffdd5a160c2fdcac618d0"],["/js/10.37e82fce15d838e79cd4.js","4fc2f97bc9eb17cc1c0a8cc0d345466e"],["/js/11.37e82fce15d838e79cd4.js","b11ea8aea847916aecaece5b3772215d"],["/js/12.37e82fce15d838e79cd4.js","6cbd1cecee788f20d575ff57433c2cf5"],["/js/13.37e82fce15d838e79cd4.js","b8a79d6c64fa437d758be82c9612caea"],["/js/14.37e82fce15d838e79cd4.js","1bc5115747e38234bc85227307ccd8e7"],["/js/15.37e82fce15d838e79cd4.js","52d5355811be044f0e33ae5f5ebd1834"],["/js/16.37e82fce15d838e79cd4.js","7cdd4c93cfa2225963ef8da6bee00d74"],["/js/17.37e82fce15d838e79cd4.js","7b2089a337a36d37e5e97b29dd1854af"],["/js/18.37e82fce15d838e79cd4.js","7abdb237840e96f6b12bb3760d92a105"],["/js/19.37e82fce15d838e79cd4.js","8d262d2fde42f72371afce93505e5ad8"],["/js/2.37e82fce15d838e79cd4.js","f556660b586b01efd80837ba408ab273"],["/js/20.37e82fce15d838e79cd4.js","7bbcfbe503e068ef4d16d7b8a6d46949"],["/js/21.37e82fce15d838e79cd4.js","1ff6374b7d0b61dcf11507c5f76332bb"],["/js/22.37e82fce15d838e79cd4.js","cb9a5cec7b845222638fa9969c70ffc5"],["/js/23.37e82fce15d838e79cd4.js","0d654a53a2759366911b8c47817d2979"],["/js/24.37e82fce15d838e79cd4.js","87f790b8a85278ed18e7ddfc4fac8294"],["/js/25.37e82fce15d838e79cd4.js","4ddb3f07f482d8b5d9753cd5b9f1acce"],["/js/26.37e82fce15d838e79cd4.js","a63b1377b9ec63dd2875e1f5e76d5b13"],["/js/27.37e82fce15d838e79cd4.js","3f83dacf44ce052771df5912ba7d561b"],["/js/28.37e82fce15d838e79cd4.js","6488c1dbbff243043356dc0334b80077"],["/js/29.37e82fce15d838e79cd4.js","e9c0af2e8cb70301c8eeda2074878290"],["/js/3.37e82fce15d838e79cd4.js","2930719c7e317cae068798b6e0f73cc1"],["/js/30.37e82fce15d838e79cd4.js","d2c0cd502cd143a3bdfbbf76871c65f5"],["/js/31.37e82fce15d838e79cd4.js","047cd12c91d074c001b1e7742bb5d2f4"],["/js/32.37e82fce15d838e79cd4.js","8108fd884d0851217d8b5d2ab881d007"],["/js/33.37e82fce15d838e79cd4.js","5bb1bef189cc30f1db166b5635d0dd49"],["/js/34.37e82fce15d838e79cd4.js","02fc18b6075631b721ee6f74102241e3"],["/js/35.37e82fce15d838e79cd4.js","9675fded34169d927ae57c5da598c807"],["/js/36.37e82fce15d838e79cd4.js","bd69a0f881e30e9af15ce7e4898b4586"],["/js/37.37e82fce15d838e79cd4.js","de80cb50e528c8a59f0e126f37f16b5f"],["/js/38.37e82fce15d838e79cd4.js","35dabd30a4279754fdff0d0604dcb980"],["/js/39.37e82fce15d838e79cd4.js","79f47850f95982a11f0dc206beb7ed60"],["/js/4.37e82fce15d838e79cd4.js","1773f2d3e11c83e0387af5c63ea376b6"],["/js/40.37e82fce15d838e79cd4.js","0ad24f50fecc223c94108892b8e65f9d"],["/js/404.37e82fce15d838e79cd4.js","dc1479c51221f231e4ff568ed6f957f0"],["/js/41.37e82fce15d838e79cd4.js","1f796dbbbd093a0f778aee2f21ff605e"],["/js/42.37e82fce15d838e79cd4.js","efaa337fae6408ee15168f74a85b5ec0"],["/js/43.37e82fce15d838e79cd4.js","b34c8ddcefa0e7d2ecc88cf5dd04f168"],["/js/44.37e82fce15d838e79cd4.js","715863080ce5b808e92f6320e557ca7f"],["/js/45.37e82fce15d838e79cd4.js","302e5d31c152ac1036db5f5e8ec1c300"],["/js/46.37e82fce15d838e79cd4.js","3a9ce0f27a0d118c17cc291b7b985d09"],["/js/47.37e82fce15d838e79cd4.js","17873224477d64113a0d07f050c96865"],["/js/48.37e82fce15d838e79cd4.js","fdc177ff79463971e3e66544189f6351"],["/js/49.37e82fce15d838e79cd4.js","c70fd22376ee4bcf1a351fb155070e77"],["/js/5.37e82fce15d838e79cd4.js","02b6429a4a1b8ff305f5a6ca97e1a681"],["/js/50.37e82fce15d838e79cd4.js","68850c9de2ff13fb04fca1e8499b328e"],["/js/51.37e82fce15d838e79cd4.js","c10e946d4e2b402f1ec696cac3451acf"],["/js/52.37e82fce15d838e79cd4.js","975fb4dfa5c2557ab122bfc1d0f31a27"],["/js/53.37e82fce15d838e79cd4.js","1eb9e02f18077bdc6116a6cfdc58f81e"],["/js/54.37e82fce15d838e79cd4.js","3f3a1cfdf9939f6f93a701b38d104efc"],["/js/55.37e82fce15d838e79cd4.js","7a6ecf844edb91c0b512084bbfd17781"],["/js/56.37e82fce15d838e79cd4.js","386445f0eaeeb2cd325b20ffb0d14fc7"],["/js/57.37e82fce15d838e79cd4.js","6d857eb3032cf069e6aeaef64c809ac7"],["/js/58.37e82fce15d838e79cd4.js","30bc15b7a9ca08d2d0c611da548fa7d6"],["/js/59.37e82fce15d838e79cd4.js","c458a0525f0e43a3410dd98a0b607f8d"],["/js/6.37e82fce15d838e79cd4.js","85831c89c9081a402a65476440803894"],["/js/60.37e82fce15d838e79cd4.js","7acee6d807723c1a5d417cf38929813d"],["/js/61.37e82fce15d838e79cd4.js","acae3d7fb5c21dea621b36bde99f92a0"],["/js/62.37e82fce15d838e79cd4.js","9ce80b2bdf50f3e0d0b6a4fb2c428b8c"],["/js/63.37e82fce15d838e79cd4.js","9f9f0292dd6f1ec8b04cc223a2f1c1ee"],["/js/64.37e82fce15d838e79cd4.js","57e02b1e8614487a609838a8c35210f4"],["/js/65.37e82fce15d838e79cd4.js","a6315b09fee33a080bf822a97b732e41"],["/js/66.37e82fce15d838e79cd4.js","ab50804a4e414c6b7c2a5291bd78d6a6"],["/js/67.37e82fce15d838e79cd4.js","491d176b6398dd0c32b0546a153915d4"],["/js/68.37e82fce15d838e79cd4.js","84e201ccb402f1ddf6158eb7a1449b08"],["/js/69.37e82fce15d838e79cd4.js","9bb5bcaeffec656e79e37cd4adccd783"],["/js/7.37e82fce15d838e79cd4.js","e21b6c7ae35979905f73d729fd3ee901"],["/js/70.37e82fce15d838e79cd4.js","ae9e43c8302e6940cfeca1f49adf67cc"],["/js/71.37e82fce15d838e79cd4.js","30db0042e390eb31061ee41b946b3a5b"],["/js/8.37e82fce15d838e79cd4.js","e856bb6de7d1500095aa2eaa3513ad8f"],["/js/9.37e82fce15d838e79cd4.js","cf5912b8f17668a176c02b14d5a9501a"],["/js/AccountSignupModal.37e82fce15d838e79cd4.js","03d79f20918a7846ed51b29ac6123ddb"],["/js/account-info.37e82fce15d838e79cd4.js","f0227e0c76fe0f7aa121b618525e2432"],["/js/contract.37e82fce15d838e79cd4.js","9e2785089551f242df7bef9cd97d7c84"],["/js/default~open_position~1833eefb.37e82fce15d838e79cd4.js","876c4e47a84856ac6eae74bd0b8e4dae"],["/js/digits.37e82fce15d838e79cd4.js","e43a53e6614dba85dd90fa1e90b4eee9"],["/js/info-box.37e82fce15d838e79cd4.js","59561efc06ccf3c7787a2064a67b88eb"],["/js/main.37e82fce15d838e79cd4.js","be61cac0a68bc4b9781021c0453476dc"],["/js/modals.37e82fce15d838e79cd4.js","4f8601306a5a815df1aad373c4dbc704"],["/js/notification-messages.37e82fce15d838e79cd4.js","5bef6f3416591aab6a266b3d5ec4e242"],["/js/open_positions.37e82fce15d838e79cd4.js","ab10ed2b9ec9406573d010943eb9f160"],["/js/profit_table.37e82fce15d838e79cd4.js","9bdc25c983d43bd76895a80f5e098d5a"],["/js/push-notification.37e82fce15d838e79cd4.js","3902e456a37bfa9bc3feed2bc0b33834"],["/js/reports.37e82fce15d838e79cd4.js","01f13f905b8787e9d5ac8a021b4316cb"],["/js/screen-small.37e82fce15d838e79cd4.js","f2e691e3d8935d8677470b7c49e2c2eb"],["/js/settings-chart.37e82fce15d838e79cd4.js","4321d2ca1acd9459551745a49c00e01e"],["/js/settings-language.37e82fce15d838e79cd4.js","2c44ae9eeec88a06944bfbe5a8ac33a3"],["/js/settings-theme.37e82fce15d838e79cd4.js","b08bf75878467bfed8dc7f64ee2a9d6d"],["/js/smart_chart.37e82fce15d838e79cd4.js","f95204f6fe30d30ba4f95c1b157622a9"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.37e82fce15d838e79cd4.js","3466e07f5abde5680e5b575200350835"],["/js/toggle-menu-drawer.37e82fce15d838e79cd4.js","07d8867f00b554f5ab0a0d13fa5952d2"],["/js/two-month-picker.37e82fce15d838e79cd4.js","95096271071fe34f4acedce49bcd9b37"],["/js/vendors~AccountSignupModal.37e82fce15d838e79cd4.js","b25434ca0e9dbd4a3ad0f00516a03d25"],["/js/vendors~main.37e82fce15d838e79cd4.js","a796aebc7f149421a3928471d10e5372"],["/js/vendors~open_position~7c650be5.37e82fce15d838e79cd4.js","cb5ddbce8bea78dcea3b298bbb8fe8fe"],["/js/vendors~smart_chart.37e82fce15d838e79cd4.js","684c6603563ff63d51df4f2d6512930a"],["/js/work-in-progress.37e82fce15d838e79cd4.js","276b2c5233ca8020316333f5424188b4"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







