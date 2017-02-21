'use strict';

import Builder from './builder.js';

class CategoryBuilder extends Builder {

    setCategoryId(categoryId) {
        return this.addAttribute('category_id=' + categoryId);
    }

}

export default CategoryBuilder;
