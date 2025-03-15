## Writing Type-Safe Queries

&nbsp;
### Example: Inserting a Document
&nbsp;

```typescript
async function createUser(user: User) {
  const collection = await getUsersCollection();
  await collection.insertOne(user);
}
```

&nbsp;
### Example: Querying a Document
&nbsp;

```typescript
async function getUserByEmail(email: string): Promise<User | null> {
    const collection = await getUsersCollection();
  return collection.findOne({ email });
}
```

&nbsp;
* `Promise<User | null>` ensures the function returns either a `User` or `null`.

&nbsp;
### Example: Updating a Document
&nbsp;

```typescript
async function updateUserEmail(userId: ObjectId, newEmail: string) {
  const collection = await getUsersCollection();
  await collection.updateOne({ _id: userId }, { $set: { email: newEmail } });
}
```