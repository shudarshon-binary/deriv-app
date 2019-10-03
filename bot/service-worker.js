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

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/1.css","5620fbb83441ea880ba788d6e73d14a4"],["/bot/css/2.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/bot/css/AccountSignupModal.css","7c1bc2b57539f6ccefba0dee6b7ec7bf"],["/bot/css/app.css","468b9a929ff26261c7dbf8e50bb13742"],["/bot/css/bot.css","a95ced444c737f31c33db94301143448"],["/bot/css/modals.css","cef3c2b405b3933cab4cfb7b6cd2a46f"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","3ab100bcf98bb830272fd22b4089ad0b"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","0ba3c4594b105508f825e596da037ff8"],["/bot/js/0.fa19f834d4829f6d5862.js","da46466ef2c11b771f91102ff2c820e0"],["/bot/js/1.fa19f834d4829f6d5862.js","b9fa108d765e44962dba8313a51b0020"],["/bot/js/10.fa19f834d4829f6d5862.js","6f7e238aeae3bcad3ef49153d0d97843"],["/bot/js/11.fa19f834d4829f6d5862.js","abdc4aef09ba79eb8a4b6cd56e1519f8"],["/bot/js/12.fa19f834d4829f6d5862.js","e6cbb2bd22969854ae81d1f6b4d6d85c"],["/bot/js/13.fa19f834d4829f6d5862.js","2a85b686ad6ed4f60adfd5dd3d8f7c77"],["/bot/js/14.fa19f834d4829f6d5862.js","f65f3774ef66c3716ddb8aeff3ab1195"],["/bot/js/15.fa19f834d4829f6d5862.js","0f28ffb7674bcae765d02c4c80566c6a"],["/bot/js/16.fa19f834d4829f6d5862.js","9bb9846145c0b82c26bf5221b9b0df24"],["/bot/js/17.fa19f834d4829f6d5862.js","b18a604f689eea380df9a0b197c0dd3d"],["/bot/js/18.fa19f834d4829f6d5862.js","a52ac5dc5455b7f3e615bed2446eaecd"],["/bot/js/19.fa19f834d4829f6d5862.js","fae96a69466f15ba8229dd157baf3e75"],["/bot/js/2.fa19f834d4829f6d5862.js","f4c78980146cedeef4b2b5c865c1046d"],["/bot/js/20.fa19f834d4829f6d5862.js","07be713ff98735541a4df6d4e1fec02c"],["/bot/js/21.fa19f834d4829f6d5862.js","87f24153d3e258e19a07985f80294c85"],["/bot/js/22.fa19f834d4829f6d5862.js","2c4e0d4c6423cbe0a8bd8b27b8c88d45"],["/bot/js/23.fa19f834d4829f6d5862.js","9bbee9058bde36dbbe5aa1d5fcebf56e"],["/bot/js/24.fa19f834d4829f6d5862.js","b73842e7d5b560757d77804e076c8bd8"],["/bot/js/25.fa19f834d4829f6d5862.js","8b12dc4cf50e6029c3894a43d0d7ed37"],["/bot/js/26.fa19f834d4829f6d5862.js","d3ec3078d3b46993773b91e0078b4c31"],["/bot/js/27.fa19f834d4829f6d5862.js","7aa24985d50e6b97dee34cc54158f282"],["/bot/js/28.fa19f834d4829f6d5862.js","d61c95ac0797ae6f5fa421e4b8f46b38"],["/bot/js/29.fa19f834d4829f6d5862.js","a43d9b05ab717e4504f75a1e060fefef"],["/bot/js/3.fa19f834d4829f6d5862.js","28d2daf5687e5f203bfc88ff02b25be0"],["/bot/js/30.fa19f834d4829f6d5862.js","01866ca89b82b097c4240e14f032142e"],["/bot/js/31.fa19f834d4829f6d5862.js","d521b823cf78ae2fcc4c1b59bb0e247a"],["/bot/js/32.fa19f834d4829f6d5862.js","568237a40c5215dd55f33ceba84e7d48"],["/bot/js/33.fa19f834d4829f6d5862.js","6f887feb4fd172404c77919e711b4407"],["/bot/js/34.fa19f834d4829f6d5862.js","36afea716f34a0880ee851714c632b76"],["/bot/js/35.fa19f834d4829f6d5862.js","1b918ca4750767db5d1dcef8564c9780"],["/bot/js/36.fa19f834d4829f6d5862.js","22d522b505685ef916a8cee20e605fc9"],["/bot/js/37.fa19f834d4829f6d5862.js","d2f797414c881dd4cf85aa86f03cf934"],["/bot/js/38.fa19f834d4829f6d5862.js","e1bbb949154e8b6796a0c4833fe7917c"],["/bot/js/39.fa19f834d4829f6d5862.js","3f8d776b983ed85b707f08ba3bc541a2"],["/bot/js/4.fa19f834d4829f6d5862.js","bcbbe371f4702b7c0bade11e6a9f62a0"],["/bot/js/40.fa19f834d4829f6d5862.js","52fd828f2ecdb8ac0c11018b1aa929ba"],["/bot/js/404.fa19f834d4829f6d5862.js","c835a5abc9ea0a6b95e64693c653a23d"],["/bot/js/41.fa19f834d4829f6d5862.js","e562e88b19aef36d48c8dab4655983b1"],["/bot/js/42.fa19f834d4829f6d5862.js","dfba93b0b6c078682fbfee2cd7d3ba94"],["/bot/js/43.fa19f834d4829f6d5862.js","d595e30b0fef0ccc25906b67715e5916"],["/bot/js/44.fa19f834d4829f6d5862.js","377d2daa9c7f87b1c80a8783301d2684"],["/bot/js/45.fa19f834d4829f6d5862.js","314a7acdda40dd70ea12062aaa0687b9"],["/bot/js/46.fa19f834d4829f6d5862.js","1c5b1f6a34094e2fd4d6e107dba14f33"],["/bot/js/47.fa19f834d4829f6d5862.js","b75d1eac0546ca4f2c1625ce873ce309"],["/bot/js/48.fa19f834d4829f6d5862.js","9605dae8eb0b679a2133e4157b71fcab"],["/bot/js/49.fa19f834d4829f6d5862.js","6638c9ced4f5f5dffece9c06893c3771"],["/bot/js/5.fa19f834d4829f6d5862.js","55a0f099290a7afba0f394d1cb0206a7"],["/bot/js/50.fa19f834d4829f6d5862.js","3b1755dfd3cee03a34e0c10a7be6f41a"],["/bot/js/51.fa19f834d4829f6d5862.js","c1d398fe09ce2ea07a7cda368248fea0"],["/bot/js/52.fa19f834d4829f6d5862.js","06df05193a69161c594d98df347a9218"],["/bot/js/53.fa19f834d4829f6d5862.js","3b2efdaa35d975e1695aa1e9bf17b415"],["/bot/js/54.fa19f834d4829f6d5862.js","a82b6fc4a0558aab1d92ea03e3a1612f"],["/bot/js/55.fa19f834d4829f6d5862.js","9683449025e696f6746058b5acab1694"],["/bot/js/56.fa19f834d4829f6d5862.js","04eef434b48e63faca642253dc7432e5"],["/bot/js/57.fa19f834d4829f6d5862.js","1980740b53d7c55cf76a23c8a593d45d"],["/bot/js/58.fa19f834d4829f6d5862.js","7324136da26b373c5e6e73001b789872"],["/bot/js/59.fa19f834d4829f6d5862.js","6d93cd3c1f71a59f2523734e80af0077"],["/bot/js/6.fa19f834d4829f6d5862.js","7de32db947dffe6d8a31071471de366d"],["/bot/js/60.fa19f834d4829f6d5862.js","971e8c02d8bde4a26e9b5b150deac5d7"],["/bot/js/61.fa19f834d4829f6d5862.js","bde41c1d7021102f17c3040f229b9cbe"],["/bot/js/62.fa19f834d4829f6d5862.js","0044c83eab64dcbf63dd2597ee5583f4"],["/bot/js/63.fa19f834d4829f6d5862.js","6f3700623dc83ee5a6813a548b6d47fd"],["/bot/js/64.fa19f834d4829f6d5862.js","ac13a5c600277b53ebdb28a1c691238a"],["/bot/js/65.fa19f834d4829f6d5862.js","264b7c88cf54d1d120bb723fbdd6bd89"],["/bot/js/66.fa19f834d4829f6d5862.js","d27192ff9c6ade7dc1e04965cde0d63c"],["/bot/js/67.fa19f834d4829f6d5862.js","55527292709d7deda437af9f677acba1"],["/bot/js/68.fa19f834d4829f6d5862.js","2495ca9eb263fff207962d1c28708dd8"],["/bot/js/69.fa19f834d4829f6d5862.js","68deb2523a93889ac045ac5bfba37dbd"],["/bot/js/7.fa19f834d4829f6d5862.js","7159ab91be3b4d160d5cb068ba2f7f04"],["/bot/js/70.fa19f834d4829f6d5862.js","75d42c920abf3569f95a4347c9e17707"],["/bot/js/71.fa19f834d4829f6d5862.js","269bba88479342ddf0e947c79f888c2d"],["/bot/js/72.fa19f834d4829f6d5862.js","67e15369205b6b2350a711a1ab2ec4df"],["/bot/js/73.fa19f834d4829f6d5862.js","e7402633e1f149063ea4b7b8b46c8289"],["/bot/js/74.fa19f834d4829f6d5862.js","3a4729aceb0feb674a1203d8f834fd02"],["/bot/js/75.fa19f834d4829f6d5862.js","dc6214a34f798baa686325c9ce758596"],["/bot/js/76.fa19f834d4829f6d5862.js","723a979843f0cfbecd25394757d620f5"],["/bot/js/77.fa19f834d4829f6d5862.js","ad7e64cca8dc441bb4c4ae5b610b8812"],["/bot/js/78.fa19f834d4829f6d5862.js","843b58f484ec5b667c41adc67a296ac5"],["/bot/js/79.fa19f834d4829f6d5862.js","2c1291f287daa9bf994e647aa9b79ac2"],["/bot/js/8.fa19f834d4829f6d5862.js","ab34973d66d6e1b88f401ba81df3fa62"],["/bot/js/80.fa19f834d4829f6d5862.js","0d0a7a5d31ffce3e38a9571e24648d7e"],["/bot/js/81.fa19f834d4829f6d5862.js","055d40b76413e94618f46c0c979c4798"],["/bot/js/82.fa19f834d4829f6d5862.js","4eca822a8ec38e072fa50c31e80e4415"],["/bot/js/83.fa19f834d4829f6d5862.js","aaa764d444a43a1133307dd9036f5e8d"],["/bot/js/84.fa19f834d4829f6d5862.js","22094e5c7409f261dc72ed170a119ff8"],["/bot/js/85.fa19f834d4829f6d5862.js","1e0bfe8aaf64d6706f273c0f183a2ac2"],["/bot/js/86.fa19f834d4829f6d5862.js","5fc5b08601f78313dc28af496f2eafca"],["/bot/js/87.fa19f834d4829f6d5862.js","1f5f9fd35a8932ba362fc195ca86aee3"],["/bot/js/88.fa19f834d4829f6d5862.js","3aed4548c3f73ad7db3b7f649c554bfd"],["/bot/js/89.fa19f834d4829f6d5862.js","cf1d91012ff1ba4760eb71bef5544cee"],["/bot/js/9.fa19f834d4829f6d5862.js","ca58a475bf8a5d79d13a8ce7b52d22f4"],["/bot/js/90.fa19f834d4829f6d5862.js","dd4f03a6e7f667fb5d788e15d0b20ca3"],["/bot/js/AccountSignupModal.fa19f834d4829f6d5862.js","678e0f52da7d18144eedf403c867077c"],["/bot/js/account-info.fa19f834d4829f6d5862.js","a2042bf7c25d243197092a4c3b4c7129"],["/bot/js/bot/1-b2a79e.bot.js","3a251dff28a1a53e23a937fcb5e76477"],["/bot/js/bot/10-1daaec.bot.js","27b7bd9ee145ba85384aa67d146d081d"],["/bot/js/bot/11-c586c3.bot.js","64beac56a842fd89b7df3a9a69562052"],["/bot/js/bot/12-70066c.bot.js","c1e23d24467a94a12b5adc651a4ccda5"],["/bot/js/bot/13-55502d.bot.js","4b56e3dfbf1def807c4503375a3508f1"],["/bot/js/bot/14-2992db.bot.js","23577cd11bac4001cd835c7fee7b251d"],["/bot/js/bot/15-cec635.bot.js","f53c355f889e49031eeb076b1f00dab1"],["/bot/js/bot/16-18ab90.bot.js","d7498297c04a7a4f85e8895d2dba9aef"],["/bot/js/bot/17-c87610.bot.js","20da304adf967eb561d67669ae28bd77"],["/bot/js/bot/18-e7bdae.bot.js","c648221552249e73947792582f7cf3a7"],["/bot/js/bot/19-bdca25.bot.js","eeb5b51dac7886d817951d446682e976"],["/bot/js/bot/2-312387.bot.js","3a89020ca5ff313d23a1eabd27d94c46"],["/bot/js/bot/20-b39fd4.bot.js","b2fd7311234e702809b1e506d4627a32"],["/bot/js/bot/21-c05ed2.bot.js","b88b9bbc0e9687c4664d96f3d39c7f8c"],["/bot/js/bot/22-1291a1.bot.js","1cd75680c0034c8c14de47a50d5b201d"],["/bot/js/bot/23-afcf4a.bot.js","ac2425ece6b69e0b88deb75bee04ac7a"],["/bot/js/bot/24-e93dba.bot.js","7eba07621c424e89f4880f9e18cb05a7"],["/bot/js/bot/25-27b666.bot.js","94e4cfde2140e09ad3941fcfe6ddfdb6"],["/bot/js/bot/26-b4dee5.bot.js","8dbc0b74e96c504938a71929d82b8689"],["/bot/js/bot/27-7d5aee.bot.js","454fb776c863f9b48092e457f0616e8f"],["/bot/js/bot/28-cd0a3c.bot.js","be24933ff506f10a7dfdd5663d314f8d"],["/bot/js/bot/29-a6aa05.bot.js","1784ee98327c1333c279d5ddcf2522bb"],["/bot/js/bot/3-9e522c.bot.js","b4eebeebbdfa6bded0d3245bd5e0a612"],["/bot/js/bot/30-8c5eeb.bot.js","f5e3dc138513fe5a6036197f8f091bd6"],["/bot/js/bot/31-67f77a.bot.js","ff0d03b6ae5081b5262a0040d3b275e8"],["/bot/js/bot/32-cee06f.bot.js","13016e11c13f87c15b23d5c66434316e"],["/bot/js/bot/33-7005de.bot.js","8b37aa932f736544bb1c509c0d377f38"],["/bot/js/bot/34-aa3b16.bot.js","664907f1214b2648de000fc3e52ad7d8"],["/bot/js/bot/35-38d953.bot.js","295a82abc27f6c29499279e067843a8b"],["/bot/js/bot/36-26c089.bot.js","dd02b7e106d414d48f466d31094227c2"],["/bot/js/bot/37-096d29.bot.js","184c2052bdec9916ff22f295b7166b9f"],["/bot/js/bot/38-4a1ffd.bot.js","ca9db545e1b079b791eea568e46017d1"],["/bot/js/bot/39-46cfee.bot.js","c089c58017c0c24f9b7b5e34ff70de78"],["/bot/js/bot/4-837eba.bot.js","7763e551172f03198bd5f92c1ad9bb5b"],["/bot/js/bot/5-9f62f4.bot.js","23f89a51e78504356dcefbe637f6aa9d"],["/bot/js/bot/6-b769bf.bot.js","f38bd2134efaee4ce95bd787ef4ee6b1"],["/bot/js/bot/7-fcbdbe.bot.js","899485de5627f83021b21dd2e4ad21ea"],["/bot/js/bot/8-df923e.bot.js","12f35f0b3156b276a100258ab9705e53"],["/bot/js/bot/9-77c561.bot.js","6102a9f349367b212369304bd1af19a6"],["/bot/js/bot/bot-sprite.svg","9f50fd229ecd8ecc2819b16a387d6bd4"],["/bot/js/bot/bot.css","a95ced444c737f31c33db94301143448"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.fa19f834d4829f6d5862.js","029257574d60118d3aa67a166b380a77"],["/bot/js/modals.fa19f834d4829f6d5862.js","6c2cab534769610d9fea0a35f8152365"],["/bot/js/push-notification.fa19f834d4829f6d5862.js","015bea914fa6c2831989e8824270c159"],["/bot/js/settings-language.fa19f834d4829f6d5862.js","3c9e40eb6d7620dccea7cc316620c13c"],["/bot/js/settings-theme.fa19f834d4829f6d5862.js","eb586c1485aad6449d18bcda14096756"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.fa19f834d4829f6d5862.js","22d4d3011406108aa38738d8e7999314"],["/bot/js/vendors~account-info~~e180cbd1.fa19f834d4829f6d5862.js","fc4c9016787099812d30fece6c0d98cf"],["/bot/js/vendors~main.fa19f834d4829f6d5862.js","7a78440b003a66ba589617e63c41dd74"],["/bot/js/work-in-progress.fa19f834d4829f6d5862.js","182a26bdeb78c25c01ac13fc8532a572"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







