import Builder from './builder.js';

class ReleaseBuilder extends Builder {
    setReleaseId(releaseId) {
        // Must be a positive integer
        const id = parseInt(releaseId, 10);

        if (id <= 0) {
            throw new Error('The release id must be a positive integer');
        }

        return this.addAttribute(`release_id=${releaseId}`);
    }

    setIncludeRelatedDatesWithNoData(params) {
        const includeRelatedDatesWithNoData = params.include_release_dates_with_no_data;

        if (!includeRelatedDatesWithNoData) {
            return this;
        }
        return this.addAttribute(`include_release_dates_with_no_data=${includeRelatedDatesWithNoData}`);
    }

    setElementId(params) {
        const elementId = params.element_id;

        if (!elementId) {
            return this;
        }
        return this.addAttribute(`element_id=${elementId}`);
    }

    setIncludeObservationValues(params) {
        const includeObservationValues = params.include_observation_values;

        if (!includeObservationValues) {
            return this;
        }
        if (includeObservationValues !== 'true' && includeObservationValues !== 'false') {
            throw new Error('The include_observation_values field must either be true or false');
        }
        return this.addAttribute(`include_observation_values=${includeObservationValues}`);
    }

    setObservationDate(params) {
        const observationDate = params.observation_date;

        if (!observationDate) {
            return this;
        }
        if (!this.isValidDate(observationDate)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute(`observation_date=${observationDate}`);
    }

    setNextCursor(params) {
        const nextCursor = params.next_cursor;

        if (!nextCursor) {
            return this;
        }
        return this.addAttribute(`next_cursor=${nextCursor}`);
    }

    setFormat(params) {
        const { format } = params;

        if (!format) {
            return this;
        }
        return this.addAttribute(`format=${format}`);
    }

    setV2Limit(params) {
        const limit = parseInt(params.limit, 10);

        if (!limit) {
            return this;
        }
        if (limit < 0 || limit > 500000) {
            throw new Error('Limit must be between 0 and 500000 for v2/release/observations');
        }
        return this.addAttribute(`limit=${limit}`);
    }
}

export default ReleaseBuilder;
