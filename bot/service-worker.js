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

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/1.css","88048e0b9dd114bf918358f103799e22"],["/bot/css/2.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/bot/css/AccountSignupModal.css","60f50a9dce1defb8c369dfc83bfb638a"],["/bot/css/app.css","08eb98bda86e0210fe99bdac1cfb6b74"],["/bot/css/bot.css","b594556c7b47322e4f04d8d1e8f5c74e"],["/bot/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","50c5e2d873348e7d63b5f4643d8d0e01"],["/bot/js/0.afd02de9d2c678d93734.js","1d9b5016ac937177866d659461709542"],["/bot/js/1.afd02de9d2c678d93734.js","6edd6194f23834a347d7c741b7d24a1a"],["/bot/js/10.afd02de9d2c678d93734.js","1defdb349ac561fcf1eb0e4a159ac525"],["/bot/js/11.afd02de9d2c678d93734.js","94865390e895ee83c704eb8a86a1115c"],["/bot/js/12.afd02de9d2c678d93734.js","d1a8a03b0c38d7f14b9709abf501127b"],["/bot/js/13.afd02de9d2c678d93734.js","791f05bd5d69d25b309bb1cd5158a927"],["/bot/js/14.afd02de9d2c678d93734.js","42a4673e92a5e68b7eb94d4a88132100"],["/bot/js/15.afd02de9d2c678d93734.js","0d04fa404dc32e0c32215d143c188b51"],["/bot/js/16.afd02de9d2c678d93734.js","55bd3588629ca3688ec096fa08b8d0cb"],["/bot/js/17.afd02de9d2c678d93734.js","bca1bef04df1129db60aa28c7762f464"],["/bot/js/18.afd02de9d2c678d93734.js","5d4d6af2ebb66980a1232596c9e1b8e7"],["/bot/js/19.afd02de9d2c678d93734.js","1e32f828bd3ea2085a14e2b5880273aa"],["/bot/js/2.afd02de9d2c678d93734.js","9b151fe19a4eae3e9c1198f46f2711c0"],["/bot/js/20.afd02de9d2c678d93734.js","76373ceed8c54984ce47a0a476386db4"],["/bot/js/21.afd02de9d2c678d93734.js","d9eaf05c4e6ce0ef3771d38b76e64656"],["/bot/js/22.afd02de9d2c678d93734.js","698dcf2787115a43865b2987bdeaf652"],["/bot/js/23.afd02de9d2c678d93734.js","38435d506d1daf6d8f316a528b53752b"],["/bot/js/24.afd02de9d2c678d93734.js","477d10c1cc5da165c0a5ae2d994d8df5"],["/bot/js/25.afd02de9d2c678d93734.js","7d6bce50da9ae7cba9ea173fbbdb0438"],["/bot/js/26.afd02de9d2c678d93734.js","27739af07b9d9776626de4c530d1d01f"],["/bot/js/27.afd02de9d2c678d93734.js","fc35bcb5634d10d6b7680d8505c1df86"],["/bot/js/28.afd02de9d2c678d93734.js","385c0f89ee8eefe8dda6736a1eebae29"],["/bot/js/29.afd02de9d2c678d93734.js","d1b6c75480a317b0dd4a1e50b53a604f"],["/bot/js/3.afd02de9d2c678d93734.js","a9d3426b993528457c668e8c13646da0"],["/bot/js/30.afd02de9d2c678d93734.js","56d4faa0fa2e9e7812a51d4473a17af2"],["/bot/js/31.afd02de9d2c678d93734.js","b99c217df8d5e2e2212018e9c5758d05"],["/bot/js/32.afd02de9d2c678d93734.js","610ab47f3edb7e9978de38b31d6c9565"],["/bot/js/33.afd02de9d2c678d93734.js","7f9cd8308c13cdbbea6b55c5dfff02e9"],["/bot/js/34.afd02de9d2c678d93734.js","5ebbddee9c2fadae07257d18a1a839a4"],["/bot/js/35.afd02de9d2c678d93734.js","a03c8ecf5836002fe18754611ae6ade2"],["/bot/js/36.afd02de9d2c678d93734.js","86f3fa8451aa65789a782fcea8f3b0ac"],["/bot/js/37.afd02de9d2c678d93734.js","86453010431a2be1334fb3a4802a2296"],["/bot/js/38.afd02de9d2c678d93734.js","b9ed3b78cdc612d255f4a63d74d08781"],["/bot/js/39.afd02de9d2c678d93734.js","3a3e1f5e41182322b09488851f100dad"],["/bot/js/4.afd02de9d2c678d93734.js","42470948e45953e976555f5934775322"],["/bot/js/40.afd02de9d2c678d93734.js","3dea0d12ce55cca4a96d97eb04132b50"],["/bot/js/404.afd02de9d2c678d93734.js","d7ba1a901779b9b7ef4b19f63e7cbb6c"],["/bot/js/41.afd02de9d2c678d93734.js","a7f6d63e72c8a35e7fefeda4e0f7c28f"],["/bot/js/42.afd02de9d2c678d93734.js","3012bb453317fbfeb25b53dbe244daf3"],["/bot/js/43.afd02de9d2c678d93734.js","07448325bee71931c05d48cdaeb0fedc"],["/bot/js/44.afd02de9d2c678d93734.js","be369334830655c4a0dd78973a1f4704"],["/bot/js/45.afd02de9d2c678d93734.js","7737c6f3cdd2683c28628892b4cef985"],["/bot/js/46.afd02de9d2c678d93734.js","655a529dfc50ca5db838f1e2afda8a48"],["/bot/js/47.afd02de9d2c678d93734.js","db7fe1cc67d8b6279b86f37d416f024b"],["/bot/js/48.afd02de9d2c678d93734.js","51fffa77a7929f71d700a52e460df690"],["/bot/js/49.afd02de9d2c678d93734.js","6efd899501ebd8489463deeeecae245f"],["/bot/js/5.afd02de9d2c678d93734.js","740950612df456ef1fb33d2cbd1b2e36"],["/bot/js/50.afd02de9d2c678d93734.js","232184e64e4ae41ed88f7449e1ae9104"],["/bot/js/51.afd02de9d2c678d93734.js","ea5cee4c6e0213f65abf90f37c566893"],["/bot/js/52.afd02de9d2c678d93734.js","5f2195acb8da74f636466063b01ccc80"],["/bot/js/53.afd02de9d2c678d93734.js","5a68c45a9e7af77203b1790db723f381"],["/bot/js/54.afd02de9d2c678d93734.js","354766c81883c08ee28c6430763ef4e6"],["/bot/js/55.afd02de9d2c678d93734.js","888871b68d21e6bdb03fc51b41e9cc8e"],["/bot/js/56.afd02de9d2c678d93734.js","2826d78e71be102031cbadea04717dcd"],["/bot/js/57.afd02de9d2c678d93734.js","a3220088a52c516615f0c33cbd47e639"],["/bot/js/58.afd02de9d2c678d93734.js","f3e5d7c71a0811a65760742db9fca4b6"],["/bot/js/59.afd02de9d2c678d93734.js","63a5c618f2b8cf095c31a29a5e7d5c6c"],["/bot/js/6.afd02de9d2c678d93734.js","a3ff9cfb86638dd9dc1eabee2e626868"],["/bot/js/60.afd02de9d2c678d93734.js","f622ceeebe08734d5a350a17a53d18c6"],["/bot/js/61.afd02de9d2c678d93734.js","0c3a54beab35ceea56f69bff4239e1e7"],["/bot/js/62.afd02de9d2c678d93734.js","727b581aae8fa2d472bcbb3b90e18d02"],["/bot/js/63.afd02de9d2c678d93734.js","2b354a7692d49b31ed4b396e8ef213e1"],["/bot/js/64.afd02de9d2c678d93734.js","e3ab1b2d117e8bf86949152d5f239b7d"],["/bot/js/65.afd02de9d2c678d93734.js","def8050a36cf7d83f71963f492c883f2"],["/bot/js/66.afd02de9d2c678d93734.js","22203a8aaf846288124141381083009f"],["/bot/js/67.afd02de9d2c678d93734.js","c177fd33c66525eb413648da93974479"],["/bot/js/68.afd02de9d2c678d93734.js","cc125d78964e79b7eed9571e5ee9b748"],["/bot/js/69.afd02de9d2c678d93734.js","33e39d5bb704e49e43fc06f480971817"],["/bot/js/7.afd02de9d2c678d93734.js","f6f8855da415750f902ab6cc86da92cd"],["/bot/js/70.afd02de9d2c678d93734.js","a344bf0dcbafa66e4e2650f88a37094d"],["/bot/js/71.afd02de9d2c678d93734.js","8e094737750779f6666e18f7e9a501e7"],["/bot/js/72.afd02de9d2c678d93734.js","31373d0fd0e85111626a5dbda3132bb3"],["/bot/js/73.afd02de9d2c678d93734.js","f80ec3898624f7a317fc60339a676d0f"],["/bot/js/74.afd02de9d2c678d93734.js","2a7268d61192964b2430b7e4625f5437"],["/bot/js/75.afd02de9d2c678d93734.js","3c0a309b32da8cc69f1534a6f1aa90f9"],["/bot/js/76.afd02de9d2c678d93734.js","bf0ff3d5c9dfd6a5fffd2c06249a6046"],["/bot/js/77.afd02de9d2c678d93734.js","50556c77fc52db28332719c19f4c90c6"],["/bot/js/78.afd02de9d2c678d93734.js","25c495dac038acd4bd85e0a83bcdc423"],["/bot/js/79.afd02de9d2c678d93734.js","6975f88b68331455901feeba4d160cc1"],["/bot/js/8.afd02de9d2c678d93734.js","b7809f7980f7bdfab0018fc7ef2aed05"],["/bot/js/80.afd02de9d2c678d93734.js","68c2ebb70f3e05dd18a16919babf8bce"],["/bot/js/81.afd02de9d2c678d93734.js","c40706e616e1a1313124580023216cc3"],["/bot/js/82.afd02de9d2c678d93734.js","b80d67363f22a462af747f47cf946e8f"],["/bot/js/83.afd02de9d2c678d93734.js","b113b54bb1f927e48705b07a9da48c65"],["/bot/js/84.afd02de9d2c678d93734.js","1a73010e8f6841f4ff99c70cb6453663"],["/bot/js/85.afd02de9d2c678d93734.js","c59e97a4367f3892ec1e8e7c4f9e6387"],["/bot/js/86.afd02de9d2c678d93734.js","814b1543952f7f8aa7db26e7858ffeae"],["/bot/js/87.afd02de9d2c678d93734.js","ad45b9d412c135819794f91012e2d580"],["/bot/js/88.afd02de9d2c678d93734.js","3fe8ee03ea3ad526e13972f005932ae7"],["/bot/js/89.afd02de9d2c678d93734.js","8f0d48f397397260305abbda2a74a6e7"],["/bot/js/9.afd02de9d2c678d93734.js","02068c74f13862067316d60a46e7fc79"],["/bot/js/90.afd02de9d2c678d93734.js","7951a24c9ae46b67b1cf71c3be7e97b5"],["/bot/js/AccountSignupModal.afd02de9d2c678d93734.js","e55310294c19cc284ac98ae30ffbe417"],["/bot/js/account-info.afd02de9d2c678d93734.js","203ad86f18abef34079cea4b8b30f61e"],["/bot/js/bot.afd02de9d2c678d93734.js","f1c23e3bacaec08880cb43a825a44dae"],["/bot/js/bot/1-0015e4.bot.js","2c8293c121a0e186ded952a118ba53cb"],["/bot/js/bot/2-37afc0.bot.js","33c0d8a0ef7430d6460e15b1ab64062a"],["/bot/js/bot/3-3160bc.bot.js","9f17f8911c09cc1a7ef85d5f0a957c51"],["/bot/js/bot/4-d85287.bot.js","7e79037e519d65d88bcd1dc0e9df002e"],["/bot/js/bot/5-d5faf3.bot.js","299a832a376a7df10aff9b3789fc1ed9"],["/bot/js/bot/6-219b3a.bot.js","c5910fccb66b384a53b39ff7805ffa10"],["/bot/js/bot/bot-sprite.svg","6a04de4d5c28b3b0c5caa0f1681821e7"],["/bot/js/bot/bot.css","b594556c7b47322e4f04d8d1e8f5c74e"],["/bot/js/bot/bot.js","e310deb54f197f2d607e27bba7478882"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","19b79110d2a4b890e28c8ddda00e08a0"],["/bot/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/bot/js/main.afd02de9d2c678d93734.js","4dfc5c569c10d506ae3997c8dc341c6d"],["/bot/js/modals.afd02de9d2c678d93734.js","ace75653deee8be1893702ac792ced0c"],["/bot/js/push-notification.afd02de9d2c678d93734.js","d6b6731f94d24a2a49213b4c205a9067"],["/bot/js/settings-language.afd02de9d2c678d93734.js","889860a05b0e4f8babe06bf35dbe7013"],["/bot/js/settings-theme.afd02de9d2c678d93734.js","5a4ac13e5f3cc0099aa8afc0147852c4"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.afd02de9d2c678d93734.js","1806bee80cce5e9001a10c3225488240"],["/bot/js/vendors~account-info~~e180cbd1.afd02de9d2c678d93734.js","014a62e6dee7dc5da28b608fdb206468"],["/bot/js/vendors~main.afd02de9d2c678d93734.js","937169a408a0ca9d5590c5d9a91863f0"],["/bot/js/work-in-progress.afd02de9d2c678d93734.js","b6754995ade4c5c6946ace83562a4cbe"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







