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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","23aeb53c769cfa4ffa74d349ba6f010b"],["/css/AccountSignupModal.css","cf123fb5c44778120cd430066825e730"],["/css/account.css","8dda3685135a540704bd543726a1cb90"],["/css/app.css","0ae9795ffeeba4a03f3af234ab2cacd5"],["/css/modals.css","828256690638c40e408e14600775ca10"],["/css/mt5.css","0276cd45fe1c0b7921ef30318bdf9f8d"],["/css/notification-messages.css","3132b2d2652e96c89ad2008d936e15f4"],["/css/reports.css","7b053b3d556c92b9fa09f85a215e675f"],["/css/screen-small.css","4c161eca4375176607002baaae93f14e"],["/css/settings-chart.css","fa6c998baa9a4c8b4af2bcc5bee28f73"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","73c0186eea30f7b2acf8df0b987ea293"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","9682c48fb10268372ba713b62426a8b1"],["/js/0.4769a8feafa21dae97ab.js","dd58deeef82d0679399b36a8ca0925fd"],["/js/1.4769a8feafa21dae97ab.js","d32b6a6b497c7586534218522692165b"],["/js/10.4769a8feafa21dae97ab.js","3ffc3774e1cdfd85146c05ccd36fa2c9"],["/js/11.4769a8feafa21dae97ab.js","d39439fc97021f09a4002df60125e11a"],["/js/12.4769a8feafa21dae97ab.js","c932479083cf18b56c7e3031022c01be"],["/js/13.4769a8feafa21dae97ab.js","156517a1a276f66059cce50a2d589434"],["/js/14.4769a8feafa21dae97ab.js","1ca59d60ffa55227468138a70038ed99"],["/js/15.4769a8feafa21dae97ab.js","143a5e0085689ec4c99184090555aaab"],["/js/16.4769a8feafa21dae97ab.js","0895ab6ef19bde1ddc986b2ba36a8231"],["/js/17.4769a8feafa21dae97ab.js","7b25fc023c4b0edc69b0d8297db7679e"],["/js/18.4769a8feafa21dae97ab.js","a7f994ff3fb0054022c62782da09cb46"],["/js/19.4769a8feafa21dae97ab.js","d7adf1a6bc4056109db81f87adce9e07"],["/js/2.4769a8feafa21dae97ab.js","ee88301cecd6f2f45ea3c362dd0580a7"],["/js/20.4769a8feafa21dae97ab.js","7e8928c55df540a7d051015a93b3246d"],["/js/21.4769a8feafa21dae97ab.js","c219b6291ee82ad2950f77ceb82176a7"],["/js/22.4769a8feafa21dae97ab.js","85b73dcf819f8ceaa9d5f306eee594fc"],["/js/23.4769a8feafa21dae97ab.js","98e2d67f772ac9f4faf32585a5371c55"],["/js/24.4769a8feafa21dae97ab.js","a8089e54fc379802fb7e2582c25f50b6"],["/js/25.4769a8feafa21dae97ab.js","1afc0b29fef12358ad874edfa0c24c94"],["/js/26.4769a8feafa21dae97ab.js","8582d31a65bee36e18cde30b03fed6c5"],["/js/27.4769a8feafa21dae97ab.js","6f1e3e0860ea63d73de41c052c1f30da"],["/js/28.4769a8feafa21dae97ab.js","36ac6a0fb7fadf11269c36214620251c"],["/js/29.4769a8feafa21dae97ab.js","7a70964695c15c75c0e69793f3237957"],["/js/3.4769a8feafa21dae97ab.js","3e1e9a6b53086b0032ba5af8a06e74ab"],["/js/30.4769a8feafa21dae97ab.js","2e8662617b5cbddf4e2b3725524d83d8"],["/js/31.4769a8feafa21dae97ab.js","13e3188b8dcd103950147fe1bae3de71"],["/js/32.4769a8feafa21dae97ab.js","8ae49464ec8f66688a2126f013860829"],["/js/33.4769a8feafa21dae97ab.js","8ff6973739fe95c3a65602f2311294d7"],["/js/34.4769a8feafa21dae97ab.js","5c1ba7950f2be6c645f83868e3bd3300"],["/js/35.4769a8feafa21dae97ab.js","2c2f827e0eab37aff17ccf13a568de61"],["/js/36.4769a8feafa21dae97ab.js","0e5522e7f6463d866a75e9991ad10ec2"],["/js/37.4769a8feafa21dae97ab.js","c97033328775e31472b0885561b5a469"],["/js/38.4769a8feafa21dae97ab.js","455f028834003a700b464c5456bf6022"],["/js/39.4769a8feafa21dae97ab.js","3d1746c5b80764f89c7f5ca30c56121b"],["/js/4.4769a8feafa21dae97ab.js","88ab993703ab96866a4bde60fbee78a1"],["/js/40.4769a8feafa21dae97ab.js","7088ac0e451b7ae4594ef50a1c865a04"],["/js/404.4769a8feafa21dae97ab.js","eee6494bf417a5fd67fd7fdf23708db4"],["/js/41.4769a8feafa21dae97ab.js","0d9f227ff8127a610b4f27bf82d32b64"],["/js/42.4769a8feafa21dae97ab.js","5f384cdcc1764f809a2f99a4a8b8db8a"],["/js/43.4769a8feafa21dae97ab.js","c7027689286a82afb3e7322469b35d78"],["/js/44.4769a8feafa21dae97ab.js","30539f838dffdac315375b118ae5671f"],["/js/45.4769a8feafa21dae97ab.js","fcc12b360778534a7f9d9d66126b9f87"],["/js/46.4769a8feafa21dae97ab.js","2b7384cf9edf86171740a086634800c8"],["/js/47.4769a8feafa21dae97ab.js","4bd758f63be6e0c28c784cfbde203872"],["/js/48.4769a8feafa21dae97ab.js","fc462ef17000d52c3542fa011902fbdf"],["/js/49.4769a8feafa21dae97ab.js","15be531d8ee790bdfeb4f906773f8ad3"],["/js/5.4769a8feafa21dae97ab.js","86985d95ce815beb09fdeed3c0cd2704"],["/js/50.4769a8feafa21dae97ab.js","5e78deb2e2d8099d85706ed62d6ee0d5"],["/js/51.4769a8feafa21dae97ab.js","ff7f0ac843f621fa3a3a4667e30b12a9"],["/js/52.4769a8feafa21dae97ab.js","7bc0e3565fde0b7e93336feb422d7896"],["/js/53.4769a8feafa21dae97ab.js","5c3d38537515312f1bc1fd24f8110c55"],["/js/54.4769a8feafa21dae97ab.js","113c1ae86fe6582788078b4d4d1120e4"],["/js/55.4769a8feafa21dae97ab.js","b87aa4878463769eb50d80c39c3e8bed"],["/js/56.4769a8feafa21dae97ab.js","d02516a56f088daa7a2165b8d61bdb76"],["/js/57.4769a8feafa21dae97ab.js","3f041c022347cbcf2eac1552db5c773b"],["/js/58.4769a8feafa21dae97ab.js","4a433402940606dc777f3b938a0bdb5a"],["/js/59.4769a8feafa21dae97ab.js","530cc93531777a5129c278a7a6a88a51"],["/js/6.4769a8feafa21dae97ab.js","44fb6203597dedcb0297a29c9548591e"],["/js/60.4769a8feafa21dae97ab.js","190aca2b1b0acdd190098058db77a115"],["/js/61.4769a8feafa21dae97ab.js","aeebc06e23c0c884fb5d5baac26a1fef"],["/js/62.4769a8feafa21dae97ab.js","8d8e8d4dc392b9d74fca337bbbc3bb60"],["/js/63.4769a8feafa21dae97ab.js","32938e8d5caa04b75831690480feaefd"],["/js/64.4769a8feafa21dae97ab.js","6e6bc2c7e47a64b511d4483f21b84a10"],["/js/65.4769a8feafa21dae97ab.js","807d74625313b753594245a652b90a71"],["/js/66.4769a8feafa21dae97ab.js","845ac818f6cf9def6e32d9cf453f0e76"],["/js/67.4769a8feafa21dae97ab.js","047db85ccb638358a05e50520370e465"],["/js/68.4769a8feafa21dae97ab.js","c0ee681567cc9b910ff6be098c62ecd7"],["/js/69.4769a8feafa21dae97ab.js","3c734687cb3448991cb6f8020c445e58"],["/js/7.4769a8feafa21dae97ab.js","6a3f77114557eaceac19c346b95cb815"],["/js/70.4769a8feafa21dae97ab.js","9fe9d17c961fdebfd2aa13429625bcb2"],["/js/71.4769a8feafa21dae97ab.js","3565afb9e196f55c0821d69f3acdfb26"],["/js/72.4769a8feafa21dae97ab.js","defd2a07da0ebcf09162cf57ad74b5e9"],["/js/73.4769a8feafa21dae97ab.js","d7acfd61f8bff7475cb3d395ac88b3d8"],["/js/74.4769a8feafa21dae97ab.js","db4b4fb2459705cec86c9103d8c73c4f"],["/js/75.4769a8feafa21dae97ab.js","4a3e290f4c6d2b2f9d4366beb0412a1f"],["/js/76.4769a8feafa21dae97ab.js","9433efc6099355127c4c200fffdfba0a"],["/js/77.4769a8feafa21dae97ab.js","422afffa7226fe229cceb3a8f1ccd370"],["/js/78.4769a8feafa21dae97ab.js","cda2ae100545a13d046ef81570d02cdc"],["/js/79.4769a8feafa21dae97ab.js","b52e3664a9867f36cb15fc3830f92354"],["/js/8.4769a8feafa21dae97ab.js","5be8e7d18cd2130875eccf04c7de3072"],["/js/80.4769a8feafa21dae97ab.js","7182f1a3cf08b78e744d00401f7815ab"],["/js/81.4769a8feafa21dae97ab.js","c9eb92f7682baf4806cd338bcb65eced"],["/js/82.4769a8feafa21dae97ab.js","5b0b716a39374ee4a0b71f0c0b6da558"],["/js/83.4769a8feafa21dae97ab.js","90510d2cda2e01253ed3b20946d8fdd9"],["/js/84.4769a8feafa21dae97ab.js","3164e977a52f4d2b4d7af8c5df0f6802"],["/js/85.4769a8feafa21dae97ab.js","85e72aaf37488456b93881fa03b48757"],["/js/86.4769a8feafa21dae97ab.js","7d7830ecb98102e21ac739fbb1df988f"],["/js/87.4769a8feafa21dae97ab.js","c2b7402d708909df193dec0b7329edba"],["/js/88.4769a8feafa21dae97ab.js","d0819b60383f07cf72e940e1521b4bc4"],["/js/89.4769a8feafa21dae97ab.js","cd8ec9650182bea3a749762b1d35cc26"],["/js/9.4769a8feafa21dae97ab.js","4512b773620320295a303488c1dca31f"],["/js/90.4769a8feafa21dae97ab.js","1ee92201ef197f704be5335ee1dc5e5e"],["/js/91.4769a8feafa21dae97ab.js","b848f7623cce886d9801841d8692c1ce"],["/js/AccountSignupModal.4769a8feafa21dae97ab.js","c0620f6d4ba1138968e3ec720f888aa6"],["/js/ResetPasswordModal.4769a8feafa21dae97ab.js","367755190e6d3c1afb7daf195cbbbb6a"],["/js/account-info.4769a8feafa21dae97ab.js","07a08cc8de87d2ec65dd0471d2031c96"],["/js/account.4769a8feafa21dae97ab.js","1798952921d517046f0da43e4cbfdb5e"],["/js/contract.4769a8feafa21dae97ab.js","14aa89aab3085030406274a207eaa37c"],["/js/modals.4769a8feafa21dae97ab.js","272615b97c07cd9610bda0f26be107e0"],["/js/mt5.4769a8feafa21dae97ab.js","af1edfcdbeb38b3659a22f702f384718"],["/js/notification-messages.4769a8feafa21dae97ab.js","d17e967de62665e12fcba7ddaaa5ca28"],["/js/push-notification.4769a8feafa21dae97ab.js","7e1d291a97fc8b818f7f40e62c7a4dd2"],["/js/reports.4769a8feafa21dae97ab.js","4018092609261c1592f326df38b12afa"],["/js/screen-small.4769a8feafa21dae97ab.js","ccdfa4ccaa14af8d034f174c997cf698"],["/js/settings-chart.4769a8feafa21dae97ab.js","d2ed97d2b36f60bdf221bd15c45eb822"],["/js/settings-language.4769a8feafa21dae97ab.js","2e2e84ed3931589f19b27795e0c8cb11"],["/js/settings-theme.4769a8feafa21dae97ab.js","77bda3b933d92cd46db889816f6ec843"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.4769a8feafa21dae97ab.js","42df50d7bdda2a5cab2eaecd84b6cd81"],["/js/two-month-picker.4769a8feafa21dae97ab.js","67f51b1c98984d343687cffb8969f4de"],["/js/vendors~main.4769a8feafa21dae97ab.js","8f0527da786254af0d9114791571c29e"],["/js/vendors~smart_chart.4769a8feafa21dae97ab.js","d6612efaeff28de7fd1046280d756202"],["/js/work-in-progress.4769a8feafa21dae97ab.js","6dbf503eb0e6fbcd3a4927ac3ada15d9"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







