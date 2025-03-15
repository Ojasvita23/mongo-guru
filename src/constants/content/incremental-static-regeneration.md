## Incremental Static Regeneration (ISR)

ISR allows Next.js to statically generate pages but update them in the background.

## Example: Enabling ISR for MongoDB
&nbsp;
```jsx
export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const products = await db.collection("products").find().toArray();
  client.close();

  return { props: { products: JSON.parse(JSON.stringify(products)) }, revalidate: 10 };
}
```
&nbsp;
* Page rebuilds every 10 seconds
* Combines benefits of SSG (performance) + SSR (freshness)