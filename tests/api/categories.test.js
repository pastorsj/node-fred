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
        it('should set the set the correct url and have the correct return', (done) => {
            categories.getCategory(125)
                .then((res) => {
                    expect(res).to.contain.any.keys('categories');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getChildCategories()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', (done) => {
            categories.getChildCategories(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('categories');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getRelatedCategories()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', (done) => {
            categories.getRelatedCategories(32073, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('categories');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
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
        it('should set the set the correct url and call get', (done) => {
            categories.getCategorySeries(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'series');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
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
        it('should set the set the correct url and call get', (done) => {
            categories.getCategoryTags(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
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
        it('should set the set the correct url and call get', (done) => {
            categories.getCategoryRelatedTags(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
