define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web_demo/models/models'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web_demo__models__models) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const colors = packages__flutter_web__material.src__material__colors;
  const image = packages__flutter_web__animation.src__widgets__image;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const container = packages__flutter_web__animation.src__widgets__container;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  const photo = packages__flutter_web_demo__models__models.models__photo;
  const photo_details = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "name",
        column: 13,
        line: 18,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 13,
        line: 19,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 20,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 24,
        line: 17,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 17,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 11,
        line: 22,
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
        column: 18,
        line: 16,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 39,
        line: 28,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 29,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 18,
        line: 27,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 27,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 16,
        line: 26,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 9,
        line: 16,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 9,
        line: 26,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 9,
        line: 34,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "brightness",
        column: 9,
        line: 35,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 9,
        line: 36,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottomOpacity",
        column: 9,
        line: 37,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 15,
        line: 15,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 19,
        line: 42,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 13,
        line: 43,
        file: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 24,
        line: 41,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 41,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 16,
        line: 40,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 40,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 13,
        line: 39,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 39,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 12,
        line: 14,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/photo_details.dart"
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C17;
  let C16;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C29;
  let C28;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  photo_details.PhotoDetails = class PhotoDetails extends framework.StatelessWidget {
    get photo() {
      return this[photo$];
    }
    set photo(value) {
      super.photo = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new flat_button.FlatButton.new({child: new image.Image.asset("icons/left_arrow.png", {fit: box_fit.BoxFit.cover, width: 30.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), title: new basic.Center.new({child: new text.Text.new("Photo by " + dart.str(this.photo.author), {style: new text_style.TextStyle.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), backgroundColor: colors.Colors.white, brightness: ui.Brightness.light, elevation: 1.0, bottomOpacity: 0.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), body: new basic.Center.new({child: new container.Container.new({child: new image.Image.network(this.photo.imageUrl, {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
  };
  (photo_details.PhotoDetails.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let photo = opts && 'photo' in opts ? opts.photo : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[photo$] = photo;
    photo_details.PhotoDetails.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = photo_details.PhotoDetails.prototype;
  dart.addTypeTests(photo_details.PhotoDetails);
  const photo$ = Symbol("PhotoDetails.photo");
  dart.setMethodSignature(photo_details.PhotoDetails, () => ({
    __proto__: dart.getMethods(photo_details.PhotoDetails.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(photo_details.PhotoDetails, "package:flutter_web_demo/screens/photo_details.dart");
  dart.setFieldSignature(photo_details.PhotoDetails, () => ({
    __proto__: dart.getFields(photo_details.PhotoDetails.__proto__),
    photo: dart.finalFieldType(photo.Photo)
  }));
  dart.trackLibraries("packages/flutter_web_demo/screens/photo_details", {
    "package:flutter_web_demo/screens/photo_details.dart": photo_details
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["photo_details.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIc;;;;;;UAQc;AACxB,YAAO,oCACG,iCACG,uCACM,sBACX,8BACY,6BACL,wEAEE;cACC,qCAAI,OAAO;4FAGlB,6BACE,kBACL,AAA0B,uBAAd,AAAM,4BACX,qCACS,wJAII,iCACD,gCACZ,oBACI,oEAEX,6BACG,oCACQ,wBACX,AAAM,2BACM;IAKtB;;;QAxCM;QACW;;;AACZ,8DAAW,GAAG;;EAAC","file":"photo_details.ddc.js"}');
  // Exports:
  return {
    screens__photo_details: photo_details
  };
});

//# sourceMappingURL=photo_details.ddc.js.map
