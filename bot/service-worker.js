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

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/1.css","0f8580726e1c7b755fb79d6d0887a6e4"],["/bot/css/2.css","19dd98047640c18c2181b4a4b2166c5b"],["/bot/css/4.css","e258203ae30c953024a1f9e5ce05442e"],["/bot/css/AccountSignupModal.css","a5db4e5b18d117647223e9ae5ddc7f01"],["/bot/css/app.css","b4b530e5e0cdae4d6fcf1a40e9a59e58"],["/bot/css/bot.css","c01329d6f9d716b39be03306aa2cacc1"],["/bot/css/modals.css","141ccfc487a3b35734fa3e8ba330e64f"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","eed0e20f4845f349c8065aedd455dcba"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","2dfd77e0803e913429dba61ffe016e18"],["/bot/js/0.eb3cb6494b1262c13362.js","43bf65e39b96ac9907af5d884d97cfb9"],["/bot/js/1.eb3cb6494b1262c13362.js","77f022a784bae1b358ec9d4b2b230bdd"],["/bot/js/10.eb3cb6494b1262c13362.js","ea5b00e45d1ef04bbc0177885c694567"],["/bot/js/11.eb3cb6494b1262c13362.js","984e200ea0730e8de5210e96d35f5362"],["/bot/js/12.eb3cb6494b1262c13362.js","ddd56a3dbd2f20174fb89abf07224eab"],["/bot/js/13.eb3cb6494b1262c13362.js","4e979a8afbbf9087c82acde7739aadd1"],["/bot/js/14.eb3cb6494b1262c13362.js","f91d154e0bcaa5c1fed85569193d5a8f"],["/bot/js/15.eb3cb6494b1262c13362.js","5a2ff6865fe86dac350f9612b516c7a0"],["/bot/js/16.eb3cb6494b1262c13362.js","09cbc313ee4258f852f1730898b169f2"],["/bot/js/17.eb3cb6494b1262c13362.js","8680158852b57a9605af2457ca67e94b"],["/bot/js/18.eb3cb6494b1262c13362.js","1f89cf5b860edea38d8f8e92eaa1b205"],["/bot/js/19.eb3cb6494b1262c13362.js","a1dfd3eb8d558006f5df35100adce6b7"],["/bot/js/2.eb3cb6494b1262c13362.js","5d0f6bc9af6bbd98b4de38bd98e30036"],["/bot/js/20.eb3cb6494b1262c13362.js","1aa76fedbbc4620824b96b79c673c1c4"],["/bot/js/21.eb3cb6494b1262c13362.js","ff3388d1ed04b0432acd823b8bcdf3d6"],["/bot/js/22.eb3cb6494b1262c13362.js","b5c8370657f3a8a001e17794ec3e0697"],["/bot/js/23.eb3cb6494b1262c13362.js","8a72f89ac64092b5121bfb0464160d37"],["/bot/js/24.eb3cb6494b1262c13362.js","7946dae6d1dfcd61a30719b60d1f0d1f"],["/bot/js/25.eb3cb6494b1262c13362.js","89896e2554ed15e2c486a6065ad49764"],["/bot/js/26.eb3cb6494b1262c13362.js","b8793369ea7385de5ba24e5dacec6ae3"],["/bot/js/27.eb3cb6494b1262c13362.js","bec48de9672084e031a109312ea3747d"],["/bot/js/28.eb3cb6494b1262c13362.js","226fb589b7e49a5452345e9d543e5756"],["/bot/js/29.eb3cb6494b1262c13362.js","7ef28c540323ab67fded0762ed7ac8ea"],["/bot/js/3.eb3cb6494b1262c13362.js","32c508f8b95a0047f266de397cb41740"],["/bot/js/30.eb3cb6494b1262c13362.js","e8e9d33a24c3d3cb00455f468f792802"],["/bot/js/31.eb3cb6494b1262c13362.js","f2f923b183c3c85d1f5c120d18483a69"],["/bot/js/32.eb3cb6494b1262c13362.js","ed59fa022b910e7e4e9d62d65b84f3a7"],["/bot/js/33.eb3cb6494b1262c13362.js","e00dfa3c1936f710cfc5cfc2ba6bc3f0"],["/bot/js/34.eb3cb6494b1262c13362.js","3fd2bb604a9dec8c58d26ccd216f401b"],["/bot/js/35.eb3cb6494b1262c13362.js","8e15430b07080617256736eaae875fac"],["/bot/js/36.eb3cb6494b1262c13362.js","2c677c3a90bb17b754a365e837a89e28"],["/bot/js/37.eb3cb6494b1262c13362.js","9a9d5d2fb67f65db0b5edfc2696f270d"],["/bot/js/38.eb3cb6494b1262c13362.js","7da1c7af17d91b00795ed40cbc73b2ae"],["/bot/js/39.eb3cb6494b1262c13362.js","958e8f97fd8dc5766a8456cf680d20f8"],["/bot/js/4.eb3cb6494b1262c13362.js","54de8e9f42fec2341f755fdf3e73b450"],["/bot/js/40.eb3cb6494b1262c13362.js","c86fe46092401bb288d1d057764a82cb"],["/bot/js/404.eb3cb6494b1262c13362.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/bot/js/41.eb3cb6494b1262c13362.js","19e294b7dd39e20c35f336af10151564"],["/bot/js/42.eb3cb6494b1262c13362.js","bc54fb1f7bd31caaace783f2ae30a309"],["/bot/js/43.eb3cb6494b1262c13362.js","139fbae23efc9d8a5f4a3ec6aa4843fe"],["/bot/js/44.eb3cb6494b1262c13362.js","ab7340c14ad2d315fe3e55f13a5a2022"],["/bot/js/45.eb3cb6494b1262c13362.js","5e56e8315c2ee75c83e383ce99097cdc"],["/bot/js/46.eb3cb6494b1262c13362.js","686283c22d892d35f8229ce9a3b1d605"],["/bot/js/47.eb3cb6494b1262c13362.js","6fa76a22248b8e375b47736a1b6b52b9"],["/bot/js/48.eb3cb6494b1262c13362.js","71519e6fd21654643c8efc3520bff3b7"],["/bot/js/49.eb3cb6494b1262c13362.js","2022bad1fc8c5787b7a9e1d6b67e9e4f"],["/bot/js/5.eb3cb6494b1262c13362.js","54aa50d3c1e460e9decf7a2cdbc2b916"],["/bot/js/50.eb3cb6494b1262c13362.js","7b6163cd0cb7995d0e4e53a8405c0f07"],["/bot/js/51.eb3cb6494b1262c13362.js","fad063836ffb2dab2579ff6f7fcffa35"],["/bot/js/52.eb3cb6494b1262c13362.js","fa3cfdc69dca4105d653fe051842b22e"],["/bot/js/53.eb3cb6494b1262c13362.js","797bde8d3bf3882f6f062289cf78cb67"],["/bot/js/54.eb3cb6494b1262c13362.js","b13b101fc28a7a94c860e69356518323"],["/bot/js/55.eb3cb6494b1262c13362.js","c8d1c9a88eee730ac22596b9a4962637"],["/bot/js/56.eb3cb6494b1262c13362.js","6faa21a60aa3946d52e20dddffc7cd62"],["/bot/js/57.eb3cb6494b1262c13362.js","9e4232851ee344ebc04b0d19beb61c4c"],["/bot/js/58.eb3cb6494b1262c13362.js","167872383aef97c1efcb26301d6aed5b"],["/bot/js/59.eb3cb6494b1262c13362.js","492a7daafe10dbe9c0acefa6f1bfcd84"],["/bot/js/6.eb3cb6494b1262c13362.js","49783e965992ba09ed8dc2a6734e63aa"],["/bot/js/60.eb3cb6494b1262c13362.js","d7fad90fa7854d906c6f4973abcd52e8"],["/bot/js/61.eb3cb6494b1262c13362.js","e8552e1c71195a14bd9416a3a53836b3"],["/bot/js/62.eb3cb6494b1262c13362.js","0d628da521fc978a534b69dc87b83d8a"],["/bot/js/63.eb3cb6494b1262c13362.js","5a939c0c3c0326220d5ae35b1eb7efe3"],["/bot/js/64.eb3cb6494b1262c13362.js","67b238fcdc683defb61d197ebf120251"],["/bot/js/65.eb3cb6494b1262c13362.js","611d4a419362448fb99e0e2ac9e55538"],["/bot/js/66.eb3cb6494b1262c13362.js","b8db98454e3c3f73121307afbc3e1dde"],["/bot/js/67.eb3cb6494b1262c13362.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/bot/js/68.eb3cb6494b1262c13362.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/bot/js/69.eb3cb6494b1262c13362.js","6374691a6e4bae68affad0ad515e297a"],["/bot/js/7.eb3cb6494b1262c13362.js","1c730a5cac1343dc1e01e0906224159b"],["/bot/js/70.eb3cb6494b1262c13362.js","743fe34f40c191d1c64d708a6206c7f4"],["/bot/js/71.eb3cb6494b1262c13362.js","c0eb78bb5edf6a1580720ed7da1e908e"],["/bot/js/72.eb3cb6494b1262c13362.js","ea2108045af3a07caf950b4b9cb66076"],["/bot/js/73.eb3cb6494b1262c13362.js","a21c204b00da39ade09775d495d9b955"],["/bot/js/74.eb3cb6494b1262c13362.js","b9ff3b76f9708af740015cbe525c5074"],["/bot/js/75.eb3cb6494b1262c13362.js","fd359e4b21cfaf92d1167117432e3c03"],["/bot/js/76.eb3cb6494b1262c13362.js","f13b97b3afb7d2468d655f5fb7c362c1"],["/bot/js/77.eb3cb6494b1262c13362.js","ff2425d244e457e90e6ebcbdab86a971"],["/bot/js/78.eb3cb6494b1262c13362.js","acc0f36bd9deaa35ab3edf5f30564345"],["/bot/js/79.eb3cb6494b1262c13362.js","912fb3745516f2eb5677bced39e5204f"],["/bot/js/8.eb3cb6494b1262c13362.js","96fd5131cc1a1bfe7930b3632323cab0"],["/bot/js/80.eb3cb6494b1262c13362.js","5c283aab1cdf0d90ae64deed3cc491f2"],["/bot/js/81.eb3cb6494b1262c13362.js","a7d8227dc904d13a59878b4a939711f7"],["/bot/js/82.eb3cb6494b1262c13362.js","b4beb2316056e655784d83e0a50c0df4"],["/bot/js/83.eb3cb6494b1262c13362.js","bf285872371c565882ae9f4cee47b217"],["/bot/js/84.eb3cb6494b1262c13362.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/bot/js/85.eb3cb6494b1262c13362.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/bot/js/86.eb3cb6494b1262c13362.js","98e91ea6c0674a452955cacd84a6eaf8"],["/bot/js/87.eb3cb6494b1262c13362.js","a79bd94d22bc7eeb339ef092754d5666"],["/bot/js/88.eb3cb6494b1262c13362.js","b033a7729314ea2cfa83648cf43e79ce"],["/bot/js/89.eb3cb6494b1262c13362.js","4c3ac5463da3739906c686e84d052892"],["/bot/js/9.eb3cb6494b1262c13362.js","5ca48841c7356e5d5f6598ea5a968be6"],["/bot/js/90.eb3cb6494b1262c13362.js","495cbf6fd15cb56829ecb4d581131d92"],["/bot/js/91.eb3cb6494b1262c13362.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/bot/js/AccountSignupModal.eb3cb6494b1262c13362.js","c5a6691b27cd6ff29f964bd12403c069"],["/bot/js/account-info.eb3cb6494b1262c13362.js","97cc82b12bd0ddafdf15baab2a5f3459"],["/bot/js/bot/1-8fc62d.bot.js","2fbef911c3b0d44271aa77a618b52b7a"],["/bot/js/bot/10-fbb793.bot.js","aa5587fd1a2619289fe64955bbb9ce40"],["/bot/js/bot/11-484dfc.bot.js","0e63619b48f0a9971ad6c206522efa4b"],["/bot/js/bot/12-437a43.bot.js","e2d4e20c924ceeaea4fa0e686cbd8fc7"],["/bot/js/bot/13-5783d5.bot.js","8b6b3a0dc3f35f8ce152fdcdd734cb7f"],["/bot/js/bot/14-d0831b.bot.js","e8a58c206513a4e25b0489b7e3aa9ebe"],["/bot/js/bot/15-b38c74.bot.js","ca958472ad5a38996bc3688a3910b2e1"],["/bot/js/bot/16-59e34d.bot.js","edcb94a0777d51f1a0db057fa277a55b"],["/bot/js/bot/17-9125f2.bot.js","07a3fb0e4970a80eb845b4b5b9673ff1"],["/bot/js/bot/18-e4eacc.bot.js","6f37b02e8c89addc0af10347c031a1e4"],["/bot/js/bot/19-10d217.bot.js","6538b7958150ecb96ed37224833e0150"],["/bot/js/bot/2-782394.bot.js","27250135c9d8fb4e471610694ba65c5d"],["/bot/js/bot/20-54c581.bot.js","19bdd54e2bebcadcf14c4ed3e5db1f10"],["/bot/js/bot/21-52bb56.bot.js","92da4ce462c7ab7d043aa4909d31dd3b"],["/bot/js/bot/22-8b6bde.bot.js","d14fc6618eadfca4cdc3baa819d0185b"],["/bot/js/bot/23-2dc143.bot.js","826960ee7fa0e81ba2c4f3e423151552"],["/bot/js/bot/24-845531.bot.js","eb8316289f742f1cb5b7b4ea298c3398"],["/bot/js/bot/25-d2d399.bot.js","3564c156b0c870a77e524a882dbd9daf"],["/bot/js/bot/26-e12b42.bot.js","d4ac4c637abfa06e75caa3f1b2cbdf3f"],["/bot/js/bot/27-cf1e84.bot.js","777a6bf2794dcab28902f09dbc818f36"],["/bot/js/bot/28-7fa459.bot.js","6e558dc8a9ade6e1a868c0a73f423319"],["/bot/js/bot/29-40a848.bot.js","8bfb8c4149317f5779ae1b513127d8d5"],["/bot/js/bot/3-d843b9.bot.js","7e7a57f6a6868fc7780e6118f95d53e8"],["/bot/js/bot/30-27447b.bot.js","bb33c33b6a915bc1f790dde88e05df9a"],["/bot/js/bot/31-fd7ff5.bot.js","cbde768c2badba9f660444d33cbaa6e5"],["/bot/js/bot/32-c1fca4.bot.js","7673f2a7b411324ad46414d750d137e5"],["/bot/js/bot/33-8736eb.bot.js","5178ee8333098270a7a9b4a8d1d946dc"],["/bot/js/bot/34-a85685.bot.js","1a5e9ec562efe90a570f915c8c42fd58"],["/bot/js/bot/35-8caf71.bot.js","714c2ce5229672ab74ae74136174acea"],["/bot/js/bot/36-6303c2.bot.js","e7b031e28d6bc4d50e648edca4d41008"],["/bot/js/bot/37-56a8f3.bot.js","8dd21c33ade15ca7dd73c7a84502ed58"],["/bot/js/bot/38-e7ca70.bot.js","fade2841e32d15ac3fbe0fd23e9b01f9"],["/bot/js/bot/39-bc7f7c.bot.js","31c9b436b1d21c782639c181a32e2444"],["/bot/js/bot/4-49d039.bot.js","f9097433f9589fefa51cf24cc4a57cfa"],["/bot/js/bot/5-37b029.bot.js","e430f7d18c34f8ce151a97d7d3743376"],["/bot/js/bot/6-4f2957.bot.js","697a41490bc03d02972edb82267e0cb2"],["/bot/js/bot/7-c4b531.bot.js","b44529b7ea0bac58d665b139a5afd98c"],["/bot/js/bot/8-1f0b78.bot.js","65dce1ca46c29c17bc59981ebe9236c4"],["/bot/js/bot/9-696b42.bot.js","bad01774377840fa1d343bad36d66fdd"],["/bot/js/bot/bot-sprite.svg","9f50fd229ecd8ecc2819b16a387d6bd4"],["/bot/js/bot/bot.css","c01329d6f9d716b39be03306aa2cacc1"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.eb3cb6494b1262c13362.js","3db270ea90219a69fa3cc50d0d0dc691"],["/bot/js/modals.eb3cb6494b1262c13362.js","49c64274e35e541ef856995f02656aee"],["/bot/js/push-notification.eb3cb6494b1262c13362.js","0b12df6e5ba12101d9d791943e5994ca"],["/bot/js/settings-language.eb3cb6494b1262c13362.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/bot/js/settings-theme.eb3cb6494b1262c13362.js","6eaaf71400718836d70fd48a5888ed6e"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.eb3cb6494b1262c13362.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/bot/js/vendors~account-info~~e180cbd1.eb3cb6494b1262c13362.js","2800e04e2b8a216e0b28c02643d1378d"],["/bot/js/vendors~bot.eb3cb6494b1262c13362.js","92a8fa7adea49935aef97d4022ed7237"],["/bot/js/work-in-progress.eb3cb6494b1262c13362.js","694c057ec7838bb4b68034d289016484"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







