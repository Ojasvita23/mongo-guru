## BSON Document Format

&nbsp;

BSON (Binary JSON) is MongoDB's binary-encoded serialization format that extends the JSON model to provide additional data types and to be more efficient for storage and scanning.

### Key aspects of BSON:

- Binary encoding for faster parsing and smaller size
- Additional data types not in JSON (e.g., Date, ObjectID, Binary)
- Field order preservation
- Support for embedding documents and arrays

&nbsp;
### Example of a BSON document:
```js
{
  _id: ObjectId("5f8d0f55b54764432bc91288"),
  name: "John Smith",
  age: 35,
  email: "john@example.com",
  created_at: ISODate("2020-10-19T10:30:00Z"),
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  tags: ["developer", "nodejs", "mongodb"]
}
```
&nbsp;

The ``_id`` field is automatically added to each document as a primary key if not provided.
