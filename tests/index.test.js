import { expect } from 'chai';
import Fred from '../src/index.js';

describe('index test case', () => {
    it('should construct serveral routes', () => {
        const fred = new Fred('203482093asdf09808', 'json');

        expect(fred.series).to.not.be.undefined;
    });
});
