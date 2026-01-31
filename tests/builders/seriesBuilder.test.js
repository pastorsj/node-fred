import { expect } from 'chai';
import SeriesBuilder from '../../src/Api/Builders/seriesBuilder.js';

describe('SeriesBuilder', () => {
    let builder;

    beforeEach(() => {
        builder = new SeriesBuilder();
    });

    describe('setSeriesId()', () => {
        it('should set the series id', () => {
            builder.setSeriesId('120');
            expect(builder.getUrl()).to.be.eql('series_id=120');
        });
    });

    describe('setObservationStart()', () => {
        it('should set the observation_start attribute', () => {
            builder.setObservationStart({ observation_start: '2000-10-14' });
            expect(builder.url).to.be.eql('observation_start=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setObservationStart({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => { builder.setObservationStart({ observation_start: '10-14-2000' }); }).to.throw(Error);
        });
    });

    describe('setObservationEnd()', () => {
        it('should set the observation_end attribute', () => {
            builder.setObservationEnd({ observation_end: '2000-10-14' });
            expect(builder.url).to.be.eql('observation_end=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setObservationEnd({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => { builder.setObservationEnd({ observation_end: '10-14-2000' }); }).to.throw(Error);
        });
    });

    describe('setUnits()', () => {
        it('should set the units attribute', () => {
            builder.setUnits({ units: 'chg' });
            expect(builder.url).to.be.eql('units=chg');
        });
        it('should return the original value of this', () => {
            const ret = builder.setUnits({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setFrequency()', () => {
        it('should set the frequency attribute', () => {
            builder.setFrequency({ frequency: 'd' });
            expect(builder.url).to.be.eql('frequency=d');
        });
        it('should return the original value of this', () => {
            const ret = builder.setFrequency({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setAggregationMethod()', () => {
        it('should set the aggregation_method attribute', () => {
            builder.setAggregationMethod({ aggregation_method: 'avg' });
            expect(builder.url).to.be.eql('aggregation_method=avg');
        });
        it('should return the original value of this', () => {
            const ret = builder.setAggregationMethod({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setOutputType()', () => {
        it('should set the output_type attribute', () => {
            builder.setOutputType({ output_type: '1' });
            expect(builder.url).to.be.eql('output_type=1');
        });
        it('should return the original value of this', () => {
            const ret = builder.setOutputType({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setVintageDate()', () => {
        it('should set the vintage_dates attribute', () => {
            builder.setVintageDate({ vintage_dates: 'array of dates' });
            expect(builder.url).to.be.eql('vintage_dates=array of dates');
        });
        it('should return the original value of this', () => {
            const ret = builder.setVintageDate({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setSearchType()', () => {
        it('should set the search_type attribute', () => {
            builder.setSearchType({ search_type: 'full_text' });
            expect(builder.url).to.be.eql('search_type=full_text');
        });
        it('should return the original value of this', () => {
            const ret = builder.setSearchType({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setSeriesSearchText()', () => {
        it('should set the series_search_text attribute', () => {
            builder.setSeriesSearchText('gdp');
            expect(builder.url).to.be.eql('series_search_text=gdp');
        });
        it('should return the original value of this', () => {
            const ret = builder.setSeriesSearchText({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setTagSearchText()', () => {
        it('should set the tag_search_text attribute', () => {
            builder.setTagSearchText({ tag_search_text: 'tag' });
            expect(builder.url).to.be.eql('tag_search_text=tag');
        });
        it('should return the original value of this', () => {
            const ret = builder.setTagSearchText({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setStartTime()', () => {
        it('should set the start_time attribute', () => {
            builder.setStartTime({ start_time: '0600' });
            expect(builder.url).to.be.eql('start_time=0600');
        });
        it('should return the original value of this', () => {
            const ret = builder.setStartTime({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setEndTime()', () => {
        it('should set the end_time attribute', () => {
            builder.setEndTime({ end_time: '1200' });
            expect(builder.url).to.be.eql('end_time=1200');
        });
        it('should return the original value of this', () => {
            const ret = builder.setEndTime({});

            expect(ret).to.be.eql(builder);
        });
    });
});
