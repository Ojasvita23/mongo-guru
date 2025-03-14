## Evaluation Operators
&nbsp;

These perform special evaluations on fields:

- `$regex` : Selects documents where values match a specified regular expression
- `$expr` : Allows use of aggregation expressions within the query language
- `$jsonSchema` : Validate documents against the given JSON Schema

&nbsp;
### Example:
&nbsp;
```javascript
// Find users with email addresses from gmail.com
db.users.find({ email: { $regex: /@gmail\.com$/ } })

// Find documents where the value of the budget field is greater than the value of the spent field
db.finances.find({ $expr: { $gt: ["$budget", "$spent"] } })
```