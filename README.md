# Amaze UI 入门套件（独立页面版）

[![Dependency Status](https://img.shields.io/david/adcentury/starter-kit.svg?style=flat-square)](https://david-dm.org/adcentury/starter-kit)
[![devDependency Status](https://img.shields.io/david/dev/adcentury/starter-kit.svg?style=flat-square)](https://david-dm.org/adcentury/starter-kit#info=devDependencies)

[Amaze UI Starter Kit](https://github.com/amazeui/starter-kit)主要针对单页面应用(SPA)，最终只会生成一个单独的`app.js`。  
本项目对其进行了改动，用以为每个**独立的页面**生成独有的js。

### 准备工作

首先，需要同Amaze UI Starter Kit一样进行[准备工作](https://github.com/amazeui/starter-kit#准备工作)。

### 获取Amaze UI Starter Kit for Separate Pages

* `git clone https://github.com/adcentury/starter-kit.git`
* 或者，直接[下载压缩包](https://github.com/adcentury/starter-kit/archive/master.zip)

### 安装依赖

```
cd <your_project>
npm install
```

### 与Amaze UI Starter Kit主要区别

目录结构发生了变化：

```
|—— ...
|—— app
|    |—— ...
|    |—— js
|    |    |—— pages // 用于存放每个页面的js文件
|    |—— ...
|—— ...
```

例如，项目包含两个页面`page1`和`page2`，`app/js/pages`目录下包含`page1.js`和`page2.js`。

运行`gulp`或`gulp serve`进行编译时，会生成以下js文件：

* `dist/js/page1.js`
* `dist/js/page1.min.js`
* `dist/js/page2.js`
* `dist/js/page2.min.js`
* `dist/js/common.js`：此文件是由源page1.js和page2.js的共有部分提取而成
* `dist/js/common.min.js`

因此，在`page1.html`页面中同时引入`common.js`和`page1.js`即可：

```html
<script src="js/common.js"></script>
<script src="js/page1.js"></script>
```

`page2.html`同理。
