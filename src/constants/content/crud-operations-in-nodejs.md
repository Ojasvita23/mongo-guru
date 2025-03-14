## CRUD Operations in Node.js
CRUD stands for Create, Read, Update, Delete.

&nbsp;
### Create (Insert Document)
&nbsp;

```js
async function insertDocument() {
  const db = client.db("testDB");
  const collection = db.collection("users");
  const result = await collection.insertOne({ name: "Alice", age: 25 });
  console.log("Inserted document:", result.insertedId);
}

insertDocument();
```

&nbsp;
### Read (Find Document)
&nbsp;

```js
async function findUser() {
  const db = client.db("testDB");
  const collection = db.collection("users");
  const user = await collection.findOne({ name: "Alice" });
  console.log("User found:", user);
}

findUser();
```

&nbsp;
### Update (Modify Document)
&nbsp;

```js
async function updateUser() {
    const db = client.db("testDB");
    const collection = db.collection("users");

    const result = await collection.updateOne(
        { name: "Alice" },
        { $set: { age: 26 } }
    );
    console.log("Updated document count:", result.modifiedCount);
}
updateUser();
```

&nbsp;
### Delete (Remove Document)
&nbsp;

```js
async function deleteUser() {
    const db = client.db("testDB");
    const collection = db.collection("users");

    const result = await collection.deleteOne({ name: "Alice" });
    console.log("Deleted document count:", result.deletedCount);
}
deleteUser();
```