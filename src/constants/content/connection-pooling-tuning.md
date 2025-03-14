## Connection Pooling Tuning

Connection pooling reduces overhead from frequently opening and closing database connections.

* **Adjusting Pool Size:** Too many or too few connections impact performance.

&nbsp;

* **Using Connection Pooling Tools:**
    * PostgreSQL → PgBouncer
    * MySQL → ProxySQL

&nbsp;

* **Example:** Using a connection pool in Java with HikariCP:

&nbsp;
```java
HikariDataSource ds = new HikariDataSource();
ds.setMaximumPoolSize(10);
ds.setMinimumIdle(5);
ds.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
```