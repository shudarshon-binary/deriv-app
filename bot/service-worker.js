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

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/0.css","d0a60a1a6acefedf578292e34aa4de86"],["/bot/css/AccountSignupModal.css","3e2a111b187e4e85ced0fb9374eb8249"],["/bot/css/ResetPasswordModal.css","afddce4ba13578928acab69cd0224309"],["/bot/css/app.css","b64befb07bf308b3d3aa842b62297772"],["/bot/css/bot.css","901da76b99ccf5cfd57c89104f81e595"],["/bot/css/modals.css","84c0bb0a283bb8cdb70be1d058f8af61"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","4cc034c0a1ae9c26602779740caf76d5"],["/bot/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/bot/index.html","6711ac97df1ce9ea55e19e2a029777a9"],["/bot/js/0.4cb28985c0fda99fe98b.js","51516bb57bf3f67ddc103beada400ca7"],["/bot/js/1.4cb28985c0fda99fe98b.js","007db18739c37c9c8e3842e4dfecf607"],["/bot/js/10.4cb28985c0fda99fe98b.js","9a97668457b565f835466c7a48b0996b"],["/bot/js/11.4cb28985c0fda99fe98b.js","48ac206f01c6f3890920a45d5581ca6b"],["/bot/js/12.4cb28985c0fda99fe98b.js","40e678a9464a7e5bff8d47baf8eec373"],["/bot/js/13.4cb28985c0fda99fe98b.js","357648d4ae1e8f94b7bfb837cbd5c7b2"],["/bot/js/14.4cb28985c0fda99fe98b.js","3384715fde2ad5a8da6014d413a3e70e"],["/bot/js/15.4cb28985c0fda99fe98b.js","d4f2b792426ff45635fa760db9003b74"],["/bot/js/16.4cb28985c0fda99fe98b.js","15b1e6bda30f3e185eb2990426993420"],["/bot/js/17.4cb28985c0fda99fe98b.js","5a6fb85340016ebf2ca2cf67896820e5"],["/bot/js/18.4cb28985c0fda99fe98b.js","7102765960d178a1d369aabdd85275dd"],["/bot/js/19.4cb28985c0fda99fe98b.js","af811791bc89a053a69813894d8c1de3"],["/bot/js/2.4cb28985c0fda99fe98b.js","4a21dd0285e572f01b36fee2dc2d0c60"],["/bot/js/20.4cb28985c0fda99fe98b.js","48876a049ada01d77facbf2b2a663683"],["/bot/js/21.4cb28985c0fda99fe98b.js","c6c2dd5df46ed942e9e1383d79b847d8"],["/bot/js/22.4cb28985c0fda99fe98b.js","663aeab07271adb19832b32365b803ec"],["/bot/js/23.4cb28985c0fda99fe98b.js","79f0ab7fe86b233e08938f2aa2228af4"],["/bot/js/24.4cb28985c0fda99fe98b.js","ae67bee8adf84fcf0d949ac57485d260"],["/bot/js/25.4cb28985c0fda99fe98b.js","f4a956d9abd8e53d1a4ad48a0379138d"],["/bot/js/26.4cb28985c0fda99fe98b.js","f3ba605ed9bc394ab53bf610dc2eb306"],["/bot/js/27.4cb28985c0fda99fe98b.js","c9198f292baaa5f8899ce11d0ef63f3e"],["/bot/js/28.4cb28985c0fda99fe98b.js","d692e311bbd7c3ca104fc86b47b733ec"],["/bot/js/29.4cb28985c0fda99fe98b.js","d324bb0a1909e22abcee840352aa41dc"],["/bot/js/3.4cb28985c0fda99fe98b.js","f9991caad85625aa0e78bb35c8df0ff1"],["/bot/js/30.4cb28985c0fda99fe98b.js","80e63040c00326d0de3b9eaaff6378fd"],["/bot/js/31.4cb28985c0fda99fe98b.js","255e6649151d5dbb989b07d5623a29a6"],["/bot/js/32.4cb28985c0fda99fe98b.js","3709fcd863158496ebdaaf2b5139ac23"],["/bot/js/33.4cb28985c0fda99fe98b.js","0377b327a2660e197aa0d0dc2c9c44bf"],["/bot/js/34.4cb28985c0fda99fe98b.js","08f0223b60b1ccd14ca7bc2eafb0b54b"],["/bot/js/35.4cb28985c0fda99fe98b.js","a55ebb17ad82188d678cda26f9854c10"],["/bot/js/36.4cb28985c0fda99fe98b.js","7699e0cb7096038650bd1eee832f8bee"],["/bot/js/37.4cb28985c0fda99fe98b.js","44f950b2721f8d899399d2f3bc0bb72d"],["/bot/js/38.4cb28985c0fda99fe98b.js","aa2cec36ec1b667a455637b849a1d87a"],["/bot/js/39.4cb28985c0fda99fe98b.js","647a5d5ad18e93f935ac63133902b0b1"],["/bot/js/4.4cb28985c0fda99fe98b.js","9f07332eaf9af331eb5c82613958e1eb"],["/bot/js/40.4cb28985c0fda99fe98b.js","44d0be67aa50ff2c17ec2eee2cb5a484"],["/bot/js/404.4cb28985c0fda99fe98b.js","7c43eb60a8366f2ae27790d44e95ba7b"],["/bot/js/41.4cb28985c0fda99fe98b.js","f4a1a5d0ee63491fa2b64a5f282a6f07"],["/bot/js/42.4cb28985c0fda99fe98b.js","aa2692e3838f3c80e31baa101026e74f"],["/bot/js/43.4cb28985c0fda99fe98b.js","9361276a0c9273bf4c9482dc93f0ac55"],["/bot/js/44.4cb28985c0fda99fe98b.js","1aa35f33c18b069f3b2a355b135f9eb7"],["/bot/js/45.4cb28985c0fda99fe98b.js","ccd99e8e1eac68a8f81280226e33ad24"],["/bot/js/46.4cb28985c0fda99fe98b.js","2414761cb510818f87cb17da9c01f645"],["/bot/js/47.4cb28985c0fda99fe98b.js","59c4f53bc3a35ea2dc0eae5249bac7ee"],["/bot/js/48.4cb28985c0fda99fe98b.js","a57aa2a1982405acbf9dcae98f00d0b2"],["/bot/js/49.4cb28985c0fda99fe98b.js","1ca72f157e26e78bc69f9e609a91f3ba"],["/bot/js/5.4cb28985c0fda99fe98b.js","7b50bd8ca6cf5ed98007c65c4368d9ce"],["/bot/js/50.4cb28985c0fda99fe98b.js","cdabcd4d895685a33d42bdce838bc7ac"],["/bot/js/51.4cb28985c0fda99fe98b.js","281016983e9506dda333206de931e866"],["/bot/js/52.4cb28985c0fda99fe98b.js","de4b1c3b053118015a52d5938aa94f55"],["/bot/js/53.4cb28985c0fda99fe98b.js","a77c8e525ca33055108c69c361d514e8"],["/bot/js/54.4cb28985c0fda99fe98b.js","f2bdedabeaaf5bab593bb4d75cc817f0"],["/bot/js/55.4cb28985c0fda99fe98b.js","8c1668008875f6e6b8a2b831157b82bc"],["/bot/js/56.4cb28985c0fda99fe98b.js","90a7d707a4e7373e31620516ae09f32b"],["/bot/js/57.4cb28985c0fda99fe98b.js","3313d510cbd081137c410f870a489739"],["/bot/js/58.4cb28985c0fda99fe98b.js","87f268b03cc83fc94f35b0949d4be3d7"],["/bot/js/59.4cb28985c0fda99fe98b.js","543745c523e7a2f4a9b19494db53212f"],["/bot/js/6.4cb28985c0fda99fe98b.js","70ca90b573ab1efa89c11917da1cab44"],["/bot/js/60.4cb28985c0fda99fe98b.js","00b4906df06ae001c071171438287ace"],["/bot/js/61.4cb28985c0fda99fe98b.js","e211b5bf01df6eebc55808b1820c419a"],["/bot/js/62.4cb28985c0fda99fe98b.js","2bc465027de4a069b5544024e84140c6"],["/bot/js/63.4cb28985c0fda99fe98b.js","2c61908fe70e37d715641f7a42e04d35"],["/bot/js/64.4cb28985c0fda99fe98b.js","27aca1461fcc480c9ffb83db1bd793cb"],["/bot/js/65.4cb28985c0fda99fe98b.js","242b7e987766d99e3bd2e5de28b1d5f6"],["/bot/js/66.4cb28985c0fda99fe98b.js","e669a51e54a4299774548b69ee11cabf"],["/bot/js/67.4cb28985c0fda99fe98b.js","fdad2f1e260c61a2c441da3719ff878c"],["/bot/js/68.4cb28985c0fda99fe98b.js","947221d7ce8f1ecdbc006052d16028fb"],["/bot/js/69.4cb28985c0fda99fe98b.js","15a1196c2b17b1d1f38511ad7878e13d"],["/bot/js/7.4cb28985c0fda99fe98b.js","8ecdf80b617a52cb8465c04abfb70da9"],["/bot/js/70.4cb28985c0fda99fe98b.js","be932c845d5329f7702a2fd6712b4bc4"],["/bot/js/71.4cb28985c0fda99fe98b.js","a2640b237e9f551626c4779b667fc9e6"],["/bot/js/72.4cb28985c0fda99fe98b.js","5dd30e996e834974dcb4caaad8593fc3"],["/bot/js/73.4cb28985c0fda99fe98b.js","5bbaca674a340e616dabaa0ebb54c989"],["/bot/js/74.4cb28985c0fda99fe98b.js","6a683ed00e0f777c065b59c7ecba42a5"],["/bot/js/75.4cb28985c0fda99fe98b.js","294bc39d763977034189fbf56782c70c"],["/bot/js/76.4cb28985c0fda99fe98b.js","e07dafe7c9ca507c5dc7fbcafca9a64b"],["/bot/js/77.4cb28985c0fda99fe98b.js","590be7de4a1eaf0523df77a7e4b41183"],["/bot/js/78.4cb28985c0fda99fe98b.js","a23e7ead604c54aa0d86565ffd116bbe"],["/bot/js/79.4cb28985c0fda99fe98b.js","75bd7881c4a2cc7c93ca6a91d726fd07"],["/bot/js/8.4cb28985c0fda99fe98b.js","fce60b9d86744ac1dbcd0b505f7e3b8e"],["/bot/js/80.4cb28985c0fda99fe98b.js","e76f866fd4cfb30b094ce93e08673d18"],["/bot/js/81.4cb28985c0fda99fe98b.js","a8bd57aa8c84defba8a6038d2d854624"],["/bot/js/82.4cb28985c0fda99fe98b.js","76fc14bb4af2c34cb6c37caf6efd17c9"],["/bot/js/83.4cb28985c0fda99fe98b.js","ba1d32068211767460fb4b7738ab1222"],["/bot/js/84.4cb28985c0fda99fe98b.js","d16d138e15fe33fbd001698856d028e7"],["/bot/js/85.4cb28985c0fda99fe98b.js","3c3f4af09e3251f4fb3860aa8dfab53e"],["/bot/js/86.4cb28985c0fda99fe98b.js","0a1b1f76f022642a1a70a979b27bc03a"],["/bot/js/87.4cb28985c0fda99fe98b.js","ef28d85536470e04b003ed30b1740991"],["/bot/js/88.4cb28985c0fda99fe98b.js","8dd6e4a7f63d49d8621a8292beda5937"],["/bot/js/89.4cb28985c0fda99fe98b.js","af0b1f1bfe57c15c1faef9c84910f45d"],["/bot/js/9.4cb28985c0fda99fe98b.js","32fbf118b8a650639e686655511082f4"],["/bot/js/90.4cb28985c0fda99fe98b.js","8bcea88fba7256d127386e1c54004c0c"],["/bot/js/91.4cb28985c0fda99fe98b.js","01ff9ffeea73de451de20fcbd8e5a4aa"],["/bot/js/92.4cb28985c0fda99fe98b.js","b5526606f8c69bfceae97fed726d2c05"],["/bot/js/93.4cb28985c0fda99fe98b.js","9f1cbddae8d551f07fd4dd0fa2e0dc67"],["/bot/js/94.4cb28985c0fda99fe98b.js","65bf7a842ec708dc9501b4dd4ad17e37"],["/bot/js/95.4cb28985c0fda99fe98b.js","f99f0234cf839302f46cc244a3e8c763"],["/bot/js/96.4cb28985c0fda99fe98b.js","1eae1adc3c4bbb585daaf0e7da3cd0f1"],["/bot/js/AccountSignupModal.4cb28985c0fda99fe98b.js","1e775cb009146e6b326c7b96cb5abfe4"],["/bot/js/ResetPasswordModal.4cb28985c0fda99fe98b.js","8967b0345a339c323ba81250c9d37ea0"],["/bot/js/account-info.4cb28985c0fda99fe98b.js","e986bc9501747783a8961a9cc8ecca10"],["/bot/js/bot/1-a96c2a.bot.js","dc33e126cc5481ef2a52b9663842b897"],["/bot/js/bot/10-21c4c7.bot.js","4169955049081b338ed4dfb54ba04310"],["/bot/js/bot/11-cd0986.bot.js","74593f73d9017645e21c3a3aa41ed770"],["/bot/js/bot/12-9f48a8.bot.js","7019b843d78711194d08a13c4a7eb48e"],["/bot/js/bot/13-02a81f.bot.js","ce95c4f35fbf59c5388cc3ee7e12d1fb"],["/bot/js/bot/14-19df52.bot.js","c06383ac4986da2d2b098f110369dbf8"],["/bot/js/bot/15-a60858.bot.js","ebaadcf20c1892a2db3156a2e3e9c695"],["/bot/js/bot/16-6894bf.bot.js","57b32a70084189779cecbeefd6ab4669"],["/bot/js/bot/17-195a11.bot.js","488ec5a7937666798e9bb29a860a3897"],["/bot/js/bot/18-b37c53.bot.js","398cfdefa0ba87183ab01c9221b4da7e"],["/bot/js/bot/19-6b67c2.bot.js","2a5f4cd3a8858564d420561c7000da90"],["/bot/js/bot/2-a056f4.bot.js","f60cff8bb771dd155431088704056f50"],["/bot/js/bot/20-88fdaa.bot.js","cb6a0d608aecf2a2cb3053a364499bcc"],["/bot/js/bot/21-b0ae71.bot.js","d8c3481147b7b9aa96f6ce27a052cdcf"],["/bot/js/bot/22-d01ea7.bot.js","a6f815a7c6831915583960afb625e542"],["/bot/js/bot/23-8bfffb.bot.js","9db9c623e96dddb6b9ea1a816095dc5b"],["/bot/js/bot/24-32633a.bot.js","9f08957f1e6cd31fdbb41418b78dc703"],["/bot/js/bot/25-b78a15.bot.js","b1874eb52a24afc6dbf0e191f7157b3a"],["/bot/js/bot/26-371c88.bot.js","cbd4460d33fd6dafefab7091e8bba669"],["/bot/js/bot/27-ff959f.bot.js","cc69710225d3287b54badd29c686d10a"],["/bot/js/bot/28-2e6450.bot.js","29edc001efe7f7a6540cbfb4dc80a4d9"],["/bot/js/bot/29-b22841.bot.js","4f7aa1a04803a1ed81c763224ea8b01a"],["/bot/js/bot/3-226144.bot.js","f68888c760cae8873cca7bfb984c60ef"],["/bot/js/bot/30-934744.bot.js","e362850197024c19ea5c4db01ab89817"],["/bot/js/bot/31-9da54b.bot.js","6fb400786bb442be22e5526709c5e862"],["/bot/js/bot/32-269d22.bot.js","57c715b0ff96a10de7cd12c7b8120117"],["/bot/js/bot/33-210cdb.bot.js","515846500d2dc41513d861de9594a42c"],["/bot/js/bot/34-876a70.bot.js","2a5e26d9824fde601e7b961c589cc0c7"],["/bot/js/bot/35-d4880e.bot.js","c7c7a99f5ff143e8503d05e15e53b013"],["/bot/js/bot/36-c161cf.bot.js","c318a5622187484159b0690ba53c95b8"],["/bot/js/bot/37-a7a1e4.bot.js","f63e9252ab1a5453ab999b803f957142"],["/bot/js/bot/38-7106d8.bot.js","9e76f0c2954d97bcd67c7de0a3a5b973"],["/bot/js/bot/39-233ee5.bot.js","9d5d939e07b53a855a7a06ec0e73d8e1"],["/bot/js/bot/4-221158.bot.js","d6a4e2e224e9db5c95ea8eebdf4db638"],["/bot/js/bot/5-a199f7.bot.js","d5e7c1e9b19d4e24043b3858de49c80f"],["/bot/js/bot/6-7caa78.bot.js","78c9c0f8e5c063f61af7e8a580e36a35"],["/bot/js/bot/7-f3a43f.bot.js","6b20da910760c78ca89bce0ba4f0c2a2"],["/bot/js/bot/8-8f9cfd.bot.js","9ee2bb59df15a7a53ff5fe9cc54c4161"],["/bot/js/bot/9-52922f.bot.js","ad177be865ccf7de706c3db87ea3d3e7"],["/bot/js/bot/bot-sprite.svg","b256e57d119c13376a4f7e00d88a7f5e"],["/bot/js/bot/bot.css","901da76b99ccf5cfd57c89104f81e595"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","5dad7d8f27d6482d2b3d0fb85004f381"],["/bot/js/bot/media/candle_list.png","76306cf24189920e287f34b47a8226e5"],["/bot/js/bot/media/candle_list_1.png","1e751dada4570acfc44e1c5fc0e362fc"],["/bot/js/bot/media/check_result.png","475be787b96d27183c979a966b6edf23"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","54912ab23efa413b870b8863f34b5452"],["/bot/js/bot/media/constrain.png","05f28d97bb6a53658a78f982d26d4fb9"],["/bot/js/bot/media/continue.png","c25389a94172a49c17c6e4bc91fd1fef"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","f92a636af67ce3d1244febc4997a8858"],["/bot/js/bot/media/controls_forEach.png","88c5a8e362d383fea18e0d8ed9ba80de"],["/bot/js/bot/media/controls_if.png","dda42a71d34fbbecd696ad8f0ffc0283"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","34c8c283a987639e5a51173400e02e96"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","86fe279a76902e68217f655437711183"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","a8f06c75e778ce5d832274ab544f0ec3"],["/bot/js/bot/media/in_candle_list_read.png","02d089a4686a18646e8f41d430acba28"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","f94ab6422e7a818c45bd272cf6567145"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","95452a413bf65cb975214c41682adfe3"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","5a21d90d44cdff7b929d29ffe76b0017"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","346081c933603d617f0e2ab725256635"],["/bot/js/bot/media/repeat_while.png","ce7bf10878a4115a33f290321a08ea00"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","82d949a6bf0427e450d4a8bed5c5cd03"],["/bot/js/bot/media/sell_pl.png","27c5f231a83eb2863c44321f390a8a80"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","e61c49849302c2104c7bad85c866d052"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block_example.png","2b6a52cb4a136c3aac4401a8a558596f"],["/bot/js/bot/media/sma_block_example_1.png","8ad7ef1caaba19fa49bd407cc961427a"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","855ca04c3ec04c1f995e4dbe268ae800"],["/bot/js/bot/media/totimestamp.png","3d4b026804fbfdc92c4bd373e9de0c58"],["/bot/js/bot/media/trade_again.png","22f54999e5a4d029184e397d0b480cee"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","afbb279480fdaa2062b4372cca6ceb73"],["/bot/js/bot/xml/toolbox.xml","efcbe36a261fc9dee94784b2c1f2d0bc"],["/bot/js/main.4cb28985c0fda99fe98b.js","b0f3ac29d02c5a3194f22080ab6d1f00"],["/bot/js/modals.4cb28985c0fda99fe98b.js","0c445344b1dd744c3780e01c4b2552f1"],["/bot/js/push-notification.4cb28985c0fda99fe98b.js","016df434571226e27ff827123dcebbd6"],["/bot/js/settings-language.4cb28985c0fda99fe98b.js","7abfb77d1074fa9026b0f9f6d510b997"],["/bot/js/settings-theme.4cb28985c0fda99fe98b.js","de35f4b36182f53cc84e30ddee4efffe"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.4cb28985c0fda99fe98b.js","ab8ff01fdb4bd1afd68730f17b7d4957"],["/bot/js/vendors~ResetPasswordModal.4cb28985c0fda99fe98b.js","3740fe7f91ac8c5c926d3558e296aae6"],["/bot/js/vendors~bot.4cb28985c0fda99fe98b.js","68ce5935664ccdc69ca07dddcacbb85f"],["/bot/js/vendors~main.4cb28985c0fda99fe98b.js","1ee83e5331a09e37478205b7f0079d71"],["/bot/js/work-in-progress.4cb28985c0fda99fe98b.js","ee2333c2462ac99027daa96da1a89939"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







