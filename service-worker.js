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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","b005d2fcc8f2493fa45fcf2c748bcfb2"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","e371f5a63296d5db7f7de37b226288e8"],["/js/0.c3655a00e10092214f91.js","c9c6b590d20779c2c1255a4c4b3cc689"],["/js/1.c3655a00e10092214f91.js","a7ba377d35bf2078d3eed089bc8e78ed"],["/js/10.c3655a00e10092214f91.js","76b963d7d4cfdadffdf6223e19ce1dd1"],["/js/11.c3655a00e10092214f91.js","8b3ef74fd8429b238c7f07af8ca63cb8"],["/js/12.c3655a00e10092214f91.js","98b26c244544473d7d6e12be4fb9a312"],["/js/13.c3655a00e10092214f91.js","4192b93a9c26d57d3fea0572d207bec3"],["/js/14.c3655a00e10092214f91.js","31366784fdc13c86022ac71dfd3e1bd2"],["/js/15.c3655a00e10092214f91.js","5ef547f9e3943c0f4df64b3b23463001"],["/js/16.c3655a00e10092214f91.js","9a9d8c980a063265aed778bb2e3f0ca1"],["/js/17.c3655a00e10092214f91.js","3749fd621e01e8b92406569184be60be"],["/js/18.c3655a00e10092214f91.js","e7c4d8c1ef9cfa3193318139b91a55f3"],["/js/19.c3655a00e10092214f91.js","720b85cf7779850b1f508feffa4946b0"],["/js/2.c3655a00e10092214f91.js","59a55655e8e7fa8a0db66c8abfe8b25c"],["/js/20.c3655a00e10092214f91.js","9948948983ecf4c95dc7ecd68371cc1c"],["/js/21.c3655a00e10092214f91.js","58f7b99962c09dee95c091a0e0954a6e"],["/js/22.c3655a00e10092214f91.js","bf33cd40d0dd2b33919fc22f74fe21ed"],["/js/23.c3655a00e10092214f91.js","2df5789ffce639c650f9f8fb34d5b050"],["/js/24.c3655a00e10092214f91.js","7189665cf92dd98851e25126ad051b91"],["/js/25.c3655a00e10092214f91.js","6db66c9500795929e7c0344015f10e6a"],["/js/26.c3655a00e10092214f91.js","a87d2df985ca4b144dbb13c625a8e2c3"],["/js/27.c3655a00e10092214f91.js","2aeb57bcd265a06f2acd602d70e6a320"],["/js/28.c3655a00e10092214f91.js","3a5e18136025964ce3c6bf5fc3c5fd73"],["/js/29.c3655a00e10092214f91.js","679a963e2a4d9e22895dd4806af0eb54"],["/js/3.c3655a00e10092214f91.js","6efc6e20f9c5313d0bafa0cb534137d4"],["/js/30.c3655a00e10092214f91.js","952bd300e4ae54e3b282ea3b9342eca8"],["/js/31.c3655a00e10092214f91.js","131d607df408cbb165ecece22fdf8b8a"],["/js/32.c3655a00e10092214f91.js","73a4e772296bd95d4b4e5ec03113d2df"],["/js/33.c3655a00e10092214f91.js","eaaea4f020abaf7077ceccda2cfb29a3"],["/js/34.c3655a00e10092214f91.js","0de5073030a5f2197733d69c7dfd0b48"],["/js/35.c3655a00e10092214f91.js","57376546b7452329770e5d1fb07a427a"],["/js/36.c3655a00e10092214f91.js","37e63a263c97076dd1f0d029f2f386c5"],["/js/37.c3655a00e10092214f91.js","427195662a44581c66e81bd77f536ad8"],["/js/38.c3655a00e10092214f91.js","337335d792167a77a475bd236ec32a16"],["/js/39.c3655a00e10092214f91.js","e3b44aa8bd725c8b25f3a9e3d79ff50a"],["/js/4.c3655a00e10092214f91.js","f02d3b2629ecf64440c1c6866bb7368a"],["/js/40.c3655a00e10092214f91.js","234a1e37b28c07762dd4f85334fa8f93"],["/js/404.c3655a00e10092214f91.js","7c6372c580858a81876e71b265c2a1ce"],["/js/41.c3655a00e10092214f91.js","a4e680ef8d6c79dd5004cf94881ba77c"],["/js/42.c3655a00e10092214f91.js","7106cb66d8d790d03a622f8f76e18530"],["/js/43.c3655a00e10092214f91.js","05db5f01f2e7f7d31dcdacc312b4174d"],["/js/44.c3655a00e10092214f91.js","ea1c6df7bd1391aa06a1ed0385384732"],["/js/45.c3655a00e10092214f91.js","d094b1b07f9592939662d81f7c6e227c"],["/js/46.c3655a00e10092214f91.js","64235fdc38a821ae50be4f34cef9cfdf"],["/js/47.c3655a00e10092214f91.js","9564e79c69390d439e7e951a8816416b"],["/js/48.c3655a00e10092214f91.js","10d66c4c787299c240adb2ea6a57670e"],["/js/49.c3655a00e10092214f91.js","415a51cba56233381f79b522ed82fe85"],["/js/5.c3655a00e10092214f91.js","d1cd22ae661b45d86a79e8556d595093"],["/js/50.c3655a00e10092214f91.js","8f766a614ab1509a5b955e9602f6f103"],["/js/51.c3655a00e10092214f91.js","7839ef79143dc77edb79a21d105aa20f"],["/js/52.c3655a00e10092214f91.js","d5c51f95fd7a0f8940842ceb1be4dcf7"],["/js/53.c3655a00e10092214f91.js","ea265403a905189030505ca56266062e"],["/js/54.c3655a00e10092214f91.js","8e3c21bc5a26ab5ada53e74fc60db06b"],["/js/55.c3655a00e10092214f91.js","87f65fffb4a13b5c584ecf1d3bd65204"],["/js/56.c3655a00e10092214f91.js","0f57f98fb434242ff616ba2f5fc0b37f"],["/js/57.c3655a00e10092214f91.js","9885c6eb477288a5be56a1c9ad0cf28c"],["/js/58.c3655a00e10092214f91.js","5f911fe5d3aafec34c91efb55112e3c3"],["/js/59.c3655a00e10092214f91.js","22afef3d219e8e0c01dd89c7d3b04943"],["/js/6.c3655a00e10092214f91.js","699e652567c95c547ff9da81259de7a4"],["/js/60.c3655a00e10092214f91.js","4ed4809eaf9fce455a1c826e17b70dc9"],["/js/61.c3655a00e10092214f91.js","1ebd85278bcf70a7cacbe915f5686737"],["/js/62.c3655a00e10092214f91.js","33b63fd7124eaa833cbbe206344f3c8f"],["/js/63.c3655a00e10092214f91.js","626af721a04adce0c2d158589e220cb7"],["/js/64.c3655a00e10092214f91.js","e12c0fda48c8b546a8e160c2a124cb41"],["/js/65.c3655a00e10092214f91.js","3e00f084f706202a537b94ebe1ceef66"],["/js/66.c3655a00e10092214f91.js","9953d936d2cdefb5101f28033bb1a33e"],["/js/67.c3655a00e10092214f91.js","b31f6e1a5e5d1b99cb078d8226c20790"],["/js/68.c3655a00e10092214f91.js","0f76fcd63b78271e54078c01730bb379"],["/js/69.c3655a00e10092214f91.js","bb155474525e7bbbcb56db5c8d19a195"],["/js/7.c3655a00e10092214f91.js","8c1ad2fcd6ff5085df05ee823defc655"],["/js/70.c3655a00e10092214f91.js","001cd1edbc1de75aa99760deef8ada21"],["/js/71.c3655a00e10092214f91.js","92f6ed6a9310533143c1e1d054efdf1e"],["/js/72.c3655a00e10092214f91.js","2544db6bdeb1021df1936f0e314f5d9b"],["/js/73.c3655a00e10092214f91.js","8db63b0067e57242366753c754659e0f"],["/js/74.c3655a00e10092214f91.js","73b12d1b41e3a58250f61a9b4fb52aaa"],["/js/75.c3655a00e10092214f91.js","734fbcea5da6e1f6cbb8a5e1c6d944bf"],["/js/76.c3655a00e10092214f91.js","9316c679e23ba3c7e6c5320be3c2af93"],["/js/77.c3655a00e10092214f91.js","1c266c66b44fc564e8a9b0eafdb34f35"],["/js/78.c3655a00e10092214f91.js","a1f052da021d5483f14d68fb3b52d2c7"],["/js/79.c3655a00e10092214f91.js","96058a4046392089a271be1a2f08c370"],["/js/8.c3655a00e10092214f91.js","271c718bc05fc95182df40f01a98d7b2"],["/js/80.c3655a00e10092214f91.js","1b13d608cda6803a41c595cf01c84d27"],["/js/81.c3655a00e10092214f91.js","d40b5933f449a7f8dfa58a7295de1bd7"],["/js/82.c3655a00e10092214f91.js","5beb86122b711a460057a9f07ba60409"],["/js/83.c3655a00e10092214f91.js","4197f5b24d111323e00d8cbcce986a9b"],["/js/84.c3655a00e10092214f91.js","1f000ca1c0ed890ecb8694ce0cd7bc1f"],["/js/85.c3655a00e10092214f91.js","117cc90c3253eb99b6bf68b26030ffb2"],["/js/86.c3655a00e10092214f91.js","87bcec1ba989b94b512a524a41dddaaa"],["/js/87.c3655a00e10092214f91.js","06cd9a1a061d0569ad8a3fb2e9e47361"],["/js/88.c3655a00e10092214f91.js","72adb309a9d06c899fd8b3dd03ea2494"],["/js/89.c3655a00e10092214f91.js","52fc6b0b5f1a3176bc04845e51e3714d"],["/js/9.c3655a00e10092214f91.js","e3c1b81e18b2254a54f4d003597b1fed"],["/js/90.c3655a00e10092214f91.js","9d0523d4a203fd2462c8857e73fae6ad"],["/js/91.c3655a00e10092214f91.js","36116b2c4774d265c29c85517978f7c7"],["/js/AccountSignupModal.c3655a00e10092214f91.js","fd0f4503c7c938966a46d5915e3ab47e"],["/js/ResetPasswordModal.c3655a00e10092214f91.js","13b39f3fafe84fff623f73faf88a2844"],["/js/account-info.c3655a00e10092214f91.js","ae21fc91e63a4a24b957664442a93006"],["/js/account.c3655a00e10092214f91.js","a97263b5adb8ecb3924c5b3acb61ea08"],["/js/contract.c3655a00e10092214f91.js","2b99834d87fe0a21e397cab8d073c33f"],["/js/modals.c3655a00e10092214f91.js","37e68b18f5160f723dd8a6f69be66a8e"],["/js/mt5.c3655a00e10092214f91.js","11d683ff26ae7ba9b79405926fa255b3"],["/js/notification-messages.c3655a00e10092214f91.js","c8152b370be6e2885ae41c2c79653428"],["/js/push-notification.c3655a00e10092214f91.js","b53ea1d075740514a02d6bdaf00f0e20"],["/js/reports.c3655a00e10092214f91.js","b12fc3b488931ce5aefa7d5f2062f354"],["/js/screen-small.c3655a00e10092214f91.js","07614fce327e30ec14ba8b55bfc4397c"],["/js/settings-chart.c3655a00e10092214f91.js","1fd0d763f1353533cc6a3e7c97310199"],["/js/settings-language.c3655a00e10092214f91.js","8249f436ea7ef52775e78d35baf079ab"],["/js/settings-theme.c3655a00e10092214f91.js","1d41e371731cfe82684216525face15b"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.c3655a00e10092214f91.js","8f327e7fc3b98c9ff1a0b7e6e174a755"],["/js/two-month-picker.c3655a00e10092214f91.js","0b0256602e9d572b51aa343dfd7976f4"],["/js/vendors~main.c3655a00e10092214f91.js","7b4975380fcfa15b75213d33f4664647"],["/js/vendors~smart_chart.c3655a00e10092214f91.js","0f35d4b32b97bd7ea6835931915bc0fb"],["/js/work-in-progress.c3655a00e10092214f91.js","3efa001cf9f21c9d0ba0b8975e3e115b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







