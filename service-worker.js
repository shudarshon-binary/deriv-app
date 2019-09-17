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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","d41189d8806f56f1463127370e1838ae"],["/css/app.css","a1eb869d1c6a7f3e91dd2fe4164d9fa1"],["/css/default~open_position~1833eefb.css","a8540a579781d9b077f2da1ef2f3059b"],["/css/modals.css","668d5cf1cfa647323db17743796aa846"],["/css/notification-messages.css","dac80b30ba994467f0a6728fedeff734"],["/css/reports.css","7498e4187031158a51cc5b892a627563"],["/css/screen-small.css","8df5f45913657b686502a08650feab1d"],["/css/settings-chart.css","ceb11571f9c9738be0db7907c0dcc419"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/work-in-progress.css","cb30d66e5d8cd0bbd8c8ad6015ab755f"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","4686abd32ee71d050254e4d1ad0867ad"],["/js/0.9830d04d80f9b24a8267.js","d5da97728c87ace15b32a8bddca0979d"],["/js/1.9830d04d80f9b24a8267.js","94a5f11839be0223156c4b5e2554325b"],["/js/10.9830d04d80f9b24a8267.js","80193c3f70d5d72e30f960b9eee7c1ea"],["/js/11.9830d04d80f9b24a8267.js","044248825abda5d0d3686650054472aa"],["/js/12.9830d04d80f9b24a8267.js","69f805588818dcbf88da66f01cd46bea"],["/js/13.9830d04d80f9b24a8267.js","061f1764f43a5e3fc89a457c007de140"],["/js/14.9830d04d80f9b24a8267.js","dbeac1b578c0287f09f6554e0015e17f"],["/js/15.9830d04d80f9b24a8267.js","4db4ea7b914b34800a903de5a539be0f"],["/js/16.9830d04d80f9b24a8267.js","870c8abef1b105ffba137269b57cad85"],["/js/17.9830d04d80f9b24a8267.js","2ab0d0ff2700ada2d9382e709b7d6362"],["/js/18.9830d04d80f9b24a8267.js","290aab66ba589053e925af7d06960c2b"],["/js/19.9830d04d80f9b24a8267.js","6591d576ef8c7f4be9ac154d2c871728"],["/js/2.9830d04d80f9b24a8267.js","22497443c3f7af068eb386fcc3b3f258"],["/js/20.9830d04d80f9b24a8267.js","3936b0eeab2ef318f2505f282e881670"],["/js/21.9830d04d80f9b24a8267.js","df034f32e1f565c268834493c6210f06"],["/js/22.9830d04d80f9b24a8267.js","16cdb56384d3ad289336511a02f07195"],["/js/23.9830d04d80f9b24a8267.js","4162b1b88e8c578a05d5ba8a940c1c1e"],["/js/24.9830d04d80f9b24a8267.js","41925989d19061f286dfd0766c12827b"],["/js/25.9830d04d80f9b24a8267.js","c3ae027773fcac5128003a324f7f9645"],["/js/26.9830d04d80f9b24a8267.js","33d065858c5df3550baec1bd64a2cbbe"],["/js/27.9830d04d80f9b24a8267.js","b9aa14907b8404d008c9a6113cc2107a"],["/js/28.9830d04d80f9b24a8267.js","4e91ca12c84ab4959da82fd303faebd6"],["/js/29.9830d04d80f9b24a8267.js","945e497ee232f10081face92c1fb1e40"],["/js/3.9830d04d80f9b24a8267.js","2771da35e101b76660b517c75ab63eeb"],["/js/30.9830d04d80f9b24a8267.js","ef5cbeef44030271dcf2b308a4f4af74"],["/js/31.9830d04d80f9b24a8267.js","b7b47dcc88b6236ac3a9c9dc9e52bff0"],["/js/32.9830d04d80f9b24a8267.js","bb6671e6dd802fa5e9e782a51806dcc6"],["/js/33.9830d04d80f9b24a8267.js","2ddf878ad96f226b6250fcb7ec9f40d4"],["/js/34.9830d04d80f9b24a8267.js","fca7539cf8dfd8118c12870634b5d554"],["/js/35.9830d04d80f9b24a8267.js","1b3c633862c2442580afdebddb2919b3"],["/js/36.9830d04d80f9b24a8267.js","ea3ec5f4622fbf54a194ef9c7c4bbdb9"],["/js/37.9830d04d80f9b24a8267.js","ce06769798733a6d038d17d830c80099"],["/js/38.9830d04d80f9b24a8267.js","5362f4a605494047e1b49fc64f324d7e"],["/js/39.9830d04d80f9b24a8267.js","2d1946ceebb2d676cdb60ee4bb52c6f5"],["/js/4.9830d04d80f9b24a8267.js","6f223e23f3876aae4c7d0be0f21fe49b"],["/js/40.9830d04d80f9b24a8267.js","f42dbf1be81674636fbff77a9f8e199f"],["/js/404.9830d04d80f9b24a8267.js","d736fe4697423c9a0fb9515c08e50b8d"],["/js/41.9830d04d80f9b24a8267.js","d113f82b98b26dac5139fa7e8cf77384"],["/js/42.9830d04d80f9b24a8267.js","8eac3eb1eeb8af1bd8c0bcc4f26039e7"],["/js/43.9830d04d80f9b24a8267.js","ee2049a4f91f5a77e85b1b762d898281"],["/js/44.9830d04d80f9b24a8267.js","a8d13e6946e20fa9beb16d12e3f966be"],["/js/45.9830d04d80f9b24a8267.js","0233f6acd84abc1c45af93aa62d9b711"],["/js/46.9830d04d80f9b24a8267.js","2179ab7d9da808f00c54020424a1c7a3"],["/js/47.9830d04d80f9b24a8267.js","4447f06cf358db8205fa45559110e6b5"],["/js/48.9830d04d80f9b24a8267.js","2c30be543d6758ded76c1217f881e0d8"],["/js/49.9830d04d80f9b24a8267.js","5f39d77845da1c1ab58d17b1fccfde34"],["/js/5.9830d04d80f9b24a8267.js","c9e171983c1dcf17759a60809e47926f"],["/js/50.9830d04d80f9b24a8267.js","af06f63bbc75387f7171546905c6a7e8"],["/js/51.9830d04d80f9b24a8267.js","17559f1e71166ff7a96ce37e76053263"],["/js/52.9830d04d80f9b24a8267.js","257079e7b5b3b3502070c644422356b8"],["/js/53.9830d04d80f9b24a8267.js","4734071a5199a00fcab644602f7752b9"],["/js/54.9830d04d80f9b24a8267.js","537942155682c9bea5f86099cf1c924b"],["/js/55.9830d04d80f9b24a8267.js","b21f775610c8ebcdd9d9387e93f6c669"],["/js/56.9830d04d80f9b24a8267.js","c62db99eb5954eca6e2d534a87ad0356"],["/js/57.9830d04d80f9b24a8267.js","21eaf34902a4ed1e2f7dd2ef97104a70"],["/js/58.9830d04d80f9b24a8267.js","92151c33fc759406446a9d3af0121058"],["/js/59.9830d04d80f9b24a8267.js","37484bbe828c0fe25132dc4a85b6864f"],["/js/6.9830d04d80f9b24a8267.js","0fa3344123db19b6e7191acbb30bfe23"],["/js/60.9830d04d80f9b24a8267.js","78de9ec307c7cf66c39640ac539f5266"],["/js/61.9830d04d80f9b24a8267.js","620c9794e3887df234ddd6dc14f04ced"],["/js/62.9830d04d80f9b24a8267.js","b6406c37b319ab0878392f8eb9662155"],["/js/63.9830d04d80f9b24a8267.js","ad606184b1715c529091ba2d47519496"],["/js/64.9830d04d80f9b24a8267.js","57202698f1234ccb4aa6d37a07d4273a"],["/js/65.9830d04d80f9b24a8267.js","6978ef4280a9ce56bd5306a20e272bee"],["/js/66.9830d04d80f9b24a8267.js","1c317a5c943c203c120adbed1960d38b"],["/js/67.9830d04d80f9b24a8267.js","ad6adfc443d9c32809708f4ea72fb9c7"],["/js/68.9830d04d80f9b24a8267.js","15bea7ab11e3e46de27877f1c8093fcc"],["/js/69.9830d04d80f9b24a8267.js","0f947fcc43e5a569a52ef30f3524db74"],["/js/7.9830d04d80f9b24a8267.js","fa2c6f5ac72ea912520e423e3a5eb9d8"],["/js/70.9830d04d80f9b24a8267.js","599bd028801ba8ca8accd082889a7d04"],["/js/71.9830d04d80f9b24a8267.js","f8bc101cf40dc0ad43f40ebf121ceb43"],["/js/72.9830d04d80f9b24a8267.js","6b85999ea2cb3718a7ef44b1c2e2c572"],["/js/73.9830d04d80f9b24a8267.js","964d3c5713181d99bf372accf79284bb"],["/js/74.9830d04d80f9b24a8267.js","55d04326cd3cd96b5e661a2250f7f3b2"],["/js/75.9830d04d80f9b24a8267.js","7e84d47f5e3a0b41e162d0059434db84"],["/js/76.9830d04d80f9b24a8267.js","0a3a4c42ba1b1af8aad85976f1169a64"],["/js/77.9830d04d80f9b24a8267.js","2c69e5c961e1665cd3b5e94e218eac63"],["/js/8.9830d04d80f9b24a8267.js","c74c0777e987270c2c3856e5dc63fd50"],["/js/9.9830d04d80f9b24a8267.js","e2167cb627adf3a9e4f4994b0ca9dba9"],["/js/AccountSignupModal.9830d04d80f9b24a8267.js","86af7d94ab6c9560d3a5af6684da5375"],["/js/account-info.9830d04d80f9b24a8267.js","376d5d93b2cfdd8a684b7bae0d524b25"],["/js/contract.9830d04d80f9b24a8267.js","f9e84ab57c7db3d978d791f8a6941b8d"],["/js/default~open_position~1833eefb.9830d04d80f9b24a8267.js","11b1e31fde169b48569b1538917d81c5"],["/js/main.9830d04d80f9b24a8267.js","263a698db5a6004ebc2be6cb618195c3"],["/js/modals.9830d04d80f9b24a8267.js","9f590b6d2deceb9110bafde171de703a"],["/js/notification-messages.9830d04d80f9b24a8267.js","dcf8ba41f9a5fe5924ed7b05297e1853"],["/js/open_positions.9830d04d80f9b24a8267.js","c0f8a9b4b8b72e2ec71d789e2c9e7e66"],["/js/profit_table.9830d04d80f9b24a8267.js","2777cb2eea3fe9f28878854dad8e47b0"],["/js/push-notification.9830d04d80f9b24a8267.js","9837bd3319a188ee8f2f2e7376ddc388"],["/js/reports.9830d04d80f9b24a8267.js","4ad770f1dfb47d1c1a50da52bf478f47"],["/js/screen-small.9830d04d80f9b24a8267.js","18c26a49e48498c4c3f5eb9b591f01e8"],["/js/settings-chart.9830d04d80f9b24a8267.js","85fc8404a15f1561dcf0621785deee70"],["/js/settings-language.9830d04d80f9b24a8267.js","67d67ed8751424487c027558f1e1810b"],["/js/settings-theme.9830d04d80f9b24a8267.js","d83aa80ab929339c0e10a747b5a31710"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.9830d04d80f9b24a8267.js","ed1f540e186907771a60a57cd98fa859"],["/js/toggle-menu-drawer.9830d04d80f9b24a8267.js","7a23683ee8538410ff9f3599032784e3"],["/js/two-month-picker.9830d04d80f9b24a8267.js","34cafea57e2ebfefb6a3eddb2adf5fa9"],["/js/vendors~AccountSignupModal.9830d04d80f9b24a8267.js","310ce670f6e65d3e1eff35882cd38087"],["/js/vendors~main.9830d04d80f9b24a8267.js","09f3c151969c045c961f471a863ea795"],["/js/vendors~open_position~7c650be5.9830d04d80f9b24a8267.js","85776ae373b710343c1419d75a7b40b2"],["/js/vendors~smart_chart.9830d04d80f9b24a8267.js","484e7dc2bfd997c1757e3ca9fac87932"],["/js/work-in-progress.9830d04d80f9b24a8267.js","8d6f80848c782b51a15fd98cdb404b3b"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







