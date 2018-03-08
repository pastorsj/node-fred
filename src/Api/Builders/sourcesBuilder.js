import Builder from './builder';

class SourcesBuilder extends Builder {
    setSourceId(sourceId) {
        return this.addAttribute(`source_id=${sourceId}`);
    }
}

export default SourcesBuilder;
