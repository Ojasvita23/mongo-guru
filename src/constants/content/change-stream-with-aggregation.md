## Change Stream with Aggregation

You can apply aggregations to transform or filter data.

## Example: Watching for Price Updates in Products
&nbsp;
```javascript
const pipeline = [
  { $match: { "operationType": "update", "updateDescription.updatedFields.price": { $exists: true } } },
  { $project: { "documentKey": 1, "updateDescription.updatedFields.price": 1 } }
];

const changeStream = collection.watch(pipeline);

changeStream.on("change", (change) => console.log("Price Updated:", change));
```

## Example output:
&nbsp;
```json
{
  "documentKey": { "_id": ObjectId("...") },
  "updateDescription": { "updatedFields": { "price": 150 } }
}
```