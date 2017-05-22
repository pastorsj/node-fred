import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Series from '../../src/Api/series.js';

chai.use(sinonChai);

describe('Series', () => {
    let series;
    let params;

    beforeEach(() => {
        series = new Series(process.env['FRED_API_KEY'], 'json');
    });

    describe('getSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'series');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getCategoriesForSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getCategoriesForSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('categories');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getObservationsForSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'sort_order': 'asc',
                'observation_start': '1960-03-10',
                'observation_end': '1965-03-10',
                'frequency': 'a',
                'aggregation_method': 'avg',
                'output_type': '1',
                'vintage_date': 'dates',
                'units': 'lin'
            };
            series.getObservationsForSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'observation_start', 'observation_end', 'units',
                                                    'output_type', 'file_type', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'observations');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getReleaseForSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getReleaseForSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'releasess');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getSeriesThatMatchesSearch()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'series_id',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'exclude_tag_names': 'discontinued;annual',
                'filter_variable': 'frequency',
                'filter_value': 'filter',
                'search_type': 'full_text'
            };
            series.getSeriesThatMatchesSearch('monetary+service+index', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'series');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getTagsForSeriesSearch()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'created',
                'sort_order': 'asc',
                'tag_names': 'income;bea',
                'tag_group_id': 'gen',
                'tag_search_text': 'certaintag'
            };
            series.getTagsForSeriesSearch('monetary+service+index', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getRelatedTagsForSeriesSearch()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'order_by': 'created',
                'sort_order': 'desc',
                'tag_names': 'income;bea',
                'tag_group_id': 'gen',
                'exclude_tag_names': 'discontinued;annual',
                'tag_search_text': 'certaintag'
            };
            series.getRelatedTagsForSeriesSearch('monetary+service+index', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getTagsForSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'order_by': 'series_count',
                'sort_order': 'asc'
            };
            series.getTagsForSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'tags');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getUpdatedSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'order_by': 'series_count',
                'sort_order': 'asc',
                'filter_value': 'regional'
            };
            series.getUpdatedSeries(params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'filter_variable', 'filter_value', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'series');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getVintageDatesSeries()', () => {
        it('should set the set the correct url and call get', (done) => {
            params = {
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'sort_order': 'asc'
            };
            series.getVintageDatesSeries('GNPCA', params)
                .then((res) => {
                    expect(res).to.contain.any.keys('realtime_start', 'realtime_end', 'order_by', 'sort_order', 'count', 'offset', 'limit', 'vintage_dates');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
