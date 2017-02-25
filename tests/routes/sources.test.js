import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Sources from '../../src/Api/sources.js';
import api from '../../src/api';

chai.use(sinonChai);

describe('Sources', () => {
    let sources;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        sources = new Sources('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllSources()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc'
            };
            sources.getAllSources(params);
            expect(api.get).to.have.been.calledWith('sources?api_key=testkey&file_type=json&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc');
        });
    });

    describe('getSource()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            sources.getSource(125, params);
            expect(api.get).to.have.been.calledWith('source?api_key=testkey&file_type=json&source_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getReleasesForSource()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc'
            };
            sources.getReleasesForSource(125, params);
            expect(api.get).to.have.been.calledWith('source/releases?api_key=testkey&file_type=json&source_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&order_by=series_id&sort_order=asc');
        });
    });
});
