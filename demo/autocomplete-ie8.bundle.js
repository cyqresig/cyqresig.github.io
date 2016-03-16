/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/demo/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 组件初始化, 定义实例, 引用css, 引用模板, 引用其他依赖模板
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */


	;'use strict';

	__webpack_require__(6);
	var attrs = __webpack_require__(10);
	var defaults = __webpack_require__(11);
	var events = __webpack_require__(14);


	function AutoComplete(options) {

		var that = this;

		that._options = $.extend(true, {}, defaults, options);

		that._attrs = $.extend(true, {}, attrs);

		$.each(events.searchInput, function(eventType, bindEvent) {

			bindEvent.call(that);

		});

		that._options.$searchInput.attr('autocomplete', 'off');

		//check options, if error, throw custom Error
		//@todo

		//return this;
	}

	//AutoComplete.prototype = {
	//
	//};

	module.exports = AutoComplete;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./autocomplete.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./autocomplete.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".search-menu {\n  font-family: tahoma, arial, 'Hiragino Sans GB', '\\5B8B\\4F53', sans-serif;\n  background: #fff;\n  border: 1px solid #BEBEBE;\n  cursor: default;\n  margin: 0;\n  outline: 0;\n  position: absolute;\n  z-index: 99999;\n  width: 586px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.search-menu .search-menu-header {\n  line-height: 26px;\n  height: 26px;\n  padding: 0 6px;\n}\n.search-menu .search-item {\n  line-height: 26px;\n  height: 26px;\n  padding: 0 6px;\n  cursor: pointer;\n}\n.search-menu .search-item.selected {\n  background-color: #EDEDED;\n}\n.search-menu .search-item .search-menu-history-key {\n  color: #1071A6;\n}\n.search-menu .search-item .search-menu-history-delete {\n  float: right;\n  text-decoration: none;\n  color: #3C3C3C;\n}\n.search-menu .search-item .search-menu-history-delete:hover {\n  color: #1071A6;\n}\n.search-menu .search-menu-footer .search-menu-close {\n  line-height: 26px;\n  height: 26px;\n  padding: 0 6px;\n  text-align: right;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  color: #3C3C3C;\n}\n.search-menu .search-menu-footer .search-menu-close:hover {\n  color: #1071A6;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * @fileOverview 组件内部属性
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */


	var attrs = {

		searchMenuData: {

			//isShowHeader: false,  //UI层变化交由使用者自行控制

			//isShowFooter: true,   //UI层变化交由使用者自行控制

			isReady: false, //指searchMenu容器元素还没有被插入到界面上, 只有第一次才会返回false

			recommendKeywordDataList: []
		},

		recommendKeywordDataList: [],

		historySearchedKeywordCacheList: [],

		historyRecommendKeywordCacheList: [],

		historyRecommendKeywordCache: {},

		searchInputValue: undefined,

		recommendKeyword: undefined,

		xhr: null,

		defered: null,

		allowFocusOut: true,

		focusState: false,

		displayState: false,

		recommendItemsCount: 0,

		searchItemIndex: -1,

		$searchMenu: null

	};

	module.exports = attrs;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 组件公开配置
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */

	var template = __webpack_require__(12);

	var utils = __webpack_require__(13);

	var events = __webpack_require__(14);

	var options = {

		remote: false,

		url: undefined,

		timeout: 3000,

		dataType: 'json',

		resultListKey: 'list',

		suggestKeyword: 'keyword',

		suggestKeywordHtml: 'keywordHtml',

		queryName: 'searchKey',

		additionalQueryParams: null,

		localData: null,

		recommendFetchInterval: 100,

		isShowHeader: false,

		isShowFooter: true,

		maximumHistorySearchedKeywordCacheList: 100,

		displayHistorySearchedKeywordCacheListCount: 10,

		maximumHistoryKeywordCacheList: 100,

		formatRecommendKeywordData: formatRecommendKeywordData,

		onSearchMenuDisplayStateChange: onSearchMenuDisplayStateChange,

		onSetSearchMenuData: onSetSearchMenuData,

		onSearch: $.noop,

		onSelect: onSelect,

		$searchInput: null,

		template: template,

		onTemplate: onTemplate,

		searchItemSelector: '.search-item',

		searchMenuContentSelector: '.search-menu-content',

		searchMenuCloseSelector: '.search-menu-close',

		searchMenuHistoryDeleteSelector: '.search-menu-history-delete',

		searchItemSelectedSelector: '.selected'

	};

	function formatRecommendKeywordData(dataList, keyword) {

		var suggestKeywordHtml = this._options.suggestKeywordHtml,
			suggestKeyword = this._options.suggestKeyword;

		$.each(dataList, function(index, item) {

			var pattern;

			if(keyword != '') {

				pattern = '^(' + utils.escapeRegExChars(keyword) + ')(.*)$';

				item[suggestKeywordHtml] = item[suggestKeyword].replace(new RegExp(pattern, 'gi'), '$1<b>$2<\/b>');

			}
			else {

				item[suggestKeywordHtml] = '<span class="search-menu-history-key">'+ item[suggestKeyword] +'</span><a class="search-menu-history-delete">删除</a>';

			}


		});

	}

	function onSearchMenuDisplayStateChange() {

		var action;

		//上来$searchMenu还不会生成, 直到匹配了一次搜索结果后
		if(this._attrs.$searchMenu != null) {

			//action = this._attrs.displayState ? 'show' : 'hide';

			action = this._attrs.displayState ? 'visible' : 'hidden';

			this._attrs.$searchMenu.css('visibility', action);
		}


	}

	function onSetSearchMenuData() {

		this._attrs.searchMenuData.isShowHeader = !this._attrs.recommendKeyword;

		this._attrs.searchMenuData.isShowFooter = true;

	}


	function onSelect(mouseEventType) {

		var selectedCssClass = this._options.searchItemSelectedSelector.replace('.', '');

		this._attrs.$searchMenu.find(this._options.searchItemSelector + this._options.searchItemSelectedSelector).removeClass(selectedCssClass);


		if(this._attrs.searchItemIndex == this._attrs.recommendItemsCount || this._attrs.searchItemIndex == -1) {

			this._options.$searchInput.val(this._attrs.recommendKeyword);

		}
		else {

			if(!mouseEventType) {

				this._attrs.recommendKeyword = this._attrs.recommendKeywordDataList[this._attrs.searchItemIndex].keyword;

				this._options.$searchInput.val(this._attrs.recommendKeyword);

				this._attrs.$searchMenu.find(this._options.searchItemSelector + ':eq('+ this._attrs.searchItemIndex +')').addClass(selectedCssClass);

			}
			else {

				if(mouseEventType == 'mouseenter') {

					this._attrs.$searchMenu.find(this._options.searchItemSelector + ':eq('+ this._attrs.searchItemIndex +')').addClass(selectedCssClass);

				}

			}

		}

	}

	function onTemplate(templateHtml) {

		var $body, that = this, offset;

		if(that._attrs.$searchMenu == null) {

			$body = $(document.body);

			$body.append(templateHtml);

			that._attrs.$searchMenu = $('#' + that._attrs.searchMenuData.id);

		}
		else {

			that._attrs.$searchMenu.html(templateHtml);

		}

		offset = that._options.$searchInput.offset();

		that._attrs.$searchMenu.css({

			left: offset.left,

			top: offset.top + that._options.$searchInput.outerHeight(),

		});

		if(!that._attrs.searchMenuData.isReady) {

			$.each(events.searchMenu, function(eventType, bindEvent) {

				bindEvent.call(that);

			});

			that._attrs.searchMenuData.isReady = true;

		}

	}

	module.exports = options;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '\n';
	if(!searchMenuData.isReady) { ;
	__p += '\n<div id="' +
	((__t = (searchMenuData.id)) == null ? '' : __t) +
	'" class="search-menu" style="visibility: hidden;">\n';
	 } ;
	__p += '\n\n    ';
	if(searchMenuData.isShowHeader) { ;
	__p += '\n        <div class="search-menu-header">\n            最近搜索\n        </div>\n    ';
	 } ;
	__p += '\n\n    <div class="search-menu-content">\n        ';
	 searchMenuData.recommendKeywordDataList.forEach(function(data) { ;
	__p += '\n            <div class="search-item">\n                ' +
	((__t = (data.keywordHtml)) == null ? '' : __t) +
	'\n            </div>\n        ';
	 }) ;
	__p += '\n    </div>\n\n    ';
	if(searchMenuData.isShowFooter) { ;
	__p += '\n        <div class="search-menu-footer">\n            <a class="search-menu-close">关闭</a>\n        </div>\n    ';
	 } ;
	__p += '\n\n';
	if(!searchMenuData.isReady) { ;
	__p += '\n</div>\n';
	 } ;


	}
	return __p
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * @fileOverview 公共方法(最终会合并至一处, 防止每个组件重复)
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */

	var prefix = 'c-autocomplete-';
	var id = 1;

	var util = {

		/**
		 * 生成组件所需唯一id
		 * @returns {string}
		 */
		generateId: function() {

			return prefix + id++;

		},

		debug: function(content) {

			if(console) {

				console.debug(content);

			}

		},

		escapeRegExChars: function (value) {

			return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

		}

	};

	module.exports = util;






