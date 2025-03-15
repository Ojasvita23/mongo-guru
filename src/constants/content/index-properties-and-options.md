## Index Properties and Options

Indexes can have various properties:

* ### Unique: prevents duplicate values
* ### Sparse: only includes documents with the indexed field
* ### TTL: automatically removes documents after a specified time
* ### Partial: only indexes documents meeting specified criteria
&nbsp;

```js
db.collection.createIndex(
  { email: 1 },
  { unique: true, sparse: true }
)