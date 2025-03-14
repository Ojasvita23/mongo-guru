## Data Fetching Patterns in Next.js with MongoDB

Next.js offers different ways to fetch data from MongoDB:

* **Client-Side Fetching:** Fetch data in the browser using `useEffect()`, SWR, or React Query.
* **Server-Side Fetching (SSR - `getServerSideProps`):** Fetch data from MongoDB on every request.
* **Static Site Generation (SSG - `getStaticProps`):** Pre-fetch data at build time.
* **Incremental Static Regeneration (ISR):** Revalidate static pages periodically.


## Example: Fetching MongoDB Data in Different Ways
&nbsp;

### 1.1 Client-Side Fetching
&nbsp;

```jsx
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/products") // Calls Next.js API Route
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

&nbsp;

### 1.2 Server-Side Rendering (SSR)
&nbsp;

```jsx
export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const products = await db.collection("products").find().toArray();
  client.close();

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}

export default function Page({ products }) {
  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}
```

&nbsp;

* Runs on every request
* Ideal for frequently changing data

&nbsp;

### 1.3 Static Site Generation (SSG)
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

* Runs at build time and regenerates pages every 10 seconds.