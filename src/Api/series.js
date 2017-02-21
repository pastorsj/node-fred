'use strict';
import api from '../api';
import SeriesBuilder from './Builders/seriesBuilder';

class Series {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.seriesBuilder = new SeriesBuilder();
    }

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

    getTagsForSeriesSearch(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setSeriesSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .setTagNames(params)
            .setTagGroupId(params)
            .setTagSearchText(params)
            .getUrl();

        return api.get('series/search/tags?' + url);
    }

    getRelatedTagsForSeriesSearch(seriesId, params) {
        const url = this.seriesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setSeriesSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .setTagGroupId(params)
            .setTagSearchText(params)
            .getUrl();

        return api.get('series/search/related_tags?' + url);
    }

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

        return api.get('series/tags?' + url);
    }

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

        return api.get('series/tags?' + url);
    }

}

export default Series;
