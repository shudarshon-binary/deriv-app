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

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/1.css","e7ae3673c27cf32b6ec594985ee96aa6"],["/bot/css/2.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/bot/css/AccountSignupModal.css","8cf19e2f3704309cc04f33142fe5b783"],["/bot/css/app.css","1635577367e875c44f353ef0a670caa4"],["/bot/css/bot.css","625d054e311720d5d2072c4c3228b14d"],["/bot/css/modals.css","828256690638c40e408e14600775ca10"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","bdb575088f3631eeb51cc8b536e3f349"],["/bot/js/0.db67dc79c70d98df733f.js","ea262a969c177f7938946bb9a9f68eb8"],["/bot/js/1.db67dc79c70d98df733f.js","5e978d725be8848d7fcdca0885f7763b"],["/bot/js/10.db67dc79c70d98df733f.js","0a1a4825f785d1f4d672b28ceb96082e"],["/bot/js/11.db67dc79c70d98df733f.js","101a667a9fe03c7080785897f27d6b0b"],["/bot/js/12.db67dc79c70d98df733f.js","f8ed873c4b04cddde3e5799966e4e634"],["/bot/js/13.db67dc79c70d98df733f.js","8dea8478cd7e3613918b65e78740787f"],["/bot/js/14.db67dc79c70d98df733f.js","dac44340e4ef5e3785eca568a6460f07"],["/bot/js/15.db67dc79c70d98df733f.js","e2a34134a3d7290d7217c435f24f4ca6"],["/bot/js/16.db67dc79c70d98df733f.js","42fdf7b169c2318cb9346a25948725f5"],["/bot/js/17.db67dc79c70d98df733f.js","e72ebecb9149e8c6e5a513709a543c4e"],["/bot/js/18.db67dc79c70d98df733f.js","4b2780ef8cd94f935072367e58077b4c"],["/bot/js/19.db67dc79c70d98df733f.js","b0ec877b46982e7fa4cfd98832b096b7"],["/bot/js/2.db67dc79c70d98df733f.js","636ffbe0f7f39060b6c43c8bc54ead12"],["/bot/js/20.db67dc79c70d98df733f.js","91025fe08d225243953a78b5bf42cd7a"],["/bot/js/21.db67dc79c70d98df733f.js","342e330f72f21a6f4822198eabaddfd7"],["/bot/js/22.db67dc79c70d98df733f.js","6bfc13c050853ce661b0cce706b0517b"],["/bot/js/23.db67dc79c70d98df733f.js","1ec31298ee14975d382f9953b41166f4"],["/bot/js/24.db67dc79c70d98df733f.js","3e9051a3de9aebee55b24118cae101f9"],["/bot/js/25.db67dc79c70d98df733f.js","8571c023bad58b5b6bfad23e8dfd317f"],["/bot/js/26.db67dc79c70d98df733f.js","19b7b3d1a34128aa21748695d39a23e8"],["/bot/js/27.db67dc79c70d98df733f.js","3254a990b3d99156fa7bb2adef025b56"],["/bot/js/28.db67dc79c70d98df733f.js","967f71831d5b36d81c00d57c6484d3fb"],["/bot/js/29.db67dc79c70d98df733f.js","ac72b7bd6e1eb85a400df2070d340aed"],["/bot/js/3.db67dc79c70d98df733f.js","193fc97cca4a7152e2dfcc15108596cd"],["/bot/js/30.db67dc79c70d98df733f.js","2360fa6eaec3ecc62a2fd4df25338942"],["/bot/js/31.db67dc79c70d98df733f.js","b69673173a1e1db2c43c3f65c3f1bc80"],["/bot/js/32.db67dc79c70d98df733f.js","ebb3f6c11b673d6ccf2e6b80f0fb9b3e"],["/bot/js/33.db67dc79c70d98df733f.js","f9149078f6d93b2312f2129f2009daec"],["/bot/js/34.db67dc79c70d98df733f.js","744ed5a6613d6efdc52c48bd913eca97"],["/bot/js/35.db67dc79c70d98df733f.js","bff1f1f2387fb4c6dfc9d7b86b38a24a"],["/bot/js/36.db67dc79c70d98df733f.js","e6dc1c78b90712b7be54bdcb6afd9841"],["/bot/js/37.db67dc79c70d98df733f.js","0dd776614b2730d7cd009ec7e2fa803e"],["/bot/js/38.db67dc79c70d98df733f.js","73492febd659b2d66a34c6605064cfac"],["/bot/js/39.db67dc79c70d98df733f.js","9e2cce63352c4020a50d2c70dcfbb6ab"],["/bot/js/4.db67dc79c70d98df733f.js","014b3ca1305237689ab0a789d89f6c47"],["/bot/js/40.db67dc79c70d98df733f.js","d1f3d5f908e7ea311cad272af10c2d37"],["/bot/js/404.db67dc79c70d98df733f.js","824f86a1ff8fbb29227f94dfd0b56c13"],["/bot/js/41.db67dc79c70d98df733f.js","9db59deb56dcc7908bcc4c7a305b3b7d"],["/bot/js/42.db67dc79c70d98df733f.js","d3488609632697da56eee16ca405d6a2"],["/bot/js/43.db67dc79c70d98df733f.js","b65066c0bf343411b7e1996828480203"],["/bot/js/44.db67dc79c70d98df733f.js","e7518b1d9945bf89669ac32f4ec7f941"],["/bot/js/45.db67dc79c70d98df733f.js","1da3a5b453543d511d0d32e11ae63ea4"],["/bot/js/46.db67dc79c70d98df733f.js","9797d49119f8aa321bac1b92c96373e4"],["/bot/js/47.db67dc79c70d98df733f.js","3032f267991fc6a23886ec93831030b1"],["/bot/js/48.db67dc79c70d98df733f.js","dd1b7be28b81840b6089cb625aaf46ad"],["/bot/js/49.db67dc79c70d98df733f.js","c31fbd7df2365cb4ba87ae0249e03b64"],["/bot/js/5.db67dc79c70d98df733f.js","09a8ec4afcac891ad56b931f16963701"],["/bot/js/50.db67dc79c70d98df733f.js","45f3161b20b05ba22c2507252ba59bcb"],["/bot/js/51.db67dc79c70d98df733f.js","c0e0b3b57a369a8309fc8fa1145c1027"],["/bot/js/52.db67dc79c70d98df733f.js","21003da5452f049a6b45429d4219476e"],["/bot/js/53.db67dc79c70d98df733f.js","f733eae87a25dbc4bf9961bc260d9235"],["/bot/js/54.db67dc79c70d98df733f.js","8159d3340711a51c3ef84c610f97372a"],["/bot/js/55.db67dc79c70d98df733f.js","90f3c31979b19580694e4f13ae9c54db"],["/bot/js/56.db67dc79c70d98df733f.js","b19eaa7d13dd617fda4527e6eba3957f"],["/bot/js/57.db67dc79c70d98df733f.js","60a68b368d18c1da3f900fdf65dd0020"],["/bot/js/58.db67dc79c70d98df733f.js","f9f42cd0177d98857102b1021f8e60cf"],["/bot/js/59.db67dc79c70d98df733f.js","a967f383fd376a38f729fbb1ee3941e3"],["/bot/js/6.db67dc79c70d98df733f.js","44fd4cc4067bf338d447f73f93906e9d"],["/bot/js/60.db67dc79c70d98df733f.js","4d291357989801dfda0871f01f9e5384"],["/bot/js/61.db67dc79c70d98df733f.js","3eba2745362a5c69615a75219ce319e3"],["/bot/js/62.db67dc79c70d98df733f.js","25ed3fa66b8c9e34e6ba2a7c91310480"],["/bot/js/63.db67dc79c70d98df733f.js","3935263f09e48b0b52aa6ef07e6430d5"],["/bot/js/64.db67dc79c70d98df733f.js","46c5049cffaf3afd1fca926988b90923"],["/bot/js/65.db67dc79c70d98df733f.js","422b29b27ceb63ff545f77c6ed2b7c25"],["/bot/js/66.db67dc79c70d98df733f.js","f86898fb1db91f4f10dab8fa19624d8a"],["/bot/js/67.db67dc79c70d98df733f.js","5b8fc74f34b48d485c11c16dae585961"],["/bot/js/68.db67dc79c70d98df733f.js","b7baca879e98b65e5e450c520b219e75"],["/bot/js/69.db67dc79c70d98df733f.js","75ffd46a397bbb25d06ce9049929f6f2"],["/bot/js/7.db67dc79c70d98df733f.js","9155b56399520249cad8024762c70d3d"],["/bot/js/70.db67dc79c70d98df733f.js","fc017c90ffc860c796a71c8252812bc7"],["/bot/js/71.db67dc79c70d98df733f.js","3890557e7e106c283b150e2723e9a232"],["/bot/js/72.db67dc79c70d98df733f.js","5783fdacb3187c2adf47f74151394470"],["/bot/js/73.db67dc79c70d98df733f.js","04f4dd702a2b4b9fd6e43b8c984112d6"],["/bot/js/74.db67dc79c70d98df733f.js","0d3200389e0f088b798d5bffa48f2454"],["/bot/js/75.db67dc79c70d98df733f.js","6cc25a0c4f312680d550750e17a95781"],["/bot/js/76.db67dc79c70d98df733f.js","ee34a7c4fbd5755894d6d1f769007b9f"],["/bot/js/77.db67dc79c70d98df733f.js","ec9c4ce92f6b5290b52d7371048115f6"],["/bot/js/78.db67dc79c70d98df733f.js","1e7da9184ab51acc8fcaad77ec34f47e"],["/bot/js/79.db67dc79c70d98df733f.js","6ef1ef83ec3cdcb52ed8fa5da6472494"],["/bot/js/8.db67dc79c70d98df733f.js","e51dbbd7d4d176cef12cee066ee8287b"],["/bot/js/80.db67dc79c70d98df733f.js","65998e2da18c193ccab372110c08ce64"],["/bot/js/81.db67dc79c70d98df733f.js","b2b05fea222f03d0f028ace1e731d9eb"],["/bot/js/82.db67dc79c70d98df733f.js","05f268401b59097b339cadde929f401a"],["/bot/js/83.db67dc79c70d98df733f.js","ecbcc6cf9d3994ce5f7bbaa518f8e524"],["/bot/js/84.db67dc79c70d98df733f.js","b6c32304897e64fee023ca2fa17ce5ff"],["/bot/js/85.db67dc79c70d98df733f.js","c768ec22912d43916e65272ca4b10ef0"],["/bot/js/86.db67dc79c70d98df733f.js","bdf3e9ac9049bbb4fdf0b31072504922"],["/bot/js/87.db67dc79c70d98df733f.js","9867539fbd5112f6f4ddec7ea916b112"],["/bot/js/88.db67dc79c70d98df733f.js","9b64bea955e941db15b3673e7e828bfa"],["/bot/js/89.db67dc79c70d98df733f.js","c558ffd66d7ac99c01837224b0f299f4"],["/bot/js/9.db67dc79c70d98df733f.js","d476eec3630dfba999069a96c716bff9"],["/bot/js/90.db67dc79c70d98df733f.js","5db6ad030f86a739a3e7a2d638f25cd3"],["/bot/js/AccountSignupModal.db67dc79c70d98df733f.js","330a01b3ad8e85042162d85a14b55e7f"],["/bot/js/account-info.db67dc79c70d98df733f.js","0c17fcfa0a294d6f6da826a63ae4350d"],["/bot/js/bot/1-a96e15.bot.js","08cf7012bdf87535950bff12f099c16e"],["/bot/js/bot/10-41cba2.bot.js","7bf5c8667c9a948f56513b8475b05475"],["/bot/js/bot/11-d294ba.bot.js","8e2511303b274a14c30e9241f9ec8f9a"],["/bot/js/bot/12-568040.bot.js","9df818e5424776f14a3a6abbaa558321"],["/bot/js/bot/13-606111.bot.js","c98f5ef01fe250314b08fea57b4adca8"],["/bot/js/bot/14-f00dc2.bot.js","22bd29b7eddaf5cb1aac016a1bb9778e"],["/bot/js/bot/15-e77f78.bot.js","21c10c16f67d904a619a587bcee8cc6b"],["/bot/js/bot/16-429951.bot.js","add8338de772272b08b54d928a12154c"],["/bot/js/bot/17-e8fbd5.bot.js","8922e4080492182efe107b6effc2d297"],["/bot/js/bot/18-83c4f8.bot.js","ba7be43034243f1a1e9ec7963bb2974c"],["/bot/js/bot/19-a204a4.bot.js","643c17a240c477b1452a7753bbea63ba"],["/bot/js/bot/2-919185.bot.js","cfab55e7c62a40227755aeb86a7ccb06"],["/bot/js/bot/20-9e8ff3.bot.js","2c76acd7f4d1fda36707f61460919535"],["/bot/js/bot/21-1544ad.bot.js","57df89fb3b9ec1c03a7f318c2df69104"],["/bot/js/bot/22-3e62ac.bot.js","b4629ad0c963e2a3643c6978791179cf"],["/bot/js/bot/23-c3fdcb.bot.js","c0bd4d30f89bc24b8fc359d9970b2cac"],["/bot/js/bot/24-fb787c.bot.js","47e3f9dbfe421d14aa2f1f0a39958fec"],["/bot/js/bot/25-ec824c.bot.js","6b311b862a9942e62aca2846e4463e8a"],["/bot/js/bot/26-918e8d.bot.js","0ef29e26ce4b00124f6bbf8fb53a5f5a"],["/bot/js/bot/27-cddc42.bot.js","4992bce1ab3b5db79357bd42a57e7b38"],["/bot/js/bot/28-beb535.bot.js","19212b94b445e1baa5e5968eb75afea6"],["/bot/js/bot/29-d0011a.bot.js","f58141bbcc1dd1f13be653bc75173941"],["/bot/js/bot/3-d741b5.bot.js","f17e7206e61b202f834ae8a6f39afaff"],["/bot/js/bot/30-5d2353.bot.js","6223fb4ec38248748dd1f26135274377"],["/bot/js/bot/31-bc7376.bot.js","45c6b2c4277c03f7a493023d0551d7f9"],["/bot/js/bot/32-68931e.bot.js","130515f0b8d85fe8da7180845249ccae"],["/bot/js/bot/33-4302e0.bot.js","26a3ea259f13fc114f49ff66c45baefc"],["/bot/js/bot/34-1cf679.bot.js","3c33d809b26ad553f368c351bbab4f65"],["/bot/js/bot/35-380553.bot.js","4233b09fcddda9112b3e1624248fcfa5"],["/bot/js/bot/36-5b7765.bot.js","d344927831e282c1e84d2cc1fda1f10e"],["/bot/js/bot/37-c626ab.bot.js","0468a1aa7e376ac85a2a5b9d0e1c07fc"],["/bot/js/bot/38-3a40f2.bot.js","8741c97d2a0fbf14c294f740eb209a86"],["/bot/js/bot/39-b4c33c.bot.js","2e7e1bc74196910084e64af5ae7f0d01"],["/bot/js/bot/4-356e33.bot.js","44eb751e5efdc7229444cfad9dc448e6"],["/bot/js/bot/5-025694.bot.js","dd38c4585231b9eb48c6f9e0f3308568"],["/bot/js/bot/6-b40884.bot.js","c44a119290af1cfa1f3062d648fd2d06"],["/bot/js/bot/7-08eadc.bot.js","9b746643c5e91b325449f8a84cf30198"],["/bot/js/bot/8-096133.bot.js","cbfba72c4ea68a334c01ce39111132ac"],["/bot/js/bot/9-4f051b.bot.js","6bcb616285cf1ed172a039829da81855"],["/bot/js/bot/bot-sprite.svg","9f528949087aba08d7f7c006215f0cbf"],["/bot/js/bot/bot.css","625d054e311720d5d2072c4c3228b14d"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.db67dc79c70d98df733f.js","8731a99c4d56eaa5c6b7e4e5bae36d25"],["/bot/js/modals.db67dc79c70d98df733f.js","fcfabc4d6edf2f76d424bc9c75794208"],["/bot/js/push-notification.db67dc79c70d98df733f.js","d5483fd05c2de839dbc9e3a4ff3e4372"],["/bot/js/settings-language.db67dc79c70d98df733f.js","61ac4df4c111c2573490ac37ed1b045e"],["/bot/js/settings-theme.db67dc79c70d98df733f.js","b362ef9b2a7d28890f8d240f0164f0d8"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.db67dc79c70d98df733f.js","b9050706c755c6573cd904617c3b0be3"],["/bot/js/vendors~account-info~~e180cbd1.db67dc79c70d98df733f.js","70a393c959b32bf889b91a594a8efd07"],["/bot/js/vendors~main.db67dc79c70d98df733f.js","55a1a1bcabd987642ddc240c18780087"],["/bot/js/work-in-progress.db67dc79c70d98df733f.js","3663a816eb5af2b2ac0d0806d64cd1a4"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







