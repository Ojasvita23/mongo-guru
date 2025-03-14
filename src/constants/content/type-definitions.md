## Type Definitions in MongoDB with TypeScript

In TypeScript, we define types using interfaces or type aliases. These definitions ensure that MongoDB documents follow a specific structure.

&nbsp;
### Example: Defining a User Type
&nbsp;

```typescript
type User = {
  _id?: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
};
```