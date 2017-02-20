'use strict';

import Builder from './builder.js';

// Implement a builder pattern
class CategoryBuilder extends Builder {

    setCategoryId(categoryId) {
        return this.addAttribute('category_id=' + categoryId);
    }

}

export default CategoryBuilder;
