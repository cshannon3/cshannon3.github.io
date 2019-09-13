define(['dart_sdk', 'packages/quiver/core', 'packages/collection/src/canonicalized_map', 'packages/quiver/collection'], function(dart_sdk, packages__quiver__core, packages__collection__src__canonicalized_map, packages__quiver__collection) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$ = packages__quiver__core.core;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const collection$ = packages__quiver__collection.collection;
  const copy_on_write_map = Object.create(dart.library);
  const iterable$ = Object.create(dart.library);
  const set = Object.create(dart.library);
  const iterables = Object.create(dart.library);
  const copy_on_write_set = Object.create(dart.library);
  const list = Object.create(dart.library);
  const copy_on_write_list = Object.create(dart.library);
  const set_multimap = Object.create(dart.library);
  const built_collection = Object.create(dart.library);
  const map$ = Object.create(dart.library);
  const list_multimap = Object.create(dart.library);
  const $_get = dartx._get;
  const $cast = dartx.cast;
  const $containsKey = dartx.containsKey;
  const $containsValue = dartx.containsValue;
  const $entries = dartx.entries;
  const $forEach = dartx.forEach;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $length = dartx.length;
  const $map = dartx.map;
  const $values = dartx.values;
  const $_set = dartx._set;
  const $addAll = dartx.addAll;
  const $addEntries = dartx.addEntries;
  const $clear = dartx.clear;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $removeWhere = dartx.removeWhere;
  const $toString = dartx.toString;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $iterator = dartx.iterator;
  const $_equals = dartx._equals;
  const $hashCode = dartx.hashCode;
  const $toList = dartx.toList;
  const $sort = dartx.sort;
  const $followedBy = dartx.followedBy;
  const $whereType = dartx.whereType;
  const $where = dartx.where;
  const $expand = dartx.expand;
  const $reduce = dartx.reduce;
  const $fold = dartx.fold;
  const $every = dartx.every;
  const $join = dartx.join;
  const $any = dartx.any;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $firstWhere = dartx.firstWhere;
  const $lastWhere = dartx.lastWhere;
  const $singleWhere = dartx.singleWhere;
  const $elementAt = dartx.elementAt;
  const $contains = dartx.contains;
  const $toSet = dartx.toSet;
  const $plus = dartx['+'];
  const $reversed = dartx.reversed;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $indexWhere = dartx.indexWhere;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $sublist = dartx.sublist;
  const $getRange = dartx.getRange;
  const $asMap = dartx.asMap;
  const $add = dartx.add;
  const $removeRange = dartx.removeRange;
  const $shuffle = dartx.shuffle;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $setAll = dartx.setAll;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $retainWhere = dartx.retainWhere;
  const $setRange = dartx.setRange;
  const $fillRange = dartx.fillRange;
  const $replaceRange = dartx.replaceRange;
  const $runtimeType = dartx.runtimeType;
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ObjectAndObjectToNull = () => (ObjectAndObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.Object])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.constMap(dart.dynamic, dart.dynamic, []);
    }
  });
  const _map$ = dart.privateName(copy_on_write_map, "_map");
  const _mapFactory$ = dart.privateName(copy_on_write_map, "_mapFactory");
  const _copyBeforeWrite = dart.privateName(copy_on_write_map, "_copyBeforeWrite");
  const _maybeCopyBeforeWrite = dart.privateName(copy_on_write_map, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteMap_default = Symbol('_is_CopyOnWriteMap_default');
  copy_on_write_map.CopyOnWriteMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class CopyOnWriteMap extends core.Object {
      _get(key) {
        return this[_map$][$_get](key);
      }
      cast(K2, V2) {
        return new (copy_on_write_map.CopyOnWriteMap$(K2, V2)).new(this[_map$][$cast](K2, V2));
      }
      containsKey(key) {
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$][$containsValue](value);
      }
      get entries() {
        return this[_map$][$entries];
      }
      forEach(f) {
        return this[_map$][$forEach](f);
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
      get keys() {
        return this[_map$][$keys];
      }
      get length() {
        return this[_map$][$length];
      }
      map(K2, V2, f) {
        return this[_map$][$map](K2, V2, f);
      }
      get values() {
        return this[_map$][$values];
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$addAll](other);
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$addEntries](entries);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_map$][$clear]();
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$remove](key);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_map$][$removeWhere](test);
      }
      toString() {
        return dart.toString(this[_map$]);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        this[_maybeCopyBeforeWrite]();
        return this[_map$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        this[_maybeCopyBeforeWrite]();
        this[_map$][$updateAll](update);
      }
      [_maybeCopyBeforeWrite]() {
        let t0;
        if (!dart.test(this[_copyBeforeWrite])) return;
        this[_copyBeforeWrite] = false;
        this[_map$] = this[_mapFactory$] != null ? (t0 = this[_mapFactory$](), t0[$addAll](this[_map$]), t0) : LinkedHashMapOfK$V().from(this[_map$]);
      }
    }
    (CopyOnWriteMap.new = function(_map, _mapFactory) {
      if (_mapFactory === void 0) _mapFactory = null;
      this[_map$] = _map;
      this[_mapFactory$] = _mapFactory;
      this[_copyBeforeWrite] = true;
      ;
    }).prototype = CopyOnWriteMap.prototype;
    CopyOnWriteMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CopyOnWriteMap);
    CopyOnWriteMap.prototype[_is_CopyOnWriteMap_default] = true;
    CopyOnWriteMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getMethods(CopyOnWriteMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getGetters(CopyOnWriteMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(CopyOnWriteMap, "package:built_collection/src/internal/copy_on_write_map.dart");
    dart.setFieldSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getFields(CopyOnWriteMap.__proto__),
      [_mapFactory$]: dart.finalFieldType(dart.fnType(core.Map$(K, V), [])),
      [_copyBeforeWrite]: dart.fieldType(core.bool),
      [_map$]: dart.fieldType(core.Map$(K, V))
    }));
    dart.defineExtensionMethods(CopyOnWriteMap, [
      '_get',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CopyOnWriteMap;
  });
  copy_on_write_map.CopyOnWriteMap = copy_on_write_map.CopyOnWriteMap$();
  dart.addTypeTests(copy_on_write_map.CopyOnWriteMap, _is_CopyOnWriteMap_default);
  const _is_BuiltIterable_default = Symbol('_is_BuiltIterable_default');
  iterable$.BuiltIterable$ = dart.generic(E => {
    class BuiltIterable extends core.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (BuiltIterable.new = function() {
      ;
    }).prototype = BuiltIterable.prototype;
    BuiltIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltIterable);
    BuiltIterable.prototype[_is_BuiltIterable_default] = true;
    BuiltIterable[dart.implements] = () => [core.Iterable$(E)];
    dart.setLibraryUri(BuiltIterable, "package:built_collection/src/iterable.dart");
    return BuiltIterable;
  });
  iterable$.BuiltIterable = iterable$.BuiltIterable$();
  dart.addTypeTests(iterable$.BuiltIterable, _is_BuiltIterable_default);
  const _overridenHashCode$ = dart.privateName(set, "_overridenHashCode");
  const _set$ = dart.privateName(set, "_set");
  const _hashCode = dart.privateName(set, "_hashCode");
  const _setFactory$ = dart.privateName(set, "_setFactory");
  let C0;
  const _is_BuiltSet_default = Symbol('_is_BuiltSet_default');
  set.BuiltSet$ = dart.generic(E => {
    let SetBuilderOfE = () => (SetBuilderOfE = dart.constFn(set.SetBuilder$(E)))();
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(set._BuiltSet$(E)))();
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(list.BuiltList$(E)))();
    let EToint = () => (EToint = dart.constFn(dart.fnType(core.int, [E])))();
    let UnmodifiableSetViewOfE = () => (UnmodifiableSetViewOfE = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(E)))();
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(set.BuiltSet$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let CopyOnWriteSetOfE = () => (CopyOnWriteSetOfE = dart.constFn(copy_on_write_set.CopyOnWriteSet$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    class BuiltSet extends core.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = C0 || CT.C0;
        return set.BuiltSet$(E).from(iterable);
      }
      static from(iterable) {
        if (set._BuiltSet.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return set.BuiltSet$(E).as(iterable);
        } else {
          return new (set._BuiltSet$(E)).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (set._BuiltSet$(E).is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return iterable;
        } else {
          return new (set._BuiltSet$(E)).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        let t0;
        return (t0 = set.SetBuilder$(E).new(), t0.update(updates), t0).build();
      }
      toBuilder() {
        return new (SetBuilderOfE())._fromBuiltSet(_BuiltSetOfE()._check(this));
      }
      rebuild(updates) {
        let t0;
        return (t0 = this.toBuilder(), t0.update(updates), t0).build();
      }
      toBuiltList() {
        return BuiltListOfE().new(this);
      }
      toBuiltSet() {
        return this;
      }
      get hashCode() {
        let t0;
        if (this[_hashCode] == null) {
          this[_hashCode] = core$.hashObjects((t0 = this[_set$][$map](core.int, dart.fn(e => dart.hashCode(e), EToint()))[$toList]({growable: false}), t0[$sort](), t0));
        }
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!set.BuiltSet.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        return this.containsAll(IterableOfObject()._check(other));
      }
      toString() {
        return dart.toString(this[_set$]);
      }
      asSet() {
        return new (UnmodifiableSetViewOfE()).new(this[_set$]);
      }
      get length() {
        return this[_set$][$length];
      }
      containsAll(other) {
        return this[_set$].containsAll(other);
      }
      difference(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].difference(other[_set$]));
      }
      intersection(other) {
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].intersection(other[_set$]));
      }
      lookup(object) {
        return this[_set$].lookup(object);
      }
      union(other) {
        BuiltSetOfE()._check(other);
        return new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].union(other[_set$]));
      }
      get iterator() {
        return this[_set$].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      cast(T) {
        return core.Iterable.castFrom(E, T, this[_set$]);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_set$][$followedBy](other);
      }
      whereType(T) {
        return this[_set$][$whereType](T);
      }
      map(T, f) {
        return this[_set$][$map](T, f);
      }
      where(test) {
        return this[_set$][$where](test);
      }
      expand(T, f) {
        return this[_set$][$expand](T, f);
      }
      contains(element) {
        return this[_set$].contains(element);
      }
      forEach(f) {
        return this[_set$][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_set$][$fold](T, initialValue, combine);
      }
      every(test) {
        return this[_set$][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_set$][$join](separator);
      }
      any(test) {
        return this[_set$][$any](test);
      }
      toSet() {
        return new (CopyOnWriteSetOfE()).new(this[_set$], this[_setFactory$]);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$][$toList]({growable: growable});
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      take(n) {
        return this[_set$][$take](n);
      }
      takeWhile(test) {
        return this[_set$][$takeWhile](test);
      }
      skip(n) {
        return this[_set$][$skip](n);
      }
      skipWhile(test) {
        return this[_set$][$skipWhile](test);
      }
      get first() {
        return this[_set$][$first];
      }
      get last() {
        return this[_set$][$last];
      }
      get single() {
        return this[_set$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_set$][$elementAt](index);
      }
    }
    (BuiltSet.__ = function(_setFactory, _set) {
      this[_hashCode] = null;
      this[_setFactory$] = _setFactory;
      this[_set$] = _set;
      if (dart.wrapType(E)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit element type required, for example \"new BuiltSet<int>\""));
      }
    }).prototype = BuiltSet.prototype;
    BuiltSet.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltSet);
    BuiltSet.prototype[_is_BuiltSet_default] = true;
    BuiltSet[dart.implements] = () => [core.Iterable$(E), iterable$.BuiltIterable$(E)];
    dart.setMethodSignature(BuiltSet, () => ({
      __proto__: dart.getMethods(BuiltSet.__proto__),
      toBuilder: dart.fnType(set.SetBuilder$(E), []),
      rebuild: dart.fnType(set.BuiltSet$(E), [dart.fnType(dart.dynamic, [set.SetBuilder$(E)])]),
      toBuiltList: dart.fnType(list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(set.BuiltSet$(E), []),
      asSet: dart.fnType(core.Set$(E), []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(set.BuiltSet$(E), [set.BuiltSet$(core.Object)]),
      intersection: dart.fnType(set.BuiltSet$(E), [set.BuiltSet$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      union: dart.fnType(set.BuiltSet$(E), [core.Object]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int])
    }));
    dart.setGetterSignature(BuiltSet, () => ({
      __proto__: dart.getGetters(BuiltSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(BuiltSet, "package:built_collection/src/set.dart");
    dart.setFieldSignature(BuiltSet, () => ({
      __proto__: dart.getFields(BuiltSet.__proto__),
      [_setFactory$]: dart.finalFieldType(dart.fnType(core.Set$(E), [])),
      [_set$]: dart.finalFieldType(core.Set$(E)),
      [_hashCode]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(BuiltSet, [
      '_equals',
      'toString',
      'cast',
      'followedBy',
      'whereType',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toSet',
      'toList',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt'
    ]);
    dart.defineExtensionAccessors(BuiltSet, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltSet;
  });
  set.BuiltSet = set.BuiltSet$();
  dart.addTypeTests(set.BuiltSet, _is_BuiltSet_default);
  const _is__BuiltSet_default = Symbol('_is__BuiltSet_default');
  set._BuiltSet$ = dart.generic(E => {
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    class _BuiltSet extends set.BuiltSet$(E) {
      hasExactElementType(type) {
        return dart.wrapType(E)[$_equals](type);
      }
    }
    (_BuiltSet.withSafeSet = function(setFactory, set) {
      _BuiltSet.__proto__.__.call(this, setFactory, set);
      ;
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckTypes = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, new (_HashSetOfE()).new());
      for (let element of iterable) {
        if (E.is(element)) {
          this[_set$].add(element);
        } else {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltSet.prototype;
    (_BuiltSet.copyAndCheckForNull = function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, new (_HashSetOfE()).new());
      for (let element of iterable) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
        } else {
          this[_set$].add(E._check(element));
        }
      }
    }).prototype = _BuiltSet.prototype;
    dart.addTypeTests(_BuiltSet);
    _BuiltSet.prototype[_is__BuiltSet_default] = true;
    dart.setMethodSignature(_BuiltSet, () => ({
      __proto__: dart.getMethods(_BuiltSet.__proto__),
      hasExactElementType: dart.fnType(core.bool, [core.Type])
    }));
    dart.setLibraryUri(_BuiltSet, "package:built_collection/src/set.dart");
    return _BuiltSet;
  });
  set._BuiltSet = set._BuiltSet$();
  dart.addTypeTests(set._BuiltSet, _is__BuiltSet_default);
  const _is_OverriddenHashcodeBuiltSet_default = Symbol('_is_OverriddenHashcodeBuiltSet_default');
  set.OverriddenHashcodeBuiltSet$ = dart.generic(T => {
    class OverriddenHashcodeBuiltSet extends set._BuiltSet$(T) {
      get hashCode() {
        return this[_overridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltSet.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$] = _overridenHashCode;
      OverriddenHashcodeBuiltSet.__proto__.copyAndCheckTypes.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltSet.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSet);
    OverriddenHashcodeBuiltSet.prototype[_is_OverriddenHashcodeBuiltSet_default] = true;
    dart.setLibraryUri(OverriddenHashcodeBuiltSet, "package:built_collection/src/set.dart");
    dart.setFieldSignature(OverriddenHashcodeBuiltSet, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSet.__proto__),
      [_overridenHashCode$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSet, ['hashCode']);
    return OverriddenHashcodeBuiltSet;
  });
  set.OverriddenHashcodeBuiltSet = set.OverriddenHashcodeBuiltSet$();
  dart.addTypeTests(set.OverriddenHashcodeBuiltSet, _is_OverriddenHashcodeBuiltSet_default);
  const _setOwner = dart.privateName(set, "_setOwner");
  const _checkGenericTypeParameter = dart.privateName(set, "_checkGenericTypeParameter");
  const _withOwner = dart.privateName(set, "_withOwner");
  const _createSet = dart.privateName(set, "_createSet");
  const _setSafeSet = dart.privateName(set, "_setSafeSet");
  const _checkElement = dart.privateName(set, "_checkElement");
  const _safeSet = dart.privateName(set, "_safeSet");
  const _checkElements = dart.privateName(set, "_checkElements");
  const _is_SetBuilder_default = Symbol('_is_SetBuilder_default');
  set.SetBuilder$ = dart.generic(E => {
    let _BuiltSetOfE = () => (_BuiltSetOfE = dart.constFn(set._BuiltSet$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let VoidToSetOfE = () => (VoidToSetOfE = dart.constFn(dart.fnType(SetOfE(), [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    class SetBuilder extends core.Object {
      static new(iterable) {
        let t0;
        if (iterable === void 0) iterable = C0 || CT.C0;
        t0 = new (set.SetBuilder$(E))._uninitialized();
        t0.replace(iterable);
        return t0;
      }
      build() {
        if (this[_setOwner] == null) {
          this[_setOwner] = new (_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$]);
        }
        return this[_setOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltSetOfE().is(iterable) && dart.equals(iterable[_setFactory$], this[_setFactory$])) {
          this[_withOwner](iterable);
        } else {
          let set = this[_createSet]();
          for (let element of iterable) {
            if (E.is(element)) {
              set.add(element);
            } else {
              dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
            }
          }
          this[_setSafeSet](set);
        }
      }
      withBase(base) {
        let t0;
        VoidToSetOfE()._check(base);
        if (base == null) {
          dart.throw(new core.ArgumentError.notNull("base"));
        }
        this[_setFactory$] = base;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$]), t0));
      }
      withDefaultBase() {
        let t0;
        this[_setFactory$] = null;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$]), t0));
      }
      get length() {
        return this[_set$][$length];
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      add(value) {
        E._check(value);
        this[_checkElement](value);
        return this[_safeSet].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_checkElements](iterable);
        this[_safeSet].addAll(iterable);
      }
      clear() {
        this[_safeSet].clear();
      }
      remove(value) {
        return this[_safeSet].remove(value);
      }
      removeAll(elements) {
        this[_safeSet].removeAll(elements);
      }
      removeWhere(test) {
        this[_safeSet].removeWhere(test);
      }
      retainAll(elements) {
        this[_safeSet].retainAll(elements);
      }
      retainWhere(test) {
        this[_safeSet].retainWhere(test);
      }
      map(f) {
        let t0;
        EToE()._check(f);
        let result = (t0 = this[_createSet](), t0.addAll(this[_set$][$map](E, f)), t0);
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        let t0;
        EToIterableOfE()._check(f);
        let result = (t0 = this[_createSet](), t0.addAll(this[_set$][$expand](E, f)), t0);
        this[_checkElements](result);
        this[_setSafeSet](result);
      }
      take(n) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$][$take](n)), t0));
      }
      takeWhile(test) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$][$takeWhile](test)), t0));
      }
      skip(n) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$][$skip](n)), t0));
      }
      skipWhile(test) {
        let t0;
        this[_setSafeSet]((t0 = this[_createSet](), t0.addAll(this[_set$][$skipWhile](test)), t0));
      }
      [_withOwner](setOwner) {
        if (!dart.equals(setOwner[_setFactory$], this[_setFactory$])) dart.assertFailed("Can't reuse a built set that uses a different base", "org-dartlang-app:///packages/built_collection/src/set/set_builder.dart", 208, 12, "setOwner._setFactory == _setFactory");
        this[_set$] = setOwner[_set$];
        this[_setOwner] = setOwner;
      }
      [_setSafeSet](set) {
        this[_setOwner] = null;
        this[_set$] = set;
      }
      get [_safeSet]() {
        let t0;
        if (this[_setOwner] != null) {
          this[_set$] = (t0 = this[_createSet](), t0.addAll(this[_set$]), t0);
          this[_setOwner] = null;
        }
        return this[_set$];
      }
      [_createSet]() {
        return this[_setFactory$] != null ? this[_setFactory$]() : new (_HashSetOfE()).new();
      }
      [_checkGenericTypeParameter]() {
        if (dart.wrapType(E)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit element type required, " + "for example \"new SetBuilder<int>\""));
        }
      }
      [_checkElement](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_checkElements](elements) {
        for (let element of elements) {
          this[_checkElement](element);
        }
      }
    }
    (SetBuilder._uninitialized = function() {
      this[_setOwner] = null;
      this[_set$] = null;
      this[_setFactory$] = null;
      this[_checkGenericTypeParameter]();
    }).prototype = SetBuilder.prototype;
    (SetBuilder._fromBuiltSet = function(set) {
      this[_setFactory$] = set[_setFactory$];
      this[_set$] = set[_set$];
      this[_setOwner] = set;
      ;
    }).prototype = SetBuilder.prototype;
    dart.addTypeTests(SetBuilder);
    SetBuilder.prototype[_is_SetBuilder_default] = true;
    dart.setMethodSignature(SetBuilder, () => ({
      __proto__: dart.getMethods(SetBuilder.__proto__),
      build: dart.fnType(set.BuiltSet$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [set.SetBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core.Iterable]),
      withBase: dart.fnType(dart.void, [core.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      map: dart.fnType(dart.void, [core.Object]),
      where: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      expand: dart.fnType(dart.void, [core.Object]),
      take: dart.fnType(dart.void, [core.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(dart.void, [core.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [_withOwner]: dart.fnType(dart.void, [set._BuiltSet$(E)]),
      [_setSafeSet]: dart.fnType(dart.void, [core.Set$(E)]),
      [_createSet]: dart.fnType(core.Set$(E), []),
      [_checkGenericTypeParameter]: dart.fnType(dart.void, []),
      [_checkElement]: dart.fnType(dart.void, [E]),
      [_checkElements]: dart.fnType(dart.void, [core.Iterable$(E)])
    }));
    dart.setGetterSignature(SetBuilder, () => ({
      __proto__: dart.getGetters(SetBuilder.__proto__),
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeSet]: core.Set$(E)
    }));
    dart.setLibraryUri(SetBuilder, "package:built_collection/src/set.dart");
    dart.setFieldSignature(SetBuilder, () => ({
      __proto__: dart.getFields(SetBuilder.__proto__),
      [_setFactory$]: dart.fieldType(dart.fnType(core.Set$(E), [])),
      [_set$]: dart.fieldType(core.Set$(E)),
      [_setOwner]: dart.fieldType(set._BuiltSet$(E))
    }));
    return SetBuilder;
  });
  set.SetBuilder = set.SetBuilder$();
  dart.addTypeTests(set.SetBuilder, _is_SetBuilder_default);
  iterables.evaluateIterable = function evaluateIterable(E, iterable) {
    if (!core.List.is(iterable) && !iterable$.BuiltIterable.is(iterable) && !core.Set.is(iterable)) {
      iterable = iterable[$toList]();
    }
    return iterable;
  };
  const _set$0 = dart.privateName(copy_on_write_set, "_set");
  const _setFactory$0 = dart.privateName(copy_on_write_set, "_setFactory");
  const _copyBeforeWrite$ = dart.privateName(copy_on_write_set, "_copyBeforeWrite");
  const _maybeCopyBeforeWrite$ = dart.privateName(copy_on_write_set, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteSet_default = Symbol('_is_CopyOnWriteSet_default');
  copy_on_write_set.CopyOnWriteSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class CopyOnWriteSet extends core.Object {
      get length() {
        return this[_set$0][$length];
      }
      lookup(object) {
        return this[_set$0].lookup(object);
      }
      intersection(other) {
        return this[_set$0].intersection(other);
      }
      union(other) {
        SetOfE()._check(other);
        return this[_set$0].union(other);
      }
      difference(other) {
        return this[_set$0].difference(other);
      }
      containsAll(other) {
        return this[_set$0].containsAll(other);
      }
      any(test) {
        return this[_set$0][$any](test);
      }
      cast(T) {
        return new (copy_on_write_set.CopyOnWriteSet$(T)).new(this[_set$0].cast(T));
      }
      contains(element) {
        return this[_set$0].contains(element);
      }
      elementAt(index) {
        return this[_set$0][$elementAt](index);
      }
      every(test) {
        return this[_set$0][$every](test);
      }
      expand(T, f) {
        return this[_set$0][$expand](T, f);
      }
      get first() {
        return this[_set$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set$0][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_set$0][$followedBy](other);
      }
      forEach(f) {
        return this[_set$0][$forEach](f);
      }
      get isEmpty() {
        return this[_set$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$0][$isNotEmpty];
      }
      get iterator() {
        return this[_set$0].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_set$0][$join](separator);
      }
      get last() {
        return this[_set$0][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set$0][$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_set$0][$reduce](combine);
      }
      get single() {
        return this[_set$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_set$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_set$0][$skip](count);
      }
      skipWhile(test) {
        return this[_set$0][$skipWhile](test);
      }
      take(count) {
        return this[_set$0][$take](count);
      }
      takeWhile(test) {
        return this[_set$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_set$0].toSet();
      }
      where(test) {
        return this[_set$0][$where](test);
      }
      whereType(T) {
        return this[_set$0][$whereType](T);
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite$]();
        return this[_set$0].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].addAll(iterable);
      }
      clear() {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].clear();
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$]();
        return this[_set$0].remove(value);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].removeWhere(test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].retainWhere(test);
      }
      removeAll(elements) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].removeAll(elements);
      }
      retainAll(elements) {
        this[_maybeCopyBeforeWrite$]();
        this[_set$0].retainAll(elements);
      }
      toString() {
        return dart.toString(this[_set$0]);
      }
      [_maybeCopyBeforeWrite$]() {
        let t0;
        if (!dart.test(this[_copyBeforeWrite$])) return;
        this[_copyBeforeWrite$] = false;
        this[_set$0] = this[_setFactory$0] != null ? (t0 = this[_setFactory$0](), t0.addAll(this[_set$0]), t0) : LinkedHashSetOfE().from(this[_set$0]);
      }
    }
    (CopyOnWriteSet.new = function(_set, _setFactory) {
      if (_setFactory === void 0) _setFactory = null;
      this[_set$0] = _set;
      this[_setFactory$0] = _setFactory;
      this[_copyBeforeWrite$] = true;
      ;
    }).prototype = CopyOnWriteSet.prototype;
    dart.addTypeTests(CopyOnWriteSet);
    CopyOnWriteSet.prototype[_is_CopyOnWriteSet_default] = true;
    CopyOnWriteSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getMethods(CopyOnWriteSet.__proto__),
      lookup: dart.fnType(E, [core.Object]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      union: dart.fnType(core.Set$(E), [core.Object]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      [_maybeCopyBeforeWrite$]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getGetters(CopyOnWriteSet.__proto__),
      length: core.int,
      [$length]: core.int,
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(CopyOnWriteSet, "package:built_collection/src/internal/copy_on_write_set.dart");
    dart.setFieldSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getFields(CopyOnWriteSet.__proto__),
      [_setFactory$0]: dart.finalFieldType(dart.fnType(core.Set$(E), [])),
      [_copyBeforeWrite$]: dart.fieldType(core.bool),
      [_set$0]: dart.fieldType(core.Set$(E))
    }));
    dart.defineExtensionMethods(CopyOnWriteSet, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteSet, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return CopyOnWriteSet;
  });
  copy_on_write_set.CopyOnWriteSet = copy_on_write_set.CopyOnWriteSet$();
  dart.addTypeTests(copy_on_write_set.CopyOnWriteSet, _is_CopyOnWriteSet_default);
  const _overridenHashCode$0 = dart.privateName(list, "_overridenHashCode");
  const _list$ = dart.privateName(list, "_list");
  const _hashCode$ = dart.privateName(list, "_hashCode");
  const _is_BuiltList_default = Symbol('_is_BuiltList_default');
  list.BuiltList$ = dart.generic(E => {
    let ListBuilderOfE = () => (ListBuilderOfE = dart.constFn(list.ListBuilder$(E)))();
    let BuiltSetOfE = () => (BuiltSetOfE = dart.constFn(set.BuiltSet$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let BuiltListOfE = () => (BuiltListOfE = dart.constFn(list.BuiltList$(E)))();
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(list._BuiltList$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let CopyOnWriteListOfE = () => (CopyOnWriteListOfE = dart.constFn(copy_on_write_list.CopyOnWriteList$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    class BuiltList extends core.Object {
      static new(iterable) {
        if (iterable === void 0) iterable = C0 || CT.C0;
        return list.BuiltList$(E).from(iterable);
      }
      static from(iterable) {
        if (list._BuiltList.is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return list.BuiltList$(E).as(iterable);
        } else {
          return new (list._BuiltList$(E)).copyAndCheckTypes(iterable);
        }
      }
      static of(iterable) {
        if (list._BuiltList$(E).is(iterable) && dart.test(iterable.hasExactElementType(dart.wrapType(E)))) {
          return iterable;
        } else {
          return new (list._BuiltList$(E)).copyAndCheckForNull(iterable);
        }
      }
      static build(updates) {
        let t0;
        return (t0 = list.ListBuilder$(E).new(), t0.update(updates), t0).build();
      }
      toBuilder() {
        return ListBuilderOfE().new(this);
      }
      rebuild(updates) {
        let t0;
        return (t0 = this.toBuilder(), t0.update(updates), t0).build();
      }
      toBuiltList() {
        return this;
      }
      toBuiltSet() {
        return BuiltSetOfE().new(this);
      }
      get hashCode() {
        if (this[_hashCode$] == null) {
          this[_hashCode$] = core$.hashObjects(this[_list$]);
        }
        return this[_hashCode$];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!list.BuiltList.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.length; i = i + 1) {
          if (!dart.equals(dart.dsend(other, '_get', [i]), this._get(i))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_list$]);
      }
      asList() {
        return ListOfE().unmodifiable(this[_list$]);
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      ['+'](other) {
        BuiltListOfE()._check(other);
        return new (_BuiltListOfE()).withSafeList(this[_list$][$plus](other[_list$]));
      }
      get length() {
        return this[_list$][$length];
      }
      get reversed() {
        return this[_list$][$reversed];
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list$][$indexOf](element, start);
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list$][$lastIndexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_list$][$indexWhere](test, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_list$][$lastIndexWhere](test, start);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return new (_BuiltListOfE()).withSafeList(this[_list$][$sublist](start, end));
      }
      getRange(start, end) {
        return this[_list$][$getRange](start, end);
      }
      asMap() {
        return this[_list$][$asMap]();
      }
      get iterator() {
        return this[_list$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      map(T, f) {
        return this[_list$][$map](T, f);
      }
      where(test) {
        return this[_list$][$where](test);
      }
      whereType(T) {
        return this[_list$][$whereType](T);
      }
      expand(T, f) {
        return this[_list$][$expand](T, f);
      }
      contains(element) {
        return this[_list$][$contains](element);
      }
      forEach(f) {
        return this[_list$][$forEach](f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_list$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_list$][$followedBy](other);
      }
      every(test) {
        return this[_list$][$every](test);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_list$][$join](separator);
      }
      any(test) {
        return this[_list$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return new (CopyOnWriteListOfE()).new(this[_list$], growable);
      }
      toSet() {
        return this[_list$][$toSet]();
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      take(n) {
        return this[_list$][$take](n);
      }
      takeWhile(test) {
        return this[_list$][$takeWhile](test);
      }
      skip(n) {
        return this[_list$][$skip](n);
      }
      skipWhile(test) {
        return this[_list$][$skipWhile](test);
      }
      get first() {
        return this[_list$][$first];
      }
      get last() {
        return this[_list$][$last];
      }
      get single() {
        return this[_list$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_list$][$elementAt](index);
      }
      cast(T) {
        return core.Iterable.castFrom(E, T, this[_list$]);
      }
    }
    (BuiltList.__ = function(_list) {
      this[_hashCode$] = null;
      this[_list$] = _list;
      if (dart.wrapType(E)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit element type required, for example \"new BuiltList<int>\""));
      }
    }).prototype = BuiltList.prototype;
    BuiltList.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltList);
    BuiltList.prototype[_is_BuiltList_default] = true;
    BuiltList[dart.implements] = () => [core.Iterable$(E), iterable$.BuiltIterable$(E)];
    dart.setMethodSignature(BuiltList, () => ({
      __proto__: dart.getMethods(BuiltList.__proto__),
      toBuilder: dart.fnType(list.ListBuilder$(E), []),
      rebuild: dart.fnType(list.BuiltList$(E), [dart.fnType(dart.dynamic, [list.ListBuilder$(E)])]),
      toBuiltList: dart.fnType(list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(set.BuiltSet$(E), []),
      asList: dart.fnType(core.List$(E), []),
      _get: dart.fnType(E, [core.int]),
      '+': dart.fnType(list.BuiltList$(E), [core.Object]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      sublist: dart.fnType(list.BuiltList$(E), [core.int], [core.int]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []])
    }));
    dart.setGetterSignature(BuiltList, () => ({
      __proto__: dart.getGetters(BuiltList.__proto__),
      length: core.int,
      [$length]: core.int,
      reversed: core.Iterable$(E),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(BuiltList, "package:built_collection/src/list.dart");
    dart.setFieldSignature(BuiltList, () => ({
      __proto__: dart.getFields(BuiltList.__proto__),
      [_list$]: dart.finalFieldType(core.List$(E)),
      [_hashCode$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(BuiltList, [
      '_equals',
      'toString',
      'map',
      'where',
      'whereType',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'followedBy',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt',
      'cast'
    ]);
    dart.defineExtensionAccessors(BuiltList, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltList;
  });
  list.BuiltList = list.BuiltList$();
  dart.addTypeTests(list.BuiltList, _is_BuiltList_default);
  const _is__BuiltList_default = Symbol('_is__BuiltList_default');
  list._BuiltList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class _BuiltList extends list.BuiltList$(E) {
      hasExactElementType(type) {
        return dart.wrapType(E)[$_equals](type);
      }
    }
    (_BuiltList.withSafeList = function(list) {
      _BuiltList.__proto__.__.call(this, list);
      ;
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckTypes = function(iterable) {
      if (iterable === void 0) iterable = C0 || CT.C0;
      _BuiltList.__proto__.__.call(this, ListOfE().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (!E.is(element)) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
        }
      }
    }).prototype = _BuiltList.prototype;
    (_BuiltList.copyAndCheckForNull = function(iterable) {
      _BuiltList.__proto__.__.call(this, ListOfE().from(iterable, {growable: false}));
      for (let element of this[_list$]) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
        }
      }
    }).prototype = _BuiltList.prototype;
    dart.addTypeTests(_BuiltList);
    _BuiltList.prototype[_is__BuiltList_default] = true;
    dart.setMethodSignature(_BuiltList, () => ({
      __proto__: dart.getMethods(_BuiltList.__proto__),
      hasExactElementType: dart.fnType(core.bool, [core.Type])
    }));
    dart.setLibraryUri(_BuiltList, "package:built_collection/src/list.dart");
    return _BuiltList;
  });
  list._BuiltList = list._BuiltList$();
  dart.addTypeTests(list._BuiltList, _is__BuiltList_default);
  const _is_OverriddenHashcodeBuiltList_default = Symbol('_is_OverriddenHashcodeBuiltList_default');
  list.OverriddenHashcodeBuiltList$ = dart.generic(T => {
    class OverriddenHashcodeBuiltList extends list._BuiltList$(T) {
      get hashCode() {
        return this[_overridenHashCode$0];
      }
    }
    (OverriddenHashcodeBuiltList.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$0] = _overridenHashCode;
      OverriddenHashcodeBuiltList.__proto__.copyAndCheckTypes.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltList.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltList);
    OverriddenHashcodeBuiltList.prototype[_is_OverriddenHashcodeBuiltList_default] = true;
    dart.setLibraryUri(OverriddenHashcodeBuiltList, "package:built_collection/src/list.dart");
    dart.setFieldSignature(OverriddenHashcodeBuiltList, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltList.__proto__),
      [_overridenHashCode$0]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltList, ['hashCode']);
    return OverriddenHashcodeBuiltList;
  });
  list.OverriddenHashcodeBuiltList = list.OverriddenHashcodeBuiltList$();
  dart.addTypeTests(list.OverriddenHashcodeBuiltList, _is_OverriddenHashcodeBuiltList_default);
  const _listOwner = dart.privateName(list, "_listOwner");
  const _checkGenericTypeParameter$ = dart.privateName(list, "_checkGenericTypeParameter");
  const _setOwner$ = dart.privateName(list, "_setOwner");
  const _setSafeList = dart.privateName(list, "_setSafeList");
  const _checkElement$ = dart.privateName(list, "_checkElement");
  const _safeList = dart.privateName(list, "_safeList");
  const _checkElements$ = dart.privateName(list, "_checkElements");
  const _is_ListBuilder_default = Symbol('_is_ListBuilder_default');
  list.ListBuilder$ = dart.generic(E => {
    let _BuiltListOfE = () => (_BuiltListOfE = dart.constFn(list._BuiltList$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EToE = () => (EToE = dart.constFn(dart.fnType(E, [E])))();
    let EToIterableOfE = () => (EToIterableOfE = dart.constFn(dart.fnType(IterableOfE(), [E])))();
    class ListBuilder extends core.Object {
      static new(iterable) {
        let t0;
        if (iterable === void 0) iterable = C0 || CT.C0;
        t0 = new (list.ListBuilder$(E))._uninitialized();
        t0.replace(iterable);
        return t0;
      }
      build() {
        if (this[_listOwner] == null) {
          this[_setOwner$](new (_BuiltListOfE()).withSafeList(this[_list$]));
        }
        return this[_listOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (_BuiltListOfE().is(iterable)) {
          this[_setOwner$](iterable);
        } else {
          this[_setSafeList](ListOfE().from(iterable));
        }
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      _set(index, element$) {
        let element = element$;
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$_set](index, element);
        return element$;
      }
      get first() {
        return this[_list$][$first];
      }
      set first(value) {
        E._check(value);
        this[_checkElement$](value);
        this[_safeList][$first] = value;
      }
      get last() {
        return this[_list$][$last];
      }
      set last(value) {
        E._check(value);
        this[_checkElement$](value);
        this[_safeList][$last] = value;
      }
      get length() {
        return this[_list$][$length];
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      add(value) {
        E._check(value);
        this[_checkElement$](value);
        this[_safeList][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$addAll](iterable);
        try {
          for (let i = lengthBefore; i != safeList[$length]; i = dart.notNull(i) + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          safeList[$removeRange](lengthBefore, safeList[$length]);
          dart.rethrow(e);
        }
      }
      reverse() {
        this[_list$] = this[_list$][$reversed][$toList]({growable: true});
        this[_listOwner] = null;
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_safeList][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_safeList][$shuffle](random);
      }
      clear() {
        this[_safeList][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_checkElement$](element);
        this[_safeList][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$insertAll](index, iterable);
        let insertedLength = dart.notNull(safeList[$length]) - dart.notNull(lengthBefore);
        try {
          for (let i = index; i !== dart.notNull(index) + insertedLength; i = dart.notNull(i) + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          safeList[$removeRange](index, dart.notNull(index) + insertedLength);
          dart.rethrow(e);
        }
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setAll](index, iterable);
      }
      remove(value) {
        return this[_safeList][$remove](value);
      }
      removeAt(index) {
        return this[_safeList][$removeAt](index);
      }
      removeLast() {
        return this[_safeList][$removeLast]();
      }
      removeWhere(test) {
        this[_safeList][$removeWhere](test);
      }
      retainWhere(test) {
        this[_safeList][$retainWhere](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        this[_setSafeList](this[_list$][$sublist](start, end));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        iterable = iterables.evaluateIterable(E, iterable);
        this[_checkElements$](iterable);
        this[_safeList][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_safeList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        E._check(fillValue);
        this[_checkElement$](fillValue);
        this[_safeList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_checkElements$](iterable);
        this[_safeList][$replaceRange](start, end, iterable);
      }
      map(f) {
        EToE()._check(f);
        let result = this[_list$][$map](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        EToIterableOfE()._check(f);
        let result = this[_list$][$expand](E, f)[$toList]({growable: true});
        this[_checkElements$](result);
        this[_setSafeList](result);
      }
      take(n) {
        this[_setSafeList](this[_list$] = this[_list$][$take](n)[$toList]({growable: true}));
      }
      takeWhile(test) {
        this[_setSafeList](this[_list$] = this[_list$][$takeWhile](test)[$toList]({growable: true}));
      }
      skip(n) {
        this[_setSafeList](this[_list$][$skip](n)[$toList]({growable: true}));
      }
      skipWhile(test) {
        this[_setSafeList](this[_list$][$skipWhile](test)[$toList]({growable: true}));
      }
      [_setOwner$](listOwner) {
        this[_list$] = listOwner[_list$];
        this[_listOwner] = listOwner;
      }
      [_setSafeList](list) {
        this[_list$] = list;
        this[_listOwner] = null;
      }
      get [_safeList]() {
        if (this[_listOwner] != null) {
          this[_setSafeList](ListOfE().from(this[_list$], {growable: true}));
        }
        return this[_list$];
      }
      [_checkGenericTypeParameter$]() {
        if (dart.wrapType(E)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit element type required, " + "for example \"new ListBuilder<int>\""));
        }
      }
      [_checkElement$](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_checkElements$](elements) {
        for (let element of elements) {
          this[_checkElement$](element);
        }
      }
    }
    (ListBuilder._uninitialized = function() {
      this[_list$] = null;
      this[_listOwner] = null;
      this[_checkGenericTypeParameter$]();
    }).prototype = ListBuilder.prototype;
    dart.addTypeTests(ListBuilder);
    ListBuilder.prototype[_is_ListBuilder_default] = true;
    dart.setMethodSignature(ListBuilder, () => ({
      __proto__: dart.getMethods(ListBuilder.__proto__),
      build: dart.fnType(list.BuiltList$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [list.ListBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core.Iterable]),
      _get: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      reverse: dart.fnType(dart.void, []),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      sublist: dart.fnType(dart.void, [core.int], [core.int]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      map: dart.fnType(dart.void, [core.Object]),
      where: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      expand: dart.fnType(dart.void, [core.Object]),
      take: dart.fnType(dart.void, [core.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(dart.void, [core.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [_setOwner$]: dart.fnType(dart.void, [list._BuiltList$(E)]),
      [_setSafeList]: dart.fnType(dart.void, [core.List$(E)]),
      [_checkGenericTypeParameter$]: dart.fnType(dart.void, []),
      [_checkElement$]: dart.fnType(dart.void, [E]),
      [_checkElements$]: dart.fnType(dart.void, [core.Iterable$(E)])
    }));
    dart.setGetterSignature(ListBuilder, () => ({
      __proto__: dart.getGetters(ListBuilder.__proto__),
      first: E,
      last: E,
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeList]: core.List$(E)
    }));
    dart.setSetterSignature(ListBuilder, () => ({
      __proto__: dart.getSetters(ListBuilder.__proto__),
      first: core.Object,
      last: core.Object
    }));
    dart.setLibraryUri(ListBuilder, "package:built_collection/src/list.dart");
    dart.setFieldSignature(ListBuilder, () => ({
      __proto__: dart.getFields(ListBuilder.__proto__),
      [_list$]: dart.fieldType(core.List$(E)),
      [_listOwner]: dart.fieldType(list._BuiltList$(E))
    }));
    return ListBuilder;
  });
  list.ListBuilder = list.ListBuilder$();
  dart.addTypeTests(list.ListBuilder, _is_ListBuilder_default);
  const _list$0 = dart.privateName(copy_on_write_list, "_list");
  const _growable$ = dart.privateName(copy_on_write_list, "_growable");
  const _copyBeforeWrite$0 = dart.privateName(copy_on_write_list, "_copyBeforeWrite");
  const _maybeCopyBeforeWrite$0 = dart.privateName(copy_on_write_list, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteList_default = Symbol('_is_CopyOnWriteList_default');
  copy_on_write_list.CopyOnWriteList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class CopyOnWriteList extends core.Object {
      get length() {
        return this[_list$0][$length];
      }
      _get(index) {
        return this[_list$0][$_get](index);
      }
      ['+'](other) {
        ListOfE()._check(other);
        return this[_list$0][$plus](other);
      }
      any(test) {
        return this[_list$0][$any](test);
      }
      asMap() {
        return this[_list$0][$asMap]();
      }
      cast(T) {
        return new (copy_on_write_list.CopyOnWriteList$(T)).new(this[_list$0][$cast](T), this[_growable$]);
      }
      contains(element) {
        return this[_list$0][$contains](element);
      }
      elementAt(index) {
        return this[_list$0][$elementAt](index);
      }
      every(test) {
        return this[_list$0][$every](test);
      }
      expand(T, f) {
        return this[_list$0][$expand](T, f);
      }
      get first() {
        return this[_list$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_list$0][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_list$0][$followedBy](other);
      }
      forEach(f) {
        return this[_list$0][$forEach](f);
      }
      getRange(start, end) {
        return this[_list$0][$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_list$0][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_list$0][$indexWhere](test, start);
      }
      get isEmpty() {
        return this[_list$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$0][$isNotEmpty];
      }
      get iterator() {
        return this[_list$0][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_list$0][$join](separator);
      }
      get last() {
        return this[_list$0][$last];
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_list$0][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_list$0][$lastIndexWhere](test, start);
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_list$0][$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_list$0][$reduce](combine);
      }
      get reversed() {
        return this[_list$0][$reversed];
      }
      get single() {
        return this[_list$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_list$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_list$0][$skip](count);
      }
      skipWhile(test) {
        return this[_list$0][$skipWhile](test);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_list$0][$sublist](start, end);
      }
      take(count) {
        return this[_list$0][$take](count);
      }
      takeWhile(test) {
        return this[_list$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_list$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_list$0][$toSet]();
      }
      where(test) {
        return this[_list$0][$where](test);
      }
      whereType(T) {
        return this[_list$0][$whereType](T);
      }
      set length(length) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$length] = length;
      }
      _set(index, element$) {
        let element = element$;
        E._check(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$_set](index, element);
        return element$;
      }
      set first(element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$first] = element;
      }
      set last(element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$last] = element;
      }
      add(value) {
        E._check(value);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$addAll](iterable);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$sort](compare);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$shuffle](random);
      }
      clear() {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$clear]();
      }
      insert(index, element) {
        E._check(element);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$setAll](index, iterable);
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$remove](value);
      }
      removeAt(index) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$removeAt](index);
      }
      removeLast() {
        this[_maybeCopyBeforeWrite$0]();
        return this[_list$0][$removeLast]();
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$removeWhere](test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_maybeCopyBeforeWrite$0]();
        this[_list$0][$replaceRange](start, end, iterable);
      }
      toString() {
        return dart.toString(this[_list$0]);
      }
      [_maybeCopyBeforeWrite$0]() {
        if (!dart.test(this[_copyBeforeWrite$0])) return;
        this[_copyBeforeWrite$0] = false;
        this[_list$0] = ListOfE().from(this[_list$0], {growable: this[_growable$]});
      }
    }
    (CopyOnWriteList.new = function(_list, _growable) {
      this[_list$0] = _list;
      this[_growable$] = _growable;
      this[_copyBeforeWrite$0] = true;
      ;
    }).prototype = CopyOnWriteList.prototype;
    CopyOnWriteList.prototype[dart.isList] = true;
    dart.addTypeTests(CopyOnWriteList);
    CopyOnWriteList.prototype[_is_CopyOnWriteList_default] = true;
    CopyOnWriteList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(CopyOnWriteList, () => ({
      __proto__: dart.getMethods(CopyOnWriteList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [_maybeCopyBeforeWrite$0]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getGetters(CopyOnWriteList.__proto__),
      length: core.int,
      [$length]: core.int,
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E),
      single: E,
      [$single]: E
    }));
    dart.setSetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getSetters(CopyOnWriteList.__proto__),
      length: core.int,
      [$length]: core.int,
      first: core.Object,
      [$first]: core.Object,
      last: core.Object,
      [$last]: core.Object
    }));
    dart.setLibraryUri(CopyOnWriteList, "package:built_collection/src/internal/copy_on_write_list.dart");
    dart.setFieldSignature(CopyOnWriteList, () => ({
      __proto__: dart.getFields(CopyOnWriteList.__proto__),
      [_copyBeforeWrite$0]: dart.fieldType(core.bool),
      [_growable$]: dart.fieldType(core.bool),
      [_list$0]: dart.fieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CopyOnWriteList, [
      '_get',
      '+',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      '_set',
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteList, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'reversed',
      'single'
    ]);
    return CopyOnWriteList;
  });
  copy_on_write_list.CopyOnWriteList = copy_on_write_list.CopyOnWriteList$();
  dart.addTypeTests(copy_on_write_list.CopyOnWriteList, _is_CopyOnWriteList_default);
  const _overridenHashCode$1 = dart.privateName(set_multimap, "_overridenHashCode");
  const _map$0 = dart.privateName(set_multimap, "_map");
  const _emptySet = dart.privateName(set_multimap, "_emptySet");
  const _hashCode$0 = dart.privateName(set_multimap, "_hashCode");
  const _keys = dart.privateName(set_multimap, "_keys");
  const _values = dart.privateName(set_multimap, "_values");
  let C1;
  const _is_BuiltSetMultimap_default = Symbol('_is_BuiltSetMultimap_default');
  set_multimap.BuiltSetMultimap$ = dart.generic((K, V) => {
    let SetMultimapBuilderOfK$V = () => (SetMultimapBuilderOfK$V = dart.constFn(set_multimap.SetMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltSetOfV = () => (CopyOnWriteMapOfK$BuiltSetOfV = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, BuiltSetOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core.Map$(K, IterableOfV())))();
    let KAndBuiltSetOfVToNull = () => (KAndBuiltSetOfVToNull = dart.constFn(dart.fnType(core.Null, [K, BuiltSetOfV()])))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core.Null, [V])))();
    let BuiltSetOfVToBuiltSetOfV = () => (BuiltSetOfVToBuiltSetOfV = dart.constFn(dart.fnType(BuiltSetOfV(), [BuiltSetOfV()])))();
    class BuiltSetMultimap extends core.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = C1 || CT.C1;
        if (set_multimap._BuiltSetMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return set_multimap.BuiltSetMultimap$(K, V).as(multimap);
        } else if (core.Map.is(multimap) || collection$.SetMultimap.is(multimap) || set_multimap.BuiltSetMultimap.is(multimap)) {
          return new (set_multimap._BuiltSetMultimap$(K, V)).copyAndCheck(core.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      static build(updates) {
        let t2;
        return (t2 = set_multimap.SetMultimapBuilder$(K, V).new(), t2.update(updates), t2).build();
      }
      toBuilder() {
        return SetMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        let t2;
        return (t2 = this.toBuilder(), t2.update(updates), t2).build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltSetOfV()).new(this[_map$0]);
      }
      get hashCode() {
        let t2;
        if (this[_hashCode$0] == null) {
          this[_hashCode$0] = core$.hashObjects((t2 = this[_map$0][$keys][$map](core.int, dart.fn(key => core$.hash2(dart.hashCode(key), dart.hashCode(this[_map$0][$_get](key))), KToint()))[$toList]({growable: false}), t2[$sort](), t2));
        }
        return this[_hashCode$0];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!set_multimap.BuiltSetMultimap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map$0]);
      }
      toString() {
        return dart.toString(this[_map$0]);
      }
      _get(key) {
        let result = this[_map$0][$_get](key);
        return result == null ? this[_emptySet] : result;
      }
      containsKey(key) {
        return this[_map$0][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$0][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VToNull()));
        }, KAndBuiltSetOfVToNull()));
      }
      forEachKey(f) {
        this[_map$0][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltSetOfVToNull()));
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      get keys() {
        if (this[_keys] == null) {
          this[_keys] = this[_map$0][$keys];
        }
        return this[_keys];
      }
      get length() {
        return this[_map$0][$length];
      }
      get values() {
        if (this[_values] == null) {
          this[_values] = this[_map$0][$values][$expand](V, dart.fn(x => x, BuiltSetOfVToBuiltSetOfV()));
        }
        return this[_values];
      }
    }
    (BuiltSetMultimap.__ = function(_map) {
      this[_emptySet] = BuiltSetOfV().new();
      this[_hashCode$0] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map$0] = _map;
      if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltSetMultimap<int, int>\""));
      }
      if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltSetMultimap<int, int>\""));
      }
    }).prototype = BuiltSetMultimap.prototype;
    dart.addTypeTests(BuiltSetMultimap);
    BuiltSetMultimap.prototype[_is_BuiltSetMultimap_default] = true;
    dart.setMethodSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(BuiltSetMultimap.__proto__),
      toBuilder: dart.fnType(set_multimap.SetMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(set_multimap.BuiltSetMultimap$(K, V), [dart.fnType(dart.dynamic, [set_multimap.SetMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core.Map$(K, set.BuiltSet$(V)), []),
      asMap: dart.fnType(core.Map$(K, core.Iterable$(V)), []),
      _get: dart.fnType(set.BuiltSet$(V), [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getGetters(BuiltSetMultimap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V)
    }));
    dart.setLibraryUri(BuiltSetMultimap, "package:built_collection/src/set_multimap.dart");
    dart.setFieldSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getFields(BuiltSetMultimap.__proto__),
      [_map$0]: dart.finalFieldType(core.Map$(K, set.BuiltSet$(V))),
      [_emptySet]: dart.finalFieldType(set.BuiltSet$(V)),
      [_hashCode$0]: dart.fieldType(core.int),
      [_keys]: dart.fieldType(core.Iterable$(K)),
      [_values]: dart.fieldType(core.Iterable$(V))
    }));
    dart.defineExtensionMethods(BuiltSetMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltSetMultimap, ['hashCode']);
    return BuiltSetMultimap;
  });
  set_multimap.BuiltSetMultimap = set_multimap.BuiltSetMultimap$();
  dart.addTypeTests(set_multimap.BuiltSetMultimap, _is_BuiltSetMultimap_default);
  const _is__BuiltSetMultimap_default = Symbol('_is__BuiltSetMultimap_default');
  set_multimap._BuiltSetMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    class _BuiltSetMultimap extends set_multimap.BuiltSetMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)[$_equals](key) && dart.wrapType(V)[$_equals](value);
      }
    }
    (_BuiltSetMultimap.withSafeMap = function(map) {
      _BuiltSetMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltSetMultimap.prototype;
    (_BuiltSetMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltSetMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltSetOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$0][$_set](key, BuiltSetOfV().new(core.Iterable._check(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltSetMultimap.prototype;
    dart.addTypeTests(_BuiltSetMultimap);
    _BuiltSetMultimap.prototype[_is__BuiltSetMultimap_default] = true;
    dart.setMethodSignature(_BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(_BuiltSetMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltSetMultimap, "package:built_collection/src/set_multimap.dart");
    return _BuiltSetMultimap;
  });
  set_multimap._BuiltSetMultimap = set_multimap._BuiltSetMultimap$();
  dart.addTypeTests(set_multimap._BuiltSetMultimap, _is__BuiltSetMultimap_default);
  const _is_OverriddenHashcodeBuiltSetMultimap_default = Symbol('_is_OverriddenHashcodeBuiltSetMultimap_default');
  set_multimap.OverriddenHashcodeBuiltSetMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltSetMultimap extends set_multimap._BuiltSetMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$1];
      }
    }
    (OverriddenHashcodeBuiltSetMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$1] = _overridenHashCode;
      OverriddenHashcodeBuiltSetMultimap.__proto__.copyAndCheck.call(this, core.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltSetMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSetMultimap);
    OverriddenHashcodeBuiltSetMultimap.prototype[_is_OverriddenHashcodeBuiltSetMultimap_default] = true;
    dart.setLibraryUri(OverriddenHashcodeBuiltSetMultimap, "package:built_collection/src/set_multimap.dart");
    dart.setFieldSignature(OverriddenHashcodeBuiltSetMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSetMultimap.__proto__),
      [_overridenHashCode$1]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSetMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltSetMultimap;
  });
  set_multimap.OverriddenHashcodeBuiltSetMultimap = set_multimap.OverriddenHashcodeBuiltSetMultimap$();
  dart.addTypeTests(set_multimap.OverriddenHashcodeBuiltSetMultimap, _is_OverriddenHashcodeBuiltSetMultimap_default);
  const _builtMap = dart.privateName(set_multimap, "_builtMap");
  const _builtMapOwner = dart.privateName(set_multimap, "_builtMapOwner");
  const _builderMap = dart.privateName(set_multimap, "_builderMap");
  const _checkGenericTypeParameter$0 = dart.privateName(set_multimap, "_checkGenericTypeParameter");
  const _setOwner$0 = dart.privateName(set_multimap, "_setOwner");
  const _setWithCopyAndCheck = dart.privateName(set_multimap, "_setWithCopyAndCheck");
  const _makeWriteableCopy = dart.privateName(set_multimap, "_makeWriteableCopy");
  const _checkKey = dart.privateName(set_multimap, "_checkKey");
  const _checkValue = dart.privateName(set_multimap, "_checkValue");
  const _getValuesBuilder = dart.privateName(set_multimap, "_getValuesBuilder");
  const _is_SetMultimapBuilder_default = Symbol('_is_SetMultimapBuilder_default');
  set_multimap.SetMultimapBuilder$ = dart.generic((K, V) => {
    let _BuiltSetMultimapOfK$V = () => (_BuiltSetMultimapOfK$V = dart.constFn(set_multimap._BuiltSetMultimap$(K, V)))();
    let SetMultimapOfK$V = () => (SetMultimapOfK$V = dart.constFn(collection$.SetMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let LinkedHashMapOfK$BuiltSetOfV = () => (LinkedHashMapOfK$BuiltSetOfV = dart.constFn(collection.LinkedHashMap$(K, BuiltSetOfV())))();
    let LinkedMapOfK$SetBuilderOfV = () => (LinkedMapOfK$SetBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, SetBuilderOfV())))();
    let LinkedMapOfK$BuiltSetOfV = () => (LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltSetOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core.Null, [V])))();
    let SetBuilderOfV = () => (SetBuilderOfV = dart.constFn(set.SetBuilder$(V)))();
    let BuiltSetOfV = () => (BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    class SetMultimapBuilder extends core.Object {
      static new(multimap) {
        let t2;
        if (multimap === void 0) multimap = C1 || CT.C1;
        t2 = new (set_multimap.SetMultimapBuilder$(K, V))._uninitialized();
        t2.replace(multimap);
        return t2;
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtSet = this[_builderMap][$_get](key).build();
            if (dart.test(builtSet.isEmpty)) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtSet);
            }
          }
          this[_builtMapOwner] = new (_BuiltSetMultimapOfK$V()).withSafeMap(this[_builtMap]);
        }
        return this[_builtMapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltSetMultimapOfK$V().is(multimap)) {
          this[_setOwner$0](multimap);
        } else if (core.Map.is(multimap) || collection$.SetMultimap.is(multimap) || set_multimap.BuiltSetMultimap.is(multimap)) {
          this[_setWithCopyAndCheck](core.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, SetMultimap or BuiltSetMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.fnType(IterableOfV(), [T])._check(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_makeWriteableCopy]();
        this[_checkKey](key);
        this[_checkValue](value);
        this[_getValuesBuilder](key).add(value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VToNull()));
      }
      addAll(other) {
        SetMultimapOfK$V()._check(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KAndVToNull()));
      }
      remove(key, value) {
        V._check(value);
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_getValuesBuilder](key).remove(value);
        }
      }
      removeAll(key) {
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_builtMap] = this[_builtMap];
          this[_builderMap][$_set](key, SetBuilderOfV().new());
        }
      }
      clear() {
        this[_makeWriteableCopy]();
        this[_builtMap][$clear]();
        this[_builderMap][$clear]();
      }
      [_getValuesBuilder](key) {
        let result = this[_builderMap][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap][$_get](key);
          if (builtValues == null) {
            result = SetBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = LinkedHashMapOfK$BuiltSetOfV().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner$0](builtSetMultimap) {
        this[_builtMapOwner] = builtSetMultimap;
        this[_builtMap] = builtSetMultimap[_map$0];
        this[_builderMap] = new (LinkedMapOfK$SetBuilderOfV()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (LinkedMapOfK$BuiltSetOfV()).new();
        this[_builderMap] = new (LinkedMapOfK$SetBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core.Iterable._check(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$0]() {
        if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
        if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new SetMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("invalid key: " + dart.str(key)));
        }
      }
      [_checkValue](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("invalid value: " + dart.str(value)));
        }
      }
    }
    (SetMultimapBuilder._uninitialized = function() {
      this[_builtMap] = null;
      this[_builtMapOwner] = null;
      this[_builderMap] = null;
      this[_checkGenericTypeParameter$0]();
    }).prototype = SetMultimapBuilder.prototype;
    dart.addTypeTests(SetMultimapBuilder);
    SetMultimapBuilder.prototype[_is_SetMultimapBuilder_default] = true;
    dart.setMethodSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapBuilder.__proto__),
      build: dart.fnType(set_multimap.BuiltSetMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [set_multimap.SetMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: core.Object, value: core.Object, values: core.Object}]),
      add: dart.fnType(dart.void, [core.Object, core.Object]),
      addValues: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(dart.void, [core.Object, core.Object]),
      removeAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(set.SetBuilder$(V), [K]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner$0]: dart.fnType(dart.void, [set_multimap._BuiltSetMultimap$(K, V)]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [core.Iterable, core.Function]),
      [_checkGenericTypeParameter$0]: dart.fnType(dart.void, []),
      [_checkKey]: dart.fnType(dart.void, [K]),
      [_checkValue]: dart.fnType(dart.void, [V])
    }));
    dart.setLibraryUri(SetMultimapBuilder, "package:built_collection/src/set_multimap.dart");
    dart.setFieldSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getFields(SetMultimapBuilder.__proto__),
      [_builtMap]: dart.fieldType(core.Map$(K, set.BuiltSet$(V))),
      [_builtMapOwner]: dart.fieldType(set_multimap._BuiltSetMultimap$(K, V)),
      [_builderMap]: dart.fieldType(core.Map$(K, set.SetBuilder$(V)))
    }));
    return SetMultimapBuilder;
  });
  set_multimap.SetMultimapBuilder = set_multimap.SetMultimapBuilder$();
  dart.addTypeTests(set_multimap.SetMultimapBuilder, _is_SetMultimapBuilder_default);
  const _overrridenHashCode$ = dart.privateName(map$, "_overrridenHashCode");
  const _map$1 = dart.privateName(map$, "_map");
  const _hashCode$1 = dart.privateName(map$, "_hashCode");
  const _keys$ = dart.privateName(map$, "_keys");
  const _values$ = dart.privateName(map$, "_values");
  const _mapFactory$0 = dart.privateName(map$, "_mapFactory");
  const _is_BuiltMap_default = Symbol('_is_BuiltMap_default');
  map$.BuiltMap$ = dart.generic((K, V) => {
    let MapBuilderOfK$V = () => (MapBuilderOfK$V = dart.constFn(map$.MapBuilder$(K, V)))();
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(map$._BuiltMap$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let CopyOnWriteMapOfK$V = () => (CopyOnWriteMapOfK$V = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, V)))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core.int, [K])))();
    class BuiltMap extends core.Object {
      static new(map) {
        if (map === void 0) map = C1 || CT.C1;
        if (map$._BuiltMap.is(map) && dart.test(map.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return map$.BuiltMap$(K, V).as(map);
        } else if (core.Map.is(map) || map$.BuiltMap.is(map)) {
          return new (map$._BuiltMap$(K, V)).copyAndCheckTypes(core.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      static from(map) {
        return new (map$._BuiltMap$(K, V)).copyAndCheckTypes(map[$keys], dart.fn(k => map[$_get](k), dynamicTodynamic()));
      }
      static of(map) {
        return new (map$._BuiltMap$(K, V)).copyAndCheckForNull(map[$keys], dart.fn(k => map[$_get](k), dart.fnType(V, [K])));
      }
      static build(updates) {
        let t2;
        return (t2 = map$.MapBuilder$(K, V).new(), t2.update(updates), t2).build();
      }
      toBuilder() {
        return new (MapBuilderOfK$V())._fromBuiltMap(_BuiltMapOfK$V()._check(this));
      }
      rebuild(updates) {
        let t2;
        return (t2 = this.toBuilder(), t2.update(updates), t2).build();
      }
      asMap() {
        return MapOfK$V().unmodifiable(this[_map$1]);
      }
      toMap() {
        return new (CopyOnWriteMapOfK$V()).new(this[_map$1], this[_mapFactory$0]);
      }
      get hashCode() {
        let t2;
        if (this[_hashCode$1] == null) {
          this[_hashCode$1] = core$.hashObjects((t2 = this[_map$1][$keys][$map](core.int, dart.fn(key => core$.hash2(dart.hashCode(key), dart.hashCode(this[_map$1][$_get](key))), KToint()))[$toList]({growable: false}), t2[$sort](), t2));
        }
        return this[_hashCode$1];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!map$.BuiltMap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$1]);
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      containsKey(key) {
        return this[_map$1][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$1][$containsValue](value);
      }
      forEach(f) {
        this[_map$1][$forEach](f);
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      get keys() {
        if (this[_keys$] == null) {
          this[_keys$] = this[_map$1][$keys];
        }
        return this[_keys$];
      }
      get length() {
        return this[_map$1][$length];
      }
      get values() {
        if (this[_values$] == null) {
          this[_values$] = this[_map$1][$values];
        }
        return this[_values$];
      }
      get entries() {
        return this[_map$1][$entries];
      }
      map(K2, V2, f) {
        return new (map$._BuiltMap$(K2, V2)).withSafeMap(null, this[_map$1][$map](K2, V2, f));
      }
    }
    (BuiltMap.__ = function(_mapFactory, _map) {
      this[_hashCode$1] = null;
      this[_keys$] = null;
      this[_values$] = null;
      this[_mapFactory$0] = _mapFactory;
      this[_map$1] = _map;
      if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, for example \"new BuiltMap<int, int>\""));
      }
      if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltMap<int, int>\""));
      }
    }).prototype = BuiltMap.prototype;
    dart.addTypeTests(BuiltMap);
    BuiltMap.prototype[_is_BuiltMap_default] = true;
    dart.setMethodSignature(BuiltMap, () => ({
      __proto__: dart.getMethods(BuiltMap.__proto__),
      toBuilder: dart.fnType(map$.MapBuilder$(K, V), []),
      rebuild: dart.fnType(map$.BuiltMap$(K, V), [dart.fnType(dart.dynamic, [map$.MapBuilder$(K, V)])]),
      asMap: dart.fnType(core.Map$(K, V), []),
      toMap: dart.fnType(core.Map$(K, V), []),
      _get: dart.fnType(V, [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [map$.BuiltMap$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]])
    }));
    dart.setGetterSignature(BuiltMap, () => ({
      __proto__: dart.getGetters(BuiltMap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V),
      entries: core.Iterable$(core.MapEntry$(K, V))
    }));
    dart.setLibraryUri(BuiltMap, "package:built_collection/src/map.dart");
    dart.setFieldSignature(BuiltMap, () => ({
      __proto__: dart.getFields(BuiltMap.__proto__),
      [_mapFactory$0]: dart.finalFieldType(dart.fnType(core.Map$(K, V), [])),
      [_map$1]: dart.finalFieldType(core.Map$(K, V)),
      [_hashCode$1]: dart.fieldType(core.int),
      [_keys$]: dart.fieldType(core.Iterable$(K)),
      [_values$]: dart.fieldType(core.Iterable$(V))
    }));
    dart.defineExtensionMethods(BuiltMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltMap, ['hashCode']);
    return BuiltMap;
  });
  map$.BuiltMap = map$.BuiltMap$();
  dart.addTypeTests(map$.BuiltMap, _is_BuiltMap_default);
  const _is__BuiltMap_default = Symbol('_is__BuiltMap_default');
  map$._BuiltMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    class _BuiltMap extends map$.BuiltMap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)[$_equals](key) && dart.wrapType(V)[$_equals](value);
      }
    }
    (_BuiltMap.withSafeMap = function(mapFactory, map) {
      _BuiltMap.__proto__.__.call(this, mapFactory, map);
      ;
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckTypes = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (K.is(key)) {
          let value = dart.dcall(lookup, [key]);
          if (V.is(value)) {
            this[_map$1][$_set](key, value);
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value)));
          }
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckForNull = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid key: null"));
        }
        let value = lookup(key);
        if (value == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid value: null"));
        }
        this[_map$1][$_set](key, value);
      }
    }).prototype = _BuiltMap.prototype;
    dart.addTypeTests(_BuiltMap);
    _BuiltMap.prototype[_is__BuiltMap_default] = true;
    dart.setMethodSignature(_BuiltMap, () => ({
      __proto__: dart.getMethods(_BuiltMap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltMap, "package:built_collection/src/map.dart");
    return _BuiltMap;
  });
  map$._BuiltMap = map$._BuiltMap$();
  dart.addTypeTests(map$._BuiltMap, _is__BuiltMap_default);
  const _is_OverriddenHashcodeBuiltMap_default = Symbol('_is_OverriddenHashcodeBuiltMap_default');
  map$.OverriddenHashcodeBuiltMap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltMap extends map$._BuiltMap$(K, V) {
      get hashCode() {
        return this[_overrridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltMap.new = function(map, _overrridenHashCode) {
      this[_overrridenHashCode$] = _overrridenHashCode;
      OverriddenHashcodeBuiltMap.__proto__.copyAndCheckTypes.call(this, core.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltMap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltMap);
    OverriddenHashcodeBuiltMap.prototype[_is_OverriddenHashcodeBuiltMap_default] = true;
    dart.setLibraryUri(OverriddenHashcodeBuiltMap, "package:built_collection/src/map.dart");
    dart.setFieldSignature(OverriddenHashcodeBuiltMap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltMap.__proto__),
      [_overrridenHashCode$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltMap, ['hashCode']);
    return OverriddenHashcodeBuiltMap;
  });
  map$.OverriddenHashcodeBuiltMap = map$.OverriddenHashcodeBuiltMap$();
  dart.addTypeTests(map$.OverriddenHashcodeBuiltMap, _is_OverriddenHashcodeBuiltMap_default);
  const _mapOwner = dart.privateName(map$, "_mapOwner");
  const _checkGenericTypeParameter$1 = dart.privateName(map$, "_checkGenericTypeParameter");
  const _setOwner$1 = dart.privateName(map$, "_setOwner");
  const _createMap = dart.privateName(map$, "_createMap");
  const _setSafeMap = dart.privateName(map$, "_setSafeMap");
  const _checkKey$ = dart.privateName(map$, "_checkKey");
  const _checkValue$ = dart.privateName(map$, "_checkValue");
  const _safeMap = dart.privateName(map$, "_safeMap");
  const _checkKeys = dart.privateName(map$, "_checkKeys");
  const _checkValues = dart.privateName(map$, "_checkValues");
  const _is_MapBuilder_default = Symbol('_is_MapBuilder_default');
  map$.MapBuilder$ = dart.generic((K, V) => {
    let _BuiltMapOfK$V = () => (_BuiltMapOfK$V = dart.constFn(map$._BuiltMap$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let VoidToMapOfK$V = () => (VoidToMapOfK$V = dart.constFn(dart.fnType(MapOfK$V(), [])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class MapBuilder extends core.Object {
      static new(map) {
        let t2;
        if (map === void 0) map = C1 || CT.C1;
        t2 = new (map$.MapBuilder$(K, V))._uninitialized();
        t2.replace(map);
        return t2;
      }
      build() {
        if (this[_mapOwner] == null) {
          this[_mapOwner] = new (_BuiltMapOfK$V()).withSafeMap(this[_mapFactory$0], this[_map$1]);
        }
        return this[_mapOwner];
      }
      update(updates) {
        updates(this);
      }
      replace(map) {
        if (_BuiltMapOfK$V().is(map) && dart.equals(map[_mapFactory$0], this[_mapFactory$0])) {
          this[_setOwner$1](map);
        } else if (map$.BuiltMap.is(map)) {
          let replacement = this[_createMap]();
          map.forEach(dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else if (core.Map.is(map)) {
          let replacement = this[_createMap]();
          map[$forEach](dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, ObjectAndObjectToNull()));
          this[_setSafeMap](replacement);
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      withBase(base) {
        let t2;
        VoidToMapOfK$V()._check(base);
        if (base == null) {
          dart.throw(new core.ArgumentError.notNull("base"));
        }
        this[_mapFactory$0] = base;
        this[_setSafeMap]((t2 = this[_createMap](), t2[$addAll](this[_map$1]), t2));
      }
      withDefaultBase() {
        let t2;
        this[_mapFactory$0] = null;
        this[_setSafeMap]((t2 = this[_createMap](), t2[$addAll](this[_map$1]), t2));
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
        for (let element of iterable) {
          this._set(key(element), value(element));
        }
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this[_checkKey$](key);
        this[_checkValue$](value);
        this[_safeMap][$_set](key, value);
        return value$;
      }
      get length() {
        return this[_map$1][$length];
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        this[_checkKey$](key);
        return this[_safeMap][$putIfAbsent](key, dart.fn(() => {
          let value = ifAbsent();
          this[_checkValue$](value);
          return value;
        }, VoidToV()));
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_checkKeys](other[$keys]);
        this[_checkValues](other[$values]);
        this[_safeMap][$addAll](other);
      }
      remove(key) {
        return this[_safeMap][$remove](key);
      }
      removeWhere(predicate) {
        this[_safeMap][$removeWhere](predicate);
      }
      clear() {
        this[_safeMap][$clear]();
      }
      addEntries(newEntries) {
        IterableOfMapEntryOfK$V()._check(newEntries);
        this[_safeMap][$addEntries](newEntries);
      }
      updateValue(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_safeMap][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAllValues(update) {
        KAndVToV()._check(update);
        this[_safeMap][$updateAll](update);
      }
      [_setOwner$1](mapOwner) {
        if (!dart.equals(mapOwner[_mapFactory$0], this[_mapFactory$0])) dart.assertFailed("Can't reuse a built map that uses a different base", "org-dartlang-app:///packages/built_collection/src/map/map_builder.dart", 191, 12, "mapOwner._mapFactory == _mapFactory");
        this[_mapOwner] = mapOwner;
        this[_map$1] = mapOwner[_map$1];
      }
      [_setSafeMap](map) {
        this[_mapOwner] = null;
        this[_map$1] = map;
      }
      get [_safeMap]() {
        let t2;
        if (this[_mapOwner] != null) {
          this[_map$1] = (t2 = this[_createMap](), t2[$addAll](this[_map$1]), t2);
          this[_mapOwner] = null;
        }
        return this[_map$1];
      }
      [_createMap]() {
        return this[_mapFactory$0] != null ? this[_mapFactory$0]() : new (LinkedMapOfK$V()).new();
      }
      [_checkGenericTypeParameter$1]() {
        if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, for example \"new MapBuilder<int, int>\""));
        }
        if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new MapBuilder<int, int>\""));
        }
      }
      [_checkKey$](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkKeys](keys) {
        for (let key of keys) {
          this[_checkKey$](key);
        }
      }
      [_checkValue$](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
      [_checkValues](values) {
        for (let value of values) {
          this[_checkValue$](value);
        }
      }
    }
    (MapBuilder._uninitialized = function() {
      this[_mapOwner] = null;
      this[_map$1] = null;
      this[_mapFactory$0] = null;
      this[_checkGenericTypeParameter$1]();
    }).prototype = MapBuilder.prototype;
    (MapBuilder._fromBuiltMap = function(map) {
      this[_mapFactory$0] = map[_mapFactory$0];
      this[_map$1] = map[_map$1];
      this[_mapOwner] = map;
      ;
    }).prototype = MapBuilder.prototype;
    dart.addTypeTests(MapBuilder);
    MapBuilder.prototype[_is_MapBuilder_default] = true;
    dart.setMethodSignature(MapBuilder, () => ({
      __proto__: dart.getMethods(MapBuilder.__proto__),
      build: dart.fnType(map$.BuiltMap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [map$.MapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [core.Object]),
      withBase: dart.fnType(dart.void, [core.Object]),
      withDefaultBase: dart.fnType(dart.void, []),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: core.Object, value: core.Object}]),
      _get: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      clear: dart.fnType(dart.void, []),
      addEntries: dart.fnType(dart.void, [core.Object]),
      updateValue: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAllValues: dart.fnType(dart.void, [core.Object]),
      [_setOwner$1]: dart.fnType(dart.void, [map$._BuiltMap$(K, V)]),
      [_setSafeMap]: dart.fnType(dart.void, [core.Map$(K, V)]),
      [_createMap]: dart.fnType(core.Map$(K, V), []),
      [_checkGenericTypeParameter$1]: dart.fnType(dart.void, []),
      [_checkKey$]: dart.fnType(dart.void, [K]),
      [_checkKeys]: dart.fnType(dart.void, [core.Iterable$(K)]),
      [_checkValue$]: dart.fnType(dart.void, [V]),
      [_checkValues]: dart.fnType(dart.void, [core.Iterable$(V)])
    }));
    dart.setGetterSignature(MapBuilder, () => ({
      __proto__: dart.getGetters(MapBuilder.__proto__),
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeMap]: core.Map$(K, V)
    }));
    dart.setLibraryUri(MapBuilder, "package:built_collection/src/map.dart");
    dart.setFieldSignature(MapBuilder, () => ({
      __proto__: dart.getFields(MapBuilder.__proto__),
      [_mapFactory$0]: dart.fieldType(dart.fnType(core.Map$(K, V), [])),
      [_map$1]: dart.fieldType(core.Map$(K, V)),
      [_mapOwner]: dart.fieldType(map$._BuiltMap$(K, V))
    }));
    return MapBuilder;
  });
  map$.MapBuilder = map$.MapBuilder$();
  dart.addTypeTests(map$.MapBuilder, _is_MapBuilder_default);
  const _overridenHashCode$2 = dart.privateName(list_multimap, "_overridenHashCode");
  const _map$2 = dart.privateName(list_multimap, "_map");
  const _emptyList = dart.privateName(list_multimap, "_emptyList");
  const _hashCode$2 = dart.privateName(list_multimap, "_hashCode");
  const _keys$0 = dart.privateName(list_multimap, "_keys");
  const _values$0 = dart.privateName(list_multimap, "_values");
  const _is_BuiltListMultimap_default = Symbol('_is_BuiltListMultimap_default');
  list_multimap.BuiltListMultimap$ = dart.generic((K, V) => {
    let ListMultimapBuilderOfK$V = () => (ListMultimapBuilderOfK$V = dart.constFn(list_multimap.ListMultimapBuilder$(K, V)))();
    let CopyOnWriteMapOfK$BuiltListOfV = () => (CopyOnWriteMapOfK$BuiltListOfV = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, BuiltListOfV())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core.int, [K])))();
    let MapOfK$IterableOfV = () => (MapOfK$IterableOfV = dart.constFn(core.Map$(K, IterableOfV())))();
    let KAndBuiltListOfVToNull = () => (KAndBuiltListOfVToNull = dart.constFn(dart.fnType(core.Null, [K, BuiltListOfV()])))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core.Null, [V])))();
    let BuiltListOfVToBuiltListOfV = () => (BuiltListOfVToBuiltListOfV = dart.constFn(dart.fnType(BuiltListOfV(), [BuiltListOfV()])))();
    class BuiltListMultimap extends core.Object {
      static new(multimap) {
        if (multimap === void 0) multimap = C1 || CT.C1;
        if (list_multimap._BuiltListMultimap.is(multimap) && dart.test(multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V)))) {
          return list_multimap.BuiltListMultimap$(K, V).as(multimap);
        } else if (core.Map.is(multimap) || collection$.ListMultimap.is(multimap) || list_multimap.BuiltListMultimap.is(multimap)) {
          return new (list_multimap._BuiltListMultimap$(K, V)).copyAndCheck(core.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      static build(updates) {
        let t2;
        return (t2 = list_multimap.ListMultimapBuilder$(K, V).new(), t2.update(updates), t2).build();
      }
      toBuilder() {
        return ListMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        let t2;
        return (t2 = this.toBuilder(), t2.update(updates), t2).build();
      }
      toMap() {
        return new (CopyOnWriteMapOfK$BuiltListOfV()).new(this[_map$2]);
      }
      get hashCode() {
        let t2;
        if (this[_hashCode$2] == null) {
          this[_hashCode$2] = core$.hashObjects((t2 = this[_map$2][$keys][$map](core.int, dart.fn(key => core$.hash2(dart.hashCode(key), dart.hashCode(this[_map$2][$_get](key))), KToint()))[$toList]({growable: false}), t2[$sort](), t2));
        }
        return this[_hashCode$2];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!list_multimap.BuiltListMultimap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'length'), this.length)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(dart.dsend(other, '_get', [key]), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return dart.toString(this[_map$2]);
      }
      asMap() {
        return MapOfK$IterableOfV().unmodifiable(this[_map$2]);
      }
      _get(key) {
        let result = this[_map$2][$_get](key);
        return result == null ? this[_emptyList] : result;
      }
      containsKey(key) {
        return this[_map$2][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, VToNull()));
        }, KAndBuiltListOfVToNull()));
      }
      forEachKey(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, KAndBuiltListOfVToNull()));
      }
      get isEmpty() {
        return this[_map$2][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$2][$isNotEmpty];
      }
      get keys() {
        if (this[_keys$0] == null) {
          this[_keys$0] = this[_map$2][$keys];
        }
        return this[_keys$0];
      }
      get length() {
        return this[_map$2][$length];
      }
      get values() {
        if (this[_values$0] == null) {
          this[_values$0] = this[_map$2][$values][$expand](V, dart.fn(x => x, BuiltListOfVToBuiltListOfV()));
        }
        return this[_values$0];
      }
    }
    (BuiltListMultimap.__ = function(_map) {
      this[_emptyList] = BuiltListOfV().new();
      this[_hashCode$2] = null;
      this[_keys$0] = null;
      this[_values$0] = null;
      this[_map$2] = _map;
      if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new BuiltListMultimap<int, int>\""));
      }
      if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
        dart.throw(new core.UnsupportedError.new("explicit value type required," + " for example \"new BuiltListMultimap<int, int>\""));
      }
    }).prototype = BuiltListMultimap.prototype;
    dart.addTypeTests(BuiltListMultimap);
    BuiltListMultimap.prototype[_is_BuiltListMultimap_default] = true;
    dart.setMethodSignature(BuiltListMultimap, () => ({
      __proto__: dart.getMethods(BuiltListMultimap.__proto__),
      toBuilder: dart.fnType(list_multimap.ListMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(list_multimap.BuiltListMultimap$(K, V), [dart.fnType(dart.dynamic, [list_multimap.ListMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core.Map$(K, list.BuiltList$(V)), []),
      asMap: dart.fnType(core.Map$(K, core.Iterable$(V)), []),
      _get: dart.fnType(list.BuiltList$(V), [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltListMultimap, () => ({
      __proto__: dart.getGetters(BuiltListMultimap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V)
    }));
    dart.setLibraryUri(BuiltListMultimap, "package:built_collection/src/list_multimap.dart");
    dart.setFieldSignature(BuiltListMultimap, () => ({
      __proto__: dart.getFields(BuiltListMultimap.__proto__),
      [_map$2]: dart.finalFieldType(core.Map$(K, list.BuiltList$(V))),
      [_emptyList]: dart.finalFieldType(list.BuiltList$(V)),
      [_hashCode$2]: dart.fieldType(core.int),
      [_keys$0]: dart.fieldType(core.Iterable$(K)),
      [_values$0]: dart.fieldType(core.Iterable$(V))
    }));
    dart.defineExtensionMethods(BuiltListMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltListMultimap, ['hashCode']);
    return BuiltListMultimap;
  });
  list_multimap.BuiltListMultimap = list_multimap.BuiltListMultimap$();
  dart.addTypeTests(list_multimap.BuiltListMultimap, _is_BuiltListMultimap_default);
  const _is__BuiltListMultimap_default = Symbol('_is__BuiltListMultimap_default');
  list_multimap._BuiltListMultimap$ = dart.generic((K, V) => {
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    class _BuiltListMultimap extends list_multimap.BuiltListMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)[$_equals](key) && dart.wrapType(V)[$_equals](value);
      }
    }
    (_BuiltListMultimap.withSafeMap = function(map) {
      _BuiltListMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltListMultimap.prototype;
    (_BuiltListMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltListMultimap.__proto__.__.call(this, new (LinkedMapOfK$BuiltListOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$2][$_set](key, BuiltListOfV().new(core.Iterable._check(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltListMultimap.prototype;
    dart.addTypeTests(_BuiltListMultimap);
    _BuiltListMultimap.prototype[_is__BuiltListMultimap_default] = true;
    dart.setMethodSignature(_BuiltListMultimap, () => ({
      __proto__: dart.getMethods(_BuiltListMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltListMultimap, "package:built_collection/src/list_multimap.dart");
    return _BuiltListMultimap;
  });
  list_multimap._BuiltListMultimap = list_multimap._BuiltListMultimap$();
  dart.addTypeTests(list_multimap._BuiltListMultimap, _is__BuiltListMultimap_default);
  const _is_OverriddenHashcodeBuiltListMultimap_default = Symbol('_is_OverriddenHashcodeBuiltListMultimap_default');
  list_multimap.OverriddenHashcodeBuiltListMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltListMultimap extends list_multimap._BuiltListMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$2];
      }
    }
    (OverriddenHashcodeBuiltListMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$2] = _overridenHashCode;
      OverriddenHashcodeBuiltListMultimap.__proto__.copyAndCheck.call(this, core.Iterable._check(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltListMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltListMultimap);
    OverriddenHashcodeBuiltListMultimap.prototype[_is_OverriddenHashcodeBuiltListMultimap_default] = true;
    dart.setLibraryUri(OverriddenHashcodeBuiltListMultimap, "package:built_collection/src/list_multimap.dart");
    dart.setFieldSignature(OverriddenHashcodeBuiltListMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltListMultimap.__proto__),
      [_overridenHashCode$2]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltListMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltListMultimap;
  });
  list_multimap.OverriddenHashcodeBuiltListMultimap = list_multimap.OverriddenHashcodeBuiltListMultimap$();
  dart.addTypeTests(list_multimap.OverriddenHashcodeBuiltListMultimap, _is_OverriddenHashcodeBuiltListMultimap_default);
  const _builtMap$ = dart.privateName(list_multimap, "_builtMap");
  const _builtMapOwner$ = dart.privateName(list_multimap, "_builtMapOwner");
  const _builderMap$ = dart.privateName(list_multimap, "_builderMap");
  const _checkGenericTypeParameter$2 = dart.privateName(list_multimap, "_checkGenericTypeParameter");
  const _setOwner$2 = dart.privateName(list_multimap, "_setOwner");
  const _setWithCopyAndCheck$ = dart.privateName(list_multimap, "_setWithCopyAndCheck");
  const _makeWriteableCopy$ = dart.privateName(list_multimap, "_makeWriteableCopy");
  const _checkKey$0 = dart.privateName(list_multimap, "_checkKey");
  const _checkValue$0 = dart.privateName(list_multimap, "_checkValue");
  const _getValuesBuilder$ = dart.privateName(list_multimap, "_getValuesBuilder");
  const _is_ListMultimapBuilder_default = Symbol('_is_ListMultimapBuilder_default');
  list_multimap.ListMultimapBuilder$ = dart.generic((K, V) => {
    let _BuiltListMultimapOfK$V = () => (_BuiltListMultimapOfK$V = dart.constFn(list_multimap._BuiltListMultimap$(K, V)))();
    let ListMultimapOfK$V = () => (ListMultimapOfK$V = dart.constFn(collection$.ListMultimap$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let LinkedHashMapOfK$BuiltListOfV = () => (LinkedHashMapOfK$BuiltListOfV = dart.constFn(collection.LinkedHashMap$(K, BuiltListOfV())))();
    let LinkedMapOfK$ListBuilderOfV = () => (LinkedMapOfK$ListBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, ListBuilderOfV())))();
    let LinkedMapOfK$BuiltListOfV = () => (LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, BuiltListOfV())))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VToNull = () => (VToNull = dart.constFn(dart.fnType(core.Null, [V])))();
    let BuiltListOfV = () => (BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    let ListBuilderOfV = () => (ListBuilderOfV = dart.constFn(list.ListBuilder$(V)))();
    class ListMultimapBuilder extends core.Object {
      static new(multimap) {
        let t2;
        if (multimap === void 0) multimap = C1 || CT.C1;
        t2 = new (list_multimap.ListMultimapBuilder$(K, V))._uninitialized();
        t2.replace(multimap);
        return t2;
      }
      build() {
        if (this[_builtMapOwner$] == null) {
          for (let key of this[_builderMap$][$keys]) {
            let builtList = this[_builderMap$][$_get](key).build();
            if (dart.test(builtList.isEmpty)) {
              this[_builtMap$][$remove](key);
            } else {
              this[_builtMap$][$_set](key, builtList);
            }
          }
          this[_builtMapOwner$] = new (_BuiltListMultimapOfK$V()).withSafeMap(this[_builtMap$]);
        }
        return this[_builtMapOwner$];
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (_BuiltListMultimapOfK$V().is(multimap)) {
          this[_setOwner$2](multimap);
        } else if (core.Map.is(multimap) || collection$.ListMultimap.is(multimap) || list_multimap.BuiltListMultimap.is(multimap)) {
          this[_setWithCopyAndCheck$](core.Iterable._check(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map, ListMultimap or BuiltListMultimap, " + "got " + dart.str(dart.runtimeType(multimap))));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.fnType(K, [T])._check(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.fnType(V, [T])._check(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.fnType(IterableOfV(), [T])._check(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        if (key == null) key = dart.fn(x => K.as(x), dart.fnType(K, [T]));
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          if (value == null) value = dart.fn(x => V.as(x), dart.fnType(V, [T]));
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_makeWriteableCopy$]();
        this[_checkKey$0](key);
        this[_checkValue$0](value);
        this[_getValuesBuilder$](key).add(value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, VToNull()));
      }
      addAll(other) {
        ListMultimapOfK$V()._check(other);
        other.forEach(dart.fn((key, value) => {
          this.add(key, value);
        }, KAndVToNull()));
      }
      remove(key, value) {
        V._check(value);
        if (!K.is(key)) return false;
        this[_makeWriteableCopy$]();
        return this[_getValuesBuilder$](K._check(key)).remove(value);
      }
      removeAll(key) {
        let t2;
        if (!K.is(key)) return BuiltListOfV().new();
        this[_makeWriteableCopy$]();
        let builder = this[_builderMap$][$_get](key);
        if (builder == null) {
          this[_builderMap$][$_set](K._check(key), ListBuilderOfV().new());
          t2 = this[_builtMap$][$_get](key);
          return t2 == null ? BuiltListOfV().new() : t2;
        }
        let old = builder.build();
        builder.clear();
        return old;
      }
      clear() {
        this[_makeWriteableCopy$]();
        this[_builtMap$][$clear]();
        this[_builderMap$][$clear]();
      }
      _get(key) {
        this[_makeWriteableCopy$]();
        return K.is(key) ? this[_getValuesBuilder$](key) : ListBuilderOfV().new();
      }
      [_getValuesBuilder$](key) {
        let result = this[_builderMap$][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap$][$_get](key);
          if (builtValues == null) {
            result = ListBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap$][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy$]() {
        if (this[_builtMapOwner$] != null) {
          this[_builtMap$] = LinkedHashMapOfK$BuiltListOfV().from(this[_builtMap$]);
          this[_builtMapOwner$] = null;
        }
      }
      [_setOwner$2](builtListMultimap) {
        this[_builtMapOwner$] = builtListMultimap;
        this[_builtMap$] = builtListMultimap[_map$2];
        this[_builderMap$] = new (LinkedMapOfK$ListBuilderOfV()).new();
      }
      [_setWithCopyAndCheck$](keys, lookup) {
        this[_builtMapOwner$] = null;
        this[_builtMap$] = new (LinkedMapOfK$BuiltListOfV()).new();
        this[_builderMap$] = new (LinkedMapOfK$ListBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core.Iterable._check(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkGenericTypeParameter$2]() {
        if (dart.wrapType(K)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit key type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
        if (dart.wrapType(V)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new core.UnsupportedError.new("explicit value type required, " + "for example \"new ListMultimapBuilder<int, int>\""));
        }
      }
      [_checkKey$0](key) {
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkValue$0](value) {
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
    }
    (ListMultimapBuilder._uninitialized = function() {
      this[_builtMap$] = null;
      this[_builtMapOwner$] = null;
      this[_builderMap$] = null;
      this[_checkGenericTypeParameter$2]();
    }).prototype = ListMultimapBuilder.prototype;
    dart.addTypeTests(ListMultimapBuilder);
    ListMultimapBuilder.prototype[_is_ListMultimapBuilder_default] = true;
    dart.setMethodSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapBuilder.__proto__),
      build: dart.fnType(list_multimap.BuiltListMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [list_multimap.ListMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: core.Object, value: core.Object, values: core.Object}]),
      add: dart.fnType(dart.void, [core.Object, core.Object]),
      addValues: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object, core.Object]),
      removeAll: dart.fnType(list.BuiltList$(V), [core.Object]),
      clear: dart.fnType(dart.void, []),
      _get: dart.fnType(list.ListBuilder$(V), [core.Object]),
      [_getValuesBuilder$]: dart.fnType(list.ListBuilder$(V), [K]),
      [_makeWriteableCopy$]: dart.fnType(dart.void, []),
      [_setOwner$2]: dart.fnType(dart.void, [list_multimap._BuiltListMultimap$(K, V)]),
      [_setWithCopyAndCheck$]: dart.fnType(dart.void, [core.Iterable, core.Function]),
      [_checkGenericTypeParameter$2]: dart.fnType(dart.void, []),
      [_checkKey$0]: dart.fnType(dart.void, [K]),
      [_checkValue$0]: dart.fnType(dart.void, [V])
    }));
    dart.setLibraryUri(ListMultimapBuilder, "package:built_collection/src/list_multimap.dart");
    dart.setFieldSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getFields(ListMultimapBuilder.__proto__),
      [_builtMap$]: dart.fieldType(core.Map$(K, list.BuiltList$(V))),
      [_builtMapOwner$]: dart.fieldType(list_multimap._BuiltListMultimap$(K, V)),
      [_builderMap$]: dart.fieldType(core.Map$(K, list.ListBuilder$(V)))
    }));
    return ListMultimapBuilder;
  });
  list_multimap.ListMultimapBuilder = list_multimap.ListMultimapBuilder$();
  dart.addTypeTests(list_multimap.ListMultimapBuilder, _is_ListMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/built_collection", {
    "package:built_collection/src/internal/copy_on_write_map.dart": copy_on_write_map,
    "package:built_collection/src/iterable.dart": iterable$,
    "package:built_collection/src/set.dart": set,
    "package:built_collection/src/internal/iterables.dart": iterables,
    "package:built_collection/src/internal/copy_on_write_set.dart": copy_on_write_set,
    "package:built_collection/src/list.dart": list,
    "package:built_collection/src/internal/copy_on_write_list.dart": copy_on_write_list,
    "package:built_collection/src/set_multimap.dart": set_multimap,
    "package:built_collection/built_collection.dart": built_collection,
    "package:built_collection/src/map.dart": map$,
    "package:built_collection/src/list_multimap.dart": list_multimap
  }, {
    "package:built_collection/src/iterable.dart": ["iterable/built_iterable.dart"],
    "package:built_collection/src/set.dart": ["set/built_set.dart", "set/set_builder.dart"],
    "package:built_collection/src/list.dart": ["list/built_list.dart", "list/list_builder.dart"],
    "package:built_collection/src/set_multimap.dart": ["set_multimap/built_set_multimap.dart", "set_multimap/set_multimap_builder.dart"],
    "package:built_collection/src/map.dart": ["map/built_map.dart", "map/map_builder.dart"],
    "package:built_collection/src/list_multimap.dart": ["list_multimap/built_list_multimap.dart", "list_multimap/list_multimap_builder.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src\\\\internal\\\\copy_on_write_map.dart","src\\\\iterable\\\\built_iterable.dart","src\\\\set\\\\built_set.dart","src\\\\set.dart","src\\\\set\\\\set_builder.dart","src\\\\internal\\\\iterables.dart","src\\\\internal\\\\copy_on_write_set.dart","src\\\\list\\\\built_list.dart","src\\\\list.dart","src\\\\list\\\\list_builder.dart","src\\\\internal\\\\copy_on_write_list.dart","src\\\\set_multimap\\\\built_set_multimap.dart","src\\\\set_multimap.dart","src\\\\set_multimap\\\\set_multimap_builder.dart","src\\\\map\\\\built_map.dart","src\\\\map.dart","src\\\\map\\\\map_builder.dart","src\\\\list_multimap\\\\built_list_multimap.dart","src\\\\list_multimap.dart","src\\\\list_multimap\\\\list_multimap_builder.dart"],"names":[],"mappings":"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","file":"built_collection.ddc.js"}');
  // Exports:
  return {
    src__internal__copy_on_write_map: copy_on_write_map,
    src__iterable: iterable$,
    src__set: set,
    src__internal__iterables: iterables,
    src__internal__copy_on_write_set: copy_on_write_set,
    src__list: list,
    src__internal__copy_on_write_list: copy_on_write_list,
    src__set_multimap: set_multimap,
    built_collection: built_collection,
    src__map: map$,
    src__list_multimap: list_multimap
  };
});

//# sourceMappingURL=built_collection.ddc.js.map
