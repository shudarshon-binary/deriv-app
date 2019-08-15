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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","01a7b4f7b79aab200102aa7bd393499e"],["/css/bot.css","ae229214f86ef0db0d7ae68a1ad260bc"],["/css/modals.css","abd2c87eeaae3ff15dbba3ba164c0687"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","88693be92b2ec0a97a90e9fd7c28f541"],["/js/0.c51f314a50a276135f81.js","badb21fb6e788a1dbd28761e5d85781b"],["/js/1.c51f314a50a276135f81.js","bc895ca75d8808558029a74536444720"],["/js/10.c51f314a50a276135f81.js","f8249934c7d3385597dc02436bd063ac"],["/js/11.c51f314a50a276135f81.js","2794729da1af5609a5bea6ca3a0715b2"],["/js/12.c51f314a50a276135f81.js","37bb8b7e575df0a3182ee00508497ce4"],["/js/13.c51f314a50a276135f81.js","06d9f33a0d040fa4ea6a14566d913cf6"],["/js/14.c51f314a50a276135f81.js","854ba8f6afd5dd45930e1a852f4e229d"],["/js/15.c51f314a50a276135f81.js","78f990631726be38a87ed5b270cc09bd"],["/js/16.c51f314a50a276135f81.js","7cc8adfb1c7ce7f91e94e0095c54a475"],["/js/17.c51f314a50a276135f81.js","c2d62cdd9ff7d03fa57419b37d115901"],["/js/18.c51f314a50a276135f81.js","98dc4cdc7bb06967054840b43eaa2658"],["/js/19.c51f314a50a276135f81.js","11dad0f5cbf11859f30c6c2964b1203b"],["/js/2.c51f314a50a276135f81.js","ad3418707b027e0cbbc45aa18980ca65"],["/js/20.c51f314a50a276135f81.js","26019dd00753d2a4a9a6a179dd2a5d9c"],["/js/21.c51f314a50a276135f81.js","7429261121cb7fe46194f2801e5e75a9"],["/js/22.c51f314a50a276135f81.js","1924e1a74cf6faa673e8710e9fb8d78d"],["/js/23.c51f314a50a276135f81.js","ec18a4fcfddedd0fc42fb2e7bb7738a8"],["/js/24.c51f314a50a276135f81.js","8a5a730b54f5ba0f74ceb3a60a1d2df7"],["/js/25.c51f314a50a276135f81.js","7a09b2714e81ca43a68a4287551dd9ad"],["/js/26.c51f314a50a276135f81.js","604f55231d4993681fd752570207f0f2"],["/js/27.c51f314a50a276135f81.js","e8e4544a1aeb33dacdfc637bb4012d4b"],["/js/28.c51f314a50a276135f81.js","ea36407362c3e11da0168c0e75e36ac2"],["/js/29.c51f314a50a276135f81.js","c79c5c1564e6a01550431b4ec31b7bcf"],["/js/3.c51f314a50a276135f81.js","daa4ab191e5d9662ff08bc58d347775c"],["/js/30.c51f314a50a276135f81.js","4f3b10c4a6c38f6e9cde1c14db094e11"],["/js/31.c51f314a50a276135f81.js","f28964fb6d8d185b199b0242dac135d6"],["/js/32.c51f314a50a276135f81.js","bb7930def6c9f71971b8910a78b1fccb"],["/js/33.c51f314a50a276135f81.js","5853749c626944ff3bf870acc1ad33cb"],["/js/34.c51f314a50a276135f81.js","bf411177891a6e2d2f6e57c7b86824c8"],["/js/35.c51f314a50a276135f81.js","7dc154c657cec41031786ed82037ba3c"],["/js/36.c51f314a50a276135f81.js","ed806980078b310504030ba91c1a1c11"],["/js/37.c51f314a50a276135f81.js","29b82d68612468bfc66ddc2928382094"],["/js/38.c51f314a50a276135f81.js","7ce22cbff1ad478d674c3f3a64cd1253"],["/js/39.c51f314a50a276135f81.js","e30451e98a525652d4f3cd4b31e7ea26"],["/js/4.c51f314a50a276135f81.js","528f6a6ab77da678f3b2b547c3a2ee7c"],["/js/40.c51f314a50a276135f81.js","e8eac108e14667689b4782570fe58dca"],["/js/404.c51f314a50a276135f81.js","b21e3f8217fa70a8b14ce46f7658a747"],["/js/41.c51f314a50a276135f81.js","d48edca21e0b7d7e6251a2b2e60cf936"],["/js/42.c51f314a50a276135f81.js","199d748ecf8bc98aa7f747724bad39d8"],["/js/43.c51f314a50a276135f81.js","ab5d29811c1c94b91ee0050d8892c2c3"],["/js/44.c51f314a50a276135f81.js","913408c5a1432b4674ce7270163f21a4"],["/js/45.c51f314a50a276135f81.js","07fc2962647caf88468bb61ca6add77c"],["/js/46.c51f314a50a276135f81.js","a8b7f42ac3c6307d1b3100c9b5e4ad6a"],["/js/47.c51f314a50a276135f81.js","952ca9c913cc4245181662b482bae3fc"],["/js/48.c51f314a50a276135f81.js","078925aef25e4e0e6b7db2a60e6be0de"],["/js/49.c51f314a50a276135f81.js","4a9e00587aedfa9dc714fd00ab29a545"],["/js/5.c51f314a50a276135f81.js","b4d431038459ee485c7d4da93588ea81"],["/js/50.c51f314a50a276135f81.js","534b7441ea929cfd9717f787f4b62f7b"],["/js/51.c51f314a50a276135f81.js","bd7b42c9f5c74ed50bffa53a2c18e3f1"],["/js/52.c51f314a50a276135f81.js","480e46dfb4bc48e8a687eff3ec9addd4"],["/js/53.c51f314a50a276135f81.js","cc85841fbd4068e3283a7afc1b8c63e6"],["/js/54.c51f314a50a276135f81.js","81ca325834f46c7d43768efe24a8badd"],["/js/55.c51f314a50a276135f81.js","9cfbf42d9c28c29b00e0e097aab5c5ad"],["/js/56.c51f314a50a276135f81.js","976efdf420e5648010a28d230c4968c8"],["/js/57.c51f314a50a276135f81.js","44507969dba0dd8c70c6feb1e0059834"],["/js/58.c51f314a50a276135f81.js","50f8c1a199d0b3713decbcbbce278425"],["/js/59.c51f314a50a276135f81.js","6e739280e1e7d2d4aca8df22d9e58c25"],["/js/6.c51f314a50a276135f81.js","f9736b8a7db483189e4c106374873f89"],["/js/60.c51f314a50a276135f81.js","aed2d6eddb8649cd9712057c406da9a2"],["/js/61.c51f314a50a276135f81.js","9e5de7f25c44a3fcc6e7693443f420f6"],["/js/62.c51f314a50a276135f81.js","71ec58dc84832049b23c353dd912efbe"],["/js/63.c51f314a50a276135f81.js","e14ea84b34aa8af9fd6aec2002d0f196"],["/js/64.c51f314a50a276135f81.js","d17106bef91bed216160433cd7ea1c9b"],["/js/65.c51f314a50a276135f81.js","fa3b4cbcae32979b683df2e53c63ec99"],["/js/66.c51f314a50a276135f81.js","54ed6105ad32ab4d37aa24f0deaa7ccf"],["/js/67.c51f314a50a276135f81.js","db6f28ad04ea90fefd990a9f44b4f1ce"],["/js/68.c51f314a50a276135f81.js","9955e8abf1ccd1856ac59341350a6807"],["/js/69.c51f314a50a276135f81.js","349c2f42009e46f93c088a570ed416ad"],["/js/7.c51f314a50a276135f81.js","a9b4f837fe711dc34a13b3b82bc4a7b7"],["/js/70.c51f314a50a276135f81.js","a916feab540a8a7fa759d0182fda7d03"],["/js/71.c51f314a50a276135f81.js","31d140921c978af269324d3d7ec39f2f"],["/js/8.c51f314a50a276135f81.js","ea1b3ef3db69b455c200ef1f3ca27c3b"],["/js/9.c51f314a50a276135f81.js","c318d90b2d7c79c96a4008390999647a"],["/js/DenialOfServiceModal.c51f314a50a276135f81.js","8395822c2bbf859f92b70622e82627b1"],["/js/MarketUnavailableModal.c51f314a50a276135f81.js","2c8fc79654fd9f43926c857f680e519c"],["/js/ServicesErrorModal.c51f314a50a276135f81.js","74043ea9c7f97b4a52c037abba1c1bf4"],["/js/UnsupportedContractModal.c51f314a50a276135f81.js","bac246feb00d2c7b80037babefc14091"],["/js/account-info.c51f314a50a276135f81.js","7df294663dcabb118927363c53aa589e"],["/js/bot/bot-sprite.svg","a482d31dbb00820cf1ca30bbbac6e11a"],["/js/bot/bot.css","ae229214f86ef0db0d7ae68a1ad260bc"],["/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/js/bot/xml/main.xml","f4aadc9f189e2d6c76b51c3dc7c36352"],["/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/js/main.c51f314a50a276135f81.js","463c4aeec28679e979a831bfa20dd896"],["/js/modals.c51f314a50a276135f81.js","ae89964ea1122e3670e027f2a41b2869"],["/js/push-notification.c51f314a50a276135f81.js","1ef21112ad2133e44ea11ddd15a04997"],["/js/settings-chart.c51f314a50a276135f81.js","18952f288493d2f1acbe3907a0d8bd9b"],["/js/settings-language.c51f314a50a276135f81.js","18665f606c06e172a04101c73b4f8fa2"],["/js/settings-theme.c51f314a50a276135f81.js","36d064936997a092eda7fa27aaa8bd7c"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/toggle-cashier.c51f314a50a276135f81.js","80b2b86dd65b3201467c5e8efbb7d3e6"],["/js/toggle-menu-drawer.c51f314a50a276135f81.js","d13270a03ca84f48d1cda2592a368abf"],["/js/vendors~main.c51f314a50a276135f81.js","ac6bd03681302d3677d8db40c7a82188"],["/js/wallet-information.c51f314a50a276135f81.js","7ea52b068c8dfe8e09f97b0dc102c41b"],["/js/work-in-progress.c51f314a50a276135f81.js","5b1ddc8f3e8929bb05dae61c60e7ce28"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







