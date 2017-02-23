'use strict';

import Builder from './builder.js';

class CategoryBuilder extends Builder {

    setReleaseId(categoryId) {
        return this.addAttribute('release_id=' + categoryId);
    }

    setIncludeRelatedDatesWithNoData(params) {
        const includeRelatedDatesWithNoData = params['include_release_dates_with_no_data'];

        if(!includeRelatedDatesWithNoData) {
            return this;
        }
        return this.addAttribute('include_release_dates_with_no_data=' + includeRelatedDatesWithNoData);
    }

    setElementId(params) {
        const elementId = params['element_id'];

        if(!elementId) {
            return this;
        }
        return this.addAttribute('element_id=' + elementId);
    }

    setIncludeObservationValues(params) {
        const includeObservationValues = params['include_observation_values'];

        if(!includeObservationValues) {
            return this;
        } else if(includeObservationValues !== 'true' && includeObservationValues !== 'false') {
            throw new Error('The include_observation_values field must either be true or false');
        }
        return this.addAttribute('include_observation_values=' + includeObservationValues);
    }

    setObservationDate(params) {
        const observationDate = params['observation_date'];

        if(!observationDate) {
            return this;
        } else if(!this.isValidDate(observationDate)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute('observation_date=' + observationDate);
    }
}

export default CategoryBuilder;
