'use strict';
import api from './api';
// import builder from './builder';
// import _ from 'lodash';

class Fred {
    // Return type is either xml or json, defaults to json
    constructor(apiKey, returnType = 'json') {
        this.apiKey = apiKey;
        this.returnType = returnType;
    }

    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }

    setReturnType(returnType) {
        this.returnType = returnType;
    }

    getCategory(categoryId) {
        // Replace with a builder pattern
        return api.get('category?category_id=' +
            categoryId +
            '&' +
            (this.apiKey === '' ? '' : 'api_key=' + this.apiKey) +
            '&file_type=' + this.returnType);
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
