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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","01a7b4f7b79aab200102aa7bd393499e"],["/css/bot.css","ae229214f86ef0db0d7ae68a1ad260bc"],["/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","a3e228f4a643dd6f695cbab14c836072"],["/js/0.fdd579887daa9d0d0729.js","fd914391405a40a75fa573b3038006f1"],["/js/1.fdd579887daa9d0d0729.js","4b8390476a50ef348d618a97ec5c9e94"],["/js/10.fdd579887daa9d0d0729.js","a0d305bd8cd94b1e870a4af24d82cd3b"],["/js/11.fdd579887daa9d0d0729.js","8f0d4d2e8798a7a97cb946ce9fdf818d"],["/js/12.fdd579887daa9d0d0729.js","772674e60491507ff6256a3f58cec21b"],["/js/13.fdd579887daa9d0d0729.js","502d6c391f90ff7ac74718b9fda2b90f"],["/js/14.fdd579887daa9d0d0729.js","4d2be3d888d9e0960fec3e4252d4dbf8"],["/js/15.fdd579887daa9d0d0729.js","005c9c42361fd68ad982738e2c7998c4"],["/js/16.fdd579887daa9d0d0729.js","6fcce3517a88abbc59e18acf7eefc11a"],["/js/17.fdd579887daa9d0d0729.js","fab8093779ce78da2d9c2796999e089c"],["/js/18.fdd579887daa9d0d0729.js","c635aba89db6a78cdcaf6cccfd8f870b"],["/js/19.fdd579887daa9d0d0729.js","adf1b1becc6bf83dcf5819f20392625e"],["/js/2.fdd579887daa9d0d0729.js","0ce3121777dda79e0ca61f3a39ee9b07"],["/js/20.fdd579887daa9d0d0729.js","ea0706631483c8fb9f561bb421327868"],["/js/21.fdd579887daa9d0d0729.js","232b9b9aa883258d88ef05dd1033297b"],["/js/22.fdd579887daa9d0d0729.js","85aafe925ccad64c9b0252311d9689ae"],["/js/23.fdd579887daa9d0d0729.js","037ac2068b280bcfa709333224896d29"],["/js/24.fdd579887daa9d0d0729.js","3281ceb27f9d5797c1b2131677d36d95"],["/js/25.fdd579887daa9d0d0729.js","3ac236118454adac5bddea2e1ccf19f9"],["/js/26.fdd579887daa9d0d0729.js","85efe81b9be555259a3b9d47c3f6cdb5"],["/js/27.fdd579887daa9d0d0729.js","9758e0a561796dc4d28090f09cc91fea"],["/js/28.fdd579887daa9d0d0729.js","e453c380bafae2daab1a6ac3dd317400"],["/js/29.fdd579887daa9d0d0729.js","6403b64bc3fb776e3dd6661bce55dce0"],["/js/3.fdd579887daa9d0d0729.js","9ffb500e95a17a890d2574c71bc2dfd7"],["/js/30.fdd579887daa9d0d0729.js","4728815ac7d601e75448309eea30a7c2"],["/js/31.fdd579887daa9d0d0729.js","d6a6dd6fe91eea9af23742b877998915"],["/js/32.fdd579887daa9d0d0729.js","63c4f377dc5a188a9d0b7ceb0ea83043"],["/js/33.fdd579887daa9d0d0729.js","af47fd61cee111df0389482ffb18fa76"],["/js/34.fdd579887daa9d0d0729.js","c2ec6bdbbafaecdc4f7c5a92907564b4"],["/js/35.fdd579887daa9d0d0729.js","d00c982e309886429bd5c856e62e28a7"],["/js/36.fdd579887daa9d0d0729.js","a3e33e4c689cae8e32b15ca3d76a3598"],["/js/37.fdd579887daa9d0d0729.js","5b0ec0beb46445857aa96b56bc40c00b"],["/js/38.fdd579887daa9d0d0729.js","1a4d1529806dd599d7b6f2ade9ad5a3a"],["/js/39.fdd579887daa9d0d0729.js","2faf5eacb83b73be0aff3fa9606f1c65"],["/js/4.fdd579887daa9d0d0729.js","edef463de0eb48a92928a749e27520bb"],["/js/40.fdd579887daa9d0d0729.js","0ea9f522b8b71d41edeb33216e19f06a"],["/js/404.fdd579887daa9d0d0729.js","a3c2e161b227d0d8f02ce80cf44757bb"],["/js/41.fdd579887daa9d0d0729.js","7b0dff3a793e5ffb84b54a52da0c45c1"],["/js/42.fdd579887daa9d0d0729.js","c87ea88c3f64d3714003be7edbc40826"],["/js/43.fdd579887daa9d0d0729.js","5aa129c2bb38e0e05f8cf9e45c2655aa"],["/js/44.fdd579887daa9d0d0729.js","4bb4d256a7f405cb00f7a246d5c7aed8"],["/js/45.fdd579887daa9d0d0729.js","3d5833a92ce7836472ac14af2181b111"],["/js/46.fdd579887daa9d0d0729.js","56a0a47df82e4fad3b418458a41c8641"],["/js/47.fdd579887daa9d0d0729.js","a53c28d9d107ea94266fd87ce1175c79"],["/js/48.fdd579887daa9d0d0729.js","1b4be0bb7e9d53e3a9e65073b05c996e"],["/js/49.fdd579887daa9d0d0729.js","c6fe64984e32c0f1aafc3ffa671a464b"],["/js/5.fdd579887daa9d0d0729.js","de20d217593c47dbeb057dcb386a77a7"],["/js/50.fdd579887daa9d0d0729.js","778005b212cbc88011438a8a8103ce75"],["/js/51.fdd579887daa9d0d0729.js","1eff43a77b3d9e8e62c729a761e118f3"],["/js/52.fdd579887daa9d0d0729.js","e49caae583f3587d8eac5334017b9574"],["/js/53.fdd579887daa9d0d0729.js","fdfc026a13e6fa56f9c694e8b706d5e0"],["/js/54.fdd579887daa9d0d0729.js","075b0fc6e061aa94c66a85856fe64393"],["/js/55.fdd579887daa9d0d0729.js","8c07758a7447832c64107bb214dcb087"],["/js/56.fdd579887daa9d0d0729.js","069e9d4f0140b9dcd0b5837f515e26c5"],["/js/57.fdd579887daa9d0d0729.js","65e3a02d76e0ec850e94ad9f1fe18762"],["/js/58.fdd579887daa9d0d0729.js","a12f0dbab81ea283adfaa379058e6605"],["/js/59.fdd579887daa9d0d0729.js","8f46e41f0a5e57a0a179818b46af6fda"],["/js/6.fdd579887daa9d0d0729.js","c30789d317a1afec3abc300a1069d65b"],["/js/60.fdd579887daa9d0d0729.js","cd03a6e32ac26f82ec0700ee7bb95eed"],["/js/61.fdd579887daa9d0d0729.js","91c7e5996bd02db6bfb87c5fc81bad13"],["/js/62.fdd579887daa9d0d0729.js","c303fa0a0036ff3215cbfec586086fe1"],["/js/63.fdd579887daa9d0d0729.js","b81f93fe906c58ec74da2fa97d714181"],["/js/64.fdd579887daa9d0d0729.js","9a0f1cf4e1d510eefb053e607c5dd54f"],["/js/65.fdd579887daa9d0d0729.js","f1a3f4185b2f28729ea7156e5deea0da"],["/js/66.fdd579887daa9d0d0729.js","23806efef96b1a2735f42c944e1e36c1"],["/js/67.fdd579887daa9d0d0729.js","583b345917cd1882206ca683bd3adac0"],["/js/68.fdd579887daa9d0d0729.js","e0c31ff5dfca3a554b45a28b6d80de8c"],["/js/69.fdd579887daa9d0d0729.js","fd0c688073db1342427f4dd81d10db55"],["/js/7.fdd579887daa9d0d0729.js","27226a095176fa2e9103da341d1f58b9"],["/js/70.fdd579887daa9d0d0729.js","a81ffcfa2684af3aadc62ef3f76a0f90"],["/js/71.fdd579887daa9d0d0729.js","7c7e69874233e96a4e29c7dafca2de63"],["/js/8.fdd579887daa9d0d0729.js","edcf60a8b9e60a7c70842bfef87a8939"],["/js/9.fdd579887daa9d0d0729.js","36ccf1c5d729820402ded8f4c1d2967b"],["/js/DenialOfServiceModal.fdd579887daa9d0d0729.js","02bb31c1c034035ca7e33e26415a123d"],["/js/MarketUnavailableModal.fdd579887daa9d0d0729.js","728f452d6d15584cfbab006d06a0b763"],["/js/ServicesErrorModal.fdd579887daa9d0d0729.js","1ddd507b87ff30fe7cbb87bfc3fb18bf"],["/js/UnsupportedContractModal.fdd579887daa9d0d0729.js","4f052764fb182b14450544e6cb125c03"],["/js/account-info.fdd579887daa9d0d0729.js","443e1dcd593c993e4679ff0486886604"],["/js/bot/bot-sprite.svg","a482d31dbb00820cf1ca30bbbac6e11a"],["/js/bot/bot.css","ae229214f86ef0db0d7ae68a1ad260bc"],["/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/js/bot/xml/main.xml","f4aadc9f189e2d6c76b51c3dc7c36352"],["/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/js/main.fdd579887daa9d0d0729.js","e24ad72649763c8895ceae7cbd53343e"],["/js/modals.fdd579887daa9d0d0729.js","046aab27c35acaf74eba2307c7f7cf1f"],["/js/push-notification.fdd579887daa9d0d0729.js","dd3b0d7738a6898a0b123d15ecb27fd5"],["/js/settings-chart.fdd579887daa9d0d0729.js","6c89c4ad287710cd5040ae6f96479e63"],["/js/settings-language.fdd579887daa9d0d0729.js","66299c0fd47e10e6ac954907ffcc5da8"],["/js/settings-theme.fdd579887daa9d0d0729.js","4c7d5c45ba8da140b3b1fd722bbe5522"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/toggle-cashier.fdd579887daa9d0d0729.js","629a21838fa2cdb2eee2a53c6c983731"],["/js/toggle-menu-drawer.fdd579887daa9d0d0729.js","f794aec579002e2040ab560552c9ea4b"],["/js/vendors~main.fdd579887daa9d0d0729.js","a9410e1518ea4bf329b4723c1adfb906"],["/js/wallet-information.fdd579887daa9d0d0729.js","3d8c421f0e2a9b9981c6efaf8280775b"],["/js/work-in-progress.fdd579887daa9d0d0729.js","6a2fdf7e63accc5a429d39ef8bf0a31f"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







