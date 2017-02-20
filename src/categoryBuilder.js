'use strict';

import Builder from './builder.js';

// Implement a builder pattern
class CategoryBuilder extends Builder {

    setCategoryId(categoryId) {
        return this.addAttribute('category_id=' + categoryId);
    }

    isValidDate(dateString) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;

        return dateString.match(regEx) != null;
    }

    setRealTimeStart(params) {
        const realTimeStart = params['realtime_start'];

        if(realTimeStart === '' || !this.isValidDate(realTimeStart)) {
            return this;
        }
        return this.addAttribute('realtime_start=' + realTimeStart);
    }

    setRealTimeEnd(params) {
        const realTimeEnd = params['realtime_end'];

        if(realTimeEnd === '' || !this.isValidDate(realTimeEnd)) {
            return this;
        }
        return this.addAttribute('realtime_end=' + realTimeEnd);
    }

    setLimit(params) {
        const limit = params['limit'];

        if(limit === '') {
            return this;
        }
        return this.addAttribute('limit=' + limit);
    }

    setOffset(params) {
        const offset = params['offset'];

        if(offset === '') {
            return this;
        }
        return this.addAttribute('offset=' + offset);
    }

    setOrderBy(params) {
        const orderBy = params['order_by'];

        if(orderBy === '') {
            return this;
        }
        return this.addAttribute('order_by=' + orderBy);
    }

    setSortOrder(params) {
        const sortOrder = params['sort_oder'];

        if(sortOrder === '') {
            return this;
        }
        return this.addAttribute('sort_oder=' + sortOrder);
    }

    setFilterVariable(params) {
        const filterVariable = params['filter_variable'];

        if(filterVariable === '') {
            return this;
        }
        return this.addAttribute('filter_variable=' + filterVariable);
    }

    setFilterValue(params) {
        const filterValue = params['filter_value'];

        if(filterValue === '') {
            return this;
        }
        return this.addAttribute('filter_value=' + filterValue);
    }

    setTagNames(params) {
        const tagNames = params['tag_names'];

        if(tagNames === '') {
            return this;
        }
        return this.addAttribute('tag_names=' + tagNames);
    }

    setExcludeTagNames(params) {
        const excludeTagNames = params['exclude_tag_names'];

        if(excludeTagNames === '') {
            return this;
        }
        return this.addAttribute('exclude_tag_names=' + excludeTagNames);
    }

    setSearchText(params) {
        const searchText = params['search_text'];

        if(searchText === '') {
            return this;
        }
        return this.addAttribute('search_text=' + searchText);
    }

    setTagGroupId(params) {
        const tagGroupId = params['tag_group_id'];

        if(tagGroupId === '') {
            return this;
        }
        return this.addAttribute('tag_group_id=' + tagGroupId);
    }

}

export default CategoryBuilder;
