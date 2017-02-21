'use strict';
import api from '../api';
import TagsBuilder from './Builders/tagsBuilder';

class Tags {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.tagsBuilder = new TagsBuilder();
    }

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
