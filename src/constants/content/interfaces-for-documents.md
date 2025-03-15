## Interfaces for MongoDB Documents

Interfaces in TypeScript allow for reusable and extendable type definitions.

&nbsp;
### Example: Using an Interface for a MongoDB Document
&nbsp;

```typescript
import { ObjectId } from "mongodb";

interface User {
    _id?: ObjectId; // MongoDB's ObjectId
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}
```

&nbsp;
* `_id` is optional because MongoDB generates it automatically.
* `ObjectId` is imported from mongodb to ensure correct typing.