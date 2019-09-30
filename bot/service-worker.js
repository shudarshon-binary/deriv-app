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

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/1.css","e7ae3673c27cf32b6ec594985ee96aa6"],["/bot/css/2.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/bot/css/AccountSignupModal.css","8cf19e2f3704309cc04f33142fe5b783"],["/bot/css/app.css","6bdcb5a089722def26948f35c1509f66"],["/bot/css/bot.css","155868abfabbc67005da8bb73585394f"],["/bot/css/modals.css","828256690638c40e408e14600775ca10"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","60d08565af98e68fd0808b36b7f34f51"],["/bot/js/0.5e005d35938b1a2b4648.js","f43b5be616c3082172f827eae4f787e1"],["/bot/js/1.5e005d35938b1a2b4648.js","d8d2c5c19e4f37dc80ff94e5a21e8593"],["/bot/js/10.5e005d35938b1a2b4648.js","c4271eb4a9aac377b0a4c39528c2973b"],["/bot/js/11.5e005d35938b1a2b4648.js","d7c3281de58ce407c8c56c1ff3798636"],["/bot/js/12.5e005d35938b1a2b4648.js","551e697043edbeacf72a8158cbadf883"],["/bot/js/13.5e005d35938b1a2b4648.js","2eb065c3e1f4568e6da3977c07ddb641"],["/bot/js/14.5e005d35938b1a2b4648.js","bcb5caaac9212da0499dffe0cb19ccaa"],["/bot/js/15.5e005d35938b1a2b4648.js","426b80b0b71fcd3dfa58c6570adc3057"],["/bot/js/16.5e005d35938b1a2b4648.js","3aa0c5f16b2a70ab9597f07a407b3ecd"],["/bot/js/17.5e005d35938b1a2b4648.js","1a131f4cc529d77bef37895c865c46be"],["/bot/js/18.5e005d35938b1a2b4648.js","ee54c4a2967d2bf873a1890e4c2cdf6a"],["/bot/js/19.5e005d35938b1a2b4648.js","ba050a836ed0a56b32867256fa22f434"],["/bot/js/2.5e005d35938b1a2b4648.js","96048b59962061b80b47fe9fdc42263b"],["/bot/js/20.5e005d35938b1a2b4648.js","58df5c28a45e30651b95df26bf8ffd83"],["/bot/js/21.5e005d35938b1a2b4648.js","847df6fabb615bfdd2eb9696053a35ba"],["/bot/js/22.5e005d35938b1a2b4648.js","440fb6f9d3b767cca77147a785d137c1"],["/bot/js/23.5e005d35938b1a2b4648.js","8811a906e5687804b4efdc3b41902828"],["/bot/js/24.5e005d35938b1a2b4648.js","6b603672aeb97950437c564996b873c2"],["/bot/js/25.5e005d35938b1a2b4648.js","f91b1d3afefc3d456436a72064bac352"],["/bot/js/26.5e005d35938b1a2b4648.js","6fab2aa7c5151a36637917a37a96bc34"],["/bot/js/27.5e005d35938b1a2b4648.js","67e5c2d1803a8c5c227d9ddcd6861ef6"],["/bot/js/28.5e005d35938b1a2b4648.js","c6a018fc5f6c86b5f1b32c7ca0d65775"],["/bot/js/29.5e005d35938b1a2b4648.js","cbc48c7ab0253bc5823bd0c45ba62f47"],["/bot/js/3.5e005d35938b1a2b4648.js","34be600a29a9a4a771932fc20cb8f26d"],["/bot/js/30.5e005d35938b1a2b4648.js","7954784b65fc197b1e431254fb04306d"],["/bot/js/31.5e005d35938b1a2b4648.js","dee93ea27ec3ea0c3786940b608d52a2"],["/bot/js/32.5e005d35938b1a2b4648.js","619f890578514ae00cb461709cdd63dd"],["/bot/js/33.5e005d35938b1a2b4648.js","820931476478b9657a214b79bd1c087c"],["/bot/js/34.5e005d35938b1a2b4648.js","0b25242f67ba6194a313d1bb80d5f937"],["/bot/js/35.5e005d35938b1a2b4648.js","46bbdf0417cf70efb5680cbaf7a1b79b"],["/bot/js/36.5e005d35938b1a2b4648.js","7d6a5627f17511a90dfdbd45019a642f"],["/bot/js/37.5e005d35938b1a2b4648.js","0d2522e9540f662d8e6ab8a0200d9b29"],["/bot/js/38.5e005d35938b1a2b4648.js","d4b3cfa4adb330aa284a31e80a55d824"],["/bot/js/39.5e005d35938b1a2b4648.js","643cb39f66a76a702e5c35dbaa838bfc"],["/bot/js/4.5e005d35938b1a2b4648.js","0a6a307080c54ed72b56b77362a040ae"],["/bot/js/40.5e005d35938b1a2b4648.js","1475f0f62e8be0f9effc4f3a7abc6c7e"],["/bot/js/404.5e005d35938b1a2b4648.js","1701ebaa886dac600d1b9e1fb4d7b057"],["/bot/js/41.5e005d35938b1a2b4648.js","030ab6ad2cb0d8ea2d9157a9d69315f3"],["/bot/js/42.5e005d35938b1a2b4648.js","aea20d3282e4fb6cfae7e59e45761862"],["/bot/js/43.5e005d35938b1a2b4648.js","89bca6073e6316bad6036830f5ed8054"],["/bot/js/44.5e005d35938b1a2b4648.js","cb127f7095734678f3cbd096788de7c5"],["/bot/js/45.5e005d35938b1a2b4648.js","8a61c91f2fa6350db025569b1eeac12f"],["/bot/js/46.5e005d35938b1a2b4648.js","0fd0b20038dc2b9d3b27ede15d387473"],["/bot/js/47.5e005d35938b1a2b4648.js","1a63a2be5b6a99ccff759d1d83eace91"],["/bot/js/48.5e005d35938b1a2b4648.js","09d4546b8c824f027f76a8c63504908f"],["/bot/js/49.5e005d35938b1a2b4648.js","394cfa204b5d08d552c4d746187fb827"],["/bot/js/5.5e005d35938b1a2b4648.js","ebd738e182ceed405bd251d6142b5e0d"],["/bot/js/50.5e005d35938b1a2b4648.js","22bb3715837176ddff1ca935919ddea3"],["/bot/js/51.5e005d35938b1a2b4648.js","0d0567f539d7e67d309d134f4ad5da36"],["/bot/js/52.5e005d35938b1a2b4648.js","3330882e3fde935919e123558bf702dd"],["/bot/js/53.5e005d35938b1a2b4648.js","c158292e3feedf58cd67856819645502"],["/bot/js/54.5e005d35938b1a2b4648.js","6d8d74de41378b3cdffdc966c5cf46e2"],["/bot/js/55.5e005d35938b1a2b4648.js","f1e3ae8c8da37db7eff9a0ec43f7ae78"],["/bot/js/56.5e005d35938b1a2b4648.js","19c6ec7e25aa41e87513bc3d067c0fe9"],["/bot/js/57.5e005d35938b1a2b4648.js","c9b13d753d0b6f7f22837af7da49abcc"],["/bot/js/58.5e005d35938b1a2b4648.js","1f6b65e3fc4876bde84a67b67b66e358"],["/bot/js/59.5e005d35938b1a2b4648.js","b2c15a75e7443250609d6b95468a99af"],["/bot/js/6.5e005d35938b1a2b4648.js","bd8d0aa1a6ac66c93dc148e43c92dc36"],["/bot/js/60.5e005d35938b1a2b4648.js","d111c70f7bc98706855f459761a19fad"],["/bot/js/61.5e005d35938b1a2b4648.js","c07e2c8a27fd0b7340c389e674aec2c3"],["/bot/js/62.5e005d35938b1a2b4648.js","5653ef69ce0aef45ed43003ac216142e"],["/bot/js/63.5e005d35938b1a2b4648.js","4a1add11bbb618f826a3056960c8692c"],["/bot/js/64.5e005d35938b1a2b4648.js","8fff42a2b1c4a98a3cfd2fc96c7d67c5"],["/bot/js/65.5e005d35938b1a2b4648.js","d888caa830f0a6d7c48649e2b1bd4013"],["/bot/js/66.5e005d35938b1a2b4648.js","6114c0e70e861d495b164c46425f1363"],["/bot/js/67.5e005d35938b1a2b4648.js","5486eea76b6a24f26133a3c0ec20bda5"],["/bot/js/68.5e005d35938b1a2b4648.js","762daae0f3d14fb5f0633bde06f12a95"],["/bot/js/69.5e005d35938b1a2b4648.js","6d2eae160d94756703f72ab2640f5191"],["/bot/js/7.5e005d35938b1a2b4648.js","1be7fd47f3915785f97707ff9cb01928"],["/bot/js/70.5e005d35938b1a2b4648.js","42f51e44d303241b2315b4ed77484506"],["/bot/js/71.5e005d35938b1a2b4648.js","7587324ce4004c2e918fb554b0f89879"],["/bot/js/72.5e005d35938b1a2b4648.js","f8c09b8d308bfcd99eeb2799cd5b8cff"],["/bot/js/73.5e005d35938b1a2b4648.js","023c3410dc7ffda90769433ddace3ae2"],["/bot/js/74.5e005d35938b1a2b4648.js","d6b1aad533638517a5e2ea1fca673519"],["/bot/js/75.5e005d35938b1a2b4648.js","d848a7399dd87496ac4b9f3db1c00b90"],["/bot/js/76.5e005d35938b1a2b4648.js","6c297556b10c84afc7ac6d08540c4e42"],["/bot/js/77.5e005d35938b1a2b4648.js","524d6a0eb6c1d69d1b0fe355a4cb4641"],["/bot/js/78.5e005d35938b1a2b4648.js","c7e9bb9db8353ac82ba39e09b4cf573c"],["/bot/js/79.5e005d35938b1a2b4648.js","b2d3b11570ac9e6d20b6a1d2d993513d"],["/bot/js/8.5e005d35938b1a2b4648.js","d5c39aed0e4ca88428cfc998794eaaef"],["/bot/js/80.5e005d35938b1a2b4648.js","e174d61be79940cf880b0ff39af23aca"],["/bot/js/81.5e005d35938b1a2b4648.js","ecc3aaa436ee08b83cdcc31faeb7f2ae"],["/bot/js/82.5e005d35938b1a2b4648.js","772baa4f8107abb9932cdf01a0d4ba44"],["/bot/js/83.5e005d35938b1a2b4648.js","58d1acf7d224902c33ae25b3929e8456"],["/bot/js/84.5e005d35938b1a2b4648.js","8ee0a335a69397d3360fff873d214f92"],["/bot/js/85.5e005d35938b1a2b4648.js","ef930e3b613570312e43a8399cd67479"],["/bot/js/86.5e005d35938b1a2b4648.js","e1ba1ad4f5f4cb9fc3d69ddd7ed1616e"],["/bot/js/87.5e005d35938b1a2b4648.js","d5edf742acf5cea92b04b86c129a9ab1"],["/bot/js/88.5e005d35938b1a2b4648.js","6896f4ec13cebeca9ceef973dc811960"],["/bot/js/89.5e005d35938b1a2b4648.js","b493c840c05d76566980d9ec4c18f23d"],["/bot/js/9.5e005d35938b1a2b4648.js","5730f212ea44e1d7a2654314e1f0fb54"],["/bot/js/90.5e005d35938b1a2b4648.js","9e6a0b483c18ecf9f90ff2405d40eebf"],["/bot/js/AccountSignupModal.5e005d35938b1a2b4648.js","9b820e116efb0a87fae1e63110f447d3"],["/bot/js/account-info.5e005d35938b1a2b4648.js","43b03208d4d4d59bae252a6d8e47f14d"],["/bot/js/bot/1-a96e15.bot.js","08cf7012bdf87535950bff12f099c16e"],["/bot/js/bot/10-41cba2.bot.js","7bf5c8667c9a948f56513b8475b05475"],["/bot/js/bot/11-d294ba.bot.js","8e2511303b274a14c30e9241f9ec8f9a"],["/bot/js/bot/12-568040.bot.js","9df818e5424776f14a3a6abbaa558321"],["/bot/js/bot/13-606111.bot.js","c98f5ef01fe250314b08fea57b4adca8"],["/bot/js/bot/14-f00dc2.bot.js","22bd29b7eddaf5cb1aac016a1bb9778e"],["/bot/js/bot/15-e77f78.bot.js","21c10c16f67d904a619a587bcee8cc6b"],["/bot/js/bot/16-429951.bot.js","add8338de772272b08b54d928a12154c"],["/bot/js/bot/17-e8fbd5.bot.js","8922e4080492182efe107b6effc2d297"],["/bot/js/bot/18-83c4f8.bot.js","ba7be43034243f1a1e9ec7963bb2974c"],["/bot/js/bot/19-a204a4.bot.js","643c17a240c477b1452a7753bbea63ba"],["/bot/js/bot/2-919185.bot.js","cfab55e7c62a40227755aeb86a7ccb06"],["/bot/js/bot/20-9e8ff3.bot.js","2c76acd7f4d1fda36707f61460919535"],["/bot/js/bot/21-1544ad.bot.js","57df89fb3b9ec1c03a7f318c2df69104"],["/bot/js/bot/22-3e62ac.bot.js","b4629ad0c963e2a3643c6978791179cf"],["/bot/js/bot/23-c3fdcb.bot.js","c0bd4d30f89bc24b8fc359d9970b2cac"],["/bot/js/bot/24-fb787c.bot.js","47e3f9dbfe421d14aa2f1f0a39958fec"],["/bot/js/bot/25-ec824c.bot.js","6b311b862a9942e62aca2846e4463e8a"],["/bot/js/bot/26-918e8d.bot.js","0ef29e26ce4b00124f6bbf8fb53a5f5a"],["/bot/js/bot/27-cddc42.bot.js","4992bce1ab3b5db79357bd42a57e7b38"],["/bot/js/bot/28-beb535.bot.js","19212b94b445e1baa5e5968eb75afea6"],["/bot/js/bot/29-d0011a.bot.js","f58141bbcc1dd1f13be653bc75173941"],["/bot/js/bot/3-d741b5.bot.js","f17e7206e61b202f834ae8a6f39afaff"],["/bot/js/bot/30-5d2353.bot.js","6223fb4ec38248748dd1f26135274377"],["/bot/js/bot/31-bc7376.bot.js","45c6b2c4277c03f7a493023d0551d7f9"],["/bot/js/bot/32-68931e.bot.js","130515f0b8d85fe8da7180845249ccae"],["/bot/js/bot/33-4302e0.bot.js","26a3ea259f13fc114f49ff66c45baefc"],["/bot/js/bot/34-1cf679.bot.js","3c33d809b26ad553f368c351bbab4f65"],["/bot/js/bot/35-380553.bot.js","4233b09fcddda9112b3e1624248fcfa5"],["/bot/js/bot/36-5b7765.bot.js","d344927831e282c1e84d2cc1fda1f10e"],["/bot/js/bot/37-c626ab.bot.js","0468a1aa7e376ac85a2a5b9d0e1c07fc"],["/bot/js/bot/38-3a40f2.bot.js","8741c97d2a0fbf14c294f740eb209a86"],["/bot/js/bot/39-b4c33c.bot.js","2e7e1bc74196910084e64af5ae7f0d01"],["/bot/js/bot/4-356e33.bot.js","44eb751e5efdc7229444cfad9dc448e6"],["/bot/js/bot/5-025694.bot.js","dd38c4585231b9eb48c6f9e0f3308568"],["/bot/js/bot/6-b40884.bot.js","c44a119290af1cfa1f3062d648fd2d06"],["/bot/js/bot/7-08eadc.bot.js","9b746643c5e91b325449f8a84cf30198"],["/bot/js/bot/8-096133.bot.js","cbfba72c4ea68a334c01ce39111132ac"],["/bot/js/bot/9-4f051b.bot.js","6bcb616285cf1ed172a039829da81855"],["/bot/js/bot/bot-sprite.svg","9f528949087aba08d7f7c006215f0cbf"],["/bot/js/bot/bot.css","155868abfabbc67005da8bb73585394f"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.5e005d35938b1a2b4648.js","bc53ec55efdeec55dadb4a2d93662ede"],["/bot/js/modals.5e005d35938b1a2b4648.js","4a9e3e82778c399018e235332d8e22fb"],["/bot/js/push-notification.5e005d35938b1a2b4648.js","462837e8c1c0090d63f3e62b40a7c037"],["/bot/js/settings-language.5e005d35938b1a2b4648.js","65515f0cab66988f1db60e767607f39c"],["/bot/js/settings-theme.5e005d35938b1a2b4648.js","71a742be0a0b0e54c58a4b967be07854"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.5e005d35938b1a2b4648.js","1b9ba9f65f75fafead9026bf2661a96c"],["/bot/js/vendors~account-info~~e180cbd1.5e005d35938b1a2b4648.js","038f0f5b40616fa69ba29ca10cba7c06"],["/bot/js/vendors~main.5e005d35938b1a2b4648.js","68d32cb094af0a4e4833638398da6492"],["/bot/js/work-in-progress.5e005d35938b1a2b4648.js","ccef963a2c5231a0c62add208ea73fbf"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







