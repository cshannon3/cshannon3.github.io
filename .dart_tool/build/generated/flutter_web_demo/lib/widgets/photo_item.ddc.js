define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_demo/models/models'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_demo__models__models) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const image = packages__flutter_web__animation.src__widgets__image;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const photo = packages__flutter_web_demo__models__models.models__photo;
  const photo_item = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [_bottom]: 4,
        [_right]: 4,
        [_top]: 4,
        [_left]: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 17,
        line: 22,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 11,
        line: 23,
        file: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C2 || CT.C2,
        name: null,
        column: 22,
        line: 21,
        file: "org-dartlang-app:///packages/flutter_web_demo/widgets/photo_item.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 9,
        line: 20,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 21,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 14,
        line: 19,
        file: "org-dartlang-app:///packages/flutter_web_demo/widgets/photo_item.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 16,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "behavior",
        column: 7,
        line: 17,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 7,
        line: 18,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 19,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 12,
        line: 15,
        file: "org-dartlang-app:///packages/flutter_web_demo/widgets/photo_item.dart"
      });
    }
  });
  const _bottom = dart.privateName(edge_insets, "_bottom");
  const _right = dart.privateName(edge_insets, "_right");
  const _top = dart.privateName(edge_insets, "_top");
  const _left = dart.privateName(edge_insets, "_left");
  let C0;
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C13;
  let C14;
  let C10;
  let C9;
  photo_item.PhotoItem = class PhotoItem extends framework.StatelessWidget {
    get photo() {
      return this[photo$];
    }
    set photo(value) {
      super.photo = value;
    }
    get onClick() {
      return this[onClick$];
    }
    set onClick(value) {
      super.onClick = value;
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({key: new framework.UniqueKey.new(), behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => this.onClick(this.photo), VoidTovoid()), child: new container.Container.new({margin: C0 || CT.C0, child: new image.Image.network(this.photo.computedImageUrl(), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
  };
  (photo_item.PhotoItem.new = function(opts) {
    let photo = opts && 'photo' in opts ? opts.photo : null;
    let onClick = opts && 'onClick' in opts ? opts.onClick : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[photo$] = photo;
    this[onClick$] = onClick;
    photo_item.PhotoItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = photo_item.PhotoItem.prototype;
  dart.addTypeTests(photo_item.PhotoItem);
  const photo$ = Symbol("PhotoItem.photo");
  const onClick$ = Symbol("PhotoItem.onClick");
  dart.setMethodSignature(photo_item.PhotoItem, () => ({
    __proto__: dart.getMethods(photo_item.PhotoItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(photo_item.PhotoItem, "package:flutter_web_demo/widgets/photo_item.dart");
  dart.setFieldSignature(photo_item.PhotoItem, () => ({
    __proto__: dart.getFields(photo_item.PhotoItem.__proto__),
    photo: dart.finalFieldType(photo.Photo),
    onClick: dart.finalFieldType(dart.fnType(dart.void, [photo.Photo]))
  }));
  dart.trackLibraries("packages/flutter_web_demo/widgets/photo_item", {
    "package:flutter_web_demo/widgets/photo_item.dart": photo_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["photo_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIc;;;;;;IACc;;;;;;UAQA;AACxB,YAAO,gDACA,yCACqB,yCACnB,cAAM,aAAQ,mCACd,yDAEQ,wBACX,AAAM,qCACM;IAIpB;;;QAlBiB;QACA;;IADA;IACA;AAFjB;;EAGE","file":"photo_item.ddc.js"}');
  // Exports:
  return {
    widgets__photo_item: photo_item
  };
});

//# sourceMappingURL=photo_item.ddc.js.map
