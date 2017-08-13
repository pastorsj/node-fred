import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Tags from '../../src/Api/tags.js';

chai.use(sinonChai);

describe('Tags', () => {
    let tags;
    let params;

    beforeEach(() => {
        tags = new Tags(process.env['FRED_API_KEY'], 'json');
    });

    describe('getAllTags()', () => {
        beforeEach(() => {
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
        });
        it('should set the set the correct url and call get', async () => {
            const res = await tags.getAllTags(params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getAllRelatedTags()', () => {
        beforeEach(() => {
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
        });
        it('should set the set the correct url and call get', async () => {
            const res = await tags.getAllRelatedTags('monetary+aggregates;weekly', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
        });
    });

    describe('getAllSeriesMatchingTags()', () => {
        beforeEach(() => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'seasonal_adjustment',
                'sort_order': 'asc',
                'exclude_tag_names': 'discontinued;annual'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await tags.getAllSeriesMatchingTags('income;bea', params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'seriess');
        });
    });
});
