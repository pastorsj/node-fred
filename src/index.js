'use strict';
import Series from './Api/series';
import Categories from './Api/categories';
import Releases from './Api/releases';
import Sources from './Api/sources';

class Fred {
    // Return type is either xml or json, defaults to json
    constructor(apiKey, returnType = 'json') {
        this.series = new Series(apiKey, returnType);
        this.categories = new Categories(apiKey, returnType);
        this.releases = new Releases(apiKey, returnType);
        this.sources = new Sources(apiKey, returnType);
    }
}

export default Fred;
