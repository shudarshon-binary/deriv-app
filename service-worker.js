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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","7e548f679f8856f8620a276975b0ca6b"],["/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","555216a17c47642f3be6bbb63a7da913"],["/js/0.573e4d93f8839c42a378.js","59f4a1e32b4783b07c0e0b1dbae496ec"],["/js/1.573e4d93f8839c42a378.js","39829fab67791a0775e5de5fac299b96"],["/js/10.573e4d93f8839c42a378.js","9bcb6f75f647f3529032c8afb2f03a67"],["/js/11.573e4d93f8839c42a378.js","4e7e9b41a923397da650a53ea74763a4"],["/js/12.573e4d93f8839c42a378.js","78808f238a46eb6fce19e47602ae38b9"],["/js/13.573e4d93f8839c42a378.js","4edca83afd80c3b3c864edda4bc8c131"],["/js/14.573e4d93f8839c42a378.js","cb7ca22168562599ac899f8b2ab9917b"],["/js/15.573e4d93f8839c42a378.js","43afb0de3c645b1a2d182420eb2f9927"],["/js/16.573e4d93f8839c42a378.js","ab6cb06f2abce7f52e5e31d38653df63"],["/js/17.573e4d93f8839c42a378.js","85a0ea40ccd2849422dd1ecdd6a7ef6e"],["/js/18.573e4d93f8839c42a378.js","acba8bc641b0d92c195b8a21e6c4f85c"],["/js/19.573e4d93f8839c42a378.js","86200055e9d3d331178271454217fd9b"],["/js/2.573e4d93f8839c42a378.js","74687ca8c0785b412a44f20510e83a76"],["/js/20.573e4d93f8839c42a378.js","793ce05b7f433353ff35fff689bd1675"],["/js/21.573e4d93f8839c42a378.js","76b71ce073e2d3278ccb3ebf9e481c6b"],["/js/22.573e4d93f8839c42a378.js","1631f1a47226334b4b21a4ddc6c637cb"],["/js/23.573e4d93f8839c42a378.js","f4f9ccad768994d01c4d8ddd579ce93f"],["/js/24.573e4d93f8839c42a378.js","1436a6654895c38df340d3338721828d"],["/js/25.573e4d93f8839c42a378.js","e3478cf95b203646f72b1d877c3643f1"],["/js/26.573e4d93f8839c42a378.js","2d5dad7adafa6a4639b270478dca079f"],["/js/27.573e4d93f8839c42a378.js","fb0d020ede2af1a38d79cfd6d135a691"],["/js/28.573e4d93f8839c42a378.js","c9ca67e3c891d3efafe977e59f90c8ec"],["/js/29.573e4d93f8839c42a378.js","e971db03766a82b6a08cfbd01bd00baf"],["/js/3.573e4d93f8839c42a378.js","2c2586fff99170ebd12ff101824324eb"],["/js/30.573e4d93f8839c42a378.js","cd6a4fd632b20309297a125c62d12532"],["/js/31.573e4d93f8839c42a378.js","d9154aa0846e7acfcc21c6e0b9d2dbf2"],["/js/32.573e4d93f8839c42a378.js","dcdd53d32ee2bcfb5baae8ccad9712c1"],["/js/33.573e4d93f8839c42a378.js","9e5d165e88948ba2d05bc79677bd19fb"],["/js/34.573e4d93f8839c42a378.js","d1eefba303e11599a52f7c4a487cc8af"],["/js/35.573e4d93f8839c42a378.js","237121d21922a3e7398000daaaaaf37d"],["/js/36.573e4d93f8839c42a378.js","5010d60d73d8526c167b7364026cb3e5"],["/js/37.573e4d93f8839c42a378.js","cdc7cddae138eb34dcd3f62619db0439"],["/js/38.573e4d93f8839c42a378.js","c064d8d6f4b213f3fbe486c6e0d2b5a5"],["/js/39.573e4d93f8839c42a378.js","be2f9415a9e1f855d6b3c568c7798563"],["/js/4.573e4d93f8839c42a378.js","9f678b6914b77b6b84bf1d10ad838bdb"],["/js/40.573e4d93f8839c42a378.js","658736c9cfce43e10b197d4d090c2589"],["/js/404.573e4d93f8839c42a378.js","c50bcb6f448ce8694dd2ccef28019340"],["/js/41.573e4d93f8839c42a378.js","79be28c027c20a3d2edf93ea2c807d71"],["/js/42.573e4d93f8839c42a378.js","d3d6efbf0e358fa524e33fb4dd946bef"],["/js/43.573e4d93f8839c42a378.js","413e7e1ff128cbdab678c471a3998440"],["/js/44.573e4d93f8839c42a378.js","da6f53af95b84a0a0a4ceac63ec418ca"],["/js/45.573e4d93f8839c42a378.js","68b03af8fce53ed514b88c8fe12cc4d2"],["/js/46.573e4d93f8839c42a378.js","a514d705798d83124cb8cbcbcc705289"],["/js/47.573e4d93f8839c42a378.js","3b170e554ac1f0333054e3933d45be1d"],["/js/48.573e4d93f8839c42a378.js","7b65c44ef4b13699590fac79e29a1718"],["/js/49.573e4d93f8839c42a378.js","78130d3c21e19196b8d9e1674214a3d8"],["/js/5.573e4d93f8839c42a378.js","f9c8d5f7f1946b464e82065c569e16aa"],["/js/50.573e4d93f8839c42a378.js","ec09aa4838f7e4843d5036850c213649"],["/js/51.573e4d93f8839c42a378.js","3bb81bdac449fc5f0e8c70a9f99f9b98"],["/js/52.573e4d93f8839c42a378.js","45030aef40d52b019e4ca0545c84fbcb"],["/js/53.573e4d93f8839c42a378.js","b9fa8694816bcf0c2af1863f7a00d8a8"],["/js/54.573e4d93f8839c42a378.js","9863f5d82c789bdcc660316e408b3538"],["/js/55.573e4d93f8839c42a378.js","6fafa021157b71527fa99c6168af8799"],["/js/56.573e4d93f8839c42a378.js","b75f679c57823b3cfcc77c0dc83bf1d1"],["/js/57.573e4d93f8839c42a378.js","d477b58e1699688e6dbb2830c5f98335"],["/js/58.573e4d93f8839c42a378.js","b23c65fa47404be9527a659bf431c2f2"],["/js/59.573e4d93f8839c42a378.js","8a8a5505aa0b653d1a55a2b43bded259"],["/js/6.573e4d93f8839c42a378.js","9231e59efad2ca70a02ce2cec3c68a76"],["/js/60.573e4d93f8839c42a378.js","91b48c82f60564e7df3dd2e3c97c9534"],["/js/61.573e4d93f8839c42a378.js","53efc1eb85176b4a46b49cadcc75cde3"],["/js/62.573e4d93f8839c42a378.js","ee49608a2a8a64f29ae7ed7e0ac93f76"],["/js/63.573e4d93f8839c42a378.js","16627299453c83ef15a6145744621683"],["/js/64.573e4d93f8839c42a378.js","6d65d2a2bd30cf305636df9eb05f7b3c"],["/js/65.573e4d93f8839c42a378.js","c1bfddc93ec7d14420a20f610b5d2c80"],["/js/66.573e4d93f8839c42a378.js","6f3d152ae3178a65a55e3ad7565114c4"],["/js/67.573e4d93f8839c42a378.js","d01be271dcc0c0b6c06168ad1c49782d"],["/js/68.573e4d93f8839c42a378.js","0ff209ceb67384fa27248773ec150396"],["/js/69.573e4d93f8839c42a378.js","3e9de37682cd56705669819e07b00bd9"],["/js/7.573e4d93f8839c42a378.js","d3bd96a332b26c2a7b08a683979f3621"],["/js/8.573e4d93f8839c42a378.js","2b861bc0be24f9da2bc5505a4a32f062"],["/js/9.573e4d93f8839c42a378.js","238837a980ce52955b031c32527da437"],["/js/contract.573e4d93f8839c42a378.js","46cb91c6940e17e35067b03fde895475"],["/js/main.573e4d93f8839c42a378.js","150a958bbde4602f575ccb661dfb869d"],["/js/open_positions.573e4d93f8839c42a378.js","1b620eb2edebe6746c89e1c450baee07"],["/js/open_positions~profit_table~statement.573e4d93f8839c42a378.js","58f9688048e3ed1c19e54aa7c8e9620b"],["/js/profit_table.573e4d93f8839c42a378.js","6124e85122f6e344271000181dc5637f"],["/js/reports.573e4d93f8839c42a378.js","6d320680bbf5e9fb1db19561e1cc5fd9"],["/js/smart_chart.573e4d93f8839c42a378.js","406e485732d770223bc0f8ac89460587"],["/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/js/statement.573e4d93f8839c42a378.js","702c4fa851bd8349dcd22388fd119346"],["/js/vendors~open_positions~profit_table~statement.573e4d93f8839c42a378.js","01f4fea8ad479f16700cab3d22519e49"],["/js/vendors~smart_chart.573e4d93f8839c42a378.js","9dfeb9dc209c472db110bb868cf1e86a"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







