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

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/1.css","1766a575deb5966ea8c2ba449bff2daa"],["/bot/css/2.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/bot/css/AccountSignupModal.css","593b003224cc1ab3090b2fc1f3055816"],["/bot/css/app.css","08eb98bda86e0210fe99bdac1cfb6b74"],["/bot/css/bot.css","b594556c7b47322e4f04d8d1e8f5c74e"],["/bot/css/modals.css","dadb9cacf094faee7d056ddf52c92de9"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","6b6dca27c6dde28a69cdf56bb8a858ab"],["/bot/js/0.41f84f2d8cf9395c9a1c.js","e5feb81552cfc20a87b9e458f228cc2d"],["/bot/js/1.41f84f2d8cf9395c9a1c.js","742f7686d52935afc0a084474e9bcd57"],["/bot/js/10.41f84f2d8cf9395c9a1c.js","8d7f59b33eddb2875dfd6e7aeff233b6"],["/bot/js/11.41f84f2d8cf9395c9a1c.js","bece5d79365a7766aa1e25e79cea9d6e"],["/bot/js/12.41f84f2d8cf9395c9a1c.js","10bf2816d4a536be1f150490965c2ada"],["/bot/js/13.41f84f2d8cf9395c9a1c.js","7b0c12bddc82a4a2937b09c3f6d3dd67"],["/bot/js/14.41f84f2d8cf9395c9a1c.js","76b209008349445fb461c418a9bd72a8"],["/bot/js/15.41f84f2d8cf9395c9a1c.js","7408ba9f500aa2994b16d52379a3ba8e"],["/bot/js/16.41f84f2d8cf9395c9a1c.js","420cfa0f26c58a70e7fca9e15a3e8ab3"],["/bot/js/17.41f84f2d8cf9395c9a1c.js","04ab057b076158e058ae4f7e741329ea"],["/bot/js/18.41f84f2d8cf9395c9a1c.js","41a702788ca5feb71220c772e559b1c4"],["/bot/js/19.41f84f2d8cf9395c9a1c.js","d658aa76e2776ae1e2cd84ca35082f31"],["/bot/js/2.41f84f2d8cf9395c9a1c.js","06a1fe983b8067f792def3e55699700a"],["/bot/js/20.41f84f2d8cf9395c9a1c.js","2e2090271edaf7c6a8bcd0cbad5fb7bd"],["/bot/js/21.41f84f2d8cf9395c9a1c.js","aa63ce7b561173c8647d5c76a754bad4"],["/bot/js/22.41f84f2d8cf9395c9a1c.js","7da26612420a0947c4c57de19c8b653f"],["/bot/js/23.41f84f2d8cf9395c9a1c.js","f78cd6e2c7185ef875c7a33c57f48b6c"],["/bot/js/24.41f84f2d8cf9395c9a1c.js","77bb2949d04ff6599c0222cf126b90f2"],["/bot/js/25.41f84f2d8cf9395c9a1c.js","e561586001aabad8e213b9897a0dff3c"],["/bot/js/26.41f84f2d8cf9395c9a1c.js","d8c4624bfdc4aec6efb8c552b74d46f4"],["/bot/js/27.41f84f2d8cf9395c9a1c.js","73eeadb38eeaa396ff37eebdae3d5695"],["/bot/js/28.41f84f2d8cf9395c9a1c.js","8f2bd529c17f2cd3eaeada7051abd608"],["/bot/js/29.41f84f2d8cf9395c9a1c.js","157fbe62c57a74e99975680b07d0bf26"],["/bot/js/3.41f84f2d8cf9395c9a1c.js","562e0afd99c4d9face2e06e854c6d8ae"],["/bot/js/30.41f84f2d8cf9395c9a1c.js","001eb612199a7fda8e14cd422adbdaf8"],["/bot/js/31.41f84f2d8cf9395c9a1c.js","361331042f6dde293eaf6a9853cb5355"],["/bot/js/32.41f84f2d8cf9395c9a1c.js","618537400db765a54a132bfdaa691f0f"],["/bot/js/33.41f84f2d8cf9395c9a1c.js","c6f8852ceaecfa110b5920698808ac6b"],["/bot/js/34.41f84f2d8cf9395c9a1c.js","c222889bf232360c0d239a6f8b5bd54c"],["/bot/js/35.41f84f2d8cf9395c9a1c.js","e319c817f7b981133a75ea8e0260863e"],["/bot/js/36.41f84f2d8cf9395c9a1c.js","2f01ff8d6b6f3408928b06193afc4457"],["/bot/js/37.41f84f2d8cf9395c9a1c.js","7559ffdba3dc722a2e513ba975cc7175"],["/bot/js/38.41f84f2d8cf9395c9a1c.js","60321c756516ebf586a3bbc7dc5dedd0"],["/bot/js/39.41f84f2d8cf9395c9a1c.js","bd5f6ab7b5019cff17d03a704c2153df"],["/bot/js/4.41f84f2d8cf9395c9a1c.js","0123a8932bd49a9beaa2f8d72437ab35"],["/bot/js/40.41f84f2d8cf9395c9a1c.js","2aff31b8aa8b86f5dcaa87ea7cf06ee3"],["/bot/js/404.41f84f2d8cf9395c9a1c.js","fcaade53cea0e8d91ea322670d81f0f2"],["/bot/js/41.41f84f2d8cf9395c9a1c.js","da0ff6c590ccc9efd3260a23d6403909"],["/bot/js/42.41f84f2d8cf9395c9a1c.js","49c5ead6ab696973bf164fc0bce3d385"],["/bot/js/43.41f84f2d8cf9395c9a1c.js","b7e52900b5d93044e5c3142635baee23"],["/bot/js/44.41f84f2d8cf9395c9a1c.js","98f46155cd3fba4f6864bfeca9bac835"],["/bot/js/45.41f84f2d8cf9395c9a1c.js","617480297d1ff6b67af3bd1464ed022c"],["/bot/js/46.41f84f2d8cf9395c9a1c.js","26d637195488eb3d9a453db41666c4d9"],["/bot/js/47.41f84f2d8cf9395c9a1c.js","f8782fa67e8e577cfb9a038665e17033"],["/bot/js/48.41f84f2d8cf9395c9a1c.js","3486dc93dae7d8769018e8505f6ca012"],["/bot/js/49.41f84f2d8cf9395c9a1c.js","d95a7b16ae91a10d5047b0acef4ed292"],["/bot/js/5.41f84f2d8cf9395c9a1c.js","fbcf4dd0df01d491a5e155873c8b4848"],["/bot/js/50.41f84f2d8cf9395c9a1c.js","b041dab8f1394b647c6fe8618f6895fb"],["/bot/js/51.41f84f2d8cf9395c9a1c.js","a65cfb5dace46f31e216a3b4fe230d42"],["/bot/js/52.41f84f2d8cf9395c9a1c.js","96c962b8ab7f4ae78e8a38c059be81f8"],["/bot/js/53.41f84f2d8cf9395c9a1c.js","9cc1febd71f1012c6c389b2953ae28bb"],["/bot/js/54.41f84f2d8cf9395c9a1c.js","be8091d08d9a3bfbd49396ce317bd4c8"],["/bot/js/55.41f84f2d8cf9395c9a1c.js","1603d00c29e9e82691e7f36afdac4f12"],["/bot/js/56.41f84f2d8cf9395c9a1c.js","74e492cf75c64ef51a542ee114a522eb"],["/bot/js/57.41f84f2d8cf9395c9a1c.js","285e9c1135df58bd0ed557200db382f1"],["/bot/js/58.41f84f2d8cf9395c9a1c.js","b78419ab81352d124aae7f2240136af7"],["/bot/js/59.41f84f2d8cf9395c9a1c.js","f7683993ad40bbdfe041e5f174cc417e"],["/bot/js/6.41f84f2d8cf9395c9a1c.js","71c41641fa2e38cb9372246efcf106c6"],["/bot/js/60.41f84f2d8cf9395c9a1c.js","2db662e4d97cc89d141c5a59c76a9d74"],["/bot/js/61.41f84f2d8cf9395c9a1c.js","59326030a5c768d7e0c37970e508be14"],["/bot/js/62.41f84f2d8cf9395c9a1c.js","d52912f73bf2fde2f8bb759afa9d52fa"],["/bot/js/63.41f84f2d8cf9395c9a1c.js","6ebb7ad477e262afa56cd8ef341ebe73"],["/bot/js/64.41f84f2d8cf9395c9a1c.js","e790f504623f81258712a0bcf76e5e1a"],["/bot/js/65.41f84f2d8cf9395c9a1c.js","71ae6ed0efc0966ca99c80cd4c37323f"],["/bot/js/66.41f84f2d8cf9395c9a1c.js","b4ac04bb59b501e01197d77a766dd616"],["/bot/js/67.41f84f2d8cf9395c9a1c.js","dfb62e1a99df04595078829881a440e6"],["/bot/js/68.41f84f2d8cf9395c9a1c.js","f8a7b390ac7a7583477fc358d024af55"],["/bot/js/69.41f84f2d8cf9395c9a1c.js","ac17811301edeb2de4c689373c81cbf3"],["/bot/js/7.41f84f2d8cf9395c9a1c.js","4a29dd165d70cb0fb086f6a62bfac9c8"],["/bot/js/70.41f84f2d8cf9395c9a1c.js","e706b5da10b214cf78d10fe8db4b620d"],["/bot/js/71.41f84f2d8cf9395c9a1c.js","91f15dfd7171924d2a72b35ff22d2484"],["/bot/js/72.41f84f2d8cf9395c9a1c.js","67e333357d56b07a32bb91efb6f9cebe"],["/bot/js/73.41f84f2d8cf9395c9a1c.js","44d0508e7bbe23aefb4a7e4c7d88689e"],["/bot/js/74.41f84f2d8cf9395c9a1c.js","c7e6623f9026ad44d916002554323673"],["/bot/js/75.41f84f2d8cf9395c9a1c.js","57852ab5b7d1337dcc08434d1ee86198"],["/bot/js/76.41f84f2d8cf9395c9a1c.js","9d3cc8208acfcdb6a85122b63472f922"],["/bot/js/77.41f84f2d8cf9395c9a1c.js","d9d45f2bbe310bd843daf646d5900d52"],["/bot/js/78.41f84f2d8cf9395c9a1c.js","e0aef3e56a9150454cfc377b0dc76933"],["/bot/js/79.41f84f2d8cf9395c9a1c.js","3e94428c0e257dc8b168f4490eecfb84"],["/bot/js/8.41f84f2d8cf9395c9a1c.js","fdd331ba2dc1aa6189830a7213688144"],["/bot/js/80.41f84f2d8cf9395c9a1c.js","32636f2446d08a2a9178c0312e3f4eee"],["/bot/js/81.41f84f2d8cf9395c9a1c.js","72fae82de2f2dbd8f047cc24d80ddb88"],["/bot/js/82.41f84f2d8cf9395c9a1c.js","32b8bfaa86fe58ab818dc048cf1ec5b0"],["/bot/js/83.41f84f2d8cf9395c9a1c.js","8d16cafd2c01c6bcc0158b8cc5d68613"],["/bot/js/84.41f84f2d8cf9395c9a1c.js","7f44e8c59acb2fc94ed86b1dde14c7d7"],["/bot/js/85.41f84f2d8cf9395c9a1c.js","0dff6ec3835c400280bc5419ed730a64"],["/bot/js/86.41f84f2d8cf9395c9a1c.js","e118f33381e2433a5f1e99cc1a05b6da"],["/bot/js/87.41f84f2d8cf9395c9a1c.js","718c02ca4560ae8cb58ee9c01c50ef7b"],["/bot/js/88.41f84f2d8cf9395c9a1c.js","4b4ced3236b8253ab626f2c908cc13b2"],["/bot/js/89.41f84f2d8cf9395c9a1c.js","a8a377e6b6a762d9f3d1e5677861467d"],["/bot/js/9.41f84f2d8cf9395c9a1c.js","26a0b2ad6f0f7d3494ef9eadce178f14"],["/bot/js/90.41f84f2d8cf9395c9a1c.js","092748335c5b129a9bce3b165783b411"],["/bot/js/AccountSignupModal.41f84f2d8cf9395c9a1c.js","2b616efe8029a050d9083f6b650609eb"],["/bot/js/account-info.41f84f2d8cf9395c9a1c.js","68f3cfd25eee4b4fc32797c4598a8ea9"],["/bot/js/bot.41f84f2d8cf9395c9a1c.js","8855480c3a2d4f687978bf2b7efffc3b"],["/bot/js/bot/1-d210f7.bot.js","61de2a3f6e5ca6b00879704d91662de3"],["/bot/js/bot/2-8eba38.bot.js","380f0b8778e1d2e54ca4f3bd3641de5a"],["/bot/js/bot/3-2c67eb.bot.js","059b8abee77f7c19bb0ba809812c63c7"],["/bot/js/bot/4-53788b.bot.js","78622a86f049359a6de64bc8d891d1df"],["/bot/js/bot/5-09495e.bot.js","c09bb9d1c18c3dcfeae047f809c1548e"],["/bot/js/bot/6-b61c25.bot.js","4497240df771a23e9bf083b202a70fa8"],["/bot/js/bot/bot-sprite.svg","6a04de4d5c28b3b0c5caa0f1681821e7"],["/bot/js/bot/bot.css","b594556c7b47322e4f04d8d1e8f5c74e"],["/bot/js/bot/bot.js","feb46fefa6ea2ffa06a2d548105878d3"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","ec24d72090e126c667ed7e40a990cb0e"],["/bot/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/bot/js/main.41f84f2d8cf9395c9a1c.js","035e971aa049c151e20407c60784527c"],["/bot/js/modals.41f84f2d8cf9395c9a1c.js","233f7630478f53e8b854aee1d6bf33ae"],["/bot/js/push-notification.41f84f2d8cf9395c9a1c.js","fc859a405f902e67f31ca8006a6307dc"],["/bot/js/settings-language.41f84f2d8cf9395c9a1c.js","ecdebfadbb5592785cfef63eb5fe96f6"],["/bot/js/settings-theme.41f84f2d8cf9395c9a1c.js","00141658694578601da19cf3ea6ae149"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.41f84f2d8cf9395c9a1c.js","5d387d2444bd82f2ca55ffbc69fed769"],["/bot/js/vendors~account-info~~e180cbd1.41f84f2d8cf9395c9a1c.js","e5cfcaca6c7661bf639e390631150f5a"],["/bot/js/vendors~main.41f84f2d8cf9395c9a1c.js","16cbb53861ce98035f2bf29b78953df6"],["/bot/js/work-in-progress.41f84f2d8cf9395c9a1c.js","e1e70f2d820e599fb0d667938b94ba01"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







