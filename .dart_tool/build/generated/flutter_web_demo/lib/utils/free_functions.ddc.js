define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const free_functions = Object.create(dart.library);
  const CT = Object.create(null);
  free_functions.screenWidth = function screenWidth(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    return media_query.MediaQuery.of(context).size.width;
  };
  dart.trackLibraries("packages/flutter_web_demo/utils/free_functions", {
    "package:flutter_web_demo/utils/free_functions.dart": free_functions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["free_functions.dart"],"names":[],"mappings":";;;;;;;;;QAEiC;AAC/B,UAAkB,AAAY,AAAK,2BAAd,OAAO;EAC9B","file":"free_functions.ddc.js"}');
  // Exports:
  return {
    utils__free_functions: free_functions
  };
});

//# sourceMappingURL=free_functions.ddc.js.map
