'use strict';
import api from '../api';
import ReleaseBuilder from './Builders/releaseBuilder';

class Releases {

    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.releaseBuilder = new ReleaseBuilder();
    }

    /**
     * Gets all releases of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all releases of economic data or errors out
     */
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

    /**
     * Gets release dates for all releases of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
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

    /**
     * Gets a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
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

    /**
     * Get release dates for a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
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

    /**
     * Gets the series on a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the series on a release of economic data or errors out
     */
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

    /**
     * Gets the sources for a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the sources for a release of economic data or errors out
     */
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

    /**
     * Gets the FRED tags for a release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the sources for a release of economic data or errors out
     */
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

    /**
     * Get the related FRED tags for one or more FRED tags within a release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the related FRED tags for one or more FRED tags within a release or errors out
     */
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

    /**
     * Gets release table trees for a given release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the release table trees for a given release or errors out
     */
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
