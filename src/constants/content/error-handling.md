## Error Handling

To handle errors effectively, always use `try-catch` in `async/await` OR `.catch()` in Promises.

### Example: Error Handling in CRUD Operations
&nbsp;

```js
async function findUserSafely() {
  try {
    const db = client.db("testDB");
    const collection = db.collection("users");
    const user = await collection.findOne({ name: "Alice" });
    if (!user) throw new Error("User not found");
    console.log("User:", user);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

findUserSafely();
```