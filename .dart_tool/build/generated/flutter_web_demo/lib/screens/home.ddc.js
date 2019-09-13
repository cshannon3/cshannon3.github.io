define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_demo/repositories/photos_repository', 'packages/flutter_web_demo/models/models', 'packages/flutter_web_demo/utils/free_functions', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web_demo/widgets/photo_item', 'packages/flutter_web_demo/screens/photo_details'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_demo__repositories__photos_repository, packages__flutter_web_demo__models__models, packages__flutter_web_demo__utils__free_functions, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web_demo__widgets__photo_item, packages__flutter_web_demo__screens__photo_details) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_controller = packages__flutter_web__animation.src__widgets__scroll_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const orientation_builder = packages__flutter_web__animation.src__widgets__orientation_builder;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const sliver_grid = packages__flutter_web__animation.src__rendering__sliver_grid;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const photos_repository = packages__flutter_web_demo__repositories__photos_repository.repositories__photos_repository;
  const photo = packages__flutter_web_demo__models__models.models__photo;
  const free_functions = packages__flutter_web_demo__utils__free_functions.utils__free_functions;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const page = packages__flutter_web__material.src__material__page;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  const photo_item = packages__flutter_web_demo__widgets__photo_item.widgets__photo_item;
  const photo_details = packages__flutter_web_demo__screens__photo_details.screens__photo_details;
  const home = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $_get = dartx._get;
  let JSArrayOfPhoto = () => (JSArrayOfPhoto = dart.constFn(_interceptors.JSArray$(photo.Photo)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfPhoto = () => (ListOfPhoto = dart.constFn(core.List$(photo.Photo)))();
  let VoidToListOfPhoto = () => (VoidToListOfPhoto = dart.constFn(dart.fnType(ListOfPhoto(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidTodouble = () => (VoidTodouble = dart.constFn(dart.fnType(core.double, [])))();
  let BuildContextToPhotoDetails = () => (BuildContextToPhotoDetails = dart.constFn(dart.fnType(photo_details.PhotoDetails, [framework.BuildContext])))();
  let PhotoToNull = () => (PhotoToNull = dart.constFn(dart.fnType(core.Null, [photo.Photo])))();
  let BuildContextAndintToPhotoItem = () => (BuildContextAndintToPhotoItem = dart.constFn(dart.fnType(photo_item.PhotoItem, [framework.BuildContext, core.int])))();
  let BuildContextAndOrientationToContainer = () => (BuildContextAndOrientationToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, media_query.Orientation])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 13,
        line: 63,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 64,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 18,
        line: 62,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 62,
        file: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 16,
        line: 61,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 9,
        line: 61,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 9,
        line: 70,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "brightness",
        column: 9,
        line: 71,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 9,
        line: 72,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 15,
        line: 60,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [_bottom]: 8,
        [_right]: 8,
        [_top]: 8,
        [_left]: 8
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "photo",
        column: 62,
        line: 92,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 49,
        line: 92,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "photo",
        column: 21,
        line: 86,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onClick",
        column: 21,
        line: 87,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 26,
        line: 85,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "gridDelegate",
        column: 17,
        line: 81,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemCount",
        column: 17,
        line: 83,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemBuilder",
        column: 17,
        line: 84,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "controller",
        column: 17,
        line: 98,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 31,
        line: 80,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 15,
        line: 78,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 79,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 80,
        file: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C28 || CT.C28,
        name: null,
        column: 20,
        line: 77,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 11,
        line: 76,
        file: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C33 || CT.C33,
        name: null,
        column: 16,
        line: 75,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 75,
        file: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C36 || CT.C36,
        name: null,
        column: 13,
        line: 74,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 7,
        line: 60,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 74,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 12,
        line: 59,
        file: "org-dartlang-app:///packages/flutter_web_demo/screens/home.dart"
      });
    }
  });
  home.Home = class Home extends framework.StatefulWidget {
    createState() {
      return new home._HomeState.new();
    }
  };
  (home.Home.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Home.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Home.prototype;
  dart.addTypeTests(home.Home);
  dart.setMethodSignature(home.Home, () => ({
    __proto__: dart.getMethods(home.Home.__proto__),
    createState: dart.fnType(home._HomeState, [])
  }));
  dart.setLibraryUri(home.Home, "package:flutter_web_demo/screens/home.dart");
  const _photoRepository = dart.privateName(home, "_photoRepository");
  const _scrollController = dart.privateName(home, "_scrollController");
  const _currentPage = dart.privateName(home, "_currentPage");
  const _screenSize = dart.privateName(home, "_screenSize");
  const _getPhotos = dart.privateName(home, "_getPhotos");
  const _fetchNextPage = dart.privateName(home, "_fetchNextPage");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C12;
  let C8;
  let C7;
  const _bottom = dart.privateName(edge_insets, "_bottom");
  const _right = dart.privateName(edge_insets, "_right");
  const _top = dart.privateName(edge_insets, "_top");
  const _left = dart.privateName(edge_insets, "_left");
  let C13;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C25;
  let C26;
  let C22;
  let C21;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C34;
  let C33;
  let C32;
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C39;
  let C38;
  home._HomeState = class _HomeState extends framework.State$(home.Home) {
    initState() {
      this[_getPhotos]();
      this[_scrollController].addListener(dart.fn(() => {
        let maxScroll = this[_scrollController].position.maxScrollExtent;
        let currentScroll = this[_scrollController].position.pixels;
        let delta = 200.0;
        if (dart.notNull(maxScroll) - dart.notNull(currentScroll) <= delta) {
          this[_fetchNextPage]();
        }
      }, VoidToNull()));
      super.initState();
    }
    dispose() {
      this[_scrollController].dispose();
      super.dispose();
    }
    [_getPhotos]() {
      return async.async(dart.dynamic, (function* _getPhotos() {
        let items = (yield this[_photoRepository].fetchPhotos({page: this[_currentPage]}));
        this.setState(dart.fn(() => this.photoList = items.toList(), VoidToListOfPhoto()));
      }).bind(this));
    }
    [_fetchNextPage]() {
      return async.async(dart.dynamic, (function* _fetchNextPage() {
        if (dart.notNull(this[_currentPage]) <= 20) {
          this[_currentPage] = dart.notNull(this[_currentPage]) + 1;
          let items = (yield this[_photoRepository].fetchPhotos({page: this[_currentPage]}));
          this.setState(dart.fn(() => this.photoList[$addAll](items.toList()), VoidTovoid()));
        } else {
          this[_currentPage] = 0;
        }
      }).bind(this));
    }
    build(context) {
      this.setState(dart.fn(() => this[_screenSize] = free_functions.screenWidth({context: context}), VoidTodouble()));
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new basic.Center.new({child: new text.Text.new("Flutter Web App", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), backgroundColor: colors.Colors.white, brightness: ui.Brightness.light, elevation: 1.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), body: new safe_area.SafeArea.new({child: new orientation_builder.OrientationBuilder.new({builder: dart.fn((context, orientation) => new container.Container.new({margin: C13 || CT.C13, width: free_functions.screenWidth({context: context}), child: new scroll_view.GridView.builder({gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: dart.notNull(this[_screenSize]) >= 600 ? 4 : 1}), itemCount: this.photoList[$length], itemBuilder: dart.fn((_, index) => new photo_item.PhotoItem.new({photo: this.photoList[$_get](index), onClick: dart.fn(photo => {
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({settings: new navigator.RouteSettings.new({name: "/photo-" + dart.str(photo.id)}), builder: dart.fn(context => new photo_details.PhotoDetails.new({photo: photo, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), BuildContextToPhotoDetails())}));
                  }, PhotoToNull()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextAndintToPhotoItem()), controller: this[_scrollController], $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), BuildContextAndOrientationToContainer()), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
  };
  (home._HomeState.new = function() {
    this[_photoRepository] = new photos_repository.PhotoRepository.new();
    this[_scrollController] = new scroll_controller.ScrollController.new();
    this.photoList = JSArrayOfPhoto().of([]);
    this[_currentPage] = 1;
    this[_screenSize] = 0.0;
    home._HomeState.__proto__.new.call(this);
    ;
  }).prototype = home._HomeState.prototype;
  dart.addTypeTests(home._HomeState);
  dart.setMethodSignature(home._HomeState, () => ({
    __proto__: dart.getMethods(home._HomeState.__proto__),
    [_getPhotos]: dart.fnType(dart.dynamic, []),
    [_fetchNextPage]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._HomeState, "package:flutter_web_demo/screens/home.dart");
  dart.setFieldSignature(home._HomeState, () => ({
    __proto__: dart.getFields(home._HomeState.__proto__),
    [_photoRepository]: dart.finalFieldType(photos_repository.PhotoRepository),
    [_scrollController]: dart.finalFieldType(scroll_controller.ScrollController),
    photoList: dart.fieldType(core.List$(photo.Photo)),
    [_currentPage]: dart.fieldType(core.int),
    [_screenSize]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_web_demo/screens/home", {
    "package:flutter_web_demo/screens/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAU8B;IAAY;;;QAF9B;;AAAQ,6CAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAc/B;MACA,AAAkB,oCAAY;AACrB,wBAAY,AAAkB,AAAS;AACvC,4BAAgB,AAAkB,AAAS;AAC3C,oBAAQ;AACf,YAAc,AAAgB,aAA1B,SAAS,iBAAG,aAAa,KAAI,KAAK;UACpC;;;MAGE;IACR;;MAIE,AAAkB;MACZ;IACR;;AAEU;AACF,qBAAQ,MAAM,AAAiB,0CAAkB;QACvD,cAAS,cAAM,iBAAY,AAAM,KAAD;MAClC;;;AAEc;AACZ,YAAiB,aAAb,uBAAgB;UAChB,qBAAF,aAAE,sBAAF;AACM,uBAAQ,MAAM,AAAiB,0CAAkB;UACvD,cAAS,cAAM,AAAU,wBAAO,AAAM,KAAD;;UAErC,qBAAe;;MAEnB;;UAG0B;MACxB,cAAS,cAAM,oBAAc,qCAAqB,OAAO;AACzD,YAAO,oCACG,+BACC,6BACE,kBACL,2BACO,qCACS,+BACJ,uIAIQ,iCACD,gCACZ,kEAEP,mCACG,yDACI,SAAc,SAAqB,gBACnC,2DAEE,qCAAqB,OAAO,WACnB,gDACA,+EACmB,aAAZ,sBAAe,MAAO,IAAI,gBACpC,AAAU,sCACR,SAAC,GAAG,UACR,qCACE,AAAS,sBAAC,KAAK,YACb,QAAC;oBACE,uCACR,OAAO,EACP,0CACY,uCAAoB,AAAoB,qBAAV,AAAM,KAAD,iBACpC,QAAC,WAAY,2CAAoB,KAAK;4IAM7C;IAO1B;;;IA1FM,yBAAmB;IACnB,0BAAoB;IACd,iBAAY;IACpB,qBAAe;IACZ,oBAAc;;;EAuFvB","file":"home.ddc.js"}');
  // Exports:
  return {
    screens__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
