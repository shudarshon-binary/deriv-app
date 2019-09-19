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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","572dba33a52e0f788183bdd2e42e2f04"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","1e371034ed43956e633bedcdec259070"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/wallet-information.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","99e494feacc5d7d4d1c31e952ff4573c"],["/js/0.987a178dc224536797bd.js","50714ce0d304ab152fc9e6c322c21d99"],["/js/1.987a178dc224536797bd.js","e4bf3af05fda814315d3e69588da03d1"],["/js/10.987a178dc224536797bd.js","d5c2726dd682f0f277bcf7f008ff4715"],["/js/11.987a178dc224536797bd.js","d4fc3066ac15f426821b9118bcee6a06"],["/js/12.987a178dc224536797bd.js","937d3535e2eca2fd9b6446b69bd1a159"],["/js/13.987a178dc224536797bd.js","59b7d06f20c068e0593bd8d1e6358a23"],["/js/14.987a178dc224536797bd.js","ba14d39ee8ed454ff790e0a64eb2f4a2"],["/js/15.987a178dc224536797bd.js","1f8ad18c5f7958c2f4dad04310e50387"],["/js/16.987a178dc224536797bd.js","b34c7061a1186fc15cc2a65f84f25b1c"],["/js/17.987a178dc224536797bd.js","8b6456ce5d9020b050c1f3b98e3bed5f"],["/js/18.987a178dc224536797bd.js","a4b6a15fca8d61d7f6c6553bdcce945d"],["/js/19.987a178dc224536797bd.js","341c12513101a8a674d97df3e7edbd35"],["/js/2.987a178dc224536797bd.js","c7d8321b35dca483dd52fbd084772a0a"],["/js/20.987a178dc224536797bd.js","8840027c2969e0bd9de49776b7327a04"],["/js/21.987a178dc224536797bd.js","39c546dc54c112fd2e9bc8e9cd0cc420"],["/js/22.987a178dc224536797bd.js","9f1a85a31340a5afda0ab5e4050aec26"],["/js/23.987a178dc224536797bd.js","2f5458328c7b73e38e47becc99d7d889"],["/js/24.987a178dc224536797bd.js","3e8419f669bfc2246b3fcc5af30450da"],["/js/25.987a178dc224536797bd.js","412a8beb3447b923f4c814619d744a2e"],["/js/26.987a178dc224536797bd.js","927837ad1fef4f800da4d145f4fac7f8"],["/js/27.987a178dc224536797bd.js","eb5a6eee6160aff565fe05b91cff77b5"],["/js/28.987a178dc224536797bd.js","faf3fb8b44b95798d0eae858e7930e2f"],["/js/29.987a178dc224536797bd.js","1c828a0513a677065fc9bc7a961c5855"],["/js/3.987a178dc224536797bd.js","ea2164c27529cda402d7552ffd18746d"],["/js/30.987a178dc224536797bd.js","43e3460696cfcbd2e49a7ab88bd7112d"],["/js/31.987a178dc224536797bd.js","ad76638c67e6130fde595389882dd6fa"],["/js/32.987a178dc224536797bd.js","3e81bedba464085daac672422f08f7ae"],["/js/33.987a178dc224536797bd.js","589fdf39d344bb4dd65e3eac53ffd343"],["/js/34.987a178dc224536797bd.js","14631fd6c6d79d21dde019ecd43aa8ae"],["/js/35.987a178dc224536797bd.js","2342e7f95d7f480c435df07a94d27492"],["/js/36.987a178dc224536797bd.js","f7503198eea3ac9bc2344e6dbaae7df6"],["/js/37.987a178dc224536797bd.js","6fba5ef20de181ba7589d06066992e00"],["/js/38.987a178dc224536797bd.js","13adb32d2293faf26906eb221237e2c0"],["/js/39.987a178dc224536797bd.js","c253f937220a42e17cab0f903c5f196f"],["/js/4.987a178dc224536797bd.js","b44f2015ded2191bc7f2ff6040731345"],["/js/40.987a178dc224536797bd.js","a4ecf473c4bac9b1e978c7903849bbca"],["/js/404.987a178dc224536797bd.js","53ce2bb02df13e16a8af7557890ccb96"],["/js/41.987a178dc224536797bd.js","21767c9af424bca4facc02a9bcfe5c31"],["/js/42.987a178dc224536797bd.js","51a7596033a721941839d0e0ca854669"],["/js/43.987a178dc224536797bd.js","dbd0c99845f22432defd6b184ce9f072"],["/js/44.987a178dc224536797bd.js","e42a1deb4aaed7650f0208a2d3218e12"],["/js/45.987a178dc224536797bd.js","b16c15b39d43ad76162cd0b899999a73"],["/js/46.987a178dc224536797bd.js","434200870990b4a5e4768345913f7343"],["/js/47.987a178dc224536797bd.js","7cf291fea957d71593abce80704dda97"],["/js/48.987a178dc224536797bd.js","0780a4956c785a9ae515acfdd1546401"],["/js/49.987a178dc224536797bd.js","a678e72990f74af7d54f3aed83cea2a2"],["/js/5.987a178dc224536797bd.js","ddfee00817c88eb5b06105b75f24b105"],["/js/50.987a178dc224536797bd.js","8a2c79ebce421588269a2df90bb84fdd"],["/js/51.987a178dc224536797bd.js","8d2e8daf9a2397c96f26c87e56db5ba2"],["/js/52.987a178dc224536797bd.js","d45e19cb97c7f6600b6d60ddb762cb52"],["/js/53.987a178dc224536797bd.js","b451a555b5526cdf756dd7458ec7e91a"],["/js/54.987a178dc224536797bd.js","457d64c32178f04af92b25e4ae806faf"],["/js/55.987a178dc224536797bd.js","804de7ef307436894aad82eea7a11fda"],["/js/56.987a178dc224536797bd.js","b0002ddacbd7934f6d5e8cc42e17e571"],["/js/57.987a178dc224536797bd.js","29a265b3ebd6c58242791637d81a1f96"],["/js/58.987a178dc224536797bd.js","84bea66e9ca31c37baa1ebf9d0b6c1d3"],["/js/59.987a178dc224536797bd.js","9b2db34acf89a75c3e5283e8fe1b516e"],["/js/6.987a178dc224536797bd.js","d8875b1d10b2eef65665c35e776c11a1"],["/js/60.987a178dc224536797bd.js","f6fc6ecb88f84e7597f98544a9648b8e"],["/js/61.987a178dc224536797bd.js","e6342c2f14cc31dcb4f46106d2f1df07"],["/js/62.987a178dc224536797bd.js","8ea51d66a83c85a843b87b5887a20f20"],["/js/63.987a178dc224536797bd.js","3760caa64c9d313f0b8de1bf1f62558e"],["/js/64.987a178dc224536797bd.js","02ada3d47f7be26262cfc189a443aeca"],["/js/65.987a178dc224536797bd.js","cdba7c095b46748126cdc3ac51c71a1f"],["/js/66.987a178dc224536797bd.js","cf3295ad221e5898819170014e8553bf"],["/js/67.987a178dc224536797bd.js","a659184390a09febec2435ce43d83901"],["/js/68.987a178dc224536797bd.js","68638d77f377c345831c191de41ff912"],["/js/69.987a178dc224536797bd.js","383edaf5f0007005796ef552f87535b5"],["/js/7.987a178dc224536797bd.js","a5b0a3bd100a9b6fcecca5edf89e6d0a"],["/js/70.987a178dc224536797bd.js","cbec9e1ebd0322bc260c8cb3d68f485b"],["/js/71.987a178dc224536797bd.js","6fb2f5fd86d1b084ed33990efaf80214"],["/js/72.987a178dc224536797bd.js","e27ab62d9a11af80955f6380446ec112"],["/js/73.987a178dc224536797bd.js","6441383c83d44d435140c77555b3ebb9"],["/js/74.987a178dc224536797bd.js","c77e9baa4a77d63840822eefb1e072fb"],["/js/75.987a178dc224536797bd.js","580d0a3539c1ff9010000a7dc073992b"],["/js/76.987a178dc224536797bd.js","7059b55d101563df67a06b5ee34373ce"],["/js/77.987a178dc224536797bd.js","69b545e288b7854c73cddb216323379f"],["/js/78.987a178dc224536797bd.js","3a5b892c95b10c5bdc1d40b0e4c9d2bb"],["/js/79.987a178dc224536797bd.js","0e28d3c53866ed633af0df36fb8008aa"],["/js/8.987a178dc224536797bd.js","93b4a0033c69e81b000919b818b4c7ce"],["/js/80.987a178dc224536797bd.js","eb11795aa8523434213cf8cc66b50ec7"],["/js/81.987a178dc224536797bd.js","c926236c9be7ae2d427f5ae50b3227f3"],["/js/9.987a178dc224536797bd.js","c6bf5d83a13952711bbd073e8545636c"],["/js/AccountSignupModal.987a178dc224536797bd.js","b0dba4ac7201c18335d82388b7ceacc7"],["/js/account-info.987a178dc224536797bd.js","40a91a1354e9ba844e064b9096147d16"],["/js/contract.987a178dc224536797bd.js","5032f32fb7dbe8451d4347a75aaf5c9f"],["/js/default~open_position~1833eefb.987a178dc224536797bd.js","a2ed493d50f89475e77277c7f894417c"],["/js/main.987a178dc224536797bd.js","0454f13c163e2206dce564afda261204"],["/js/modals.987a178dc224536797bd.js","cd1735dc16ce278a63e63bbe83f470ee"],["/js/notification-messages.987a178dc224536797bd.js","803efeda414558c8e777501c654c11c8"],["/js/open_positions.987a178dc224536797bd.js","da07bd8b3a2107e8100919de0bef744f"],["/js/profit_table.987a178dc224536797bd.js","8049bcc1fc77da4017ee056a5e427a5f"],["/js/push-notification.987a178dc224536797bd.js","4daf6efe17a60c0f8595e28e6843947a"],["/js/reports.987a178dc224536797bd.js","648df82e942ccf72bfa6f84d86d6e2be"],["/js/screen-small.987a178dc224536797bd.js","4f66175494e6dbab29d70bb88931d991"],["/js/settings-chart.987a178dc224536797bd.js","a77540a387eb0275001dddd70a1eecd4"],["/js/settings-language.987a178dc224536797bd.js","a1047573c9fc7eb9264c8a00d1d2c57b"],["/js/settings-theme.987a178dc224536797bd.js","81093971fc02b56edb3ee0916d4b7fbc"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.987a178dc224536797bd.js","2261cb98b38cb4415c0edb15b47de9c4"],["/js/toggle-menu-drawer.987a178dc224536797bd.js","82c915eb6055a672b89b79ac900011a1"],["/js/two-month-picker.987a178dc224536797bd.js","259eb1fa3649cc69226470aa88caadf0"],["/js/vendors~main.987a178dc224536797bd.js","a9e7d0387c989bfacf413633b289fccd"],["/js/vendors~open_position~7c650be5.987a178dc224536797bd.js","88d5198cfd34e8808c912984271056df"],["/js/vendors~smart_chart.987a178dc224536797bd.js","64a5ba7437f97da074abac8142ceeac4"],["/js/wallet-information.987a178dc224536797bd.js","aa977eaf6ff4d500e9dcd2078724a640"],["/js/work-in-progress.987a178dc224536797bd.js","cc6df0aac50ec7cec1dba9022efe0f18"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







