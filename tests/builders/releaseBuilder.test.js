import { expect } from 'chai';
import ReleaseBuilder from '../../src/Api/Builders/releaseBuilder.js';

describe('ReleaseBuilder', () => {
    let builder;

    beforeEach(() => {
        builder = new ReleaseBuilder();
    });

    describe('setReleaseId()', () => {
        it('should set the release id', () => {
            builder.setReleaseId('120');
            expect(builder.getUrl()).to.be.eql('release_id=120');
        });
    });

    describe('setIncludeRelatedDatesWithNoData()', () => {
        it('should set the include_release_dates_with_no_data attribute', () => {
            builder.setIncludeRelatedDatesWithNoData({ include_release_dates_with_no_data: 'true' });
            expect(builder.url).to.be.eql('include_release_dates_with_no_data=true');
        });
        it('should return the original value of this', () => {
            const ret = builder.setIncludeRelatedDatesWithNoData({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setElementId()', () => {
        it('should set the element_id attribute', () => {
            builder.setElementId({ element_id: '5' });
            expect(builder.url).to.be.eql('element_id=5');
        });
        it('should return the original value of this', () => {
            const ret = builder.setElementId({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setIncludeObservationValues()', () => {
        it('should set the include_observation_values attribute to true', () => {
            builder.setIncludeObservationValues({ include_observation_values: 'true' });
            expect(builder.url).to.be.eql('include_observation_values=true');
        });
        it('should set the include_observation_values attribute to false', () => {
            builder.setIncludeObservationValues({ include_observation_values: 'false' });
            expect(builder.url).to.be.eql('include_observation_values=false');
        });
        it('should return the original value of this', () => {
            const ret = builder.setIncludeObservationValues({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since parameter was not true or false', () => {
            expect(() => { builder.setIncludeObservationValues({ include_observation_values: 't' }); }).to.throw(Error);
        });
    });

    describe('setObservationDate()', () => {
        it('should set the output_type attribute', () => {
            builder.setObservationDate({ observation_date: '2000-10-14' });
            expect(builder.url).to.be.eql('observation_date=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setObservationDate({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => { builder.setObservationDate({ observation_date: '10-14-2000' }); }).to.throw(Error);
        });
    });

    describe('setNextCursor()', () => {
        it('should set the next_cursor attribute', () => {
            builder.setNextCursor({ next_cursor: 'abc123' });
            expect(builder.url).to.be.eql('next_cursor=abc123');
        });
        it('should return the original value of this', () => {
            const ret = builder.setNextCursor({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setFormat()', () => {
        it('should set the format attribute', () => {
            builder.setFormat({ format: 'json' });
            expect(builder.url).to.be.eql('format=json');
        });
        it('should return the original value of this', () => {
            const ret = builder.setFormat({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setV2Limit()', () => {
        it('should set the limit attribute for v2 endpoints', () => {
            builder.setV2Limit({ limit: '10000' });
            expect(builder.url).to.be.eql('limit=10000');
        });
        it('should allow limits up to 500000', () => {
            builder.setV2Limit({ limit: '500000' });
            expect(builder.url).to.be.eql('limit=500000');
        });
        it('should return the original value of this', () => {
            const ret = builder.setV2Limit({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the limit was less than 0', () => {
            expect(() => { builder.setV2Limit({ limit: '-1' }); }).to.throw(Error);
        });
        it('should throw an exception since the limit was greater than 500000', () => {
            expect(() => { builder.setV2Limit({ limit: '500001' }); }).to.throw(Error);
        });
    });
});
