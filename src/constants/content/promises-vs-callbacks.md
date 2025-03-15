## Promises vs Callbacks

- Promises allow handling asynchronous operations in a cleaner way.
- Callbacks pass a function as an argument, making nested calls harder to read.

&nbsp;
### Example: Using Callbacks
&nbsp;

```js
client.connect((err) => {
  if (err) {
    console.error("Error connecting:", err);
    return;
  }
  console.log("Connected using callback");
});
```

&nbsp;
### Example: Using Promises (Async/Await)
&nbsp;

```js
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected using Promise");
  } catch (error) {
    console.error("Error:", error);
  }
}

connectDB();
```