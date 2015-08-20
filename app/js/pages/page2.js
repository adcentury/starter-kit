'use strict';

var $ = require('jquery');

// 使用 Amaze UI 源码中的模块
var addToHome = require('amazeui/js/ui.add2home');

$(function() {
  $('#page-welcome').text('你好，这里是第二页。');

  addToHome();

  console.log('Hello World. This is Amaze UI Starter Kit.');
});
