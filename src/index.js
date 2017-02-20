'use strict';
import api from './api';
import CategoryBuilder from './categoryBuilder';
// import _ from 'lodash';

class Fred {
    // Return type is either xml or json, defaults to json
    constructor(apiKey, returnType = 'json') {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.categoryBuilder = new CategoryBuilder();
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

    getReleases() {

    }

    getSeries() {

    }

    getSources() {

    }

    getTags() {

    }

}

export default Fred;
