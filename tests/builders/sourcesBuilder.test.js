import { expect } from 'chai';
import SourcesBuilder from '../../src/Api/Builders/sourcesBuilder.js';

describe('SourcesBuilder', () => {
    let builder;

    beforeEach(() => {
        builder = new SourcesBuilder();
    });

    describe('setSourceId()', () => {
        it('should set the source id', () => {
            builder.setSourceId('120');
            expect(builder.getUrl()).to.be.eql('source_id=120');
        });
    });
});
