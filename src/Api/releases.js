import api from '../api.js';
import ReleaseBuilder from './Builders/releaseBuilder.js';

class Releases {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
    }

    /**
     * Gets all releases of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all releases of economic data or errors out
     */
    getAllReleases(params) {
        return new Promise((resolve, reject) => {
            try {
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .getUrl();

                api.get(`releases?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setReleaseDatesLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .setIncludeRelatedDatesWithNoData(params)
                    .getUrl();

                api.get(`releases/dates?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get(`release?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setReleaseDatesLimit(params)
                    .setOffset(params)
                    .setSortOrder(params)
                    .setIncludeRelatedDatesWithNoData(params)
                    .getUrl();

                api.get(`release/dates?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
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

                api.get(`release/series?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get(`release/sources?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
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
                const url = new ReleaseBuilder()
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

                api.get(`release/tags?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    /**
     * Get the related FRED tags for one or more FRED tags within a release.
     * @param {Number} releaseId
     * @param {String} tagNames
     * @param {Object} params
     * @returns {Promise} Resolves with the related FRED tags for
     * one or more FRED tags within a release or errors out
     */
    getRelatedTagsForRelease(releaseId, tagNames, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setSortOrder(params)
                    .setOrderBy(params)
                    .setTagNames({ tag_names: tagNames })
                    .setExcludeTagNames(params)
                    .setTagGroupId(params)
                    .setSearchText(params)
                    .getUrl();

                api.get(`release/related_tags?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    /**
     * Gets release table trees for a given release.
     * @param {Number} releaseId
     * @param {Object} params
     * @returns {Promise} Resolves with the release table
     * trees for a given release or errors out
     */
    getTableTreesForRelease(releaseId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = new ReleaseBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setReleaseId(releaseId)
                    .setElementId(params)
                    .setIncludeObservationValues(params)
                    .setObservationDate(params)
                    .getUrl();

                api.get(`release/tables?${url}`)
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err.response.data);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    /**
     * Gets observations for a release (single page). (v2 API)
     * Note: v2 API uses Bearer token authentication via Authorization header
     * Includes automatic retry with exponential backoff on rate limit errors.
     * @param {Number} releaseId - The release ID
     * @param {Object} params - Optional parameters
     * @param {String} params.format - Output format (json or csv, default: json)
     * @param {Number} params.limit - Observations per page (default: 10000, max: 500000)
     * @param {String} params.next_cursor - Cursor for pagination
     * @returns {Promise} Resolves with observations for a release or errors out
     */
    getObservationsForRelease(releaseId, params = {}) {
        const url = new ReleaseBuilder()
            .setReleaseId(releaseId)
            .setFormat(params)
            .setV2Limit(params)
            .setNextCursor(params)
            .getUrl();

        return api.get(`v2/release/observations?${url}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`
            }
        })
            .then((res) => res.data)
            .catch((err) => {
                throw err.response ? err.response.data : err;
            });
    }

    /**
     * Gets all observations for a release with automatic pagination. (v2 API)
     * Fetches all pages until has_more is false or maxObservations is reached.
     * @param {Number} releaseId - The release ID
     * @param {Object} params - Optional parameters
     * @param {Number} params.limit - Observations per page (default: 10000, max: 500000)
     * @param {Number} params.maxObservations - Max total observations to fetch (optional)
     * @returns {Promise} Resolves with all observations accumulated across pages
     */
    getAllObservationsForRelease(releaseId, params = {}) {
        const { maxObservations, ...requestParams } = params;
        const pageLimit = requestParams.limit || 10000;
        const allSeries = {};
        let totalObservations = 0;
        let release = null;

        const mergeSeries = (response) => {
            if (!release) {
                release = response.release;
            }
            response.series.forEach((series) => {
                if (!allSeries[series.series_id]) {
                    allSeries[series.series_id] = { ...series, observations: [] };
                }
                allSeries[series.series_id].observations.push(...series.observations);
                totalObservations += series.observations.length;
            });
        };

        const fetchPage = (cursor) => {
            const pageParams = { ...requestParams, limit: pageLimit };
            if (cursor) {
                pageParams.next_cursor = cursor;
            }

            return this.getObservationsForRelease(releaseId, pageParams)
                .then((response) => {
                    mergeSeries(response);

                    const shouldContinue = response.has_more
                        && response.next_cursor
                        && (!maxObservations || totalObservations < maxObservations);

                    if (shouldContinue) {
                        return fetchPage(response.next_cursor);
                    }

                    return {
                        release,
                        series: Object.values(allSeries),
                        total_observations: totalObservations
                    };
                });
        };

        return fetchPage(null);
    }
}

export default Releases;
