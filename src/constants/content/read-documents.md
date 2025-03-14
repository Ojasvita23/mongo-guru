## Read Operations

&nbsp;
### `find()` - Returns a cursor to all matching documents:
&nbsp;
```javascript
// Find all users
const allUsers = await db.collection('users').find().toArray();

// Find with filter
const youngUsers = await db.collection('users')
  .find({ age: { $lt: 30 } })
  .toArray();
```
&nbsp;

### `findOne()` - Returns the first matching document:
&nbsp;
```javascript
const john = await db.collection('users').findOne({ name: "John" });
```