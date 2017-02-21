'use strict';

import Builder from './builder.js';

// Implement a builder pattern
class SourcesBuilder extends Builder {

    setSourceId(sourceId) {
        return this.addAttribute('source_id=' + sourceId);
    }

}

export default SourcesBuilder;
