## State Management with MongoDB Data

When using MongoDB with Next.js, state management is crucial for caching, synchronization, and performance. Popular solutions include:

* React Context API (for global state)
* SWR/React Query (for data fetching and caching)
* Redux Toolkit (for complex state needs)

## Example: Using Context API for MongoDB Data
&nbsp;

```jsx
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(setData);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

// Usage in Component
function Products() {
  const data = useData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```