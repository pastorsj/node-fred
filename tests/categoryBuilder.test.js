import { expect } from 'chai';
import CategoryBuilder from '../src/Api/Builders/categoryBuilder.js';

describe('CategoryBuilder', () => {
    let builder;

    beforeEach(() => {
        builder = new CategoryBuilder();
    });

    describe('setCategoryId()', () => {
        it('should set the category id', () => {
            builder.setCategoryId('120');
            expect(builder.getUrl()).to.be.eql('category_id=120');
        });
    });
});
