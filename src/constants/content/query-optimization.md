## Query Optimization
Query optimization improves database performance by ensuring SQL queries run efficiently.

* **Indexing:** Adding indexes on frequently queried columns speeds up lookups.

Example:

&nbsp;
```sql
CREATE INDEX idx_name ON employees(name);
```
&nbsp;

This helps in `SELECT * FROM employees WHERE name = 'John';`

* **Avoiding SELECT** `*`: Fetch only necessary columns to reduce data retrieval time.

Example: Instead of `SELECT * FROM users;`, use `SELECT id, name FROM users;`.

&nbsp;

* **Using Joins Efficiently:** Prefer inner joins over outer joins for performance.

Example:

&nbsp;
```sql
SELECT orders.id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```
&nbsp;

* **Query Execution Plans:** Use `EXPLAIN` to analyze query execution paths and optimize them.

Example:

&nbsp;
```sql
EXPLAIN ANALYZE SELECT * FROM orders WHERE order_date > '2023-01-01';
```