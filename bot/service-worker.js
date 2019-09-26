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

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/1.css","286a5980829a1b0905fd22aca65433b6"],["/bot/css/2.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/bot/css/AccountSignupModal.css","3e765bd69414800a0815d26d45680daf"],["/bot/css/app.css","f79f822860f0e42b84d98e9741397b86"],["/bot/css/bot.css","a5381967ecfe1952fd74abc59bc5d67f"],["/bot/css/modals.css","62e7597ca1172b727f92bf4019a051f6"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","fc25e385cdd846cce00c0342bebb38f8"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","34db956e1de913e626a63b0c370878e1"],["/bot/js/0.0387a497780f89c6f20d.js","9fd5bf68b9c78498cdae742d80c66063"],["/bot/js/1.0387a497780f89c6f20d.js","22e84ea178b01a3ac5397e1f6cbfeedb"],["/bot/js/10.0387a497780f89c6f20d.js","4cb95fbea7ce4fa8f1b4453bc2b7c566"],["/bot/js/11.0387a497780f89c6f20d.js","a65d08eaf44097a1222ad2285c887be4"],["/bot/js/12.0387a497780f89c6f20d.js","53b6fd2010892aab52432cdaf71477f0"],["/bot/js/13.0387a497780f89c6f20d.js","a3f95b9dfcc4fbc455d3dda4f481b913"],["/bot/js/14.0387a497780f89c6f20d.js","8455b4958f746e066338fe990b9f55d8"],["/bot/js/15.0387a497780f89c6f20d.js","ca596c1753c83d723e0862a6aa613ae9"],["/bot/js/16.0387a497780f89c6f20d.js","3670a2ab815153046413785db542f66f"],["/bot/js/17.0387a497780f89c6f20d.js","55b352785df57f6920b58457e0c65fbb"],["/bot/js/18.0387a497780f89c6f20d.js","3460a5b98de4011f05e32c69a11f591d"],["/bot/js/19.0387a497780f89c6f20d.js","b961e6156506a5d9855aa9330fabd646"],["/bot/js/2.0387a497780f89c6f20d.js","085966d67556d95f965c7be61c0cd71d"],["/bot/js/20.0387a497780f89c6f20d.js","2e802a83c94fa68210c687f0ec8792ca"],["/bot/js/21.0387a497780f89c6f20d.js","50f333c1003b55654826079476b33679"],["/bot/js/22.0387a497780f89c6f20d.js","89afd584e72ea4cf1701dec67be3e594"],["/bot/js/23.0387a497780f89c6f20d.js","6b0bdd6160f3dc51d59cdbc2ca6836fe"],["/bot/js/24.0387a497780f89c6f20d.js","9fb0044032632da3662b4eeb2b74e2ba"],["/bot/js/25.0387a497780f89c6f20d.js","ca094a90d13ddb461ce4942006b90521"],["/bot/js/26.0387a497780f89c6f20d.js","1af41f5e1b79f543a008f86331218ffd"],["/bot/js/27.0387a497780f89c6f20d.js","82a538fc0008e4bf000abc096523fdc9"],["/bot/js/28.0387a497780f89c6f20d.js","821d1816cba51b09da74d71a2ccacfc0"],["/bot/js/29.0387a497780f89c6f20d.js","ccf732048b41fe574128548816181234"],["/bot/js/3.0387a497780f89c6f20d.js","74e438744d333afecc122e9626f00e33"],["/bot/js/30.0387a497780f89c6f20d.js","f9556618374584d01dc628e0664657b1"],["/bot/js/31.0387a497780f89c6f20d.js","40e60d90ce2b5f257f0c501811619004"],["/bot/js/32.0387a497780f89c6f20d.js","a14dd71b97ff18cdc2bc947f4a76dea2"],["/bot/js/33.0387a497780f89c6f20d.js","d96faa4846305ad3bc6a06943f03c9bb"],["/bot/js/34.0387a497780f89c6f20d.js","0b15b4d574b8e92c489a1bc8fa3238b6"],["/bot/js/35.0387a497780f89c6f20d.js","50cc3b0257640c103469dbb1f2331bde"],["/bot/js/36.0387a497780f89c6f20d.js","080694932bf7e54d0c1f2718259e928d"],["/bot/js/37.0387a497780f89c6f20d.js","4cb56c5922b89d0a555a50c08c56056c"],["/bot/js/38.0387a497780f89c6f20d.js","b0b1d82f0b84b1fbfc19beace1ad73cf"],["/bot/js/39.0387a497780f89c6f20d.js","fea8e416e8f91de3e17e6cb8e70e9248"],["/bot/js/4.0387a497780f89c6f20d.js","017e6d7dd46ebcf0d65cb20b20691e1f"],["/bot/js/40.0387a497780f89c6f20d.js","e133058cc67edac1f1ca744e291d7e5e"],["/bot/js/404.0387a497780f89c6f20d.js","649afe95747fd605a9f46f11ce5d1e9b"],["/bot/js/41.0387a497780f89c6f20d.js","2079296885e049b8ce35b25e9c5467fa"],["/bot/js/42.0387a497780f89c6f20d.js","688cf8a6cb56bfc6c73a5575798d1f3b"],["/bot/js/43.0387a497780f89c6f20d.js","150b0567bbee012efddd2ba87f8cc2fe"],["/bot/js/44.0387a497780f89c6f20d.js","375b086b4e19b263bb10824cd86c2bf6"],["/bot/js/45.0387a497780f89c6f20d.js","9129ef16138c1e19610f317b7c6b8408"],["/bot/js/46.0387a497780f89c6f20d.js","3c2d0f5db18b9805000b152d8ef4859c"],["/bot/js/47.0387a497780f89c6f20d.js","35bc2d4c474197691b419388555a44a6"],["/bot/js/48.0387a497780f89c6f20d.js","66c42d53ca284d16450efd06faa5f3a8"],["/bot/js/49.0387a497780f89c6f20d.js","ab8977f61586813daf1e2334f0c121e1"],["/bot/js/5.0387a497780f89c6f20d.js","4e1c8127f64baf579d00fedf08c90772"],["/bot/js/50.0387a497780f89c6f20d.js","0c617278043f2f7e3841cd53676122c4"],["/bot/js/51.0387a497780f89c6f20d.js","960f72f0ed92d18102d936bd929b10c2"],["/bot/js/52.0387a497780f89c6f20d.js","78c78ca58a2433b1e9f909564bcd8d12"],["/bot/js/53.0387a497780f89c6f20d.js","ac0cd743f939c0ef4cf42774cb6f2f99"],["/bot/js/54.0387a497780f89c6f20d.js","4fa43a711d43522d5eae808daf6990b1"],["/bot/js/55.0387a497780f89c6f20d.js","43815b4c72f6717085bb9be0dab20fac"],["/bot/js/56.0387a497780f89c6f20d.js","abfeca60a54331a1e936202e51c29ed2"],["/bot/js/57.0387a497780f89c6f20d.js","5f63212695bd284b43beaaad508d9475"],["/bot/js/58.0387a497780f89c6f20d.js","e92067062b058455ab312f376a043400"],["/bot/js/59.0387a497780f89c6f20d.js","cb1f8dd6691596dc7eeb5927d09c9788"],["/bot/js/6.0387a497780f89c6f20d.js","225f79164fe33588fa65690b5810d425"],["/bot/js/60.0387a497780f89c6f20d.js","a7ee638b2a7dc5234b4aab905acbe3df"],["/bot/js/61.0387a497780f89c6f20d.js","a6e4f6880d4ddd0ae0af9327d04e451c"],["/bot/js/62.0387a497780f89c6f20d.js","46a9d9c19a141ef8f7c2589499cca90c"],["/bot/js/63.0387a497780f89c6f20d.js","2211dbb98e5b77b3b2a5d0d959bfab6d"],["/bot/js/64.0387a497780f89c6f20d.js","dbf48c8623d9ae732dae137502f21fbc"],["/bot/js/65.0387a497780f89c6f20d.js","5dd70c64e4a5ca917e6fd2e6030bb4c0"],["/bot/js/66.0387a497780f89c6f20d.js","ca182504a2a6d571d635ff3205b0c521"],["/bot/js/67.0387a497780f89c6f20d.js","35dae76f21c891b27d151a2e05c66d4e"],["/bot/js/68.0387a497780f89c6f20d.js","aac0b258238a1edd3436e7b7ff30ee9b"],["/bot/js/69.0387a497780f89c6f20d.js","0143a74057b1f383b144a83cd2f98225"],["/bot/js/7.0387a497780f89c6f20d.js","e2a3efceeb5d15b931997beae74da18e"],["/bot/js/70.0387a497780f89c6f20d.js","44800f08e142ceb9a6e2290c09e096f1"],["/bot/js/71.0387a497780f89c6f20d.js","64e0fe32cac9df6a5ad462395a9904b3"],["/bot/js/72.0387a497780f89c6f20d.js","9b4963ff85dd751300d34205b67be2cb"],["/bot/js/73.0387a497780f89c6f20d.js","f741480af89ed3fc78253ec2ff87771a"],["/bot/js/74.0387a497780f89c6f20d.js","fa0006be0fee03fb34704f0b7d2308b8"],["/bot/js/75.0387a497780f89c6f20d.js","70ce53cc381dec1b7c4a0b557eeb0144"],["/bot/js/76.0387a497780f89c6f20d.js","7b363f87258858ffd63c851b8ad6395c"],["/bot/js/77.0387a497780f89c6f20d.js","ca7628f139f8cbaa7921b964d1532c7f"],["/bot/js/78.0387a497780f89c6f20d.js","91415d62df8351145465104528f1a645"],["/bot/js/79.0387a497780f89c6f20d.js","3b8ffa7cc3c7dace6ffa1de85bd52f91"],["/bot/js/8.0387a497780f89c6f20d.js","00ec5fd580ab3086e5fdf5f853921f51"],["/bot/js/80.0387a497780f89c6f20d.js","407ad8e23aa43a0375797178bee1dc2a"],["/bot/js/81.0387a497780f89c6f20d.js","dcde2bf6c22271bb40d99353237358d2"],["/bot/js/82.0387a497780f89c6f20d.js","ec464c8a1453d15d20573a9aad5ba255"],["/bot/js/83.0387a497780f89c6f20d.js","f3d79a8e1a0c9d058a266559cc96ca20"],["/bot/js/84.0387a497780f89c6f20d.js","7b4e0c4c4bc9d01a9955e555e115591c"],["/bot/js/85.0387a497780f89c6f20d.js","6610b5cffeee1dfd0d1a7988e3408b3b"],["/bot/js/86.0387a497780f89c6f20d.js","e51e9962033940913a519299a47a033a"],["/bot/js/87.0387a497780f89c6f20d.js","38197d7378776bfcf615bcb70544e767"],["/bot/js/88.0387a497780f89c6f20d.js","05a33c62a415231bf7edcbf4ff2d7e2e"],["/bot/js/89.0387a497780f89c6f20d.js","ad9423b45add6e62a6f74cad329df0eb"],["/bot/js/9.0387a497780f89c6f20d.js","aa141630dd53b0a3b0e9f40be86fd662"],["/bot/js/90.0387a497780f89c6f20d.js","151ce858e4fa0704fb015ea8aa99abcf"],["/bot/js/AccountSignupModal.0387a497780f89c6f20d.js","e09a9a5a306d95b75887e5dcdfa05be5"],["/bot/js/account-info.0387a497780f89c6f20d.js","afdb9121135fedd0777ae5d29cd34609"],["/bot/js/bot.0387a497780f89c6f20d.js","7cb42f49c5814aaf7ff346b7bdc038bb"],["/bot/js/bot/1-7c6463.bot.js","5ce78936c0ada27d41a49293233e6532"],["/bot/js/bot/10-8a6212.bot.js","fd8bf62ff415371d65bb0e8982b9a319"],["/bot/js/bot/11-c5a12a.bot.js","d2c77659febea6f700ac6a48fe6c5aa3"],["/bot/js/bot/12-a01e2a.bot.js","b5c5925ab884f0afb70878062c0d905d"],["/bot/js/bot/13-4d7cbf.bot.js","2ef936e1c832971765e656649a900333"],["/bot/js/bot/14-9c692e.bot.js","582d3d35b0c60747c535d24778223b3c"],["/bot/js/bot/15-040182.bot.js","7d201c87f16993af267bd21d10634181"],["/bot/js/bot/16-aa58e5.bot.js","d526d2de0b91a79b6c4374053c7ebd7f"],["/bot/js/bot/17-6e1d8b.bot.js","19cc180247421aefd2e277362a3903b2"],["/bot/js/bot/18-a28f3c.bot.js","1da5917a4224c7b5cfdb7bca0c64a90b"],["/bot/js/bot/19-12fab2.bot.js","25294cda93e8278adb1c7886fdf9419e"],["/bot/js/bot/2-b24880.bot.js","3a8c6ecac90cfe831cf9ae8eea78db38"],["/bot/js/bot/20-edea6e.bot.js","e9056c367842c9ccad1ce0c8f1fccc56"],["/bot/js/bot/21-3ac231.bot.js","90955a46828b6bfaefee5f8eae249722"],["/bot/js/bot/22-112db0.bot.js","cf44d05d6a1513fbeb3e9e73b8c7b721"],["/bot/js/bot/23-e7334e.bot.js","321efbaad38c506f29b648568ce098ca"],["/bot/js/bot/24-91e3f7.bot.js","171695095292bdc525ed26d84e63cad8"],["/bot/js/bot/25-70eb48.bot.js","dd99faaad34fc0e91d61fa456f240b99"],["/bot/js/bot/26-84eecb.bot.js","afd561dc36157bb8db96ab8ace8655f4"],["/bot/js/bot/27-b3713c.bot.js","449e0adf6a4d0a527f1422108d69f0e5"],["/bot/js/bot/28-446555.bot.js","3ddc99a5643e2cabbf4f7868b41d6c9e"],["/bot/js/bot/29-409962.bot.js","0901279bb407e9004934bd6a1f281583"],["/bot/js/bot/3-febf87.bot.js","43808a275a87460b7a05acae9b5c2bd9"],["/bot/js/bot/30-8dbdf2.bot.js","e67f0b512f6546e1d15eae5f4fd54c2d"],["/bot/js/bot/31-97a68b.bot.js","4a193903af1a62481cee8592bad5d226"],["/bot/js/bot/32-285088.bot.js","01ed7f25f8e820f62615fcec239d616c"],["/bot/js/bot/33-40b433.bot.js","3f9918132e3186e001b714ff60e53c33"],["/bot/js/bot/34-4f772a.bot.js","2c1dee10cfe0752042900691677a8eba"],["/bot/js/bot/35-defe3c.bot.js","2307e3cf437dde5f87ac777d84ec2623"],["/bot/js/bot/36-9ea2ab.bot.js","3aa958f03fe5c42f3b1ebcedcd5b144a"],["/bot/js/bot/4-38b52e.bot.js","682d3fb808029461dc592c5ee00f2115"],["/bot/js/bot/5-4b29e8.bot.js","ad6534f56269229117dc68a228d94fff"],["/bot/js/bot/6-2965bb.bot.js","8a8e1c06e844ff821afe066cea80413c"],["/bot/js/bot/7-badbdc.bot.js","7f3a57423758ea971339c6ed2ddea265"],["/bot/js/bot/8-07f4ea.bot.js","25b3fba5f46a4bafe08fda7bc6c90ab6"],["/bot/js/bot/9-5744c9.bot.js","d68eae3f5bdc0e03647af4771e968872"],["/bot/js/bot/bot-sprite.svg","d74e67d2d35192d3bd86659b8e34ec1d"],["/bot/js/bot/bot.css","a5381967ecfe1952fd74abc59bc5d67f"],["/bot/js/bot/bot.js","c69e06b83aa19668c9936dae1eba6438"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","f6065ac8488edff01d55626000f2c4ad"],["/bot/js/bot/xml/toolbox.xml","f6820a177ed66ff54410d53e958f6ee1"],["/bot/js/main.0387a497780f89c6f20d.js","768b9241410f91d531d490132bf77aa5"],["/bot/js/modals.0387a497780f89c6f20d.js","f815a6e731c6a34806317f46970ea3de"],["/bot/js/push-notification.0387a497780f89c6f20d.js","943d55e6fc6785826b843a0b72ab2360"],["/bot/js/settings-language.0387a497780f89c6f20d.js","7d43173c3a3b750e964b1372056e1dc1"],["/bot/js/settings-theme.0387a497780f89c6f20d.js","f9d339f39332ab312b8ee94f47080d19"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.0387a497780f89c6f20d.js","69510d3c89bf47e0ea98ae1ad9c34cbd"],["/bot/js/vendors~account-info~~e180cbd1.0387a497780f89c6f20d.js","3e45d5df8409fd6d39e97846d7ff0b22"],["/bot/js/vendors~main.0387a497780f89c6f20d.js","c0f43ab32e2e695d6f5429322e5745d6"],["/bot/js/work-in-progress.0387a497780f89c6f20d.js","b33afa1c6c1bfbb83a10c14be05172be"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







