'use strict';

class Builder {
    constructor(key) {
        this.url = '';
        this.key = key;
    }

    addId(id) {
        this.url += id;
    }
}

export default Builder;
