import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Sources from '../../src/Api/sources.js';

chai.use(sinonChai);

describe('Sources', () => {
    let sources;
    let params;

    beforeEach(() => {
        sources = new Sources(process.env['FRED_API_KEY'], 'json');
    });

    describe('getAllSources()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'source_id',
                'sort_order': 'asc'
            };
            sources.getAllSources(params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'sources');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getSource()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            sources.getSource(1, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'sources');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getReleasesForSource()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'release_id',
                'sort_order': 'asc'
            };
            sources.getReleasesForSource(1, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'releases');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
