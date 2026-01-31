import Builder from './builder.js';

class SourcesBuilder extends Builder {
    setSourceId(sourceId) {
        return this.addAttribute(`source_id=${sourceId}`);
    }
}

export default SourcesBuilder;
