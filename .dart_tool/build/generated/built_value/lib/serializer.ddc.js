define(['dart_sdk', 'packages/built_collection/built_collection', 'packages/quiver/core', 'packages/built_value/json_object', 'packages/fixnum/fixnum'], function(dart_sdk, packages__built_collection__built_collection, packages__quiver__core, packages__built_value__json_object, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const list = packages__built_collection__built_collection.src__list;
  const list_multimap = packages__built_collection__built_collection.src__list_multimap;
  const map = packages__built_collection__built_collection.src__map;
  const set = packages__built_collection__built_collection.src__set;
  const set_multimap = packages__built_collection__built_collection.src__set_multimap;
  const core$ = packages__quiver__core.core;
  const json_object = packages__built_value__json_object.json_object;
  const fixnum = packages__fixnum__fixnum.fixnum;
  const built_list_multimap_serializer = Object.create(dart.library);
  const serializer$ = Object.create(dart.library);
  const string_serializer = Object.create(dart.library);
  const regexp_serializer = Object.create(dart.library);
  const int_serializer = Object.create(dart.library);
  const double_serializer = Object.create(dart.library);
  const built_set_serializer = Object.create(dart.library);
  const built_set_multimap_serializer = Object.create(dart.library);
  const built_map_serializer = Object.create(dart.library);
  const built_list_serializer = Object.create(dart.library);
  const built_json_serializers = Object.create(dart.library);
  const bool_serializer = Object.create(dart.library);
  const uri_serializer = Object.create(dart.library);
  const num_serializer = Object.create(dart.library);
  const json_object_serializer = Object.create(dart.library);
  const int64_serializer = Object.create(dart.library);
  const duration_serializer = Object.create(dart.library);
  const date_time_serializer = Object.create(dart.library);
  const big_int_serializer = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $elementAt = dartx.elementAt;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $replaceRange = dartx.replaceRange;
  const $isNaN = dartx.isNaN;
  const $isInfinite = dartx.isInfinite;
  const $isNegative = dartx.isNegative;
  const $toDouble = dartx.toDouble;
  const $map = dartx.map;
  const $first = dartx.first;
  const $addAll = dartx.addAll;
  const $sublist = dartx.sublist;
  const $forEach = dartx.forEach;
  let BuiltListOfType = () => (BuiltListOfType = dart.constFn(list.BuiltList$(core.Type)))();
  let BuiltListMultimapOfObject$Object = () => (BuiltListMultimapOfObject$Object = dart.constFn(list_multimap.BuiltListMultimap$(core.Object, core.Object)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let dynamicToObject = () => (dynamicToObject = dart.constFn(dart.fnType(core.Object, [dart.dynamic])))();
  let ListMultimapBuilderOfObject$Object = () => (ListMultimapBuilderOfObject$Object = dart.constFn(list_multimap.ListMultimapBuilder$(core.Object, core.Object)))();
  let ListBuilderOfObject = () => (ListBuilderOfObject = dart.constFn(list.ListBuilder$(core.Object)))();
  let VoidToListBuilderOfObject = () => (VoidToListBuilderOfObject = dart.constFn(dart.fnType(ListBuilderOfObject(), [])))();
  let VoidToListMultimapBuilderOfObject$Object = () => (VoidToListMultimapBuilderOfObject$Object = dart.constFn(dart.fnType(ListMultimapBuilderOfObject$Object(), [])))();
  let MapBuilderOfObject$Object = () => (MapBuilderOfObject$Object = dart.constFn(map.MapBuilder$(core.Object, core.Object)))();
  let VoidToMapBuilderOfObject$Object = () => (VoidToMapBuilderOfObject$Object = dart.constFn(dart.fnType(MapBuilderOfObject$Object(), [])))();
  let SetBuilderOfObject = () => (SetBuilderOfObject = dart.constFn(set.SetBuilder$(core.Object)))();
  let VoidToSetBuilderOfObject = () => (VoidToSetBuilderOfObject = dart.constFn(dart.fnType(SetBuilderOfObject(), [])))();
  let SetMultimapBuilderOfObject$Object = () => (SetMultimapBuilderOfObject$Object = dart.constFn(set_multimap.SetMultimapBuilder$(core.Object, core.Object)))();
  let VoidToSetMultimapBuilderOfObject$Object = () => (VoidToSetMultimapBuilderOfObject$Object = dart.constFn(dart.fnType(SetMultimapBuilderOfObject$Object(), [])))();
  let BuiltSetOfObject = () => (BuiltSetOfObject = dart.constFn(set.BuiltSet$(core.Object)))();
  let BuiltSetOfType = () => (BuiltSetOfType = dart.constFn(set.BuiltSet$(core.Type)))();
  let BuiltMapOfObject$Object = () => (BuiltMapOfObject$Object = dart.constFn(map.BuiltMap$(core.Object, core.Object)))();
  let BuiltListOfObject = () => (BuiltListOfObject = dart.constFn(list.BuiltList$(core.Object)))();
  let MapBuilderOfType$Serializer = () => (MapBuilderOfType$Serializer = dart.constFn(map.MapBuilder$(core.Type, serializer$.Serializer)))();
  let MapBuilderOfString$Serializer = () => (MapBuilderOfString$Serializer = dart.constFn(map.MapBuilder$(core.String, serializer$.Serializer)))();
  let MapBuilderOfFullType$Function = () => (MapBuilderOfFullType$Function = dart.constFn(map.MapBuilder$(serializer$.FullType, core.Function)))();
  let ListBuilderOfSerializerPlugin = () => (ListBuilderOfSerializerPlugin = dart.constFn(list.ListBuilder$(serializer$.SerializerPlugin)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], serializer$.FullType);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C1 || CT.C1,
        root: null
      });
    },
    get C5() {
      return C5 = dart.wrapType(core.Object);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C1 || CT.C1,
        root: C5 || CT.C5
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], serializer$.FullType);
    },
    get C6() {
      return C6 = dart.wrapType(list.BuiltList);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C3 || CT.C3,
        root: C6 || CT.C6
      });
    },
    get C8() {
      return C8 = dart.constList([C4 || CT.C4, C4 || CT.C4], serializer$.FullType);
    },
    get C9() {
      return C9 = dart.wrapType(list_multimap.BuiltListMultimap);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C8 || CT.C8,
        root: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.wrapType(map.BuiltMap);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C8 || CT.C8,
        root: C11 || CT.C11
      });
    },
    get C13() {
      return C13 = dart.wrapType(set.BuiltSet);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C3 || CT.C3,
        root: C13 || CT.C13
      });
    },
    get C15() {
      return C15 = dart.wrapType(set_multimap.BuiltSetMultimap);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: serializer$.FullType.prototype,
        parameters: C8 || CT.C8,
        root: C15 || CT.C15
      });
    }
  });
  let C1;
  let C0;
  built_list_multimap_serializer.BuiltListMultimapSerializer = class BuiltListMultimapSerializer extends core.Object {
    get structured() {
      return this[structured];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtListMultimap, opts) {
      list_multimap.BuiltListMultimap._check(builtListMultimap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = JSArrayOfObject().of([]);
      for (let key of builtListMultimap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        result[$add](builtListMultimap._get(key).map(core.Object, dart.fn(value => serializers.serialize(value, {specifiedType: valueType}), dynamicToObject()))[$toList]());
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? ListMultimapBuilderOfObject$Object().new() : list_multimap.ListMultimapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let values = dart.dsend(serialized[$elementAt](i + 1), 'map', [dart.fn(value => serializers.deserialize(value, {specifiedType: valueType}), dynamicToObject())]);
        for (let value of core.Iterable._check(values)) {
          result.add(key, value);
        }
      }
      return result.build();
    }
  };
  (built_list_multimap_serializer.BuiltListMultimapSerializer.new = function() {
    this[structured] = true;
    this[types] = BuiltListOfType().new([dart.wrapType(list_multimap.BuiltListMultimap), dart.runtimeType(BuiltListMultimapOfObject$Object().new())]);
    this[wireName] = "listMultimap";
    ;
  }).prototype = built_list_multimap_serializer.BuiltListMultimapSerializer.prototype;
  dart.addTypeTests(built_list_multimap_serializer.BuiltListMultimapSerializer);
  const structured = Symbol("BuiltListMultimapSerializer.structured");
  const types = Symbol("BuiltListMultimapSerializer.types");
  const wireName = Symbol("BuiltListMultimapSerializer.wireName");
  built_list_multimap_serializer.BuiltListMultimapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(list_multimap.BuiltListMultimap)];
  dart.setMethodSignature(built_list_multimap_serializer.BuiltListMultimapSerializer, () => ({
    __proto__: dart.getMethods(built_list_multimap_serializer.BuiltListMultimapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(list_multimap.BuiltListMultimap, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(built_list_multimap_serializer.BuiltListMultimapSerializer, "package:built_value/src/built_list_multimap_serializer.dart");
  dart.setFieldSignature(built_list_multimap_serializer.BuiltListMultimapSerializer, () => ({
    __proto__: dart.getFields(built_list_multimap_serializer.BuiltListMultimapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  serializer$.SerializersFor = class SerializersFor extends core.Object {
    get types() {
      return this[types$];
    }
    set types(value) {
      super.types = value;
    }
  };
  (serializer$.SerializersFor.new = function(types) {
    this[types$] = types;
    ;
  }).prototype = serializer$.SerializersFor.prototype;
  dart.addTypeTests(serializer$.SerializersFor);
  const types$ = Symbol("SerializersFor.types");
  dart.setLibraryUri(serializer$.SerializersFor, "package:built_value/serializer.dart");
  dart.setFieldSignature(serializer$.SerializersFor, () => ({
    __proto__: dart.getFields(serializer$.SerializersFor.__proto__),
    types: dart.finalFieldType(core.List$(core.Type))
  }));
  let C5;
  let C4;
  let C3;
  let C6;
  let C2;
  let C8;
  let C9;
  let C7;
  let C11;
  let C10;
  let C13;
  let C12;
  let C15;
  let C14;
  serializer$.Serializers = class Serializers extends core.Object {
    static new() {
      let t0;
      return (t0 = built_json_serializers.BuiltJsonSerializersBuilder.new(), t0.add(new big_int_serializer.BigIntSerializer.new()), t0.add(new bool_serializer.BoolSerializer.new()), t0.add(new built_list_serializer.BuiltListSerializer.new()), t0.add(new built_list_multimap_serializer.BuiltListMultimapSerializer.new()), t0.add(new built_map_serializer.BuiltMapSerializer.new()), t0.add(new built_set_serializer.BuiltSetSerializer.new()), t0.add(new built_set_multimap_serializer.BuiltSetMultimapSerializer.new()), t0.add(new date_time_serializer.DateTimeSerializer.new()), t0.add(new double_serializer.DoubleSerializer.new()), t0.add(new duration_serializer.DurationSerializer.new()), t0.add(new int_serializer.IntSerializer.new()), t0.add(new int64_serializer.Int64Serializer.new()), t0.add(new json_object_serializer.JsonObjectSerializer.new()), t0.add(new num_serializer.NumSerializer.new()), t0.add(new regexp_serializer.RegExpSerializer.new()), t0.add(new string_serializer.StringSerializer.new()), t0.add(new uri_serializer.UriSerializer.new()), t0.addBuilderFactory(C2 || CT.C2, dart.fn(() => ListBuilderOfObject().new(), VoidToListBuilderOfObject())), t0.addBuilderFactory(C7 || CT.C7, dart.fn(() => ListMultimapBuilderOfObject$Object().new(), VoidToListMultimapBuilderOfObject$Object())), t0.addBuilderFactory(C10 || CT.C10, dart.fn(() => MapBuilderOfObject$Object().new(), VoidToMapBuilderOfObject$Object())), t0.addBuilderFactory(C12 || CT.C12, dart.fn(() => SetBuilderOfObject().new(), VoidToSetBuilderOfObject())), t0.addBuilderFactory(C14 || CT.C14, dart.fn(() => SetMultimapBuilderOfObject$Object().new(), VoidToSetMultimapBuilderOfObject$Object())), t0).build();
    }
  };
  (serializer$.Serializers[dart.mixinNew] = function() {
  }).prototype = serializer$.Serializers.prototype;
  dart.addTypeTests(serializer$.Serializers);
  dart.setLibraryUri(serializer$.Serializers, "package:built_value/serializer.dart");
  serializer$.SerializerPlugin = class SerializerPlugin extends core.Object {};
  (serializer$.SerializerPlugin.new = function() {
    ;
  }).prototype = serializer$.SerializerPlugin.prototype;
  dart.addTypeTests(serializer$.SerializerPlugin);
  dart.setLibraryUri(serializer$.SerializerPlugin, "package:built_value/serializer.dart");
  serializer$.SerializersBuilder = class SerializersBuilder extends core.Object {};
  (serializer$.SerializersBuilder[dart.mixinNew] = function() {
  }).prototype = serializer$.SerializersBuilder.prototype;
  dart.addTypeTests(serializer$.SerializersBuilder);
  dart.setLibraryUri(serializer$.SerializersBuilder, "package:built_value/serializer.dart");
  serializer$.FullType = class FullType extends core.Object {
    get root() {
      return this[root$];
    }
    set root(value) {
      super.root = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get isUnspecified() {
      return this.root == null;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!serializer$.FullType.is(other)) return false;
      if (!dart.equals(this.root, dart.dload(other, 'root'))) return false;
      if (!core.identical(this.parameters[$length], dart.dload(dart.dload(other, 'parameters'), 'length'))) return false;
      for (let i = 0; i !== this.parameters[$length]; i = i + 1) {
        if (!dart.equals(this.parameters[$_get](i), dart.dsend(dart.dload(other, 'parameters'), '_get', [i]))) return false;
      }
      return true;
    }
    get hashCode() {
      return core$.hash2(this.root, core$.hashObjects(this.parameters));
    }
    toString() {
      return dart.test(this.isUnspecified) ? "unspecified" : dart.test(this.parameters[$isEmpty]) ? serializer$.FullType._getRawName(this.root) : dart.str(serializer$.FullType._getRawName(this.root)) + "<" + dart.str(this.parameters[$join](", ")) + ">";
    }
    static _getRawName(type) {
      let name = dart.toString(type);
      let genericsStart = name[$indexOf]("<");
      return genericsStart === -1 ? name : name[$substring](0, genericsStart);
    }
  };
  (serializer$.FullType.new = function(root, parameters) {
    if (parameters === void 0) parameters = C1 || CT.C1;
    this[root$] = root;
    this[parameters$] = parameters;
    ;
  }).prototype = serializer$.FullType.prototype;
  dart.addTypeTests(serializer$.FullType);
  const root$ = Symbol("FullType.root");
  const parameters$ = Symbol("FullType.parameters");
  dart.setGetterSignature(serializer$.FullType, () => ({
    __proto__: dart.getGetters(serializer$.FullType.__proto__),
    isUnspecified: core.bool
  }));
  dart.setLibraryUri(serializer$.FullType, "package:built_value/serializer.dart");
  dart.setFieldSignature(serializer$.FullType, () => ({
    __proto__: dart.getFields(serializer$.FullType.__proto__),
    root: dart.finalFieldType(core.Type),
    parameters: dart.finalFieldType(core.List$(serializer$.FullType))
  }));
  dart.defineExtensionMethods(serializer$.FullType, ['_equals', 'toString']);
  dart.defineExtensionAccessors(serializer$.FullType, ['hashCode']);
  dart.defineLazy(serializer$.FullType, {
    /*serializer$.FullType.unspecified*/get unspecified() {
      return C0 || CT.C0;
    },
    /*serializer$.FullType.object*/get object() {
      return C4 || CT.C4;
    }
  });
  const _is_Serializer_default = Symbol('_is_Serializer_default');
  serializer$.Serializer$ = dart.generic(T => {
    class Serializer extends core.Object {}
    (Serializer.new = function() {
      ;
    }).prototype = Serializer.prototype;
    dart.addTypeTests(Serializer);
    Serializer.prototype[_is_Serializer_default] = true;
    dart.setLibraryUri(Serializer, "package:built_value/serializer.dart");
    return Serializer;
  });
  serializer$.Serializer = serializer$.Serializer$();
  dart.addTypeTests(serializer$.Serializer, _is_Serializer_default);
  const _is_PrimitiveSerializer_default = Symbol('_is_PrimitiveSerializer_default');
  serializer$.PrimitiveSerializer$ = dart.generic(T => {
    class PrimitiveSerializer extends core.Object {}
    (PrimitiveSerializer.new = function() {
      ;
    }).prototype = PrimitiveSerializer.prototype;
    dart.addTypeTests(PrimitiveSerializer);
    PrimitiveSerializer.prototype[_is_PrimitiveSerializer_default] = true;
    PrimitiveSerializer[dart.implements] = () => [serializer$.Serializer$(T)];
    dart.setLibraryUri(PrimitiveSerializer, "package:built_value/serializer.dart");
    return PrimitiveSerializer;
  });
  serializer$.PrimitiveSerializer = serializer$.PrimitiveSerializer$();
  dart.addTypeTests(serializer$.PrimitiveSerializer, _is_PrimitiveSerializer_default);
  const _is_StructuredSerializer_default = Symbol('_is_StructuredSerializer_default');
  serializer$.StructuredSerializer$ = dart.generic(T => {
    class StructuredSerializer extends core.Object {}
    (StructuredSerializer.new = function() {
      ;
    }).prototype = StructuredSerializer.prototype;
    dart.addTypeTests(StructuredSerializer);
    StructuredSerializer.prototype[_is_StructuredSerializer_default] = true;
    StructuredSerializer[dart.implements] = () => [serializer$.Serializer$(T)];
    dart.setLibraryUri(StructuredSerializer, "package:built_value/serializer.dart");
    return StructuredSerializer;
  });
  serializer$.StructuredSerializer = serializer$.StructuredSerializer$();
  dart.addTypeTests(serializer$.StructuredSerializer, _is_StructuredSerializer_default);
  serializer$.DeserializationError = class DeserializationError extends core.Error {
    get json() {
      return this[json$];
    }
    set json(value) {
      super.json = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    static new(json, type, error) {
      let limitedJson = dart.toString(json);
      if (limitedJson.length > 80) {
        limitedJson = limitedJson[$replaceRange](77, limitedJson.length, "...");
      }
      return new serializer$.DeserializationError.__(limitedJson, type, error);
    }
    toString() {
      return "Deserializing '" + dart.str(this.json) + "' to '" + dart.str(this.type) + "' failed due to: " + dart.str(this.error);
    }
  };
  (serializer$.DeserializationError.__ = function(json, type, error) {
    this[json$] = json;
    this[type$] = type;
    this[error$] = error;
    serializer$.DeserializationError.__proto__.new.call(this);
    ;
  }).prototype = serializer$.DeserializationError.prototype;
  dart.addTypeTests(serializer$.DeserializationError);
  const json$ = Symbol("DeserializationError.json");
  const type$ = Symbol("DeserializationError.type");
  const error$ = Symbol("DeserializationError.error");
  dart.setLibraryUri(serializer$.DeserializationError, "package:built_value/serializer.dart");
  dart.setFieldSignature(serializer$.DeserializationError, () => ({
    __proto__: dart.getFields(serializer$.DeserializationError.__proto__),
    json: dart.finalFieldType(core.String),
    type: dart.finalFieldType(serializer$.FullType),
    error: dart.finalFieldType(core.Error)
  }));
  dart.defineExtensionMethods(serializer$.DeserializationError, ['toString']);
  string_serializer.StringSerializer = class StringSerializer extends core.Object {
    get structured() {
      return this[structured$];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$0];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, string, opts) {
      core.String._check(string);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return string;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.String.as(serialized);
    }
  };
  (string_serializer.StringSerializer.new = function() {
    this[structured$] = false;
    this[types$0] = BuiltListOfType().new([dart.wrapType(core.String)]);
    this[wireName$] = "String";
    ;
  }).prototype = string_serializer.StringSerializer.prototype;
  dart.addTypeTests(string_serializer.StringSerializer);
  const structured$ = Symbol("StringSerializer.structured");
  const types$0 = Symbol("StringSerializer.types");
  const wireName$ = Symbol("StringSerializer.wireName");
  string_serializer.StringSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.String)];
  dart.setMethodSignature(string_serializer.StringSerializer, () => ({
    __proto__: dart.getMethods(string_serializer.StringSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.String, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(string_serializer.StringSerializer, "package:built_value/src/string_serializer.dart");
  dart.setFieldSignature(string_serializer.StringSerializer, () => ({
    __proto__: dart.getFields(string_serializer.StringSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  regexp_serializer.RegExpSerializer = class RegExpSerializer extends core.Object {
    get types() {
      return this[types$1];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$0];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, value, opts) {
      core.RegExp._check(value);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return value.pattern;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.RegExp.new(core.String.as(serialized));
    }
  };
  (regexp_serializer.RegExpSerializer.new = function() {
    this[types$1] = BuiltListOfType().new([dart.wrapType(core.RegExp), regexp_serializer._runtimeType]);
    this[wireName$0] = "RegExp";
    ;
  }).prototype = regexp_serializer.RegExpSerializer.prototype;
  dart.addTypeTests(regexp_serializer.RegExpSerializer);
  const types$1 = Symbol("RegExpSerializer.types");
  const wireName$0 = Symbol("RegExpSerializer.wireName");
  regexp_serializer.RegExpSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.RegExp)];
  dart.setMethodSignature(regexp_serializer.RegExpSerializer, () => ({
    __proto__: dart.getMethods(regexp_serializer.RegExpSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.RegExp, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(regexp_serializer.RegExpSerializer, "package:built_value/src/regexp_serializer.dart");
  dart.setFieldSignature(regexp_serializer.RegExpSerializer, () => ({
    __proto__: dart.getFields(regexp_serializer.RegExpSerializer.__proto__),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(regexp_serializer, {
    /*regexp_serializer._runtimeType*/get _runtimeType() {
      return dart.runtimeType(core.RegExp.new(""));
    }
  });
  int_serializer.IntSerializer = class IntSerializer extends core.Object {
    get structured() {
      return this[structured$0];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$2];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$1];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, integer, opts) {
      core.int._check(integer);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return integer;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.int.as(serialized);
    }
  };
  (int_serializer.IntSerializer.new = function() {
    this[structured$0] = false;
    this[types$2] = BuiltListOfType().new([dart.wrapType(core.int)]);
    this[wireName$1] = "int";
    ;
  }).prototype = int_serializer.IntSerializer.prototype;
  dart.addTypeTests(int_serializer.IntSerializer);
  const structured$0 = Symbol("IntSerializer.structured");
  const types$2 = Symbol("IntSerializer.types");
  const wireName$1 = Symbol("IntSerializer.wireName");
  int_serializer.IntSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.int)];
  dart.setMethodSignature(int_serializer.IntSerializer, () => ({
    __proto__: dart.getMethods(int_serializer.IntSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.int, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(int_serializer.IntSerializer, "package:built_value/src/int_serializer.dart");
  dart.setFieldSignature(int_serializer.IntSerializer, () => ({
    __proto__: dart.getFields(int_serializer.IntSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  double_serializer.DoubleSerializer = class DoubleSerializer extends core.Object {
    get structured() {
      return this[structured$1];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$3];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$2];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, aDouble, opts) {
      core.double._check(aDouble);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      if (aDouble[$isNaN]) {
        return double_serializer.DoubleSerializer.nan;
      } else if (aDouble[$isInfinite]) {
        return aDouble[$isNegative] ? double_serializer.DoubleSerializer.negativeInfinity : double_serializer.DoubleSerializer.infinity;
      } else {
        return aDouble;
      }
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      if (dart.equals(serialized, double_serializer.DoubleSerializer.nan)) {
        return 0 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.negativeInfinity)) {
        return -1 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.infinity)) {
        return 1 / 0;
      } else {
        return core.num.as(serialized)[$toDouble]();
      }
    }
  };
  (double_serializer.DoubleSerializer.new = function() {
    this[structured$1] = false;
    this[types$3] = BuiltListOfType().new([dart.wrapType(core.double)]);
    this[wireName$2] = "double";
    ;
  }).prototype = double_serializer.DoubleSerializer.prototype;
  dart.addTypeTests(double_serializer.DoubleSerializer);
  const structured$1 = Symbol("DoubleSerializer.structured");
  const types$3 = Symbol("DoubleSerializer.types");
  const wireName$2 = Symbol("DoubleSerializer.wireName");
  double_serializer.DoubleSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.double)];
  dart.setMethodSignature(double_serializer.DoubleSerializer, () => ({
    __proto__: dart.getMethods(double_serializer.DoubleSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.double, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(double_serializer.DoubleSerializer, "package:built_value/src/double_serializer.dart");
  dart.setFieldSignature(double_serializer.DoubleSerializer, () => ({
    __proto__: dart.getFields(double_serializer.DoubleSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(double_serializer.DoubleSerializer, {
    /*double_serializer.DoubleSerializer.nan*/get nan() {
      return "NaN";
    },
    /*double_serializer.DoubleSerializer.infinity*/get infinity() {
      return "INF";
    },
    /*double_serializer.DoubleSerializer.negativeInfinity*/get negativeInfinity() {
      return "-INF";
    }
  });
  built_set_serializer.BuiltSetSerializer = class BuiltSetSerializer extends core.Object {
    get structured() {
      return this[structured$2];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$4];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$3];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtSet, opts) {
      set.BuiltSet._check(builtSet);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let elementType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      return builtSet.map(dart.dynamic, dart.fn(item => serializers.serialize(item, {specifiedType: elementType}), dynamicToObject()));
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      let elementType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let result = isUnderspecified ? SetBuilderOfObject().new() : set.SetBuilder.as(serializers.newBuilder(specifiedType));
      result.replace(serialized[$map](dart.dynamic, dart.fn(item => serializers.deserialize(item, {specifiedType: elementType}), dynamicToObject())));
      return result.build();
    }
  };
  (built_set_serializer.BuiltSetSerializer.new = function() {
    this[structured$2] = true;
    this[types$4] = BuiltListOfType().new([dart.wrapType(set.BuiltSet), dart.runtimeType(BuiltSetOfObject().new())]);
    this[wireName$3] = "set";
    ;
  }).prototype = built_set_serializer.BuiltSetSerializer.prototype;
  dart.addTypeTests(built_set_serializer.BuiltSetSerializer);
  const structured$2 = Symbol("BuiltSetSerializer.structured");
  const types$4 = Symbol("BuiltSetSerializer.types");
  const wireName$3 = Symbol("BuiltSetSerializer.wireName");
  built_set_serializer.BuiltSetSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(set.BuiltSet)];
  dart.setMethodSignature(built_set_serializer.BuiltSetSerializer, () => ({
    __proto__: dart.getMethods(built_set_serializer.BuiltSetSerializer.__proto__),
    serialize: dart.fnType(core.Iterable, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(set.BuiltSet, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(built_set_serializer.BuiltSetSerializer, "package:built_value/src/built_set_serializer.dart");
  dart.setFieldSignature(built_set_serializer.BuiltSetSerializer, () => ({
    __proto__: dart.getFields(built_set_serializer.BuiltSetSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  built_set_multimap_serializer.BuiltSetMultimapSerializer = class BuiltSetMultimapSerializer extends core.Object {
    get structured() {
      return this[structured$3];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$5];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$4];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtSetMultimap, opts) {
      set_multimap.BuiltSetMultimap._check(builtSetMultimap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = JSArrayOfObject().of([]);
      for (let key of builtSetMultimap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        result[$add](builtSetMultimap._get(key).map(core.Object, dart.fn(value => serializers.serialize(value, {specifiedType: valueType}), dynamicToObject()))[$toList]());
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? SetMultimapBuilderOfObject$Object().new() : set_multimap.SetMultimapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let values = dart.dsend(serialized[$elementAt](i + 1), 'map', [dart.fn(value => serializers.deserialize(value, {specifiedType: valueType}), dynamicToObject())]);
        for (let value of core.Iterable._check(values)) {
          result.add(key, value);
        }
      }
      return result.build();
    }
  };
  (built_set_multimap_serializer.BuiltSetMultimapSerializer.new = function() {
    this[structured$3] = true;
    this[types$5] = BuiltSetOfType().new([dart.wrapType(set_multimap.BuiltSetMultimap)]);
    this[wireName$4] = "setMultimap";
    ;
  }).prototype = built_set_multimap_serializer.BuiltSetMultimapSerializer.prototype;
  dart.addTypeTests(built_set_multimap_serializer.BuiltSetMultimapSerializer);
  const structured$3 = Symbol("BuiltSetMultimapSerializer.structured");
  const types$5 = Symbol("BuiltSetMultimapSerializer.types");
  const wireName$4 = Symbol("BuiltSetMultimapSerializer.wireName");
  built_set_multimap_serializer.BuiltSetMultimapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(set_multimap.BuiltSetMultimap)];
  dart.setMethodSignature(built_set_multimap_serializer.BuiltSetMultimapSerializer, () => ({
    __proto__: dart.getMethods(built_set_multimap_serializer.BuiltSetMultimapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(set_multimap.BuiltSetMultimap, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(built_set_multimap_serializer.BuiltSetMultimapSerializer, "package:built_value/src/built_set_multimap_serializer.dart");
  dart.setFieldSignature(built_set_multimap_serializer.BuiltSetMultimapSerializer, () => ({
    __proto__: dart.getFields(built_set_multimap_serializer.BuiltSetMultimapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  built_map_serializer.BuiltMapSerializer = class BuiltMapSerializer extends core.Object {
    get structured() {
      return this[structured$4];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$6];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$5];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtMap, opts) {
      map.BuiltMap._check(builtMap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = JSArrayOfObject().of([]);
      for (let key of builtMap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        let value = builtMap._get(key);
        result[$add](serializers.serialize(value, {specifiedType: valueType}));
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      let keyType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? MapBuilderOfObject$Object().new() : map.MapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let value = serializers.deserialize(serialized[$elementAt](i + 1), {specifiedType: valueType});
        result._set(key, value);
      }
      return result.build();
    }
  };
  (built_map_serializer.BuiltMapSerializer.new = function() {
    this[structured$4] = true;
    this[types$6] = BuiltListOfType().new([dart.wrapType(map.BuiltMap), dart.runtimeType(BuiltMapOfObject$Object().new())]);
    this[wireName$5] = "map";
    ;
  }).prototype = built_map_serializer.BuiltMapSerializer.prototype;
  dart.addTypeTests(built_map_serializer.BuiltMapSerializer);
  const structured$4 = Symbol("BuiltMapSerializer.structured");
  const types$6 = Symbol("BuiltMapSerializer.types");
  const wireName$5 = Symbol("BuiltMapSerializer.wireName");
  built_map_serializer.BuiltMapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(map.BuiltMap)];
  dart.setMethodSignature(built_map_serializer.BuiltMapSerializer, () => ({
    __proto__: dart.getMethods(built_map_serializer.BuiltMapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(map.BuiltMap, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(built_map_serializer.BuiltMapSerializer, "package:built_value/src/built_map_serializer.dart");
  dart.setFieldSignature(built_map_serializer.BuiltMapSerializer, () => ({
    __proto__: dart.getFields(built_map_serializer.BuiltMapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  built_list_serializer.BuiltListSerializer = class BuiltListSerializer extends core.Object {
    get structured() {
      return this[structured$5];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$7];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$6];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtList, opts) {
      list.BuiltList._check(builtList);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let elementType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      return builtList.map(dart.dynamic, dart.fn(item => serializers.serialize(item, {specifiedType: elementType}), dynamicToObject()));
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let isUnderspecified = dart.test(specifiedType.isUnspecified) || dart.test(specifiedType.parameters[$isEmpty]);
      let elementType = dart.test(specifiedType.parameters[$isEmpty]) ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let result = isUnderspecified ? ListBuilderOfObject().new() : list.ListBuilder.as(serializers.newBuilder(specifiedType));
      result.replace(serialized[$map](dart.dynamic, dart.fn(item => serializers.deserialize(item, {specifiedType: elementType}), dynamicToObject())));
      return result.build();
    }
  };
  (built_list_serializer.BuiltListSerializer.new = function() {
    this[structured$5] = true;
    this[types$7] = BuiltListOfType().new([dart.wrapType(list.BuiltList), dart.runtimeType(BuiltListOfObject().new())]);
    this[wireName$6] = "list";
    ;
  }).prototype = built_list_serializer.BuiltListSerializer.prototype;
  dart.addTypeTests(built_list_serializer.BuiltListSerializer);
  const structured$5 = Symbol("BuiltListSerializer.structured");
  const types$7 = Symbol("BuiltListSerializer.types");
  const wireName$6 = Symbol("BuiltListSerializer.wireName");
  built_list_serializer.BuiltListSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(list.BuiltList)];
  dart.setMethodSignature(built_list_serializer.BuiltListSerializer, () => ({
    __proto__: dart.getMethods(built_list_serializer.BuiltListSerializer.__proto__),
    serialize: dart.fnType(core.Iterable, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(list.BuiltList, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(built_list_serializer.BuiltListSerializer, "package:built_value/src/built_list_serializer.dart");
  dart.setFieldSignature(built_list_serializer.BuiltListSerializer, () => ({
    __proto__: dart.getFields(built_list_serializer.BuiltListSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  const _typeToSerializer$ = dart.privateName(built_json_serializers, "_typeToSerializer");
  const _wireNameToSerializer$ = dart.privateName(built_json_serializers, "_wireNameToSerializer");
  const _typeNameToSerializer$ = dart.privateName(built_json_serializers, "_typeNameToSerializer");
  const _plugins$ = dart.privateName(built_json_serializers, "_plugins");
  const _serialize = dart.privateName(built_json_serializers, "_serialize");
  const _deserialize = dart.privateName(built_json_serializers, "_deserialize");
  const _throwMissingBuilderFactory = dart.privateName(built_json_serializers, "_throwMissingBuilderFactory");
  built_json_serializers.BuiltJsonSerializers = class BuiltJsonSerializers extends core.Object {
    get builderFactories() {
      return this[builderFactories$];
    }
    set builderFactories(value) {
      super.builderFactories = value;
    }
    get serializers() {
      return this[_wireNameToSerializer$].values;
    }
    deserializeWith(T, serializer, serialized) {
      return T.as(this.deserialize(serialized, {specifiedType: new serializer$.FullType.new(serializer.types[$first])}));
    }
    serializeWith(T, serializer, object) {
      return this.serialize(object, {specifiedType: new serializer$.FullType.new(serializer.types[$first])});
    }
    serialize(object, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let transformedObject = object;
      for (let plugin of this[_plugins$]) {
        transformedObject = plugin.beforeSerialize(transformedObject, specifiedType);
      }
      let result = this[_serialize](transformedObject, specifiedType);
      for (let plugin of this[_plugins$]) {
        result = plugin.afterSerialize(result, specifiedType);
      }
      return result;
    }
    [_serialize](object, specifiedType) {
      let t0;
      if (dart.test(specifiedType.isUnspecified)) {
        let serializer = this.serializerForType(dart.runtimeType(object));
        if (serializer == null) {
          dart.throw(new core.StateError.new("No serializer for '" + dart.str(dart.runtimeType(object)) + "'."));
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          let result = JSArrayOfObject().of([serializer.wireName]);
          t0 = result;
          t0[$addAll](serializer.serialize(this, object));
          return t0;
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          return JSArrayOfObject().of([serializer.wireName, serializer.serialize(this, object)]);
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      } else {
        let serializer = this.serializerForType(specifiedType.root);
        if (serializer == null) {
          return this.serialize(object);
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          return serializer.serialize(this, object, {specifiedType: specifiedType})[$toList]();
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          return serializer.serialize(this, object, {specifiedType: specifiedType});
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      }
    }
    deserialize(object, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let transformedObject = object;
      for (let plugin of this[_plugins$]) {
        transformedObject = plugin.beforeDeserialize(transformedObject, specifiedType);
      }
      let result = this[_deserialize](object, transformedObject, specifiedType);
      for (let plugin of this[_plugins$]) {
        result = plugin.afterDeserialize(result, specifiedType);
      }
      return result;
    }
    [_deserialize](objectBeforePlugins, object, specifiedType) {
      if (dart.test(specifiedType.isUnspecified)) {
        let wireName = core.String.as(core.List.as(object)[$first]);
        let serializer = this.serializerForWireName(wireName);
        if (serializer == null) {
          dart.throw(new core.StateError.new("No serializer for '" + dart.str(wireName) + "'."));
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          try {
            return serializer.deserialize(this, core.List.as(object)[$sublist](1));
          } catch (e) {
            let error = dart.getThrown(e);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e;
          }
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          try {
            return serializer.deserialize(this, core.List.as(object)[$_get](1));
          } catch (e$) {
            let error = dart.getThrown(e$);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$;
          }
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      } else {
        let serializer = this.serializerForType(specifiedType.root);
        if (serializer == null) {
          if (core.List.is(object) && typeof object[$first] == 'string') {
            return this.deserialize(objectBeforePlugins);
          } else {
            dart.throw(new core.StateError.new("No serializer for '" + dart.str(specifiedType.root) + "'."));
          }
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          try {
            return serializer.deserialize(this, core.Iterable.as(object), {specifiedType: specifiedType});
          } catch (e$0) {
            let error = dart.getThrown(e$0);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$0;
          }
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          try {
            return serializer.deserialize(this, object, {specifiedType: specifiedType});
          } catch (e$1) {
            let error = dart.getThrown(e$1);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$1;
          }
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      }
    }
    serializerForType(type) {
      let t4;
      t4 = this[_typeToSerializer$]._get(type);
      return t4 == null ? this[_typeNameToSerializer$]._get(built_json_serializers._getRawName(type)) : t4;
    }
    serializerForWireName(wireName) {
      return this[_wireNameToSerializer$]._get(wireName);
    }
    newBuilder(fullType) {
      let builderFactory = this.builderFactories._get(fullType);
      if (builderFactory == null) this[_throwMissingBuilderFactory](fullType);
      return dart.dcall(builderFactory, []);
    }
    expectBuilder(fullType) {
      if (!dart.test(this.hasBuilder(fullType))) this[_throwMissingBuilderFactory](fullType);
    }
    [_throwMissingBuilderFactory](fullType) {
      dart.throw(new core.StateError.new("No builder factory for " + dart.str(fullType) + ". " + "Fix by adding one, see SerializersBuilder.addBuilderFactory."));
    }
    hasBuilder(fullType) {
      return this.builderFactories.containsKey(fullType);
    }
    toBuilder() {
      return new built_json_serializers.BuiltJsonSerializersBuilder.__(this[_typeToSerializer$].toBuilder(), this[_wireNameToSerializer$].toBuilder(), this[_typeNameToSerializer$].toBuilder(), this.builderFactories.toBuilder(), this[_plugins$].toBuilder());
    }
  };
  (built_json_serializers.BuiltJsonSerializers.__ = function(_typeToSerializer, _wireNameToSerializer, _typeNameToSerializer, builderFactories, _plugins) {
    this[_typeToSerializer$] = _typeToSerializer;
    this[_wireNameToSerializer$] = _wireNameToSerializer;
    this[_typeNameToSerializer$] = _typeNameToSerializer;
    this[builderFactories$] = builderFactories;
    this[_plugins$] = _plugins;
    ;
  }).prototype = built_json_serializers.BuiltJsonSerializers.prototype;
  dart.addTypeTests(built_json_serializers.BuiltJsonSerializers);
  const builderFactories$ = Symbol("BuiltJsonSerializers.builderFactories");
  built_json_serializers.BuiltJsonSerializers[dart.implements] = () => [serializer$.Serializers];
  dart.setMethodSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getMethods(built_json_serializers.BuiltJsonSerializers.__proto__),
    deserializeWith: dart.gFnType(T => [T, [serializer$.Serializer$(T), core.Object]]),
    serializeWith: dart.gFnType(T => [core.Object, [serializer$.Serializer$(T), T]]),
    serialize: dart.fnType(core.Object, [core.Object], {specifiedType: serializer$.FullType}),
    [_serialize]: dart.fnType(core.Object, [core.Object, serializer$.FullType]),
    deserialize: dart.fnType(core.Object, [core.Object], {specifiedType: serializer$.FullType}),
    [_deserialize]: dart.fnType(core.Object, [core.Object, core.Object, serializer$.FullType]),
    serializerForType: dart.fnType(serializer$.Serializer, [core.Type]),
    serializerForWireName: dart.fnType(serializer$.Serializer, [core.String]),
    newBuilder: dart.fnType(core.Object, [serializer$.FullType]),
    expectBuilder: dart.fnType(dart.void, [serializer$.FullType]),
    [_throwMissingBuilderFactory]: dart.fnType(dart.void, [serializer$.FullType]),
    hasBuilder: dart.fnType(core.bool, [serializer$.FullType]),
    toBuilder: dart.fnType(serializer$.SerializersBuilder, [])
  }));
  dart.setGetterSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getGetters(built_json_serializers.BuiltJsonSerializers.__proto__),
    serializers: core.Iterable$(serializer$.Serializer)
  }));
  dart.setLibraryUri(built_json_serializers.BuiltJsonSerializers, "package:built_value/src/built_json_serializers.dart");
  dart.setFieldSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getFields(built_json_serializers.BuiltJsonSerializers.__proto__),
    [_typeToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.Type, serializer$.Serializer)),
    [_wireNameToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.String, serializer$.Serializer)),
    [_typeNameToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.String, serializer$.Serializer)),
    builderFactories: dart.finalFieldType(map.BuiltMap$(serializer$.FullType, core.Function)),
    [_plugins$]: dart.finalFieldType(list.BuiltList$(serializer$.SerializerPlugin))
  }));
  const _builderFactories$ = dart.privateName(built_json_serializers, "_builderFactories");
  built_json_serializers.BuiltJsonSerializersBuilder = class BuiltJsonSerializersBuilder extends core.Object {
    static new() {
      return new built_json_serializers.BuiltJsonSerializersBuilder.__(MapBuilderOfType$Serializer().new(), MapBuilderOfString$Serializer().new(), MapBuilderOfString$Serializer().new(), MapBuilderOfFullType$Function().new(), ListBuilderOfSerializerPlugin().new());
    }
    add(serializer) {
      if (!serializer$.StructuredSerializer.is(serializer) && !serializer$.PrimitiveSerializer.is(serializer)) {
        dart.throw(new core.ArgumentError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
      }
      this[_wireNameToSerializer$]._set(serializer.wireName, serializer);
      for (let type of serializer.types) {
        this[_typeToSerializer$]._set(type, serializer);
        this[_typeNameToSerializer$]._set(built_json_serializers._getRawName(type), serializer);
      }
    }
    addAll(serializers) {
      serializers[$forEach](dart.bind(this, 'add'));
    }
    addBuilderFactory(types, func) {
      this[_builderFactories$]._set(types, func);
    }
    addPlugin(plugin) {
      this[_plugins$].add(plugin);
    }
    build() {
      return new built_json_serializers.BuiltJsonSerializers.__(this[_typeToSerializer$].build(), this[_wireNameToSerializer$].build(), this[_typeNameToSerializer$].build(), this[_builderFactories$].build(), this[_plugins$].build());
    }
  };
  (built_json_serializers.BuiltJsonSerializersBuilder.__ = function(_typeToSerializer, _wireNameToSerializer, _typeNameToSerializer, _builderFactories, _plugins) {
    this[_typeToSerializer$] = _typeToSerializer;
    this[_wireNameToSerializer$] = _wireNameToSerializer;
    this[_typeNameToSerializer$] = _typeNameToSerializer;
    this[_builderFactories$] = _builderFactories;
    this[_plugins$] = _plugins;
    ;
  }).prototype = built_json_serializers.BuiltJsonSerializersBuilder.prototype;
  dart.addTypeTests(built_json_serializers.BuiltJsonSerializersBuilder);
  built_json_serializers.BuiltJsonSerializersBuilder[dart.implements] = () => [serializer$.SerializersBuilder];
  dart.setMethodSignature(built_json_serializers.BuiltJsonSerializersBuilder, () => ({
    __proto__: dart.getMethods(built_json_serializers.BuiltJsonSerializersBuilder.__proto__),
    add: dart.fnType(dart.void, [serializer$.Serializer]),
    addAll: dart.fnType(dart.void, [core.Iterable$(serializer$.Serializer)]),
    addBuilderFactory: dart.fnType(dart.void, [serializer$.FullType, core.Function]),
    addPlugin: dart.fnType(dart.void, [serializer$.SerializerPlugin]),
    build: dart.fnType(serializer$.Serializers, [])
  }));
  dart.setLibraryUri(built_json_serializers.BuiltJsonSerializersBuilder, "package:built_value/src/built_json_serializers.dart");
  dart.setFieldSignature(built_json_serializers.BuiltJsonSerializersBuilder, () => ({
    __proto__: dart.getFields(built_json_serializers.BuiltJsonSerializersBuilder.__proto__),
    [_typeToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.Type, serializer$.Serializer)),
    [_wireNameToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.String, serializer$.Serializer)),
    [_typeNameToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.String, serializer$.Serializer)),
    [_builderFactories$]: dart.finalFieldType(map.MapBuilder$(serializer$.FullType, core.Function)),
    [_plugins$]: dart.finalFieldType(list.ListBuilder$(serializer$.SerializerPlugin))
  }));
  built_json_serializers._getRawName = function _getRawName(type) {
    let name = dart.toString(type);
    let genericsStart = name[$indexOf]("<");
    return genericsStart === -1 ? name : name[$substring](0, genericsStart);
  };
  bool_serializer.BoolSerializer = class BoolSerializer extends core.Object {
    get structured() {
      return this[structured$6];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$8];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$7];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, boolean, opts) {
      core.bool._check(boolean);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return boolean;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.bool.as(serialized);
    }
  };
  (bool_serializer.BoolSerializer.new = function() {
    this[structured$6] = false;
    this[types$8] = BuiltListOfType().new([dart.wrapType(core.bool)]);
    this[wireName$7] = "bool";
    ;
  }).prototype = bool_serializer.BoolSerializer.prototype;
  dart.addTypeTests(bool_serializer.BoolSerializer);
  const structured$6 = Symbol("BoolSerializer.structured");
  const types$8 = Symbol("BoolSerializer.types");
  const wireName$7 = Symbol("BoolSerializer.wireName");
  bool_serializer.BoolSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.bool)];
  dart.setMethodSignature(bool_serializer.BoolSerializer, () => ({
    __proto__: dart.getMethods(bool_serializer.BoolSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.bool, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(bool_serializer.BoolSerializer, "package:built_value/src/bool_serializer.dart");
  dart.setFieldSignature(bool_serializer.BoolSerializer, () => ({
    __proto__: dart.getFields(bool_serializer.BoolSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  uri_serializer.UriSerializer = class UriSerializer extends core.Object {
    get structured() {
      return this[structured$7];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$9];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$8];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, uri, opts) {
      core.Uri._check(uri);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return dart.toString(uri);
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.Uri.parse(core.String.as(serialized));
    }
  };
  (uri_serializer.UriSerializer.new = function() {
    this[structured$7] = false;
    this[types$9] = BuiltListOfType().new([dart.wrapType(core.Uri), dart.runtimeType(core.Uri.parse("http://example.com")), dart.runtimeType(core.Uri.parse("http://example.com:"))]);
    this[wireName$8] = "Uri";
    ;
  }).prototype = uri_serializer.UriSerializer.prototype;
  dart.addTypeTests(uri_serializer.UriSerializer);
  const structured$7 = Symbol("UriSerializer.structured");
  const types$9 = Symbol("UriSerializer.types");
  const wireName$8 = Symbol("UriSerializer.wireName");
  uri_serializer.UriSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.Uri)];
  dart.setMethodSignature(uri_serializer.UriSerializer, () => ({
    __proto__: dart.getMethods(uri_serializer.UriSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.Uri, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(uri_serializer.UriSerializer, "package:built_value/src/uri_serializer.dart");
  dart.setFieldSignature(uri_serializer.UriSerializer, () => ({
    __proto__: dart.getFields(uri_serializer.UriSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  num_serializer.NumSerializer = class NumSerializer extends core.Object {
    get structured() {
      return this[structured$8];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$10];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$9];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, number, opts) {
      core.num._check(number);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      if (number[$isNaN]) {
        return double_serializer.DoubleSerializer.nan;
      } else if (number[$isInfinite]) {
        return number[$isNegative] ? double_serializer.DoubleSerializer.negativeInfinity : double_serializer.DoubleSerializer.infinity;
      } else {
        return number;
      }
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      if (dart.equals(serialized, double_serializer.DoubleSerializer.nan)) {
        return 0 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.negativeInfinity)) {
        return -1 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.infinity)) {
        return 1 / 0;
      } else {
        return core.num.as(serialized)[$toDouble]();
      }
    }
  };
  (num_serializer.NumSerializer.new = function() {
    this[structured$8] = false;
    this[types$10] = BuiltListOfType().new([dart.wrapType(core.num)]);
    this[wireName$9] = "num";
    ;
  }).prototype = num_serializer.NumSerializer.prototype;
  dart.addTypeTests(num_serializer.NumSerializer);
  const structured$8 = Symbol("NumSerializer.structured");
  const types$10 = Symbol("NumSerializer.types");
  const wireName$9 = Symbol("NumSerializer.wireName");
  num_serializer.NumSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.num)];
  dart.setMethodSignature(num_serializer.NumSerializer, () => ({
    __proto__: dart.getMethods(num_serializer.NumSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.num, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(num_serializer.NumSerializer, "package:built_value/src/num_serializer.dart");
  dart.setFieldSignature(num_serializer.NumSerializer, () => ({
    __proto__: dart.getFields(num_serializer.NumSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  json_object_serializer.JsonObjectSerializer = class JsonObjectSerializer extends core.Object {
    get structured() {
      return this[structured$9];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$11];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$10];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, jsonObject, opts) {
      json_object.JsonObject._check(jsonObject);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return jsonObject.value;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return json_object.JsonObject.new(serialized);
    }
  };
  (json_object_serializer.JsonObjectSerializer.new = function() {
    this[structured$9] = false;
    this[types$11] = BuiltListOfType().new([dart.wrapType(json_object.JsonObject), dart.wrapType(json_object.BoolJsonObject), dart.wrapType(json_object.ListJsonObject), dart.wrapType(json_object.MapJsonObject), dart.wrapType(json_object.NumJsonObject), dart.wrapType(json_object.StringJsonObject)]);
    this[wireName$10] = "JsonObject";
    ;
  }).prototype = json_object_serializer.JsonObjectSerializer.prototype;
  dart.addTypeTests(json_object_serializer.JsonObjectSerializer);
  const structured$9 = Symbol("JsonObjectSerializer.structured");
  const types$11 = Symbol("JsonObjectSerializer.types");
  const wireName$10 = Symbol("JsonObjectSerializer.wireName");
  json_object_serializer.JsonObjectSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(json_object.JsonObject)];
  dart.setMethodSignature(json_object_serializer.JsonObjectSerializer, () => ({
    __proto__: dart.getMethods(json_object_serializer.JsonObjectSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(json_object.JsonObject, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(json_object_serializer.JsonObjectSerializer, "package:built_value/src/json_object_serializer.dart");
  dart.setFieldSignature(json_object_serializer.JsonObjectSerializer, () => ({
    __proto__: dart.getFields(json_object_serializer.JsonObjectSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  int64_serializer.Int64Serializer = class Int64Serializer extends core.Object {
    get structured() {
      return this[structured$10];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$12];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$11];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, int64, opts) {
      fixnum.Int64._check(int64);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return dart.toString(int64);
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return fixnum.Int64.parseInt(core.String.as(serialized));
    }
  };
  (int64_serializer.Int64Serializer.new = function() {
    this[structured$10] = false;
    this[types$12] = BuiltListOfType().new([dart.wrapType(fixnum.Int64)]);
    this[wireName$11] = "Int64";
    ;
  }).prototype = int64_serializer.Int64Serializer.prototype;
  dart.addTypeTests(int64_serializer.Int64Serializer);
  const structured$10 = Symbol("Int64Serializer.structured");
  const types$12 = Symbol("Int64Serializer.types");
  const wireName$11 = Symbol("Int64Serializer.wireName");
  int64_serializer.Int64Serializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(fixnum.Int64)];
  dart.setMethodSignature(int64_serializer.Int64Serializer, () => ({
    __proto__: dart.getMethods(int64_serializer.Int64Serializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(fixnum.Int64, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(int64_serializer.Int64Serializer, "package:built_value/src/int64_serializer.dart");
  dart.setFieldSignature(int64_serializer.Int64Serializer, () => ({
    __proto__: dart.getFields(int64_serializer.Int64Serializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  duration_serializer.DurationSerializer = class DurationSerializer extends core.Object {
    get structured() {
      return this[structured$11];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$13];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$12];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, duration, opts) {
      core.Duration._check(duration);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return duration.inMicroseconds;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return new core.Duration.new({microseconds: core.int.as(serialized)});
    }
  };
  (duration_serializer.DurationSerializer.new = function() {
    this[structured$11] = false;
    this[types$13] = BuiltListOfType().new([dart.wrapType(core.Duration)]);
    this[wireName$12] = "Duration";
    ;
  }).prototype = duration_serializer.DurationSerializer.prototype;
  dart.addTypeTests(duration_serializer.DurationSerializer);
  const structured$11 = Symbol("DurationSerializer.structured");
  const types$13 = Symbol("DurationSerializer.types");
  const wireName$12 = Symbol("DurationSerializer.wireName");
  duration_serializer.DurationSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.Duration)];
  dart.setMethodSignature(duration_serializer.DurationSerializer, () => ({
    __proto__: dart.getMethods(duration_serializer.DurationSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.Duration, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(duration_serializer.DurationSerializer, "package:built_value/src/duration_serializer.dart");
  dart.setFieldSignature(duration_serializer.DurationSerializer, () => ({
    __proto__: dart.getFields(duration_serializer.DurationSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  date_time_serializer.DateTimeSerializer = class DateTimeSerializer extends core.Object {
    get structured() {
      return this[structured$12];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$14];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$13];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, dateTime, opts) {
      core.DateTime._check(dateTime);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      if (!dart.test(dateTime.isUtc)) {
        dart.throw(new core.ArgumentError.value(dateTime, "dateTime", "Must be in utc for serialization."));
      }
      return dateTime.microsecondsSinceEpoch;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      let microsecondsSinceEpoch = core.int.as(serialized);
      return new core.DateTime.fromMicrosecondsSinceEpoch(microsecondsSinceEpoch, {isUtc: true});
    }
  };
  (date_time_serializer.DateTimeSerializer.new = function() {
    this[structured$12] = false;
    this[types$14] = BuiltListOfType().new([dart.wrapType(core.DateTime)]);
    this[wireName$13] = "DateTime";
    ;
  }).prototype = date_time_serializer.DateTimeSerializer.prototype;
  dart.addTypeTests(date_time_serializer.DateTimeSerializer);
  const structured$12 = Symbol("DateTimeSerializer.structured");
  const types$14 = Symbol("DateTimeSerializer.types");
  const wireName$13 = Symbol("DateTimeSerializer.wireName");
  date_time_serializer.DateTimeSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.DateTime)];
  dart.setMethodSignature(date_time_serializer.DateTimeSerializer, () => ({
    __proto__: dart.getMethods(date_time_serializer.DateTimeSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.DateTime, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(date_time_serializer.DateTimeSerializer, "package:built_value/src/date_time_serializer.dart");
  dart.setFieldSignature(date_time_serializer.DateTimeSerializer, () => ({
    __proto__: dart.getFields(date_time_serializer.DateTimeSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  big_int_serializer.BigIntSerializer = class BigIntSerializer extends core.Object {
    get structured() {
      return this[structured$13];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$15];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$14];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, bigInt, opts) {
      core.BigInt._check(bigInt);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return dart.toString(bigInt);
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C0 || CT.C0;
      return core.BigInt.parse(core.String.as(serialized));
    }
  };
  (big_int_serializer.BigIntSerializer.new = function() {
    this[structured$13] = false;
    this[types$15] = BuiltListOfType().new([dart.wrapType(core.BigInt), dart.runtimeType(core.BigInt.zero)]);
    this[wireName$14] = "BigInt";
    ;
  }).prototype = big_int_serializer.BigIntSerializer.prototype;
  dart.addTypeTests(big_int_serializer.BigIntSerializer);
  const structured$13 = Symbol("BigIntSerializer.structured");
  const types$15 = Symbol("BigIntSerializer.types");
  const wireName$14 = Symbol("BigIntSerializer.wireName");
  big_int_serializer.BigIntSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.BigInt)];
  dart.setMethodSignature(big_int_serializer.BigIntSerializer, () => ({
    __proto__: dart.getMethods(big_int_serializer.BigIntSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType}),
    deserialize: dart.fnType(core.BigInt, [serializer$.Serializers, core.Object], {specifiedType: serializer$.FullType})
  }));
  dart.setLibraryUri(big_int_serializer.BigIntSerializer, "package:built_value/src/big_int_serializer.dart");
  dart.setFieldSignature(big_int_serializer.BigIntSerializer, () => ({
    __proto__: dart.getFields(big_int_serializer.BigIntSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/built_value/serializer", {
    "package:built_value/src/built_list_multimap_serializer.dart": built_list_multimap_serializer,
    "package:built_value/serializer.dart": serializer$,
    "package:built_value/src/string_serializer.dart": string_serializer,
    "package:built_value/src/regexp_serializer.dart": regexp_serializer,
    "package:built_value/src/int_serializer.dart": int_serializer,
    "package:built_value/src/double_serializer.dart": double_serializer,
    "package:built_value/src/built_set_serializer.dart": built_set_serializer,
    "package:built_value/src/built_set_multimap_serializer.dart": built_set_multimap_serializer,
    "package:built_value/src/built_map_serializer.dart": built_map_serializer,
    "package:built_value/src/built_list_serializer.dart": built_list_serializer,
    "package:built_value/src/built_json_serializers.dart": built_json_serializers,
    "package:built_value/src/bool_serializer.dart": bool_serializer,
    "package:built_value/src/uri_serializer.dart": uri_serializer,
    "package:built_value/src/num_serializer.dart": num_serializer,
    "package:built_value/src/json_object_serializer.dart": json_object_serializer,
    "package:built_value/src/int64_serializer.dart": int64_serializer,
    "package:built_value/src/duration_serializer.dart": duration_serializer,
    "package:built_value/src/date_time_serializer.dart": date_time_serializer,
    "package:built_value/src/big_int_serializer.dart": big_int_serializer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src\\\\built_list_multimap_serializer.dart","serializer.dart","src\\\\string_serializer.dart","src\\\\regexp_serializer.dart","src\\\\int_serializer.dart","src\\\\double_serializer.dart","src\\\\built_set_serializer.dart","src\\\\built_set_multimap_serializer.dart","src\\\\built_map_serializer.dart","src\\\\built_list_serializer.dart","src\\\\built_json_serializers.dart","src\\\\bool_serializer.dart","src\\\\uri_serializer.dart","src\\\\num_serializer.dart","src\\\\json_object_serializer.dart","src\\\\int64_serializer.dart","src\\\\duration_serializer.dart","src\\\\date_time_serializer.dart","src\\\\big_int_serializer.dart"],"names":[],"mappings":"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","file":"serializer.ddc.js"}');
  // Exports:
  return {
    src__built_list_multimap_serializer: built_list_multimap_serializer,
    serializer: serializer$,
    src__string_serializer: string_serializer,
    src__regexp_serializer: regexp_serializer,
    src__int_serializer: int_serializer,
    src__double_serializer: double_serializer,
    src__built_set_serializer: built_set_serializer,
    src__built_set_multimap_serializer: built_set_multimap_serializer,
    src__built_map_serializer: built_map_serializer,
    src__built_list_serializer: built_list_serializer,
    src__built_json_serializers: built_json_serializers,
    src__bool_serializer: bool_serializer,
    src__uri_serializer: uri_serializer,
    src__num_serializer: num_serializer,
    src__json_object_serializer: json_object_serializer,
    src__int64_serializer: int64_serializer,
    src__duration_serializer: duration_serializer,
    src__date_time_serializer: date_time_serializer,
    src__big_int_serializer: big_int_serializer
  };
});

//# sourceMappingURL=serializer.ddc.js.map
