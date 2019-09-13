# Flutter Web App Demo

Project was taken from minikin's [flutter-web-demo](https://github.com/minikin/flutter-web-demo). Planning to rewrite the code to create my own site

Experimental responsive web app powered by Flutter and Dart.

[![flutter-web-demo](https://github.com/minikin/flutter-web-demo/blob/master/assets/flutter_wep_app.gif?raw=true)](http://minikin.me/flutter-web-demo)

- [Flutter Web App Demo](#flutter-web-app-demo)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Develop](#develop)
  - [Building with the production JavaScript compiler](#building-with-the-production-javaScript-compiler)
  - [FAQ](#faq)
  - [Troubleshooting](#troubleshooting)

## Features

- photos are fetched from a server
- infinity scrolling
- responsive to screen size changes including mobile device orientation changes
- powered by [build_value](https://pub.dev/packages/built_value) and [built_collection](https://pub.dev/packages/built_collection)
- background JSON parsing

## Requirements

- Flutter: the latest version on `flutter dev channel`
- Dart: 2.5.0+
- Xcode: 10.0+
- Androind Studio 3.3.1+
- Ruby: 2.4+
- CocoaPods: 1.7.0+
- Flutter & Dart plugins:
  - [Visual Studio Code](https://flutter.dev/docs/get-started/editor?tab=androidstudio)
  - [Android Studio / IntelliJ](https://flutter.dev/docs/get-started/editor?tab=vscode)

## Develop

This project use `built_value` and `built_collection` as dependencies so before to start web server run:

```sh
flutter packages pub run build_runner build --delete-conflicting-outputs
```

Activate `webdev` package

```sh
flutter packages pub global activate webdev
```

To use webdev with hot-reload, run the following within your project directory:

```sh
flutter packages pub global run webdev serve --auto restart
```

## Building with the production JavaScript compiler

To enable the release compiler, pass in the --release flag (or just -r).

```sh
flutter packages pub global run webdev serve -r
```

If you'd like to generate output to disk, we recommend you use webdev.

```sh
flutter packages pub global run webdev build
```

This will create a build directory with index.html, main.dart.js and the rest of the files needed to run
the application using a static HTTP server.

## FAQ

Read more about [Flutter for web](https://github.com/flutter/flutter_web)

If you have any questions ping me on twitter: [@minikin](https://twitter.com/minikin)

## Troubleshooting

If you catch an error like this:

```sh
flutter packages pub global run webdev serve -r
webdev could not run for this project.
Could not find a file named "pubspec.yaml" in "/Users/JohnDoe/flutter/.pub-cache/hosted/pub.dartlang.org/built_value-6.7.1".
pub finished with exit code 78
```

try to run:

```sh
pub cache repair
```
