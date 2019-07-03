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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","2d45f784f415976107b516a00f40ef4b"],["/css/smartcharts.css","aec3edaa1ad697dacb11a2cd2b58060c"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","6f7a967a5fede4ee7682829d05d5f297"],["/js/0.a221c5aae10c685f8f36.js","5f9546cc635f29e58bd963177519c5f2"],["/js/1.a221c5aae10c685f8f36.js","5dc60e9649f6b8e87a483d18eb2ab030"],["/js/10.a221c5aae10c685f8f36.js","6354384b87073122d87490d2c290206f"],["/js/11.a221c5aae10c685f8f36.js","63572d2ec7470977763d77da9af34b2c"],["/js/12.a221c5aae10c685f8f36.js","3540ef3614e56339d0dfcdd200f26758"],["/js/13.a221c5aae10c685f8f36.js","1956c91cd699d9da2d15518c84c20d32"],["/js/14.a221c5aae10c685f8f36.js","dfc5b37085c6c7f51595556ceeec9bcf"],["/js/15.a221c5aae10c685f8f36.js","ba5602315a7e79d2cd1c7b8a54b800f4"],["/js/16.a221c5aae10c685f8f36.js","9e4b5b0c1062bd39280d0c468f74829a"],["/js/17.a221c5aae10c685f8f36.js","3b9a893f511acc22ac91da122aca97e3"],["/js/18.a221c5aae10c685f8f36.js","71f6cc21c77a90d39f3bb914bfae2057"],["/js/19.a221c5aae10c685f8f36.js","01146e6311805143cf334a91dea8f0dd"],["/js/2.a221c5aae10c685f8f36.js","dceb28fb3fff6521099445ace9d066b4"],["/js/20.a221c5aae10c685f8f36.js","c68825ef108264f1335d0c78486aeafb"],["/js/21.a221c5aae10c685f8f36.js","ac24a1c8d326ea0fb490c1b378a81445"],["/js/22.a221c5aae10c685f8f36.js","46109d2c9e3f396eab993d595e7d1250"],["/js/23.a221c5aae10c685f8f36.js","30d65298d8044a40faed9ceb7f38fdd1"],["/js/24.a221c5aae10c685f8f36.js","6c822fa61485c2eef4e34a82e6b000e8"],["/js/25.a221c5aae10c685f8f36.js","4e02808e8e56ba876ab79f9d2bee21fc"],["/js/26.a221c5aae10c685f8f36.js","733da1956c70f621918b1e28d31ef709"],["/js/27.a221c5aae10c685f8f36.js","180f450869b4239e81def66d56f2f737"],["/js/28.a221c5aae10c685f8f36.js","5eb5da47c5bfd75872375d0cd74df4fa"],["/js/29.a221c5aae10c685f8f36.js","a5ede0ff631f6eda9e21966da50e6b3d"],["/js/3.a221c5aae10c685f8f36.js","30f17c669e273e66a77db2a7516ce7ad"],["/js/30.a221c5aae10c685f8f36.js","0ca093f0ccb712287af76f04b92fb4fc"],["/js/31.a221c5aae10c685f8f36.js","666908aa35e14478dbef16a67ff47af9"],["/js/32.a221c5aae10c685f8f36.js","448940ad285ab04dac5d060dbf21489b"],["/js/33.a221c5aae10c685f8f36.js","e23b7b6c35d65794c9ea65589f3b79de"],["/js/34.a221c5aae10c685f8f36.js","382246ec63606f9af366d02f13d12b8b"],["/js/35.a221c5aae10c685f8f36.js","65bf31c16faa98620dfc945d3885d143"],["/js/36.a221c5aae10c685f8f36.js","69a41ebc314ece6ca65ade5487db9a59"],["/js/37.a221c5aae10c685f8f36.js","553e540e090615a27ff61a8cdf99d602"],["/js/38.a221c5aae10c685f8f36.js","7304154871893d65c15422a507f97c94"],["/js/39.a221c5aae10c685f8f36.js","99b4dd11465025966f40ddcbbd1c1925"],["/js/4.a221c5aae10c685f8f36.js","7bd19080d4a606df022f23fc872ae56e"],["/js/40.a221c5aae10c685f8f36.js","1ab79c2fec9cb7ca3aea8a8912a6afaf"],["/js/404.a221c5aae10c685f8f36.js","5c6f8b9b52236136e4c3adfb1dbc3d9f"],["/js/41.a221c5aae10c685f8f36.js","727f6955ea4568b6186d563776892bb9"],["/js/42.a221c5aae10c685f8f36.js","7c3b66c0ee4b9abeb7748e8835251824"],["/js/43.a221c5aae10c685f8f36.js","27f194698dfdeda67eaf760dca6691d8"],["/js/44.a221c5aae10c685f8f36.js","6cc04cf994fb801bad567cfcf793c6b8"],["/js/45.a221c5aae10c685f8f36.js","20b82f7fa53d5ccb0abca2440927b4dd"],["/js/46.a221c5aae10c685f8f36.js","ad488181b955f69c7915909e12b2c82a"],["/js/47.a221c5aae10c685f8f36.js","8d8ea8eefe4fdf049ae19a1d10e50f03"],["/js/48.a221c5aae10c685f8f36.js","154a21f9726f0f566361cfa8ec0533e8"],["/js/49.a221c5aae10c685f8f36.js","4628f6e7cb64d9aadda2a6cdfd409dbd"],["/js/5.a221c5aae10c685f8f36.js","ed39a3ffc04b1cf2c4ee070b6d995fa0"],["/js/50.a221c5aae10c685f8f36.js","cafa9068cb88dc8c5280e4804040e9cc"],["/js/51.a221c5aae10c685f8f36.js","e9276c9ed36a4a60c1fc24f025bf5ce4"],["/js/52.a221c5aae10c685f8f36.js","53df14004628cf3e4b461790ca649be8"],["/js/53.a221c5aae10c685f8f36.js","5f68ccdfcaef97f2e2c3a31a69d5aece"],["/js/54.a221c5aae10c685f8f36.js","21ea2a056d3f2210fec1d1b4baf6f14f"],["/js/55.a221c5aae10c685f8f36.js","dafdc93271395393dcc789ba05702132"],["/js/56.a221c5aae10c685f8f36.js","a973a201e959093b99af7715fc30927e"],["/js/57.a221c5aae10c685f8f36.js","aa4e0003bcfa06b4b1f9b48dee44a1d5"],["/js/58.a221c5aae10c685f8f36.js","33cb0fd3fdc3ba90b33633eb6da97092"],["/js/59.a221c5aae10c685f8f36.js","bf896fd91f342d49ab46b1c26d7bf2d4"],["/js/6.a221c5aae10c685f8f36.js","c082bcd87cd33b920f7fea137d68d548"],["/js/60.a221c5aae10c685f8f36.js","f7bca8eebc68a7fdf8b8ae42df41cb42"],["/js/61.a221c5aae10c685f8f36.js","e747986bf70d9343decac79857c309e8"],["/js/62.a221c5aae10c685f8f36.js","0cc9b3c0b7310ea208e4ea4e8a08d472"],["/js/63.a221c5aae10c685f8f36.js","caf671598dbedca5d11389cc674ae7f9"],["/js/64.a221c5aae10c685f8f36.js","2e708066ce54e864fd20698fb8c66f48"],["/js/65.a221c5aae10c685f8f36.js","ec1033e9adc58e51decb362ff9eb23db"],["/js/66.a221c5aae10c685f8f36.js","5b2352735e0408aac04a330402d89f2c"],["/js/67.a221c5aae10c685f8f36.js","de78c4be55efacd83b084556333f8b0d"],["/js/7.a221c5aae10c685f8f36.js","8c55dab75268530cca0ded21da841934"],["/js/8.a221c5aae10c685f8f36.js","d97df81e1c99d98cf17b85276d6bd459"],["/js/9.a221c5aae10c685f8f36.js","f82a15850d0a70e2835a8d14755198db"],["/js/contract.a221c5aae10c685f8f36.js","5aa328321b4a312bd5a2415e999aa1b6"],["/js/main.a221c5aae10c685f8f36.js","e581a58d0fc3538f76b8ff554027fbcd"],["/js/open_positions.a221c5aae10c685f8f36.js","342ec4b7fc0b2ecd5306c8e7b367f299"],["/js/open_positions~profit_table~statement.a221c5aae10c685f8f36.js","13f364a93ce951613b9047d03de3a115"],["/js/profit_table.a221c5aae10c685f8f36.js","21fa76cf615264769813ed1b27126f58"],["/js/reports.a221c5aae10c685f8f36.js","5d2e8ee96d06fd1b946491cd141cbb7b"],["/js/smart_chart.a221c5aae10c685f8f36.js","1c70cfddea695eeba31d19f2834accac"],["/js/smartcharts/chartiq-7f9d83.smartcharts.js","819d7a790176b6e858282bed9fdf24c3"],["/js/smartcharts/de-po-b5298e.smartcharts.js","558bd2ad1f09720c1473e4086ebecc3e"],["/js/smartcharts/es-po-501a93.smartcharts.js","d5d35536f2d75574d255fd4c98563c9c"],["/js/smartcharts/fr-po-b22a23.smartcharts.js","e4c38812a6d45d03e6a9e3aacd58e9ad"],["/js/smartcharts/html2canvas-a582dc.smartcharts.js","8239524e41480eb481c170c9d8374744"],["/js/smartcharts/id-po-84a55e.smartcharts.js","951969a3ca42a173de6e84d1fc6f2f15"],["/js/smartcharts/it-po-c5f18d.smartcharts.js","678ec4a5078001d1dcc50da72c4c9f50"],["/js/smartcharts/nl-po-87665a.smartcharts.js","3dff1e6f88cc6d10b14f12ebc3894e18"],["/js/smartcharts/pl-po-71cdc6.smartcharts.js","e5ba9d3d53b360ae31320d0b294e8fb9"],["/js/smartcharts/pt-po-230860.smartcharts.js","408116afafd2f81b1ea7aa8d8be2ff42"],["/js/smartcharts/ru-po-398092.smartcharts.js","2b809b44ce6f201c22411b7af36b9620"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-f09e47.smartcharts.js","b33d5383fd245183fc04294ebec9fb3c"],["/js/smartcharts/vendors~resize-observer-polyfill-5a8bd4.smartcharts.js","f89e98f9a6078a52cc8b215acab4b6ca"],["/js/smartcharts/vi-po-0526d0.smartcharts.js","041805254f19351a76a26b7db8dd335c"],["/js/smartcharts/zh_cn-po-7904a7.smartcharts.js","0d51260225a1d0ee9cc389229c5bcc4e"],["/js/smartcharts/zh_tw-po-b0653c.smartcharts.js","9ed96a2a8d8fed3a9159b59bac508616"],["/js/statement.a221c5aae10c685f8f36.js","b9b047727f07a4eee939f5550f6ca745"],["/js/vendors~open_positions~profit_table~statement.a221c5aae10c685f8f36.js","64386b7f72be21c0cd579e37356aeffa"],["/js/vendors~smart_chart.a221c5aae10c685f8f36.js","65a770ad50e1c69d65137e97f5935996"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







