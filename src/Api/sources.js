'use strict';
import api from '../api';
import SourcesBuilder from './Builders/sourcesBuilder';

class Sources {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.sourcesBuilder = new SourcesBuilder();
    }

    /**
     * Gets all sources of economic data.
     * @param {Object} params
     * @returns {Promise} Resolves with all sources of economic data or errors out
     */
    getAllSources(params) {
        const url = this.sourcesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .setLimit(params)
            .setOffset(params)
            .setOrderBy(params)
            .setSortOrder(params)
            .getUrl();

        return api.get('sources?' + url);
    }

    /**
     * Gets a source of economic data.
     * @param {Number} sourceId
     * @param {Object} params
     * @returns {Promise} Resolves with a source of economic data or errors out
     */
    getSource(sourceId, params) {
        const url = this.sourcesBuilder
            .setAPIKey(this.apiKey)
            .setFileType(this.returnType)
            .setSourceId(sourceId)
            .setRealTimeStart(params)
            .setRealTimeEnd(params)
            .getUrl();

        return api.get('source?' + url);
    }

    /**
     * Gets the releases for a source.
     * @param {Number} sourceId
     * @param {Object} params
     * @returns {Promise} Resolves with the releases for a source or errors out
     */
    getReleasesForSource(sourceId, params) {
        const url = this.sourcesBuilder
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

        return api.get('source/releases?' + url);
    }
}

export default Sources;
