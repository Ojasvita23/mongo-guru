## Transactions in Node.js

Transactions ensure multiple operations execute successfully or roll back in case of failure.

&nbsp;
### Example: Using Transactions
&nbsp;

```js
async function performTransaction() {
  const session = client.startSession();
  session.startTransaction();

  try {
    const db = client.db("testDB");
    const users = db.collection("users");
    await users.insertOne({ name: "Bob", balance: 100 }, { session });
    await users.updateOne({ name: "Bob" }, { $inc: { balance: -50 } }, { session });
    await session.commitTransaction();
    console.log("Transaction committed");
  } catch (error) {
    await session.abortTransaction();
    console.error("Transaction aborted:", error);
  } finally {
    session.endSession();
  }
}

performTransaction();
```