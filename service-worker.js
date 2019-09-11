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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","ba476cb3a6de50569875bcc9f24a1771"],["/css/app.css","79a7a6f94201e15ae5ee6acb400dd402"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/digits.css","6ed77e3637e6b7ddfe52cf4de88551ab"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","cf344ca68d7b1144601a4100522635fe"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","463f7dba162a6d265b06dc15e9f85034"],["/js/0.9a9c82572bfa3b4b67e4.js","fb64064683305e3bae1b3ac2788553b1"],["/js/1.9a9c82572bfa3b4b67e4.js","f2c68d5038b403561fd2f239addfcb0f"],["/js/10.9a9c82572bfa3b4b67e4.js","ac4c2181a330ab4207ba53139db9fa15"],["/js/11.9a9c82572bfa3b4b67e4.js","3e4cb6155623f37c263f37054adcfdda"],["/js/12.9a9c82572bfa3b4b67e4.js","7b5a8ea66512a54c52c92202ffe1245c"],["/js/13.9a9c82572bfa3b4b67e4.js","85b16e0d9c3de7eecd5da3406b551115"],["/js/14.9a9c82572bfa3b4b67e4.js","51f83324ae20f43c586d7f7be0843981"],["/js/15.9a9c82572bfa3b4b67e4.js","64b71a477018c5d74c5a051a9a283e0f"],["/js/16.9a9c82572bfa3b4b67e4.js","67064138cd83b5966c5fa2671e83365c"],["/js/17.9a9c82572bfa3b4b67e4.js","711ea0f72a4207e8f3a1aa95bca01b67"],["/js/18.9a9c82572bfa3b4b67e4.js","957ef39a188cd4c3b1595dfc5ea94350"],["/js/19.9a9c82572bfa3b4b67e4.js","d046c8763dd0a122e1d83c95f51b5475"],["/js/2.9a9c82572bfa3b4b67e4.js","707a2f40e9a8b26a8517ccf3763d2ae7"],["/js/20.9a9c82572bfa3b4b67e4.js","f945b1d7e39e7abc7cedd1c43fabe0a8"],["/js/21.9a9c82572bfa3b4b67e4.js","65297fdcb3378d7dac34a24a2a4dbe10"],["/js/22.9a9c82572bfa3b4b67e4.js","ae449d76f40d2df61a98201140c1c276"],["/js/23.9a9c82572bfa3b4b67e4.js","83be57e859aa181cdd24e0b5399bcf71"],["/js/24.9a9c82572bfa3b4b67e4.js","e26d01b74b0ffba8311582044093c9d1"],["/js/25.9a9c82572bfa3b4b67e4.js","419b4baf2f6e5e449d87f6498141fa72"],["/js/26.9a9c82572bfa3b4b67e4.js","71fb1ef1daa4c45606d22c9c97a779c6"],["/js/27.9a9c82572bfa3b4b67e4.js","780a6720fcb2650f66e9f5533d8559de"],["/js/28.9a9c82572bfa3b4b67e4.js","40ae1e3b7f8b97d39b1440feb57761d5"],["/js/29.9a9c82572bfa3b4b67e4.js","adde7eeeccfd6ed49c1be9951c9986a9"],["/js/3.9a9c82572bfa3b4b67e4.js","aa36b773c73870208e311c4966573a5a"],["/js/30.9a9c82572bfa3b4b67e4.js","ddb17b07df455fe17892f555ac098d2b"],["/js/31.9a9c82572bfa3b4b67e4.js","4c3c71989e1a958cc600e667439d925b"],["/js/32.9a9c82572bfa3b4b67e4.js","484769f89fcf8e0aa32510c4766c8bf5"],["/js/33.9a9c82572bfa3b4b67e4.js","5ff4c8d2203aa519fcaf8bf93d0e4ff2"],["/js/34.9a9c82572bfa3b4b67e4.js","bb89bef7764e51a24e749881aad4f4fd"],["/js/35.9a9c82572bfa3b4b67e4.js","45043763e882a785826dce424ea5d7e6"],["/js/36.9a9c82572bfa3b4b67e4.js","7fd5d6dab5d74017fab3369208c77e76"],["/js/37.9a9c82572bfa3b4b67e4.js","746ef61f95f332823d57d3df45a3bf4b"],["/js/38.9a9c82572bfa3b4b67e4.js","39cb9422b61629d30f5410803350b225"],["/js/39.9a9c82572bfa3b4b67e4.js","82975fa5d70163290ca9e1f8f472b2a4"],["/js/4.9a9c82572bfa3b4b67e4.js","7223b3fddc4ee368902225a199201e95"],["/js/40.9a9c82572bfa3b4b67e4.js","af5d695494b65fd0c350269250d953dd"],["/js/404.9a9c82572bfa3b4b67e4.js","167e04cb25e8bd839e980735d247efe4"],["/js/41.9a9c82572bfa3b4b67e4.js","b8621d82e285399b9b3e6f61ff07016a"],["/js/42.9a9c82572bfa3b4b67e4.js","479555ff622096db1edc34cb6e40e9f5"],["/js/43.9a9c82572bfa3b4b67e4.js","e4527f75d70602ce8a96dfc6da312c89"],["/js/44.9a9c82572bfa3b4b67e4.js","6b3858e61496402f0d35efd7f3c14b82"],["/js/45.9a9c82572bfa3b4b67e4.js","589cfb036cd6b72bb28254ea9d69ccf0"],["/js/46.9a9c82572bfa3b4b67e4.js","928c7830b0f967364620ea17c4e59c8b"],["/js/47.9a9c82572bfa3b4b67e4.js","7b70733a21857e3adcf74a0cef986b0b"],["/js/48.9a9c82572bfa3b4b67e4.js","2a5039b20c76dd4a2a9ed021fe63fe10"],["/js/49.9a9c82572bfa3b4b67e4.js","a43f026aa7024d87d649d87d78fdec19"],["/js/5.9a9c82572bfa3b4b67e4.js","8560f7ec64f26edf09cdb69476557ced"],["/js/50.9a9c82572bfa3b4b67e4.js","3a9f962df76fef3d0c8e21f2d5448624"],["/js/51.9a9c82572bfa3b4b67e4.js","14f4eab8aecd3a6057c5d31e45c262ba"],["/js/52.9a9c82572bfa3b4b67e4.js","78f72c23203412d0a1c9173e72d7c0fe"],["/js/53.9a9c82572bfa3b4b67e4.js","18e52169b6e16e13d1edfe0b5030f642"],["/js/54.9a9c82572bfa3b4b67e4.js","a4486dfc53145f84ee54517e65785329"],["/js/55.9a9c82572bfa3b4b67e4.js","304aa85382e03482a5e9581ae83747f5"],["/js/56.9a9c82572bfa3b4b67e4.js","a0c36e31ab96c8ce06f3925defd7bec6"],["/js/57.9a9c82572bfa3b4b67e4.js","58070d745ddfbcbce2235f6a34dc89a5"],["/js/58.9a9c82572bfa3b4b67e4.js","ef973eec6428c01681e424bf18f2dc40"],["/js/59.9a9c82572bfa3b4b67e4.js","e9f395664020da6652244da22764f29c"],["/js/6.9a9c82572bfa3b4b67e4.js","3221e2f39c26a6f5454399291754c6b9"],["/js/60.9a9c82572bfa3b4b67e4.js","b2985e209b5b6adc737de82ee4cc4c8a"],["/js/61.9a9c82572bfa3b4b67e4.js","7d73bb65990cdf8e8025b2454f359258"],["/js/62.9a9c82572bfa3b4b67e4.js","0c9aa12fd1cd590f02a100b2b017981c"],["/js/63.9a9c82572bfa3b4b67e4.js","abf1fcb996bc34c5e1133e41e43c6be0"],["/js/64.9a9c82572bfa3b4b67e4.js","944dae2441a33d0c171d166d842e67fa"],["/js/65.9a9c82572bfa3b4b67e4.js","d6bd9c32604a2816dd7a211cfd7f63f2"],["/js/66.9a9c82572bfa3b4b67e4.js","e77c4aba6849354d1222d2216532b628"],["/js/67.9a9c82572bfa3b4b67e4.js","e05bf569f7b0857bbbf90e147cee5776"],["/js/68.9a9c82572bfa3b4b67e4.js","a789e9c4712bfac933f07e858cf0f2c3"],["/js/69.9a9c82572bfa3b4b67e4.js","eef3543f38ddec0aa347eadd8b51a732"],["/js/7.9a9c82572bfa3b4b67e4.js","260f120827bfb1d2ba0d7e57d2bd26ec"],["/js/70.9a9c82572bfa3b4b67e4.js","241cd62af1c5dfa1893f1c2e24548e24"],["/js/71.9a9c82572bfa3b4b67e4.js","349cd53b1a58f7849e9551ce1fdff39e"],["/js/8.9a9c82572bfa3b4b67e4.js","cd75c8f98e295d1982d6192cc47dae97"],["/js/9.9a9c82572bfa3b4b67e4.js","a69473dce43b451394c69234d6e15e89"],["/js/AccountSignupModal.9a9c82572bfa3b4b67e4.js","fc1bcab44eec3406d0e6bc7001b5f303"],["/js/account-info.9a9c82572bfa3b4b67e4.js","8adcc8fae0f2be3f4d8d9a9362180a98"],["/js/contract.9a9c82572bfa3b4b67e4.js","e1071c5989fa8a828464b86f6bc259ef"],["/js/default~open_position~1833eefb.9a9c82572bfa3b4b67e4.js","f83e37d5b30a192b0c346c113e589068"],["/js/digits.9a9c82572bfa3b4b67e4.js","c18960670e1d0a0ae6dd11b3d8f90605"],["/js/info-box.9a9c82572bfa3b4b67e4.js","3e2bdab12dc60aafb10c9763d946eacb"],["/js/main.9a9c82572bfa3b4b67e4.js","0a3adb19acc4f42252691b3cb8e3d968"],["/js/modals.9a9c82572bfa3b4b67e4.js","9d8f4a80e5efe2a35ecd86e7f28aca54"],["/js/notification-messages.9a9c82572bfa3b4b67e4.js","b2b5a11ad582ce1bcd5a4e1bd3fac223"],["/js/open_positions.9a9c82572bfa3b4b67e4.js","391f0e17edb7bb26bcd2572b805f6721"],["/js/profit_table.9a9c82572bfa3b4b67e4.js","cdf58ee3356db0d08efe6838b17048bb"],["/js/push-notification.9a9c82572bfa3b4b67e4.js","8ee7f30cfc1f7677c74b928ee21fa679"],["/js/reports.9a9c82572bfa3b4b67e4.js","67b743d48c1ed0e24e09b1d8baee6159"],["/js/screen-small.9a9c82572bfa3b4b67e4.js","f4113939731d6974a8933e93e7038bb7"],["/js/settings-chart.9a9c82572bfa3b4b67e4.js","147cebefcc0205addbba7bfb6a4dee9a"],["/js/settings-language.9a9c82572bfa3b4b67e4.js","8e3edc40653deccb93498b8d8fd80095"],["/js/settings-theme.9a9c82572bfa3b4b67e4.js","b5dd6679fa195f259594691e7feb2af2"],["/js/smart_chart.9a9c82572bfa3b4b67e4.js","284e600482bb8ba48b53d06b65053750"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.9a9c82572bfa3b4b67e4.js","103a6ea44b8dee5ccb8544c1eebb133d"],["/js/toggle-menu-drawer.9a9c82572bfa3b4b67e4.js","c2c410cc96502c508e05b625430a765b"],["/js/two-month-picker.9a9c82572bfa3b4b67e4.js","1ef2a0c7896d1dc36e73fb5ab11e1dfb"],["/js/vendors~AccountSignupModal.9a9c82572bfa3b4b67e4.js","06a43811be281f22b4325bb76d966be3"],["/js/vendors~digits~info-b~897959f6.9a9c82572bfa3b4b67e4.js","550cce89c1ff6494ac0ca24760f9259f"],["/js/vendors~main.9a9c82572bfa3b4b67e4.js","f0723b67c730d354515b33bc9d86618c"],["/js/vendors~open_position~7c650be5.9a9c82572bfa3b4b67e4.js","3e9505390d647d6e7b2b3671734084fb"],["/js/vendors~smart_chart.9a9c82572bfa3b4b67e4.js","a2fb022faa681d1c079bdbc92b9a556a"],["/js/work-in-progress.9a9c82572bfa3b4b67e4.js","f14dabfc6d54ad8f1c25ff2e3825f293"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







