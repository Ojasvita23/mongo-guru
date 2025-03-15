## Production Patterns

For reliable and scalable usage, follow these best practices:

**Best Practices**
1. **Use Projections**: Reduce data size using `$project`.
2. **Handle Failures**: Implement reconnection logic.
3. **Use Resume Tokens**: Always store `_id` for resuming.
4. **Limit Events**: Use `$match` to track only necessary changes.
5. **Use Tailable Cursors**: Avoid unnecessary polling.

## Example: Optimized Change Stream
&nbsp;
```javascript
const pipeline = [
  { $match: { "operationType": { $in: ["insert", "update"] } } },
  { $project: { "_id": 0, "operationType": 1, "fullDocument": 1 } }
];

const changeStream = collection.watch(pipeline);

changeStream.on("change", (change) => console.log("Optimized Change:", change));
```