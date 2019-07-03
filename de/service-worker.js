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

var precacheConfig = [["/js/0-964a143d3b4c70385d4c.js","f10300948f24527dd666d1fa1485ca66"],["/js/1-27e3182bdcd8a34373db.js","a2aada1fefb85ef4ba81f2fe87b9041e"],["/js/10-b166b8d97816c3a064bb.js","9f105cf42edaf91f2e22c05c5874eeac"],["/js/11-9551e5d12272055797b3.js","28c1b7aa6767e2bfa419ecf019692222"],["/js/12-de73db6d16c36714eba8.js","c6ab4e583b60626495c41d6177924564"],["/js/13-3762ae9be8bddb2cdd07.js","cb03bbf244e3142714e109e390098516"],["/js/14-2caf266a4306c457f9ef.js","e8cf776ea0d611bc42b05f33467fe807"],["/js/15-fdfe8bf954b5df0f94a7.js","2be951604b84ef0c63ffaefb77ec7f7c"],["/js/16-34f15909ebd28768ac4d.js","34807d61869ebb64a43e6e8b31be7339"],["/js/17-5b573ebd8744ca408149.js","1389ef927f3a980c83c32d2725aad094"],["/js/18-0a676b31a5e1a758200b.js","6bf4f0a78e73edd201edec0dac3db346"],["/js/19-f7d2b1b748a117e0e28d.js","7c4a15cdea60a0eb5346a95bd65146f9"],["/js/2-746d23b601fb5c4c6291.js","752094141d5fb64b4e359b8fd6550180"],["/js/20-9894fa59fb9807fa4eab.js","2cc0a37149ab70272dc4b1bb3e50ffda"],["/js/21-43972a58bd396faef310.js","3760d76409a010943713ff1a8dd3bfbc"],["/js/22-d02c6cdf26ef104f72f5.js","4c3775b5451919e4a2222e0be1546580"],["/js/23-95bbbe3dcdca20f37f0e.js","b9c7bdf2e63eb96ab0540bf548149e10"],["/js/24-2d95c87412d0a26672ad.js","af12a6a8c867d1d9564459a2c443bf46"],["/js/25-f9f3a84c0f4bab55a074.js","178ce57571439bf02bf24aa50f8e67fb"],["/js/26-39bacd34e9ac13f28dfe.js","708ab42f6ba83698b4bb74e32220d794"],["/js/27-b076f02f59cf8ddcb5f8.js","ea21949026b83373b41275be343815ad"],["/js/28-4f8ce849b19f8356a835.js","532d873e3b831407a081674f738793ac"],["/js/29-cf3b751971c87dc7931a.js","3ae869d330a6985ced858cf2694f80b2"],["/js/3-2ee573b8a92568d6f034.js","663f517573953e6b2dbc1611eb37eae0"],["/js/30-236225bb746fd63b522c.js","dd9f7d14c39ec3676712d4ced3264c7b"],["/js/31-f74ac151f488a30d793a.js","79ef89dcb1ecacfc5137db424d59308b"],["/js/32-c5f1223aeb43c11d0aff.js","bdd96a89a79b5dd8ca649cd9b9df1911"],["/js/33-376d32325e5829489dd7.js","17571031a0a316dbd8ce351a0498fe40"],["/js/34-813280c5a307d3fe7929.js","624568d15ce172193be7733fe802d6d5"],["/js/35-04ac298ba7d12d51703a.js","fe58f196cf6f9841801cdc33d35ad62c"],["/js/36-c31c1381257b52ff44a6.js","65adbce283a8cac15adf51b6e687b338"],["/js/37-7a0243e244a83f609490.js","da2e49c890c5ff00949021ce493857a1"],["/js/38-c855c27d5151fc217a62.js","aeffa9b6a26c80df0cbcc798e511569a"],["/js/39-8017fcb47fe393ac935e.js","1abc2727a9c27a723450f091947d11f0"],["/js/4-a48f8a0a9ed533189851.js","e2b560a2b181fb64fb9e7e96c666b8e2"],["/js/40-b34031f444085e5761ba.js","59ad1a55de5037726ddee52ba963911c"],["/js/404-9fecdce0ab8484a34ebd.js","dd0fbbe553707a65c77c67e1c128f4a2"],["/js/41-02cde6e339018a3cf72f.js","6eb5597b5c6eea490a09e07160e9b121"],["/js/42-56a02a8a6c246e302d57.js","32f79529e9ed4b049b761d70aa201a42"],["/js/43-29636a006327298c4cdc.js","187c91675c2c7c0fd6c4a851d34fea41"],["/js/44-58c60d3729b48f509bcb.js","25ea385f0e79e679360ee815a2124cec"],["/js/45-08ca8ebf4c2ea3770651.js","625e06b432e2f7ee2b7914dffdd824f2"],["/js/46-448f722ea4e69bed0ad6.js","fc510c1d8822859a79b8079f86d05369"],["/js/47-f35f9f62dff7433d64a7.js","564416d9ba65c660b044d37681ba5f2a"],["/js/48-1aa8be9c0fcbd50f5caa.js","3edb74eba81c0d1c92ea0bbd984b49e0"],["/js/49-4baf82e015012dd75cee.js","0dfd90007865d786ab7c0b659efdd298"],["/js/5-fe5d36f01c6d582b6d5d.js","e1212c1038c41d49e2deb3a544eaf3ab"],["/js/50-a6446a59702eb0d5db2e.js","3c210e555dfb8e296c42acc7abd477d2"],["/js/51-d7d9eaf1827d24dcb4f3.js","91a5c5ec6b5168bb15e5c1521f56aad5"],["/js/52-f105fdd9fc25f143beba.js","6932657b62d83e30ae2787cad83ebb39"],["/js/53-9cf3442127691135c857.js","f0edb6fb183c364ef5181824ede068a6"],["/js/54-ff3e7a0924d4b89b6d58.js","93e6b578bde4bc9a83f5db433f2da1f8"],["/js/55-8df6cda534a95eca2d02.js","033a8cad2dc4f4cae931d1ec41a09e6a"],["/js/56-3207e0c242fff2ed2630.js","a87d195639e4ccee25aac5d97b06211f"],["/js/57-8457a1de61b4d5ebd464.js","f70ac04cc4dd17ce05edea32e0970888"],["/js/58-f9481238d30fd49edf3e.js","23bf07490c73fb9ca476cd0345ff9d57"],["/js/59-ff856c9b4025aa827aa9.js","2342ce273146c978f6d4319c40478b50"],["/js/6-2da24e02259d617073d5.js","09d3cb29e3af42c74a4e245cd389796c"],["/js/60-874b6ebddc5916155404.js","fa5a673671be2f1c7adbade44a5f1512"],["/js/61-04d2c0b668762a86d8f1.js","d2b2eb964c78dff8abd76c25ec56d92a"],["/js/62-61641a912d36249ea54f.js","e43626edb7fbacf7e790a3cdb0f2aa62"],["/js/63-637e829ec4f35a3c8567.js","160208d069369f92db4730d0e4562d13"],["/js/64-f7ed93e110bfddf6fce9.js","d323a44019c92f78df5d22a27beac7c6"],["/js/65-08fc1cc618c0119af369.js","8d6528b3d0e37aa5751c15e827f385a1"],["/js/66-c0e60f92eb0b20df602b.js","cef9342f8bdaf2defcfb315e24966c75"],["/js/67-6acfebe8c4eeda699d7e.js","9108971a189ea9cbb46444888e847b39"],["/js/7-5ad7f78baa503615fc67.js","5fa9299c189b70e9e902d3515d945a2e"],["/js/8-517751d3e6c24b97822e.js","d8288b2f52912ab7797219a8b1ff120b"],["/js/9-94e8474066ccff7f1393.js","9a6da267747f13abd820859c502b2877"],["/js/account_password-8a4f6900d2c63d886e19.js","e564b4d888ab60de6287c0ab08564d6b"],["/js/api_token-563eb48d004a8a506de9.js","d2a7e38eabdd88123b027a50ad8f43ca"],["/js/authorized_application-b2fec9b3c8884c893ee9.js","04896fb18eab18709343f487c71322ec"],["/js/binary.min.js","7ef7790e24b2b8f7707bb5362a79254e"],["/js/binary_common.min.js","2cc60faa939bdf35991c805f49edd677"],["/js/cashier_password-3a519b16b5cec2b762a7.js","358d5df4b56932ab85165a6556087966"],["/js/contract-eebecb4d18547236bca9.js","fac3d48999b0f4b572dcb96fcd97f6ca"],["/js/financial_assessment-34e90fb968d14ce72016.js","618a76e6a1f0cf58fdeb3d5a2585bcb2"],["/js/limits-828cf539e245d4266621.js","a5ffecffdbe2e6f96ce729b17be643e6"],["/js/login_history-993a0010b723d6c8664b.js","86831d7c2acacb1a8cfeac8a6748d5c8"],["/js/open_positions-ba5674a3e09e992999e2.js","21bd39a4cb7f86ce893a20bb31be3ef1"],["/js/open_positions~profit_table~statement-a77ce795dec976d1490a.js","dc476afdd7e3c035570fdb24ca02d2d7"],["/js/personal_details-3dd68207534858eefc3a.js","dd6ee2827ca78be9da7343f89494a93d"],["/js/portfolio-5ff0bab7836f13b921e6.js","d7d0242e4dea14ef1f665b6973511af9"],["/js/profit_table-4c5ca6e61c936676f2b9.js","6476eb85386747b2f4205c9d3d332edb"],["/js/react_mobx.min.js","a4a16b1f068132e2f90f53abd7edff77"],["/js/reports-3be74724c20fc59a7c11.js","cd2ad76c2679558b984966dc7af9ed24"],["/js/self_exclusion-331740b1ad40d6338949.js","93a91098cca513c4ec90c8a7f3d908cc"],["/js/settings-9254df1c8ecea699f7ac.js","2fd606c859c2468733a00eb5e477b7c7"],["/js/smart_chart-24b579eab34875142524.js","170dd906ac6a5fd6ed117add66bb1b84"],["/js/statement-39b32c5ff66d8fd52752.js","e70afd20632d1a7a522320228b1f6a80"],["/js/vendor.min.js","1f1f1b9368f5d15f070ea7d7894bab19"],["/js/vendors~open_positions~portfolio~profit_table~statement-80a6fc79f8ece03eb39a.js","c435e7015c35d90710fecbb2eb148f6e"],["/js/vendors~smart_chart-d27db602f86550cbf5c3.js","c86793da6cf4409f00e0f7f928027585"]];
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







