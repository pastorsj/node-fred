'use strict';
import api from '../api';
import CategoryBuilder from './Builders/categoryBuilder';

class Categories {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.categoryBuilder = new CategoryBuilder();
    }

    /**
     * Gets a category
     * @param {Number} categoryId
     * @returns {Promise} Resolves with the category or errors out
     */
    getCategory(categoryId) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.categoryBuilder
                    .setAPIKey(this.apiKey)
                    .setCategoryId(categoryId)
                    .setFileType(this.returnType)
                    .getUrl();

                api.get('category?' + url)
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
     * Gets the child categories for a specified parent category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the child category or errors out
     */
    getChildCategories(categoryId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.categoryBuilder
                    .setAPIKey(this.apiKey)
                    .setCategoryId(categoryId)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('category/children?' + url)
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
     * Gets the related categories for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the related categories or errors out
     */
    getRelatedCategories(categoryId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.categoryBuilder
                    .setAPIKey(this.apiKey)
                    .setCategoryId(categoryId)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('category/related?' + url)
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
     * Gets the series in a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the series or errors out
     */
    getCategorySeries(categoryId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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

                api.get('category/series?' + url)
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
     * Get the FRED tags for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the tags for the category or errors out
     */
    getCategoryTags(categoryId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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

                api.get('category/tags?' + url)
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
     * Get the related FRED tags for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the related tags for the category or errors out
     */
    getCategoryRelatedTags(categoryId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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

                api.get('category/related_tags?' + url)
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

export default Categories;
