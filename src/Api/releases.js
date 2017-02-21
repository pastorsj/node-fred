'use strict';
import api from '../api';
import ReleaseBuilder from './Builders/releaseBuilder';

class Releases {

    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.releaseBuilder = new ReleaseBuilder();
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

}

export default Releases;
