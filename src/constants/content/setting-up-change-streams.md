## Setting Up Change Streams

To start listening to changes, you need a replica set or a sharded cluster (starting from MongoDB 6.0, standalone instances also support change streams).

## Example: Listening to Changes on a Collection
&nbsp;
```javascript
const { MongoClient } = require("mongodb");

async function watchCollection() {
    const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
      await client.connect();
    const db = client.db("testdb");
    const collection = db.collection("users");

    const changeStream = collection.watch();

    changeStream.on("change", (change) => {
        console.log("Change detected:", change);
    });
  } catch (error) {
      console.error("Error:", error);
  }
}

watchCollection();
```
&nbsp;
## Output Example:
When a new document is inserted:

&nbsp;
```json
{
  "_id": { "_data": "..." },
  "operationType": "insert",
  "fullDocument": { "_id": ObjectId("..."), "name": "Alice", "age": 25 },
  "ns": { "db": "testdb", "coll": "users" },
  "documentKey": { "_id": ObjectId("...") }
}
```