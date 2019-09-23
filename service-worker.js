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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","5b27732c6acd66f9087b26930992bf0a"],["/css/account.css","9b31754fe2f321e55c0059f2f129cf59"],["/css/app.css","3acfe93cd957716fd5d70f02d428a386"],["/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","8f3e8f4347ad0978fe7c251726a04b89"],["/js/0.949692efce4f1a4dfdf9.js","1d848428d527f0673263c01ab79782b3"],["/js/1.949692efce4f1a4dfdf9.js","bca900760868bdb5a5c689831b052732"],["/js/10.949692efce4f1a4dfdf9.js","74b83a4ab8ca83734c5ccd47ac0b3271"],["/js/11.949692efce4f1a4dfdf9.js","632de3786c6b5a34bee42349ce7f5cdb"],["/js/12.949692efce4f1a4dfdf9.js","e387ae74c6cee9f77fbe78f19117eb07"],["/js/13.949692efce4f1a4dfdf9.js","ab3e8541fc59972b8462fffe1a0aaa8f"],["/js/14.949692efce4f1a4dfdf9.js","5751a3857f5ed23c19fa7f21825b8b31"],["/js/15.949692efce4f1a4dfdf9.js","bc464a2a3b9583d09853457af0dd2a5c"],["/js/16.949692efce4f1a4dfdf9.js","bce7950f019ed6bfc6ac03531eb1d9bf"],["/js/17.949692efce4f1a4dfdf9.js","59b154c2e8cbdfcc650b7c7cc5d4c3a8"],["/js/18.949692efce4f1a4dfdf9.js","7194362bbe061f524fd044004daa5885"],["/js/19.949692efce4f1a4dfdf9.js","b992e4f6d37245331a80e073d28634ec"],["/js/2.949692efce4f1a4dfdf9.js","aaafe09d0d24cfb1405e6c76a6df17bd"],["/js/20.949692efce4f1a4dfdf9.js","b1d16c3f961d78ad8a6e065d4ca14aa5"],["/js/21.949692efce4f1a4dfdf9.js","dd2edf4e43be443eb42ae4d6cf25a32d"],["/js/22.949692efce4f1a4dfdf9.js","5184dea344358146f441c34fb2752858"],["/js/23.949692efce4f1a4dfdf9.js","5ed818b52420bdaacf68db1f0c09ce0f"],["/js/24.949692efce4f1a4dfdf9.js","242f5ca714d9b55a47bf3faf0a7ee890"],["/js/25.949692efce4f1a4dfdf9.js","36ca8b161043205763d9af2ad67be748"],["/js/26.949692efce4f1a4dfdf9.js","7203ccc0a9466e5adb28800256ff282d"],["/js/27.949692efce4f1a4dfdf9.js","b083fbf60df4f1dd956bbeabf2fa63ac"],["/js/28.949692efce4f1a4dfdf9.js","3526c06d02d1cbfa35f124d5632d0dd3"],["/js/29.949692efce4f1a4dfdf9.js","0ea0212f578ce6519dd4a2d1918f3901"],["/js/3.949692efce4f1a4dfdf9.js","2e7133db745842790fc8527be8451e0a"],["/js/30.949692efce4f1a4dfdf9.js","b8186e91b0a08e3675f35fc33b4333d1"],["/js/31.949692efce4f1a4dfdf9.js","88dce23ba1237ee0dd0e2f76f8a4aa16"],["/js/32.949692efce4f1a4dfdf9.js","e8b80d98fdf4eb20872056b99a9c79e0"],["/js/33.949692efce4f1a4dfdf9.js","d5928ad0f2c3c68271ef7d562de4029b"],["/js/34.949692efce4f1a4dfdf9.js","6a5b5f64eea92d0cc3f7b742a44ade7e"],["/js/35.949692efce4f1a4dfdf9.js","16f3bffbb75951237bf1006dd0da5b06"],["/js/36.949692efce4f1a4dfdf9.js","594ffb6218a03bb83ecf8cd89bc87a68"],["/js/37.949692efce4f1a4dfdf9.js","2578031d332a76dcd79baa003e3a5f07"],["/js/38.949692efce4f1a4dfdf9.js","b139b23d8bcb21511443811536a06209"],["/js/39.949692efce4f1a4dfdf9.js","63f946ad7fab0ada3ee71a700da7f5a3"],["/js/4.949692efce4f1a4dfdf9.js","d0355ff13cad9d7ffb568e26c5c9c522"],["/js/40.949692efce4f1a4dfdf9.js","bd5f56c8250c871949d022afd31c6a0b"],["/js/404.949692efce4f1a4dfdf9.js","bab8a98ed80cabd1a371506ffd958a3a"],["/js/41.949692efce4f1a4dfdf9.js","4878ca752f593bb40e5d6659933fe4d8"],["/js/42.949692efce4f1a4dfdf9.js","9786b27313cb2936b35815b5c43f7f5f"],["/js/43.949692efce4f1a4dfdf9.js","93a12e775d742ec2ee659a70e8418632"],["/js/44.949692efce4f1a4dfdf9.js","6e6b91399457c880119c15e5566ee7cc"],["/js/45.949692efce4f1a4dfdf9.js","92a214a5a89a9f8f9cefd1a48ed7571f"],["/js/46.949692efce4f1a4dfdf9.js","c74553e9dc9b229d3c2f78e2eb0b213d"],["/js/47.949692efce4f1a4dfdf9.js","b01074f60cb9814b7c45d1500d1f2afd"],["/js/48.949692efce4f1a4dfdf9.js","4eaf2e902eb4cd2c60d219194ca56636"],["/js/49.949692efce4f1a4dfdf9.js","1fb6f7ccf4b08616d33331f9b2653eb7"],["/js/5.949692efce4f1a4dfdf9.js","614bb86938c136317c9476c26dcfcb29"],["/js/50.949692efce4f1a4dfdf9.js","95a36708469ab4c9b232b2e5b4f6efd4"],["/js/51.949692efce4f1a4dfdf9.js","1d955ba45b5cb4b4f8911f4154cb28c4"],["/js/52.949692efce4f1a4dfdf9.js","e85d8ca52596db6ff24150b6c1a859f5"],["/js/53.949692efce4f1a4dfdf9.js","9019bbb4125b9084390c4537a282b40f"],["/js/54.949692efce4f1a4dfdf9.js","8c770ca2b6d9de7abb2c1000cf630804"],["/js/55.949692efce4f1a4dfdf9.js","ca81ecf40765948491bf438c2cccbb2c"],["/js/56.949692efce4f1a4dfdf9.js","ed58ecec12c34f8ad72d4d8fc7d2291c"],["/js/57.949692efce4f1a4dfdf9.js","7d3d17a16938b4557e6c6d44e5f0e2ab"],["/js/58.949692efce4f1a4dfdf9.js","3bff92e69a6dc0f4a2bc20256b488feb"],["/js/59.949692efce4f1a4dfdf9.js","232732ce564d9ce6ff349f41fd3c88cc"],["/js/6.949692efce4f1a4dfdf9.js","928e3e40003b8e01c1f319845a458207"],["/js/60.949692efce4f1a4dfdf9.js","cad838e406b93ee9f96f9fd5f48a3f47"],["/js/61.949692efce4f1a4dfdf9.js","cdca31a07551c35872b1ffc130348ccd"],["/js/62.949692efce4f1a4dfdf9.js","936853216f44a94022fc38d56c3c100a"],["/js/63.949692efce4f1a4dfdf9.js","a9106c96e3852513dd86d0d4fac1832e"],["/js/64.949692efce4f1a4dfdf9.js","fc4090f7792c4d502673c270989b588e"],["/js/65.949692efce4f1a4dfdf9.js","e4d444a4c45ce577462cb0889369283d"],["/js/66.949692efce4f1a4dfdf9.js","01a1445361273b30586d47c44253a8d0"],["/js/67.949692efce4f1a4dfdf9.js","18a4a67b3438bdc7665def7cbd171120"],["/js/68.949692efce4f1a4dfdf9.js","1ad7d959ce98e3e85f35b6d54ba6fea2"],["/js/69.949692efce4f1a4dfdf9.js","ecc65361fcd385f6e8c2fb5b86c37ad0"],["/js/7.949692efce4f1a4dfdf9.js","530a7cca9517582a791dd6afd10e9520"],["/js/70.949692efce4f1a4dfdf9.js","0ed4a5db2086e150790e06040df9a036"],["/js/71.949692efce4f1a4dfdf9.js","a4b9485533a8953ad408e6847ea0005c"],["/js/72.949692efce4f1a4dfdf9.js","195bce6ff61d2acdc23bd2b9490b5915"],["/js/73.949692efce4f1a4dfdf9.js","c56e60cc6023313be3d769b8d241b07f"],["/js/74.949692efce4f1a4dfdf9.js","cb65fb832e213a9fca0c1bb80051a59f"],["/js/75.949692efce4f1a4dfdf9.js","5a2f402dafdb00a56db17b1b865efec0"],["/js/76.949692efce4f1a4dfdf9.js","518f6d7c2f939c584f157ac487e7bd46"],["/js/77.949692efce4f1a4dfdf9.js","09514e7e829aba9c08f43bec6c2d8921"],["/js/78.949692efce4f1a4dfdf9.js","987425e65224d64ed0899345a74b9604"],["/js/79.949692efce4f1a4dfdf9.js","8d4adf7984fc8724e9b9dcf12b6b6c5c"],["/js/8.949692efce4f1a4dfdf9.js","0ec1f0d237f1dafe97b39b2e9326264b"],["/js/80.949692efce4f1a4dfdf9.js","c1de90518382244164708c41fc1d1409"],["/js/81.949692efce4f1a4dfdf9.js","b9078d9fc1f69f14110f955394dbb1bf"],["/js/82.949692efce4f1a4dfdf9.js","909d243b0304dd8528ccdf149e1dfed3"],["/js/83.949692efce4f1a4dfdf9.js","a1620a502a913d17d2f17427dc976551"],["/js/84.949692efce4f1a4dfdf9.js","a80984fdc9c2464ece18bc9b810b0a69"],["/js/85.949692efce4f1a4dfdf9.js","a32872c971248f9737b876f07c7faaf2"],["/js/86.949692efce4f1a4dfdf9.js","16c56301278841478d2b497c31508e96"],["/js/87.949692efce4f1a4dfdf9.js","20598f57869918eeeb0018d5e04c9777"],["/js/88.949692efce4f1a4dfdf9.js","5a389075ef3c22dcfc48a1cc76034bb8"],["/js/89.949692efce4f1a4dfdf9.js","d4b82bef9d4e42bde5004d6012ee6ef9"],["/js/9.949692efce4f1a4dfdf9.js","d127c4fe97fe6d8209a136ec4a787688"],["/js/90.949692efce4f1a4dfdf9.js","822caed7e7b73335fe21423327f12036"],["/js/91.949692efce4f1a4dfdf9.js","3c1d524ef15aca613cd45889185f453a"],["/js/AccountSignupModal.949692efce4f1a4dfdf9.js","0148a6d9e0862fd5ac9aba0f485b1dc7"],["/js/account-info.949692efce4f1a4dfdf9.js","0a1672bee5e78da741ae320785cf5524"],["/js/account.949692efce4f1a4dfdf9.js","b63955e174d5a42ef06214b63cc7a470"],["/js/contract.949692efce4f1a4dfdf9.js","36318c012df3b3973cd6c12b85e4666a"],["/js/modals.949692efce4f1a4dfdf9.js","1a83f471f2b60d7aa2d0beb9cb7f9d83"],["/js/notification-messages.949692efce4f1a4dfdf9.js","9e382f116f1a509559f2caeefbfdf463"],["/js/push-notification.949692efce4f1a4dfdf9.js","de4965a60a6b1f7a99ce18aefef6e687"],["/js/reports.949692efce4f1a4dfdf9.js","f1b16409635fe3a9a5b32b399d515b69"],["/js/screen-small.949692efce4f1a4dfdf9.js","b102110ca119a862eb4422ae442e03e9"],["/js/settings-chart.949692efce4f1a4dfdf9.js","ae69ac5dcb4ead164de94287a7378868"],["/js/settings-language.949692efce4f1a4dfdf9.js","918be2ebd4140487b044cd75647c45bb"],["/js/settings-theme.949692efce4f1a4dfdf9.js","4e390d992af971ccd3f3e8fe864b8727"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/toggle-menu-drawer.949692efce4f1a4dfdf9.js","69772ca7c20ffb16a5f03459539a5e11"],["/js/two-month-picker.949692efce4f1a4dfdf9.js","7d584f3dd4c9ba87dbcfb8d66251f59a"],["/js/vendors~main.949692efce4f1a4dfdf9.js","89270766775efd30ea4570741185a3b5"],["/js/vendors~smart_chart.949692efce4f1a4dfdf9.js","0f46c8ae5655c3da3c6c5d77dccd8fc7"],["/js/work-in-progress.949692efce4f1a4dfdf9.js","11b0f95a0ac19171a8cf3279de7a299c"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







