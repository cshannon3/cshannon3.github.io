define(['dart_sdk', 'packages/collection/src/comparators'], function(dart_sdk, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  const json_object = Object.create(dart.library);
  const $toString = dartx.toString;
  const $hashCode = dartx.hashCode;
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let UnmodifiableListViewOfObject = () => (UnmodifiableListViewOfObject = dart.constFn(collection.UnmodifiableListView$(core.Object)))();
  let UnmodifiableMapViewOfString$Object = () => (UnmodifiableMapViewOfString$Object = dart.constFn(collection.UnmodifiableMapView$(core.String, core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: equality.DefaultEquality.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [_unordered]: false,
        [_base]: C1 || CT.C1
      });
    }
  });
  json_object.JsonObject = class JsonObject extends core.Object {
    get isBool() {
      return false;
    }
    get asBool() {
      return dart.throw(new core.StateError.new("Not a bool."));
    }
    get isList() {
      return false;
    }
    get asList() {
      return dart.throw(new core.StateError.new("Not a List."));
    }
    get isMap() {
      return false;
    }
    get asMap() {
      return dart.throw(new core.StateError.new("Not a Map."));
    }
    get isNum() {
      return false;
    }
    get asNum() {
      return dart.throw(new core.StateError.new("Not a num."));
    }
    get isString() {
      return false;
    }
    get asString() {
      return dart.throw(new core.StateError.new("Not a String."));
    }
    static new(value) {
      if (typeof value == 'number') {
        return new json_object.NumJsonObject.new(value);
      } else if (typeof value == 'string') {
        return new json_object.StringJsonObject.new(value);
      } else if (typeof value == 'boolean') {
        return new json_object.BoolJsonObject.new(value);
      } else if (ListOfObject().is(value)) {
        return new json_object.ListJsonObject.new(value);
      } else if (MapOfString$Object().is(value)) {
        return new json_object.MapJsonObject.new(value);
      } else {
        dart.throw(new core.ArgumentError.value(value, "value", "Must be bool, List<Object>, Map<String, Object>, num or String"));
      }
    }
    toString() {
      return dart.toString(this.value);
    }
  };
  (json_object.JsonObject.__ = function() {
    ;
  }).prototype = json_object.JsonObject.prototype;
  dart.addTypeTests(json_object.JsonObject);
  dart.setGetterSignature(json_object.JsonObject, () => ({
    __proto__: dart.getGetters(json_object.JsonObject.__proto__),
    isBool: core.bool,
    asBool: core.bool,
    isList: core.bool,
    asList: core.List,
    isMap: core.bool,
    asMap: core.Map,
    isNum: core.bool,
    asNum: core.num,
    isString: core.bool,
    asString: core.String
  }));
  dart.setLibraryUri(json_object.JsonObject, "package:built_value/json_object.dart");
  dart.defineExtensionMethods(json_object.JsonObject, ['toString']);
  json_object.BoolJsonObject = class BoolJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get isBool() {
      return true;
    }
    get asBool() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.BoolJsonObject.is(other)) return false;
      return dart.equals(this.value, dart.dload(other, 'value'));
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.BoolJsonObject.new = function(value) {
    this[value$] = value;
    json_object.BoolJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.BoolJsonObject.prototype;
  dart.addTypeTests(json_object.BoolJsonObject);
  const value$ = Symbol("BoolJsonObject.value");
  dart.setLibraryUri(json_object.BoolJsonObject, "package:built_value/json_object.dart");
  dart.setFieldSignature(json_object.BoolJsonObject, () => ({
    __proto__: dart.getFields(json_object.BoolJsonObject.__proto__),
    value: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(json_object.BoolJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.BoolJsonObject, ['hashCode']);
  const _unordered = dart.privateName(equality, "_unordered");
  let C1;
  const _base = dart.privateName(equality, "_base");
  let C0;
  json_object.ListJsonObject = class ListJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get isList() {
      return true;
    }
    get asList() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.ListJsonObject.is(other)) return false;
      return (C0 || CT.C0).equals(this.value, dart.dload(other, 'value'));
    }
    get hashCode() {
      return (C0 || CT.C0).hash(this.value);
    }
  };
  (json_object.ListJsonObject.new = function(value) {
    this[value$0] = new (UnmodifiableListViewOfObject()).new(value);
    json_object.ListJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.ListJsonObject.prototype;
  dart.addTypeTests(json_object.ListJsonObject);
  const value$0 = Symbol("ListJsonObject.value");
  dart.setGetterSignature(json_object.ListJsonObject, () => ({
    __proto__: dart.getGetters(json_object.ListJsonObject.__proto__),
    asList: core.List$(core.Object)
  }));
  dart.setLibraryUri(json_object.ListJsonObject, "package:built_value/json_object.dart");
  dart.setFieldSignature(json_object.ListJsonObject, () => ({
    __proto__: dart.getFields(json_object.ListJsonObject.__proto__),
    value: dart.finalFieldType(core.List$(core.Object))
  }));
  dart.defineExtensionMethods(json_object.ListJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.ListJsonObject, ['hashCode']);
  json_object.MapJsonObject = class MapJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$1];
    }
    set value(value) {
      super.value = value;
    }
    get isMap() {
      return true;
    }
    get asMap() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.MapJsonObject.is(other)) return false;
      return (C0 || CT.C0).equals(this.value, dart.dload(other, 'value'));
    }
    get hashCode() {
      return (C0 || CT.C0).hash(this.value);
    }
  };
  (json_object.MapJsonObject.new = function(value) {
    this[value$1] = new (UnmodifiableMapViewOfString$Object()).new(value);
    json_object.MapJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.MapJsonObject.prototype;
  dart.addTypeTests(json_object.MapJsonObject);
  const value$1 = Symbol("MapJsonObject.value");
  dart.setGetterSignature(json_object.MapJsonObject, () => ({
    __proto__: dart.getGetters(json_object.MapJsonObject.__proto__),
    asMap: core.Map$(core.String, core.Object)
  }));
  dart.setLibraryUri(json_object.MapJsonObject, "package:built_value/json_object.dart");
  dart.setFieldSignature(json_object.MapJsonObject, () => ({
    __proto__: dart.getFields(json_object.MapJsonObject.__proto__),
    value: dart.finalFieldType(core.Map$(core.String, core.Object))
  }));
  dart.defineExtensionMethods(json_object.MapJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.MapJsonObject, ['hashCode']);
  json_object.NumJsonObject = class NumJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$2];
    }
    set value(value) {
      super.value = value;
    }
    get isNum() {
      return true;
    }
    get asNum() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.NumJsonObject.is(other)) return false;
      return core.identical(this.value, dart.dload(other, 'value'));
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.NumJsonObject.new = function(value) {
    this[value$2] = value;
    json_object.NumJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.NumJsonObject.prototype;
  dart.addTypeTests(json_object.NumJsonObject);
  const value$2 = Symbol("NumJsonObject.value");
  dart.setLibraryUri(json_object.NumJsonObject, "package:built_value/json_object.dart");
  dart.setFieldSignature(json_object.NumJsonObject, () => ({
    __proto__: dart.getFields(json_object.NumJsonObject.__proto__),
    value: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(json_object.NumJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.NumJsonObject, ['hashCode']);
  json_object.StringJsonObject = class StringJsonObject extends json_object.JsonObject {
    get value() {
      return this[value$3];
    }
    set value(value) {
      super.value = value;
    }
    get isString() {
      return true;
    }
    get asString() {
      return this.value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!json_object.StringJsonObject.is(other)) return false;
      return core.identical(this.value, dart.dload(other, 'value'));
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (json_object.StringJsonObject.new = function(value) {
    this[value$3] = value;
    json_object.StringJsonObject.__proto__.__.call(this);
    ;
  }).prototype = json_object.StringJsonObject.prototype;
  dart.addTypeTests(json_object.StringJsonObject);
  const value$3 = Symbol("StringJsonObject.value");
  dart.setLibraryUri(json_object.StringJsonObject, "package:built_value/json_object.dart");
  dart.setFieldSignature(json_object.StringJsonObject, () => ({
    __proto__: dart.getFields(json_object.StringJsonObject.__proto__),
    value: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(json_object.StringJsonObject, ['_equals']);
  dart.defineExtensionAccessors(json_object.StringJsonObject, ['hashCode']);
  dart.trackLibraries("packages/built_value/json_object", {
    "package:built_value/json_object.dart": json_object
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["json_object.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0BqB;IAAK;;AAGL,wBAAM,wBAAW;IAAc;;AAG/B;IAAK;;AAGL,wBAAM,wBAAW;IAAc;;AAGhC;IAAK;;AAGN,wBAAM,wBAAW;IAAa;;AAG7B;IAAK;;AAGN,wBAAM,wBAAW;IAAa;;AAG1B;IAAK;;AAGH,wBAAM,wBAAW;IAAgB;eAI9B;AACxB,UAAU,OAAN,KAAK;AACP,cAAO,mCAAc,KAAK;YACrB,KAAU,OAAN,KAAK;AACd,cAAO,sCAAiB,KAAK;YACxB,KAAU,OAAN,KAAK;AACd,cAAO,oCAAe,KAAK;YACtB,KAAU,kBAAN,KAAK;AACd,cAAO,oCAAe,KAAK;YACtB,KAAU,wBAAN,KAAK;AACd,cAAO,mCAAc,KAAK;;QAE1B,WAAoB,6BAAM,KAAK,EAAE,SAC7B;;IAER;;AAME,YAAa,eAAN;IACT;;;;EALc;;;;;;;;;;;;;;;;;;IAWH;;;;;;;AAKQ;IAAI;;AAGJ;IAAK;;UAGC;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,8BAAN,KAAK,GAAqB,MAAO;AACrC,YAAa,aAAN,YAAe,WAAN,KAAK;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;IAhBd;AAAe;;EAAG;;;;;;;;;;;;;;;IAsBnB;;;;;;;AAOA;IAAI;;AAGI;IAAK;;UAGP;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,8BAAN,KAAK,GAAqB,MAAO;AACrC,YAAsC,sBAAO,YAAa,WAAN,KAAK;IAC3D;;AAGoB,YAA+B,oBAAK;IAAM;;6CAlBlC;IACX,gBAAE,yCAA6B,KAAK;AACzC;;EAAG;;;;;;;;;;;;;;;IAsBW;;;;;;;AAOR;IAAI;;AAGW;IAAK;;UAGb;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,6BAAN,KAAK,GAAoB,MAAO;AACpC,YAAsC,sBAAO,YAAa,WAAN,KAAK;IAC3D;;AAGoB,YAA+B,oBAAK;IAAM;;4CAlB5B;IACjB,gBAAE,+CAAoB,KAAK;AAChC;;EAAG;;;;;;;;;;;;;;;IAsBL;;;;;;;AAKQ;IAAI;;AAGL;IAAK;;UAGG;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,6BAAN,KAAK,GAAoB,MAAO;AACpC,YAAa,gBAAN,YAAe,WAAN,KAAK;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;IAhBf;AAAe;;EAAG;;;;;;;;;;;IAsBxB;;;;;;;AAKQ;IAAI;;AAGF;IAAK;;UAGH;AACvB,UAAI,AAAU,KAAK,KAAE,MAAO,MAAO;AACnC,WAAU,gCAAN,KAAK,GAAuB,MAAO;AACvC,YAAa,gBAAN,YAAe,WAAN,KAAK;IACvB;;AAGoB,YAAM,eAAN;IAAc;;;IAhBZ;AAAe;;EAAG","file":"json_object.ddc.js"}');
  // Exports:
  return {
    json_object: json_object
  };
});

//# sourceMappingURL=json_object.ddc.js.map
