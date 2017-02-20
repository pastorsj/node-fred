'use strict';
import api from './api';
import CategoryBuilder from './Builders/categoryBuilder';
import ReleaseBuilder from './Builders/releaseBuilder';
// import _ from 'lodash';

class Fred {
    // Return type is either xml or json, defaults to json
    constructor(apiKey, returnType = 'json') {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.categoryBuilder = new CategoryBuilder();
        this.releaseBuilder = new ReleaseBuilder();
    }

    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }

    getCategory(categoryId) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .getUrl();

        return api.get('category?' + url);
    }

    getCategoryChildren(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('category/children?' + url);
    }

    getCategoryRelated(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('category/related?' + url);
    }

    getCategorySeries(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
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
            .getUrl();

        return api.get('category/series?' + url);
    }

    getCategoryTags(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .setTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .getUrl();

        return api.get('category/tags?' + url);
    }

    getCategoryRelatedTags(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .setTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .getUrl();

        return api.get('category/tags?' + url);
    }

    getAllReleases(params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('releases?' + url);
    }

    getAllReleasesWithDates(params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .setIncludeRelatedDatesWithNoData(params)
            .getUrl();

        return api.get('releases/dates?' + url);
    }

    getRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('release?' + url);
    }

    getReleaseWithDates(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .setIncludeRelatedDatesWithNoData(params)
            .getUrl();

        return api.get('release/dates?' + url);
    }

    getSeriesForRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .setOrderBy(params)
            .setFilterValue(params)
            .setFilterVariable(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .getUrl();

        return api.get('release/series?' + url);
    }

    getSourcesForRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('release/sources?' + url);
    }

    getTagsForRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .setOrderBy(params)
            .getUrl();

        return api.get('release/tags?' + url);
    }

    getRelatedTagsForRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .setOrderBy(params)
            .getUrl();

        return api.get('release/related_tags?' + url);
    }

    getRelatedTagsForRelease(releaseId, params) {
        const url = this.releaseBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setReleaseId(releaseId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setSortOrder(params)
            .setOrderBy(params)
            .getUrl();

        return api.get('release/related_tags?' + url);
    }

    getSeries() {

    }

    getSources() {

    }

    getTags() {

    }

}

export default Fred;
