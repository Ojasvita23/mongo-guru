## Next.js API Routes for MongoDB

Next.js API routes (`/pages/api/*`) handle server-side logic for MongoDB.

## Example: Creating an API Route for MongoDB
&nbsp;

**API:** `/pages/api/products.js`

&nbsp;
```jsx
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const products = await db.collection("products").find().toArray();
  client.close();

  res.status(200).json(products);
}
```
&nbsp;
* Supports GET, POST, PUT, DELETE
* Keeps database logic server-side