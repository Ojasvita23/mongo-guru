## Hashed Indexes

### Hashed indexes maintain entries with hashes of field values. They're most useful for sharding and providing more random distribution.
&nbsp;
```js
db.collection.createIndex({ _id: "hashed" })
```