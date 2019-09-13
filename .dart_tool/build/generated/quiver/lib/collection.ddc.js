define(['dart_sdk', 'packages/quiver/core', 'packages/quiver/iterables'], function(dart_sdk, packages__quiver__core, packages__quiver__iterables) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$ = packages__quiver__core.core;
  const iterables = packages__quiver__iterables.iterables;
  const collection$ = Object.create(dart.library);
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  const $containsKey = dartx.containsKey;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $length = dartx.length;
  const $entries = dartx.entries;
  const $map = dartx.map;
  const $remove = dartx.remove;
  const $removeWhere = dartx.removeWhere;
  const $clear = dartx.clear;
  const $_set = dartx._set;
  const $addAll = dartx.addAll;
  const $containsValue = dartx.containsValue;
  const $values = dartx.values;
  const $addEntries = dartx.addEntries;
  const $cast = dartx.cast;
  const $putIfAbsent = dartx.putIfAbsent;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $expand = dartx.expand;
  const $any = dartx.any;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $first = dartx.first;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $followedBy = dartx.followedBy;
  const $iterator = dartx.iterator;
  const $join = dartx.join;
  const $lastWhere = dartx.lastWhere;
  const $reduce = dartx.reduce;
  const $single = dartx.single;
  const $singleWhere = dartx.singleWhere;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $toString = dartx.toString;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  const $plus = dartx['+'];
  const $asMap = dartx.asMap;
  const $fillRange = dartx.fillRange;
  const $getRange = dartx.getRange;
  const $indexOf = dartx.indexOf;
  const $indexWhere = dartx.indexWhere;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $lastIndexOf = dartx.lastIndexOf;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $removeAt = dartx.removeAt;
  const $removeRange = dartx.removeRange;
  const $replaceRange = dartx.replaceRange;
  const $retainWhere = dartx.retainWhere;
  const $reversed = dartx.reversed;
  const $setAll = dartx.setAll;
  const $shuffle = dartx.shuffle;
  const $sort = dartx.sort;
  const $sublist = dartx.sublist;
  const $setRange = dartx.setRange;
  const $abs = dartx.abs;
  let dynamicToT = () => (dynamicToT = dart.constFn(dart.gFnType(T => [T, [dart.dynamic]])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(collection$._BaseMultimap._id, dynamicToT());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: collection$.TreeSearch.prototype,
        [_name$]: "TreeSearch.LESS_THAN",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: collection$.TreeSearch.prototype,
        [_name$]: "TreeSearch.NEAREST",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: collection$.TreeSearch.prototype,
        [_name$]: "TreeSearch.GREATER_THAN",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], collection$.TreeSearch);
    }
  });
  const _is_BiMap_default = Symbol('_is_BiMap_default');
  collection$.BiMap$ = dart.generic((K, V) => {
    class BiMap extends core.Object {
      static new() {
        return new (collection$.HashBiMap$(K, V)).new();
      }
    }
    (BiMap[dart.mixinNew] = function() {
    }).prototype = BiMap.prototype;
    BiMap.prototype[dart.isMap] = true;
    dart.addTypeTests(BiMap);
    BiMap.prototype[_is_BiMap_default] = true;
    BiMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setLibraryUri(BiMap, "package:quiver/collection.dart");
    return BiMap;
  });
  collection$.BiMap = collection$.BiMap$();
  dart.addTypeTests(collection$.BiMap, _is_BiMap_default);
  const _cached = dart.privateName(collection$, "_cached");
  const _map$ = dart.privateName(collection$, "_map");
  const _inverse$ = dart.privateName(collection$, "_inverse");
  const _add = dart.privateName(collection$, "_add");
  const _is_HashBiMap_default = Symbol('_is_HashBiMap_default');
  collection$.HashBiMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let LinkedMapOfV$K = () => (LinkedMapOfV$K = dart.constFn(_js_helper.LinkedMap$(V, K)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let HashBiMapOfV$K = () => (HashBiMapOfV$K = dart.constFn(collection$.HashBiMap$(V, K)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let VAndKTobool = () => (VAndKTobool = dart.constFn(dart.fnType(core.bool, [V, K])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class HashBiMap extends core.Object {
      _get(key) {
        return this[_map$][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this[_add](key, value, false);
        return value$;
      }
      replace(key, value) {
        K._check(key);
        V._check(value);
        this[_add](key, value, true);
      }
      addAll(other) {
        MapOfK$V()._check(other);
        return other[$forEach](dart.fn((k, v) => this[_add](k, v, false), KAndVToV()));
      }
      containsKey(key) {
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        return this[_inverse$][$containsKey](value);
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
      get values() {
        return this[_inverse$][$keys];
      }
      get inverse() {
        let t0;
        t0 = this[_cached];
        return t0 == null ? this[_cached] = new (HashBiMapOfV$K())._from(this[_inverse$], this[_map$]) : t0;
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        for (let entry of entries) {
          this[_add](entry.key, entry.value, false);
        }
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      get entries() {
        return this[_map$][$entries];
      }
      map(K2, V2, transform) {
        return this[_map$][$map](K2, V2, transform);
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        let value = this[_map$][$_get](key);
        if (value != null) return value;
        if (!dart.test(this[_map$][$containsKey](key))) return this[_add](key, ifAbsent(), false);
        return null;
      }
      remove(key) {
        this[_inverse$][$remove](this[_map$][$_get](key));
        return this[_map$][$remove](key);
      }
      removeWhere(test) {
        this[_inverse$][$removeWhere](dart.fn((v, k) => test(k, v), VAndKTobool()));
        this[_map$][$removeWhere](test);
      }
      retype(K2, V2) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        let value = this[_map$][$_get](key);
        if (value != null) {
          return this[_add](key, update(value), true);
        } else {
          if (ifAbsent == null) dart.throw(new core.ArgumentError.value(key, "key", "Key not in map"));
          return this[_add](key, ifAbsent(), false);
        }
      }
      updateAll(update) {
        KAndVToV()._check(update);
        for (let key of this.keys) {
          this[_add](key, update(key, this[_map$][$_get](key)), true);
        }
      }
      clear() {
        this[_map$][$clear]();
        this[_inverse$][$clear]();
      }
      [_add](key, value, replace) {
        if (key == null) dart.throw(new core.ArgumentError.new("null key"));
        if (value == null) dart.throw(new core.ArgumentError.new("null value"));
        let oldValue = this[_map$][$_get](key);
        if (dart.equals(oldValue, value)) return value;
        if (dart.test(this[_inverse$][$containsKey](value))) {
          if (!dart.test(replace)) dart.throw(new core.ArgumentError.new("Mapping for " + dart.str(value) + " exists"));
          this[_map$][$remove](this[_inverse$][$_get](value));
        }
        this[_inverse$][$remove](oldValue);
        this[_map$][$_set](key, value);
        this[_inverse$][$_set](value, key);
        return value;
      }
    }
    (HashBiMap.new = function() {
      HashBiMap._from.call(this, new (LinkedMapOfK$V()).new(), new (LinkedMapOfV$K()).new());
    }).prototype = HashBiMap.prototype;
    (HashBiMap._from = function(_map, _inverse) {
      this[_cached] = null;
      this[_map$] = _map;
      this[_inverse$] = _inverse;
      ;
    }).prototype = HashBiMap.prototype;
    dart.addTypeTests(HashBiMap);
    HashBiMap.prototype[_is_HashBiMap_default] = true;
    HashBiMap[dart.implements] = () => [collection$.BiMap$(K, V)];
    dart.setMethodSignature(HashBiMap, () => ({
      __proto__: dart.getMethods(HashBiMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      replace: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      [_add]: dart.fnType(V, [K, V, core.bool])
    }));
    dart.setGetterSignature(HashBiMap, () => ({
      __proto__: dart.getGetters(HashBiMap.__proto__),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V),
      inverse: collection$.BiMap$(V, K),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V))
    }));
    dart.setLibraryUri(HashBiMap, "package:quiver/collection.dart");
    dart.setFieldSignature(HashBiMap, () => ({
      __proto__: dart.getFields(HashBiMap.__proto__),
      [_map$]: dart.finalFieldType(core.Map$(K, V)),
      [_inverse$]: dart.finalFieldType(core.Map$(V, K)),
      [_cached]: dart.fieldType(collection$.BiMap$(V, K))
    }));
    dart.defineExtensionMethods(HashBiMap, [
      '_get',
      '_set',
      'addAll',
      'containsKey',
      'containsValue',
      'forEach',
      'addEntries',
      'cast',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll',
      'clear'
    ]);
    dart.defineExtensionAccessors(HashBiMap, [
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values',
      'entries'
    ]);
    return HashBiMap;
  });
  collection$.HashBiMap = collection$.HashBiMap$();
  dart.addTypeTests(collection$.HashBiMap, _is_HashBiMap_default);
  const _is_LruMap_default = Symbol('_is_LruMap_default');
  collection$.LruMap$ = dart.generic((K, V) => {
    class LruMap extends core.Object {
      get maximumSize() {
        return this[maximumSize];
      }
      set maximumSize(value) {
        this[maximumSize] = value;
      }
    }
    (LruMap[dart.mixinNew] = function() {
      this[maximumSize] = null;
    }).prototype = LruMap.prototype;
    LruMap.prototype[dart.isMap] = true;
    dart.addTypeTests(LruMap);
    LruMap.prototype[_is_LruMap_default] = true;
    const maximumSize = Symbol("LruMap.maximumSize");
    LruMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setLibraryUri(LruMap, "package:quiver/collection.dart");
    dart.setFieldSignature(LruMap, () => ({
      __proto__: dart.getFields(LruMap.__proto__),
      maximumSize: dart.fieldType(core.int)
    }));
    return LruMap;
  });
  collection$.LruMap = collection$.LruMap$();
  dart.addTypeTests(collection$.LruMap, _is_LruMap_default);
  const _is__LinkedEntry_default = Symbol('_is__LinkedEntry_default');
  collection$._LinkedEntry$ = dart.generic((K, V) => {
    let _LinkedEntryOfK$V = () => (_LinkedEntryOfK$V = dart.constFn(collection$._LinkedEntry$(K, V)))();
    class _LinkedEntry extends core.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        this[key$] = K._check(value);
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = V._check(value);
      }
      get next() {
        return this[next];
      }
      set next(value) {
        this[next] = _LinkedEntryOfK$V()._check(value);
      }
      get previous() {
        return this[previous];
      }
      set previous(value) {
        this[previous] = _LinkedEntryOfK$V()._check(value);
      }
    }
    (_LinkedEntry.new = function(key, value) {
      if (key === void 0) key = null;
      if (value === void 0) value = null;
      this[next] = null;
      this[previous] = null;
      this[key$] = key;
      this[value$] = value;
      ;
    }).prototype = _LinkedEntry.prototype;
    dart.addTypeTests(_LinkedEntry);
    _LinkedEntry.prototype[_is__LinkedEntry_default] = true;
    const key$ = Symbol("_LinkedEntry.key");
    const value$ = Symbol("_LinkedEntry.value");
    const next = Symbol("_LinkedEntry.next");
    const previous = Symbol("_LinkedEntry.previous");
    dart.setLibraryUri(_LinkedEntry, "package:quiver/collection.dart");
    dart.setFieldSignature(_LinkedEntry, () => ({
      __proto__: dart.getFields(_LinkedEntry.__proto__),
      key: dart.fieldType(K),
      value: dart.fieldType(V),
      next: dart.fieldType(collection$._LinkedEntry$(K, V)),
      previous: dart.fieldType(collection$._LinkedEntry$(K, V))
    }));
    return _LinkedEntry;
  });
  collection$._LinkedEntry = collection$._LinkedEntry$();
  dart.addTypeTests(collection$._LinkedEntry, _is__LinkedEntry_default);
  const _head = dart.privateName(collection$, "_head");
  const _tail = dart.privateName(collection$, "_tail");
  const _entries$ = dart.privateName(collection$, "_entries");
  const _maximumSize = dart.privateName(collection$, "_maximumSize");
  const _iterable = dart.privateName(collection$, "_iterable");
  const _removeLru = dart.privateName(collection$, "_removeLru");
  const _createEntry = dart.privateName(collection$, "_createEntry");
  const _promoteEntry = dart.privateName(collection$, "_promoteEntry");
  const _insertMru = dart.privateName(collection$, "_insertMru");
  const _is_LinkedLruHashMap_default = Symbol('_is_LinkedLruHashMap_default');
  collection$.LinkedLruHashMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let MapEntryOfK$VToV = () => (MapEntryOfK$VToV = dart.constFn(dart.fnType(V, [MapEntryOfK$V()])))();
    let _LinkedEntryOfK$V = () => (_LinkedEntryOfK$V = dart.constFn(collection$._LinkedEntry$(K, V)))();
    let _LinkedEntryOfK$VToMapEntryOfK$V = () => (_LinkedEntryOfK$VToMapEntryOfK$V = dart.constFn(dart.fnType(MapEntryOfK$V(), [_LinkedEntryOfK$V()])))();
    let GeneratingIterableOf_LinkedEntryOfK$V = () => (GeneratingIterableOf_LinkedEntryOfK$V = dart.constFn(iterables.GeneratingIterable$(_LinkedEntryOfK$V())))();
    let VoidTo_LinkedEntryOfK$V = () => (VoidTo_LinkedEntryOfK$V = dart.constFn(dart.fnType(_LinkedEntryOfK$V(), [])))();
    let _LinkedEntryOfK$VTo_LinkedEntryOfK$V = () => (_LinkedEntryOfK$VTo_LinkedEntryOfK$V = dart.constFn(dart.fnType(_LinkedEntryOfK$V(), [_LinkedEntryOfK$V()])))();
    let _LinkedEntryOfK$VToK = () => (_LinkedEntryOfK$VToK = dart.constFn(dart.fnType(K, [_LinkedEntryOfK$V()])))();
    let _LinkedEntryOfK$VToV = () => (_LinkedEntryOfK$VToV = dart.constFn(dart.fnType(V, [_LinkedEntryOfK$V()])))();
    let JSArrayOfK = () => (JSArrayOfK = dart.constFn(_interceptors.JSArray$(K)))();
    let KAnd_LinkedEntryOfK$VToNull = () => (KAnd_LinkedEntryOfK$VToNull = dart.constFn(dart.fnType(core.Null, [K, _LinkedEntryOfK$V()])))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class LinkedLruHashMap extends core.Object {
      static new(opts) {
        let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
        return new (collection$.LinkedLruHashMap$(K, V))._fromMap(new (_js_helper.LinkedMap$(K, collection$._LinkedEntry$(K, V))).new(), {maximumSize: maximumSize});
      }
      addAll(other) {
        MapOfK$V()._check(other);
        return other[$forEach](dart.fn((k, v) => {
          let t1, t0;
          t0 = k;
          t1 = v;
          this._set(t0, t1);
          return t1;
        }, KAndVToV()));
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        return entries[$forEach](dart.fn(entry => {
          let t1, t0;
          t0 = entry.key;
          t1 = entry.value;
          this._set(t0, t1);
          return t1;
        }, MapEntryOfK$VToV()));
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_entries$][$clear]();
        this[_head] = this[_tail] = null;
      }
      containsKey(key) {
        return this[_entries$][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      get entries() {
        return this[_entries$][$values][$map](MapEntryOfK$V(), dart.fn(entry => new (MapEntryOfK$V()).__(entry.key, entry.value), _LinkedEntryOfK$VToMapEntryOfK$V()));
      }
      forEach(action) {
        let head = this[_head];
        while (head != null) {
          action(head.key, head.value);
          head = head.next;
        }
      }
      get length() {
        return this[_entries$][$length];
      }
      get isEmpty() {
        return this[_entries$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_entries$][$isNotEmpty];
      }
      [_iterable]() {
        return new (GeneratingIterableOf_LinkedEntryOfK$V()).new(dart.fn(() => this[_head], VoidTo_LinkedEntryOfK$V()), dart.fn(n => n.next, _LinkedEntryOfK$VTo_LinkedEntryOfK$V()));
      }
      get keys() {
        return this[_iterable]()[$map](K, dart.fn(e => e.key, _LinkedEntryOfK$VToK()));
      }
      get values() {
        return this[_iterable]()[$map](V, dart.fn(e => e.value, _LinkedEntryOfK$VToV()));
      }
      map(K2, V2, transform) {
        dart.throw(new core.UnimplementedError.new("map"));
      }
      get maximumSize() {
        return this[_maximumSize];
      }
      set maximumSize(maximumSize) {
        if (maximumSize == null) dart.throw(new core.ArgumentError.notNull("maximumSize"));
        while (dart.notNull(this.length) > dart.notNull(maximumSize)) {
          this[_removeLru]();
        }
        this[_maximumSize] = maximumSize;
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        let entry = this[_entries$][$putIfAbsent](key, dart.fn(() => this[_createEntry](key, ifAbsent()), VoidTo_LinkedEntryOfK$V()));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          this[_removeLru]();
        }
        this[_promoteEntry](entry);
        return entry.value;
      }
      _get(key) {
        let entry = this[_entries$][$_get](key);
        if (entry != null) {
          this[_promoteEntry](entry);
          return entry.value;
        } else {
          return null;
        }
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this[_insertMru](this[_createEntry](key, value));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          if (!(this.length === dart.notNull(this.maximumSize) + 1)) dart.assertFailed(null, "org-dartlang-app:///packages/quiver/src/collection/lru_map.dart", 217, 14, "length == maximumSize + 1");
          this[_removeLru]();
        }
        return value$;
      }
      remove(key) {
        let t0, t0$;
        let entry = this[_entries$][$remove](key);
        if (entry != null) {
          if (dart.equals(entry, this[_head]) && dart.equals(entry, this[_tail])) {
            this[_head] = this[_tail] = null;
          } else if (dart.equals(entry, this[_head])) {
            this[_head] = this[_head].next;
            t0 = this[_head];
            t0 == null ? null : t0.previous = null;
          } else if (dart.equals(entry, this[_tail])) {
            this[_tail] = this[_tail].previous;
            t0$ = this[_tail];
            t0$ == null ? null : t0$.next = null;
          } else {
            entry.previous.next = entry.next;
            entry.next.previous = entry.previous;
          }
          return entry.value;
        }
        return null;
      }
      removeWhere(test) {
        let keysToRemove = JSArrayOfK().of([]);
        this[_entries$][$forEach](dart.fn((key, entry) => {
          if (dart.test(test(key, entry.value))) keysToRemove[$add](key);
        }, KAnd_LinkedEntryOfK$VToNull()));
        for (let key of keysToRemove) {
          this.remove(key);
        }
      }
      retype(K2, V2) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      toString() {
        if (dart.test(collection$._isToStringVisiting(this))) {
          return "{...}";
        }
        let result = new core.StringBuffer.new();
        try {
          collection$._toStringVisiting[$add](this);
          result.write("{");
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(", ");
            }
            first = false;
            result.write(dart.str(k) + ": " + dart.str(v));
          }, KAndVToNull()));
          result.write("}");
        } finally {
          if (!(collection$._toStringVisiting[$last] === this)) dart.assertFailed(null, "org-dartlang-app:///packages/quiver/src/collection/lru_map.dart", 284, 14, "identical(_toStringVisiting.last, this)");
          collection$._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        let newValue = null;
        if (dart.test(this.containsKey(key))) {
          newValue = update(this._get(key));
        } else {
          if (ifAbsent == null) dart.throw(new core.ArgumentError.value(key, "key", "Key not in map"));
          newValue = ifAbsent();
        }
        this[_insertMru](this[_createEntry](key, newValue));
        if (dart.notNull(this.length) > dart.notNull(this.maximumSize)) {
          if (!(this.length === dart.notNull(this.maximumSize) + 1)) dart.assertFailed(null, "org-dartlang-app:///packages/quiver/src/collection/lru_map.dart", 307, 14, "length == maximumSize + 1");
          this[_removeLru]();
        }
        return newValue;
      }
      updateAll(update) {
        KAndVToV()._check(update);
        this[_entries$][$forEach](dart.fn((key, entry) => {
          let newValue = this[_createEntry](key, update(key, entry.value));
          this[_entries$][$_set](key, newValue);
        }, KAnd_LinkedEntryOfK$VToNull()));
      }
      [_promoteEntry](entry) {
        if (dart.equals(entry, this[_head])) {
          return;
        }
        if (entry.previous != null) {
          entry.previous.next = entry.next;
          if (dart.equals(this[_tail], entry)) {
            this[_tail] = entry.previous;
          }
        }
        if (entry.next != null) {
          entry.next.previous = entry.previous;
        }
        if (this[_head] != null) {
          this[_head].previous = entry;
        }
        entry.previous = null;
        entry.next = this[_head];
        this[_head] = entry;
        if (this[_tail] == null) {
          if (!(this.length === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/quiver/src/collection/lru_map.dart", 352, 14, "length == 1");
          this[_tail] = this[_head];
        }
      }
      [_createEntry](key, value) {
        return new (_LinkedEntryOfK$V()).new(key, value);
      }
      [_insertMru](entry) {
        let t0;
        let value = entry.value;
        this[_promoteEntry]((t0 = this[_entries$][$putIfAbsent](entry.key, dart.fn(() => entry, VoidTo_LinkedEntryOfK$V())), t0.value = value, t0));
      }
      [_removeLru]() {
        this[_entries$][$remove](this[_tail].key);
        this[_tail] = this[_tail].previous;
        this[_tail].next = null;
      }
    }
    (LinkedLruHashMap._fromMap = function(_entries, opts) {
      let maximumSize = opts && 'maximumSize' in opts ? opts.maximumSize : null;
      this[_head] = null;
      this[_tail] = null;
      this[_entries$] = _entries;
      this[_maximumSize] = core.int._check(core$.firstNonNull(maximumSize, 100));
      ;
    }).prototype = LinkedLruHashMap.prototype;
    dart.addTypeTests(LinkedLruHashMap);
    LinkedLruHashMap.prototype[_is_LinkedLruHashMap_default] = true;
    LinkedLruHashMap[dart.implements] = () => [collection$.LruMap$(K, V)];
    dart.setMethodSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getMethods(LinkedLruHashMap.__proto__),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [collection$.LinkedLruHashMap$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [collection$.LinkedLruHashMap$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [_iterable]: dart.fnType(core.Iterable$(collection$._LinkedEntry$(K, V)), []),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.Object, [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.Object, [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [collection$.LinkedLruHashMap$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      [_promoteEntry]: dart.fnType(dart.void, [collection$._LinkedEntry$(K, V)]),
      [_createEntry]: dart.fnType(collection$._LinkedEntry$(K, V), [K, V]),
      [_insertMru]: dart.fnType(dart.void, [collection$._LinkedEntry$(K, V)]),
      [_removeLru]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getGetters(LinkedLruHashMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      length: core.int,
      [$length]: core.int,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V),
      maximumSize: core.int
    }));
    dart.setSetterSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getSetters(LinkedLruHashMap.__proto__),
      maximumSize: core.int
    }));
    dart.setLibraryUri(LinkedLruHashMap, "package:quiver/collection.dart");
    dart.setFieldSignature(LinkedLruHashMap, () => ({
      __proto__: dart.getFields(LinkedLruHashMap.__proto__),
      [_entries$]: dart.finalFieldType(core.Map$(K, collection$._LinkedEntry$(K, V))),
      [_maximumSize]: dart.fieldType(core.int),
      [_head]: dart.fieldType(collection$._LinkedEntry$(K, V)),
      [_tail]: dart.fieldType(collection$._LinkedEntry$(K, V))
    }));
    dart.defineExtensionMethods(LinkedLruHashMap, [
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      '_get',
      '_set',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(LinkedLruHashMap, [
      'entries',
      'length',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'values'
    ]);
    return LinkedLruHashMap;
  });
  collection$.LinkedLruHashMap = collection$.LinkedLruHashMap$();
  dart.defineLazy(collection$.LinkedLruHashMap, {
    /*collection$.LinkedLruHashMap._DEFAULT_MAXIMUM_SIZE*/get _DEFAULT_MAXIMUM_SIZE() {
      return 100;
    }
  });
  dart.addTypeTests(collection$.LinkedLruHashMap, _is_LinkedLruHashMap_default);
  const _is_Multimap_default = Symbol('_is_Multimap_default');
  collection$.Multimap$ = dart.generic((K, V) => {
    class Multimap extends core.Object {
      static new() {
        return new (collection$.ListMultimap$(K, V)).new();
      }
    }
    (Multimap[dart.mixinNew] = function() {
    }).prototype = Multimap.prototype;
    dart.addTypeTests(Multimap);
    Multimap.prototype[_is_Multimap_default] = true;
    dart.setLibraryUri(Multimap, "package:quiver/collection.dart");
    return Multimap;
  });
  collection$.Multimap = collection$.Multimap$();
  dart.addTypeTests(collection$.Multimap, _is_Multimap_default);
  let C0;
  const _create = dart.privateName(collection$, "_create");
  const _wrap = dart.privateName(collection$, "_wrap");
  const _addAll = dart.privateName(collection$, "_addAll");
  const _remove = dart.privateName(collection$, "_remove");
  const _clear = dart.privateName(collection$, "_clear");
  const _groupedValues = dart.privateName(collection$, "_groupedValues");
  const _is__BaseMultimap_default = Symbol('_is__BaseMultimap_default');
  collection$._BaseMultimap$ = dart.generic((K, V, C) => {
    let LinkedMapOfK$C = () => (LinkedMapOfK$C = dart.constFn(_js_helper.LinkedMap$(K, C)))();
    let MultimapOfK$V = () => (MultimapOfK$V = dart.constFn(collection$.Multimap$(K, V)))();
    let KAndIterableOfVTovoid = () => (KAndIterableOfVTovoid = dart.constFn(dart.fnType(dart.void, [K, IterableOfV()])))();
    let KAndIterableOfVToNull = () => (KAndIterableOfVToNull = dart.constFn(dart.fnType(core.Null, [K, IterableOfV()])))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VTovoid = () => (VTovoid = dart.constFn(dart.fnType(dart.void, [V])))();
    let CToC = () => (CToC = dart.constFn(dart.fnType(C, [C])))();
    class _BaseMultimap extends core.Object {
      static _id(T, x) {
        return T._check(x);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      containsKey(key) {
        return this[_map$][$keys][$contains](key);
      }
      contains(key, value) {
        let t0;
        return dart.equals((t0 = this[_map$][$_get](key), t0 == null ? null : t0[$contains](value)), true);
      }
      _get(key) {
        let values = this[_map$][$_get](key);
        if (values == null) {
          values = this[_create]();
        }
        return this[_wrap](key, values);
      }
      add(key, value) {
        K._check(key);
        V._check(value);
        this[_map$][$putIfAbsent](key, dart.bind(this, _create));
        this[_add](this[_map$][$_get](key), value);
      }
      addValues(key, values) {
        K._check(key);
        IterableOfV()._check(values);
        this[_map$][$putIfAbsent](key, dart.bind(this, _create));
        this[_addAll](this[_map$][$_get](key), values);
      }
      addAll(other) {
        MultimapOfK$V()._check(other);
        return other.forEachKey(dart.bind(this, 'addValues'));
      }
      remove(key, value) {
        V._check(value);
        if (!dart.test(this[_map$][$containsKey](key))) return false;
        let removed = this[_remove](this[_map$][$_get](key), value);
        if (dart.test(removed) && dart.test(this[_map$][$_get](key)[$isEmpty])) this[_map$][$remove](key);
        return removed;
      }
      removeAll(key) {
        let values = this[_map$][$remove](key);
        let retValues = this[_create]();
        if (values != null) {
          dart.dsend(retValues, 'addAll', [values]);
          dart.dsend(values, 'clear', []);
        }
        return IterableOfV().as(retValues);
      }
      clear() {
        this[_map$][$forEach](dart.fn((key, value) => this[_clear](C._check(value)), KAndIterableOfVTovoid()));
        this[_map$][$clear]();
      }
      forEachKey(f) {
        return this[_map$][$forEach](f);
      }
      forEach(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          values[$forEach](dart.fn(value => f(key, value), VTovoid()));
        }, KAndIterableOfVToNull()));
      }
      get keys() {
        return this[_map$][$keys];
      }
      get values() {
        return this[_map$][$values][$expand](V, dart.fn(x => x, CToC()));
      }
      get [_groupedValues]() {
        return this[_map$][$values];
      }
      get length() {
        return this[_map$][$length];
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
    }
    (_BaseMultimap.new = function() {
      this[_map$] = new (LinkedMapOfK$C()).new();
      ;
    }).prototype = _BaseMultimap.prototype;
    (_BaseMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      this[_map$] = new (LinkedMapOfK$C()).new();
      key == null ? key = dart.gbind(C0 || CT.C0, K) : null;
      value == null ? value = dart.gbind(C0 || CT.C0, V) : null;
      for (let element of iterable) {
        this.add(key(element), value(element));
      }
    }).prototype = _BaseMultimap.prototype;
    dart.addTypeTests(_BaseMultimap);
    _BaseMultimap.prototype[_is__BaseMultimap_default] = true;
    _BaseMultimap[dart.implements] = () => [collection$.Multimap$(K, V)];
    dart.setMethodSignature(_BaseMultimap, () => ({
      __proto__: dart.getMethods(_BaseMultimap.__proto__),
      containsValue: dart.fnType(core.bool, [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      contains: dart.fnType(core.bool, [core.Object, core.Object]),
      _get: dart.fnType(core.Iterable$(V), [core.Object]),
      add: dart.fnType(dart.void, [core.Object, core.Object]),
      addValues: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object, core.Object]),
      removeAll: dart.fnType(core.Iterable$(V), [core.Object]),
      clear: dart.fnType(dart.void, []),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, C])]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])])
    }));
    dart.setGetterSignature(_BaseMultimap, () => ({
      __proto__: dart.getGetters(_BaseMultimap.__proto__),
      keys: core.Iterable$(K),
      values: core.Iterable$(V),
      [_groupedValues]: core.Iterable$(core.Iterable$(V)),
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool
    }));
    dart.setLibraryUri(_BaseMultimap, "package:quiver/collection.dart");
    dart.setFieldSignature(_BaseMultimap, () => ({
      __proto__: dart.getFields(_BaseMultimap.__proto__),
      [_map$]: dart.finalFieldType(core.Map$(K, C))
    }));
    return _BaseMultimap;
  });
  collection$._BaseMultimap = collection$._BaseMultimap$();
  dart.addTypeTests(collection$._BaseMultimap, _is__BaseMultimap_default);
  const _is_ListMultimap_default = Symbol('_is_ListMultimap_default');
  collection$.ListMultimap$ = dart.generic((K, V) => {
    let _WrappedMapOfK$V$ListOfV = () => (_WrappedMapOfK$V$ListOfV = dart.constFn(collection$._WrappedMap$(K, V, ListOfV())))();
    let JSArrayOfV = () => (JSArrayOfV = dart.constFn(_interceptors.JSArray$(V)))();
    let _WrappedListOfObject$V = () => (_WrappedListOfObject$V = dart.constFn(collection$._WrappedList$(core.Object, V)))();
    let ListOfV = () => (ListOfV = dart.constFn(core.List$(V)))();
    class ListMultimap extends collection$._BaseMultimap$(K, V, core.List$(V)) {
      [_create]() {
        return JSArrayOfV().of([]);
      }
      [_add](iterable, value) {
        iterable[$add](value);
      }
      [_addAll](iterable, value) {
        return iterable[$addAll](value);
      }
      [_clear](iterable) {
        return iterable[$clear]();
      }
      [_remove](iterable, value) {
        return iterable[$remove](value);
      }
      [_wrap](key, iterable) {
        return new (_WrappedListOfObject$V()).new(this[_map$], key, iterable);
      }
      _get(key) {
        return ListOfV()._check(super._get(key));
      }
      removeAll(key) {
        return ListOfV()._check(super.removeAll(key));
      }
      asMap() {
        return new (_WrappedMapOfK$V$ListOfV()).new(this);
      }
    }
    (ListMultimap.new = function() {
      ListMultimap.__proto__.new.call(this);
      ;
    }).prototype = ListMultimap.prototype;
    (ListMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      ListMultimap.__proto__.fromIterable.call(this, iterable, {key: key, value: value});
      ;
    }).prototype = ListMultimap.prototype;
    dart.addTypeTests(ListMultimap);
    ListMultimap.prototype[_is_ListMultimap_default] = true;
    dart.setMethodSignature(ListMultimap, () => ({
      __proto__: dart.getMethods(ListMultimap.__proto__),
      [_create]: dart.fnType(core.List$(V), []),
      [_add]: dart.fnType(dart.void, [core.List$(V), V]),
      [_addAll]: dart.fnType(dart.void, [core.List$(V), core.Iterable$(V)]),
      [_clear]: dart.fnType(dart.void, [core.List$(V)]),
      [_remove]: dart.fnType(core.bool, [core.List$(V), core.Object]),
      [_wrap]: dart.fnType(core.List$(V), [core.Object, core.List$(V)]),
      _get: dart.fnType(core.List$(V), [core.Object]),
      removeAll: dart.fnType(core.List$(V), [core.Object]),
      asMap: dart.fnType(core.Map$(K, core.List$(V)), [])
    }));
    dart.setLibraryUri(ListMultimap, "package:quiver/collection.dart");
    return ListMultimap;
  });
  collection$.ListMultimap = collection$.ListMultimap$();
  dart.addTypeTests(collection$.ListMultimap, _is_ListMultimap_default);
  const _is_SetMultimap_default = Symbol('_is_SetMultimap_default');
  collection$.SetMultimap$ = dart.generic((K, V) => {
    let _WrappedMapOfK$V$SetOfV = () => (_WrappedMapOfK$V$SetOfV = dart.constFn(collection$._WrappedMap$(K, V, SetOfV())))();
    let _HashSetOfV = () => (_HashSetOfV = dart.constFn(collection._HashSet$(V)))();
    let _WrappedSetOfObject$V = () => (_WrappedSetOfObject$V = dart.constFn(collection$._WrappedSet$(core.Object, V)))();
    let SetOfV = () => (SetOfV = dart.constFn(core.Set$(V)))();
    class SetMultimap extends collection$._BaseMultimap$(K, V, core.Set$(V)) {
      [_create]() {
        return new (_HashSetOfV()).new();
      }
      [_add](iterable, value) {
        iterable.add(value);
      }
      [_addAll](iterable, value) {
        return iterable.addAll(value);
      }
      [_clear](iterable) {
        return iterable.clear();
      }
      [_remove](iterable, value) {
        return iterable.remove(value);
      }
      [_wrap](key, iterable) {
        return new (_WrappedSetOfObject$V()).new(this[_map$], key, iterable);
      }
      _get(key) {
        return SetOfV()._check(super._get(key));
      }
      removeAll(key) {
        return SetOfV()._check(super.removeAll(key));
      }
      asMap() {
        return new (_WrappedMapOfK$V$SetOfV()).new(this);
      }
    }
    (SetMultimap.new = function() {
      SetMultimap.__proto__.new.call(this);
      ;
    }).prototype = SetMultimap.prototype;
    (SetMultimap.fromIterable = function(iterable, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      SetMultimap.__proto__.fromIterable.call(this, iterable, {key: key, value: value});
      ;
    }).prototype = SetMultimap.prototype;
    dart.addTypeTests(SetMultimap);
    SetMultimap.prototype[_is_SetMultimap_default] = true;
    dart.setMethodSignature(SetMultimap, () => ({
      __proto__: dart.getMethods(SetMultimap.__proto__),
      [_create]: dart.fnType(core.Set$(V), []),
      [_add]: dart.fnType(dart.void, [core.Set$(V), V]),
      [_addAll]: dart.fnType(dart.void, [core.Set$(V), core.Iterable$(V)]),
      [_clear]: dart.fnType(dart.void, [core.Set$(V)]),
      [_remove]: dart.fnType(core.bool, [core.Set$(V), core.Object]),
      [_wrap]: dart.fnType(core.Set$(V), [core.Object, core.Iterable$(V)]),
      _get: dart.fnType(core.Set$(V), [core.Object]),
      removeAll: dart.fnType(core.Set$(V), [core.Object]),
      asMap: dart.fnType(core.Map$(K, core.Set$(V)), [])
    }));
    dart.setLibraryUri(SetMultimap, "package:quiver/collection.dart");
    return SetMultimap;
  });
  collection$.SetMultimap = collection$.SetMultimap$();
  dart.addTypeTests(collection$.SetMultimap, _is_SetMultimap_default);
  const _multimap$ = dart.privateName(collection$, "_multimap");
  const _is__WrappedMap_default = Symbol('_is__WrappedMap_default');
  collection$._WrappedMap$ = dart.generic((K, V, C) => {
    let MapOfK$C = () => (MapOfK$C = dart.constFn(core.Map$(K, C)))();
    let MapEntryOfK$C = () => (MapEntryOfK$C = dart.constFn(core.MapEntry$(K, C)))();
    let IterableOfMapEntryOfK$C = () => (IterableOfMapEntryOfK$C = dart.constFn(core.Iterable$(MapEntryOfK$C())))();
    let KAndCToC = () => (KAndCToC = dart.constFn(dart.fnType(C, [K, C])))();
    let JSArrayOfK = () => (JSArrayOfK = dart.constFn(_interceptors.JSArray$(K)))();
    let VoidToC = () => (VoidToC = dart.constFn(dart.fnType(C, [])))();
    let IterableOfC = () => (IterableOfC = dart.constFn(core.Iterable$(C)))();
    let CToC = () => (CToC = dart.constFn(dart.fnType(C, [C])))();
    class _WrappedMap extends core.Object {
      _get(key) {
        return C._check(this[_multimap$]._get(key));
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        C._check(value);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
        return value$;
      }
      addAll(other) {
        MapOfK$C()._check(other);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToC()._check(ifAbsent);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      clear() {
        return this[_multimap$].clear();
      }
      containsKey(key) {
        return this[_multimap$].containsKey(key);
      }
      containsValue(value) {
        return this[_multimap$].containsValue(value);
      }
      forEach(f) {
        return this[_multimap$].forEachKey(f);
      }
      get isEmpty() {
        return this[_multimap$].isEmpty;
      }
      get isNotEmpty() {
        return this[_multimap$].isNotEmpty;
      }
      get keys() {
        return this[_multimap$].keys;
      }
      get length() {
        return this[_multimap$].length;
      }
      remove(key) {
        return C._check(this[_multimap$].removeAll(key));
      }
      get values() {
        return IterableOfC()._check(this[_multimap$][_groupedValues]);
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      retype(K2, V2) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      get entries() {
        return this[_multimap$][_map$][$entries];
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$C()._check(entries);
        dart.throw(new core.UnsupportedError.new("Insert unsupported on map view"));
      }
      map(K2, C2, transform) {
        return this[_multimap$][_map$][$map](K2, C2, transform);
      }
      update(key, update, opts) {
        K._check(key);
        CToC()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToC()._check(ifAbsent);
        dart.throw(new core.UnsupportedError.new("Update unsupported on map view"));
      }
      updateAll(update) {
        KAndCToC()._check(update);
        dart.throw(new core.UnsupportedError.new("Update unsupported on map view"));
      }
      removeWhere(test) {
        let keysToRemove = JSArrayOfK().of([]);
        for (let key of this.keys) {
          if (dart.test(test(key, this._get(key)))) keysToRemove[$add](key);
        }
        for (let key of keysToRemove) {
          this[_multimap$].removeAll(key);
        }
      }
    }
    (_WrappedMap.new = function(_multimap) {
      this[_multimap$] = _multimap;
      ;
    }).prototype = _WrappedMap.prototype;
    _WrappedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(_WrappedMap);
    _WrappedMap.prototype[_is__WrappedMap_default] = true;
    _WrappedMap[dart.implements] = () => [core.Map$(K, C)];
    dart.setMethodSignature(_WrappedMap, () => ({
      __proto__: dart.getMethods(_WrappedMap.__proto__),
      _get: dart.fnType(C, [core.Object]),
      [$_get]: dart.fnType(C, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      putIfAbsent: dart.fnType(C, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(C, [core.Object, core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, C])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, C])]),
      remove: dart.fnType(C, [core.Object]),
      [$remove]: dart.fnType(C, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      map: dart.gFnType((K2, C2) => [core.Map$(K2, C2), [dart.fnType(core.MapEntry$(K2, C2), [K, C])]]),
      [$map]: dart.gFnType((K2, C2) => [core.Map$(K2, C2), [dart.fnType(core.MapEntry$(K2, C2), [K, C])]]),
      update: dart.fnType(C, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(C, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, C])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, C])])
    }));
    dart.setGetterSignature(_WrappedMap, () => ({
      __proto__: dart.getGetters(_WrappedMap.__proto__),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(C),
      [$values]: core.Iterable$(C),
      entries: core.Iterable$(core.MapEntry$(K, C)),
      [$entries]: core.Iterable$(core.MapEntry$(K, C))
    }));
    dart.setLibraryUri(_WrappedMap, "package:quiver/collection.dart");
    dart.setFieldSignature(_WrappedMap, () => ({
      __proto__: dart.getFields(_WrappedMap.__proto__),
      [_multimap$]: dart.finalFieldType(collection$._BaseMultimap$(K, V, C))
    }));
    dart.defineExtensionMethods(_WrappedMap, [
      '_get',
      '_set',
      'addAll',
      'putIfAbsent',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'remove',
      'cast',
      'addEntries',
      'map',
      'update',
      'updateAll',
      'removeWhere'
    ]);
    dart.defineExtensionAccessors(_WrappedMap, [
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values',
      'entries'
    ]);
    return _WrappedMap;
  });
  collection$._WrappedMap = collection$._WrappedMap$();
  dart.addTypeTests(collection$._WrappedMap, _is__WrappedMap_default);
  const _key$ = dart.privateName(collection$, "_key");
  const _delegate$ = dart.privateName(collection$, "_delegate");
  const _addToMap = dart.privateName(collection$, "_addToMap");
  const _syncDelegate = dart.privateName(collection$, "_syncDelegate");
  const _is__WrappedIterable_default = Symbol('_is__WrappedIterable_default');
  collection$._WrappedIterable$ = dart.generic((K, V, C) => {
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VAndVToV = () => (VAndVToV = dart.constFn(dart.fnType(V, [V, V])))();
    class _WrappedIterable extends core.Object {
      [_addToMap]() {
        let t2, t1, t0;
        t0 = this[_map$];
        t1 = this[_key$];
        t2 = this[_delegate$];
        t0[$_set](t1, t2);
        return t2;
      }
      [_syncDelegate]() {
        if (dart.test(this[_delegate$][$isEmpty])) {
          let updated = this[_map$][$_get](this[_key$]);
          if (updated != null) {
            this[_delegate$] = updated;
          }
        }
      }
      any(test) {
        this[_syncDelegate]();
        return this[_delegate$][$any](test);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      contains(element) {
        this[_syncDelegate]();
        return this[_delegate$][$contains](element);
      }
      elementAt(index) {
        this[_syncDelegate]();
        return this[_delegate$][$elementAt](index);
      }
      every(test) {
        this[_syncDelegate]();
        return this[_delegate$][$every](test);
      }
      expand(T, f) {
        this[_syncDelegate]();
        return this[_delegate$][$expand](T, f);
      }
      get first() {
        this[_syncDelegate]();
        return this[_delegate$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToV()._check(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        this[_syncDelegate]();
        return this[_delegate$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfV()._check(other);
        this[_syncDelegate]();
        return this[_delegate$][$followedBy](other);
      }
      forEach(f) {
        this[_syncDelegate]();
        this[_delegate$][$forEach](f);
      }
      get isEmpty() {
        this[_syncDelegate]();
        return this[_delegate$][$isEmpty];
      }
      get isNotEmpty() {
        this[_syncDelegate]();
        return this[_delegate$][$isNotEmpty];
      }
      get iterator() {
        this[_syncDelegate]();
        return this[_delegate$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        this[_syncDelegate]();
        return this[_delegate$][$join](separator);
      }
      get last() {
        this[_syncDelegate]();
        return this[_delegate$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToV()._check(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        this[_syncDelegate]();
        return this[_delegate$][$length];
      }
      map(T, f) {
        this[_syncDelegate]();
        return this[_delegate$][$map](T, f);
      }
      reduce(combine) {
        VAndVToV()._check(combine);
        this[_syncDelegate]();
        return this[_delegate$][$reduce](combine);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      get single() {
        this[_syncDelegate]();
        return this[_delegate$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToV()._check(orElse);
        this[_syncDelegate]();
        return this[_delegate$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        this[_syncDelegate]();
        return this[_delegate$][$skip](n);
      }
      skipWhile(test) {
        this[_syncDelegate]();
        return this[_delegate$][$skipWhile](test);
      }
      take(n) {
        this[_syncDelegate]();
        return this[_delegate$][$take](n);
      }
      takeWhile(test) {
        this[_syncDelegate]();
        return this[_delegate$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_syncDelegate]();
        return this[_delegate$][$toList]({growable: growable});
      }
      toSet() {
        this[_syncDelegate]();
        return this[_delegate$][$toSet]();
      }
      toString() {
        this[_syncDelegate]();
        return dart.toString(this[_delegate$]);
      }
      where(test) {
        this[_syncDelegate]();
        return this[_delegate$][$where](test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new("whereType"));
      }
    }
    (_WrappedIterable.new = function(_map, _key, _delegate) {
      this[_map$] = _map;
      this[_key$] = _key;
      this[_delegate$] = _delegate;
      ;
    }).prototype = _WrappedIterable.prototype;
    _WrappedIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(_WrappedIterable);
    _WrappedIterable.prototype[_is__WrappedIterable_default] = true;
    _WrappedIterable[dart.implements] = () => [core.Iterable$(V)];
    dart.setMethodSignature(_WrappedIterable, () => ({
      __proto__: dart.getMethods(_WrappedIterable.__proto__),
      [_addToMap]: dart.fnType(dart.dynamic, []),
      [_syncDelegate]: dart.fnType(dart.dynamic, []),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [V])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [V])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(V, [core.int]),
      [$elementAt]: dart.fnType(V, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [V])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [V])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [V])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [V])]]),
      firstWhere: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, V])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, V])]]),
      followedBy: dart.fnType(core.Iterable$(V), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(V), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [V])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [V])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [V])]]),
      reduce: dart.fnType(V, [core.Object]),
      [$reduce]: dart.fnType(V, [core.Object]),
      retype: dart.gFnType(T => [core.Iterable$(T), []]),
      singleWhere: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(V, [dart.fnType(core.bool, [V])], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(V), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(V), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      [$skipWhile]: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      take: dart.fnType(core.Iterable$(V), [core.int]),
      [$take]: dart.fnType(core.Iterable$(V), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      [$takeWhile]: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      toList: dart.fnType(core.List$(V), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(V), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(V), []),
      [$toSet]: dart.fnType(core.Set$(V), []),
      where: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      [$where]: dart.fnType(core.Iterable$(V), [dart.fnType(core.bool, [V])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []])
    }));
    dart.setGetterSignature(_WrappedIterable, () => ({
      __proto__: dart.getGetters(_WrappedIterable.__proto__),
      first: V,
      [$first]: V,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(V),
      [$iterator]: core.Iterator$(V),
      last: V,
      [$last]: V,
      length: core.int,
      [$length]: core.int,
      single: V,
      [$single]: V
    }));
    dart.setLibraryUri(_WrappedIterable, "package:quiver/collection.dart");
    dart.setFieldSignature(_WrappedIterable, () => ({
      __proto__: dart.getFields(_WrappedIterable.__proto__),
      [_key$]: dart.finalFieldType(K),
      [_map$]: dart.finalFieldType(core.Map$(K, C)),
      [_delegate$]: dart.fieldType(C)
    }));
    dart.defineExtensionMethods(_WrappedIterable, [
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
      'toString',
      'where',
      'whereType'
    ]);
    dart.defineExtensionAccessors(_WrappedIterable, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _WrappedIterable;
  });
  collection$._WrappedIterable = collection$._WrappedIterable$();
  dart.addTypeTests(collection$._WrappedIterable, _is__WrappedIterable_default);
  const _is__WrappedList_default = Symbol('_is__WrappedList_default');
  collection$._WrappedList$ = dart.generic((K, V) => {
    let MapOfK$ListOfV = () => (MapOfK$ListOfV = dart.constFn(core.Map$(K, ListOfV())))();
    let ListOfV = () => (ListOfV = dart.constFn(core.List$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    class _WrappedList extends collection$._WrappedIterable$(K, V, core.List$(V)) {
      _get(index) {
        return this.elementAt(index);
      }
      _set(index, value$) {
        let value = value$;
        V._check(value);
        this[_syncDelegate]();
        this[_delegate$][$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListOfV()._check(other);
        this[_syncDelegate]();
        return this[_delegate$][$plus](other);
      }
      add(value) {
        V._check(value);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$add](value);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      addAll(iterable) {
        IterableOfV()._check(iterable);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$addAll](iterable);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      asMap() {
        this[_syncDelegate]();
        return this[_delegate$][$asMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_syncDelegate]();
        this[_delegate$][$clear]();
        this[_map$][$remove](this[_key$]);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        V._check(fillValue);
        this[_syncDelegate]();
        this[_delegate$][$fillRange](start, end, fillValue);
      }
      set first(value) {
        V._check(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        this[_syncDelegate]();
        return this[_delegate$][$getRange](start, end);
      }
      indexOf(element, start) {
        V._check(element);
        if (start === void 0) start = 0;
        this[_syncDelegate]();
        return this[_delegate$][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        this[_syncDelegate]();
        return this[_delegate$][$indexWhere](test, start);
      }
      insert(index, element) {
        V._check(element);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$insert](index, element);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      insertAll(index, iterable) {
        IterableOfV()._check(iterable);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$insertAll](index, iterable);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      set last(value) {
        V._check(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start) {
        V._check(element);
        if (start === void 0) start = null;
        this[_syncDelegate]();
        return this[_delegate$][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        this[_syncDelegate]();
        return this[_delegate$][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$][$length] = newLength;
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      get length() {
        return super.length;
      }
      remove(value) {
        this[_syncDelegate]();
        let removed = this[_delegate$][$remove](value);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeAt(index) {
        this[_syncDelegate]();
        let removed = this[_delegate$][$removeAt](index);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeLast() {
        this[_syncDelegate]();
        let removed = this[_delegate$][$removeLast]();
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeRange(start, end) {
        this[_syncDelegate]();
        this[_delegate$][$removeRange](start, end);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      removeWhere(test) {
        this[_syncDelegate]();
        this[_delegate$][$removeWhere](test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      replaceRange(start, end, iterable) {
        IterableOfV()._check(iterable);
        this[_syncDelegate]();
        this[_delegate$][$replaceRange](start, end, iterable);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainWhere(test) {
        this[_syncDelegate]();
        this[_delegate$][$retainWhere](test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      get reversed() {
        this[_syncDelegate]();
        return this[_delegate$][$reversed];
      }
      setAll(index, iterable) {
        IterableOfV()._check(iterable);
        this[_syncDelegate]();
        this[_delegate$][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfV()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_syncDelegate]();
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_syncDelegate]();
        this[_delegate$][$shuffle](random);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_syncDelegate]();
        this[_delegate$][$sort](compare);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        this[_syncDelegate]();
        return this[_delegate$][$sublist](start, end);
      }
    }
    (_WrappedList.new = function(map, key, delegate) {
      _WrappedList.__proto__.new.call(this, MapOfK$ListOfV()._check(map), key, delegate);
      ;
    }).prototype = _WrappedList.prototype;
    _WrappedList.prototype[dart.isList] = true;
    dart.addTypeTests(_WrappedList);
    _WrappedList.prototype[_is__WrappedList_default] = true;
    _WrappedList[dart.implements] = () => [core.List$(V)];
    dart.setMethodSignature(_WrappedList, () => ({
      __proto__: dart.getMethods(_WrappedList.__proto__),
      _get: dart.fnType(V, [core.int]),
      [$_get]: dart.fnType(V, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      '+': dart.fnType(core.List$(V), [core.Object]),
      [$plus]: dart.fnType(core.List$(V), [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      asMap: dart.fnType(core.Map$(core.int, V), []),
      [$asMap]: dart.fnType(core.Map$(core.int, V), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      getRange: dart.fnType(core.Iterable$(V), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(V), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [V])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [V])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [V])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [V])], [core.int]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(V, [core.int]),
      [$removeAt]: dart.fnType(V, [core.int]),
      removeLast: dart.fnType(V, []),
      [$removeLast]: dart.fnType(V, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.List$(T), []]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [V, V])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [V, V])]),
      sublist: dart.fnType(core.List$(V), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(V), [core.int], [core.int])
    }));
    dart.setGetterSignature(_WrappedList, () => ({
      __proto__: dart.getGetters(_WrappedList.__proto__),
      reversed: core.Iterable$(V),
      [$reversed]: core.Iterable$(V)
    }));
    dart.setSetterSignature(_WrappedList, () => ({
      __proto__: dart.getSetters(_WrappedList.__proto__),
      first: core.Object,
      [$first]: core.Object,
      last: core.Object,
      [$last]: core.Object,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_WrappedList, "package:quiver/collection.dart");
    dart.defineExtensionMethods(_WrappedList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_WrappedList, ['first', 'last', 'length', 'reversed']);
    return _WrappedList;
  });
  collection$._WrappedList = collection$._WrappedList$();
  dart.addTypeTests(collection$._WrappedList, _is__WrappedList_default);
  const _is__WrappedSet_default = Symbol('_is__WrappedSet_default');
  collection$._WrappedSet$ = dart.generic((K, V) => {
    let MapOfK$SetOfV = () => (MapOfK$SetOfV = dart.constFn(core.Map$(K, SetOfV())))();
    let SetOfV = () => (SetOfV = dart.constFn(core.Set$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    class _WrappedSet extends collection$._WrappedIterable$(K, V, core.Set$(V)) {
      add(value) {
        V._check(value);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        let wasAdded = this[_delegate$].add(value);
        if (dart.test(wasEmpty)) this[_addToMap]();
        return wasAdded;
      }
      addAll(elements) {
        IterableOfV()._check(elements);
        this[_syncDelegate]();
        let wasEmpty = this[_delegate$][$isEmpty];
        this[_delegate$].addAll(elements);
        if (dart.test(wasEmpty)) this[_addToMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_syncDelegate]();
        this[_delegate$].clear();
        this[_map$][$remove](this[_key$]);
      }
      containsAll(other) {
        this[_syncDelegate]();
        return this[_delegate$].containsAll(other);
      }
      difference(other) {
        this[_syncDelegate]();
        return this[_delegate$].difference(other);
      }
      intersection(other) {
        this[_syncDelegate]();
        return this[_delegate$].intersection(other);
      }
      lookup(object) {
        this[_syncDelegate]();
        return this[_delegate$].lookup(object);
      }
      remove(value) {
        this[_syncDelegate]();
        let removed = this[_delegate$].remove(value);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
        return removed;
      }
      removeAll(elements) {
        this[_syncDelegate]();
        this[_delegate$].removeAll(elements);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      removeWhere(test) {
        this[_syncDelegate]();
        this[_delegate$].removeWhere(test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainAll(elements) {
        this[_syncDelegate]();
        this[_delegate$].retainAll(elements);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retainWhere(test) {
        this[_syncDelegate]();
        this[_delegate$].retainWhere(test);
        if (dart.test(this[_delegate$][$isEmpty])) this[_map$][$remove](this[_key$]);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      union(other) {
        SetOfV()._check(other);
        this[_syncDelegate]();
        return this[_delegate$].union(other);
      }
    }
    (_WrappedSet.new = function(map, key, delegate) {
      _WrappedSet.__proto__.new.call(this, MapOfK$SetOfV()._check(map), key, SetOfV()._check(delegate));
      ;
    }).prototype = _WrappedSet.prototype;
    dart.addTypeTests(_WrappedSet);
    _WrappedSet.prototype[_is__WrappedSet_default] = true;
    _WrappedSet[dart.implements] = () => [core.Set$(V)];
    dart.setMethodSignature(_WrappedSet, () => ({
      __proto__: dart.getMethods(_WrappedSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      lookup: dart.fnType(V, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(V), [core.Object])
    }));
    dart.setLibraryUri(_WrappedSet, "package:quiver/collection.dart");
    dart.defineExtensionMethods(_WrappedSet, ['cast']);
    return _WrappedSet;
  });
  collection$._WrappedSet = collection$._WrappedSet$();
  dart.addTypeTests(collection$._WrappedSet, _is__WrappedSet_default);
  const _is_TreeSet_default = Symbol('_is_TreeSet_default');
  collection$.TreeSet$ = dart.generic(V => {
    class TreeSet extends collection.IterableBase$(V) {
      get comparator() {
        return this[comparator$];
      }
      set comparator(value) {
        super.comparator = value;
      }
      static new(opts) {
        let comparator = opts && 'comparator' in opts ? opts.comparator : null;
        comparator == null ? comparator = dart.fn((a, b) => core.int._check(dart.dsend(a, 'compareTo', [b])), dart.fnType(core.int, [V, V])) : null;
        return new (collection$.AvlTreeSet$(V)).new({comparator: comparator});
      }
    }
    (TreeSet.__ = function(comparator) {
      this[comparator$] = comparator;
      TreeSet.__proto__.new.call(this);
      ;
    }).prototype = TreeSet.prototype;
    dart.addTypeTests(TreeSet);
    TreeSet.prototype[_is_TreeSet_default] = true;
    const comparator$ = Symbol("TreeSet.comparator");
    TreeSet[dart.implements] = () => [core.Set$(V)];
    dart.setLibraryUri(TreeSet, "package:quiver/collection.dart");
    dart.setFieldSignature(TreeSet, () => ({
      __proto__: dart.getFields(TreeSet.__proto__),
      comparator: dart.finalFieldType(dart.fnType(core.int, [V, V]))
    }));
    return TreeSet;
  });
  collection$.TreeSet = collection$.TreeSet$();
  dart.addTypeTests(collection$.TreeSet, _is_TreeSet_default);
  const _name$ = dart.privateName(collection$, "_name");
  let C1;
  let C2;
  let C3;
  let C4;
  collection$.TreeSearch = class TreeSearch extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (collection$.TreeSearch.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = collection$.TreeSearch.prototype;
  dart.addTypeTests(collection$.TreeSearch);
  dart.setLibraryUri(collection$.TreeSearch, "package:quiver/collection.dart");
  dart.setFieldSignature(collection$.TreeSearch, () => ({
    __proto__: dart.getFields(collection$.TreeSearch.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(collection$.TreeSearch, ['toString']);
  collection$.TreeSearch.LESS_THAN = C1 || CT.C1;
  collection$.TreeSearch.NEAREST = C2 || CT.C2;
  collection$.TreeSearch.GREATER_THAN = C3 || CT.C3;
  collection$.TreeSearch.values = C4 || CT.C4;
  const _is__TreeNode_default = Symbol('_is__TreeNode_default');
  collection$._TreeNode$ = dart.generic(V => {
    class _TreeNode extends core.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        this[object$] = V._check(value);
      }
      get minimumNode() {
        let node = this;
        while (node.left != null) {
          node = node.left;
        }
        return node;
      }
      get maximumNode() {
        let node = this;
        while (node.right != null) {
          node = node.right;
        }
        return node;
      }
      get successor() {
        let node = this;
        if (node.right != null) {
          return node.right.minimumNode;
        }
        while (node.parent != null && dart.equals(node, node.parent.right)) {
          node = node.parent;
        }
        return node.parent;
      }
      get predecessor() {
        let node = this;
        if (node.left != null) {
          return node.left.maximumNode;
        }
        while (node.parent != null && dart.equals(node.parent.left, node)) {
          node = node.parent;
        }
        return node.parent;
      }
    }
    (_TreeNode.new = function(opts) {
      let object = opts && 'object' in opts ? opts.object : null;
      this[object$] = object;
      ;
    }).prototype = _TreeNode.prototype;
    dart.addTypeTests(_TreeNode);
    _TreeNode.prototype[_is__TreeNode_default] = true;
    const object$ = Symbol("_TreeNode.object");
    dart.setGetterSignature(_TreeNode, () => ({
      __proto__: dart.getGetters(_TreeNode.__proto__),
      minimumNode: collection$._TreeNode$(V),
      maximumNode: collection$._TreeNode$(V),
      successor: collection$._TreeNode$(V),
      predecessor: collection$._TreeNode$(V)
    }));
    dart.setLibraryUri(_TreeNode, "package:quiver/collection.dart");
    dart.setFieldSignature(_TreeNode, () => ({
      __proto__: dart.getFields(_TreeNode.__proto__),
      object: dart.fieldType(V)
    }));
    return _TreeNode;
  });
  collection$._TreeNode = collection$._TreeNode$();
  dart.addTypeTests(collection$._TreeNode, _is__TreeNode_default);
  const _length = dart.privateName(collection$, "_length");
  const _root = dart.privateName(collection$, "_root");
  const _modCount = dart.privateName(collection$, "_modCount");
  const _left = dart.privateName(collection$, "_left");
  const _parent = dart.privateName(collection$, "_parent");
  const _balanceFactor = dart.privateName(collection$, "_balanceFactor");
  const _right = dart.privateName(collection$, "_right");
  const _rotateLeft = dart.privateName(collection$, "_rotateLeft");
  const _rotateRightLeft = dart.privateName(collection$, "_rotateRightLeft");
  const _rotateRight = dart.privateName(collection$, "_rotateRight");
  const _rotateLeftRight = dart.privateName(collection$, "_rotateLeftRight");
  const _getNode = dart.privateName(collection$, "_getNode");
  const _removeNode = dart.privateName(collection$, "_removeNode");
  const _searchNearest = dart.privateName(collection$, "_searchNearest");
  const _is_AvlTreeSet_default = Symbol('_is_AvlTreeSet_default');
  collection$.AvlTreeSet$ = dart.generic(V => {
    let AvlNodeOfV = () => (AvlNodeOfV = dart.constFn(collection$.AvlNode$(V)))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let JSArrayOfV = () => (JSArrayOfV = dart.constFn(_interceptors.JSArray$(V)))();
    let _AvlTreeIteratorOfV = () => (_AvlTreeIteratorOfV = dart.constFn(collection$._AvlTreeIterator$(V)))();
    let TreeSetOfV = () => (TreeSetOfV = dart.constFn(collection$.TreeSet$(V)))();
    let SetOfV = () => (SetOfV = dart.constFn(core.Set$(V)))();
    let BidirectionalIteratorOfV = () => (BidirectionalIteratorOfV = dart.constFn(core.BidirectionalIterator$(V)))();
    class AvlTreeSet extends collection$.TreeSet$(V) {
      get length() {
        return this[_length];
      }
      add(element) {
        let t0, t1, t0$, t0$0, t1$, t0$1, t0$2, t0$3;
        V._check(element);
        if (this[_root] == null) {
          let node = new (AvlNodeOfV()).new({object: element});
          this[_root] = node;
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_modCount] = dart.notNull(this[_modCount]) + 1;
          return true;
        }
        let x = this[_root];
        while (true) {
          let compare = this.comparator(element, x.object);
          if (compare === 0) {
            return false;
          } else if (dart.notNull(compare) < 0) {
            if (x[_left] == null) {
              let node = (t0 = new (AvlNodeOfV()).new({object: element}), t0[_parent] = x, t0);
              t0$ = x;
              t0$[_left] = node;
              t1 = t0$;
              t1[_balanceFactor] = dart.notNull(t1[_balanceFactor]) - 1;
              t0$;
              break;
            }
            x = x.left;
          } else {
            if (x[_right] == null) {
              let node = (t0$0 = new (AvlNodeOfV()).new({object: element}), t0$0[_parent] = x, t0$0);
              t0$1 = x;
              t0$1[_right] = node;
              t1$ = t0$1;
              t1$[_balanceFactor] = dart.notNull(t1$[_balanceFactor]) + 1;
              t0$1;
              break;
            }
            x = x.right;
          }
        }
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
        let node = x;
        while (node[_balanceFactor] !== 0 && node.parent != null) {
          if (dart.equals(node.parent[_left], node)) {
            t0$2 = node.parent;
            t0$2[_balanceFactor] = dart.notNull(t0$2[_balanceFactor]) - 1;
          } else {
            t0$3 = node.parent;
            t0$3[_balanceFactor] = dart.notNull(t0$3[_balanceFactor]) + 1;
          }
          node = node.parent;
          if (node[_balanceFactor] === 2) {
            if (node.right[_balanceFactor] === 1) {
              this[_rotateLeft](node);
              node[_balanceFactor] = node.parent[_balanceFactor] = 0;
              node = node.parent;
            } else {
              this[_rotateRightLeft](node);
              node = node.parent;
              if (node[_balanceFactor] === 1) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              }
              node[_balanceFactor] = 0;
            }
            break;
          } else if (node[_balanceFactor] === -2) {
            if (node.left[_balanceFactor] === -1) {
              this[_rotateRight](node);
              node[_balanceFactor] = node.parent[_balanceFactor] = 0;
              node = node.parent;
            } else {
              this[_rotateLeftRight](node);
              node = node.parent;
              if (node[_balanceFactor] === -1) {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              }
              node[_balanceFactor] = 0;
            }
            break;
          }
        }
        this[_length] = dart.notNull(this[_length]) + 1;
        return true;
      }
      [_getNode](element) {
        if (element == null) return null;
        let x = this[_root];
        while (x != null) {
          let compare = this.comparator(element, x.object);
          if (compare === 0) {
            return x;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        return null;
      }
      [_rotateRight](node) {
        let y = node.left;
        if (y == null) dart.throw(new core.AssertionError.new());
        node[_left] = y.right;
        if (node.left != null) {
          node.left[_parent] = node;
        }
        y[_parent] = node.parent;
        if (y[_parent] == null) {
          this[_root] = y;
        } else {
          if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
          } else {
            node.parent[_right] = y;
          }
        }
        y[_right] = node;
        node[_parent] = y;
      }
      [_rotateLeft](node) {
        let y = node.right;
        if (y == null) dart.throw(new core.AssertionError.new());
        node[_right] = y.left;
        if (node.right != null) {
          node.right[_parent] = node;
        }
        y[_parent] = node.parent;
        if (y[_parent] == null) {
          this[_root] = y;
        } else {
          if (dart.equals(node.parent[_left], node)) {
            y.parent[_left] = y;
          } else {
            y.parent[_right] = y;
          }
        }
        y[_left] = node;
        node[_parent] = y;
      }
      [_rotateRightLeft](node) {
        this[_rotateRight](node.right);
        this[_rotateLeft](node);
      }
      [_rotateLeftRight](node) {
        this[_rotateLeft](node.left);
        this[_rotateRight](node);
      }
      addAll(items) {
        IterableOfV()._check(items);
        let modified = false;
        for (let ele of items) {
          modified = dart.test(this.add(ele)) ? true : modified;
        }
        return modified;
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        this[_length] = 0;
        this[_root] = null;
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
      }
      containsAll(items) {
        for (let ele of items) {
          if (!dart.test(this.contains(ele))) return false;
        }
        return true;
      }
      remove(item) {
        if (!V.is(item)) return false;
        let x = this[_getNode](V.as(item));
        if (x != null) {
          this[_removeNode](x);
          return true;
        }
        return false;
      }
      [_removeNode](node) {
        let t0, t0$, t0$0, t0$1, t0$2;
        let y = null;
        let w = null;
        this[_modCount] = dart.notNull(this[_modCount]) + 1;
        this[_length] = dart.notNull(this[_length]) - 1;
        if (node[_right] == null || node.right[_left] == null) {
          if (node.right != null) {
            y = node.right;
            y[_parent] = node.parent;
            y[_balanceFactor] = dart.notNull(node[_balanceFactor]) - 1;
            y[_left] = node.left;
            if (y.left != null) {
              y.left[_parent] = y;
            }
          } else if (node.left != null) {
            y = node.left;
            y[_parent] = node.parent;
            y[_balanceFactor] = dart.notNull(node[_balanceFactor]) + 1;
          } else {
            y = null;
          }
          if (dart.equals(this[_root], node)) {
            this[_root] = y;
          } else if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
            if (y == null) {
              t0 = node.parent;
              t0[_balanceFactor] = dart.notNull(t0[_balanceFactor]) + 1;
              y = node.parent;
            }
          } else {
            node.parent[_right] = y;
            if (y == null) {
              t0$ = node.parent;
              t0$[_balanceFactor] = dart.notNull(t0$[_balanceFactor]) - 1;
              y = node.parent;
            }
          }
          w = y;
        } else {
          y = AvlNodeOfV()._check(node.successor);
          y[_left] = node.left;
          if (y.left != null) {
            y.left[_parent] = y;
          }
          w = y.parent;
          w[_left] = y.right;
          if (w.left != null) {
            w.left[_parent] = w;
          }
          t0$0 = w;
          t0$0[_balanceFactor] = dart.notNull(t0$0[_balanceFactor]) + 1;
          y[_right] = node.right;
          y.right[_parent] = y;
          y[_balanceFactor] = node[_balanceFactor];
          y[_parent] = node.parent;
          if (dart.equals(this[_root], node)) {
            this[_root] = y;
          } else if (dart.equals(node.parent[_left], node)) {
            node.parent[_left] = y;
          } else {
            node.parent[_right] = y;
          }
        }
        node[_balanceFactor] = 0;
        node[_left] = node[_right] = node[_parent] = null;
        node.object = null;
        node = w;
        while (node != null) {
          node = node.parent;
        }
        node = w;
        while (node != null) {
          if (node[_balanceFactor] === -1 || node[_balanceFactor] === 1) {
            break;
          }
          if (node[_balanceFactor] === 2) {
            if (node.right[_balanceFactor] === -1) {
              this[_rotateRightLeft](node);
              node = node.parent;
              if (node[_balanceFactor] === 1) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              }
              node[_balanceFactor] = 0;
            } else {
              this[_rotateLeft](node);
              if (node.parent[_balanceFactor] === 0) {
                node.parent[_balanceFactor] = -1;
                node[_balanceFactor] = 1;
                break;
              } else {
                node.parent[_balanceFactor] = 0;
                node[_balanceFactor] = 0;
                node = node.parent;
                continue;
              }
            }
          } else if (node[_balanceFactor] === -2) {
            if (node.left[_balanceFactor] === 1) {
              this[_rotateLeftRight](node);
              node = node.parent;
              if (node[_balanceFactor] === -1) {
                node.right[_balanceFactor] = 1;
                node.left[_balanceFactor] = 0;
              } else if (node[_balanceFactor] === 0) {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = 0;
              } else {
                node.right[_balanceFactor] = 0;
                node.left[_balanceFactor] = -1;
              }
              node[_balanceFactor] = 0;
            } else {
              this[_rotateRight](node);
              if (node.parent[_balanceFactor] === 0) {
                node.parent[_balanceFactor] = 1;
                node[_balanceFactor] = -1;
                break;
              } else {
                node.parent[_balanceFactor] = 0;
                node[_balanceFactor] = 0;
                node = node.parent;
                continue;
              }
            }
          }
          if (node.parent != null) {
            if (dart.equals(node.parent.left, node)) {
              t0$1 = node.parent;
              t0$1[_balanceFactor] = dart.notNull(t0$1[_balanceFactor]) + 1;
            } else {
              t0$2 = node.parent;
              t0$2[_balanceFactor] = dart.notNull(t0$2[_balanceFactor]) - 1;
            }
          }
          node = node.parent;
        }
      }
      removeAll(items) {
        for (let ele of items) {
          this.remove(ele);
        }
      }
      retainAll(elements) {
        let chosen = JSArrayOfV().of([]);
        for (let target of elements) {
          if (V.is(target) && dart.test(this.contains(target))) {
            chosen[$add](target);
          }
        }
        this.clear();
        this.addAll(chosen);
      }
      retainWhere(test) {
        let chosen = JSArrayOfV().of([]);
        for (let target of this) {
          if (dart.test(test(target))) {
            chosen[$add](target);
          }
        }
        this.clear();
        this.addAll(chosen);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      removeWhere(test) {
        let damned = JSArrayOfV().of([]);
        for (let target of this) {
          if (dart.test(test(target))) {
            damned[$add](target);
          }
        }
        this.removeAll(damned);
      }
      get first() {
        if (this[_root] == null) return null;
        let min = AvlNodeOfV()._check(this[_root].minimumNode);
        return min != null ? min.object : null;
      }
      get last() {
        if (this[_root] == null) return null;
        let max = AvlNodeOfV()._check(this[_root].maximumNode);
        return max != null ? max.object : null;
      }
      lookup(element) {
        if (!V.is(element) || this[_root] == null) return null;
        let x = this[_root];
        let compare = 0;
        while (x != null) {
          compare = this.comparator(V.as(element), x.object);
          if (compare === 0) {
            return x.object;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        return null;
      }
      nearest(object, opts) {
        V._check(object);
        let nearestOption = opts && 'nearestOption' in opts ? opts.nearestOption : C2 || CT.C2;
        let found = this[_searchNearest](object, {option: nearestOption});
        return found != null ? found.object : null;
      }
      [_searchNearest](element, opts) {
        V._check(element);
        let option = opts && 'option' in opts ? opts.option : C2 || CT.C2;
        if (element == null || this[_root] == null) {
          return null;
        }
        let x = this[_root];
        let previous = null;
        let compare = 0;
        while (x != null) {
          previous = x;
          compare = this.comparator(element, x.object);
          if (compare === 0) {
            return x;
          } else if (dart.notNull(compare) < 0) {
            x = x.left;
          } else {
            x = x.right;
          }
        }
        if (dart.equals(option, collection$.TreeSearch.GREATER_THAN)) {
          return AvlNodeOfV()._check(dart.notNull(compare) < 0 ? previous : previous.successor);
        } else if (dart.equals(option, collection$.TreeSearch.LESS_THAN)) {
          return AvlNodeOfV()._check(dart.notNull(compare) < 0 ? previous.predecessor : previous);
        }
        x = AvlNodeOfV()._check(dart.notNull(compare) < 0 ? previous.predecessor : previous.successor);
        if (x == null) {
          return previous;
        }
        let otherCompare = this.comparator(element, x.object);
        if (dart.notNull(compare) < 0) {
          return compare[$abs]() < dart.notNull(otherCompare) ? previous : x;
        }
        return otherCompare[$abs]() < dart.notNull(compare) ? x : previous;
      }
      get iterator() {
        return new (_AvlTreeIteratorOfV()).__(this);
      }
      get reverseIterator() {
        return new (_AvlTreeIteratorOfV()).__(this, {reversed: true});
      }
      fromIterator(anchor, opts) {
        V._check(anchor);
        let reversed = opts && 'reversed' in opts ? opts.reversed : false;
        let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
        return new (_AvlTreeIteratorOfV()).__(this, {anchorObject: anchor, reversed: reversed, inclusive: inclusive});
      }
      contains(object) {
        let x = this[_getNode](V.as(object));
        return x != null;
      }
      intersection(other) {
        let set = TreeSetOfV().new({comparator: this.comparator});
        if (TreeSetOfV().is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = this.comparator(i1.current, i2.current);
            if (c === 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              hasMore1 = i1.moveNext();
            } else {
              hasMore2 = i2.moveNext();
            }
          }
          return set;
        }
        for (let target of this) {
          if (dart.test(other.contains(target))) {
            set.add(target);
          }
        }
        return set;
      }
      union(other) {
        let t0;
        SetOfV()._check(other);
        let set = TreeSetOfV().new({comparator: this.comparator});
        if (collection$.TreeSet.is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = this.comparator(i1.current, i2.current);
            if (c === 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
            } else {
              set.add(i2.current);
              hasMore2 = i2.moveNext();
            }
          }
          if (dart.test(hasMore1) || dart.test(hasMore2)) {
            i1 = BidirectionalIteratorOfV()._check(dart.test(hasMore1) ? i1 : i2);
            do {
              set.add(i1.current);
            } while (dart.test(i1.moveNext()));
          }
          return set;
        }
        t0 = set;
        t0.addAll(this);
        t0.addAll(other);
        return t0;
      }
      difference(other) {
        let set = TreeSetOfV().new({comparator: this.comparator});
        if (collection$.TreeSet.is(other)) {
          let i1 = this.iterator;
          let i2 = other.iterator;
          let hasMore1 = i1.moveNext();
          let hasMore2 = i2.moveNext();
          while (dart.test(hasMore1) && dart.test(hasMore2)) {
            let c = this.comparator(i1.current, V._check(i2.current));
            if (c === 0) {
              hasMore1 = i1.moveNext();
              hasMore2 = i2.moveNext();
            } else if (dart.notNull(c) < 0) {
              set.add(i1.current);
              hasMore1 = i1.moveNext();
            } else {
              hasMore2 = i2.moveNext();
            }
          }
          if (dart.test(hasMore1)) {
            do {
              set.add(i1.current);
            } while (dart.test(i1.moveNext()));
          }
          return set;
        }
        for (let target of this) {
          if (!dart.test(other.contains(target))) {
            set.add(target);
          }
        }
        return set;
      }
      getNode(object) {
        V._check(object);
        return this[_getNode](object);
      }
    }
    (AvlTreeSet.new = function(opts) {
      let comparator = opts && 'comparator' in opts ? opts.comparator : null;
      this[_length] = 0;
      this[_root] = null;
      this[_modCount] = 0;
      AvlTreeSet.__proto__.__.call(this, comparator);
      ;
    }).prototype = AvlTreeSet.prototype;
    dart.addTypeTests(AvlTreeSet);
    AvlTreeSet.prototype[_is_AvlTreeSet_default] = true;
    dart.setMethodSignature(AvlTreeSet, () => ({
      __proto__: dart.getMethods(AvlTreeSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      [_getNode]: dart.fnType(collection$.AvlNode$(V), [V]),
      [_rotateRight]: dart.fnType(dart.void, [collection$.AvlNode$(V)]),
      [_rotateLeft]: dart.fnType(dart.void, [collection$.AvlNode$(V)]),
      [_rotateRightLeft]: dart.fnType(dart.void, [collection$.AvlNode$(V)]),
      [_rotateLeftRight]: dart.fnType(dart.void, [collection$.AvlNode$(V)]),
      addAll: dart.fnType(core.bool, [core.Object]),
      cast: dart.gFnType(T => [collection$.AvlTreeSet$(T), []]),
      [$cast]: dart.gFnType(T => [collection$.AvlTreeSet$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      remove: dart.fnType(core.bool, [core.Object]),
      [_removeNode]: dart.fnType(dart.void, [collection$.AvlNode$(V)]),
      removeAll: dart.fnType(dart.void, [core.Iterable]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      lookup: dart.fnType(V, [core.Object]),
      nearest: dart.fnType(V, [core.Object], {nearestOption: collection$.TreeSearch}),
      [_searchNearest]: dart.fnType(collection$.AvlNode$(V), [core.Object], {option: collection$.TreeSearch}),
      fromIterator: dart.fnType(core.BidirectionalIterator$(V), [core.Object], {inclusive: core.bool, reversed: core.bool}),
      intersection: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      union: dart.fnType(core.Set$(V), [core.Object]),
      difference: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      getNode: dart.fnType(collection$.AvlNode$(V), [core.Object])
    }));
    dart.setGetterSignature(AvlTreeSet, () => ({
      __proto__: dart.getGetters(AvlTreeSet.__proto__),
      iterator: core.BidirectionalIterator$(V),
      [$iterator]: core.BidirectionalIterator$(V),
      reverseIterator: core.BidirectionalIterator$(V)
    }));
    dart.setLibraryUri(AvlTreeSet, "package:quiver/collection.dart");
    dart.setFieldSignature(AvlTreeSet, () => ({
      __proto__: dart.getFields(AvlTreeSet.__proto__),
      [_length]: dart.fieldType(core.int),
      [_root]: dart.fieldType(collection$.AvlNode$(V)),
      [_modCount]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(AvlTreeSet, ['cast', 'contains']);
    dart.defineExtensionAccessors(AvlTreeSet, ['length', 'first', 'last', 'iterator']);
    return AvlTreeSet;
  });
  collection$.AvlTreeSet = collection$.AvlTreeSet$();
  dart.addTypeTests(collection$.AvlTreeSet, _is_AvlTreeSet_default);
  const _moveNext = dart.privateName(collection$, "_moveNext");
  const _movePrevious = dart.privateName(collection$, "_movePrevious");
  const _current = dart.privateName(collection$, "_current");
  const _modCountGuard = dart.privateName(collection$, "_modCountGuard");
  const _movePreviousNormal = dart.privateName(collection$, "_movePreviousNormal");
  const _moveNextNormal = dart.privateName(collection$, "_moveNextNormal");
  const _is__AvlTreeIterator_default = Symbol('_is__AvlTreeIterator_default');
  collection$._AvlTreeIterator$ = dart.generic(V => {
    let VAndVToint = () => (VAndVToint = dart.constFn(dart.fnType(core.int, [V, V])))();
    class _AvlTreeIterator extends core.Object {
      get current() {
        return this.state !== 0 || this[_current] == null ? null : this[_current].object;
      }
      moveNext() {
        return this[_moveNext]();
      }
      movePrevious() {
        return this[_movePrevious]();
      }
      [_moveNextNormal]() {
        if (this[_modCountGuard] != this.tree[_modCount]) {
          dart.throw(new core.ConcurrentModificationError.new(this.tree));
        }
        if (this.state === 1 || this.tree.length === 0) return false;
        switch (this.state) {
          case -1:
          {
            this[_current] = this.tree[_root].minimumNode;
            this.state = 0;
            return true;
          }
          case 0:
          default:
          {
            this[_current] = this[_current].successor;
            if (this[_current] == null) {
              this.state = 1;
            }
            return this.state === 0;
          }
        }
      }
      [_movePreviousNormal]() {
        if (this[_modCountGuard] != this.tree[_modCount]) {
          dart.throw(new core.ConcurrentModificationError.new(this.tree));
        }
        if (this.state === -1 || this.tree.length === 0) return false;
        switch (this.state) {
          case 1:
          {
            this[_current] = this.tree[_root].maximumNode;
            this.state = 0;
            return true;
          }
          case 0:
          default:
          {
            this[_current] = this[_current].predecessor;
            if (this[_current] == null) {
              this.state = -1;
            }
            return this.state === 0;
          }
        }
      }
    }
    (_AvlTreeIterator.__ = function(tree, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      let inclusive = opts && 'inclusive' in opts ? opts.inclusive : true;
      let anchorObject = opts && 'anchorObject' in opts ? opts.anchorObject : null;
      this[_moveNext] = null;
      this[_movePrevious] = null;
      this.state = null;
      this[_current] = null;
      this.inclusive = inclusive;
      this.anchorObject = anchorObject;
      this.tree = tree;
      this[_modCountGuard] = tree[_modCount];
      this.reversed = core.bool._check(reversed);
      if (this.anchorObject == null || tree.length === 0) {
        this.state = dart.dtest(reversed) ? 1 : -1;
        this[_moveNext] = dart.dtest(reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.dtest(reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        return;
      }
      this.state = 0;
      this[_moveNext] = dart.fn(() => {
        this[_current] = tree[_searchNearest](this.anchorObject, {option: dart.dtest(reversed) ? collection$.TreeSearch.LESS_THAN : collection$.TreeSearch.GREATER_THAN});
        this[_moveNext] = dart.dtest(reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.dtest(reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        if (this[_current] == null) {
          this.state = dart.dtest(reversed) ? -1 : 1;
        } else if (VAndVToint()._check(tree.comparator)(this[_current].object, this.anchorObject) === 0 && !dart.test(this.inclusive)) {
          this[_moveNext]();
        }
        return this.state === 0;
      }, VoidTobool());
      this[_movePrevious] = dart.fn(() => {
        this[_current] = tree[_searchNearest](this.anchorObject, {option: dart.dtest(reversed) ? collection$.TreeSearch.GREATER_THAN : collection$.TreeSearch.LESS_THAN});
        this[_moveNext] = dart.dtest(reversed) ? dart.bind(this, _movePreviousNormal) : dart.bind(this, _moveNextNormal);
        this[_movePrevious] = dart.dtest(reversed) ? dart.bind(this, _moveNextNormal) : dart.bind(this, _movePreviousNormal);
        if (this[_current] == null) {
          this.state = dart.dtest(reversed) ? 1 : -1;
        } else if (VAndVToint()._check(tree.comparator)(this[_current].object, this.anchorObject) === 0 && !dart.test(this.inclusive)) {
          this[_movePrevious]();
        }
        return this.state === 0;
      }, VoidTobool());
    }).prototype = _AvlTreeIterator.prototype;
    dart.addTypeTests(_AvlTreeIterator);
    _AvlTreeIterator.prototype[_is__AvlTreeIterator_default] = true;
    _AvlTreeIterator[dart.implements] = () => [core.BidirectionalIterator$(V)];
    dart.setMethodSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getMethods(_AvlTreeIterator.__proto__),
      moveNext: dart.fnType(core.bool, []),
      movePrevious: dart.fnType(core.bool, []),
      [_moveNextNormal]: dart.fnType(core.bool, []),
      [_movePreviousNormal]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getGetters(_AvlTreeIterator.__proto__),
      current: V
    }));
    dart.setLibraryUri(_AvlTreeIterator, "package:quiver/collection.dart");
    dart.setFieldSignature(_AvlTreeIterator, () => ({
      __proto__: dart.getFields(_AvlTreeIterator.__proto__),
      reversed: dart.finalFieldType(core.bool),
      tree: dart.finalFieldType(collection$.AvlTreeSet$(V)),
      [_modCountGuard]: dart.finalFieldType(core.int),
      anchorObject: dart.finalFieldType(V),
      inclusive: dart.finalFieldType(core.bool),
      [_moveNext]: dart.fieldType(dart.fnType(core.bool, [])),
      [_movePrevious]: dart.fieldType(dart.fnType(core.bool, [])),
      state: dart.fieldType(core.int),
      [_current]: dart.fieldType(collection$._TreeNode$(V))
    }));
    return _AvlTreeIterator;
  });
  collection$._AvlTreeIterator = collection$._AvlTreeIterator$();
  dart.defineLazy(collection$._AvlTreeIterator, {
    /*collection$._AvlTreeIterator.LEFT*/get LEFT() {
      return -1;
    },
    /*collection$._AvlTreeIterator.WALK*/get WALK() {
      return 0;
    },
    /*collection$._AvlTreeIterator.RIGHT*/get RIGHT() {
      return 1;
    }
  });
  dart.addTypeTests(collection$._AvlTreeIterator, _is__AvlTreeIterator_default);
  const _is_AvlNode_default = Symbol('_is_AvlNode_default');
  collection$.AvlNode$ = dart.generic(V => {
    let AvlNodeOfV = () => (AvlNodeOfV = dart.constFn(collection$.AvlNode$(V)))();
    class AvlNode extends collection$._TreeNode$(V) {
      get [_left]() {
        return this[_left$];
      }
      set [_left](value) {
        this[_left$] = AvlNodeOfV()._check(value);
      }
      get [_right]() {
        return this[_right$];
      }
      set [_right](value) {
        this[_right$] = AvlNodeOfV()._check(value);
      }
      get [_parent]() {
        return this[_parent$];
      }
      set [_parent](value) {
        this[_parent$] = AvlNodeOfV()._check(value);
      }
      get left() {
        return this[_left];
      }
      get right() {
        return this[_right];
      }
      get parent() {
        return this[_parent];
      }
      get balance() {
        return this[_balanceFactor];
      }
      toString() {
        return "(b:" + dart.str(this.balance) + " o: " + dart.str(this.object) + " l:" + dart.str(this.left != null) + " r:" + dart.str(this.right != null) + ")";
      }
    }
    (AvlNode.new = function(opts) {
      let object = opts && 'object' in opts ? opts.object : null;
      this[_left$] = null;
      this[_right$] = null;
      this[_parent$] = null;
      this[_balanceFactor] = 0;
      AvlNode.__proto__.new.call(this, {object: object});
      ;
    }).prototype = AvlNode.prototype;
    dart.addTypeTests(AvlNode);
    AvlNode.prototype[_is_AvlNode_default] = true;
    const _left$ = Symbol("AvlNode._left");
    const _right$ = Symbol("AvlNode._right");
    const _parent$ = Symbol("AvlNode._parent");
    dart.setGetterSignature(AvlNode, () => ({
      __proto__: dart.getGetters(AvlNode.__proto__),
      left: collection$.AvlNode$(V),
      right: collection$.AvlNode$(V),
      parent: collection$.AvlNode$(V),
      balance: core.int
    }));
    dart.setLibraryUri(AvlNode, "package:quiver/collection.dart");
    dart.setFieldSignature(AvlNode, () => ({
      __proto__: dart.getFields(AvlNode.__proto__),
      [_left]: dart.fieldType(collection$.AvlNode$(V)),
      [_right]: dart.fieldType(collection$.AvlNode$(V)),
      [_parent]: dart.fieldType(collection$.AvlNode$(V)),
      [_balanceFactor]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(AvlNode, ['toString']);
    return AvlNode;
  });
  collection$.AvlNode = collection$.AvlNode$();
  dart.addTypeTests(collection$.AvlNode, _is_AvlNode_default);
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  collection$.DelegatingIterable$ = dart.generic(E => {
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class DelegatingIterable extends core.Object {
      any(test) {
        return this.delegate[$any](test);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      contains(element) {
        return this.delegate[$contains](element);
      }
      elementAt(index) {
        return this.delegate[$elementAt](index);
      }
      every(test) {
        return this.delegate[$every](test);
      }
      expand(T, f) {
        return this.delegate[$expand](T, f);
      }
      get first() {
        return this.delegate[$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this.delegate[$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this.delegate[$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this.delegate[$followedBy](other);
      }
      forEach(f) {
        return this.delegate[$forEach](f);
      }
      get isEmpty() {
        return this.delegate[$isEmpty];
      }
      get isNotEmpty() {
        return this.delegate[$isNotEmpty];
      }
      get iterator() {
        return this.delegate[$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this.delegate[$join](separator);
      }
      get last() {
        return this.delegate[$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this.delegate[$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this.delegate[$length];
      }
      map(T, f) {
        return this.delegate[$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this.delegate[$reduce](combine);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      get single() {
        return this.delegate[$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this.delegate[$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this.delegate[$skip](n);
      }
      skipWhile(test) {
        return this.delegate[$skipWhile](test);
      }
      take(n) {
        return this.delegate[$take](n);
      }
      takeWhile(test) {
        return this.delegate[$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this.delegate[$toList]({growable: growable});
      }
      toSet() {
        return this.delegate[$toSet]();
      }
      where(test) {
        return this.delegate[$where](test);
      }
      whereType(T) {
        dart.throw(new core.UnimplementedError.new("whereType"));
      }
    }
    (DelegatingIterable.new = function() {
      ;
    }).prototype = DelegatingIterable.prototype;
    DelegatingIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    DelegatingIterable[dart.implements] = () => [core.Iterable$(E)];
    dart.setMethodSignature(DelegatingIterable, () => ({
      __proto__: dart.getMethods(DelegatingIterable.__proto__),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
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
      retype: dart.gFnType(T => [core.Iterable$(T), []]),
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
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []])
    }));
    dart.setGetterSignature(DelegatingIterable, () => ({
      __proto__: dart.getGetters(DelegatingIterable.__proto__),
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
      length: core.int,
      [$length]: core.int,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(DelegatingIterable, "package:quiver/collection.dart");
    dart.defineExtensionMethods(DelegatingIterable, [
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
      'whereType'
    ]);
    dart.defineExtensionAccessors(DelegatingIterable, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return DelegatingIterable;
  });
  collection$.DelegatingIterable = collection$.DelegatingIterable$();
  dart.addTypeTests(collection$.DelegatingIterable, _is_DelegatingIterable_default);
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  collection$.DelegatingList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingList extends collection$.DelegatingIterable$(E) {
      _get(index) {
        return this.delegate[$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        this.delegate[$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListOfE()._check(other);
        return this.delegate[$plus](other);
      }
      add(value) {
        E._check(value);
        return this.delegate[$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return this.delegate[$addAll](iterable);
      }
      asMap() {
        return this.delegate[$asMap]();
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      clear() {
        return this.delegate[$clear]();
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        return this.delegate[$fillRange](start, end, fillValue);
      }
      set first(element) {
        E._check(element);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, element);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this.delegate[$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this.delegate[$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this.delegate[$indexWhere](test, start);
      }
      insert(index, element) {
        E._check(element);
        return this.delegate[$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        return this.delegate[$insertAll](index, iterable);
      }
      set last(element) {
        E._check(element);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, element);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this.delegate[$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this.delegate[$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this.delegate[$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this.delegate[$remove](value);
      }
      removeAt(index) {
        return this.delegate[$removeAt](index);
      }
      removeLast() {
        return this.delegate[$removeLast]();
      }
      removeRange(start, end) {
        return this.delegate[$removeRange](start, end);
      }
      removeWhere(test) {
        return this.delegate[$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        return this.delegate[$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        return this.delegate[$retainWhere](test);
      }
      get reversed() {
        return this.delegate[$reversed];
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        return this.delegate[$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        return this.delegate[$setRange](start, end, iterable, skipCount);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        return this.delegate[$shuffle](random);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        return this.delegate[$sort](compare);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this.delegate[$sublist](start, end);
      }
    }
    (DelegatingList.new = function() {
      ;
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    DelegatingList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [collection$.DelegatingList$(T), []]),
      [$cast]: dart.gFnType(T => [collection$.DelegatingList$(T), []]),
      retype: dart.gFnType(T => [collection$.DelegatingList$(T), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E)
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: core.Object,
      [$first]: core.Object,
      last: core.Object,
      [$last]: core.Object,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(DelegatingList, "package:quiver/collection.dart");
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  collection$.DelegatingList = collection$.DelegatingList$();
  dart.addTypeTests(collection$.DelegatingList, _is_DelegatingList_default);
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  collection$.DelegatingMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class DelegatingMap extends core.Object {
      _get(key) {
        return this.delegate[$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this.delegate[$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        return this.delegate[$addAll](other);
      }
      addEntries(entries) {
        IterableOfObject()._check(entries);
        dart.throw(new core.UnimplementedError.new("addEntries"));
      }
      cast(K2, V2) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate[$clear]();
      }
      containsKey(key) {
        return this.delegate[$containsKey](key);
      }
      containsValue(value) {
        return this.delegate[$containsValue](value);
      }
      get entries() {
        dart.throw(new core.UnimplementedError.new("entries"));
      }
      forEach(f) {
        return this.delegate[$forEach](f);
      }
      get isEmpty() {
        return this.delegate[$isEmpty];
      }
      get isNotEmpty() {
        return this.delegate[$isNotEmpty];
      }
      get keys() {
        return this.delegate[$keys];
      }
      get length() {
        return this.delegate[$length];
      }
      map(K2, V2, transform) {
        dart.throw(new core.UnimplementedError.new("map"));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this.delegate[$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this.delegate[$remove](key);
      }
      removeWhere(test) {
        dart.throw(new core.UnimplementedError.new("removeWhere"));
      }
      retype(K2, V2) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        dart.throw(new core.UnimplementedError.new("update"));
      }
      updateAll(update) {
        KAndVToV()._check(update);
        dart.throw(new core.UnimplementedError.new("updateAll"));
      }
      get values() {
        return this.delegate[$values];
      }
    }
    (DelegatingMap.new = function() {
      ;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    DelegatingMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.Object, [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.Object, [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
      entries: core.Iterable$(core.Null),
      [$entries]: core.Iterable$(core.Null),
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
    dart.setLibraryUri(DelegatingMap, "package:quiver/collection.dart");
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  collection$.DelegatingMap = collection$.DelegatingMap$();
  dart.addTypeTests(collection$.DelegatingMap, _is_DelegatingMap_default);
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  collection$.DelegatingQueue$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingQueue extends collection$.DelegatingIterable$(E) {
      add(value) {
        E._check(value);
        return this.delegate.add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return this.delegate.addAll(iterable);
      }
      addFirst(value) {
        E._check(value);
        return this.delegate.addFirst(value);
      }
      addLast(value) {
        E._check(value);
        return this.delegate.addLast(value);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      clear() {
        return this.delegate.clear();
      }
      remove(object) {
        return this.delegate.remove(object);
      }
      removeFirst() {
        return this.delegate.removeFirst();
      }
      removeLast() {
        return this.delegate.removeLast();
      }
      removeWhere(test) {
        return this.delegate.removeWhere(test);
      }
      retainWhere(test) {
        return this.delegate.retainWhere(test);
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
    }
    (DelegatingQueue.new = function() {
      ;
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    DelegatingQueue[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      addLast: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [collection$.DelegatingQueue$(T), []]),
      [$cast]: dart.gFnType(T => [collection$.DelegatingQueue$(T), []]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeFirst: dart.fnType(E, []),
      removeLast: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [collection$.DelegatingQueue$(T), []])
    }));
    dart.setLibraryUri(DelegatingQueue, "package:quiver/collection.dart");
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  collection$.DelegatingQueue = collection$.DelegatingQueue$();
  dart.addTypeTests(collection$.DelegatingQueue, _is_DelegatingQueue_default);
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  collection$.DelegatingSet$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    class DelegatingSet extends collection$.DelegatingIterable$(E) {
      add(value) {
        E._check(value);
        return this.delegate.add(value);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        return this.delegate.addAll(elements);
      }
      cast(T) {
        dart.throw(new core.UnimplementedError.new("cast"));
      }
      retype(T) {
        dart.throw(new core.UnimplementedError.new("retype"));
      }
      clear() {
        return this.delegate.clear();
      }
      containsAll(other) {
        return this.delegate.containsAll(other);
      }
      difference(other) {
        return this.delegate.difference(other);
      }
      intersection(other) {
        return this.delegate.intersection(other);
      }
      lookup(object) {
        return this.delegate.lookup(object);
      }
      remove(value) {
        return this.delegate.remove(value);
      }
      removeAll(elements) {
        return this.delegate.removeAll(elements);
      }
      removeWhere(test) {
        return this.delegate.removeWhere(test);
      }
      retainAll(elements) {
        return this.delegate.retainAll(elements);
      }
      retainWhere(test) {
        return this.delegate.retainWhere(test);
      }
      union(other) {
        SetOfE()._check(other);
        return this.delegate.union(other);
      }
    }
    (DelegatingSet.new = function() {
      ;
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    DelegatingSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [collection$.DelegatingSet$(T), []]),
      [$cast]: dart.gFnType(T => [collection$.DelegatingSet$(T), []]),
      retype: dart.gFnType(T => [collection$.DelegatingSet$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setLibraryUri(DelegatingSet, "package:quiver/collection.dart");
    dart.defineExtensionMethods(DelegatingSet, ['cast']);
    return DelegatingSet;
  });
  collection$.DelegatingSet = collection$.DelegatingSet$();
  dart.addTypeTests(collection$.DelegatingSet, _is_DelegatingSet_default);
  collection$.listsEqual = function listsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    for (let i = 0; i < dart.notNull(a[$length]); i = i + 1) {
      if (!dart.equals(a[$_get](i), b[$_get](i))) return false;
    }
    return true;
  };
  collection$.mapsEqual = function mapsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    for (let k of a[$keys]) {
      let bValue = b[$_get](k);
      if (bValue == null && !dart.test(b[$containsKey](k))) return false;
      if (!dart.equals(bValue, a[$_get](k))) return false;
    }
    return true;
  };
  collection$.setsEqual = function setsEqual(a, b) {
    if (dart.equals(a, b)) return true;
    if (a == null || b == null) return false;
    if (a[$length] != b[$length]) return false;
    return a.containsAll(b);
  };
  collection$.indexOf = function indexOf(T, elements, predicate) {
    if (core.List$(T).is(elements)) {
      for (let i = 0; i < dart.notNull(elements[$length]); i = i + 1) {
        if (dart.test(predicate(elements[$_get](i)))) return i;
      }
      return -1;
    }
    let i = 0;
    for (let element of elements) {
      if (dart.test(predicate(element))) return i;
      i = i + 1;
    }
    return -1;
  };
  collection$._isToStringVisiting = function _isToStringVisiting(o) {
    return collection$._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicTobool()));
  };
  dart.defineLazy(collection$, {
    /*collection$._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  });
  dart.trackLibraries("packages/quiver/collection", {
    "package:quiver/collection.dart": collection$
  }, {
    "package:quiver/collection.dart": ["src/collection/bimap.dart", "src/collection/lru_map.dart", "src/collection/multimap.dart", "src/collection/treeset.dart", "src/collection/delegates/iterable.dart", "src/collection/delegates/list.dart", "src/collection/delegates/map.dart", "src/collection/delegates/queue.dart", "src/collection/delegates/set.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src\\\\collection\\\\bimap.dart","src\\\\collection\\\\lru_map.dart","src\\\\collection\\\\multimap.dart","src\\\\collection\\\\treeset.dart","src\\\\collection\\\\delegates\\\\iterable.dart","src\\\\collection\\\\delegates\\\\list.dart","src\\\\collection\\\\delegates\\\\map.dart","src\\\\collection\\\\delegates\\\\queue.dart","src\\\\collection\\\\delegates\\\\set.dart","collection.dart"],"names":[],"mappings":"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","file":"collection.ddc.js"}');
  // Exports:
  return {
    collection: collection$
  };
});

//# sourceMappingURL=collection.ddc.js.map
