## Best Practices for Using MongoDB with TypeScript

**a. Use Type-Safe Collections**
Always use generics in `collection<T>("name")` to enforce type safety.

&nbsp;

**b. Use Readonly for Immutable Fields**

&nbsp;

```typescript
interface User {
    readonly _id: ObjectId; // Cannot be changed after creation
  name: string;
  email: string;
}
```

&nbsp;

**c. Validate Data Before Insertion**
TypeScript only provides compile-time safety. Always validate data before inserting it.

&nbsp;

Example using Zod for runtime validation:

&nbsp;

```typescript
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().optional(),
});

const user = UserSchema.parse({ name: "John", email: "John@example.com" });
```