## Using Generic Types in MongoDB

MongoDB's Node.js driver supports generics, allowing us to create type-safe collections.

&nbsp;
### Example: Creating a Type-Safe Collection
&nbsp;

```typescript
import { MongoClient, Db, Collection } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function connectDB(): Promise<Db> {
  await client.connect();
  return client.db("mydatabase");
}

async function getUsersCollection(): Promise<Collection<User>> {
  const db = await connectDB();
  return db.collection<User>("users");
}
```

&nbsp;

Here:
* `collection<User>("users")` ensures that MongoDB operations on this collection follow the `User` type.