Indexes in MongoDB are data structures that improve the speed of data retrieval operations by reducing the number of documents that need to be examined. Without indexes, MongoDB must scan every document in a collection to find matches to a query (a collection scan).

## Single Field Indexes

### Single field indexes are the simplest type of index that improves the performance of queries on a single field. MongoDB creates a default index on the `_id` field automatically.
&nbsp;

```js
db.collection.createIndex({ field: 1 }) // 1 for ascending order
db.collection.createIndex({ field: -1 }) // -1 for descending order
```