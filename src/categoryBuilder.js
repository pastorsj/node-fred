'use strict';

import Builder from './builder.js';

// Implement a builder pattern
class CategoryBuilder extends Builder {

    setCategoryId(categoryId) {
        return this.addAttribute('category_id=' + categoryId);
    }

    setRealTimeStart(realTimeStart) {
        if(realTimeStart === '') {
            return this;
        }
        return this.addAttribute('realtime_start=' + realTimeStart);
    }

    setRealTimeEnd(realTimeEnd) {
        if(realTimeEnd === '') {
            return this;
        }
        return this.addAttribute('realtime_end=' + realTimeEnd);
    }

}

export default CategoryBuilder;
