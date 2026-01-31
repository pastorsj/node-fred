import * as chai from 'chai';
import { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Categories from '../../src/Api/categories.js';
import api from '../../src/api.js';

chai.use(sinonChai);

describe('Categories', () => {
    let categories;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        categories = new Categories('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getCategory()', () => {
        it('should set the set the correct url and call get', () => {
            categories.getCategory(125);
            expect(api.get).to.have.been.calledWith('category?api_key=testkey&category_id=125&file_type=json');
        });
    });

    describe('getChildCategories()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', () => {
            categories.getChildCategories(125, params);
            expect(api.get).to.have.been.calledWith('category/children?api_key=testkey&category_id=125&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getRelatedCategories()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', () => {
            categories.getRelatedCategories(125, params);
            expect(api.get).to.have.been.calledWith('category/related?api_key=testkey&category_id=125&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getCategorySeries()', () => {
        beforeEach(() => {
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
        });
        it('should set the set the correct url and call get', () => {
            categories.getCategorySeries(125, params);
            expect(api.get).to.have.been.calledWith('category/series?api_key=testkey&category_id=125&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&filter_variable=frequency&filter_value=filter&tag_names=income;bea&exclude_tag_names=discontinued;annual');
        });
    });

    describe('getCategoryTags()', () => {
        beforeEach(() => {
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
        });
        it('should set the set the correct url and call get', () => {
            categories.getCategoryTags(125, params);
            expect(api.get).to.have.been.calledWith('category/tags?api_key=testkey&category_id=125&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&tag_names=income;bea&tag_group_id=freq&search_text=us');
        });
    });

    describe('getCategoryRelatedTags()', () => {
        beforeEach(() => {
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
        });
        it('should set the set the correct url and call get', () => {
            categories.getCategoryRelatedTags(125, params);
            expect(api.get).to.have.been.calledWith('category/related_tags?api_key=testkey&category_id=125&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&tag_names=income;bea&tag_group_id=freq&search_text=us');
        });
    });
});
