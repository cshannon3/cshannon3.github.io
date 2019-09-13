define(['dart_sdk', 'packages/built_value/serializer', 'packages/built_collection/built_collection', 'packages/built_value/standard_json_plugin', 'packages/built_value/built_value'], function(dart_sdk, packages__built_value__serializer, packages__built_collection__built_collection, packages__built_value__standard_json_plugin, packages__built_value__built_value) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const serializer = packages__built_value__serializer.serializer;
  const list = packages__built_collection__built_collection.src__list;
  const standard_json_plugin = packages__built_value__standard_json_plugin.standard_json_plugin;
  const built_value = packages__built_value__built_value.built_value;
  const models = Object.create(dart.library);
  const serializers = Object.create(dart.library);
  const photo = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.wrapType(photo.Photo);
    },
    get C2() {
      return C2 = dart.wrapType(photo._$Photo);
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C2 || CT.C2], core.Type);
    },
    get C4() {
      return C4 = dart.constList([], serializer.FullType);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: serializer.FullType.prototype,
        parameters: C4 || CT.C4,
        root: null
      });
    },
    get C6() {
      return C6 = dart.wrapType(core.String);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: serializer.FullType.prototype,
        parameters: C4 || CT.C4,
        root: C6 || CT.C6
      });
    },
    get C8() {
      return C8 = dart.wrapType(core.int);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: serializer.FullType.prototype,
        parameters: C4 || CT.C4,
        root: C8 || CT.C8
      });
    }
  });
  serializers.deserialize = function deserialize(T, value) {
    return serializers.serializers.deserializeWith(T, serializer.Serializer$(T)._check(serializers.serializers.serializerForType(dart.wrapType(T))), value);
  };
  serializers.deserializeListOf = function deserializeListOf(T, items) {
    return list.BuiltList$(T).from(core.Iterable._check(dart.dsend(dart.dsend(items, 'map', [dart.fn(item => serializers.deserialize(T, item), dart.fnType(T, [dart.dynamic]))]), 'toList', [], {growable: false})));
  };
  dart.defineLazy(serializers, {
    /*serializers.serializers*/get serializers() {
      let t0;
      return (t0 = serializers._$serializers.toBuilder(), t0.addPlugin(new standard_json_plugin.StandardJsonPlugin.new()), t0).build();
    },
    /*serializers._$serializers*/get _$serializers() {
      let t0;
      return (t0 = serializer.Serializers.new().toBuilder(), t0.add(photo.Photo.serializer), t0).build();
    },
    set _$serializers(_) {}
  });
  photo.Photo = class Photo extends core.Object {
    toJson() {
      return convert.json.encode(serializers.serializers.serializeWith(photo.Photo, photo.Photo.serializer, this));
    }
    static fromJson(jsonString) {
      return serializers.serializers.deserializeWith(photo.Photo, photo.Photo.serializer, convert.json.decode(jsonString));
    }
    static get serializer() {
      return photo._$photoSerializer;
    }
    static parsePhoto(responseBody) {
      return photo.Photo.fromJson(responseBody);
    }
    static parseListOfPhotos(responseBody) {
      let parsed = dart.dgsend(convert.json.decode(responseBody), [MapOfString$dynamic()], 'cast', []);
      return serializers.deserializeListOf(photo.Photo, parsed);
    }
    computedImageUrl() {
      return "https://picsum.photos/id/" + dart.str(this.id) + "/400/400";
    }
  };
  (photo.Photo.__ = function() {
    ;
  }).prototype = photo.Photo.prototype;
  dart.addTypeTests(photo.Photo);
  photo.Photo[dart.implements] = () => [built_value.Built$(photo.Photo, photo.PhotoBuilder)];
  dart.setMethodSignature(photo.Photo, () => ({
    __proto__: dart.getMethods(photo.Photo.__proto__),
    toJson: dart.fnType(core.String, []),
    computedImageUrl: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(photo.Photo, "package:flutter_web_demo/models/photo.dart");
  let C1;
  let C2;
  let C0;
  let C4;
  let C3;
  let C6;
  let C5;
  let C8;
  let C7;
  photo._$PhotoSerializer = class _$PhotoSerializer extends core.Object {
    serialize(serializers, object, opts) {
      photo.Photo._check(object);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C3 || CT.C3;
      let result = JSArrayOfObject().of(["id", serializers.serialize(object.id, {specifiedType: C5 || CT.C5}), "author", serializers.serialize(object.author, {specifiedType: C5 || CT.C5}), "width", serializers.serialize(object.width, {specifiedType: C7 || CT.C7}), "height", serializers.serialize(object.height, {specifiedType: C7 || CT.C7}), "url", serializers.serialize(object.url, {specifiedType: C5 || CT.C5}), "download_url", serializers.serialize(object.imageUrl, {specifiedType: C5 || CT.C5})]);
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C3 || CT.C3;
      let result = new photo.PhotoBuilder.new();
      let iterator = serialized[$iterator];
      while (dart.test(iterator.moveNext())) {
        let key = core.String.as(iterator.current);
        iterator.moveNext();
        let value = iterator.current;
        switch (key) {
          case "id":
          {
            result.id = core.String.as(serializers.deserialize(value, {specifiedType: C5 || CT.C5}));
            break;
          }
          case "author":
          {
            result.author = core.String.as(serializers.deserialize(value, {specifiedType: C5 || CT.C5}));
            break;
          }
          case "width":
          {
            result.width = core.int.as(serializers.deserialize(value, {specifiedType: C7 || CT.C7}));
            break;
          }
          case "height":
          {
            result.height = core.int.as(serializers.deserialize(value, {specifiedType: C7 || CT.C7}));
            break;
          }
          case "url":
          {
            result.url = core.String.as(serializers.deserialize(value, {specifiedType: C5 || CT.C5}));
            break;
          }
          case "download_url":
          {
            result.imageUrl = core.String.as(serializers.deserialize(value, {specifiedType: C5 || CT.C5}));
            break;
          }
        }
      }
      return result.build();
    }
  };
  (photo._$PhotoSerializer.new = function() {
    this.types = C0 || CT.C0;
    this.wireName = "Photo";
    ;
  }).prototype = photo._$PhotoSerializer.prototype;
  dart.addTypeTests(photo._$PhotoSerializer);
  photo._$PhotoSerializer[dart.implements] = () => [serializer.StructuredSerializer$(photo.Photo)];
  dart.setMethodSignature(photo._$PhotoSerializer, () => ({
    __proto__: dart.getMethods(photo._$PhotoSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(core.Object), [serializer.Serializers, core.Object], {specifiedType: serializer.FullType}),
    deserialize: dart.fnType(photo.Photo, [serializer.Serializers, core.Iterable$(core.Object)], {specifiedType: serializer.FullType})
  }));
  dart.setLibraryUri(photo._$PhotoSerializer, "package:flutter_web_demo/models/photo.dart");
  dart.setFieldSignature(photo._$PhotoSerializer, () => ({
    __proto__: dart.getFields(photo._$PhotoSerializer.__proto__),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  photo._$Photo = class _$Photo extends photo.Photo {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get author() {
      return this[author$];
    }
    set author(value) {
      super.author = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    static new(updates) {
      let t0;
      if (updates === void 0) updates = null;
      return (t0 = new photo.PhotoBuilder.new(), t0.update(updates), t0).build();
    }
    rebuild(updates) {
      let t0;
      return (t0 = this.toBuilder(), t0.update(updates), t0).build();
    }
    toBuilder() {
      let t0;
      t0 = new photo.PhotoBuilder.new();
      t0.replace(this);
      return t0;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      return photo.Photo.is(other) && this.id == other.id && this.author == other.author && this.width == other.width && this.height == other.height && this.url == other.url && this.imageUrl == other.imageUrl;
    }
    get hashCode() {
      return built_value.$jf(built_value.$jc(built_value.$jc(built_value.$jc(built_value.$jc(built_value.$jc(built_value.$jc(0, dart.hashCode(this.id)), dart.hashCode(this.author)), dart.hashCode(this.width)), dart.hashCode(this.height)), dart.hashCode(this.url)), dart.hashCode(this.imageUrl)));
    }
    toString() {
      let t0;
      return dart.toString((t0 = built_value.newBuiltValueToStringHelper("Photo"), t0.add("id", this.id), t0.add("author", this.author), t0.add("width", this.width), t0.add("height", this.height), t0.add("url", this.url), t0.add("imageUrl", this.imageUrl), t0));
    }
  };
  (photo._$Photo.__ = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let author = opts && 'author' in opts ? opts.author : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
    this[id$] = id;
    this[author$] = author;
    this[width$] = width;
    this[height$] = height;
    this[url$] = url;
    this[imageUrl$] = imageUrl;
    photo._$Photo.__proto__.__.call(this);
    if (this.id == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "id"));
    }
    if (this.author == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "author"));
    }
    if (this.width == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "width"));
    }
    if (this.height == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "height"));
    }
    if (this.url == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "url"));
    }
    if (this.imageUrl == null) {
      dart.throw(new built_value.BuiltValueNullFieldError.new("Photo", "imageUrl"));
    }
  }).prototype = photo._$Photo.prototype;
  dart.addTypeTests(photo._$Photo);
  const id$ = Symbol("_$Photo.id");
  const author$ = Symbol("_$Photo.author");
  const width$ = Symbol("_$Photo.width");
  const height$ = Symbol("_$Photo.height");
  const url$ = Symbol("_$Photo.url");
  const imageUrl$ = Symbol("_$Photo.imageUrl");
  dart.setMethodSignature(photo._$Photo, () => ({
    __proto__: dart.getMethods(photo._$Photo.__proto__),
    rebuild: dart.fnType(photo.Photo, [dart.fnType(dart.void, [photo.PhotoBuilder])]),
    toBuilder: dart.fnType(photo.PhotoBuilder, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(photo._$Photo, "package:flutter_web_demo/models/photo.dart");
  dart.setFieldSignature(photo._$Photo, () => ({
    __proto__: dart.getFields(photo._$Photo.__proto__),
    id: dart.finalFieldType(core.String),
    author: dart.finalFieldType(core.String),
    width: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.int),
    url: dart.finalFieldType(core.String),
    imageUrl: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(photo._$Photo, ['_equals', 'toString']);
  dart.defineExtensionAccessors(photo._$Photo, ['hashCode']);
  const _$v = dart.privateName(photo, "_$v");
  const _id = dart.privateName(photo, "_id");
  const _author = dart.privateName(photo, "_author");
  const _width = dart.privateName(photo, "_width");
  const _height = dart.privateName(photo, "_height");
  const _url = dart.privateName(photo, "_url");
  const _imageUrl = dart.privateName(photo, "_imageUrl");
  const _$this = dart.privateName(photo, "_$this");
  photo.PhotoBuilder = class PhotoBuilder extends core.Object {
    get id() {
      return this[_$this][_id];
    }
    set id(id) {
      return this[_$this][_id] = id;
    }
    get author() {
      return this[_$this][_author];
    }
    set author(author) {
      return this[_$this][_author] = author;
    }
    get width() {
      return this[_$this][_width];
    }
    set width(width) {
      return this[_$this][_width] = width;
    }
    get height() {
      return this[_$this][_height];
    }
    set height(height) {
      return this[_$this][_height] = height;
    }
    get url() {
      return this[_$this][_url];
    }
    set url(url) {
      return this[_$this][_url] = url;
    }
    get imageUrl() {
      return this[_$this][_imageUrl];
    }
    set imageUrl(imageUrl) {
      return this[_$this][_imageUrl] = imageUrl;
    }
    get [_$this]() {
      if (this[_$v] != null) {
        this[_id] = this[_$v].id;
        this[_author] = this[_$v].author;
        this[_width] = this[_$v].width;
        this[_height] = this[_$v].height;
        this[_url] = this[_$v].url;
        this[_imageUrl] = this[_$v].imageUrl;
        this[_$v] = null;
      }
      return this;
    }
    replace(other) {
      photo.Photo._check(other);
      if (other == null) {
        dart.throw(new core.ArgumentError.notNull("other"));
      }
      this[_$v] = photo._$Photo.as(other);
    }
    update(updates) {
      if (updates != null) updates(this);
    }
    build() {
      let t0;
      let _$result = (t0 = this[_$v], t0 == null ? new photo._$Photo.__({id: this.id, author: this.author, width: this.width, height: this.height, url: this.url, imageUrl: this.imageUrl}) : t0);
      this.replace(_$result);
      return _$result;
    }
  };
  (photo.PhotoBuilder.new = function() {
    this[_$v] = null;
    this[_id] = null;
    this[_author] = null;
    this[_width] = null;
    this[_height] = null;
    this[_url] = null;
    this[_imageUrl] = null;
    ;
  }).prototype = photo.PhotoBuilder.prototype;
  dart.addTypeTests(photo.PhotoBuilder);
  photo.PhotoBuilder[dart.implements] = () => [built_value.Builder$(photo.Photo, photo.PhotoBuilder)];
  dart.setMethodSignature(photo.PhotoBuilder, () => ({
    __proto__: dart.getMethods(photo.PhotoBuilder.__proto__),
    replace: dart.fnType(dart.void, [core.Object]),
    update: dart.fnType(dart.void, [dart.fnType(dart.void, [photo.PhotoBuilder])]),
    build: dart.fnType(photo._$Photo, [])
  }));
  dart.setGetterSignature(photo.PhotoBuilder, () => ({
    __proto__: dart.getGetters(photo.PhotoBuilder.__proto__),
    id: core.String,
    author: core.String,
    width: core.int,
    height: core.int,
    url: core.String,
    imageUrl: core.String,
    [_$this]: photo.PhotoBuilder
  }));
  dart.setSetterSignature(photo.PhotoBuilder, () => ({
    __proto__: dart.getSetters(photo.PhotoBuilder.__proto__),
    id: core.String,
    author: core.String,
    width: core.int,
    height: core.int,
    url: core.String,
    imageUrl: core.String
  }));
  dart.setLibraryUri(photo.PhotoBuilder, "package:flutter_web_demo/models/photo.dart");
  dart.setFieldSignature(photo.PhotoBuilder, () => ({
    __proto__: dart.getFields(photo.PhotoBuilder.__proto__),
    [_$v]: dart.fieldType(photo._$Photo),
    [_id]: dart.fieldType(core.String),
    [_author]: dart.fieldType(core.String),
    [_width]: dart.fieldType(core.int),
    [_height]: dart.fieldType(core.int),
    [_url]: dart.fieldType(core.String),
    [_imageUrl]: dart.fieldType(core.String)
  }));
  dart.defineLazy(photo, {
    /*photo._$photoSerializer*/get _$photoSerializer() {
      return new photo._$PhotoSerializer.new();
    },
    set _$photoSerializer(_) {}
  });
  dart.trackLibraries("packages/flutter_web_demo/models/models", {
    "package:flutter_web_demo/models/models.dart": models,
    "package:flutter_web_demo/models/serializers.dart": serializers,
    "package:flutter_web_demo/models/photo.dart": photo
  }, {
    "package:flutter_web_demo/models/serializers.dart": ["serializers.g.dart"],
    "package:flutter_web_demo/models/photo.dart": ["photo.g.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["serializers.dart","serializers.g.dart","photo.dart","photo.g.dart"],"names":[],"mappings":"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","file":"models.ddc.js"}');
  // Exports:
  return {
    models__models: models,
    models__serializers: serializers,
    models__photo: photo
  };
});

//# sourceMappingURL=models.ddc.js.map
