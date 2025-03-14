## Memory Usage and Cache

Efficient memory management ensures queries do not consume excessive resources.

* **Query Caching:** Frequently executed queries should be cached to avoid re-computation.
    * Example: MySQL Query Cache (Deprecated) or application-level caching like Redis.

&nbsp;

* **Temporary Tables:** Use in-memory tables (like `MEMORY` table in MySQL) for temporary results instead of disk-based tables.

&nbsp;

* **Adjusting Buffer Pool Size:** Optimize memory for database operations.
* Example:

&nbsp;
```sql
SET GLOBAL innodb_buffer_pool_size = 2G;
```

*InnoDB*