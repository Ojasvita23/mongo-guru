# Embedded Documents

Embedded documents (or subdocuments) allow for storing related data together in a hierarchical structure. This approach:

- Improves read performance by reducing the need for joins
- Better represents natural object hierarchies
- Simplifies queries for related data

## Example:
&nbsp;
```javascript
{
    name: "John Doe",
  contact: {
      email: "john@example.com",
    phone: "555-1234",
    address: {
        street: "123 Main St",
      city: "Anytown"
    }
  }
}
```

&nbsp;
### The trade-off is that deeply nested documents can become harder to query and update. MongoDB supports dot notation to access nested fields: contact.address.city.