/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 组件事件
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */


	var handler = __webpack_require__(15);

	var event = {

		searchInput: {

			onInput: function() {

				var $input = this._options.$searchInput;

				if('oninput' in $input[0]) {

					$input.on('input', $.proxy(handler.searchInput.onInputHandler, this));

				}
				else {

					$input.on('propertychange', $.proxy(handler.searchInput.onPropertyChangeHandler, this));

				}

			},

			onClick: function() {

				var $input = this._options.$searchInput;

				$input.on('click', $.proxy(handler.searchInput.onClickHandler, this));

			},

			onFoucsIn: function() {

				var $input = this._options.$searchInput;

				$input.on('focusin', $.proxy(handler.searchInput.onFoucsInHandler, this));
			},

			onFocusOut: function() {

				var $input = this._options.$searchInput;

				$input.on('focusout', $.proxy(handler.searchInput.onFocusOutHandler, this));
			},

			onKeyDown: function() {

				var $input = this._options.$searchInput;

				$input.on('keydown', $.proxy(handler.searchInput.onKeyDownHandler, this));
			}

		},

		searchMenu: {

			onMouseEnter: function() {

				var $searchMenu = this._attrs.$searchMenu;

				$searchMenu.on('mouseenter', this._options.searchItemSelector, $.proxy(handler.searchMenu.onMouseEnterHandler, this));

			},

			onMouseLeave: function() {

				var $searchMenu = this._attrs.$searchMenu;

				$searchMenu.on('mouseleave', this._options.searchMenuContentSelector, $.proxy(handler.searchMenu.onMouseLeaveHandler, this));

			},

			onClick: function() {

				var $searchMenu = this._attrs.$searchMenu;

				$searchMenu
					.on('click', this._options.searchItemSelector, $.proxy(handler.searchMenu.onClickHandler, this))
					.on('click', this._options.searchMenuCloseSelector, $.proxy(handler.searchMenu.onMenuCloseClickHandler, this))
					.on('click', this._options.searchMenuHistoryDeleteSelector, $.proxy(handler.searchMenu.onMenuHistoryDeleteClickHandler, this));


			}

		}

	};

	module.exports = event;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 组件事件处理
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */

	var util = __webpack_require__(13);
	var service = __webpack_require__(16);

	var handler = {

		searchInput: {

			onInputHandler: function() {

				onInputHandle.call(this);

			},

			onPropertyChangeHandler: function(e) {

				if(e.originalEvent.propertyName != 'value') {

					return;

				}

				onInputHandle.call(this);

			},

			onClickHandler: function() {

				var recommendKeywordDataList, wrapHistorySearchedKeywordCacheList;

				if(!this._attrs.recommendKeyword) {

					wrapHistorySearchedKeywordCacheList = service.getWrapHistorySearchedKeywordCacheList.call(this, this._attrs.historySearchedKeywordCacheList);

					service.setSearchMenuData.call(this, wrapHistorySearchedKeywordCacheList);

				}
				else {

					if(this._attrs.recommendKeyword in this._attrs.historyRecommendKeywordCache) {

						recommendKeywordDataList = JSON.parse(this._attrs.historyRecommendKeywordCache[this._attrs.recommendKeyword]);

					}

					service.setSearchMenuData.call(this, recommendKeywordDataList);

				}


				if(this._attrs.recommendItemsCount > 0) {

					service.generateTemplate.call(this);

					if(!this._attrs.displayState) {

						service.toogleSearchMenu.call(this);

					}

				}

			},

			onFoucsInHandler: function() {

				this._attrs.focusState = true;

				this._attrs.searchItemIndex = 0;

			},

			onFocusOutHandler: function() {

				if(this._attrs.allowFocusOut) {

					this._attrs.focusState = false;

					if(this._attrs.displayState) {

						console.debug('onFocusOutHandler' + Date.now());

						service.toogleSearchMenu.call(this);

					}

				}

			},

			onKeyDownHandler: function(e) {

				var keyCode = e.keyCode;

				switch(keyCode) {

					case 27:

						if(this._attrs.displayState) {

							service.toogleSearchMenu.call(this);

						}
						break;

					case 13:

						if(this._attrs.displayState) {

							service.toogleSearchMenu.call(this);

						}

						if(this._options.remote) {

							service.setHistorySearchedKeywordCacheList.call(this);

						}

						this._options.onSearch.call(this, this._attrs.recommendKeywordDataList[this._attrs.searchItemIndex], this._attrs.recommendKeyword);

						break;

					case 38:
					case 40:

						if(this._attrs.focusState) {

							if(!this._attrs.displayState) {

								service.toogleSearchMenu.call(this);

								service.resetSearchItemIndex.call(this, keyCode);

							}
							else {

								service.selectSearchItem.call(this, keyCode);

							}


						}
						break;

				}

			}

		},

		searchMenu: {

			onMouseEnterHandler: function(e) {

				var $searchItem = $(e.currentTarget);

				this._attrs.searchItemIndex = $searchItem.index();

				this._options.onSelect.call(this, 'mouseenter');

				this._attrs.allowFocusOut = false;

			},

			onMouseLeaveHandler: function() {

				//this._attrs.searchItemIndex = 0;

				this._options.onSelect.call(this, 'mouseleave');

				this._attrs.allowFocusOut = true;

			},

			onClickHandler: function(e) {

				var $searchItem = $(e.currentTarget);

				this._attrs.searchItemIndex = $searchItem.index();

				this._options.onSelect.call(this);

				if(this._attrs.displayState) {

					service.toogleSearchMenu.call(this);

				}

				if(this._options.remote) {

					service.setHistorySearchedKeywordCacheList.call(this);

				}

				this._options.onSearch.call(this, this._attrs.recommendKeywordDataList[this._attrs.searchItemIndex], this._attrs.recommendKeyword);

			},

			onMenuCloseClickHandler: function() {

				service.toogleSearchMenu.call(this);

			},

			onMenuHistoryDeleteClickHandler: function(e) {

				var $searchHistoryItem = $(e.currentTarget),

					searchHistoryItemIndex = $searchHistoryItem.parents(this._options.searchItemSelector).index();

				e.stopPropagation();

				this._attrs.historySearchedKeywordCacheList.splice(searchHistoryItemIndex, 1);

				service.processSearchHistory.call(this);

				this._options.$searchInput.focus();

			}

		}

	};

	function onInputHandle() {

		var that, queryData, recommendKeywordDataList, wrapHistorySearchedKeywordCacheList;

		this._attrs.recommendKeyword = this._options.$searchInput.val().trim();

		if(!this._options.remote) {

			if(this._attrs.recommendKeyword == '') {

				if(this._attrs.displayState) {

					service.toogleSearchMenu.call(this);

				}

			}
			else {

				if(this._attrs.recommendKeyword in this._options.localData) {

					if(!$.isArray(this._options.localData[this._attrs.recommendKeyword])) {

						throw new Error('localData每一项应是一个json格式的数组');

					}

					service.setSearchMenuData.call(this, this._options.localData[this._attrs.recommendKeyword]);

					service.generateTemplate.call(this);

					if(!this._attrs.displayState) {

						service.toogleSearchMenu.call(this);

					}

				}
				else {

					if(this._attrs.displayState) {

						service.toogleSearchMenu.call(this);

					}

				}

			}

		}
		else {

			if(this._attrs.defered != null) {

				service.destoryDefered(this._attrs.defered);

			}
			if(this._attrs.xhr != null) {

				service.abortXhr(this._attrs.xhr);

			}

			if(this._attrs.recommendKeyword == '') {

				service.processSearchHistory.call(this);

			}
			else {

				if(this._attrs.recommendKeyword in this._attrs.historyRecommendKeywordCache) {


					recommendKeywordDataList = JSON.parse(this._attrs.historyRecommendKeywordCache[this._attrs.recommendKeyword]);

					if(recommendKeywordDataList.length > 0) {

						service.setSearchMenuData.call(this, recommendKeywordDataList);

						service.generateTemplate.call(this);

						if (!this._attrs.displayState) {

							service.toogleSearchMenu.call(this);

						}

					}

				}
				else {

					//if(this._attrs.displayState) {
					//
					//	service.toogleSearchMenu.call(this);
					//
					//}

					that = this;

					queryData = {};

					queryData[that._options.queryName] = encodeURIComponent(that._attrs.recommendKeyword);

					if($.isPlainObject(this._options.additionalQueryParams)) {

						$.extend(true, queryData, this._options.additionalQueryParams);
					}

					that._attrs.defered = setTimeout(function() {

						that.xhr = $.ajax({

							url: that._options.url,

							type: 'get',

							data: queryData,

							dataType: that._options.dataType,

							timeout: that._options.timeout,

							success: function(result) {

								var dataList = result[that._options.resultListKey];

								service.processResponse.call(that, dataList);

							},

							error: function(xhr, textStatus, errorThrown) {

								//throw new Error('jsonp请求失败');
								util.debug(xhr);

							},

							complete: function() {

								service.destoryXhr(that.xhr);
							}

						});


					}, this._options.recommendFetchInterval);


				}

			}



		}

	}


	module.exports = handler;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 组件业务逻辑
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/5.
	 */
	var utils = __webpack_require__(13);

	var service = {

		toogleSearchMenu: function() {

			if(!this._attrs.displayState && this._attrs.recommendItemsCount == 0) {

				return;
			}

			service.toogleSearchMenuDisplayState.call(this);

			this._options.onSearchMenuDisplayStateChange.call(this);

		},

		toogleSearchMenuDisplayState: function() {

			this._attrs.displayState = !this._attrs.displayState;

		},

		selectSearchItem: function(keyCode) {

			service.setSearchItemIndex.call(this, keyCode);

			this._options.onSelect.call(this);
		},

		resetSearchItemIndex: function(keyCode) {
			/*反向边界线index值, up时recommendItemsCount, down时-1*/
			var reverseBoundary;

			if(keyCode == '38') {

				reverseBoundary = this._attrs.recommendItemsCount;

			}
			else {

				reverseBoundary = -1;

			}

			this._attrs.searchItemIndex = reverseBoundary;

		},

		setSearchItemIndex: function(keyCode) {
				/*边界线index值, up时-1, down时recommendItemsCount*/
			var boundary,
			/*反向的限制值, up时为down的最大index值recommendItemsCount-1, down时为up的最小index值0*/
				reverseLimit,
			/*index移动方向, up时为负1表示, down时为正1表示*/
				vector;


			if(keyCode == '38') {

				boundary = -1;

				reverseLimit = this._attrs.recommendItemsCount - 1;

				vector = -1;
			}
			else {

				boundary = this._attrs.recommendItemsCount;

				reverseLimit = 0;

				vector = 1;
			}

			if(this._attrs.searchItemIndex == boundary) {

				this._attrs.searchItemIndex = reverseLimit;

			}
			else {

				this._attrs.searchItemIndex = this._attrs.searchItemIndex + vector * 1;

			}

		},

		setSearchMenuData: function(dataList) {

			this._options.formatRecommendKeywordData.call(this, dataList, this._attrs.recommendKeyword);

			this._attrs.recommendKeywordDataList.length = 0;

			$.extend(true, this._attrs.recommendKeywordDataList, dataList);

			this._attrs.recommendItemsCount = this._attrs.recommendKeywordDataList.length;

			this._attrs.searchMenuData.recommendKeywordDataList = this._attrs.recommendKeywordDataList;

			if(!this._attrs.searchMenuData.id && this._attrs.recommendKeywordDataList.length > 0) {

				this._attrs.searchMenuData.id = utils.generateId();

			}

			this._options.onSetSearchMenuData.call(this);

		},

		getWrapHistorySearchedKeywordCacheList: function(historySearchedKeywordCacheList) {

			var that = this, wrapList = [], wrapObj;

			$.each(historySearchedKeywordCacheList, function(index, item) {

				wrapObj = {};

				wrapObj[that._options.suggestKeyword] = item;

				wrapList.push(wrapObj);

				if(index == that._options.displayHistorySearchedKeywordCacheListCount - 1) {

					return false;

				}

			});

			return wrapList;
		},

		setHistoryRecommendKeywordCache: function(recommendKeywordDataList, recommendKeyword) {

			if(!(recommendKeyword in this._attrs.historyRecommendKeywordCache)) {

				if(this._attrs.historyRecommendKeywordCacheList.length == this._options.maximumHistoryKeywordCacheList) {

					service.shiftHistoryRecommendKeywordCache.call(this);

				}

				this._attrs.historyRecommendKeywordCacheList.push(recommendKeyword);

				this._attrs.historyRecommendKeywordCache[recommendKeyword] = JSON.stringify(recommendKeywordDataList);

			}

		},

		shiftHistoryRecommendKeywordCache: function() {

			var recommendKeyword = this._attrs.historyRecommendKeywordCacheList.shift();

			delete this._attrs.historyRecommendKeywordCache[recommendKeyword];

		},

		abortXhr: function(xhr) {

			xhr.abort();

			service.destoryXhr();
		},


		destoryXhr: function(xhr) {

			xhr = null;

		},

		destoryDefered: function(defered) {

			clearTimeout(defered);

			defered = null;

		},

		setHistorySearchedKeywordCacheList: function() {

			if(this._attrs.recommendKeyword != '') {

				if(this._attrs.historySearchedKeywordCacheList.length == this._options.maximumHistorySearchedKeywordCacheList) {

					service.popHistorySearchedKeywordCacheList.call(this);

				}

				this._attrs.historySearchedKeywordCacheList.unshift(this._attrs.recommendKeyword);

			}

		},

		popHistorySearchedKeywordCacheList: function() {

			this._attrs.historySearchedKeywordCacheList.pop();

		},

		generateTemplate: function() {

			var templateHtml = this._options.template({

				searchMenuData: this._attrs.searchMenuData

			});

			this._options.onTemplate.call(this, templateHtml);
		},

		processResponse: function(dataList) {

			service.setHistoryRecommendKeywordCache.call(this, dataList, this._attrs.recommendKeyword);

			if(dataList.length > 0) {

				service.setSearchMenuData.call(this, dataList);

				service.generateTemplate.call(this);

				if(!this._attrs.displayState) {

					service.toogleSearchMenu.call(this);

				}

			}

		},

		processSearchHistory: function() {

			var wrapHistorySearchedKeywordCacheList;

			if(this._attrs.historySearchedKeywordCacheList.length > 0) {

				wrapHistorySearchedKeywordCacheList = service.getWrapHistorySearchedKeywordCacheList.call(this, this._attrs.historySearchedKeywordCacheList);

				service.setSearchMenuData.call(this, wrapHistorySearchedKeywordCacheList);

				service.generateTemplate.call(this);

				if(!this._attrs.displayState) {

					service.toogleSearchMenu.call(this);

				}

			}
			else {

				if(this._attrs.displayState) {

					service.toogleSearchMenu.call(this);

				}

			}

		}

	};

	module.exports = service;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview 初始化autocomplete组件
	 * @author HISAME SHIZUMARU
	 * @version
	 * Created on 16/3/7.
	 */


	//仅在脱离服务端环境下做测试用

	$.mockjaxSettings.contentType = "application/json";
	$.mockjax({
		url: '/sug',
		data: {

		},
		responseText: {
			list: [{
				'keyword': '淘宝宝1'
			},{
				'keyword': '淘宝宝11'
			},{
				'keyword': '淘宝宝111'
			}]
		}
	});

	//require.ensure('./../src/autocomplete', function(require) {

		var AutoComplete = __webpack_require__(5);

		//local
		var instance_1 = new AutoComplete({

			localData: localData,

			$searchInput: $('#s1')

		});


		//remote
		var instance_2 = new AutoComplete({

			remote: true,

			url: '/sug',

			$searchInput: $('#s2'),

			onSearch: function(recommendKeywordItem, recommendKeyword) {

				//console.log('onSearch recommendKeywordItem recommendKeyword = ' + recommendKeyword);

				//console.log(recommendKeywordItem);

				alert('您已提交了搜索词: ' + recommendKeyword);

			}

		});

	//});

/***/ }
/******/ ]);