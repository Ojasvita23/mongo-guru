## Delete Operations

&nbsp;
### `deleteOne()` - Deletes the first matching document:
&nbsp;

```javascript
await db.collection('users').deleteOne({ name: "John" });
```
&nbsp;
### `deleteMany()` - Deletes all matching documents:
&nbsp;

```javascript
await db.collection('users').deleteMany({ age: { $lt: 18 } });
```