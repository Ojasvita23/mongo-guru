## Text Indexes

### Text indexes support text search queries on string content. A collection can have at most one text index, but it can cover multiple fields.

&nbsp;
```js
db.collection.createIndex({ description: "text", title: "text" })
```