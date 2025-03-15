## Multikey Indexes

### Multikey indexes are created on array fields. MongoDB creates separate index entries for each element in the array, making it efficient to query array elements.
&nbsp;

```js
// For a document with: { tags: ["mongodb", "database", "nosql"] }
db.collection.createIndex({ tags: 1 })
```

