## Update Operations

&nbsp;
### `updateOne()` - Updates the first matching document:
&nbsp;
```javascript
await db.collection('users').updateOne(
    { name: "John" },
  { $set: { age: 31 } }
);
```
&nbsp;
### `updateMany()` - Updates all matching documents:
&nbsp;
```javascript
await db.collection('users').updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
);
```
&nbsp;
### `replaceOne()` - Replaces the entire first matching document:
&nbsp;

```javascript
await db.collection('users').replaceOne(
  { name: "John" },
  { name: "John Doe", age: 31, email: "john@example.com" }
);
