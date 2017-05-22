'use strict';

// Implement a builder pattern
class Builder {
    constructor() {
        this.url = '';
    }

    addAttribute(attribute) {
        this.url += (this.url === '' ? '' : '&') + attribute;
        return this;
    }

    setAPIKey(apiKey) {
        return this.addAttribute('api_key=' + apiKey);
    }

    setFileType(fileType) {
        return this.addAttribute('file_type=' + fileType);
    }

    isValidDate(dateString) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;

        return dateString.match(regEx) != null;
    }

    setRealTimeStart(params) {
        const realTimeStart = params['realtime_start'];

        if(!realTimeStart) {
            return this;
        } else if(!this.isValidDate(realTimeStart)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute('realtime_start=' + realTimeStart);
    }

    setRealTimeEnd(params) {
        const realTimeEnd = params['realtime_end'];

        if(!realTimeEnd) {
            return this;
        } else if(!this.isValidDate(realTimeEnd)) {
            throw new Error('The format of this date is not valid. Please format the date like this: YYYY-MM-DD');
        }
        return this.addAttribute('realtime_end=' + realTimeEnd);
    }

    setLimit(params) {
        const limit = parseInt(params['limit'], 10);

        if(!limit) {
            return this;
        } else if(limit < 0 || limit > 1000) {
            throw new Error('Limit must be between 0 and 1000');
        }
        return this.addAttribute('limit=' + limit);
    }

    setOffset(params) {
        const offset = parseInt(params['offset'], 10);

        if(!offset) {
            return this;
        } else if(offset < 0) {
            throw new Error('Offset must be greater than 0');
        }
        return this.addAttribute('offset=' + offset);
    }

    setOrderBy(params) {
        const orderBy = params['order_by'];

        if(!orderBy) {
            return this;
        }
        return this.addAttribute('order_by=' + orderBy);
    }

    setSortOrder(params) {
        let sortOrder = params['sort_order'];

        if(!sortOrder) {
            return this;
        }
        sortOrder = sortOrder.toLowerCase();
        if(sortOrder !== 'asc' && sortOrder !== 'desc') {
            throw new Error('Sort order can only be either asc or desc');
        }
        return this.addAttribute('sort_order=' + sortOrder);
    }

    setFilterVariable(params) {
        const filterVariable = params['filter_variable'];

        if(!filterVariable) {
            return this;
        }
        return this.addAttribute('filter_variable=' + filterVariable);
    }

    setFilterValue(params) {
        const filterValue = params['filter_value'];

        if(!filterValue) {
            return this;
        }
        return this.addAttribute('filter_value=' + filterValue);
    }

    setTagNames(params) {
        if (typeof (params) === 'string') {
            return this.addAttribute('tag_names=' + params);
        }
        const tagNames = params['tag_names'];

        if(!tagNames) {
            return this;
        }
        return this.addAttribute('tag_names=' + tagNames);
    }

    setExcludeTagNames(params) {
        const excludeTagNames = params['exclude_tag_names'];

        if(!excludeTagNames) {
            return this;
        }
        return this.addAttribute('exclude_tag_names=' + excludeTagNames);
    }

    setSearchText(params) {
        const searchText = params['search_text'];

        if(!searchText) {
            return this;
        }
        return this.addAttribute('search_text=' + searchText);
    }

    setTagGroupId(params) {
        const tagGroupId = params['tag_group_id'];

        if(!tagGroupId) {
            return this;
        }
        return this.addAttribute('tag_group_id=' + tagGroupId);
    }

    getUrl() {
        return this.url;
    }
}

export default Builder;
