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

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/app.css","2804be64c496996f4b3b7b1ef5f7341d"],["/bot/css/bot.css","a615363a787f8ca1b21d5b7a19ae9492"],["/bot/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/bot/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/bot/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/bot/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot/index.html","909225191e4d5ba98f538496e366bd5d"],["/bot/js/0.d04e00a68e2bd5a41eae.js","b2c2457b017cbc195ec38450881ceaf0"],["/bot/js/1.d04e00a68e2bd5a41eae.js","e0188fd3685d885aff0ff2adea23f4a7"],["/bot/js/10.d04e00a68e2bd5a41eae.js","5399192587fcd5b5fd01dda94a145582"],["/bot/js/11.d04e00a68e2bd5a41eae.js","9abe8af8e96a5d7548c3fb22cef1f962"],["/bot/js/12.d04e00a68e2bd5a41eae.js","1a230f8d14561a20a964dfa4b7d37d4e"],["/bot/js/13.d04e00a68e2bd5a41eae.js","4af47ecf0c4154604e52d55697ae9dd9"],["/bot/js/14.d04e00a68e2bd5a41eae.js","33a8e24f6e06135774d2b30680568706"],["/bot/js/15.d04e00a68e2bd5a41eae.js","78b170e3dc7193e1e24dc8eeab08bbbc"],["/bot/js/16.d04e00a68e2bd5a41eae.js","13b87780d9317a2b1564ae038327720f"],["/bot/js/17.d04e00a68e2bd5a41eae.js","37dd22d70f235feff4f2d3e237e418dd"],["/bot/js/18.d04e00a68e2bd5a41eae.js","9ee5e88549fa42b35ddd552f5f2370df"],["/bot/js/19.d04e00a68e2bd5a41eae.js","cdfab7fb93bcf778161daf81f1a315df"],["/bot/js/2.d04e00a68e2bd5a41eae.js","87d1325ee995c353cf6a29f46934f549"],["/bot/js/20.d04e00a68e2bd5a41eae.js","1d9c5fbca1ca857edade1dfbb31840e4"],["/bot/js/21.d04e00a68e2bd5a41eae.js","0cede7abed32616893c5015b0076c714"],["/bot/js/22.d04e00a68e2bd5a41eae.js","6898b740cbaf4208a2b2a074a42a3cd1"],["/bot/js/23.d04e00a68e2bd5a41eae.js","b7bd50b232cbe10ec381ab3bef3aa4dc"],["/bot/js/24.d04e00a68e2bd5a41eae.js","690b5a9b0cd04a25419a3b90a1313130"],["/bot/js/25.d04e00a68e2bd5a41eae.js","ab432020474d6307b1ce9def65f7e43e"],["/bot/js/26.d04e00a68e2bd5a41eae.js","cad07b7e2a7fea9db645c6b2a01d14bc"],["/bot/js/27.d04e00a68e2bd5a41eae.js","a5fba7610182bc66720c9e25789784d7"],["/bot/js/28.d04e00a68e2bd5a41eae.js","b17221944accd77978c398dc8fe32bef"],["/bot/js/29.d04e00a68e2bd5a41eae.js","d4e56267a7d5171fb507ebb19e8c3971"],["/bot/js/3.d04e00a68e2bd5a41eae.js","406abd03cb3b3ba88692451e0f0e353b"],["/bot/js/30.d04e00a68e2bd5a41eae.js","7b4972289d441522d600298c4c7aaed1"],["/bot/js/31.d04e00a68e2bd5a41eae.js","4af1e3bb37e87cf1a40178c4ed52fe94"],["/bot/js/32.d04e00a68e2bd5a41eae.js","788d0cf0523f8828716a866c4dce3e89"],["/bot/js/33.d04e00a68e2bd5a41eae.js","5e0c1721ae2beaca1655d8ab95f62957"],["/bot/js/34.d04e00a68e2bd5a41eae.js","9558172ad5aa390aca6119f198514c02"],["/bot/js/35.d04e00a68e2bd5a41eae.js","dfca9beac6c2f1802d1fc70e0b789924"],["/bot/js/36.d04e00a68e2bd5a41eae.js","c948b4789cc03710f720d40d367163ca"],["/bot/js/37.d04e00a68e2bd5a41eae.js","68bd5697c2e13c1e2b9df7a7dfca3934"],["/bot/js/38.d04e00a68e2bd5a41eae.js","66af5cac2d8bd5e96b179755e813f451"],["/bot/js/39.d04e00a68e2bd5a41eae.js","453b23517fb915eaa005aa1e512dcf0e"],["/bot/js/4.d04e00a68e2bd5a41eae.js","765fde779a6f9cb93e0f1f11bda11abd"],["/bot/js/40.d04e00a68e2bd5a41eae.js","d5bf572a2ecf66a06af93e8cc5528588"],["/bot/js/404.d04e00a68e2bd5a41eae.js","819d8ca3a3945649b8285d3da39afe4a"],["/bot/js/41.d04e00a68e2bd5a41eae.js","d65c66abea1ae0fd6fe2c923275ef043"],["/bot/js/42.d04e00a68e2bd5a41eae.js","2aa3310004921778dfbf93b63cf293d6"],["/bot/js/43.d04e00a68e2bd5a41eae.js","02c0c468fa4404bd7a7dcdd5aa1b1270"],["/bot/js/44.d04e00a68e2bd5a41eae.js","14f512bfe466a37aabbee877f043ce28"],["/bot/js/45.d04e00a68e2bd5a41eae.js","b27fd5efa9b3161f82a93feb6d286156"],["/bot/js/46.d04e00a68e2bd5a41eae.js","feb820c633e85c54211f9b852401e00f"],["/bot/js/47.d04e00a68e2bd5a41eae.js","ce7d6546d172ca1116e01ac950465f79"],["/bot/js/48.d04e00a68e2bd5a41eae.js","92391a742cb25f710ce933f3634d7aa8"],["/bot/js/49.d04e00a68e2bd5a41eae.js","71fd8a6e9e7a10d0761ec5f2b02e7317"],["/bot/js/5.d04e00a68e2bd5a41eae.js","7cd4047ccfa9cdc1bb63c8b255df4312"],["/bot/js/50.d04e00a68e2bd5a41eae.js","fbd534ac1d3e96968b04f24eacd0a38c"],["/bot/js/51.d04e00a68e2bd5a41eae.js","91db13eb23869ff9ffcf8cddad8ad48f"],["/bot/js/52.d04e00a68e2bd5a41eae.js","1d7c2eb2c6d19b778d26e83d443dcfc8"],["/bot/js/53.d04e00a68e2bd5a41eae.js","f75a4740f91bb6dbafff37ef3d160f26"],["/bot/js/54.d04e00a68e2bd5a41eae.js","e8458e0e238eefcecd027dcbcda18112"],["/bot/js/55.d04e00a68e2bd5a41eae.js","c0de4453e3d5ecada55cc371d1611fda"],["/bot/js/56.d04e00a68e2bd5a41eae.js","4e7860011b855b360887050b3941a8e9"],["/bot/js/57.d04e00a68e2bd5a41eae.js","89f2cb1cb331520d7571b387416fa509"],["/bot/js/58.d04e00a68e2bd5a41eae.js","266623ec1ebf057d63ed00d56f4647d9"],["/bot/js/59.d04e00a68e2bd5a41eae.js","24010d43af82f6929e8a02874aee2d0e"],["/bot/js/6.d04e00a68e2bd5a41eae.js","f6fab14322609dbb13bf348cfdf13b21"],["/bot/js/60.d04e00a68e2bd5a41eae.js","0eedba4886721a36b0e8d71cbb2f1bf6"],["/bot/js/61.d04e00a68e2bd5a41eae.js","8741d71978ac248a0f4c79f47611dc75"],["/bot/js/62.d04e00a68e2bd5a41eae.js","2c3f0f8510d17fd1ce5ef6171fef6eac"],["/bot/js/63.d04e00a68e2bd5a41eae.js","9fceb3fa8de0d6efe37910f290599583"],["/bot/js/64.d04e00a68e2bd5a41eae.js","4cc7ee022077cfc5d091095749853b41"],["/bot/js/65.d04e00a68e2bd5a41eae.js","baa5caf6cff1807c7b67cd20697d7de9"],["/bot/js/66.d04e00a68e2bd5a41eae.js","b9714e09485aa83a2f265a7368daf05c"],["/bot/js/67.d04e00a68e2bd5a41eae.js","1e9446f04f597464b6e3490a10c4cabf"],["/bot/js/68.d04e00a68e2bd5a41eae.js","a82f30c3692c4e7ea87579cb748aa3c9"],["/bot/js/69.d04e00a68e2bd5a41eae.js","84fe7e35bf2ef79908659621df82565d"],["/bot/js/7.d04e00a68e2bd5a41eae.js","24aa57451f7688460e7e7055b1d0ff1d"],["/bot/js/70.d04e00a68e2bd5a41eae.js","04841bcccd8b8c93c0db9dc4ad79e2f9"],["/bot/js/71.d04e00a68e2bd5a41eae.js","a041877b2b622668b2716b89d58c90dd"],["/bot/js/8.d04e00a68e2bd5a41eae.js","6ea56fac8ea0735c2917a3ede0ac8f2e"],["/bot/js/9.d04e00a68e2bd5a41eae.js","ba3c70a7e7306c7f54b9eff1714a8ea2"],["/bot/js/DenialOfServiceModal.d04e00a68e2bd5a41eae.js","d1e9532e0ab92382177b29124d556415"],["/bot/js/MarketUnavailableModal.d04e00a68e2bd5a41eae.js","3e8a23d5fef3b1c41b146ef90c5130c1"],["/bot/js/ServicesErrorModal.d04e00a68e2bd5a41eae.js","1f3e5d789ae07378760ad7915defd98c"],["/bot/js/UnsupportedContractModal.d04e00a68e2bd5a41eae.js","d2ab7389d50a12c9e16da13ca1eaa56b"],["/bot/js/account-info.d04e00a68e2bd5a41eae.js","73043dfe96ad0e3cf9f7fd27e8ff60a1"],["/bot/js/bot/bot-sprite.svg","e163293b73b5b28c4d08239ad518187a"],["/bot/js/bot/bot.css","a615363a787f8ca1b21d5b7a19ae9492"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/xml/main.xml","f4aadc9f189e2d6c76b51c3dc7c36352"],["/bot/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/bot/js/main.d04e00a68e2bd5a41eae.js","71bb32a2d7cb752dd004e60ce43029bf"],["/bot/js/modals.d04e00a68e2bd5a41eae.js","24f9edd0c0198ae04f21d766df9782b4"],["/bot/js/push-notification.d04e00a68e2bd5a41eae.js","94cbaed4fb3a1b558775fda268aed651"],["/bot/js/settings-chart.d04e00a68e2bd5a41eae.js","0b3a1a5fd6a6239379392f00025157d5"],["/bot/js/settings-language.d04e00a68e2bd5a41eae.js","a65e6dc1a7055d28e60ed06d4f5042b3"],["/bot/js/settings-theme.d04e00a68e2bd5a41eae.js","fad486553413732383dfb20aed3c1b30"],["/bot/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/bot/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/bot/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/bot/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/bot/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/bot/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/bot/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/bot/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/bot/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/bot/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/bot/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/bot/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/bot/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/bot/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/bot/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/bot/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/bot/js/toggle-cashier.d04e00a68e2bd5a41eae.js","db51a0519dc4c783f6b40c5781e3861d"],["/bot/js/toggle-menu-drawer.d04e00a68e2bd5a41eae.js","3726a8a7b67c060fa35836193106991a"],["/bot/js/vendors~main.d04e00a68e2bd5a41eae.js","d8cce475724ca31d157525502ec81fb7"],["/bot/js/wallet-information.d04e00a68e2bd5a41eae.js","f327b84937bcb866bf4cdb71f0e406a4"],["/bot/js/work-in-progress.d04e00a68e2bd5a41eae.js","3d2db751b008f4720495eb046d75689c"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/bot/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/bot/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/bot/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/bot/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/bot/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/bot/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/bot/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/bot/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/bot/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/bot/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/bot/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/bot/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/bot/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/bot/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/bot/';
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







