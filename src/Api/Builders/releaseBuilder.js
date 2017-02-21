'use strict';

import Builder from './builder.js';

// Implement a builder pattern
class CategoryBuilder extends Builder {

    setReleaseId(categoryId) {
        return this.addAttribute('release_id=' + categoryId);
    }

    setIncludeRelatedDatesWithNoData(params) {
        const includeRelatedDatesWithNoData = params['include_release_dates_with_no_data'];

        if(includeRelatedDatesWithNoData === '') {
            return this;
        }
        return this.addAttribute('include_release_dates_with_no_data=' + includeRelatedDatesWithNoData);
    }

    setElementId(params) {
        const elementId = params['element_id'];

        if(elementId === '') {
            return this;
        }
        return this.addAttribute('element_id=' + elementId);
    }

    setIncludeObservationValues(params) {
        const includeObservationValues = params['include_observation_values'];

        if(includeObservationValues === '' ||
            !(includeObservationValues !== 'true' && includeObservationValues !== 'false')) {
            return this;
        }
        return this.addAttribute('include_observation_values=' + includeObservationValues);
    }

    setElementId(params) {
        const observationDate = params['observation_date'];

        if(observationDate === '' || !this.isValidDate(observationDate)) {
            return this;
        }
        return this.addAttribute('observation_date=' + observationDate);
    }
}

export default CategoryBuilder;
