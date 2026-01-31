import * as chai from 'chai';
import { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Series from '../../src/Api/series.js';

chai.use(sinonChai);

describe('Series', () => {
    let series;
    let params;

    beforeEach(() => {
        series = new Series(process.env.FRED_API_KEY, 'json');
    });

    describe('getSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getSeries('GNPCA', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'seriess');
        });
    });

    describe('getCategoriesForSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getCategoriesForSeries('GNPCA', params);

            expect(res).to.have.all.keys('categories');
        });
    });

    describe('getObservationsForSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                sort_order: 'asc',
                observation_start: '1960-03-10',
                observation_end: '1965-03-10',
                frequency: 'a',
                aggregation_method: 'avg',
                output_type: '1',
                vintage_date: 'dates',
                units: 'lin'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getObservationsForSeries('GNPCA', params);

            expect(res).to.have.all.keys(
                'realtime_start',
                'realtime_end',
                'observation_start',
                'observation_end',
                'units',
                'output_type',
                'file_type',
                'order_by',
                'sort_order',
                'count',
                'offset',
                'limit',
                'observations'
            );
        });
    });

    describe('getReleaseForSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getReleaseForSeries('GNPCA', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'releases');
        });
    });

    describe('getSeriesThatMatchesSearch()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                tag_names: 'income;bea',
                exclude_tag_names: 'discontinued;annual',
                filter_variable: 'frequency',
                filter_value: 'filter',
                search_type: 'full_text'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getSeriesThatMatchesSearch('monetary+service+index', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'filter_variable', 'filter_value', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'seriess');
        });
    });

    describe('getTagsForSeriesSearch()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'created',
                sort_order: 'asc',
                tag_names: 'income;bea',
                tag_group_id: 'gen',
                tag_search_text: 'certaintag'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getTagsForSeriesSearch('monetary+service+index', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getRelatedTagsForSeriesSearch()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'created',
                sort_order: 'desc',
                tag_names: 'income;bea',
                tag_group_id: 'gen',
                exclude_tag_names: 'discontinued;annual',
                tag_search_text: 'certaintag'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getRelatedTagsForSeriesSearch('monetary+service+index', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getTagsForSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                order_by: 'series_count',
                sort_order: 'asc'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getTagsForSeries('GNPCA', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getUpdatedSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                order_by: 'series_count',
                sort_order: 'asc',
                filter_value: 'regional'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getUpdatedSeries(params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'filter_variable', 'filter_value', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'seriess');
        });
        it('should accept start_time and end_time parameters', async () => {
            // start_time must be within the last two weeks
            const now = new Date();
            const yesterday = new Date(now);
            yesterday.setDate(yesterday.getDate() - 1);
            const formatTime = (d) => {
                const year = d.getFullYear();
                const month = String(d.getMonth() + 1).padStart(2, '0');
                const day = String(d.getDate()).padStart(2, '0');
                return `${year}${month}${day}0600`;
            };
            const timeParams = {
                filter_value: 'regional',
                start_time: formatTime(yesterday),
                end_time: formatTime(now)
            };
            const res = await series.getUpdatedSeries(timeParams);

            expect(res).to.have.property('seriess');
        });
    });

    describe('getVintageDatesSeries()', () => {
        beforeEach(() => {
            params = {
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                sort_order: 'asc'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await series.getVintageDatesSeries('GNPCA', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'vintage_dates');
        });
    });
});
