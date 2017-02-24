import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Series from '../src/Api/series.js';
import api from '../src/api';

chai.use(sinonChai);

describe('Series', () => {
    let series;
    let params;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        series = new Series('testkey', 'json');
        sandbox.spy(api, 'get');
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getAllSeries(125, params);
            expect(api.get).to.have.been.calledWith('series?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getCategoriesForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getCategoriesForSeries(125, params);
            expect(api.get).to.have.been.calledWith('series/categories?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });

    describe('getObservationsForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15',
                'limit': 100,
                'offset': 10,
                'sort_order': 'asc',
                'observation_start': '1960-03-10',
                'observation_end': '1965-03-10',
                'frequency': '10',
                'aggregation_method': 'avg',
                'output_type': 'xml',
                'vintage_date': 'dates'
            };
            series.getObservationsForSeries(125, params);
            expect(api.get).to.have.been.calledWith('series/observations?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15&limit=100&offset=10&sort_order=asc&observation_start=1960-03-10&observation_end=1965-03-10&units=undefined&frequency=10&aggregation_method=avg&output_type=xml');
        });
    });

    describe('getReleaseForSeries()', () => {
        it('should set the set the correct url and call get', () => {
            params = {
                'realtime_start': '2000-10-11',
                'realtime_end': '2000-10-15'
            };
            series.getReleaseForSeries(125, params);
            expect(api.get).to.have.been.calledWith('series/release?api_key=testkey&file_type=json&series_id=125&realtime_start=2000-10-11&realtime_end=2000-10-15');
        });
    });
});
