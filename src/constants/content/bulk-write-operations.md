## Bulk Write Operations

&nbsp;
### Bulk writes allow you to perform multiple write operations in a single command:
&nbsp;

```javascript
await db.collection('users').bulkWrite([
  { insertOne: { document: { name: "Jack", age: 28 } } },
  { updateOne: { 
      filter: { name: "John" }, 
      update: { $set: { age: 32 } } 
  } },
  { deleteOne: { filter: { name: "Bob" } } }
]);
```