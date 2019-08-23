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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","c90a510a87be14bb0c25de73992a5e49"],["/css/app.css","c34882250b0d7870a955a76bdefcadbe"],["/css/digits.css","9afc65cccb8dd4e6aa46a67a26eefe1f"],["/css/modals.css","210f3d3b757d93e0627c1deaa39b297f"],["/css/notification-messages.css","d9e3e192f9a1f2ca1202e4ee36b4c7c8"],["/css/reports.css","90fd8e16f26c915d042d521800205ac0"],["/css/screen-small.css","9a212cdb8eff1957817de608257007b5"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","c3aa4d73ebf2bac685aa45a097c34309"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","a0cd328976a2b9476af06f3b0d73d387"],["/js/0.54d544fb8b96833e3e23.js","ea6cb521b6a2dddeeaa3dddeef45253e"],["/js/1.54d544fb8b96833e3e23.js","8ec33b50c229623fdd72eeec96f5242d"],["/js/10.54d544fb8b96833e3e23.js","e0c531cf81be3bc115035bfc7ca2533f"],["/js/11.54d544fb8b96833e3e23.js","e6e1b2346483a411d1d724c6ffeccb95"],["/js/12.54d544fb8b96833e3e23.js","2a86c32c9f531660969308c013d17ad2"],["/js/13.54d544fb8b96833e3e23.js","b95f261083fca2b9cf75c6bd5a0533b0"],["/js/14.54d544fb8b96833e3e23.js","a6dc6c64c716fd083689b528efa1d008"],["/js/15.54d544fb8b96833e3e23.js","ee5ceaaff0c1aaa04805d59589be9f87"],["/js/16.54d544fb8b96833e3e23.js","1db61ac584820c8503f4a44887cf4542"],["/js/17.54d544fb8b96833e3e23.js","3732c00189aa9bca50bed45cf4367da1"],["/js/18.54d544fb8b96833e3e23.js","815c9fbeaa422164db6ccb5490cd9542"],["/js/19.54d544fb8b96833e3e23.js","624fd8e3261dd974f547a3663a689c54"],["/js/2.54d544fb8b96833e3e23.js","a1923ab0a974ec38666b2e5078849238"],["/js/20.54d544fb8b96833e3e23.js","668da1eaca7265e238df726e60f5cf11"],["/js/21.54d544fb8b96833e3e23.js","52c4a54b00c000da29d3aa02d47baa34"],["/js/22.54d544fb8b96833e3e23.js","cb1d5c3980a620411ad3fe7ca071e816"],["/js/23.54d544fb8b96833e3e23.js","6b6b96faeb183f980728705ac62aa71e"],["/js/24.54d544fb8b96833e3e23.js","4babfefedda113daf0583b6dccf5528b"],["/js/25.54d544fb8b96833e3e23.js","9e379f8e644ed85f2f2310dfe61d8bd2"],["/js/26.54d544fb8b96833e3e23.js","1ed016c3b23c8019cefb6ff17d84bfa3"],["/js/27.54d544fb8b96833e3e23.js","8f2ba3036acf194ea07288a18a0c9e06"],["/js/28.54d544fb8b96833e3e23.js","3d914eacee2e5c2379dc35a1454573cc"],["/js/29.54d544fb8b96833e3e23.js","de251184809684b0512c6b4c1dad2d7f"],["/js/3.54d544fb8b96833e3e23.js","759d3cd2394edc9aec7cb1d81661f940"],["/js/30.54d544fb8b96833e3e23.js","db7b963e828deaa7fbecd96eda548a13"],["/js/31.54d544fb8b96833e3e23.js","7ff29f341281bcb7c81b8c9e84d6a0bb"],["/js/32.54d544fb8b96833e3e23.js","8c6598f585e75df83221400885509cf6"],["/js/33.54d544fb8b96833e3e23.js","d0e073e821e8b026eafc0b24cfff73f5"],["/js/34.54d544fb8b96833e3e23.js","503efbe8da5765351a0fff89d6097489"],["/js/35.54d544fb8b96833e3e23.js","938af7ed52b0f36ac22e0f7f0c8a88b5"],["/js/36.54d544fb8b96833e3e23.js","c5bfc83a44841e54567f0ff26cb9f7e7"],["/js/37.54d544fb8b96833e3e23.js","6ae0227f5f319d7a53a27cc646fbe480"],["/js/38.54d544fb8b96833e3e23.js","0ef5183f0aeb2e4e1fb8c829a3d6fc5c"],["/js/39.54d544fb8b96833e3e23.js","da2b404c6bdaa7978e4d1f4e7afa9cb4"],["/js/4.54d544fb8b96833e3e23.js","8d7de72e41b72399aa004daa7486eaab"],["/js/40.54d544fb8b96833e3e23.js","d2ff2420a66b3f075984806e6e2625ce"],["/js/404.54d544fb8b96833e3e23.js","ef16e019556bd34ae2f3e210414bc16f"],["/js/41.54d544fb8b96833e3e23.js","039fdba483884be6620bd14397ac3c91"],["/js/42.54d544fb8b96833e3e23.js","ab997641fd91e36f286ebe497ce63380"],["/js/43.54d544fb8b96833e3e23.js","f94f8411f09e7fd5b6a08d4dd5843854"],["/js/44.54d544fb8b96833e3e23.js","081c8be95a20f2855b2f0c5967c5186c"],["/js/45.54d544fb8b96833e3e23.js","05f488b4d18112a33eb60eedf1ab2b6e"],["/js/46.54d544fb8b96833e3e23.js","11f511fd6d3abe7e50cc93070475bfb0"],["/js/47.54d544fb8b96833e3e23.js","db3cd743f1c3b5ad0683c557cc98a021"],["/js/48.54d544fb8b96833e3e23.js","984f6903f5be82c2c326eaae70502f8d"],["/js/49.54d544fb8b96833e3e23.js","68a00c9b342bf250bb534f515315491b"],["/js/5.54d544fb8b96833e3e23.js","0e24b43301ae2f6e0ba5e1f17f0ea272"],["/js/50.54d544fb8b96833e3e23.js","6e544e73430b95dbdf451f2ff5955e56"],["/js/51.54d544fb8b96833e3e23.js","077bdbef68bc7522f701afefb27b355a"],["/js/52.54d544fb8b96833e3e23.js","5c5d7e4bb2bef623193d07dd9f62b9b7"],["/js/53.54d544fb8b96833e3e23.js","61e44e56b0f6969d772a71b4ca76c302"],["/js/54.54d544fb8b96833e3e23.js","d0c63aa10b4800d6cff4964175f832ef"],["/js/55.54d544fb8b96833e3e23.js","0397a6fcabe1e3d69fc0b7f6b4aae59a"],["/js/56.54d544fb8b96833e3e23.js","c23bbc7e469e5239656c8e5d62644599"],["/js/57.54d544fb8b96833e3e23.js","fb9f4807e5061e870e0be0fad4515717"],["/js/58.54d544fb8b96833e3e23.js","2d4d321400ba2166ca0ee78f58d26b9c"],["/js/59.54d544fb8b96833e3e23.js","21d1a414201fc9db1642825cf86e1dfa"],["/js/6.54d544fb8b96833e3e23.js","133514b0955967ea80161c18afa3a423"],["/js/60.54d544fb8b96833e3e23.js","b1c01d38c454b6d3001cd7c1011353d9"],["/js/61.54d544fb8b96833e3e23.js","a873b26413378026081292e94773f632"],["/js/62.54d544fb8b96833e3e23.js","cb640bdb7a338fb3af908bec41e5af4f"],["/js/63.54d544fb8b96833e3e23.js","d3ae0c73a051315b5e7e37173d040c77"],["/js/64.54d544fb8b96833e3e23.js","a4a0fe119f19cc157642da3f4908c7d2"],["/js/65.54d544fb8b96833e3e23.js","6013f96735109905901acd1c2944695e"],["/js/66.54d544fb8b96833e3e23.js","23e3cfb287cadaade73dd468028b4f1e"],["/js/67.54d544fb8b96833e3e23.js","2c644a1197102b987f8865a34c162bb8"],["/js/68.54d544fb8b96833e3e23.js","aacbc69fa81b2facf1c4129547e36a44"],["/js/69.54d544fb8b96833e3e23.js","c434c1d3d780a9980eaa806c4defaa18"],["/js/7.54d544fb8b96833e3e23.js","35008dd27bdd074d55843274164ef09b"],["/js/70.54d544fb8b96833e3e23.js","08b1db79fa7fc477a042a89880693720"],["/js/71.54d544fb8b96833e3e23.js","d5718550754613371f01f619373b26bc"],["/js/8.54d544fb8b96833e3e23.js","65c811d81ae9ee2ddc0c4273c54dfbea"],["/js/9.54d544fb8b96833e3e23.js","fa4f26e1c49b8c316863d4efe8412b56"],["/js/AccountSignupModal.54d544fb8b96833e3e23.js","79f3975f8f8a976901923ede4655d379"],["/js/account-info.54d544fb8b96833e3e23.js","c60e87055e713595a4f12dccdf3d67b0"],["/js/contract.54d544fb8b96833e3e23.js","5558d0ff4f204dfb2817e531013f62e2"],["/js/default~open_position~1833eefb.54d544fb8b96833e3e23.js","0683671944626dcea458db8072bcaf3b"],["/js/digits.54d544fb8b96833e3e23.js","141051df7ec4f7e30edb69bf6e762424"],["/js/info-box.54d544fb8b96833e3e23.js","dd42ae96bce833ee8a98e05ae6fff9e5"],["/js/main.54d544fb8b96833e3e23.js","0f72213d39d87b32f7dc805c97c4557e"],["/js/modals.54d544fb8b96833e3e23.js","2bd658301546406bc9e1d1533f434421"],["/js/notification-messages.54d544fb8b96833e3e23.js","0fcb830084b8b6989bb1191fdbca4f92"],["/js/open_positions.54d544fb8b96833e3e23.js","84f3ef3917d54c4ad3f924f2213465c4"],["/js/profit_table.54d544fb8b96833e3e23.js","94a1d13dd2c7cffc1e6cd9470d3f863c"],["/js/push-notification.54d544fb8b96833e3e23.js","134b1eca8b81d0b4f1c17c2e560b23b6"],["/js/reports.54d544fb8b96833e3e23.js","ced839946ee596802fe0c232e1b212a6"],["/js/screen-small.54d544fb8b96833e3e23.js","9b5e51a8f30d1fe2ced8f5779266bc04"],["/js/settings-chart.54d544fb8b96833e3e23.js","c6a1cbeea13786b1f8267fc69a0e3ed1"],["/js/settings-language.54d544fb8b96833e3e23.js","d6dfdc4e68a71805904b0894d3a09a7a"],["/js/settings-theme.54d544fb8b96833e3e23.js","b207974d39c0c94157b39046c7541801"],["/js/smart_chart.54d544fb8b96833e3e23.js","47887cc3f7305d7b433eedfaeb7616eb"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.54d544fb8b96833e3e23.js","d748ab910cd95f37de0178a22d11fa4f"],["/js/toggle-menu-drawer.54d544fb8b96833e3e23.js","6122adcb0859ef61b60d3b32b8cb89a2"],["/js/two-month-picker.54d544fb8b96833e3e23.js","ce38d5a076dd19fce77cbebfb0e2145a"],["/js/vendors~AccountSignupModal.54d544fb8b96833e3e23.js","8f5e1c2fd259e3f6db7222bc68636148"],["/js/vendors~main.54d544fb8b96833e3e23.js","73eff237b3a7d06cfada63f119deb641"],["/js/vendors~open_position~7c650be5.54d544fb8b96833e3e23.js","f4f623d7d16257591e0296a728f4ddcd"],["/js/vendors~smart_chart.54d544fb8b96833e3e23.js","2490bf11a9e6743a4e5a64b3073873ba"],["/js/work-in-progress.54d544fb8b96833e3e23.js","d4e1503e65eabff0dbaf2ecbbb8a9540"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







