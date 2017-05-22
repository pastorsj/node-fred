import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Tags from '../../src/Api/tags.js';

chai.use(sinonChai);

describe('Sources', () => {
    let tags;
    let params;

    beforeEach(() => {
        tags = new Tags(process.env['FRED_API_KEY'], 'json');
    });

    describe('getAllTags()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_count',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'tag_group_id': 'gen',
                'search_text': 'certaintag'
            };
            tags.getAllTags(params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getAllRelatedTags()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_count',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'exclude_tag_names': 'discontinued;annual',
                'tag_group_id': 'gen',
                'search_text': 'certaintag'
            };
            tags.getAllRelatedTags('monetary+aggregates;weekly', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getAllSeriesMatchingTags()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'seasonal_adjustment',
                'sort_order': 'asc',
                'exclude_tag_names': 'discontinued;annual'
            };
            tags.getAllSeriesMatchingTags('income;bea', params)
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
