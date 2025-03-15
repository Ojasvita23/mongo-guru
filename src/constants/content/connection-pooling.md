## Connection Pooling
Connection pooling improves database performance by reusing connections rather than creating a new one for every request.

### Example: Configuring Connection Pooling

&nbsp;

```js
const client = new MongoClient(uri, {
  maxPoolSize: 10, // Maximum 10 connections in the pool
  minPoolSize: 5  // Minimum 5 connections in the pool
});
```