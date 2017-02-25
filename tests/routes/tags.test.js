import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Tags from '../../src/Api/tags.js';
import api from '../../src/api';

chai.use(sinonChai);

describe('Sources', () => {
    let tags;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        tags = new Tags('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllTags()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'tag_group_id': 'gen',
                'search_text': 'certaintag'
            };
            tags.getAllTags(params);
            expect(api.get).to.have.been.calledWith('tags?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&tag_names=income;bea&tag_group_id=gen&search_text=certaintag');
        });
    });

    describe('getAllRelatedTags()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'exclude_tag_names': 'discontinued;annual',
                'tag_group_id': 'gen',
                'search_text': 'certaintag'
            };
            tags.getAllRelatedTags(params);
            expect(api.get).to.have.been.calledWith('related_tags?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&tag_names=income;bea&exclude_tag_names=discontinued;annual&tag_group_id=gen&search_text=certaintag');
        });
    });

    describe('getAllSeriesMatchingTags()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'exclude_tag_names': 'discontinued;annual'
            };
            tags.getAllSeriesMatchingTags(params);
            expect(api.get).to.have.been.calledWith('tags/series?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc&tag_names=income;bea&exclude_tag_names=discontinued;annual');
        });
    });
});
