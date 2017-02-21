(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("node-fred", ["axios"], factory);
	else if(typeof exports === 'object')
		exports["node-fred"] = factory(require("axios"));
	else
		root["node-fred"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
        key: 'addAttribute',
        value: function addAttribute(attribute) {
            this.url += (this.url === '' ? '' : '&') + attribute;
            return this;
        }
    }, {
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

var _axios = __webpack_require__(10);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _categoryBuilder = __webpack_require__(6);

var _categoryBuilder2 = _interopRequireDefault(_categoryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Categories = function () {
    function Categories(apiKey, returnType) {
        _classCallCheck(this, Categories);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.categoryBuilder = new _categoryBuilder2.default();
    }

    _createClass(Categories, [{
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
    }]);

    return Categories;
}();

exports.default = Categories;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _releaseBuilder = __webpack_require__(7);

var _releaseBuilder2 = _interopRequireDefault(_releaseBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Releases = function () {
    function Releases(apiKey, returnType) {
        _classCallCheck(this, Releases);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.releaseBuilder = new _releaseBuilder2.default();
    }

    _createClass(Releases, [{
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
    }]);

    return Releases;
}();

exports.default = Releases;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _seriesBuilder = __webpack_require__(8);

var _seriesBuilder2 = _interopRequireDefault(_seriesBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Series = function () {
    function Series(apiKey, returnType) {
        _classCallCheck(this, Series);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.seriesBuilder = new _seriesBuilder2.default();
    }

    _createClass(Series, [{
        key: 'getAllSeries',
        value: function getAllSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('series?' + url);
        }
    }, {
        key: 'getCategoriesForSeries',
        value: function getCategoriesForSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('series/categories?' + url);
        }
    }, {
        key: 'getObservationsForSeries',
        value: function getObservationsForSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setObservationStart(params).setObservationEnd(params).setUnits(params).setFrequency(params).setAggregationMethod(params).setOutputType(params).setVintageDate(params).getUrl();

            return _api2.default.get('series/observations?' + url);
        }
    }, {
        key: 'getReleaseForSeries',
        value: function getReleaseForSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('series/release?' + url);
        }
    }, {
        key: 'getSeriesThatMatchesSearch',
        value: function getSeriesThatMatchesSearch(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setFilterVariable(params).setFilterValue(params).setTagNames(params).setExcludeTagNames(params).setSearchText(params).setSearchType(params).getUrl();

            return _api2.default.get('series/search?' + url);
        }
    }, {
        key: 'getTagsForSeriesSearch',
        value: function getTagsForSeriesSearch(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setSeriesSearchText(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setTagSearchText(params).getUrl();

            return _api2.default.get('series/search/tags?' + url);
        }
    }, {
        key: 'getRelatedTagsForSeriesSearch',
        value: function getRelatedTagsForSeriesSearch(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setSeriesSearchText(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setExcludeTagNames(params).setTagGroupId(params).setTagSearchText(params).getUrl();

            return _api2.default.get('series/search/related_tags?' + url);
        }
    }, {
        key: 'getTagsForSeries',
        value: function getTagsForSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setOrderBy(params).setSortOrder(params).getUrl();

            return _api2.default.get('series/tags?' + url);
        }
    }, {
        key: 'getUpdatedSeries',
        value: function getUpdatedSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setFilterValue(params).getUrl();

            return _api2.default.get('series/tags?' + url);
        }
    }, {
        key: 'getVintageDatesSeries',
        value: function getVintageDatesSeries(seriesId, params) {
            var url = this.seriesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).getUrl();

            return _api2.default.get('series/tags?' + url);
        }
    }]);

    return Series;
}();

exports.default = Series;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _sourcesBuilder = __webpack_require__(9);

