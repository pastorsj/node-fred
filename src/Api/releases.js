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
        return new Promise((resolve, reject) => {
            try {
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

                api.get('releases?' + url)
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
     * Gets release dates for all releases of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
    getAllReleasesWithDates(params) {
        return new Promise((resolve, reject) => {
            try {
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

                api.get('releases/dates?' + url)
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
     * Gets a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
    getRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.releaseBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('release?' + url)
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
     * Get release dates for a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with all releases dates of economic data or errors out
     */
    getReleaseWithDates(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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

                api.get('release/dates?' + url)
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
     * Gets the series on a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the series on a release of economic data or errors out
     */
    getSeriesForRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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
                    .setFilterVariable(params)
                    .setFilterValue(params)
                    .setTagNames(params)
                    .setExcludeTagNames(params)
                    .getUrl();

                api.get('release/series?' + url)
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
     * Gets the sources for a release of economic data.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the sources for a release of economic data or errors out
     */
    getSourcesForRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.releaseBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get('release/sources?' + url)
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
     * Gets the FRED tags for a release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the sources for a release of economic data or errors out
     */
    getTagsForRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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
                    .setTagNames(params)
                    .setTagGroupId(params)
                    .setSearchText(params)
                    .getUrl();

                api.get('release/tags?' + url)
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
     * Get the related FRED tags for one or more FRED tags within a release.
     * @param {Number} releaseId
     * @param {String} tagNames
     * @param {Object} params
     * @returns {Promise} Resolves with the related FRED tags for one or more FRED tags within a release or errors out
     */
    getRelatedTagsForRelease(releaseId, tagNames, params = {}) {
        return new Promise((resolve, reject) => {
            try {
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
                    .setTagNames({'tag_names': tagNames})
                    .setExcludeTagNames(params)
                    .setTagGroupId(params)
                    .setSearchText(params)
                    .getUrl();

                api.get('release/related_tags?' + url)
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
     * Gets release table trees for a given release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the release table trees for a given release or errors out
     */
    getTableTreesForRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = this.releaseBuilder
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setElementId(params)
                    .setIncludeObservationValues(params)
                    .setObservationDate(params)
                    .getUrl();

                api.get('release/tables?' + url)
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

export default Releases;
