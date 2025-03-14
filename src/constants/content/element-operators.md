## Element Operators
&nbsp;

These match documents based on the presence or absence of fields or their data types:

- `$exists` : Matches documents that have the specified field
- `$type` : Matches documents where the value of the field is an instance of the specified BSON type

&nbsp;
### Example:
&nbsp;
```javascript
// Find users who have a phoneNumber field
db.users.find({ phoneNumber: { $exists: true } })

// Find documents where score is a number type
db.scores.find({ score: { $type: "number" } })
```