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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","4a11273fb884869734606519d698b76d"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","e390cf4db0441ef818b3123fc5bc7649"],["/js/0.01336504c315e03db896.js","b99931cc5cfd49b62030f6ae0b8a57b9"],["/js/1.01336504c315e03db896.js","c02056b1dc7c29a2099d33946074b348"],["/js/10.01336504c315e03db896.js","f9377fbc5e6a9eb98e78a28ca30a02a3"],["/js/11.01336504c315e03db896.js","9970c3c9d04011e1dad4cd7e8ae272b6"],["/js/12.01336504c315e03db896.js","e8858ba65a01bc7a9e2cc8fe308f7ec5"],["/js/13.01336504c315e03db896.js","fb5565ab3f0f683bf6352fbe7cdc4e78"],["/js/14.01336504c315e03db896.js","096dc139f3cb831051810832a2554236"],["/js/15.01336504c315e03db896.js","73a452b4b97e3ceea6a9b6f3aaac06a1"],["/js/16.01336504c315e03db896.js","d0e84025360daa4cd6d81d1a44333c10"],["/js/17.01336504c315e03db896.js","3ca878e2e71462ef8c67ce9f4e2fb564"],["/js/18.01336504c315e03db896.js","3cd5763c822284e7b1418b2ca74c396d"],["/js/19.01336504c315e03db896.js","35ce5805f697450d87971d58884e5717"],["/js/2.01336504c315e03db896.js","68c204754a4b5a72352d23b5dd2aa77a"],["/js/20.01336504c315e03db896.js","c32eb08fbcf2f62ca014cb9d6cced8b6"],["/js/21.01336504c315e03db896.js","4a6bd4c5fddacedede75b70dd89472bd"],["/js/22.01336504c315e03db896.js","ce071c5a50d2114edbb9a45d6a7c88bf"],["/js/23.01336504c315e03db896.js","14867f053fce4f99f0f6ce994c1a65c8"],["/js/24.01336504c315e03db896.js","48f9e371789e0d7e8bd870b2c63caedf"],["/js/25.01336504c315e03db896.js","d31dd39e820c7207412664ff72b72f85"],["/js/26.01336504c315e03db896.js","3c6a824c86163630276d081a7d896923"],["/js/27.01336504c315e03db896.js","e996e77571d3970d60069a2b64cba547"],["/js/28.01336504c315e03db896.js","7d9edebef86f6dd0694c8ae4abe6b1ee"],["/js/29.01336504c315e03db896.js","9111e7cb57ef7039a46a73f484390e74"],["/js/3.01336504c315e03db896.js","795ee9fbaa58f42f2888f36852637164"],["/js/30.01336504c315e03db896.js","a9b42dc239b806d9d921065032a90bbd"],["/js/31.01336504c315e03db896.js","72aaa5fba2a83ca7a97e160237901d2c"],["/js/32.01336504c315e03db896.js","0da704302f761bd62e7b2b0bd2723011"],["/js/33.01336504c315e03db896.js","437b69e1e06348749e83a6b510f6ffee"],["/js/34.01336504c315e03db896.js","e33a5f00e0974bc8c402a5bd3a5fce7b"],["/js/35.01336504c315e03db896.js","62ef551c836109ac4de2016110d57a85"],["/js/36.01336504c315e03db896.js","6b9d066ebbeecdea4dea18c90da2e20c"],["/js/37.01336504c315e03db896.js","57568c065281e435052b7609d8f49e8d"],["/js/38.01336504c315e03db896.js","3b3862c5b064c56c7ff1cfbc57148dd9"],["/js/39.01336504c315e03db896.js","5a72e7660f125f3d013a63b6a2627c93"],["/js/4.01336504c315e03db896.js","6a7532751fcc7163c1de7e107b038016"],["/js/40.01336504c315e03db896.js","b3a2b269507fe6e3911ffc8b6453bbf4"],["/js/404.01336504c315e03db896.js","d53c4659f4da85d0b67cf668828f5c00"],["/js/41.01336504c315e03db896.js","dac4e1326ae22f9f69d682173e77c37a"],["/js/42.01336504c315e03db896.js","5647fa9d791899ffad275eb2d101d40a"],["/js/43.01336504c315e03db896.js","c5e05dfb422b881c87ff1969e6564bc1"],["/js/44.01336504c315e03db896.js","30bdc6b453b6bce62bc0fa6d629b22a1"],["/js/45.01336504c315e03db896.js","5cf1faee66ea286795cefa34a052d4bb"],["/js/46.01336504c315e03db896.js","505cb69ecd63a988c5bcfc604846b617"],["/js/47.01336504c315e03db896.js","c76f39233f81c47973b994b012fc3343"],["/js/48.01336504c315e03db896.js","f3bad99d83f7edeb477ce8cf265f1ff1"],["/js/49.01336504c315e03db896.js","ae767c480e4b986c28cf7a8d73327ba6"],["/js/5.01336504c315e03db896.js","e4b4dc93fdbd4e802e2b0cf91303fe3b"],["/js/50.01336504c315e03db896.js","427c5c60b3eab88a3ef359e1de2f86e5"],["/js/51.01336504c315e03db896.js","d6104ba47695ca5690dea508fa6a6d6c"],["/js/52.01336504c315e03db896.js","7736c82144d5fecb3740dd4e2cfa57f9"],["/js/53.01336504c315e03db896.js","526c61c889d43dc8a30fecc79324108b"],["/js/54.01336504c315e03db896.js","d12cfa061e39ea6f6207978d01c52465"],["/js/55.01336504c315e03db896.js","1bc73c497e6a3f07774f8801f795f310"],["/js/56.01336504c315e03db896.js","5e0aca04718c2bcf9c7d92cd858e84bd"],["/js/57.01336504c315e03db896.js","92be20496ff1aa595116bdb5c63c718d"],["/js/58.01336504c315e03db896.js","087bf898fe5859f3e450b851a95dbf04"],["/js/59.01336504c315e03db896.js","0e2c542606b8de537d7452013ea12cc6"],["/js/6.01336504c315e03db896.js","07f9d98050e5bde1648913e45bdfaabc"],["/js/60.01336504c315e03db896.js","b6f140f62f425ad3efea9acfdbbdb804"],["/js/61.01336504c315e03db896.js","fa89275111849150e041f0bdee612877"],["/js/62.01336504c315e03db896.js","1f6f5c8b7e862f00ce5fd81ecdd5680f"],["/js/63.01336504c315e03db896.js","e09ca479865fd8dbd3998b62c461932b"],["/js/64.01336504c315e03db896.js","e52e76d01ab71b9473f8bbe494bbd4a0"],["/js/65.01336504c315e03db896.js","7100b4d6e206b284f44f54e8237a4ce8"],["/js/66.01336504c315e03db896.js","b366d6c5cbaa66bc7ee1782b5316e76e"],["/js/67.01336504c315e03db896.js","060ab70d516743fc58c8699fa2001a16"],["/js/68.01336504c315e03db896.js","db9f4706e6b0063879288626f23c486b"],["/js/69.01336504c315e03db896.js","15e3e931bf7c156acc72af747267175f"],["/js/7.01336504c315e03db896.js","1e511f0830e289f385c617e5e4a08bbe"],["/js/70.01336504c315e03db896.js","29beb70c08020e13f595dd19f3c950e6"],["/js/71.01336504c315e03db896.js","27ed7adaddc63b3c906ae6b1334b6ee4"],["/js/8.01336504c315e03db896.js","03e2cc9d1e29d573552fd3396201ce87"],["/js/9.01336504c315e03db896.js","7454000730425252b550957dad64fb1f"],["/js/account-info.01336504c315e03db896.js","97eda80b05582e4d1cb94df527c973d6"],["/js/contract.01336504c315e03db896.js","e6f9a0fd281333ef6e90dc2eba4cc3e5"],["/js/default~open_position~1833eefb.01336504c315e03db896.js","030cd0bfc96b6b289a85fced5fa73ef6"],["/js/digits.01336504c315e03db896.js","a673ac065a027c870ab7f3d94dd60644"],["/js/info-box.01336504c315e03db896.js","49d8725b41dc9803bedbe622d2f56b4e"],["/js/main.01336504c315e03db896.js","9423b4f752ee2a6ff8e08ad31ecc1765"],["/js/modals.01336504c315e03db896.js","7379eab9b16bbe7a867aa606134b5c1d"],["/js/notification-messages.01336504c315e03db896.js","2da7fd8731168562f6aecb246ecabf9a"],["/js/open_positions.01336504c315e03db896.js","07f441e2bb6d46f1dc0e45a58fcc2fc3"],["/js/profit_table.01336504c315e03db896.js","c62bfed8dcbfd835d078ee12af3a40a7"],["/js/push-notification.01336504c315e03db896.js","27dcbcd4095f4d91d2f4561da824ed34"],["/js/reports.01336504c315e03db896.js","d9fa6844860e7f59e1ce8bb3e2c8f2f3"],["/js/screen-small.01336504c315e03db896.js","d5ad6e2d2423c8bed2d533fda9efa6df"],["/js/settings-chart.01336504c315e03db896.js","326937ca4367fceb55a11684c949b846"],["/js/settings-language.01336504c315e03db896.js","df6b829b0623579edb1eb948b99dfcea"],["/js/settings-theme.01336504c315e03db896.js","4cb3d982946dfb397233c74672f46056"],["/js/smart_chart.01336504c315e03db896.js","2e42bd95a1ae6b03ac9af6438e897bc6"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.01336504c315e03db896.js","2517fd008e389bf5af1bbe66d862e41a"],["/js/toggle-menu-drawer.01336504c315e03db896.js","40c2efbef1a42a0b3fe628cf844be8f7"],["/js/two-month-picker.01336504c315e03db896.js","fe98d93233e7583a5ae020ea830f7154"],["/js/vendors~main.01336504c315e03db896.js","898e61590182a1b13da8cd660d183c37"],["/js/vendors~open_position~7c650be5.01336504c315e03db896.js","118af5f20b787b525e434a7dcebc638e"],["/js/vendors~smart_chart.01336504c315e03db896.js","6ce68391b57f5829ee1e9f04c5712599"],["/js/work-in-progress.01336504c315e03db896.js","9a4f887cdac1b1768cd04871b4db62f5"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







