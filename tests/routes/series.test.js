import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Series from '../../src/Api/series';
import api from '../../src/api';

chai.use(sinonChai);

describe('Series', () => {
    let series;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        series = new Series('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
            series.getSeries(125, params);
            expect(api.get).to.have.been.calledWith(
                'series?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15'
            );
        });
    });

    describe('getCategoriesForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
            series.getCategoriesForSeries(125, params);
            expect(api.get).to.have.been.calledWith(
                'series/categories?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15'
            );
        });
    });

    describe('getObservationsForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                sort_order: 'asc',
                observation_start: '1960-03-10',
                observation_end: '1965-03-10',
                frequency: '10',
                aggregation_method: 'avg',
                output_type: 'xml',
                vintage_date: 'dates'
            };
            series.getObservationsForSeries(125, params);
            expect(api.get).to.have.been.calledWith(
                'series/observations?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&observation_start=1960-03-10&observation_end=1965-03-10&frequency=10&aggregation_method=avg&output_type=xml'
            );
        });
    });

    describe('getReleaseForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
            series.getReleaseForSeries(125, params);
            expect(api.get).to.have.been.calledWith(
                'series/release?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15'
            );
        });
    });

    describe('getSeriesThatMatchesSearch()', () => {
        it('should set the set the correct url and call get', () => {
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
            series.getSeriesThatMatchesSearch('monetary+service+index', params);
            expect(api.get).to.have.been.calledWith(
                'series/search?api_key=testkey&file_type=json&search_text=monetary+service+index&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&filter_variable=frequency&filter_value=filter&tag_names=income;bea&exclude_tag_names=discontinued;annual&search_type=full_text'
            );
        });
    });

    describe('getTagsForSeriesSearch()', () => {
        it('should set the set the correct url and call get', () => {
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
            series.getTagsForSeriesSearch('monetary+service+index', params);
            expect(api.get).to.have.been.calledWith(
                'series/search/tags?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=created&sort_order=asc&tag_names=income;bea&tag_group_id=gen&tag_search_text=certaintag&series_search_text=monetary+service+index'
            );
        });
    });

    describe('getRelatedTagsForSeriesSearch()', () => {
        it('should set the set the correct url and call get', () => {
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
            series.getRelatedTagsForSeriesSearch('monetary+service+index', params);
            expect(api.get).to.have.been.calledWith(
                'series/search/related_tags?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=created&sort_order=desc&tag_names=income;bea&exclude_tag_names=discontinued;annual&tag_group_id=gen&tag_search_text=certaintag&series_search_text=monetary+service+index'
            );
        });
    });

    describe('getTagsForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                order_by: 'series_count',
                sort_order: 'asc'
            };
            series.getTagsForSeries('GNPCA', params);
            expect(api.get).to.have.been.calledWith(
                'series/tags?api_key=testkey&file_type=json&series_id=GNPCA&realtime_start=2000-10-11&realtime_end=2000-10-15&order_by=series_count&sort_order=asc'
            );
        });
    });

    describe('getUpdatedSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                order_by: 'series_count',
                sort_order: 'asc',
                filter_value: 'regional'
            };
            series.getUpdatedSeries(params);
            expect(api.get).to.have.been.calledWith(
                'series/updates?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&filter_value=regional'
            );
        });
    });

    describe('getVintageDatesSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                sort_order: 'asc'
            };
            series.getVintageDatesSeries('GNPCA', params);
            expect(api.get).to.have.been.calledWith(
                'series/vintagedates?api_key=testkey&file_type=json&series_id=GNPCA&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc'
            );
        });
    });
});
