define(['dart_sdk', 'packages/http/src/base_client', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_demo/models/models', 'packages/flutter_web_demo/networking/photo_error', 'packages/built_collection/built_collection'], function(dart_sdk, packages__http__src__base_client, packages__flutter_web__src__foundation__assertions, packages__flutter_web_demo__models__models, packages__flutter_web_demo__networking__photo_error, packages__built_collection__built_collection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const client = packages__http__src__base_client.src__client;
  const isolates = packages__flutter_web__src__foundation__assertions.src__foundation__isolates;
  const photo = packages__flutter_web_demo__models__models.models__photo;
  const photo_error = packages__flutter_web_demo__networking__photo_error.networking__photo_error;
  const list = packages__built_collection__built_collection.src__list;
  const photos_provider = Object.create(dart.library);
  const $toString = dartx.toString;
  let StringToPhoto = () => (StringToPhoto = dart.constFn(dart.fnType(photo.Photo, [core.String])))();
  let BuiltListOfPhoto = () => (BuiltListOfPhoto = dart.constFn(list.BuiltList$(photo.Photo)))();
  let StringToBuiltListOfPhoto = () => (StringToBuiltListOfPhoto = dart.constFn(dart.fnType(BuiltListOfPhoto(), [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(photo.Photo.parsePhoto, StringToPhoto());
    },
    get C1() {
      return C1 = dart.fn(photo.Photo.parseListOfPhotos, StringToBuiltListOfPhoto());
    }
  });
  const _baseUrl = dart.privateName(photos_provider, "_baseUrl");
  const _client = dart.privateName(photos_provider, "_client");
  let C0;
  let C1;
  photos_provider.PhotoProvider = class PhotoProvider extends core.Object {
    fetchPhoto(opts) {
      let photoId = opts && 'photoId' in opts ? opts.photoId : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return async.async(photo.Photo, (function* fetchPhoto() {
        let response = (yield this[_client].get(dart.str(this[_baseUrl]) + "/id/" + dart.str(photoId) + "/" + dart.str(width) + "/" + dart.str(height)));
        core.print("fetchPhoto: " + dart.str(response.statusCode));
        if (response.statusCode === 200) {
          return isolates.compute(core.String, photo.Photo, C0 || CT.C0, response.body);
        } else {
          dart.throw(new photo_error.PhotoError.new(dart.toString(response.statusCode)));
        }
      }).bind(this));
    }
    fetchPhotos(opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      return async.async(BuiltListOfPhoto(), (function* fetchPhotos() {
        let response = (yield this[_client].get(dart.str(this[_baseUrl]) + "/list?page=" + dart.str(page) + "&limit=50"));
        core.print("fetchPhotos: " + dart.str(response.statusCode));
        if (response.statusCode === 200) {
          return isolates.compute(core.String, BuiltListOfPhoto(), C1 || CT.C1, response.body);
        } else {
          dart.throw(new photo_error.PhotoError.new(dart.toString(response.statusCode)));
        }
      }).bind(this));
    }
  };
  (photos_provider.PhotoProvider.new = function() {
    this[_baseUrl] = "https://picsum.photos/v2";
    this[_client] = client.Client.new();
    ;
  }).prototype = photos_provider.PhotoProvider.prototype;
  dart.addTypeTests(photos_provider.PhotoProvider);
  dart.setMethodSignature(photos_provider.PhotoProvider, () => ({
    __proto__: dart.getMethods(photos_provider.PhotoProvider.__proto__),
    fetchPhoto: dart.fnType(async.Future$(photo.Photo), [], {height: dart.dynamic, photoId: core.String, width: core.int}),
    fetchPhotos: dart.fnType(async.Future$(list.BuiltList$(photo.Photo)), [], {page: core.int})
  }));
  dart.setLibraryUri(photos_provider.PhotoProvider, "package:flutter_web_demo/networking/photos_provider.dart");
  dart.setFieldSignature(photos_provider.PhotoProvider, () => ({
    __proto__: dart.getFields(photos_provider.PhotoProvider.__proto__),
    [_baseUrl]: dart.finalFieldType(core.String),
    [_client]: dart.finalFieldType(client.Client)
  }));
  dart.trackLibraries("packages/flutter_web_demo/networking/photos_provider", {
    "package:flutter_web_demo/networking/photos_provider.dart": photos_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["photos_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWqB;UACH;UACJ;AAHY;AAKhB,wBAAW,MAAM,AAAQ,kBACS,SAApC,kBAAQ,kBAAK,OAAO,mBAAE,KAAK,mBAAE,MAAM;QAEvC,WAAM,AAAoC,0BAArB,AAAS,QAAD;AAC7B,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,gBAAO,yDAA0B,AAAS,QAAD;;UAEzC,WAAM,+BAA+B,cAApB,AAAS,QAAD;;MAE7B;;;UAGgB;AADoB;AAG5B,wBAAW,MAAM,AAAQ,kBACO,SAAlC,kBAAQ,yBAAY,IAAI;QAE5B,WAAM,AAAqC,2BAArB,AAAS,QAAD;AAC9B,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,gBAAO,gEAAiC,AAAS,QAAD;;UAEhD,WAAM,+BAA+B,cAApB,AAAS,QAAD;;MAE7B;;;;IA/BM,iBAAW;IACX,gBAAU;;EA+BlB","file":"photos_provider.ddc.js"}');
  // Exports:
  return {
    networking__photos_provider: photos_provider
  };
});

//# sourceMappingURL=photos_provider.ddc.js.map
