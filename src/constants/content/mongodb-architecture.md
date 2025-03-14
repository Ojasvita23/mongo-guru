## MongoDB Architecture
&nbsp;

### MongoDB's architecture consists of several core components:

1. **mongod** - The primary daemon process for the MongoDB database  
2. **mongos** - Query router for sharded clusters  
3. **Config Servers** - Store metadata for sharded clusters  
&nbsp;

### Key architectural concepts:

- **Databases** - Containers for collections  
- **Collections** - Groups of documents (similar to tables)  
- **Documents** - Individual records (similar to rows)  
- **Fields** - Key-value pairs within documents (similar to columns)  
- **Indexes** - Data structures that improve query performance  
- **Replica Sets** - Groups of mongod instances that maintain the same data set for redundancy and high availability  
- **Sharding** - Method for distributing data across multiple machines for horizontal scaling  
&nbsp;

MongoDB's architecture is designed for horizontal scalability, with automatic failover through replica sets and distributed data through sharding.
