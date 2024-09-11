Here is a simple TypeScript console application that parses a query string into an object:

```typescript
class QueryStringParser {
    parse(queryString: string): any {
        let params = {}, queries, temp, i, l;
        queries = queryString.substring(1).split("&");
        for (i = 0, l = queries.length; i < l; i++) {
            temp = queries[i].split('=');
            params[temp[0]] = temp[1];
        }
        return params;
    }
}

let parser = new QueryStringParser();
console.log(parser.parse('?a=1&b=2'));
```

You can run this TypeScript code in a Node.js environment after compiling it to JavaScript. The `QueryStringParser` class has a `parse` method that splits the query string by `&` to get the individual queries, then splits each query by `=` to get the key and value. It stores these in the `params` object, which it returns at the end. The `console.log` statement at the end uses this method to parse the query string `'?a=1&b=2'` and logs the resulting object.