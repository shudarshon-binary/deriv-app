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

var precacheConfig = [["/js/0-74bb338be72044e41a71.js","d965aa981a6de9b757fc36beeb4bc4f7"],["/js/1-32223d91127de3082c03.js","711d7e80ad9f01696bae440d107b162e"],["/js/10-8555fd3ad97e659ab204.js","1873db573327a35485d1d825ea6b94a0"],["/js/11-d7907a477ab176859897.js","24c06336313a3224120c26b9e6d44f23"],["/js/12-2a348df21928d1b22a97.js","904fd6ff16989d0fd42ea6a29128a08f"],["/js/13-c03bfba4207c8f782c15.js","807e0cfa7a41244c0f1e9fb943e866d2"],["/js/14-ab55b20c39d847e7286f.js","c6ba5bbf03232334f3cd0300cde6862f"],["/js/15-92ec8ecefc949602ffe4.js","87daf6c22228cbc5769d9f6933a6600d"],["/js/16-36ce64c236680635a482.js","9247c0533ab5ee6285e0f0a0744a053c"],["/js/17-22c335f0eee8897abbce.js","88f3490da041a378a212e7dce4b0bda4"],["/js/18-3a5ec62220aac7648a51.js","4531e6d4f2b3e080894872a19cef21ee"],["/js/19-fab643946e69534b3d96.js","d8e653ca6d64e651613a1ef28f118bd3"],["/js/2-334205a8365089c6cc04.js","0eebfcf31d9c68f7e150f1f4801b28fc"],["/js/20-3b34e60c04dd836d9e0d.js","c688f7bb03ed2ed81cc1d21b9e315480"],["/js/21-91253d3907a4fb2186bd.js","15fc51d4a77bee10a35a9322be1ada13"],["/js/22-970ad4dfb820e40e7058.js","83bc5bab2686650112d101394a8f9d4e"],["/js/23-1530474ffb90fde75d33.js","1e2221711e2282c5781506a21ddbcc4c"],["/js/24-29be3c3cc366f4d50204.js","4678b038b229dcd73692023042ef614b"],["/js/25-72236008483eb791b514.js","8b8fa8f47a40a107de0af8abed4ddf78"],["/js/26-b5dffbdfd7a6e4a65def.js","29d905290f1b07615f006c8242216fc5"],["/js/27-a49781ae02b8e96cb98c.js","60e158b0ed02987ea3fbb4f9355d43e1"],["/js/28-8ab0fe353c03731b171f.js","ba433bc1789bf6bb588dec02c0b7b8be"],["/js/29-adf1f2d1d04720cf091d.js","93a0544e2a33743cf9b56c7404a8ca9c"],["/js/3-9c85b75ed061970f7c97.js","16af0fe5d2daa09c511b5262ae5577e3"],["/js/30-1c3b9ffb71916f5b1d60.js","616e1ddd609495a73e78d8774e7cda21"],["/js/31-8cfc7a7d807804de143c.js","c39d5d3d38e48519093ce7d066160c7d"],["/js/32-ddb05a234c97e8949731.js","922e811d497ba8661a1a48c0a099a9a3"],["/js/33-6851b1d3be3f396e6ee2.js","6442efb92c834d5ea3a9ac6824a171bd"],["/js/34-c33341976d8b023a8597.js","f020d128cb1329865814ab62aa5fb9da"],["/js/35-e440d35b5d3079aa4fb4.js","bd3f431c781c7acab2bfcd22c289ad0d"],["/js/36-75a9d598a72a3ac9ac4e.js","8fbc1d64e545020f7e79b219523bdf6e"],["/js/37-368b251a00f36d71614f.js","9f1eacf21019f381dcfa0dbe7c1ecb9e"],["/js/38-228f735b7bb6f00c5892.js","13c2420e49e6111b81d49b8f32da4cff"],["/js/39-6bdbb643368984cd1e04.js","1b2ee410c8fd71ab6e9dfd898aecd6c1"],["/js/4-ffa34c67d8f4aa2789ee.js","dd08e76c89fb6facf5e61e7b17b05868"],["/js/40-add335205a7172879bcf.js","2caade5511958c08e813797fa9df75fe"],["/js/404-147bb96af806ecfc5ab8.js","f50c0fd66277163521032d6fc83551e7"],["/js/41-dd8b707deb396dfb35a3.js","6ba1f38069b255577779228ea2e0e77d"],["/js/42-aa568ac7b264751012a8.js","f2945547f9f5d7b7640d47ed4f003ddc"],["/js/43-80fc10daf180cce4d316.js","24c907876ed229f1f671749f93b85577"],["/js/44-e9ec1aa81f6b4e7761ea.js","fd483452d3fb7649fa3bafc334b58342"],["/js/45-f3cc9003c366c0233426.js","8d3dfba3f1fd1ce061da94b72dc7fafd"],["/js/46-d1624076612278c38868.js","34a1c93e2e1c81e02af9e4926bb2ba93"],["/js/47-f2d1316b4e7d449802c8.js","714fc0601d6618c36764eae4aeed2b57"],["/js/48-cd80286424a97cad5cd5.js","3fc53c914e0d3907c22dbad765834b42"],["/js/49-9923caa06d1d22118db2.js","81df6f6d6744b2c37ac0b9d8a612447e"],["/js/5-347d8ecde0ac5d0fc0db.js","7004082183c44ca756a40ec4c059ed70"],["/js/50-d010f1ed146d175d5da5.js","2c3c3e9fb5cf386402f20ecf7da8b8de"],["/js/51-f4251894548823cd9e80.js","472aa40d85914a28b8906b2f1c0d0088"],["/js/52-b14a96505a836f3a7485.js","00274d19f414f5e8777b0c95947a7dda"],["/js/53-fb1bf7456adb3ce29f50.js","d5ca9cd3baa3f93965be0fd0a8f94f08"],["/js/54-10ebeaaf9d58db290cbc.js","48ea4b9dfd4a7a89b8581d99f15684f2"],["/js/55-1473c4a762662f2f8581.js","d12c0005734dc2a937230b829a91423f"],["/js/56-71b92458ca13cb530f40.js","8007985b1955bb6988265f3aa1c6b864"],["/js/57-794256197c59d4a175db.js","1f9b5df8cd33fa67d5a979a10ef19cd1"],["/js/58-211439522c452b22f4fa.js","d397ab09db8c645eca50e1b0b3e05e18"],["/js/59-9baf58e0033f998fe711.js","c19e13da9df9fa4380380a1348188b20"],["/js/6-b329a1d056957b91a757.js","31337e14feb0b3680b26c0b59e363e4b"],["/js/60-462740573dc8abf2eab8.js","2e3417c829d2a0d79d8994a995f2681d"],["/js/61-ff9adca489785e48f618.js","d4491663fc21ddf660fce3dc356085b0"],["/js/62-d6360d2f2dbca73fa658.js","c5d894c00a563cbdd9d37c5df9a067c0"],["/js/63-9b90c89b94603e5d6393.js","2826f1f687d104e4f0d0eebcd36a27a3"],["/js/64-f859e8d9af272b20a151.js","83eb831fc5eff375012645ad7f46f3f4"],["/js/65-0f2e8783a25e6c450f21.js","9fee07037ac69ab28ff741a44ae41f47"],["/js/7-2471d28c966dac3252cc.js","bd2e7b25a7b38b012f9cf968eb7e04a9"],["/js/8-dfd2de8bc09fc9071de6.js","b6ac160f98392294798d45763b8699f1"],["/js/9-c2081bf65be63b5de787.js","d3a313b13991c40d2d92963d3b872749"],["/js/account_password-85daf961022f362bf5c8.js","d3baba9b8c35f0e8764e9f167bf3bb9f"],["/js/api_token-fe8fadb7be8f8f707d57.js","828831fbb0c69c4f16a9ca796ec53a9f"],["/js/authorized_application-a1d3f121677e8163d362.js","f4ab956cdc8306897063feb8184958a4"],["/js/binary.min.js","a25f41cc61051042080671f6e8f4ce43"],["/js/binary_common.min.js","af6998423f83224177f685c4bd9fc14c"],["/js/cashier_password-3bb92abc379d17a9a360.js","d39e2fd5cf82d0dba4053d1b5ca2ce59"],["/js/contract-8fe88f353eca31a157aa.js","2e49f1e7ac80c7887d5d2fc9d3b3f9e4"],["/js/financial_assessment-126d1c39814e2041b766.js","85fd7c16f8d1f2eeac3fe2b4627a3ace"],["/js/limits-e9753a49be8c9269658c.js","5d0f3bd1234c092d3f07aebcc042a6be"],["/js/login_history-1a6db335b981b02dab28.js","b59b9ec73a84a94041fd1cbbcc7c19d1"],["/js/open_positions-b73d8149acd30d3e0b1f.js","9ce088254afe66c71a6b1776e2a5b1f2"],["/js/open_positions~profit_table~statement-a39b08a5417554fd6e4c.js","82987496176f47485416d5aa428419ac"],["/js/personal_details-569ae060c5b686ad0909.js","d4062cefd276c810c9680f903d2d48a3"],["/js/portfolio-783e9d320eea577b7d40.js","d5f3b3fe20aab61812324ccdb9e3da3f"],["/js/profit_table-5828775c4b4fa1592394.js","6a4643c07f94a7bb40bd0cdaea0292ed"],["/js/react_mobx.min.js","00e327a7a19b67a77af110d956c1a94f"],["/js/reports-16d00f8f48cc52c6a774.js","92821cf5a9440c6a7b2d9e1c66cbb0d4"],["/js/self_exclusion-136aa147977402d85906.js","85efc84b30f676527dcd0d554439ffde"],["/js/settings-cdd1533b818cceeb12e7.js","98c1f0c769617b51b5c8385be35f82a8"],["/js/smart_chart-d74db91f7f97bf939ffc.js","1f4bc33b49435043ef6704a603386fd7"],["/js/statement-2e5226044957049ddaef.js","5d5f2862978cf0b587cbe3164eff19e2"],["/js/vendor.min.js","71ff7d74c85cfd6c87042e3e2968973b"],["/js/vendors~smart_chart-8ef3450dd0f041ab00cf.js","622a423e7211ca4d4f37481990634b25"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


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
    var navigateFallback = '';
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







