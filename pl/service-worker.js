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

var precacheConfig = [["/js/0-7325ab0feccbe421f23f.js","8b998f062b2ceaccbecf6b935b79cf40"],["/js/1-b08248a63e2a69423259.js","222eb0f23e80e8c7823ecd4c7421561f"],["/js/10-34b046c80789c645e9fe.js","dda221a04f3335d53c6131ce6b8e123c"],["/js/11-68d51bb0220d9d00bc1f.js","5f55f77a8a8d932d74f5f69e39e25afb"],["/js/12-7042fbeb60ffab29934a.js","a1ea4a49dc6d0efa99f339ad94f946c3"],["/js/13-804aaf5916dedc28f9c3.js","b65aede2aa315fa95e9727f85b5bd690"],["/js/14-e0a17c02770a6e58acdc.js","3c4af9b42e1e314055892a8bf70ac275"],["/js/15-e5266fcd17e7d97af08e.js","4cd7cab826881c9f141abf535286ac1b"],["/js/16-93085ce6e91b5e73ceb1.js","da6df43b9949d403922eedec83399f6d"],["/js/17-d62000b309082aaada88.js","d3a91687fac6b03e660ec8552bcdf74d"],["/js/18-22e2ecc9ec40f9f4da81.js","541b6b5dca8928d688246c52bfb17fae"],["/js/19-eaacefc7f0315ca743ea.js","b8c8a6b826e9894d1b0793412390ef02"],["/js/2-4dd2841af6a65c735fac.js","e1eaf8eb2a966492fb9fbbd47d5d47cd"],["/js/20-699f348151c38ffad509.js","58b6c2026c34035923196cd98ecbe2df"],["/js/21-12cf5b89f554024874bf.js","ee5768a6e8af2c269ea79eb4427471d0"],["/js/22-f7b1ebf366a6bb788dd2.js","00352dbad23061c47687fb0e51a2b482"],["/js/23-092a095f0d35dd4fa421.js","981c6908889293a7c0d0bf8ae41cfbef"],["/js/24-27191615eabd0c20ad49.js","688c25735d75f9ab3bc0797246a3b3c7"],["/js/25-975da2306a8db36646c1.js","680cf0df99d30c18e0df80ac65885392"],["/js/26-448254d0ecb029e6e760.js","997175a8318bf1f913312ee550592de2"],["/js/27-56211f99c9d27fa61563.js","d87eedb362c146cc53a683075adfc0c3"],["/js/28-eb452a653df96f033c87.js","77e07bce3b695fc1a99bb3c7c55bcba7"],["/js/29-0dab9b6f72e36816c0c8.js","86449e47187d61fe06c3f4e58bcb76a9"],["/js/3-0fc8d577b90fcccf8811.js","70642a656de1c3beac5b4116e624e6db"],["/js/30-5f19de68b9e15c5add7d.js","45aa1d2f89bc6a2aecb80452d0513d1d"],["/js/31-2552b1172fd94bb8e0ec.js","d5de48d474112c4e411e56b4cabaccc9"],["/js/32-c27f76cbd4ad2bb6e064.js","1e771de53dd39ab90449881c89799cba"],["/js/33-8303746caf732124d01a.js","3f823003b31866e4cd3869e7547fa364"],["/js/34-51a7b17b56c794c91e02.js","d9dc958f61ffc1d86e6d56ee3a1709af"],["/js/35-6681e4f1b856ab63d332.js","3fc0e6192401315f013af7a167d9d5cd"],["/js/36-bac558effcadba496b13.js","99be939518379730145ba807327fb57f"],["/js/37-da9aca45be1f5326720d.js","21fdddc623eae0c7017e2f0500f4ff12"],["/js/38-9d55a096f0e562f429cb.js","4213d2a096cc7162892f842210a3054b"],["/js/39-54190634e4e6298a66c4.js","368b2fcb67772eb507dbc22f66a0155f"],["/js/4-b75d6a71f3a67023cba2.js","df164fb0386186f37a6489a86e6904bf"],["/js/40-6ed5ae49e563247e5e33.js","69d7792f9feaf5055988e9413c0e2904"],["/js/404-7a66c44c86e5f2489511.js","78223ad003b1690958af94c0b0358de7"],["/js/41-9acd755238f032167395.js","c6ab30e3abcc6192a426fe7caf975c5e"],["/js/42-c4df62e81dda57c7be97.js","a82a2d3e9f3201bb2b3f9a159c3ee191"],["/js/43-1722288ef4b1fb46633f.js","118f2eb0be2b7d2d3c24f74255a9e242"],["/js/44-d990fe89829b4fd713fe.js","c0b74e0a8542cb580fba74c85c357eaa"],["/js/45-5d43b15f6d5c360e1af7.js","e32afa77dab634168c06632c79eb22bc"],["/js/46-ebc00104f5b2dffc41e1.js","ff803bb802fc02b319ad499f00848324"],["/js/47-1d2891a4d751bc35cb4f.js","97202ae4b42d3b6c5821ad49d697de7e"],["/js/48-bdf321cd5dfc2ba30155.js","2bb5a136fb450be0b21f0ac725ffb875"],["/js/49-30eb2a25028a699f9172.js","62e3c6e38f5a3601f5eeb46a9638bfdb"],["/js/5-cfa350581da4dca7c0d4.js","bb383d31ed268d9db9896360a3952d90"],["/js/50-6ce3c7286a2bce0eae90.js","075ec62bd1fb9307038a42f05059777d"],["/js/51-309509f07e28fa17f8ae.js","f1ce867400dbe44e7be19ec94eb39e30"],["/js/52-eccb04ca857f3cfeecc9.js","b3beeb62771f898be4655ab586bfa678"],["/js/53-0ed4d82721e19ed9c2c0.js","48cb052ba00c86c975dc067a8ad2c2a5"],["/js/54-41111c62dfc2782c95da.js","88e7c092baa0949517cb86df9188d5be"],["/js/55-e1de5d1df6f3c9f7de63.js","43a26539de561a1182c35921b104305e"],["/js/56-9a22ada81b0cddf205ad.js","c9ad5d3dc1672e129e28a1edf123284a"],["/js/57-ca252ea235f43bbfd4f5.js","15705ed036be291f2f050cfe057097d4"],["/js/58-adac33cc072bc13142c6.js","bcb6e2f69ca89fc68ee8000d9da900cd"],["/js/59-57d163fda3df0ab2dfe7.js","e9063a48f3beb095cc614731d8b62b98"],["/js/6-10abc424838d7b1ff2ef.js","c8c72f77445431b3438b64e18821a2ac"],["/js/60-6098eab30dd2deecda90.js","b390e8bd4ed639af345d973e94f364fe"],["/js/61-0d637f08f8125626f290.js","784bcb18447eb419c34b9319896a829f"],["/js/62-ad7603150cad65f2c7b3.js","c94bd9c38c202a235a69256b3d2ef758"],["/js/63-f7ed32139f027dcf43e7.js","f4d66925d82c3bf2f267eeeaa82c147a"],["/js/64-2a4bf67d20a172c0a6a7.js","4fed4e4e7888ce248e5f74b01580704f"],["/js/65-61dc30df326b20ddbea4.js","ace4686b7f270d3033ec02ed6c7878ff"],["/js/7-0e9c560e1e7afb05447e.js","809fdb19ecd8a4219561f01ba7256b7d"],["/js/8-b04fd3e19aca94212165.js","7012bc5cf8f7aebb1a9120270c5caaa5"],["/js/9-d91fbf620b893e11b335.js","847217dcca1d0e03658a0534aeaa86da"],["/js/account_password-ee22a866fffa068f0dcf.js","cb40d79ec67bb9db22bf9b2ff474f835"],["/js/api_token-ae7cdc2936ebab3fa024.js","ece422cbedfc69a3cb00f546c5267d24"],["/js/authorized_application-1e5d3c076bfd4967fece.js","59ef165a6b7118c1fa8c426faaddde2c"],["/js/binary.min.js","005dfc965534ab702c3a7e561539c9b1"],["/js/binary_common.min.js","459b0701ace35b365b57bb61d232c528"],["/js/cashier_password-90990bc4594f7eaff07e.js","6f7acc50266ceaaf25b40ee8b3d8ebf8"],["/js/contract-5dd08f7b1625a3bbe7b1.js","0c7188c6c8f6194e0def295dc7168f65"],["/js/financial_assessment-b7c98d516ecdc8067944.js","223ce792647c7e3eb03cb8b643ae8452"],["/js/limits-4e899c345bcf24e21346.js","95e26cb010a62a00e63883d0bd8fcd7c"],["/js/login_history-33a31b28c5127ec58f9d.js","146101770c0c2cbb2a1262db6588c934"],["/js/open_positions-9864403f22242e788b13.js","d64bdb7ddb5c17d1933ba79f4c0266b8"],["/js/open_positions~profit_table~statement-bfb8e61eb127a0916700.js","4bb0deb61f44b0fd10d95013c6a1cd77"],["/js/personal_details-bfd2ef14855f423484c8.js","6c816372c14a8ab6d314d2145ea329bb"],["/js/portfolio-6b9d90a9c5c6e82a8d50.js","2f4aeafa53a5d0c1fbd3f5da0cf06225"],["/js/profit_table-7ae50e0195e3462c5410.js","7ed3aabf2e20b9b21792bd31b2a994f6"],["/js/react_mobx.min.js","9e5fbcf483b56d38eeffac15471270cc"],["/js/reports-ed35df7e4292e8f23568.js","b9f1c67857f02112107206ceb92d5255"],["/js/self_exclusion-11cc27043e51d5909211.js","2fa9b1f7d4c3249b0d5f27c1b4010d4f"],["/js/settings-4c99a10d63ee01ae508f.js","cf3b14c7c4bffe4b1e24a8a14c5a17cb"],["/js/smart_chart-5da5085250cdbf1385a6.js","3d53be6cfe3b4887ca293ae0b1d06812"],["/js/statement-915644a14d2e9c7cda42.js","b6f39eb8e78357a38078d4abcd34aaeb"],["/js/vendor.min.js","267a49e0b2373bbb1bf1839939ae6a84"],["/js/vendors~smart_chart-a6b65de561a9a0a308bd.js","f7005cc52e958b4c0f7ebd75638fc1c2"]];
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







