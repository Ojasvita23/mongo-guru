## Read/Write Distribution

Balancing read and write operations improves database scalability.

* **Read Replicas:** Use database replicas to distribute read queries.
    * Example: A primary database handles writes, and replicas handle reads.

&nbsp;

* **Sharding:** Split data across multiple databases.
    * Example: User data is divided based on region:
        * `users_eu` → European users
        * `users_us` → US users

&nbsp;

* **Caching Reads:** Use Redis or Memcached for frequently read data.

&nbsp;
```python
cache.set("user:123", user_data, timeout=300)
```