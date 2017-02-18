'use strict';

// Implement a builder pattern
class Builder {
    constructor() {
        this.url = '';
    }

    setAPIKey(apiKey) {
        return this.addAttribute('api_key=' + apiKey);
    }

    setFileType(fileType) {
        return this.addAttribute('file_type=' + fileType);
    }

    addAttribute(attribute) {
        this.url += (this.url === '' ? '' : '&') + attribute;
        return this;
    }

    getUrl() {
        return this.url;
    }
}

export default Builder;
