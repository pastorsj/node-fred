import { expect } from 'chai';
import Fred from '../../src/index';

describe('index test case', () => {
    it('should construct several routes', () => {
        const fred = new Fred('203482093asdf09808', 'json');

        expect(fred.series).to.not.be.undefined;
        expect(fred.sources).to.not.be.undefined;
        expect(fred.tags).to.not.be.undefined;
        expect(fred.categories).to.not.be.undefined;
        expect(fred.releases).to.not.be.undefined;
    });
});
