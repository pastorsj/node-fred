import * as chai from 'chai';
import { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Releases from '../../src/Api/releases.js';
import api from '../../src/api.js';

chai.use(sinonChai);

describe('Releases', () => {
    let categories;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        categories = new Releases('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllReleases()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc'
            };
            categories.getAllReleases(params);
            expect(api.get).to.have.been.calledWith('releases?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc');
        });
    });

    describe('getAllReleasesWithDates()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                include_release_dates_with_no_data: 'true'
            };
            categories.getAllReleasesWithDates(params);
            expect(api.get).to.have.been.calledWith('releases/dates?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&include_release_dates_with_no_data=true');
        });
    });

    describe('getRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
            categories.getRelease(125, params);
            expect(api.get).to.have.been.calledWith('release?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getReleaseWithDates()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                include_release_dates_with_no_data: 'true'
            };
            categories.getReleaseWithDates(125, params);
            expect(api.get).to.have.been.calledWith('release/dates?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&include_release_dates_with_no_data=true');
        });
    });

    describe('getSeriesForRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                filter_variable: 'frequency',
                filter_value: 'filter',
                tag_names: 'income;bea',
                exclude_tag_names: 'discontinued;annual'
            };
            categories.getSeriesForRelease(125, params);
            expect(api.get).to.have.been.calledWith('release/series?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&order_by=series_id&filter_variable=frequency&filter_value=filter&tag_names=income;bea&exclude_tag_names=discontinued;annual');
        });
    });

    describe('getSourcesForRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
            categories.getSourcesForRelease(125, params);
            expect(api.get).to.have.been.calledWith('release/sources?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getTagsForRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                tag_names: 'income;bea',
                tag_group_id: 'freq',
                search_text: 'us'
            };
            categories.getTagsForRelease(125, params);
            expect(api.get).to.have.been.calledWith('release/tags?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&order_by=series_id&tag_names=income;bea&tag_group_id=freq&search_text=us');
        });
    });

    describe('getRelatedTagsForRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'series_id',
                sort_order: 'asc',
                exclude_tag_names: 'discontinued;annual',
                tag_group_id: 'freq',
                search_text: 'us'
            };
            categories.getRelatedTagsForRelease(125, 'income;bea', params);
            expect(api.get).to.have.been.calledWith('release/related_tags?api_key=testkey&file_type=json&release_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&order_by=series_id&tag_names=income;bea&exclude_tag_names=discontinued;annual&tag_group_id=freq&search_text=us');
        });
    });

    describe('getTableTreesForRelease()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                element_id: '12886',
                include_observation_values: 'false',
                observation_date: '2000-10-15'
            };
            categories.getTableTreesForRelease(125, params);
            expect(api.get).to.have.been.calledWith('release/tables?api_key=testkey&file_type=json&release_id=125&element_id=12886&include_observation_values=false&observation_date=2000-10-15');
        });
    });
});