var _sourcesBuilder2 = _interopRequireDefault(_sourcesBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sources = function () {
    function Sources(apiKey, returnType) {
        _classCallCheck(this, Sources);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.sourcesBuilder = new _sourcesBuilder2.default();
    }

    _createClass(Sources, [{
        key: 'getAllSources',
        value: function getAllSources(params) {
            var url = this.sourcesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

            return _api2.default.get('sources?' + url);
        }
    }, {
        key: 'getSource',
        value: function getSource(sourceId, params) {
            var url = this.sourcesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSourceId(sourceId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

            return _api2.default.get('source?' + url);
        }
    }, {
        key: 'getReleasesForSource',
        value: function getReleasesForSource(sourceId, params) {
            var url = this.sourcesBuilder.setAPIKey(this.apiKey).setFileType(this.returnType).setSourceId(sourceId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

            return _api2.default.get('source/releases?' + url);
        }
    }]);

    return Sources;
}();

exports.default = Sources;
module.exports = exports['default'];

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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

var SeriesBuilder = function (_Builder) {
    _inherits(SeriesBuilder, _Builder);

    function SeriesBuilder() {
        _classCallCheck(this, SeriesBuilder);

        return _possibleConstructorReturn(this, (SeriesBuilder.__proto__ || Object.getPrototypeOf(SeriesBuilder)).apply(this, arguments));
    }

    _createClass(SeriesBuilder, [{
        key: 'setSeriesId',
        value: function setSeriesId(seriesId) {
            return this.addAttribute('series_id=' + seriesId);
        }
    }, {
        key: 'setObservationStart',
        value: function setObservationStart(params) {
            var observationStart = params['observation_start'];

            if (observationStart === '' || !this.isValidDate(observationStart)) {
                return this;
            }
            return this.addAttribute('observation_start=' + observationStart);
        }
    }, {
        key: 'setObservationEnd',
        value: function setObservationEnd(params) {
            var observationEnd = params['observation_end'];

            if (observationEnd === '' || !this.isValidDate(observationEnd)) {
                return this;
            }
            return this.addAttribute('observation_end=' + observationEnd);
        }
    }, {
        key: 'setUnits',
        value: function setUnits(params) {
            var units = params['units'];

            if (units === '') {
                return this;
            }
            return this.addAttribute('units=' + units);
        }
    }, {
        key: 'setFrequency',
        value: function setFrequency(params) {
            var frequency = params['frequency'];

            if (frequency === '') {
                return this;
            }
            return this.addAttribute('frequency=' + frequency);
        }
    }, {
        key: 'setAggregationMethod',
        value: function setAggregationMethod(params) {
            var aggregationMethod = params['aggregation_method'];

            if (aggregationMethod === '') {
                return this;
            }
            return this.addAttribute('aggregation_method=' + aggregationMethod);
        }
    }, {
        key: 'setOutputType',
        value: function setOutputType(params) {
            var outputType = params['output_type'];

            if (outputType === '') {
                return this;
            }
            return this.addAttribute('output_type=' + outputType);
        }
    }, {
        key: 'setVintageDate',
        value: function setVintageDate(params) {
            var vintageDates = params['vintage_dates'];

            if (vintageDates === '') {
                return this;
            }
            return this.addAttribute('vintage_dates=' + vintageDates);
        }
    }, {
        key: 'setSearchType',
        value: function setSearchType(params) {
            var searchType = params['search_type'];

            if (searchType === '') {
                return this;
            }
            return this.addAttribute('search_type=' + searchType);
        }
    }, {
        key: 'setSeriesSearchText',
        value: function setSeriesSearchText(params) {
            var seriesSearchText = params['series_search_text'];

            if (seriesSearchText === '') {
                return this;
            }
            return this.addAttribute('series_search_text=' + seriesSearchText);
        }
    }, {
        key: 'setTagSearchText',
        value: function setTagSearchText(params) {
            var tagSearchText = params['tag_search_text'];

            if (tagSearchText === '') {
                return this;
            }
            return this.addAttribute('tag_search_text=' + tagSearchText);
        }
    }]);

    return SeriesBuilder;
}(_builder2.default);

exports.default = SeriesBuilder;
module.exports = exports['default'];

/***/ }),
/* 9 */
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

var SourcesBuilder = function (_Builder) {
    _inherits(SourcesBuilder, _Builder);

    function SourcesBuilder() {
        _classCallCheck(this, SourcesBuilder);

        return _possibleConstructorReturn(this, (SourcesBuilder.__proto__ || Object.getPrototypeOf(SourcesBuilder)).apply(this, arguments));
    }

    _createClass(SourcesBuilder, [{
        key: 'setSourceId',
        value: function setSourceId(sourceId) {
            return this.addAttribute('source_id=' + sourceId);
        }
    }]);

    return SourcesBuilder;
}(_builder2.default);

exports.default = SourcesBuilder;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _series = __webpack_require__(4);

var _series2 = _interopRequireDefault(_series);

var _categories = __webpack_require__(2);

var _categories2 = _interopRequireDefault(_categories);

var _releases = __webpack_require__(3);

var _releases2 = _interopRequireDefault(_releases);

var _sources = __webpack_require__(5);

var _sources2 = _interopRequireDefault(_sources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fred =
// Return type is either xml or json, defaults to json
function Fred(apiKey) {
    var returnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

    _classCallCheck(this, Fred);

    this.series = new _series2.default(apiKey, returnType);
    this.categories = new _categories2.default(apiKey, returnType);
    this.releases = new _releases2.default(apiKey, returnType);
    this.sources = new _sources2.default(apiKey, returnType);
};

exports.default = Fred;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=node-fred.js.map