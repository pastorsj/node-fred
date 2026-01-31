import Series from './Api/series.js';
import Categories from './Api/categories.js';
import Releases from './Api/releases.js';
import Sources from './Api/sources.js';
import Tags from './Api/tags.js';

class Fred {
    // Return type is either xml or json, defaults to json
    constructor(apiKey, returnType = 'json') {
        this.categories = new Categories(apiKey, returnType);
        this.releases = new Releases(apiKey, returnType);
        this.sources = new Sources(apiKey, returnType);
        this.series = new Series(apiKey, returnType);
        this.tags = new Tags(apiKey, returnType);
    }
}

export default Fred;
