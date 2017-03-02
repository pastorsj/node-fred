'use strict';
import api from '../api';
import SeriesBuilder from './Builders/seriesBuilder';

class Series {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.seriesBuilder = new SeriesBuilder();
    }

    /**
     * Gets an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with an economic data series or errors out
     */
    getSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSeriesId(seriesId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('series?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getCategoriesForSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSeriesId(seriesId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('series/categories?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getObservationsForSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSeriesId(seriesId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setSortOrder(params)
                    .setObservationStart(params)
                    .setObservationEnd(params)
                    .setUnits(params)
                    .setFrequency(params)
                    .setAggregationMethod(params)
                    .setOutputType(params)
                    .setVintageDate(params)
                    .getUrl();

                api.get('series/observations?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getReleaseForSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSeriesId(seriesId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('series/release?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getSeriesThatMatchesSearch(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSeriesId(seriesId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setFilterVariable(params)
                    .setFilterValue(params)
                    .setTagNames(params)
                    .setExcludeTagNames(params)
                    .setSearchText(params)
                    .setSearchType(params)
                    .getUrl();

                api.get('series/search?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getTagsForSeriesSearch(seriesId, seriesSearchText, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setTagNames(params)
                    .setTagGroupId(params)
                    .setTagSearchText(params)
                    .setSeriesSearchText(seriesSearchText)
                    .getUrl();

                api.get('series/search/tags?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getRelatedTagsForSeriesSearch(seriesId, seriesSearchText, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setTagNames(params)
                    .setExcludeTagNames(params)
                    .setTagGroupId(params)
                    .setTagSearchText(params)
                    .setSeriesSearchText(seriesSearchText)
                    .getUrl();

                api.get('series/search/related_tags?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getTagsForSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .getUrl();

                api.get('series/tags?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getUpdatedSeries(params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setFilterValue(params)
                    .getUrl();

                api.get('series/updates?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
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
    getVintageDatesSeries(seriesId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.seriesBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setSortOrder(params)
                    .getUrl();

                api.get('series/vintagedates?' + url)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch(e) {
                reject(e);
            }
        });
    }

}

export default Series;
