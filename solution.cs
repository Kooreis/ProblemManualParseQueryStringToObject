Here is a simple JavaScript console application that parses a query string into an object:

```javascript
function parseQueryString(queryString) {
    let params = {}, queries, temp, i, l;
    queries = queryString.substring(1).split("&");
    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
}

console.log(parseQueryString("?a=1&b=2"));
```

You can run this code in a JavaScript console or Node.js environment. It will output: `{ a: '1', b: '2' }`.