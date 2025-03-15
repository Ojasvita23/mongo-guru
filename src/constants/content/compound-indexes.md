## Compound Indexes

### Compound indexes include multiple fields, improving queries that need to match on several fields. The order of fields matters significantly for query optimization.
&nbsp;

```js
db.collection.createIndex({ field1: 1, field2: -1, field3: 1 })
```

&nbsp;
### This index supports queries on field1, queries on field1 and field2, and queries on all three fields (in that order).