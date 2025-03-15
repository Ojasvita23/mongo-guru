## Array Operators
&nbsp;

These operate on array fields:

- `$all` : Matches arrays that contain all elements specified in the query
- `$elemMatch` : Matches documents containing an array field with at least one element matching all specified criteria
- `$size` : Matches arrays with the specified number of elements

&nbsp;
### Example:
&nbsp;
```javascript
// Find documents where the tags array contains all of "mongodb", "database"
db.articles.find({ tags: { $all: ["mongodb", "database"] } })

// Find users with at least one score greater than 85
db.users.find({ scores: { $elemMatch: { $gt: 85 } } })

// Find documents with exactly 3 comments
db.posts.find({ comments: { $size: 3 } })
```