## Working Set Management

Managing frequently accessed data efficiently improves performance.

* **Partitioning Data:** Splitting large tables into partitions improves access speed.
    * Example: Range partitioning by year:

&nbsp;
```sql
CREATE TABLE orders (
    id INT,
    order_date DATE
) PARTITION BY RANGE (YEAR(order_date)) (
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);
```
&nbsp;

* **Hot vs. Cold Data:** Keep frequently accessed (hot) data in memory, archive cold data.
    * Example: Storing recent transactions in a high-performance database and older data in a data warehouse.