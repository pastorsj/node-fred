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
    getAllSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setSeriesId(seriesId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('series?' + url);
    }

    /**
     * Gets the categories for an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with the categories for an economic data series or errors out
     */
    getCategoriesForSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setSeriesId(seriesId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('series/categories?' + url);
    }

    /**
     * Gets the observations or data values for an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with the observations or data values for an economic data series or errors out
     */
    getObservationsForSeries(seriesId, params) {
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

        return api.get('series/observations?' + url);
    }

    /**
     * Gets the release for an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with the release for an economic data series or errors out
     */
    getReleaseForSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setSeriesId(seriesId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('series/release?' + url);
    }

    /**
     * Gets economic data series that match keywords.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with economic data series that match keywords or errors out
     */
    getSeriesThatMatchesSearch(seriesId, params) {
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

        return api.get('series/search?' + url);
    }

    /**
     * Gets the tags for a series search.
     * @param {Number} seriesId
     * @param {String} seriesSearchText
     * @param {Object} params
     * @returns {Promise} Resolves with the tags for a series search or errors out
     */
    getTagsForSeriesSearch(seriesId, seriesSearchText, params) {
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

        return api.get('series/search/tags?' + url);
    }

    /**
     * Gets the related tags for a series search.
     * @param {Number} seriesId
     * @param {String} seriesSearchText
     * @param {Object} params
     * @returns {Promise} Resolves with the related tags for a series search or errors out
     */
    getRelatedTagsForSeriesSearch(seriesId, seriesSearchText, params) {
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

        return api.get('series/search/related_tags?' + url);
    }

    /**
     * Gets the tags for an economic data series.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with the tags for an economic data series or errors out
     */
    getTagsForSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('series/tags?' + url);
    }

    /**
     * Gets economic data series sorted by when observations were updated on the FRED® server.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with economic data series sorted by
     * when observations were updated on the FRED® server or errors out
     */
    getUpdatedSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setFilterValue(params)
            .getUrl();

        return api.get('series/updates?' + url);
    }

    /**
     * Gets the dates in history when a series' data values were revised or new data values were released.
     * @param {Number} seriesId
     * @param {Object} params
     * @returns {Promise} Resolves with the dates in history when a
     * series' data values were revised or new data values were released or errors out
     */
    getVintageDatesSeries(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('series/vintagedates?' + url);
    }

}

export default Series;
