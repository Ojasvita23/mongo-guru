## Server-Side Rendering (SSR) with MongoDB

When real-time or user-specific data is needed, SSR (`getServerSideProps`) is ideal.

## Example: Fetching a Single Product with SSR
&nbsp;

```jsx
export async function getServerSideProps({ params }) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const product = await db.collection("products").findOne({ _id: new ObjectId(params.id) });
  client.close();

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
```
&nbsp;
* Fetches fresh data on every request
* Good for personalized dashboards, user data, etc.