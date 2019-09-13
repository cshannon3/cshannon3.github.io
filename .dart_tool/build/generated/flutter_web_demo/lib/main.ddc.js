define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_demo/screens/home', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web_demo__screens__home, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter_web__material.src__material__app;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const colors = packages__flutter_web__material.src__material__colors;
  const home = packages__flutter_web_demo__screens__home.screens__home;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 15,
        file: "org-dartlang-app:///packages/flutter_web_demo/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 11,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 12,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 12,
        line: 10,
        file: "org-dartlang-app:///packages/flutter_web_demo/main.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 23,
        line: 5,
        file: "org-dartlang-app:///packages/flutter_web_demo/main.dart"
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Flutter on The Web: Responsive Demo", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new home.Home.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:flutter_web_demo/main.dart");
  let C7;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}));
  };
  dart.trackLibraries("packages/flutter_web_demo/main", {
    "package:flutter_web_demo/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,iCACE,8CACA,yCACiB,4BAElB;IAEV;;;;;;EACF;;;;;;;;;AAbe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
