## Pagination Patterns

Pagination improves performance when fetching large datasets.

&nbsp;
### Example: Pagination with `limit()` and `skip()`
&nbsp;

```js
async function getUsers(page = 1, limit = 5) {
  const db = client.db("testDB");
  const collection = db.collection("users");
  const users = await collection.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();
  console.log("Users:", users);
}

getUsers(2, 5);
```