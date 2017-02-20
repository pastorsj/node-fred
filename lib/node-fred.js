(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("node-fred", ["axios"], factory);
	else if(typeof exports === 'object')
		exports["node-fred"] = factory(require("axios"));
	else
		root["node-fred"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Implement a builder pattern

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builder = function () {
    function Builder() {
        _classCallCheck(this, Builder);

        this.url = '';
    }

    _createClass(Builder, [{
        key: 'setAPIKey',
        value: function setAPIKey(apiKey) {
            return this.addAttribute('api_key=' + apiKey);
        }
    }, {
        key: 'setFileType',
        value: function setFileType(fileType) {
            return this.addAttribute('file_type=' + fileType);
        }
    }, {
        key: 'addAttribute',
        value: function addAttribute(attribute) {
            this.url += (this.url === '' ? '' : '&') + attribute;
            return this;
        }
    }, {
        key: 'isValidDate',
        value: function isValidDate(dateString) {
            var regEx = /^\d{4}-\d{2}-\d{2}$/;

            return dateString.match(regEx) != null;
        }
    }, {
        key: 'setRealTimeStart',
        value: function setRealTimeStart(params) {
            var realTimeStart = params['realtime_start'];

            if (realTimeStart === '' || !this.isValidDate(realTimeStart)) {
                return this;
            }
            return this.addAttribute('realtime_start=' + realTimeStart);
        }
    }, {
        key: 'setRealTimeEnd',
        value: function setRealTimeEnd(params) {
            var realTimeEnd = params['realtime_end'];

            if (realTimeEnd === '' || !this.isValidDate(realTimeEnd)) {
                return this;
            }
            return this.addAttribute('realtime_end=' + realTimeEnd);
        }
    }, {
        key: 'setLimit',
        value: function setLimit(params) {
            var limit = parseInt(params['limit'], 10);

            if (!limit || limit < 0 || limit > 1000) {
                return this;
            }
            return this.addAttribute('limit=' + limit);
        }
    }, {
        key: 'setOffset',
        value: function setOffset(params) {
            var offset = parseInt(params['offset'], 10);

            if (!offset || offset < 0) {
                return this;
            }
            return this.addAttribute('offset=' + offset);
        }
    }, {
        key: 'setOrderBy',
        value: function setOrderBy(params) {
            var orderBy = params['order_by'];

            if (orderBy === '') {
                return this;
            }
            return this.addAttribute('order_by=' + orderBy);
        }
    }, {
        key: 'setSortOrder',
        value: function setSortOrder(params) {
            var sortOrder = params['sort_oder'].toLowerCase();

            if (sortOrder === '' || sortOrder !== 'asc' && sortOrder !== 'desc') {
                return this;
            }
            return this.addAttribute('sort_oder=' + sortOrder);
        }
    }, {
        key: 'setFilterVariable',
        value: function setFilterVariable(params) {
            var filterVariable = params['filter_variable'];

            if (filterVariable === '') {
                return this;
            }
            return this.addAttribute('filter_variable=' + filterVariable);
        }
    }, {
        key: 'setFilterValue',
        value: function setFilterValue(params) {
            var filterValue = params['filter_value'];

            if (filterValue === '') {
                return this;
            }
            return this.addAttribute('filter_value=' + filterValue);
        }
    }, {
        key: 'setTagNames',
        value: function setTagNames(params) {
            var tagNames = params['tag_names'];

            if (tagNames === '') {
                return this;
            }
            return this.addAttribute('tag_names=' + tagNames);
        }
    }, {
        key: 'setExcludeTagNames',
        value: function setExcludeTagNames(params) {
            var excludeTagNames = params['exclude_tag_names'];

            if (excludeTagNames === '') {
                return this;
            }
            return this.addAttribute('exclude_tag_names=' + excludeTagNames);
        }
    }, {
        key: 'setSearchText',
        value: function setSearchText(params) {
            var searchText = params['search_text'];

            if (searchText === '') {
                return this;
            }
            return this.addAttribute('search_text=' + searchText);
        }
    }, {
        key: 'setTagGroupId',
        value: function setTagGroupId(params) {
            var tagGroupId = params['tag_group_id'];

            if (tagGroupId === '') {
                return this;
            }
            return this.addAttribute('tag_group_id=' + tagGroupId);
        }
    }, {
        key: 'getUrl',
        value: function getUrl() {
            return this.url;
        }
    }]);

    return Builder;
}();

exports.default = Builder;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _builder = __webpack_require__(0);

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Implement a builder pattern
var CategoryBuilder = function (_Builder) {
    _inherits(CategoryBuilder, _Builder);

    function CategoryBuilder() {
        _classCallCheck(this, CategoryBuilder);

        return _possibleConstructorReturn(this, (CategoryBuilder.__proto__ || Object.getPrototypeOf(CategoryBuilder)).apply(this, arguments));
    }

    _createClass(CategoryBuilder, [{
        key: 'setCategoryId',
        value: function setCategoryId(categoryId) {
            return this.addAttribute('category_id=' + categoryId);
        }
    }]);

    return CategoryBuilder;
}(_builder2.default);

exports.default = CategoryBuilder;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _builder = __webpack_require__(0);

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Implement a builder pattern
var CategoryBuilder = function (_Builder) {
    _inherits(CategoryBuilder, _Builder);

    function CategoryBuilder() {
        _classCallCheck(this, CategoryBuilder);

        return _possibleConstructorReturn(this, (CategoryBuilder.__proto__ || Object.getPrototypeOf(CategoryBuilder)).apply(this, arguments));
    }

    _createClass(CategoryBuilder, [{
        key: 'setReleaseId',
        value: function setReleaseId(categoryId) {
            return this.addAttribute('release_id=' + categoryId);
        }
    }, {
        key: 'setIncludeRelatedDatesWithNoData',
        value: function setIncludeRelatedDatesWithNoData(params) {
            var includeRelatedDatesWithNoData = params['include_release_dates_with_no_data'];

            if (includeRelatedDatesWithNoData === '') {
                return this;
            }
            return this.addAttribute('include_release_dates_with_no_data=' + includeRelatedDatesWithNoData);
        }
    }, {
        key: 'setElementId',
        value: function setElementId(params) {
            var elementId = params['element_id'];

            if (elementId === '') {
                return this;
            }
            return this.addAttribute('element_id=' + elementId);
        }
    }, {
        key: 'setIncludeObservationValues',
        value: function setIncludeObservationValues(params) {
            var includeObservationValues = params['include_observation_values'];

            if (includeObservationValues === '' || !(includeObservationValues !== 'true' && includeObservationValues !== 'false')) {
                return this;
            }
            return this.addAttribute('include_observation_values=' + includeObservationValues);
        }
    }, {
        key: 'setElementId',
        value: function setElementId(params) {
            var observationDate = params['observation_date'];

            if (observationDate === '' || !this.isValidDate(observationDate)) {
                return this;
            }
            return this.addAttribute('observation_date=' + observationDate);
        }
    }]);

    return CategoryBuilder;
}(_builder2.default);

exports.default = CategoryBuilder;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _axios2.default.create({
    baseURL: 'https://api.stlouisfed.org/fred/',
    timeout: 1000,
    headers: {}
});

exports.default = api;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

var _categoryBuilder = __webpack_require__(1);

var _categoryBuilder2 = _interopRequireDefault(_categoryBuilder);

var _releaseBuilder = __webpack_require__(2);

var _releaseBuilder2 = _interopRequireDefault(_releaseBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import _ from 'lodash';

var Fred = function () {
    // Return type is either xml or json, defaults to json
    function Fred(apiKey) {
        var returnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

        _classCallCheck(this, Fred);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.categoryBuilder = new _categoryBuilder2.default();
        this.releaseBuilder = new _releaseBuilder2.default();
    }

    _createClass(Fred, [{
        key: 'setApiKey',
        value: function setApiKey(apiKey) {
            this.apiKey = apiKey;
        }
    }, {
        key: 'getCategory',
        value: function getCategory(categoryId) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).getUrl();

            return _api2.default.get('category?' + url);
        }
    }, {
        key: 'getCategoryChildren',
        value: function getCategoryChildren(categoryId, params) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('category/children?' + url);
        }
    }, {
        key: 'getCategoryRelated',
        value: function getCategoryRelated(categoryId, params) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('category/related?' + url);
        }
    }, {
        key: 'getCategorySeries',
        value: function getCategorySeries(categoryId, params) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setFilterVariable(params).setFilterValue(params).setTagNames(params).setExcludeTagNames(params).getUrl();

            return _api2.default.get('category/series?' + url);
        }
    }, {
        key: 'getCategoryTags',
        value: function getCategoryTags(categoryId, params) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

            return _api2.default.get('category/tags?' + url);
        }
    }, {
        key: 'getCategoryRelatedTags',
        value: function getCategoryRelatedTags(categoryId, params) {
            var url = this.categoryBuilder.setAPIKey(this.apiKey).setCategoryId(categoryId).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

            return _api2.default.get('category/tags?' + url);
        }
    }, {
        key: 'getAllReleases',
        value: function getAllReleases(params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

            return _api2.default.get('releases?' + url);
        }
    }, {
        key: 'getAllReleasesWithDates',
        value: function getAllReleasesWithDates(params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setIncludeRelatedDatesWithNoData(params).getUrl();

            return _api2.default.get('releases/dates?' + url);
        }
    }, {
        key: 'getRelease',
        value: function getRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('release?' + url);
        }
    }, {
        key: 'getReleaseWithDates',
        value: function getReleaseWithDates(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setIncludeRelatedDatesWithNoData(params).getUrl();

            return _api2.default.get('release/dates?' + url);
        }
    }, {
        key: 'getSeriesForRelease',
        value: function getSeriesForRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).setFilterValue(params).setFilterVariable(params).setTagNames(params).setExcludeTagNames(params).getUrl();

            return _api2.default.get('release/series?' + url);
        }
    }, {
        key: 'getSourcesForRelease',
        value: function getSourcesForRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('release/sources?' + url);
        }
    }, {
        key: 'getTagsForRelease',
        value: function getTagsForRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setTagNames(params).setTagGroupId(params).setSearchText(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).getUrl();

            return _api2.default.get('release/tags?' + url);
        }
    }, {
        key: 'getRelatedTagsForRelease',
        value: function getRelatedTagsForRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setTagNames(params).setExcludeTagNames(params).setTagGroupId(params).setSearchText(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).getUrl();

            return _api2.default.get('release/related_tags?' + url);
        }
    }, {
        key: 'getRelatedTagsForRelease',
        value: function getRelatedTagsForRelease(releaseId, params) {
            var url = this.releaseBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setTagNames(params).setExcludeTagNames(params).setTagGroupId(params).setSearchText(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).getUrl();

            return _api2.default.get('release/related_tags?' + url);
        }
    }, {
        key: 'getSeries',
        value: function getSeries() {}
    }, {
        key: 'getSources',
        value: function getSources() {}
    }, {
        key: 'getTags',
        value: function getTags() {}
    }]);

    return Fred;
}();

exports.default = Fred;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=node-fred.js.map