## Projection Operators
&nbsp;

These determine which fields to include or exclude in the results:

- `$` : Projects the first element in an array that matches the query condition
- `$elemMatch` : Projects the first element in an array that matches the specified criteria
- `$meta` : Projects the document's score assigned during text search
- `$slice` : Controls the number of elements projected from an array

&nbsp;
### Example:
&nbsp;
```javascript
// Return only the first comment that has more than 5 likes
db.posts.find(
  { comments: { $elemMatch: { likes: { $gt: 5 } } } },
  { "comments.$": 1 }
)

// Return only the first 3 comments in each post
db.posts.find({}, { comments: { $slice: 3 } })
```