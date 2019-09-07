import api from '../api';
import SourcesBuilder from './Builders/sourcesBuilder';

class Sources {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
    }

    /**
     * Gets all sources of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all sources of economic data or errors out
     */
    getAllSources(params) {
        return new Promise((resolve, reject) => {
            try {
                const url = new SourcesBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .getUrl();

                api.get(`sources?${url}`)
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
     * Gets a source of economic data.
     * @param {Number} sourceId
     * @param {Object} params
     * @returns {Promise} Resolves with a source of economic data or errors out
     */
    getSource(sourceId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = new SourcesBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSourceId(sourceId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .getUrl();

                api.get(`source?${url}`)
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
     * Gets the releases for a source.
     * @param {Number} sourceId
     * @param {Object} params
     * @returns {Promise} Resolves with the releases for a source or errors out
     */
    getReleasesForSource(sourceId, params = {}) {
        return new Promise((resolve, reject) => {
            try {
                const url = new SourcesBuilder()
                    .setAPIKey(this.apiKey)
                    .setFileType(this.returnType)
                    .setSourceId(sourceId)
                    .setRealTimeStart(params)
                    .setRealTimeEnd(params)
                    .setLimit(params)
                    .setOffset(params)
                    .setOrderBy(params)
                    .setSortOrder(params)
                    .getUrl();

                api.get(`source/releases?${url}`)
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
}

export default Sources;
