# Question: How do you manually parse a simple query string into an object (e.g., `?a=1&b=2`)? JavaScript Summary

The provided JavaScript code defines a function named `parseQueryString` that takes a query string as an argument and returns an object where each key-value pair corresponds to a parameter and its value from the query string. The function first removes the leading question mark from the query string using the `substring` method. It then splits the resulting string into an array of strings using the ampersand character as the delimiter. This array, `queries`, contains strings of the form 'key=value'. The function then iterates over this array. For each string in the array, it splits the string into a two-element array using the equals sign as the delimiter. The first element of this array is the key, and the second element is the value. These key-value pairs are then added to the `params` object. Finally, the function returns the `params` object. When the function is called with the argument "?a=1&b=2", it returns the object `{ a: '1', b: '2' }`.

---

# TypeScript Differences

The TypeScript version solves the problem in a similar way to the JavaScript version. Both versions split the query string by "&" to get the individual queries, then split each query by "=" to get the key and value. They store these in the `params` object, which they return at the end.

The main difference between the two versions is that the TypeScript version is object-oriented. It defines a `QueryStringParser` class with a `parse` method. This method takes a string as an argument and returns any type. This is a feature of TypeScript, which is a statically typed superset of JavaScript. TypeScript allows for type annotations, which can make the code easier to understand and less prone to runtime errors.

Another difference is that the TypeScript version uses the `let` keyword to declare variables, while the JavaScript version does not. This is a feature of ES6 (a version of JavaScript), which TypeScript supports. The `let` keyword provides block scope variable declaration, which is more predictable than the function scope provided by `var`.

In terms of functionality, both versions are equivalent. They both parse a query string into an object and log the resulting object. The TypeScript version, however, is more robust due to its use of types and classes.

---

# C++ Differences

The C++ version of the solution uses similar logic to the JavaScript version, but with different language features and methods.

In the JavaScript version, the function `parseQueryString` takes a query string as an argument. It then splits the string into an array of strings using the `split` method, with '&' as the delimiter. It then loops through each string in the array, splits it again using '=' as the delimiter, and assigns the first part as the key and the second part as the value in the `params` object. The function then returns the `params` object.

In the C++ version, the function `parseQueryString` also takes a query string as an argument. It then creates an `istringstream` object from the query string. It uses the `getline` function twice in a while loop to extract the key and value from the string, using '=' and '&' as delimiters respectively. It then assigns the key-value pair to the `result` map. The function then returns the `result` map.

The main differences between the two versions are:

1. JavaScript uses the `split` method to break the string into an array of strings, while C++ uses the `getline` function to extract substrings from an `istringstream` object.

2. JavaScript uses a for loop to iterate through the array of strings, while C++ uses a while loop to iterate through the `istringstream` object.

3. JavaScript stores the key-value pairs in an object, while C++ stores them in a `map`.

4. JavaScript uses the `substring` method to remove the '?' from the query string, while C++ uses the `substr` method.

5. JavaScript outputs the result to the console using `console.log`, while C++ uses `cout`.

---
