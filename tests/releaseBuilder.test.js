import { expect } from 'chai';
import ReleaseBuilder from '../src/Api/Builders/releaseBuilder.js';

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
            builder.setIncludeRelatedDatesWithNoData({'include_release_dates_with_no_data': 'true'});
            expect(builder.url).to.be.eql('include_release_dates_with_no_data=true');
        });
        it('should return the original value of this', () => {
            const ret = builder.setIncludeRelatedDatesWithNoData({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setElementId()', () => {
        it('should set the element_id attribute', () => {
            builder.setElementId({'element_id': '5'});
            expect(builder.url).to.be.eql('element_id=5');
        });
        it('should return the original value of this', () => {
            const ret = builder.setElementId({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setIncludeObservationValues()', () => {
        it('should set the include_observation_values attribute to true', () => {
            builder.setIncludeObservationValues({'include_observation_values': 'true'});
            expect(builder.url).to.be.eql('include_observation_values=true');
        });
        it('should set the include_observation_values attribute to false', () => {
            builder.setIncludeObservationValues({'include_observation_values': 'false'});
            expect(builder.url).to.be.eql('include_observation_values=false');
        });
        it('should return the original value of this', () => {
            const ret = builder.setIncludeObservationValues({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since parameter was not true or false', () => {
            expect(() => {builder.setIncludeObservationValues({'include_observation_values': 't'});}).to.throw(Error);
        });
    });

    describe('setObservationDate()', () => {
        it('should set the output_type attribute', () => {
            builder.setObservationDate({'observation_date': '2000-10-14'});
            expect(builder.url).to.be.eql('observation_date=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setObservationDate({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => {builder.setObservationDate({'observation_date': '10-14-2000'});}).to.throw(Error);
        });
    });
});
