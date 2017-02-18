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

    getCategoryChildren(categoryId, realTimeStart = '', realTimeEnd = '') {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(realTimeStart)
            .setRealTimeEnd(realTimeEnd)
            .getUrl();

        return api.get('category/children?' + url);
    }

    getReleases() {

    }

    getCategoryRelated(categoryId, realTimeStart = '', realTimeEnd = '') {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(realTimeStart)
            .setRealTimeEnd(realTimeEnd)
            .getUrl();

        return api.get('category/related?' + url);
    }

    getSeries() {

    }

    getSources() {

    }

    getTags() {

    }

}

export default Fred;
