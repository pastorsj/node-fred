import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Sources from '../../src/Api/sources';

chai.use(sinonChai);

describe('Sources', () => {
    let sources;
    let params;

    beforeEach(() => {
        sources = new Sources(process.env.FRED_API_KEY, 'json');
    });

    describe('getAllSources()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'source_id',
                sort_order: 'asc'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await sources.getAllSources(params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'sources');
        });
    });

    describe('getSource()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await sources.getSource(1, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'sources');
        });
    });

    describe('getReleasesForSource()', () => {
        beforeEach(() => {
            params = {
                realtime_start: '2000-10-11',
                realtime_end: '2000-10-15',
                limit: 100,
                offset: 10,
                order_by: 'release_id',
                sort_order: 'asc'
            };
        });
        it('should set the set the correct url and call get', async () => {
            const res = await sources.getReleasesForSource(1, params);

            expect(res).to.have.all.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'releases');
        });
    });
});
