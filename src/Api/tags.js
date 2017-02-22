'use strict';
import api from '../api';
import TagsBuilder from './Builders/tagsBuilder';

class Tags {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.tagsBuilder = new TagsBuilder();
    }

    /**
     * Gets all tags, search for tags, or get tags by name.
     * @param {Object} params
     * @returns {Promise} Resolves with a set of tags or errors out
     */
    getAllTags(params) {
        const url = this.tagsBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('tags?' + url);
    }

    /**
     * Get the related tags for one or more tags.
     * @param {Object} params
     * @returns {Promise} Resolves with the related tags for one or more tags or errors out
     */
    getAllRelatedTags(params) {
        const url = this.tagsBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .setTagGroupId(params)
            .setSearchText(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('related_tags?' + url);
    }

    /**
     * Gets the series matching tags.
     * @param {Object} params
     * @returns {Promise} Resolves with the series matching tags or errors out
     */
    getAllSeriesMatchingTags(params) {
        const url = this.tagsBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setTagNames(params)
            .setExcludeTagNames(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('tags/series?' + url);
    }
}

export default Tags;
