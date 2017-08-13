import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Categories from '../../src/Api/categories.js';

chai.use(sinonChai);

describe('Categories', () => {
    let categories;
    let params;

    beforeEach(() => {
        categories = new Categories(process.env['FRED_API_KEY'], 'json');
    });

    describe('getCategory()', () => {
        it('should set the set the correct url and have the correct return', async () => {
            const res = await categories.getCategory(125);

            expect(res).to.have.all.keys('categories');
        });
    });

    describe('getChildCategories()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getChildCategories(125, params);

            expect(res).to.have.all.keys('categories');
        });
    });

    describe('getRelatedCategories()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await categories.getRelatedCategories(32073, params);

            expect(res).to.have.all.keys('categories');
        });
    });

    describe('getCategorySeries()', () => {
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
            const res = await categories.getCategorySeries(125, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'filter_variable', 'filter_value', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'seriess');
        });
    });

    describe('getCategoryTags()', () => {
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
            const res = await categories.getCategoryTags(125, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getCategoryRelatedTags()', () => {
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
            const res = await categories.getCategoryRelatedTags(125, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });
});
