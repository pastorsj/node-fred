(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("node-fred", ["axios"], factory);
	else if(typeof exports === 'object')
		exports["node-fred"] = factory(require("axios"));
	else
		root["node-fred"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

            if (!realTimeStart) {
                return this;
            } else if (!this.isValidDate(realTimeStart)) {
                throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
            }
            return this.addAttribute('realtime_start=' + realTimeStart);
        }
    }, {
        key: 'setRealTimeEnd',
        value: function setRealTimeEnd(params) {
            var realTimeEnd = params['realtime_end'];

            if (!realTimeEnd) {
                return this;
            } else if (!this.isValidDate(realTimeEnd)) {
                throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
            }
            return this.addAttribute('realtime_end=' + realTimeEnd);
        }
    }, {
        key: 'setLimit',
        value: function setLimit(params) {
            var limit = parseInt(params['limit'], 10);

            if (!limit) {
                return this;
            } else if (limit < 0 || limit > 1000) {
                throw new Error('Limit must be between 0 and 1000');
            }
            return this.addAttribute('limit=' + limit);
        }
    }, {
        key: 'setOffset',
        value: function setOffset(params) {
            var offset = parseInt(params['offset'], 10);

            if (!offset) {
                return this;
            } else if (offset < 0) {
                throw new Error('Offset must be greater than 0');
            }
            return this.addAttribute('offset=' + offset);
        }
    }, {
        key: 'setOrderBy',
        value: function setOrderBy(params) {
            var orderBy = params['order_by'];

            if (!orderBy) {
                return this;
            }
            return this.addAttribute('order_by=' + orderBy);
        }
    }, {
        key: 'setSortOrder',
        value: function setSortOrder(params) {
            var sortOrder = params['sort_order'];

            if (!sortOrder) {
                return this;
            }
            sortOrder = sortOrder.toLowerCase();
            if (sortOrder !== 'asc' && sortOrder !== 'desc') {
                throw new Error('Sort order can only be either asc or desc');
            }
            return this.addAttribute('sort_order=' + sortOrder);
        }
    }, {
        key: 'setFilterVariable',
        value: function setFilterVariable(params) {
            var filterVariable = params['filter_variable'];

            if (!filterVariable) {
                return this;
            }
            return this.addAttribute('filter_variable=' + filterVariable);
        }
    }, {
        key: 'setFilterValue',
        value: function setFilterValue(params) {
            var filterValue = params['filter_value'];

            if (!filterValue) {
                return this;
            }
            return this.addAttribute('filter_value=' + filterValue);
        }
    }, {
        key: 'setTagNames',
        value: function setTagNames(params) {
            if (typeof params === 'string') {
                return this.addAttribute('tag_names=' + params);
            }
            var tagNames = params['tag_names'];

            if (!tagNames) {
                return this;
            }
            return this.addAttribute('tag_names=' + tagNames);
        }
    }, {
        key: 'setExcludeTagNames',
        value: function setExcludeTagNames(params) {
            var excludeTagNames = params['exclude_tag_names'];

            if (!excludeTagNames) {
                return this;
            }
            return this.addAttribute('exclude_tag_names=' + excludeTagNames);
        }
    }, {
        key: 'setSearchText',
        value: function setSearchText(params) {
            var searchText = params['search_text'];

            if (!searchText) {
                return this;
            }
            return this.addAttribute('search_text=' + searchText);
        }
    }, {
        key: 'setTagGroupId',
        value: function setTagGroupId(params) {
            var tagGroupId = params['tag_group_id'];

            if (!tagGroupId) {
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

var _axios = __webpack_require__(12);

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

var _categoryBuilder = __webpack_require__(7);

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

    /**
     * Gets a category
     * @param {Number} categoryId
     * @returns {Promise} Resolves with the category or errors out
     */


    _createClass(Categories, [{
        key: 'getCategory',
        value: function getCategory(categoryId) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this.categoryBuilder.setAPIKey(_this.apiKey).setCategoryId(categoryId).setFileType(_this.returnType).getUrl();

                    _api2.default.get('category?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the child categories for a specified parent category.
         * @param {Number} categoryId
         * @param {Object} params
         * @returns {Promise} Resolves with the child category or errors out
         */

    }, {
        key: 'getChildCategories',
        value: function getChildCategories(categoryId) {
            var _this2 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this2.categoryBuilder.setAPIKey(_this2.apiKey).setCategoryId(categoryId).setFileType(_this2.returnType).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('category/children?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the related categories for a category.
         * @param {Number} categoryId
         * @param {Object} params
         * @returns {Promise} Resolves with the related categories or errors out
         */

    }, {
        key: 'getRelatedCategories',
        value: function getRelatedCategories(categoryId) {
            var _this3 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this3.categoryBuilder.setAPIKey(_this3.apiKey).setCategoryId(categoryId).setFileType(_this3.returnType).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('category/related?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the series in a category.
         * @param {Number} categoryId
         * @param {Object} params
         * @returns {Promise} Resolves with the series or errors out
         */

    }, {
        key: 'getCategorySeries',
        value: function getCategorySeries(categoryId) {
            var _this4 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this4.categoryBuilder.setAPIKey(_this4.apiKey).setCategoryId(categoryId).setFileType(_this4.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setFilterVariable(params).setFilterValue(params).setTagNames(params).setExcludeTagNames(params).getUrl();

                    _api2.default.get('category/series?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Get the FRED tags for a category.
         * @param {Number} categoryId
         * @param {Object} params
         * @returns {Promise} Resolves with the tags for the category or errors out
         */

    }, {
        key: 'getCategoryTags',
        value: function getCategoryTags(categoryId) {
            var _this5 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this5.categoryBuilder.setAPIKey(_this5.apiKey).setCategoryId(categoryId).setFileType(_this5.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('category/tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Get the related FRED tags for a category.
         * @param {Number} categoryId
         * @param {Object} params
         * @returns {Promise} Resolves with the related tags for the category or errors out
         */

    }, {
        key: 'getCategoryRelatedTags',
        value: function getCategoryRelatedTags(categoryId) {
            var _this6 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this6.categoryBuilder.setAPIKey(_this6.apiKey).setCategoryId(categoryId).setFileType(_this6.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('category/related_tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
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

var _releaseBuilder = __webpack_require__(8);

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

    /**
     * Gets all releases of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all releases of economic data or errors out
     */


    _createClass(Releases, [{
        key: 'getAllReleases',
        value: function getAllReleases(params) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this.releaseBuilder.setAPIKey(_this.apiKey).setFileType(_this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

                    _api2.default.get('releases?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets release dates for all releases of economic data.
         * @param {Object} params
         * @returns {Promise} Resolves with all releases dates of economic data or errors out
         */

    }, {
        key: 'getAllReleasesWithDates',
        value: function getAllReleasesWithDates(params) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this2.releaseBuilder.setAPIKey(_this2.apiKey).setFileType(_this2.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setIncludeRelatedDatesWithNoData(params).getUrl();

                    _api2.default.get('releases/dates?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets a release of economic data.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with all releases dates of economic data or errors out
         */

    }, {
        key: 'getRelease',
        value: function getRelease(releaseId) {
            var _this3 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this3.releaseBuilder.setAPIKey(_this3.apiKey).setFileType(_this3.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('release?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Get release dates for a release of economic data.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with all releases dates of economic data or errors out
         */

    }, {
        key: 'getReleaseWithDates',
        value: function getReleaseWithDates(releaseId) {
            var _this4 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this4.releaseBuilder.setAPIKey(_this4.apiKey).setFileType(_this4.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setIncludeRelatedDatesWithNoData(params).getUrl();

                    _api2.default.get('release/dates?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the series on a release of economic data.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with the series on a release of economic data or errors out
         */

    }, {
        key: 'getSeriesForRelease',
        value: function getSeriesForRelease(releaseId) {
            var _this5 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this5.releaseBuilder.setAPIKey(_this5.apiKey).setFileType(_this5.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).setFilterVariable(params).setFilterValue(params).setTagNames(params).setExcludeTagNames(params).getUrl();

                    _api2.default.get('release/series?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the sources for a release of economic data.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with the sources for a release of economic data or errors out
         */

    }, {
        key: 'getSourcesForRelease',
        value: function getSourcesForRelease(releaseId) {
            var _this6 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this6.releaseBuilder.setAPIKey(_this6.apiKey).setFileType(_this6.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('release/sources?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the FRED tags for a release.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with the sources for a release of economic data or errors out
         */

    }, {
        key: 'getTagsForRelease',
        value: function getTagsForRelease(releaseId) {
            var _this7 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this7.releaseBuilder.setAPIKey(_this7.apiKey).setFileType(_this7.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('release/tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Get the related FRED tags for one or more FRED tags within a release.
         * @param {Number} releaseId
         * @param {String} tagNames
         * @param {Object} params
         * @returns {Promise} Resolves with the related FRED tags for one or more FRED tags within a release or errors out
         */

    }, {
        key: 'getRelatedTagsForRelease',
        value: function getRelatedTagsForRelease(releaseId, tagNames) {
            var _this8 = this;

            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this8.releaseBuilder.setAPIKey(_this8.apiKey).setFileType(_this8.returnType).setReleaseId(releaseId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setOrderBy(params).setTagNames({ 'tag_names': tagNames }).setExcludeTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('release/related_tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets release table trees for a given release.
         * @param {Number} releaseId
         * @param {Object} params
         * @returns {Promise} Resolves with the release table trees for a given release or errors out
         */

    }, {
        key: 'getTableTreesForRelease',
        value: function getTableTreesForRelease(releaseId) {
            var _this9 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this9.releaseBuilder.setAPIKey(_this9.apiKey).setFileType(_this9.returnType).setReleaseId(releaseId).setElementId(params).setIncludeObservationValues(params).setObservationDate(params).getUrl();

                    _api2.default.get('release/tables?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
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

var _seriesBuilder = __webpack_require__(9);

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

    /**
     * Gets an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with an economic data series or errors out
     */


    _createClass(Series, [{
        key: 'getSeries',
        value: function getSeries(seriesId) {
            var _this = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this.seriesBuilder.setAPIKey(_this.apiKey).setFileType(_this.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('series?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the categories for an economic data series.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with the categories for an economic data series or errors out
         */

    }, {
        key: 'getCategoriesForSeries',
        value: function getCategoriesForSeries(seriesId) {
            var _this2 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this2.seriesBuilder.setAPIKey(_this2.apiKey).setFileType(_this2.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('series/categories?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the observations or data values for an economic data series.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with the observations or data values for an economic data series or errors out
         */

    }, {
        key: 'getObservationsForSeries',
        value: function getObservationsForSeries(seriesId) {
            var _this3 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this3.seriesBuilder.setAPIKey(_this3.apiKey).setFileType(_this3.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).setObservationStart(params).setObservationEnd(params).setUnits(params).setFrequency(params).setAggregationMethod(params).setOutputType(params).setVintageDate(params).getUrl();

                    _api2.default.get('series/observations?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the release for an economic data series.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with the release for an economic data series or errors out
         */

    }, {
        key: 'getReleaseForSeries',
        value: function getReleaseForSeries(seriesId) {
            var _this4 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this4.seriesBuilder.setAPIKey(_this4.apiKey).setFileType(_this4.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('series/release?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets economic data series that match keywords.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with economic data series that match keywords or errors out
         */

    }, {
        key: 'getSeriesThatMatchesSearch',
        value: function getSeriesThatMatchesSearch(searchText) {
            var _this5 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this5.seriesBuilder.setAPIKey(_this5.apiKey).setFileType(_this5.returnType).setSearchText(searchText).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setFilterVariable(params).setFilterValue(params).setTagNames(params).setExcludeTagNames(params).setSearchType(params).getUrl();

                    _api2.default.get('series/search?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the tags for a series search.
         * @param {Number} seriesId
         * @param {String} seriesSearchText
         * @param {Object} params
         * @returns {Promise} Resolves with the tags for a series search or errors out
         */

    }, {
        key: 'getTagsForSeriesSearch',
        value: function getTagsForSeriesSearch(seriesSearchText) {
            var _this6 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this6.seriesBuilder.setAPIKey(_this6.apiKey).setFileType(_this6.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setTagSearchText(params).setSeriesSearchText(seriesSearchText).getUrl();

                    _api2.default.get('series/search/tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the related tags for a series search.
         * @param {Number} seriesId
         * @param {String} seriesSearchText
         * @param {Object} params
         * @returns {Promise} Resolves with the related tags for a series search or errors out
         */

    }, {
        key: 'getRelatedTagsForSeriesSearch',
        value: function getRelatedTagsForSeriesSearch(seriesSearchText) {
            var _this7 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this7.seriesBuilder.setAPIKey(_this7.apiKey).setFileType(_this7.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setExcludeTagNames(params).setTagGroupId(params).setTagSearchText(params).setSeriesSearchText(seriesSearchText).getUrl();

                    _api2.default.get('series/search/related_tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the tags for an economic data series.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with the tags for an economic data series or errors out
         */

    }, {
        key: 'getTagsForSeries',
        value: function getTagsForSeries(seriesId) {
            var _this8 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this8.seriesBuilder.setAPIKey(_this8.apiKey).setFileType(_this8.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).setOrderBy(params).setSortOrder(params).getUrl();

                    _api2.default.get('series/tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets economic data series sorted by when observations were updated on the FRED® server.
         * @param {Object} params
         * @returns {Promise} Resolves with economic data series sorted by
         * when observations were updated on the FRED® server or errors out
         */

    }, {
        key: 'getUpdatedSeries',
        value: function getUpdatedSeries() {
            var _this9 = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this9.seriesBuilder.setAPIKey(_this9.apiKey).setFileType(_this9.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setFilterValue(params).getUrl();

                    _api2.default.get('series/updates?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the dates in history when a series' data values were revised or new data values were released.
         * @param {Number} seriesId
         * @param {Object} params
         * @returns {Promise} Resolves with the dates in history when a
         * series' data values were revised or new data values were released or errors out
         */

    }, {
        key: 'getVintageDatesSeries',
        value: function getVintageDatesSeries(seriesId) {
            var _this10 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this10.seriesBuilder.setAPIKey(_this10.apiKey).setFileType(_this10.returnType).setSeriesId(seriesId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setSortOrder(params).getUrl();

                    _api2.default.get('series/vintagedates?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
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

var _sourcesBuilder = __webpack_require__(10);

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

    /**
     * Gets all sources of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all sources of economic data or errors out
     */


    _createClass(Sources, [{
        key: 'getAllSources',
        value: function getAllSources(params) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this.sourcesBuilder.setAPIKey(_this.apiKey).setFileType(_this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

                    _api2.default.get('sources?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets a source of economic data.
         * @param {Number} sourceId
         * @param {Object} params
         * @returns {Promise} Resolves with a source of economic data or errors out
         */

    }, {
        key: 'getSource',
        value: function getSource(sourceId) {
            var _this2 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this2.sourcesBuilder.setAPIKey(_this2.apiKey).setFileType(_this2.returnType).setSourceId(sourceId).setRealTimeStart(params).setRealTimeEnd(params).getUrl();

                    _api2.default.get('source?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the releases for a source.
         * @param {Number} sourceId
         * @param {Object} params
         * @returns {Promise} Resolves with the releases for a source or errors out
         */

    }, {
        key: 'getReleasesForSource',
        value: function getReleasesForSource(sourceId) {
            var _this3 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this3.sourcesBuilder.setAPIKey(_this3.apiKey).setFileType(_this3.returnType).setSourceId(sourceId).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).getUrl();

                    _api2.default.get('source/releases?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
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

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

var _tagsBuilder = __webpack_require__(11);

var _tagsBuilder2 = _interopRequireDefault(_tagsBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tags = function () {
    function Tags(apiKey, returnType) {
        _classCallCheck(this, Tags);

        this.apiKey = apiKey;
        this.returnType = returnType;
        this.tagsBuilder = new _tagsBuilder2.default();
    }

    /**
     * Gets all tags, search for tags, or get tags by name.
     * @param {Object} params
     * @returns {Promise} Resolves with a set of tags or errors out
     */


    _createClass(Tags, [{
        key: 'getAllTags',
        value: function getAllTags() {
            var _this = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this.tagsBuilder.setAPIKey(_this.apiKey).setFileType(_this.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Get the related tags for one or more tags.
         * @param {Object} params
         * @returns {Promise} Resolves with the related tags for one or more tags or errors out
         */

    }, {
        key: 'getAllRelatedTags',
        value: function getAllRelatedTags(tagNames) {
            var _this2 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this2.tagsBuilder.setAPIKey(_this2.apiKey).setFileType(_this2.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames(tagNames).setExcludeTagNames(params).setTagGroupId(params).setSearchText(params).getUrl();

                    _api2.default.get('related_tags?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Gets the series matching tags.
         * @param {string} tagNames
         * @param {Object} params
         * @returns {Promise} Resolves with the series matching tags or errors out
         */

    }, {
        key: 'getAllSeriesMatchingTags',
        value: function getAllSeriesMatchingTags(tagNames) {
            var _this3 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var url = _this3.tagsBuilder.setAPIKey(_this3.apiKey).setFileType(_this3.returnType).setRealTimeStart(params).setRealTimeEnd(params).setLimit(params).setOffset(params).setOrderBy(params).setSortOrder(params).setTagNames({ 'tag_names': tagNames }).setExcludeTagNames(params).getUrl();

                    _api2.default.get('tags/series?' + url).then(function (res) {
                        resolve(res.data);
                    }).catch(function (err) {
                        reject(err.response.data);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        }
    }]);

    return Tags;
}();

exports.default = Tags;
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

var ReleaseBuilder = function (_Builder) {
    _inherits(ReleaseBuilder, _Builder);

    function ReleaseBuilder() {
        _classCallCheck(this, ReleaseBuilder);

        return _possibleConstructorReturn(this, (ReleaseBuilder.__proto__ || Object.getPrototypeOf(ReleaseBuilder)).apply(this, arguments));
    }

    _createClass(ReleaseBuilder, [{
        key: 'setReleaseId',
        value: function setReleaseId(releaseId) {
            // Must be a positive integer
            var id = parseInt(releaseId, 10);

            if (id <= 0) {
                throw new Error('The release id must be a positive integer');
            }

            return this.addAttribute('release_id=' + releaseId);
        }
    }, {
        key: 'setIncludeRelatedDatesWithNoData',
        value: function setIncludeRelatedDatesWithNoData(params) {
            var includeRelatedDatesWithNoData = params['include_release_dates_with_no_data'];

            if (!includeRelatedDatesWithNoData) {
                return this;
            }
            return this.addAttribute('include_release_dates_with_no_data=' + includeRelatedDatesWithNoData);
        }
    }, {
        key: 'setElementId',
        value: function setElementId(params) {
            var elementId = params['element_id'];

            if (!elementId) {
                return this;
            }
            return this.addAttribute('element_id=' + elementId);
        }
    }, {
        key: 'setIncludeObservationValues',
        value: function setIncludeObservationValues(params) {
            var includeObservationValues = params['include_observation_values'];

            if (!includeObservationValues) {
                return this;
            } else if (includeObservationValues !== 'true' && includeObservationValues !== 'false') {
                throw new Error('The include_observation_values field must either be true or false');
            }
            return this.addAttribute('include_observation_values=' + includeObservationValues);
        }
    }, {
        key: 'setObservationDate',
        value: function setObservationDate(params) {
            var observationDate = params['observation_date'];

            if (!observationDate) {
                return this;
            } else if (!this.isValidDate(observationDate)) {
                throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
            }
            return this.addAttribute('observation_date=' + observationDate);
        }
    }]);

    return ReleaseBuilder;
}(_builder2.default);

exports.default = ReleaseBuilder;
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

            if (!observationStart) {
                return this;
            } else if (!this.isValidDate(observationStart)) {
                throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
            }
            return this.addAttribute('observation_start=' + observationStart);
        }
    }, {
        key: 'setObservationEnd',
        value: function setObservationEnd(params) {
            var observationEnd = params['observation_end'];

            if (!observationEnd) {
                return this;
            } else if (!this.isValidDate(observationEnd)) {
                throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
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

            if (!frequency) {
                return this;
            }
            return this.addAttribute('frequency=' + frequency);
        }
    }, {
        key: 'setAggregationMethod',
        value: function setAggregationMethod(params) {
            var aggregationMethod = params['aggregation_method'];

            if (!aggregationMethod) {
                return this;
            }
            return this.addAttribute('aggregation_method=' + aggregationMethod);
        }
    }, {
        key: 'setOutputType',
        value: function setOutputType(params) {
            var outputType = params['output_type'];

            if (!outputType) {
                return this;
            }
            return this.addAttribute('output_type=' + outputType);
        }
    }, {
        key: 'setVintageDate',
        value: function setVintageDate(params) {
            var vintageDates = params['vintage_dates'];

            if (!vintageDates) {
                return this;
            }
            return this.addAttribute('vintage_dates=' + vintageDates);
        }
    }, {
        key: 'setSearchType',
        value: function setSearchType(params) {
            var searchType = params['search_type'];

            if (!searchType) {
                return this;
            }
            return this.addAttribute('search_type=' + searchType);
        }
    }, {
        key: 'setSearchText',
        value: function setSearchText(searchText) {
            if (!searchText) {
                return this;
            }
            return this.addAttribute('search_text=' + searchText);
        }
    }, {
        key: 'setSeriesSearchText',
        value: function setSeriesSearchText(seriesSearchText) {
            return this.addAttribute('series_search_text=' + seriesSearchText);
        }
    }, {
        key: 'setTagSearchText',
        value: function setTagSearchText(params) {
            var tagSearchText = params['tag_search_text'];

            if (!tagSearchText) {
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _builder = __webpack_require__(0);

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagsBuilder = function (_Builder) {
  _inherits(TagsBuilder, _Builder);

  function TagsBuilder() {
    _classCallCheck(this, TagsBuilder);

    return _possibleConstructorReturn(this, (TagsBuilder.__proto__ || Object.getPrototypeOf(TagsBuilder)).apply(this, arguments));
  }

  return TagsBuilder;
}(_builder2.default);

exports.default = TagsBuilder;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
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

var _tags = __webpack_require__(6);

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fred =
// Return type is either xml or json, defaults to json
function Fred(apiKey) {
    var returnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

    _classCallCheck(this, Fred);

    this.categories = new _categories2.default(apiKey, returnType);
    this.releases = new _releases2.default(apiKey, returnType);
    this.sources = new _sources2.default(apiKey, returnType);
    this.series = new _series2.default(apiKey, returnType);
    this.tags = new _tags2.default(apiKey, returnType);
};

exports.default = Fred;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=node-fred.js.map