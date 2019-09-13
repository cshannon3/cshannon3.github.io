define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const iterables$ = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $hashCode = dartx.hashCode;
  const $length = dartx.length;
  const $first = dartx.first;
  const $last = dartx.last;
  const $single = dartx.single;
  const $elementAt = dartx.elementAt;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $expand = dartx.expand;
  const $every = dartx.every;
  const $reduce = dartx.reduce;
  let ComparableAndComparableToint = () => (ComparableAndComparableToint = dart.constFn(dart.fnType(core.int, [core.Comparable, core.Comparable])))();
  let SyncIterableOfnum = () => (SyncIterableOfnum = dart.constFn(_js_helper.SyncIterable$(core.num)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C1() {
      return C1 = dart.fn(core.Comparable.compare, ComparableAndComparableToint());
    }
  });
  const _is_InfiniteIterable_default = Symbol('_is_InfiniteIterable_default');
  iterables$.InfiniteIterable$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    class InfiniteIterable extends collection.IterableBase$(T) {
      get isEmpty() {
        return false;
      }
      get isNotEmpty() {
        return true;
      }
      get last() {
        return dart.throw(new core.UnsupportedError.new("last"));
      }
      get length() {
        return dart.throw(new core.UnsupportedError.new("length"));
      }
      get single() {
        return dart.throw(new core.StateError.new("single"));
      }
      every(f) {
        return dart.throw(new core.UnsupportedError.new("every"));
      }
      fold(T1, initialValue, combine) {
        return dart.throw(new core.UnsupportedError.new("fold"));
      }
      forEach(f) {
        return dart.throw(new core.UnsupportedError.new("forEach"));
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return dart.throw(new core.UnsupportedError.new("join"));
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return dart.throw(new core.UnsupportedError.new("lastWhere"));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return dart.throw(new core.UnsupportedError.new("reduce"));
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return dart.throw(new core.UnsupportedError.new("singleWhere"));
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return dart.throw(new core.UnsupportedError.new("toList"));
      }
      toSet() {
        return dart.throw(new core.UnsupportedError.new("toSet"));
      }
    }
    (InfiniteIterable.new = function() {
      InfiniteIterable.__proto__.new.call(this);
      ;
    }).prototype = InfiniteIterable.prototype;
    dart.addTypeTests(InfiniteIterable);
    InfiniteIterable.prototype[_is_InfiniteIterable_default] = true;
    dart.setLibraryUri(InfiniteIterable, "package:quiver/iterables.dart");
    dart.defineExtensionMethods(InfiniteIterable, [
      'every',
      'fold',
      'forEach',
      'join',
      'lastWhere',
      'reduce',
      'singleWhere',
      'toList',
      'toSet'
    ]);
    dart.defineExtensionAccessors(InfiniteIterable, [
      'isEmpty',
      'isNotEmpty',
      'last',
      'length',
      'single'
    ]);
    return InfiniteIterable;
  });
  iterables$.InfiniteIterable = iterables$.InfiniteIterable$();
  dart.addTypeTests(iterables$.InfiniteIterable, _is_InfiniteIterable_default);
  iterables$._Count = class _Count extends iterables$.InfiniteIterable$(core.num) {
    get iterator() {
      return new iterables$._CountIterator.new(this.start, this.step);
    }
  };
  (iterables$._Count.new = function(start, step) {
    this.start = start;
    this.step = step;
    iterables$._Count.__proto__.new.call(this);
    ;
  }).prototype = iterables$._Count.prototype;
  dart.addTypeTests(iterables$._Count);
  dart.setGetterSignature(iterables$._Count, () => ({
    __proto__: dart.getGetters(iterables$._Count.__proto__),
    iterator: core.Iterator$(core.num),
    [$iterator]: core.Iterator$(core.num)
  }));
  dart.setLibraryUri(iterables$._Count, "package:quiver/iterables.dart");
  dart.setFieldSignature(iterables$._Count, () => ({
    __proto__: dart.getFields(iterables$._Count.__proto__),
    start: dart.finalFieldType(core.num),
    step: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionAccessors(iterables$._Count, ['iterator']);
  const _current = dart.privateName(iterables$, "_current");
  const _start$ = dart.privateName(iterables$, "_start");
  const _step$ = dart.privateName(iterables$, "_step");
  iterables$._CountIterator = class _CountIterator extends core.Object {
    get current() {
      return this[_current];
    }
    moveNext() {
      this[_current] = this[_current] == null ? this[_start$] : dart.notNull(this[_current]) + dart.notNull(this[_step$]);
      return true;
    }
  };
  (iterables$._CountIterator.new = function(_start, _step) {
    this[_current] = null;
    this[_start$] = _start;
    this[_step$] = _step;
    ;
  }).prototype = iterables$._CountIterator.prototype;
  dart.addTypeTests(iterables$._CountIterator);
  iterables$._CountIterator[dart.implements] = () => [core.Iterator$(core.num)];
  dart.setMethodSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getMethods(iterables$._CountIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getGetters(iterables$._CountIterator.__proto__),
    current: core.num
  }));
  dart.setLibraryUri(iterables$._CountIterator, "package:quiver/iterables.dart");
  dart.setFieldSignature(iterables$._CountIterator, () => ({
    __proto__: dart.getFields(iterables$._CountIterator.__proto__),
    [_start$]: dart.finalFieldType(core.num),
    [_step$]: dart.finalFieldType(core.num),
    [_current]: dart.fieldType(core.num)
  }));
  const _iterable$ = dart.privateName(iterables$, "_iterable");
  const _is__Cycle_default = Symbol('_is__Cycle_default');
  iterables$._Cycle$ = dart.generic(T => {
    let _CycleIteratorOfT = () => (_CycleIteratorOfT = dart.constFn(iterables$._CycleIterator$(T)))();
    class _Cycle extends iterables$.InfiniteIterable$(T) {
      get iterator() {
        return new (_CycleIteratorOfT()).new(this[_iterable$]);
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_iterable$][$isNotEmpty];
      }
    }
    (_Cycle.new = function(_iterable) {
      this[_iterable$] = _iterable;
      _Cycle.__proto__.new.call(this);
      ;
    }).prototype = _Cycle.prototype;
    dart.addTypeTests(_Cycle);
    _Cycle.prototype[_is__Cycle_default] = true;
    dart.setGetterSignature(_Cycle, () => ({
      __proto__: dart.getGetters(_Cycle.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(_Cycle, "package:quiver/iterables.dart");
    dart.setFieldSignature(_Cycle, () => ({
      __proto__: dart.getFields(_Cycle.__proto__),
      [_iterable$]: dart.finalFieldType(core.Iterable$(T))
    }));
    dart.defineExtensionAccessors(_Cycle, ['iterator', 'isEmpty', 'isNotEmpty']);
    return _Cycle;
  });
  iterables$._Cycle = iterables$._Cycle$();
  dart.addTypeTests(iterables$._Cycle, _is__Cycle_default);
  const _iterator$ = dart.privateName(iterables$, "_iterator");
  const _is__CycleIterator_default = Symbol('_is__CycleIterator_default');
  iterables$._CycleIterator$ = dart.generic(T => {
    class _CycleIterator extends core.Object {
      get current() {
        return this[_iterator$].current;
      }
      moveNext() {
        if (!dart.test(this[_iterator$].moveNext())) {
          this[_iterator$] = this[_iterable$][$iterator];
          return this[_iterator$].moveNext();
        }
        return true;
      }
    }
    (_CycleIterator.new = function(_iterable) {
      this[_iterable$] = _iterable;
      this[_iterator$] = _iterable[$iterator];
      ;
    }).prototype = _CycleIterator.prototype;
    dart.addTypeTests(_CycleIterator);
    _CycleIterator.prototype[_is__CycleIterator_default] = true;
    _CycleIterator[dart.implements] = () => [core.Iterator$(T)];
    dart.setMethodSignature(_CycleIterator, () => ({
      __proto__: dart.getMethods(_CycleIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CycleIterator, () => ({
      __proto__: dart.getGetters(_CycleIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_CycleIterator, "package:quiver/iterables.dart");
    dart.setFieldSignature(_CycleIterator, () => ({
      __proto__: dart.getFields(_CycleIterator.__proto__),
      [_iterable$]: dart.finalFieldType(core.Iterable$(T)),
      [_iterator$]: dart.fieldType(core.Iterator$(T))
    }));
    return _CycleIterator;
  });
  iterables$._CycleIterator = iterables$._CycleIterator$();
  dart.addTypeTests(iterables$._CycleIterator, _is__CycleIterator_default);
  const _is_IndexedValue_default = Symbol('_is_IndexedValue_default');
  iterables$.IndexedValue$ = dart.generic(V => {
    class IndexedValue extends core.Object {
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(o) {
        if (o == null) return false;
        return iterables$.IndexedValue.is(o) && o.index == this.index && dart.equals(o.value, this.value);
      }
      get hashCode() {
        return dart.notNull(this.index) * 31 + dart.notNull(dart.hashCode(this.value));
      }
      toString() {
        return "(" + dart.str(this.index) + ", " + dart.str(this.value) + ")";
      }
    }
    (IndexedValue.new = function(index, value) {
      this[index$] = index;
      this[value$] = value;
      ;
    }).prototype = IndexedValue.prototype;
    dart.addTypeTests(IndexedValue);
    IndexedValue.prototype[_is_IndexedValue_default] = true;
    const index$ = Symbol("IndexedValue.index");
    const value$ = Symbol("IndexedValue.value");
    dart.setLibraryUri(IndexedValue, "package:quiver/iterables.dart");
    dart.setFieldSignature(IndexedValue, () => ({
      __proto__: dart.getFields(IndexedValue.__proto__),
      index: dart.finalFieldType(core.int),
      value: dart.finalFieldType(V)
    }));
    dart.defineExtensionMethods(IndexedValue, ['_equals', 'toString']);
    dart.defineExtensionAccessors(IndexedValue, ['hashCode']);
    return IndexedValue;
  });
  iterables$.IndexedValue = iterables$.IndexedValue$();
  dart.addTypeTests(iterables$.IndexedValue, _is_IndexedValue_default);
  const _is_EnumerateIterable_default = Symbol('_is_EnumerateIterable_default');
  iterables$.EnumerateIterable$ = dart.generic(V => {
    let EnumerateIteratorOfV = () => (EnumerateIteratorOfV = dart.constFn(iterables$.EnumerateIterator$(V)))();
    let IndexedValueOfV = () => (IndexedValueOfV = dart.constFn(iterables$.IndexedValue$(V)))();
    class EnumerateIterable extends collection.IterableBase$(iterables$.IndexedValue$(V)) {
      get iterator() {
        return new (EnumerateIteratorOfV()).new(this[_iterable$][$iterator]);
      }
      get length() {
        return this[_iterable$][$length];
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
      get first() {
        return new (IndexedValueOfV()).new(0, this[_iterable$][$first]);
      }
      get last() {
        return new (IndexedValueOfV()).new(dart.notNull(this.length) - 1, this[_iterable$][$last]);
      }
      get single() {
        return new (IndexedValueOfV()).new(0, this[_iterable$][$single]);
      }
      elementAt(index) {
        return new (IndexedValueOfV()).new(index, this[_iterable$][$elementAt](index));
      }
    }
    (EnumerateIterable.new = function(_iterable) {
      this[_iterable$] = _iterable;
      EnumerateIterable.__proto__.new.call(this);
      ;
    }).prototype = EnumerateIterable.prototype;
    dart.addTypeTests(EnumerateIterable);
    EnumerateIterable.prototype[_is_EnumerateIterable_default] = true;
    dart.setGetterSignature(EnumerateIterable, () => ({
      __proto__: dart.getGetters(EnumerateIterable.__proto__),
      iterator: core.Iterator$(iterables$.IndexedValue$(V)),
      [$iterator]: core.Iterator$(iterables$.IndexedValue$(V))
    }));
    dart.setLibraryUri(EnumerateIterable, "package:quiver/iterables.dart");
    dart.setFieldSignature(EnumerateIterable, () => ({
      __proto__: dart.getFields(EnumerateIterable.__proto__),
      [_iterable$]: dart.finalFieldType(core.Iterable$(V))
    }));
    dart.defineExtensionMethods(EnumerateIterable, ['elementAt']);
    dart.defineExtensionAccessors(EnumerateIterable, [
      'iterator',
      'length',
      'isEmpty',
      'first',
      'last',
      'single'
    ]);
    return EnumerateIterable;
  });
  iterables$.EnumerateIterable = iterables$.EnumerateIterable$();
  dart.addTypeTests(iterables$.EnumerateIterable, _is_EnumerateIterable_default);
  const _index = dart.privateName(iterables$, "_index");
  const _is_EnumerateIterator_default = Symbol('_is_EnumerateIterator_default');
  iterables$.EnumerateIterator$ = dart.generic(V => {
    let IndexedValueOfV = () => (IndexedValueOfV = dart.constFn(iterables$.IndexedValue$(V)))();
    class EnumerateIterator extends core.Iterator$(iterables$.IndexedValue$(V)) {
      get current() {
        return this[_current];
      }
      moveNext() {
        let t0;
        if (dart.test(this[_iterator$].moveNext())) {
          this[_current] = new (IndexedValueOfV()).new((t0 = this[_index], this[_index] = dart.notNull(t0) + 1, t0), this[_iterator$].current);
          return true;
        }
        this[_current] = null;
        return false;
      }
    }
    (EnumerateIterator.new = function(_iterator) {
      this[_index] = 0;
      this[_current] = null;
      this[_iterator$] = _iterator;
      ;
    }).prototype = EnumerateIterator.prototype;
    dart.addTypeTests(EnumerateIterator);
    EnumerateIterator.prototype[_is_EnumerateIterator_default] = true;
    dart.setMethodSignature(EnumerateIterator, () => ({
      __proto__: dart.getMethods(EnumerateIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(EnumerateIterator, () => ({
      __proto__: dart.getGetters(EnumerateIterator.__proto__),
      current: iterables$.IndexedValue$(V)
    }));
    dart.setLibraryUri(EnumerateIterator, "package:quiver/iterables.dart");
    dart.setFieldSignature(EnumerateIterator, () => ({
      __proto__: dart.getFields(EnumerateIterator.__proto__),
      [_iterator$]: dart.finalFieldType(core.Iterator$(V)),
      [_index]: dart.fieldType(core.int),
      [_current]: dart.fieldType(iterables$.IndexedValue$(V))
    }));
    return EnumerateIterator;
  });
  iterables$.EnumerateIterator = iterables$.EnumerateIterator$();
  dart.addTypeTests(iterables$.EnumerateIterator, _is_EnumerateIterator_default);
  const _iterables$ = dart.privateName(iterables$, "_iterables");
  const _compare$ = dart.privateName(iterables$, "_compare");
  const _is__Merge_default = Symbol('_is__Merge_default');
  iterables$._Merge$ = dart.generic(T => {
    let _MergeIteratorOfT = () => (_MergeIteratorOfT = dart.constFn(iterables$._MergeIterator$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    class _Merge extends collection.IterableBase$(T) {
      get iterator() {
        return new (_MergeIteratorOfT()).new(this[_iterables$][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT()))[$toList]({growable: false}), this[_compare$]);
      }
      toString() {
        return dart.toString(this[$toList]());
      }
    }
    (_Merge.new = function(_iterables, _compare) {
      this[_iterables$] = _iterables;
      this[_compare$] = _compare;
      _Merge.__proto__.new.call(this);
      ;
    }).prototype = _Merge.prototype;
    dart.addTypeTests(_Merge);
    _Merge.prototype[_is__Merge_default] = true;
    dart.setGetterSignature(_Merge, () => ({
      __proto__: dart.getGetters(_Merge.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(_Merge, "package:quiver/iterables.dart");
    dart.setFieldSignature(_Merge, () => ({
      __proto__: dart.getFields(_Merge.__proto__),
      [_iterables$]: dart.finalFieldType(core.Iterable$(core.Iterable$(T))),
      [_compare$]: dart.finalFieldType(dart.fnType(core.int, [T, T]))
    }));
    dart.defineExtensionMethods(_Merge, ['toString']);
    dart.defineExtensionAccessors(_Merge, ['iterator']);
    return _Merge;
  });
  iterables$._Merge = iterables$._Merge$();
  dart.addTypeTests(iterables$._Merge, _is__Merge_default);
  const _hasCurrent = dart.privateName(iterables$, "_hasCurrent");
  const _is__IteratorPeeker_default = Symbol('_is__IteratorPeeker_default');
  iterables$._IteratorPeeker$ = dart.generic(T => {
    class _IteratorPeeker extends core.Object {
      moveNext() {
        this[_hasCurrent] = this[_iterator$].moveNext();
      }
      get current() {
        return this[_iterator$].current;
      }
    }
    (_IteratorPeeker.new = function(iterator) {
      this[_iterator$] = iterator;
      this[_hasCurrent] = iterator.moveNext();
      ;
    }).prototype = _IteratorPeeker.prototype;
    dart.addTypeTests(_IteratorPeeker);
    _IteratorPeeker.prototype[_is__IteratorPeeker_default] = true;
    dart.setMethodSignature(_IteratorPeeker, () => ({
      __proto__: dart.getMethods(_IteratorPeeker.__proto__),
      moveNext: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_IteratorPeeker, () => ({
      __proto__: dart.getGetters(_IteratorPeeker.__proto__),
      current: T
    }));
    dart.setLibraryUri(_IteratorPeeker, "package:quiver/iterables.dart");
    dart.setFieldSignature(_IteratorPeeker, () => ({
      __proto__: dart.getFields(_IteratorPeeker.__proto__),
      [_iterator$]: dart.finalFieldType(core.Iterator$(T)),
      [_hasCurrent]: dart.fieldType(core.bool)
    }));
    return _IteratorPeeker;
  });
  iterables$._IteratorPeeker = iterables$._IteratorPeeker$();
  dart.addTypeTests(iterables$._IteratorPeeker, _is__IteratorPeeker_default);
  const _peekers = dart.privateName(iterables$, "_peekers");
  const _is__MergeIterator_default = Symbol('_is__MergeIterator_default');
  iterables$._MergeIterator$ = dart.generic(T => {
    let _IteratorPeekerOfT = () => (_IteratorPeekerOfT = dart.constFn(iterables$._IteratorPeeker$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IteratorOfTTo_IteratorPeekerOfT = () => (IteratorOfTTo_IteratorPeekerOfT = dart.constFn(dart.fnType(_IteratorPeekerOfT(), [IteratorOfT()])))();
    class _MergeIterator extends core.Object {
      moveNext() {
        let minIter = null;
        for (let p of this[_peekers]) {
          if (dart.test(p[_hasCurrent])) {
            if (minIter == null || dart.notNull(this[_compare$](p.current, minIter.current)) < 0) {
              minIter = p;
            }
          }
        }
        if (minIter == null) {
          return false;
        }
        this[_current] = minIter.current;
        minIter.moveNext();
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_MergeIterator.new = function(iterators, _compare) {
      this[_current] = null;
      this[_compare$] = _compare;
      this[_peekers] = iterators[$map](_IteratorPeekerOfT(), dart.fn(i => new (_IteratorPeekerOfT()).new(i), IteratorOfTTo_IteratorPeekerOfT()))[$toList]();
      ;
    }).prototype = _MergeIterator.prototype;
    dart.addTypeTests(_MergeIterator);
    _MergeIterator.prototype[_is__MergeIterator_default] = true;
    _MergeIterator[dart.implements] = () => [core.Iterator$(T)];
    dart.setMethodSignature(_MergeIterator, () => ({
      __proto__: dart.getMethods(_MergeIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_MergeIterator, () => ({
      __proto__: dart.getGetters(_MergeIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_MergeIterator, "package:quiver/iterables.dart");
    dart.setFieldSignature(_MergeIterator, () => ({
      __proto__: dart.getFields(_MergeIterator.__proto__),
      [_peekers]: dart.finalFieldType(core.List$(iterables$._IteratorPeeker$(T))),
      [_compare$]: dart.finalFieldType(dart.fnType(core.int, [T, T])),
      [_current]: dart.fieldType(T)
    }));
    return _MergeIterator;
  });
  iterables$._MergeIterator = iterables$._MergeIterator$();
  dart.addTypeTests(iterables$._MergeIterator, _is__MergeIterator_default);
  const _is_Extent_default = Symbol('_is_Extent_default');
  iterables$.Extent$ = dart.generic(T => {
    class Extent extends core.Object {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
    }
    (Extent.new = function(min, max) {
      this[min$] = min;
      this[max$] = max;
      ;
    }).prototype = Extent.prototype;
    dart.addTypeTests(Extent);
    Extent.prototype[_is_Extent_default] = true;
    const min$ = Symbol("Extent.min");
    const max$ = Symbol("Extent.max");
    dart.setLibraryUri(Extent, "package:quiver/iterables.dart");
    dart.setFieldSignature(Extent, () => ({
      __proto__: dart.getFields(Extent.__proto__),
      min: dart.finalFieldType(T),
      max: dart.finalFieldType(T)
    }));
    return Extent;
  });
  iterables$.Extent = iterables$.Extent$();
  dart.addTypeTests(iterables$.Extent, _is_Extent_default);
  const _size$ = dart.privateName(iterables$, "_size");
  const _is__Partition_default = Symbol('_is__Partition_default');
  iterables$._Partition$ = dart.generic(T => {
    let _PartitionIteratorOfT = () => (_PartitionIteratorOfT = dart.constFn(iterables$._PartitionIterator$(T)))();
    class _Partition extends collection.IterableBase$(core.List$(T)) {
      get iterator() {
        return new (_PartitionIteratorOfT()).new(this[_iterable$][$iterator], this[_size$]);
      }
    }
    (_Partition.new = function(_iterable, _size) {
      this[_iterable$] = _iterable;
      this[_size$] = _size;
      _Partition.__proto__.new.call(this);
      if (dart.notNull(this[_size$]) <= 0) dart.throw(new core.ArgumentError.new(this[_size$]));
    }).prototype = _Partition.prototype;
    dart.addTypeTests(_Partition);
    _Partition.prototype[_is__Partition_default] = true;
    dart.setGetterSignature(_Partition, () => ({
      __proto__: dart.getGetters(_Partition.__proto__),
      iterator: core.Iterator$(core.List$(T)),
      [$iterator]: core.Iterator$(core.List$(T))
    }));
    dart.setLibraryUri(_Partition, "package:quiver/iterables.dart");
    dart.setFieldSignature(_Partition, () => ({
      __proto__: dart.getFields(_Partition.__proto__),
      [_iterable$]: dart.finalFieldType(core.Iterable$(T)),
      [_size$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(_Partition, ['iterator']);
    return _Partition;
  });
  iterables$._Partition = iterables$._Partition$();
  dart.addTypeTests(iterables$._Partition, _is__Partition_default);
  const _is__PartitionIterator_default = Symbol('_is__PartitionIterator_default');
  iterables$._PartitionIterator$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class _PartitionIterator extends core.Object {
      get current() {
        return this[_current];
      }
      moveNext() {
        let newValue = JSArrayOfT().of([]);
        let count = 0;
        while (count < dart.notNull(this[_size$]) && dart.test(this[_iterator$].moveNext())) {
          newValue[$add](this[_iterator$].current);
          count = count + 1;
        }
        this[_current] = count > 0 ? newValue : null;
        return this[_current] != null;
      }
    }
    (_PartitionIterator.new = function(_iterator, _size) {
      this[_current] = null;
      this[_iterator$] = _iterator;
      this[_size$] = _size;
      ;
    }).prototype = _PartitionIterator.prototype;
    dart.addTypeTests(_PartitionIterator);
    _PartitionIterator.prototype[_is__PartitionIterator_default] = true;
    _PartitionIterator[dart.implements] = () => [core.Iterator$(core.List$(T))];
    dart.setMethodSignature(_PartitionIterator, () => ({
      __proto__: dart.getMethods(_PartitionIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_PartitionIterator, () => ({
      __proto__: dart.getGetters(_PartitionIterator.__proto__),
      current: core.List$(T)
    }));
    dart.setLibraryUri(_PartitionIterator, "package:quiver/iterables.dart");
    dart.setFieldSignature(_PartitionIterator, () => ({
      __proto__: dart.getFields(_PartitionIterator.__proto__),
      [_iterator$]: dart.finalFieldType(core.Iterator$(T)),
      [_size$]: dart.finalFieldType(core.int),
      [_current]: dart.fieldType(core.List$(T))
    }));
    return _PartitionIterator;
  });
  iterables$._PartitionIterator = iterables$._PartitionIterator$();
  dart.addTypeTests(iterables$._PartitionIterator, _is__PartitionIterator_default);
  const _is_GeneratingIterable_default = Symbol('_is_GeneratingIterable_default');
  iterables$.GeneratingIterable$ = dart.generic(T => {
    let _GeneratingIteratorOfT = () => (_GeneratingIteratorOfT = dart.constFn(iterables$._GeneratingIterator$(T)))();
    class GeneratingIterable extends collection.IterableBase$(T) {
      get initial() {
        return this[initial$];
      }
      set initial(value) {
        super.initial = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      get iterator() {
        return new (_GeneratingIteratorOfT()).new(this.initial(), this.next);
      }
    }
    (GeneratingIterable.new = function(initial, next) {
      this[initial$] = initial;
      this[next$] = next;
      GeneratingIterable.__proto__.new.call(this);
      ;
    }).prototype = GeneratingIterable.prototype;
    dart.addTypeTests(GeneratingIterable);
    GeneratingIterable.prototype[_is_GeneratingIterable_default] = true;
    const initial$ = Symbol("GeneratingIterable.initial");
    const next$ = Symbol("GeneratingIterable.next");
    dart.setGetterSignature(GeneratingIterable, () => ({
      __proto__: dart.getGetters(GeneratingIterable.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(GeneratingIterable, "package:quiver/iterables.dart");
    dart.setFieldSignature(GeneratingIterable, () => ({
      __proto__: dart.getFields(GeneratingIterable.__proto__),
      initial: dart.finalFieldType(dart.fnType(T, [])),
      next: dart.finalFieldType(dart.fnType(T, [T]))
    }));
    dart.defineExtensionAccessors(GeneratingIterable, ['iterator']);
    return GeneratingIterable;
  });
  iterables$.GeneratingIterable = iterables$.GeneratingIterable$();
  dart.addTypeTests(iterables$.GeneratingIterable, _is_GeneratingIterable_default);
  const _is__GeneratingIterator_default = Symbol('_is__GeneratingIterator_default');
  iterables$._GeneratingIterator$ = dart.generic(T => {
    class _GeneratingIterator extends core.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        this[object$] = T._check(value);
      }
      get current() {
        return dart.test(this.started) ? this.object : null;
      }
      moveNext() {
        if (this.object == null) return false;
        if (dart.test(this.started)) {
          this.object = this.next(this.object);
        } else {
          this.started = true;
        }
        return this.object != null;
      }
    }
    (_GeneratingIterator.new = function(object, next) {
      this.started = false;
      this[object$] = object;
      this.next = next;
      ;
    }).prototype = _GeneratingIterator.prototype;
    dart.addTypeTests(_GeneratingIterator);
    _GeneratingIterator.prototype[_is__GeneratingIterator_default] = true;
    const object$ = Symbol("_GeneratingIterator.object");
    _GeneratingIterator[dart.implements] = () => [core.Iterator$(T)];
    dart.setMethodSignature(_GeneratingIterator, () => ({
      __proto__: dart.getMethods(_GeneratingIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_GeneratingIterator, () => ({
      __proto__: dart.getGetters(_GeneratingIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_GeneratingIterator, "package:quiver/iterables.dart");
    dart.setFieldSignature(_GeneratingIterator, () => ({
      __proto__: dart.getFields(_GeneratingIterator.__proto__),
      next: dart.finalFieldType(dart.fnType(T, [T])),
      object: dart.fieldType(T),
      started: dart.fieldType(core.bool)
    }));
    return _GeneratingIterator;
  });
  iterables$._GeneratingIterator = iterables$._GeneratingIterator$();
  dart.addTypeTests(iterables$._GeneratingIterator, _is__GeneratingIterator_default);
  let C0;
  let C1;
  iterables$.concat = function concat(T, iterables) {
    return iterables[$expand](T, dart.fn(x => x, dart.fnType(core.Iterable$(T), [core.Iterable$(T)])));
  };
  iterables$.count = function count(start, step) {
    if (start === void 0) start = 0;
    if (step === void 0) step = 1;
    return new iterables$._Count.new(start, step);
  };
  iterables$.cycle = function cycle(T, iterable) {
    return new (iterables$._Cycle$(T)).new(iterable);
  };
  iterables$.enumerate = function enumerate(E, iterable) {
    return new (iterables$.EnumerateIterable$(E)).new(iterable);
  };
  iterables$.generate = function generate(initial, next) {
    return new iterables$.GeneratingIterable.new(initial, next);
  };
  iterables$.merge = function merge(T, iterables, compare) {
    let t0;
    if (compare === void 0) compare = null;
    if (dart.test(iterables[$isEmpty])) return C0 || CT.C0;
    if (dart.test(iterables[$every](dart.fn(i => i[$isEmpty], dart.fnType(core.bool, [core.Iterable$(T)]))))) return C0 || CT.C0;
    return new (iterables$._Merge$(T)).new(iterables, dart.fnType(core.int, [T, T])._check((t0 = compare, t0 == null ? C1 || CT.C1 : t0)));
  };
  iterables$.max = function max(T, i, compare) {
    let t0;
    if (compare === void 0) compare = null;
    if (dart.test(i[$isEmpty])) return null;
    let _compare = dart.fnType(core.int, [T, T])._check((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    return i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) > 0 ? a : b, dart.fnType(T, [T, T])));
  };
  iterables$.min = function min(T, i, compare) {
    let t0;
    if (compare === void 0) compare = null;
    if (dart.test(i[$isEmpty])) return null;
    let _compare = dart.fnType(core.int, [T, T])._check((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    return i[$reduce](dart.fn((a, b) => dart.notNull(_compare(a, b)) < 0 ? a : b, dart.fnType(T, [T, T])));
  };
  iterables$.extent = function extent(T, i, compare) {
    let t0;
    if (compare === void 0) compare = null;
    if (dart.test(i[$isEmpty])) return new (iterables$.Extent$(T)).new(null, null);
    let _compare = dart.fnType(core.int, [T, T])._check((t0 = compare, t0 == null ? C1 || CT.C1 : t0));
    let iterator = i[$iterator];
    let hasNext = iterator.moveNext();
    if (!dart.test(hasNext)) return new (iterables$.Extent$(T)).new(null, null);
    let max = iterator.current;
    let min = iterator.current;
    while (dart.test(iterator.moveNext())) {
      if (dart.notNull(_compare(max, iterator.current)) < 0) max = iterator.current;
      if (dart.notNull(_compare(min, iterator.current)) > 0) min = iterator.current;
    }
    return new (iterables$.Extent$(T)).new(min, max);
  };
  iterables$.partition = function partition(T, iterable, size) {
    return dart.test(iterable[$isEmpty]) ? _interceptors.JSArray$(core.List$(T)).of([]) : new (iterables$._Partition$(T)).new(iterable, size);
  };
  iterables$.range = function range(start_or_stop, stop, step) {
    if (stop === void 0) stop = null;
    if (step === void 0) step = null;
    return new (SyncIterableOfnum()).new(() => (function* range(stop, step) {
      let start = stop == null ? 0 : start_or_stop;
      stop == null ? stop = start_or_stop : null;
      step == null ? step = 1 : null;
      if (step === 0) dart.throw(new core.ArgumentError.new("step cannot be 0"));
      if (dart.notNull(step) > 0 && dart.notNull(stop) < dart.notNull(start)) dart.throw(new core.ArgumentError.new("if step is positive," + " stop must be greater than start"));
      if (dart.notNull(step) < 0 && dart.notNull(stop) > dart.notNull(start)) dart.throw(new core.ArgumentError.new("if step is negative," + " stop must be less than start"));
      for (let value = start; dart.notNull(step) < 0 ? dart.notNull(value) > dart.notNull(stop) : dart.notNull(value) < dart.notNull(stop); value = dart.notNull(value) + dart.notNull(step))
        yield value;
    })(stop, step));
  };
  iterables$.zip = function zip(T, iterables) {
    return new (_js_helper.SyncIterable$(core.List$(T))).new(function* zip() {
      if (dart.test(iterables[$isEmpty])) return;
      let iterators = iterables[$map](core.Iterator$(T), dart.fn(e => e[$iterator], dart.fnType(core.Iterator$(T), [core.Iterable$(T)])))[$toList]({growable: false});
      while (dart.test(iterators[$every](dart.fn(e => e.moveNext(), dart.fnType(core.bool, [core.Iterator$(T)]))))) {
        yield iterators[$map](T, dart.fn(e => e.current, dart.fnType(T, [core.Iterator$(T)])))[$toList]({growable: false});
      }
    });
  };
  dart.trackLibraries("packages/quiver/iterables", {
    "package:quiver/iterables.dart": iterables$
  }, {
    "package:quiver/iterables.dart": ["src/iterables/concat.dart", "src/iterables/count.dart", "src/iterables/cycle.dart", "src/iterables/enumerate.dart", "src/iterables/infinite_iterable.dart", "src/iterables/merge.dart", "src/iterables/min_max.dart", "src/iterables/partition.dart", "src/iterables/generating_iterable.dart", "src/iterables/range.dart", "src/iterables/zip.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src\\\\iterables\\\\infinite_iterable.dart","src\\\\iterables\\\\count.dart","src\\\\iterables\\\\cycle.dart","src\\\\iterables\\\\enumerate.dart","src\\\\iterables\\\\merge.dart","src\\\\iterables\\\\min_max.dart","src\\\\iterables\\\\partition.dart","src\\\\iterables\\\\generating_iterable.dart","src\\\\iterables\\\\concat.dart","src\\\\iterables\\\\range.dart","src\\\\iterables\\\\zip.dart"],"names":[],"mappings":"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","file":"iterables.ddc.js"}');
  // Exports:
  return {
    iterables: iterables$
  };
});

//# sourceMappingURL=iterables.ddc.js.map
