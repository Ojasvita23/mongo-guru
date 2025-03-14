## Integration with Express/Node.js

&nbsp;
### In your Express/Node.js applications, you'd typically use these operations within route handlers:
&nbsp;

```javascript
// Example Express route for getting all users
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route for creating a user
app.post('/users', async (req, res) => {
  try {
    const result = await db.collection('users').insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```