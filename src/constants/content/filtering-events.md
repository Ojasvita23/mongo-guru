## Filtering Events

You can filter change stream events using aggregation `$match` to capture only specific changes.

## Example: Listening Only for Inserts
&nbsp;
```javascript
const pipeline = [{ $match: { "operationType": "insert" } }];

const changeStream = collection.watch(pipeline);

changeStream.on("change", (change) => {
    console.log("New Inserted Document:", change.fullDocument);
});
```

## Example Output:
&nbsp;
```json
{
  "operationType": "insert",
  "fullDocument": { "_id": ObjectId("..."), "name": "John", "age": 30 }
}
```