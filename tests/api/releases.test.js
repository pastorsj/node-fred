import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Releases from '../../src/Api/releases.js';

chai.use(sinonChai);


describe('Releases', () => {
    let categories;
    let params;

    beforeEach(() => {
        categories = new Releases(process.env['FRED_API_KEY'], 'json');
    });

    describe('getAllReleases()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'name',
                'sort_order': 'asc'
            };
            categories.getAllReleases(params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'releases');
                    done();
                })
                .catch((err) => {
                    done(err);
                });

        });
    });

    describe('getAllReleasesWithDates()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'release_date',
                'sort_order': 'asc',
                'include_release_dates_with_no_data': 'true'
            };
            categories.getAllReleasesWithDates(params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'release_dates');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            categories.getRelease(82, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'releases');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getReleaseWithDates()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'include_release_dates_with_no_data': 'true'
            };
            categories.getReleaseWithDates(82, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'release_dates');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getSeriesForRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
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
            categories.getSeriesForRelease(51, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'series');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getSourcesForRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            categories.getSourcesForRelease(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'sources');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getTagsForRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
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
            categories.getTagsForRelease(125, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getRelatedTagsForRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'popularity',
                'sort_order': 'asc',
                'exclude_tag_names': 'discontinued;annual',
                'tag_group_id': 'freq',
                'search_text': 'us'
            };
            categories.getRelatedTagsForRelease(125, 'income;bea', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getTableTreesForRelease()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'element_id': '12886',
                'include_observation_values': 'false',
                'observation_date': '2000-10-15'
            };
            categories.getTableTreesForRelease(53, params)
                .then((res) => {
                    expect(res).to.contain.any.keys('name', 'element_id', 'release_id', 'elements');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
