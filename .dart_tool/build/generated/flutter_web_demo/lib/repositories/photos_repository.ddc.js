define(['dart_sdk', 'packages/flutter_web_demo/networking/photos_provider', 'packages/flutter_web_demo/networking/photo_error', 'packages/built_collection/built_collection', 'packages/flutter_web_demo/models/models'], function(dart_sdk, packages__flutter_web_demo__networking__photos_provider, packages__flutter_web_demo__networking__photo_error, packages__built_collection__built_collection, packages__flutter_web_demo__models__models) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const photos_provider = packages__flutter_web_demo__networking__photos_provider.networking__photos_provider;
  const photo_error = packages__flutter_web_demo__networking__photo_error.networking__photo_error;
  const list = packages__built_collection__built_collection.src__list;
  const photo = packages__flutter_web_demo__models__models.models__photo;
  const photos_repository = Object.create(dart.library);
  let BuiltListOfPhoto = () => (BuiltListOfPhoto = dart.constFn(list.BuiltList$(photo.Photo)))();
  const CT = Object.create(null);
  const _photoProvider = dart.privateName(photos_repository, "_photoProvider");
  photos_repository.PhotoRepository = class PhotoRepository extends core.Object {
    fetchPhotos(opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      return async.async(BuiltListOfPhoto(), (function* fetchPhotos() {
        try {
          let photos = (yield this[_photoProvider].fetchPhotos({page: page}));
          return photos;
        } catch (e) {
          let error = dart.getThrown(e);
          if (photo_error.PhotoError.is(error)) {
            dart.throw("Cannot fetch photos: \n" + dart.str(error.message));
          } else
            throw e;
        }
      }).bind(this));
    }
    fetchQuestionnaire(opts) {
      let photoId = opts && 'photoId' in opts ? opts.photoId : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return async.async(photo.Photo, (function* fetchQuestionnaire() {
        try {
          let photo = this[_photoProvider].fetchPhoto({photoId: photoId, width: width, height: height});
          return photo;
        } catch (e) {
          let error = dart.getThrown(e);
          if (photo_error.PhotoError.is(error)) {
            dart.throw("Cannot fetch photo with id: \n" + dart.str(error.message));
          } else
            throw e;
        }
      }).bind(this));
    }
  };
  (photos_repository.PhotoRepository.new = function() {
    this[_photoProvider] = new photos_provider.PhotoProvider.new();
    ;
  }).prototype = photos_repository.PhotoRepository.prototype;
  dart.addTypeTests(photos_repository.PhotoRepository);
  dart.setMethodSignature(photos_repository.PhotoRepository, () => ({
    __proto__: dart.getMethods(photos_repository.PhotoRepository.__proto__),
    fetchPhotos: dart.fnType(async.Future$(list.BuiltList$(photo.Photo)), [], {page: core.int}),
    fetchQuestionnaire: dart.fnType(async.Future$(photo.Photo), [], {height: core.int, photoId: core.String, width: core.int})
  }));
  dart.setLibraryUri(photos_repository.PhotoRepository, "package:flutter_web_demo/repositories/photos_repository.dart");
  dart.setFieldSignature(photos_repository.PhotoRepository, () => ({
    __proto__: dart.getFields(photos_repository.PhotoRepository.__proto__),
    [_photoProvider]: dart.finalFieldType(photos_provider.PhotoProvider)
  }));
  dart.trackLibraries("packages/flutter_web_demo/repositories/photos_repository", {
    "package:flutter_web_demo/repositories/photos_repository.dart": photos_repository
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["photos_repository.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;UAUkB;AADoB;;AAI1B,wBAAS,MAAM,AAAe,wCAC5B,IAAI;AAEZ,gBAAO,OAAM;;cACQ;AAArB;YACA,WAAO,AAAyC,qCAAf,AAAM,KAAD;;;;MAE1C;;;UAGmB;UACH;UACA;AAHgB;;AAMtB,sBAAQ,AAAe,0CAClB,OAAO,SACT,KAAK,UACJ,MAAM;AAEhB,gBAAO,MAAK;;cACS;AAArB;YACA,WAAO,AAAgD,4CAAf,AAAM,KAAD;;;;MAEjD;;;;IA9BM,uBAAiB;;EA+BzB","file":"photos_repository.ddc.js"}');
  // Exports:
  return {
    repositories__photos_repository: photos_repository
  };
});

//# sourceMappingURL=photos_repository.ddc.js.map
