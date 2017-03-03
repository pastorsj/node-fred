[![build status](https://travis-ci.org/pastorsj/node-fred.svg?branch=master)](https://travis-ci.org/pastorsj/node-fred)

# node-fred
A Fred2 API wrapper

# The Fred API
[Official Documentation](https://research.stlouisfed.org/docs/api/fred/)

[Wrapper Documentation](https://pastorsj.github.io/node-fred-api/)

# Installation Instructions
```
npm install node-fred --save
```

# Example
``` javascript
import Fred from 'node-fred'

const fred = new Fred(API_KEY);

fred.releases.getRelatedTagsForRelease('86', 'sa;foreign')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});
```