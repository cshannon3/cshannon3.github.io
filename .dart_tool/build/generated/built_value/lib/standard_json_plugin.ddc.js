define(['dart_sdk', 'packages/built_collection/built_collection', 'packages/built_value/json_object', 'packages/built_value/serializer'], function(dart_sdk, packages__built_collection__built_collection, packages__built_value__json_object, packages__built_value__serializer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const list = packages__built_collection__built_collection.src__list;
  const set = packages__built_collection__built_collection.src__set;
  const map = packages__built_collection__built_collection.src__map;
  const list_multimap = packages__built_collection__built_collection.src__list_multimap;
  const set_multimap = packages__built_collection__built_collection.src__set_multimap;
  const json_object = packages__built_value__json_object.json_object;
  const serializer = packages__built_value__serializer.serializer;
  const standard_json_plugin = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $truncate = dartx.truncate;
  const $_set = dartx._set;
  const $sublist = dartx.sublist;
  const $forEach = dartx.forEach;
  const $addAll = dartx.addAll;
  const $containsKey = dartx.containsKey;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let BuiltSetOfType = () => (BuiltSetOfType = dart.constFn(set.BuiltSet$(core.Type)))();
  const CT = Object.create(null);
  const _toMapWithDiscriminator = dart.privateName(standard_json_plugin, "_toMapWithDiscriminator");
  const _needsEncodedKeys = dart.privateName(standard_json_plugin, "_needsEncodedKeys");
  const _toMap = dart.privateName(standard_json_plugin, "_toMap");
  const _toListUsingDiscriminator = dart.privateName(standard_json_plugin, "_toListUsingDiscriminator");
  const _toList = dart.privateName(standard_json_plugin, "_toList");
  const _encodeKey = dart.privateName(standard_json_plugin, "_encodeKey");
  const _decodeKey = dart.privateName(standard_json_plugin, "_decodeKey");
  standard_json_plugin.StandardJsonPlugin = class StandardJsonPlugin extends core.Object {
    get discriminator() {
      return this[discriminator$];
    }
    set discriminator(value) {
      super.discriminator = value;
    }
    get valueKey() {
      return this[valueKey$];
    }
    set valueKey(value) {
      super.valueKey = value;
    }
    beforeSerialize(object, specifiedType) {
      if (dart.test(standard_json_plugin.StandardJsonPlugin._unsupportedTypes.contains(specifiedType.root))) {
        dart.throw(new core.ArgumentError.new("Standard JSON cannot serialize type " + dart.str(specifiedType.root) + "."));
      }
      return object;
    }
    afterSerialize(object, specifiedType) {
      if (core.List.is(object) && !dart.equals(specifiedType.root, dart.wrapType(list.BuiltList)) && !dart.equals(specifiedType.root, dart.wrapType(set.BuiltSet)) && !dart.equals(specifiedType.root, dart.wrapType(json_object.JsonObject))) {
        if (dart.test(specifiedType.isUnspecified)) {
          return this[_toMapWithDiscriminator](object);
        } else {
          return this[_toMap](object, this[_needsEncodedKeys](specifiedType));
        }
      } else {
        return object;
      }
    }
    beforeDeserialize(object, specifiedType) {
      if (core.Map.is(object) && !dart.equals(specifiedType.root, dart.wrapType(json_object.JsonObject))) {
        if (dart.test(specifiedType.isUnspecified)) {
          return this[_toListUsingDiscriminator](object);
        } else {
          return this[_toList](object, this[_needsEncodedKeys](specifiedType));
        }
      } else {
        return object;
      }
    }
    afterDeserialize(object, specifiedType) {
      return object;
    }
    [_needsEncodedKeys](specifiedType) {
      return dart.equals(specifiedType.root, dart.wrapType(map.BuiltMap)) && !dart.equals(specifiedType.parameters[$_get](0).root, dart.wrapType(core.String));
    }
    [_toMap](list, needsEncodedKeys) {
      let result = new (IdentityMapOfString$Object()).new();
      for (let i = 0; i !== (dart.notNull(list[$length]) / 2)[$truncate](); i = i + 1) {
        let key = list[$_get](i * 2);
        let value = list[$_get](i * 2 + 1);
        result[$_set](dart.test(needsEncodedKeys) ? this[_encodeKey](key) : core.String.as(key), value);
      }
      return result;
    }
    [_toMapWithDiscriminator](list) {
      let type = list[$_get](0);
      if (dart.equals(type, "list")) {
        return new (IdentityMapOfString$Object()).from([this.discriminator, type, this.valueKey, list[$sublist](1)]);
      }
      if (list[$length] === 2) {
        return new (IdentityMapOfString$Object()).from([this.discriminator, type, this.valueKey, list[$_get](1)]);
      }
      let needToEncodeKeys = false;
      if (dart.equals(type, "map")) {
        for (let i = 0; i !== ((dart.notNull(list[$length]) - 1) / 2)[$truncate](); i = i + 1) {
          if (!(typeof list[$_get](i * 2 + 1) == 'string')) {
            needToEncodeKeys = true;
            type = "encoded_map";
            break;
          }
        }
      }
      let result = new (IdentityMapOfString$Object()).from([this.discriminator, type]);
      for (let i = 0; i !== ((dart.notNull(list[$length]) - 1) / 2)[$truncate](); i = i + 1) {
        let key = needToEncodeKeys ? this[_encodeKey](list[$_get](i * 2 + 1)) : core.String.as(list[$_get](i * 2 + 1));
        let value = list[$_get](i * 2 + 2);
        result[$_set](key, value);
      }
      return result;
    }
    [_encodeKey](key) {
      return convert.json.encode(key);
    }
    [_toList](map, hasEncodedKeys) {
      let result = core.List.new(dart.notNull(map[$length]) * 2);
      let i = 0;
      map[$forEach](dart.fn((key, value) => {
        if (value == null) return;
        result[$_set](i, dart.test(hasEncodedKeys) ? this[_decodeKey](core.String.as(key)) : key);
        result[$_set](i + 1, value);
        i = i + 2;
      }, dynamicAnddynamicToNull()));
      return result;
    }
    [_toListUsingDiscriminator](map) {
      let t0;
      let type = map[$_get](this.discriminator);
      if (type == null) {
        dart.throw(new core.ArgumentError.new("Unknown type on deserialization. " + "Need either specifiedType or discriminator field."));
      }
      if (dart.equals(type, "list")) {
        t0 = [type];
        t0[$addAll](core.Iterable.as(map[$_get](this.valueKey)));
        return t0;
      }
      if (dart.test(map[$containsKey](this.valueKey))) {
        let result = core.List.new(2);
        result[$_set](0, type);
        result[$_set](1, map[$_get](this.valueKey));
        return result;
      }
      let needToDecodeKeys = dart.equals(type, "encoded_map");
      if (needToDecodeKeys) {
        type = "map";
      }
      let result = core.List.new(dart.notNull(map[$length]) * 2 - 1);
      result[$_set](0, type);
      let i = 1;
      map[$forEach](dart.fn((key, value) => {
        if (dart.equals(key, this.discriminator)) return;
        if (value == null) return;
        result[$_set](i, needToDecodeKeys ? this[_decodeKey](core.String.as(key)) : key);
        result[$_set](i + 1, value);
        i = i + 2;
      }, dynamicAnddynamicToNull()));
      return result;
    }
    [_decodeKey](key) {
      return convert.json.decode(key);
    }
  };
  (standard_json_plugin.StandardJsonPlugin.new = function(opts) {
    let discriminator = opts && 'discriminator' in opts ? opts.discriminator : "$";
    let valueKey = opts && 'valueKey' in opts ? opts.valueKey : "";
    this[discriminator$] = discriminator;
    this[valueKey$] = valueKey;
    ;
  }).prototype = standard_json_plugin.StandardJsonPlugin.prototype;
  dart.addTypeTests(standard_json_plugin.StandardJsonPlugin);
  const discriminator$ = Symbol("StandardJsonPlugin.discriminator");
  const valueKey$ = Symbol("StandardJsonPlugin.valueKey");
  standard_json_plugin.StandardJsonPlugin[dart.implements] = () => [serializer.SerializerPlugin];
  dart.setMethodSignature(standard_json_plugin.StandardJsonPlugin, () => ({
    __proto__: dart.getMethods(standard_json_plugin.StandardJsonPlugin.__proto__),
    beforeSerialize: dart.fnType(core.Object, [core.Object, serializer.FullType]),
    afterSerialize: dart.fnType(core.Object, [core.Object, serializer.FullType]),
    beforeDeserialize: dart.fnType(core.Object, [core.Object, serializer.FullType]),
    afterDeserialize: dart.fnType(core.Object, [core.Object, serializer.FullType]),
    [_needsEncodedKeys]: dart.fnType(core.bool, [serializer.FullType]),
    [_toMap]: dart.fnType(core.Map, [core.List, core.bool]),
    [_toMapWithDiscriminator]: dart.fnType(core.Map, [core.List]),
    [_encodeKey]: dart.fnType(core.String, [core.Object]),
    [_toList]: dart.fnType(core.List, [core.Map, core.bool]),
    [_toListUsingDiscriminator]: dart.fnType(core.List, [core.Map]),
    [_decodeKey]: dart.fnType(core.Object, [core.String])
  }));
  dart.setLibraryUri(standard_json_plugin.StandardJsonPlugin, "package:built_value/standard_json_plugin.dart");
  dart.setFieldSignature(standard_json_plugin.StandardJsonPlugin, () => ({
    __proto__: dart.getFields(standard_json_plugin.StandardJsonPlugin.__proto__),
    discriminator: dart.finalFieldType(core.String),
    valueKey: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(standard_json_plugin.StandardJsonPlugin, {
    /*standard_json_plugin.StandardJsonPlugin._unsupportedTypes*/get _unsupportedTypes() {
      return BuiltSetOfType().new([dart.wrapType(list_multimap.BuiltListMultimap), dart.wrapType(set_multimap.BuiltSetMultimap)]);
    }
  });
  dart.trackLibraries("packages/built_value/standard_json_plugin", {
    "package:built_value/standard_json_plugin.dart": standard_json_plugin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["standard_json_plugin.dart"],"names":[],"mappings":"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","file":"standard_json_plugin.ddc.js"}');
  // Exports:
  return {
    standard_json_plugin: standard_json_plugin
  };
});

//# sourceMappingURL=standard_json_plugin.ddc.js.map
