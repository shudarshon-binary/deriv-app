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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","513e6477e469c23dab7a47188c541821"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","d6daa3556151547d7b4ca38da103cd62"],["/js/0.2a8b8fbf5d13a22e5ff5.js","8e3d4488477b70e7d431c8f99f640ca9"],["/js/1.2a8b8fbf5d13a22e5ff5.js","18d690e73ba8751e81518c4482056cff"],["/js/10.2a8b8fbf5d13a22e5ff5.js","b7c4a82a36494ec97396e340f28cfce6"],["/js/11.2a8b8fbf5d13a22e5ff5.js","399944466b9575f3ac1f693334263e52"],["/js/12.2a8b8fbf5d13a22e5ff5.js","b5bcbab7c15fdc8c6260f9cbb0229d1e"],["/js/13.2a8b8fbf5d13a22e5ff5.js","0b62dbf533ba93f4ce562668cc0bcd99"],["/js/14.2a8b8fbf5d13a22e5ff5.js","86729934b757280b0ec4d1ee0f65b97c"],["/js/15.2a8b8fbf5d13a22e5ff5.js","edf8ba5db053c858ce7116c6a9ce3e19"],["/js/16.2a8b8fbf5d13a22e5ff5.js","9dfb08f3483b8ab8b02eb07b69f5c8da"],["/js/17.2a8b8fbf5d13a22e5ff5.js","58e6825e660d39939df97639052c7957"],["/js/18.2a8b8fbf5d13a22e5ff5.js","cedf125530d9ec52c7a48462afcf0e33"],["/js/19.2a8b8fbf5d13a22e5ff5.js","a1edc52fcefd8230b421712f24d2b96b"],["/js/2.2a8b8fbf5d13a22e5ff5.js","aa66ab9d5a904a47412f50dd77763800"],["/js/20.2a8b8fbf5d13a22e5ff5.js","9f8a92908277aeaa04aa25c77602f8dc"],["/js/21.2a8b8fbf5d13a22e5ff5.js","63c7d5e17af5c68f45dc43e264e4a1b5"],["/js/22.2a8b8fbf5d13a22e5ff5.js","5a99446eb34e4023e059342584283773"],["/js/23.2a8b8fbf5d13a22e5ff5.js","27971c4ec715b6dff60f3114ed14ae44"],["/js/24.2a8b8fbf5d13a22e5ff5.js","780f43e4df738b020f25e2252464e47b"],["/js/25.2a8b8fbf5d13a22e5ff5.js","a2f23e4ce471c2ace9f4a3e651bc23e1"],["/js/26.2a8b8fbf5d13a22e5ff5.js","7061b8aa777b620438013b3dc6e9948f"],["/js/27.2a8b8fbf5d13a22e5ff5.js","76478a7f5a3e5226e3eb9c303f8e1e08"],["/js/28.2a8b8fbf5d13a22e5ff5.js","21597fc86bb9366e11bd14255a471337"],["/js/29.2a8b8fbf5d13a22e5ff5.js","0e4ec45406fd60767e9a0dc36d93396c"],["/js/3.2a8b8fbf5d13a22e5ff5.js","f3e75f4cd566514ef38d6f5c9c19b081"],["/js/30.2a8b8fbf5d13a22e5ff5.js","7a930385623191ef11d7a32430b54f01"],["/js/31.2a8b8fbf5d13a22e5ff5.js","973b29943349a20d92c8440723156284"],["/js/32.2a8b8fbf5d13a22e5ff5.js","8631ce07d4824ff4795f5e126ff181cc"],["/js/33.2a8b8fbf5d13a22e5ff5.js","3ae109dbf6115cc29c51826c0445d4cd"],["/js/34.2a8b8fbf5d13a22e5ff5.js","7950cd5d00e324354f5089ecf648d164"],["/js/35.2a8b8fbf5d13a22e5ff5.js","00fd76bcb4706c34bb729f903302932c"],["/js/36.2a8b8fbf5d13a22e5ff5.js","1dbd796f4ca1c668171f409a29242b05"],["/js/37.2a8b8fbf5d13a22e5ff5.js","e34cf060971588de61a26560eead291d"],["/js/38.2a8b8fbf5d13a22e5ff5.js","d5c1403d57260f54ef9ee57a8ca6a352"],["/js/39.2a8b8fbf5d13a22e5ff5.js","9de39b0ee72a767d9aed9d7e08c0404b"],["/js/4.2a8b8fbf5d13a22e5ff5.js","0206142ea26592dd181b71b3c0d42421"],["/js/40.2a8b8fbf5d13a22e5ff5.js","684a9b6868184975b7b6e4d8f87a1ffe"],["/js/404.2a8b8fbf5d13a22e5ff5.js","f2ba94b7e7bfdade17695d238c42c793"],["/js/41.2a8b8fbf5d13a22e5ff5.js","5fe597357c924d7ed3569a3e939d138a"],["/js/42.2a8b8fbf5d13a22e5ff5.js","876a554e06c25677e7ad2134ef7c0cae"],["/js/43.2a8b8fbf5d13a22e5ff5.js","c8b3ee069a28cc83a7448120dfa0ee4e"],["/js/44.2a8b8fbf5d13a22e5ff5.js","a33c2d8e5f8c27c4181e08505aac0406"],["/js/45.2a8b8fbf5d13a22e5ff5.js","34ef412e9f3515ead13bd53e6c5dabb1"],["/js/46.2a8b8fbf5d13a22e5ff5.js","8cf1e809bf76f0df59b05564058ff75d"],["/js/47.2a8b8fbf5d13a22e5ff5.js","c1ffd9d0760bbb34e0608c77dc67b77d"],["/js/48.2a8b8fbf5d13a22e5ff5.js","331841d6d9ea24a9370f85be9276f0e5"],["/js/49.2a8b8fbf5d13a22e5ff5.js","9cc05b8c9f449d93c0cb88af5f943abf"],["/js/5.2a8b8fbf5d13a22e5ff5.js","d4e66fafe8b7f2e358f182153b6beb82"],["/js/50.2a8b8fbf5d13a22e5ff5.js","3adddb394b22db116e5e84d4b918bddc"],["/js/51.2a8b8fbf5d13a22e5ff5.js","3051f6a728f763479c7ddc35cf8e4bbc"],["/js/52.2a8b8fbf5d13a22e5ff5.js","439e879e214de6707ea8a824da9143c7"],["/js/53.2a8b8fbf5d13a22e5ff5.js","2304800746f9a0ba31f9bab2e7c1586d"],["/js/54.2a8b8fbf5d13a22e5ff5.js","b035033344362f75e3c256fcd9fdc9b6"],["/js/55.2a8b8fbf5d13a22e5ff5.js","ace69fc45465b5d2d4b0437d4cff3cc0"],["/js/56.2a8b8fbf5d13a22e5ff5.js","65e52866f1399b1e40cd7d8d950e0761"],["/js/57.2a8b8fbf5d13a22e5ff5.js","1bfc8cee39b2a93997caa3fa89a88ba3"],["/js/58.2a8b8fbf5d13a22e5ff5.js","1ebdaa1abaa2efc9bc884495456439e7"],["/js/59.2a8b8fbf5d13a22e5ff5.js","70dd705ef171d2e401574a99fae4d64c"],["/js/6.2a8b8fbf5d13a22e5ff5.js","b908db3abe754b34c6f361040ae81125"],["/js/60.2a8b8fbf5d13a22e5ff5.js","c6cd4ad428e541c664e47dfb7ccc5e5c"],["/js/61.2a8b8fbf5d13a22e5ff5.js","1a627738b50d448a73b3d68528db012a"],["/js/62.2a8b8fbf5d13a22e5ff5.js","9fa6f4e23f54dbd6929075a7cc944253"],["/js/63.2a8b8fbf5d13a22e5ff5.js","c950cbbd35f4eb24962801bdb6e691f2"],["/js/64.2a8b8fbf5d13a22e5ff5.js","52502fc72239ffe510f52082cb98e6cf"],["/js/65.2a8b8fbf5d13a22e5ff5.js","3d512972b7076653d2f6f1ff8c7ec072"],["/js/66.2a8b8fbf5d13a22e5ff5.js","89dbe924abec81949bb121f423cba9fd"],["/js/67.2a8b8fbf5d13a22e5ff5.js","b7ed9929bbe7ca09101ba3cb88518c78"],["/js/68.2a8b8fbf5d13a22e5ff5.js","b7601ccfe7ae2af91b1edcca6c156c77"],["/js/69.2a8b8fbf5d13a22e5ff5.js","c53435319bb0e9f9d28d3175bf58d5b7"],["/js/7.2a8b8fbf5d13a22e5ff5.js","b36ffe1a1d8e23478e835d2521850608"],["/js/70.2a8b8fbf5d13a22e5ff5.js","3b41dbe334c5e7804618dfdc6f28ed10"],["/js/71.2a8b8fbf5d13a22e5ff5.js","a59523bf64054e084df8e078eb3bdce9"],["/js/72.2a8b8fbf5d13a22e5ff5.js","a21aea318ffa91455bf0e122c0f81ba5"],["/js/73.2a8b8fbf5d13a22e5ff5.js","337022baebf198e8cd5d8d8cb05405ca"],["/js/74.2a8b8fbf5d13a22e5ff5.js","5c6bad4c313138bbafaa38a392308f71"],["/js/75.2a8b8fbf5d13a22e5ff5.js","6fcc8065057366f94667a21045d6ec79"],["/js/76.2a8b8fbf5d13a22e5ff5.js","9721126b79d28a9383279ddefa4e5d2c"],["/js/77.2a8b8fbf5d13a22e5ff5.js","0821d3f70d58cf75b6b4753524fc7980"],["/js/8.2a8b8fbf5d13a22e5ff5.js","e592ac93063b53af57f894f1cb09d06d"],["/js/9.2a8b8fbf5d13a22e5ff5.js","cfe86b580c6bccbe29a905b1b2709570"],["/js/AccountSignupModal.2a8b8fbf5d13a22e5ff5.js","48bea6073c44043e697de063c4a9e303"],["/js/account-info.2a8b8fbf5d13a22e5ff5.js","2ee8fdc7e10de6a9033b2f7872474d9e"],["/js/contract.2a8b8fbf5d13a22e5ff5.js","a1ce0e073d6f159f308b693d8281d0c4"],["/js/default~open_position~1833eefb.2a8b8fbf5d13a22e5ff5.js","8deded76ed2e3e5f159269b5b94b5d99"],["/js/main.2a8b8fbf5d13a22e5ff5.js","54d05e984da633e20af01da7f6375576"],["/js/modals.2a8b8fbf5d13a22e5ff5.js","13ca851a9e99ecd1e9979f524f216c6c"],["/js/notification-messages.2a8b8fbf5d13a22e5ff5.js","9110b3b63587d9b35ef8a03f1b2d428d"],["/js/open_positions.2a8b8fbf5d13a22e5ff5.js","f31dc261791f06c9534027d534fadb1b"],["/js/profit_table.2a8b8fbf5d13a22e5ff5.js","4f2a8aaaaafa6d5da2b28b219360c533"],["/js/push-notification.2a8b8fbf5d13a22e5ff5.js","b82aca5ef58bb42c092e9c25a0d9bfc0"],["/js/reports.2a8b8fbf5d13a22e5ff5.js","2fd8bc05dba70918dd8996001b71b1e9"],["/js/screen-small.2a8b8fbf5d13a22e5ff5.js","3a497d9d7a63eaf241290459d79fd2e6"],["/js/settings-chart.2a8b8fbf5d13a22e5ff5.js","cee1849c10199e31bacaee3889b2c812"],["/js/settings-language.2a8b8fbf5d13a22e5ff5.js","5d7cc2f29a8b7c3fa0923efc79f4dd4d"],["/js/settings-theme.2a8b8fbf5d13a22e5ff5.js","f158c6d073d90046d7523fe2639d9926"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.2a8b8fbf5d13a22e5ff5.js","6943731de08e9cb42424274847b288ce"],["/js/toggle-menu-drawer.2a8b8fbf5d13a22e5ff5.js","7f364457fd5133eb361905562849f163"],["/js/two-month-picker.2a8b8fbf5d13a22e5ff5.js","c8df9d813b796b91714177c1f2a94995"],["/js/vendors~AccountSignupModal.2a8b8fbf5d13a22e5ff5.js","997c731f8211590e6d4464e5f0db8009"],["/js/vendors~main.2a8b8fbf5d13a22e5ff5.js","e9d4a2e911e4303dbb52efde8ad5e513"],["/js/vendors~open_position~7c650be5.2a8b8fbf5d13a22e5ff5.js","7433b3fd68c91c9b01b4ca74521341c2"],["/js/vendors~smart_chart.2a8b8fbf5d13a22e5ff5.js","24f7b9ffa0354ae931152fde21efb35d"],["/js/work-in-progress.2a8b8fbf5d13a22e5ff5.js","ad9b66a26da7f5039b3af8c47458def3"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







