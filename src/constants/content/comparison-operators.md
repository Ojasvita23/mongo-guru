### MongoDB provides a rich set of query operators that allow you to construct powerful queries to retrieve, update, and manipulate data. Here's an explanation of the main categories:

&nbsp;
## Comparison Operators
&nbsp;

### These operators allow you to filter documents based on field values:

- `$eq` : Matches values equal to a specified value
- `$gt` : Matches values greater than a specified value
- `$lt` : Matches values less than a specified value
- `$gte` : Matches values greater than or equal to a specified value
- `$lte` : Matches values less than or equal to a specified value
- `$ne` : Matches values not equal to a specified value
- `$in` : Matches any of the values in an array
- `$nin` : Matches none of the values in an array

&nbsp;
### Example:
&nbsp;
```javascript
// Find users older than 25
db.users.find({ age: { $gt: 25 } })

// Find products with price between $10 and $50
db.products.find({ price: { $gte: 10, $lte: 50 } })

// Find documents where status is either "approved" or "pending"
db.orders.find({ status: { $in: ["approved", "pending"] } })
```