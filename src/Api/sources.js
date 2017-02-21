'use strict';
import api from '../api';
import SourcesBuilder from './Builders/sourcesBuilder';

class Sources {
    constructor(apiKey, returnType) {
        this.apiKey = apiKey;
        this.returnType = returnType;
        this.sourcesBuilder = new SourcesBuilder();
    }

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
