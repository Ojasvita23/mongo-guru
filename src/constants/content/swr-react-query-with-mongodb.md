## SWR/React Query with MongoDB

Using SWR (Stale While Revalidate) or React Query improves data caching, refetching, and state synchronization.

## Example: Using SWR with MongoDB
&nbsp;

```jsx
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Page() {
  const { data, error } = useSWR("/api/products", fetcher, { refreshInterval: 5000 });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
&nbsp;
* Automatically revalidates data in the background
* Reduces unnecessary requests