import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Releases from '../../src/Api/releases.js';

chai.use(sinonChai);


describe('Releases', () => {
    let categories;
    let params;

    beforeEach(() => {
        categories = new Releases(process.env['FRED_API_KEY'], 'json');
    });

    describe('getAllReleases()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'name',
                'sort_order': 'asc'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getAllReleases(params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'releases');
        });
    });

    describe('getAllReleasesWithDates()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'release_date',
                'sort_order': 'asc',
                'include_release_dates_with_no_data': 'true'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getAllReleasesWithDates(params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'release_dates');
        });
    });

    describe('getRelease()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getRelease(82, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'releases');
        });
    });

    describe('getReleaseWithDates()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'include_release_dates_with_no_data': 'true'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getReleaseWithDates(82, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'release_dates');
        });
    });

    describe('getSeriesForRelease()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'filter_variable': 'frequency',
                'filter_value': 'filter',
                'tag_names': 'income;bea',
                'exclude_tag_names': 'discontinued;annual'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getSeriesForRelease(51, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'filter_variable', 'filter_value', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'seriess');
        });
    });

    describe('getSourcesForRelease()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getSourcesForRelease(125, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'sources');
        });
    });

    describe('getTagsForRelease()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_count',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'tag_group_id': 'freq',
                'search_text': 'us'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getTagsForRelease(125, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getRelatedTagsForRelease()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'popularity',
                'sort_order': 'asc',
                'exclude_tag_names': 'discontinued;annual',
                'tag_group_id': 'freq',
                'search_text': 'us'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getRelatedTagsForRelease(125, 'income;bea', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getTableTreesForRelease()', () => {
        beforeEach(() => {
            params = {
                'element_id': '12886',
                'include_observation_values': 'false',
                'observation_date': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getTableTreesForRelease(53, params);

            expect(res).to.have.all.keys('name', 'element_id', 'release_id', 'elements');
        });
    });
});
