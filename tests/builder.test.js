import { expect } from 'chai';
import Builder from '../src/Api/Builders/builder.js';

describe('Builder', () => {
    let builder;

    beforeEach(() => {
        builder = new Builder();
    });

    describe('addAttribute()', () => {
        it('should add an attribute to the url', () => {
            builder.addAttribute('api_key=a');
            expect(builder.url).to.be.eql('api_key=a');
            builder.addAttribute('file_type=json');
            expect(builder.url).to.be.eql('api_key=a&file_type=json');
        });
    });

    describe('setApiKey()', () => {
        it('should set the api_key attribute', () => {
            builder.setAPIKey('a');
            expect(builder.url).to.be.eql('api_key=a');
        });
    });

    describe('setFileType()', () => {
        it('should set the file_type attribute', () => {
            builder.setFileType('json');
            expect(builder.url).to.be.eql('file_type=json');
        });
    });

    describe('isValidDate()', () => {
        it('should confirm the date is valid', () => {
            const valid = builder.isValidDate('2000-10-14');

            expect(valid).to.be.true;
        });
        it('should confirm the date is NOT valid', () => {
            const valid = builder.isValidDate('10-14-2000');

            expect(valid).to.be.false;
        });
    });

    describe('setRealTimeStart()', () => {
        it('should set the realtime_start attribute', () => {
            builder.setRealTimeStart({'realtime_start': '2000-10-14'});
            expect(builder.url).to.be.eql('realtime_start=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setRealTimeStart({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => {builder.setRealTimeStart({'realtime_start': '10-14-2000'});}).to.throw(Error);
        });
    });

    describe('setRealTimeEnd()', () => {
        it('should set the realtime_end attribute', () => {
            builder.setRealTimeEnd({'realtime_end': '2000-10-14'});
            expect(builder.url).to.be.eql('realtime_end=2000-10-14');
        });
        it('should return the original value of this', () => {
            const ret = builder.setRealTimeEnd({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the date was not formatted correctly', () => {
            expect(() => {builder.setRealTimeEnd({'realtime_end': '10-14-2000'});}).to.throw(Error);
        });
    });

    describe('setLimit()', () => {
        it('should set the limit attribute', () => {
            builder.setLimit({'limit': '1'});
            expect(builder.url).to.be.eql('limit=1');
        });
        it('should return the original value of this', () => {
            const ret = builder.setLimit({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the limit was less than 0', () => {
            expect(() => {builder.setLimit({'limit': '-1'});}).to.throw(Error);
        });
        it('should throw an exception since the limit was greater than 1000', () => {
            expect(() => {builder.setLimit({'limit': '1001'});}).to.throw(Error);
        });
    });

    describe('setOffset()', () => {
        it('should set the offset attribute', () => {
            builder.setOffset({'offset': '1'});
            expect(builder.url).to.be.eql('offset=1');
        });
        it('should return the original value of this', () => {
            const ret = builder.setOffset({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the offset was less than 0', () => {
            expect(() => {builder.setOffset({'offset': '-1'});}).to.throw(Error);
        });
    });

    describe('setOrderBy()', () => {
        it('should set the order_by attribute', () => {
            builder.setOrderBy({'order_by': '1'});
            expect(builder.url).to.be.eql('order_by=1');
        });
        it('should return the original value of this', () => {
            const ret = builder.setOrderBy({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setSortOrder()', () => {
        it('should set the sort_order attribute asc', () => {
            builder.setSortOrder({'sort_order': 'asc'});
            expect(builder.url).to.be.eql('sort_order=asc');
        });
        it('should set the sort_order attribute desc', () => {
            builder.setSortOrder({'sort_order': 'desc'});
            expect(builder.url).to.be.eql('sort_order=desc');
        });
        it('should return the original value of this', () => {
            const ret = builder.setSortOrder({});

            expect(ret).to.be.eql(builder);
        });
        it('should throw an exception since the sort order was not either asc or desc', () => {
            expect(() => {builder.setSortOrder({'sort_order': 'default'});}).to.throw(Error);
        });
    });

    describe('setFilterVariable()', () => {
        it('should set the filter_variable attribute', () => {
            builder.setFilterVariable({'filter_variable': 'test'});
            expect(builder.url).to.be.eql('filter_variable=test');
        });
        it('should return the original value of this', () => {
            const ret = builder.setFilterVariable({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setFilterValue()', () => {
        it('should set the filter_value attribute', () => {
            builder.setFilterValue({'filter_value': 'test'});
            expect(builder.url).to.be.eql('filter_value=test');
        });
        it('should return the original value of this', () => {
            const ret = builder.setFilterValue({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setSearchText()', () => {
        it('should set the search_text attribute', () => {
            builder.setSearchText({'search_text': 'gdp'});
            expect(builder.url).to.be.eql('search_text=gdp');
        });
        it('should return the original value of this', () => {
            const ret = builder.setSearchText({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('setTagGroupId()', () => {
        it('should set the tag_group_id attribute', () => {
            builder.setTagGroupId({'tag_group_id': '12'});
            expect(builder.url).to.be.eql('tag_group_id=12');
        });
        it('should return the original value of this', () => {
            const ret = builder.setTagGroupId({});

            expect(ret).to.be.eql(builder);
        });
    });

    describe('getUrl()', () => {
        it('should set the api_key attribute to the url', () => {
            builder.setAPIKey('18209onnn98');
            expect(builder.getUrl()).to.be.eql('api_key=18209onnn98');
        });
    });
});
