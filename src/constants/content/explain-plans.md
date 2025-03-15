**Explain Plans**

The `explain()` method shows how MongoDB processes a query, including:

* ### Which indexes were used
* ### How many documents were examined
* ### How many documents were returned
* ### Execution time
&nbsp;
```js
db.collection.find({ status: "A" }).explain("executionStats")
```