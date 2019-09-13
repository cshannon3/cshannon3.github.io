define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const photo_error = Object.create(dart.library);
  const CT = Object.create(null);
  photo_error.PhotoError = class PhotoError extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (photo_error.PhotoError.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = photo_error.PhotoError.prototype;
  dart.addTypeTests(photo_error.PhotoError);
  const message$ = Symbol("PhotoError.message");
  photo_error.PhotoError[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(photo_error.PhotoError, "package:flutter_web_demo/networking/photo_error.dart");
  dart.setFieldSignature(photo_error.PhotoError, () => ({
    __proto__: dart.getFields(photo_error.PhotoError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_web_demo/networking/photo_error", {
    "package:flutter_web_demo/networking/photo_error.dart": photo_error
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["photo_error.dart"],"names":[],"mappings":";;;;;;;;IACe;;;;;;;;IACG;;EAAQ","file":"photo_error.ddc.js"}');
  // Exports:
  return {
    networking__photo_error: photo_error
  };
});

//# sourceMappingURL=photo_error.ddc.js.map
