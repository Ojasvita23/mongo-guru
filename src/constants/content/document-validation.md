# Document Validation

MongoDB provides validation rules to enforce constraints on document structure:

- Schema validation using JSON Schema
- Custom validator expressions
- Validation actions (error or warning)
- Validation levels (strict or moderate)

## Example validation rule:
&nbsp;
```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\..+$",
          description: "must be a valid email and is required"
        }
      }
    }
  }
});
