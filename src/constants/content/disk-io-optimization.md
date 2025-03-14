## Disk I/O Optimization

Reducing disk read/write operations speeds up database performance.

* **Using SSDs:** SSDs have lower latency compared to HDDs, improving disk access time.

&nbsp;

* **Avoiding Large TEXT/BLOB Fields in Queries:** Store large objects in separate tables or external storage.

&nbsp;

* **Batch Processing:** Grouping updates reduces write load.

    Example:
    
    &nbsp;

    ```sql
    INSERT INTO logs (event, created_at) VALUES
    ('login', NOW()), ('logout', NOW()), ('purchase', NOW());
    ```