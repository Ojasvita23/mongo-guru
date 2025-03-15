## Logical Operators
&nbsp;

These combine multiple query conditions:

- `$and` : Joins query clauses with a logical AND (true only when all conditions are true)
- `$or` : Joins query clauses with a logical OR (true when any condition is true)
- `$not` : Inverts the effect of a query expression
- `$nor` : Joins query clauses with a logical NOR (false when any condition is true)

&nbsp;
### Example:
&nbsp;
```javascript
// Find users who are both over 30 AND have premium status
db.users.find({ $and: [{ age: { $gt: 30 } }, { status: "premium" }] })

// Find products that are either in stock OR have a special order option
db.products.find({ $or: [{ inStock: true }, { specialOrder: true }] })
```