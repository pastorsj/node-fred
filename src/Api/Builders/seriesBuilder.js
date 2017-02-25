'use strict';

import Builder from './builder.js';

class SeriesBuilder extends Builder {

    setSeriesId(seriesId) {
        return this.addAttribute('series_id=' + seriesId);
    }

    setObservationStart(params) {
        const observationStart = params['observation_start'];

        if(!observationStart) {
            return this;
        } else if(!this.isValidDate(observationStart)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute('observation_start=' + observationStart);
    }

    setObservationEnd(params) {
        const observationEnd = params['observation_end'];

        if(!observationEnd) {
            return this;
        } else if(!this.isValidDate(observationEnd)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute('observation_end=' + observationEnd);
    }

    setUnits(params) {
        const units = params['units'];

        if(units === '') {
            return this;
        }
        return this.addAttribute('units=' + units);
    }

    setFrequency(params) {
        const frequency = params['frequency'];

        if(!frequency) {
            return this;
        }
        return this.addAttribute('frequency=' + frequency);
    }

    setAggregationMethod(params) {
        const aggregationMethod = params['aggregation_method'];

        if(!aggregationMethod) {
            return this;
        }
        return this.addAttribute('aggregation_method=' + aggregationMethod);
    }

    setOutputType(params) {
        const outputType = params['output_type'];

        if(!outputType) {
            return this;
        }
        return this.addAttribute('output_type=' + outputType);
    }

    setVintageDate(params) {
        const vintageDates = params['vintage_dates'];

        if(!vintageDates) {
            return this;
        }
        return this.addAttribute('vintage_dates=' + vintageDates);
    }

    setSearchType(params) {
        const searchType = params['search_type'];

        if(!searchType) {
            return this;
        }
        return this.addAttribute('search_type=' + searchType);
    }

    setSeriesSearchText(seriesSearchText) {
        return this.addAttribute('series_search_text=' + seriesSearchText);
    }

    setTagSearchText(params) {
        const tagSearchText = params['tag_search_text'];

        if(!tagSearchText) {
            return this;
        }
        return this.addAttribute('tag_search_text=' + tagSearchText);
    }

}

export default SeriesBuilder;
