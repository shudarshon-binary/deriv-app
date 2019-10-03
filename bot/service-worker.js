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

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/1.css","fc8e6d53b724413ee58cb4fe296922aa"],["/bot/css/2.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/bot/css/AccountSignupModal.css","7c1bc2b57539f6ccefba0dee6b7ec7bf"],["/bot/css/app.css","fe3170ec5baf41be7c4dcdd883ca48d5"],["/bot/css/bot.css","3e6dda19c51f2862e46ae72a9499a1bc"],["/bot/css/modals.css","cef3c2b405b3933cab4cfb7b6cd2a46f"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","3ab100bcf98bb830272fd22b4089ad0b"],["/bot/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/index.html","f176bd10333e813a7a5981f889b98d46"],["/bot/js/0.25bce281a73f7ec41875.js","a1de7920cae68c967e99c5d72721954e"],["/bot/js/1.25bce281a73f7ec41875.js","4bbc2957e1253138b41a746d02540498"],["/bot/js/10.25bce281a73f7ec41875.js","27e01ad218d6ded0c796a736d61dd4ee"],["/bot/js/11.25bce281a73f7ec41875.js","6f091263a76e7af8b523f7ecbad45767"],["/bot/js/12.25bce281a73f7ec41875.js","23f8e9ee79dd61ee07efdcb37db48889"],["/bot/js/13.25bce281a73f7ec41875.js","75cf617ef3904c0853278fac8c283620"],["/bot/js/14.25bce281a73f7ec41875.js","2200dc243b465583b6083e4ac975c4cc"],["/bot/js/15.25bce281a73f7ec41875.js","1721f6a6321dee1fd94e4a17284ab023"],["/bot/js/16.25bce281a73f7ec41875.js","6f2a40949a04790bc9954ebdaf41e473"],["/bot/js/17.25bce281a73f7ec41875.js","a768f9373ad8acf0f3fbfa7a9f894957"],["/bot/js/18.25bce281a73f7ec41875.js","f9fcf7ae0454a19bd44e21538620079a"],["/bot/js/19.25bce281a73f7ec41875.js","5af2fbdecc6c1d39d996e2e6f6d037e2"],["/bot/js/2.25bce281a73f7ec41875.js","813d8b96c7757933842a2855f3195daa"],["/bot/js/20.25bce281a73f7ec41875.js","e501138593c88b8835e1eb832fbeb77e"],["/bot/js/21.25bce281a73f7ec41875.js","3002a6077fb094cc367071f7e2f948bd"],["/bot/js/22.25bce281a73f7ec41875.js","8932b2f39c11dc912080890e17983650"],["/bot/js/23.25bce281a73f7ec41875.js","f67ab30ea26d51348aa3960b546be6b4"],["/bot/js/24.25bce281a73f7ec41875.js","64d152bd7285cc3d83e3f97e9428d697"],["/bot/js/25.25bce281a73f7ec41875.js","866d64c2edd0a282040c1ad14842efaa"],["/bot/js/26.25bce281a73f7ec41875.js","c54d87890467b06876dbfe924e6f5647"],["/bot/js/27.25bce281a73f7ec41875.js","f1c253fd33e6bdeb104f270452b06f1b"],["/bot/js/28.25bce281a73f7ec41875.js","2c17d7076a2460814b62f83f79a36c9a"],["/bot/js/29.25bce281a73f7ec41875.js","f9f3a5b4f14a7bf4543bee3906c0745a"],["/bot/js/3.25bce281a73f7ec41875.js","4ccca261846f089ddd83b90c480c9478"],["/bot/js/30.25bce281a73f7ec41875.js","89a3552eb4ebbd31d07b7aa1ddb7cab1"],["/bot/js/31.25bce281a73f7ec41875.js","d50845a85e8ca3ff6ab8a0274347e02e"],["/bot/js/32.25bce281a73f7ec41875.js","3f3bb87937b931d303f69195fa87756c"],["/bot/js/33.25bce281a73f7ec41875.js","716577d96fb4dd97b46445e8f30f1573"],["/bot/js/34.25bce281a73f7ec41875.js","f10ad31de7c9636ef882e508ce116352"],["/bot/js/35.25bce281a73f7ec41875.js","49c0e21dec6172ffa374b289d5ff2624"],["/bot/js/36.25bce281a73f7ec41875.js","a2f3e6574675e61a301ee2bab057d642"],["/bot/js/37.25bce281a73f7ec41875.js","fa133d0dc10605d986f02dcb2566d4f2"],["/bot/js/38.25bce281a73f7ec41875.js","bec1885a9fedaa36da0fef0233cb4238"],["/bot/js/39.25bce281a73f7ec41875.js","15424a72da4d235fada0fc7285176535"],["/bot/js/4.25bce281a73f7ec41875.js","f98652dc49d8cc7c43850fefd764d4f8"],["/bot/js/40.25bce281a73f7ec41875.js","e3eccfeb1036a91646c3970ddfeb4921"],["/bot/js/404.25bce281a73f7ec41875.js","a2d76f7ddc82569d4a89da316448e610"],["/bot/js/41.25bce281a73f7ec41875.js","76d7073af566dc5316c2eeeace005ee9"],["/bot/js/42.25bce281a73f7ec41875.js","8eb7fd8acf968d3eccda62de01197196"],["/bot/js/43.25bce281a73f7ec41875.js","a88d41370224d90fa18e1f79d4f3410d"],["/bot/js/44.25bce281a73f7ec41875.js","15a3e8d408b4e036b4aa5d489451f82d"],["/bot/js/45.25bce281a73f7ec41875.js","4b4484ebc8ba2b701d1c792b41922107"],["/bot/js/46.25bce281a73f7ec41875.js","37b0a3a8bc3521ebb7a551cfdb9db097"],["/bot/js/47.25bce281a73f7ec41875.js","ea4d195cb5f8abbd2571e396a6f351bd"],["/bot/js/48.25bce281a73f7ec41875.js","a7e1f7d30be479e5dcf563b19766318e"],["/bot/js/49.25bce281a73f7ec41875.js","2a80689ccd25994369f72d103d4f2b08"],["/bot/js/5.25bce281a73f7ec41875.js","034ff0f3e8c026d33844412f6d915058"],["/bot/js/50.25bce281a73f7ec41875.js","846198d0cfca94b1fcfe9d0561f480aa"],["/bot/js/51.25bce281a73f7ec41875.js","7a346f671f48dbbec85bd90a84c89146"],["/bot/js/52.25bce281a73f7ec41875.js","d680adb6651ddcc993bb353e7ace7b25"],["/bot/js/53.25bce281a73f7ec41875.js","a1ab95d4933910579b498ce509fd9f8c"],["/bot/js/54.25bce281a73f7ec41875.js","19954d0bc4809e2a3c026fc72e57f8e9"],["/bot/js/55.25bce281a73f7ec41875.js","db31b1d81f3bd8d13a757eae9f707d08"],["/bot/js/56.25bce281a73f7ec41875.js","d92e854d66a9c7b98eb501f7b8532ffe"],["/bot/js/57.25bce281a73f7ec41875.js","defcac970e2ad44bc9303303929e5eb4"],["/bot/js/58.25bce281a73f7ec41875.js","4047eb5227db415997fa94b77096be4e"],["/bot/js/59.25bce281a73f7ec41875.js","03e01bdf86946f5a1c8cb03b487c0aae"],["/bot/js/6.25bce281a73f7ec41875.js","74eabdb73513a5cdb82b2b1e4ef10056"],["/bot/js/60.25bce281a73f7ec41875.js","51705554ff1720fac0e5bee7da70c8d9"],["/bot/js/61.25bce281a73f7ec41875.js","6b02d37ee027d1ed9fcb4ee209f99855"],["/bot/js/62.25bce281a73f7ec41875.js","45fa27ea73b44f6434cbf46001e62009"],["/bot/js/63.25bce281a73f7ec41875.js","b4808e5c27970429aee303cc8acf7ad1"],["/bot/js/64.25bce281a73f7ec41875.js","2db222359b62b4ac6ffa1888b4e5e686"],["/bot/js/65.25bce281a73f7ec41875.js","734cc3377645e0675a8a4fb49e23126f"],["/bot/js/66.25bce281a73f7ec41875.js","73ce91ce52b2ea1c4328be025091e84a"],["/bot/js/67.25bce281a73f7ec41875.js","be27ec67dbc71b16d4b3417026ba6aac"],["/bot/js/68.25bce281a73f7ec41875.js","a12b6efb4f3c82b0581c3a4274d9aa60"],["/bot/js/69.25bce281a73f7ec41875.js","194ff9b08f106de0d2b0db3a916e4145"],["/bot/js/7.25bce281a73f7ec41875.js","0a381ef04539354213722c026f321c62"],["/bot/js/70.25bce281a73f7ec41875.js","bbaf299766b1016856cebc1bc3d933e6"],["/bot/js/71.25bce281a73f7ec41875.js","6b358d6c76fa4ff07a599af42e0158f7"],["/bot/js/72.25bce281a73f7ec41875.js","0315cf151b2d839f438a27b91922772b"],["/bot/js/73.25bce281a73f7ec41875.js","6e6673b19e95e2e21474dff06e71b82e"],["/bot/js/74.25bce281a73f7ec41875.js","3e849b157b67efc4a3a61fe601038747"],["/bot/js/75.25bce281a73f7ec41875.js","5155a692033d95e9f625fb2a1c3578f8"],["/bot/js/76.25bce281a73f7ec41875.js","4fd6da70c9c9c2e87fbae2e8a5af1405"],["/bot/js/77.25bce281a73f7ec41875.js","5da83a6e18012628e0603d6b725bae86"],["/bot/js/78.25bce281a73f7ec41875.js","b41e57d82dd1594d84301eada7f788bb"],["/bot/js/79.25bce281a73f7ec41875.js","c1c59f9b3dcd4e92bc53f5cdc7bdeb7d"],["/bot/js/8.25bce281a73f7ec41875.js","23b4ba2c3f317ea74b9e6bdfcff76c20"],["/bot/js/80.25bce281a73f7ec41875.js","ccb37584c7fe103049100704ac674088"],["/bot/js/81.25bce281a73f7ec41875.js","cd262b6813d3a714808455e823b6779f"],["/bot/js/82.25bce281a73f7ec41875.js","a90a0ac927621775de62a7639232aa02"],["/bot/js/83.25bce281a73f7ec41875.js","2b047118295a6d8ed78c76c3f58a8ce2"],["/bot/js/84.25bce281a73f7ec41875.js","0cfaa17a3fdc6903a2eb6d58957e9f09"],["/bot/js/85.25bce281a73f7ec41875.js","f45aa49665b37b17b9d0785b94fa4cc0"],["/bot/js/86.25bce281a73f7ec41875.js","965b430cfeb90ebb6f2fd26e677387b5"],["/bot/js/87.25bce281a73f7ec41875.js","777e8e9d26ef8165a9892de7b08ab3bb"],["/bot/js/88.25bce281a73f7ec41875.js","66ac3eb27e8d92911f2fe629c0d14b8f"],["/bot/js/89.25bce281a73f7ec41875.js","f94822826d136cc354635f838f19dcaa"],["/bot/js/9.25bce281a73f7ec41875.js","550c0862f687e7a2d448c056e56ecde8"],["/bot/js/90.25bce281a73f7ec41875.js","2314d9e25a3ae9e0b5fbf7da510dae0e"],["/bot/js/AccountSignupModal.25bce281a73f7ec41875.js","b16442a196605abf9492d891a35cf060"],["/bot/js/account-info.25bce281a73f7ec41875.js","1b6d0edeb803db980474d02acc02a3a8"],["/bot/js/bot/1-ab73ee.bot.js","9cd1c4d64f5264555402afe80bd2f2ca"],["/bot/js/bot/10-c815a9.bot.js","f8861bc059dbd11aaadb1aeebc6519f1"],["/bot/js/bot/11-1f015c.bot.js","f31dbedc141721361df15dac915e9fdf"],["/bot/js/bot/12-14a80b.bot.js","300d9c260e051585b9b93db7353e03c5"],["/bot/js/bot/13-348878.bot.js","8ebeb6b95aed1edb1499c778a1e91177"],["/bot/js/bot/14-e29575.bot.js","38b8271a655c5d12afed6477b0e11249"],["/bot/js/bot/15-aa047e.bot.js","c8e7db7bc951e8c72a46017bb434c63a"],["/bot/js/bot/16-88f215.bot.js","ed8ed142eed6ae7a43a650e991d3a984"],["/bot/js/bot/17-618122.bot.js","a68598cc06a8127b7f14d1f34e3e79d8"],["/bot/js/bot/18-dd0e50.bot.js","badebd4449171d5c12b340276e519618"],["/bot/js/bot/19-e17115.bot.js","c1ea3e1104a266482383270cef8a2732"],["/bot/js/bot/2-514edb.bot.js","6a32601ced32913636418274b31ec926"],["/bot/js/bot/20-b42bcc.bot.js","877d94ba2d281ab4ef454037e1283c10"],["/bot/js/bot/21-8a39fb.bot.js","057c9417ba1bef3883bccb86199edf62"],["/bot/js/bot/22-8bd092.bot.js","f4faaabc206a84f2f57a4732c228999c"],["/bot/js/bot/23-732426.bot.js","4a6866d95aa3996e2e34a8d01bea2459"],["/bot/js/bot/24-532857.bot.js","a521aa25863b3a46140532fad835618b"],["/bot/js/bot/25-801f57.bot.js","6c829138e3bdd86682606617a10f1a7d"],["/bot/js/bot/26-896e3d.bot.js","a8be4ce124c50e65e3b4dfbc3ebffe06"],["/bot/js/bot/27-a88536.bot.js","94a031b5f1c3288c908211f53ec1248a"],["/bot/js/bot/28-ae9c16.bot.js","be307fbe209954b15af9c754bc5a0699"],["/bot/js/bot/29-ecc80f.bot.js","b467d5467049638dbc2dee7a8b0cf6f0"],["/bot/js/bot/3-2aef0c.bot.js","8dba60814e478a4198655000bcc0d78d"],["/bot/js/bot/30-8015b0.bot.js","f78fc159374fe88a773367db657d3fe6"],["/bot/js/bot/31-99ef82.bot.js","4c4b665c8eeb7ae6d51f1257af29b8aa"],["/bot/js/bot/32-6be0db.bot.js","df1e3500725b55e17d5f9c32e97856a9"],["/bot/js/bot/33-818f37.bot.js","b6e07c2810b2d864277ba25716a3026a"],["/bot/js/bot/34-b12dab.bot.js","fffcecfe8f2f21086cc1246fd9e0419a"],["/bot/js/bot/35-55a992.bot.js","40f19ea65c9a0da629cb27ac45eda337"],["/bot/js/bot/36-f03422.bot.js","b0d627f3eab7665c693da1b1629dbc6c"],["/bot/js/bot/37-3cafb2.bot.js","894c3004ead51ab2dc2c47f7b40f39db"],["/bot/js/bot/38-296802.bot.js","125d1eb3988546f15fefc93f78c2f854"],["/bot/js/bot/39-732617.bot.js","c9a0a64e94b89d443728546865e2fc1d"],["/bot/js/bot/4-00f6d9.bot.js","cf688461ca05407ffd73117a3f82072c"],["/bot/js/bot/5-2915cd.bot.js","24e21b1d4f185c9810eb2439330281c0"],["/bot/js/bot/6-3c694d.bot.js","31af2a5a73b26e86860f78b894706af5"],["/bot/js/bot/7-29c618.bot.js","0319311fda5c25f06ff4c3ff198afddb"],["/bot/js/bot/8-a2fea1.bot.js","54c7c43eae42079c8cd911defb754cfb"],["/bot/js/bot/9-039719.bot.js","ef1d4eff640a3aafac88d199830c0bd4"],["/bot/js/bot/bot-sprite.svg","9f50fd229ecd8ecc2819b16a387d6bd4"],["/bot/js/bot/bot.css","3e6dda19c51f2862e46ae72a9499a1bc"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.25bce281a73f7ec41875.js","c0cc8338554a258e63b971ed03ce9b10"],["/bot/js/modals.25bce281a73f7ec41875.js","7f6123207413291356e67fe277da26f1"],["/bot/js/push-notification.25bce281a73f7ec41875.js","f872ef75a83d414bd057c79c178c4e17"],["/bot/js/settings-language.25bce281a73f7ec41875.js","d2a6cb5ec7310b10747e7ef5626ee60c"],["/bot/js/settings-theme.25bce281a73f7ec41875.js","acffacb714176d1063007de83e798541"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.25bce281a73f7ec41875.js","fbb47ca1210877c38572eba43ae92555"],["/bot/js/vendors~account-info~~e180cbd1.25bce281a73f7ec41875.js","fc136db6d75418d3d3e123e550e24f0a"],["/bot/js/vendors~bot.25bce281a73f7ec41875.js","76a4439468a4c9756d2daa002323aad8"],["/bot/js/vendors~main.25bce281a73f7ec41875.js","a09fc47524b499e9f73ac79058893df3"],["/bot/js/work-in-progress.25bce281a73f7ec41875.js","84c201c29e8ba9340a853441ff377214"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







