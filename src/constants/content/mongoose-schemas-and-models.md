## Mongoose Schemas and Models

Schemas define the structure of documents in a collection.

&nbsp;
### Example: Defining a Schema and Model
&nbsp;

```js
const userSchema = new mongoose.Schema({
    name: String,
  age: Number,
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);
```

&nbsp;
### Creating a Document
&nbsp;

```javascript
async function createUser() {
  const user = new User({ name: "Alice", age: 25, email: "alice@example.com" });
  await user.save();
  console.log("User saved:", user);
}

createUser();
```