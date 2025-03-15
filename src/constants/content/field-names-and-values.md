# Field Names and Values

In MongoDB documents:

- Field names are strings with restrictions on certain characters (can't contain `.` or `$` in most contexts)
- Field names are case-sensitive and cannot be duplicated within a document
- Values can be various data types: strings, numbers, booleans, arrays, other documents, etc.
- MongoDB adds an automatic `_id` field as the primary key if not specified

MongoDB supports a rich set of data types including:

- **Standard types**: String, Integer, Boolean, Double, etc.
- **Date types**: ISODate for timestamp storage
- **ObjectId**: A 12-byte identifier typically used for the `_id` field
- **Binary data**: For storing binary information
- **Regular expressions**: For pattern matching
