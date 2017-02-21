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
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .getUrl();

        return api.get('category?' + url);
    }

    /**
     * Gets the child categories for a specified parent category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the child category or errors out
     */
    getChildCategories(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('category/children?' + url);
    }

    /**
     * Gets the related categories for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the related categories or errors out
     */
    getRelatedCategories(categoryId, params) {
        const url = this.categoryBuilder
            .setAPIKey(this.apiKey)
            .setCategoryId(categoryId)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('category/related?' + url);
    }

    /**
     * Gets the series in a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the series or errors out
     */
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

    /**
     * Get the FRED tags for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the tags for the category or errors out
     */
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

    /**
     * Get the related FRED tags for a category.
     * @param {Number} categoryId
     * @param {Object} params
     * @returns {Promise} Resolves with the related tags for the category or errors out
     */
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

}

export default Categories;
