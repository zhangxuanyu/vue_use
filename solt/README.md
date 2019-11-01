# awecloud

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 使用

## 修改conf/index.js
```
- build.assetsPublicPath : '/'
+ build.assetsPublicPath : '/awecloud/ui/'
```

## 修改build/dockerfile
```
RUN mkdir -p /app/www/awecloud
ADD . /app/www/awecloud
```

## 修改.drone.yml
```
略
```

## googlefonts本地化
```bash
# index.html
- <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">

# src/assets/css
add googlefonts.css googlefonts

# src/main.js
+ import "@src/assets/css/googlefonts.css";
```

## add IE11 support
```bash
# src/main.js
+ import "babel-polyfill";

# package.json
cnpm i --save babel-polyfill
```

## remove overflow-y
```bash
# index.html
+  <style>
+    html {
+      overflow-y: auto
+    }
+  </style>
```
