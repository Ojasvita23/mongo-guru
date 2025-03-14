Sharding is a database architecture pattern that distributes data across multiple machines
to support deployments with very large data sets and high throughput operations. Here's a
detailed explanation of sharding concepts:

## Sharding Architecture

Sharding in MongoDB involves distributing collections across multiple servers or "shards."
A sharded cluster consists of:

* **Shards:** Each shard contains a subset of the sharded data. Each shard can be a
    standalone MongoDB instance or a replica set.

* **Config Servers:** Store metadata and configuration settings for the cluster.

* **mongos Routers:** Query routers that direct operations to the appropriate shard(s).

&nbsp;

This architecture allows MongoDB to horizontally scale, distributing the read/write
workload across multiple machines instead of adding more resources to a single machine.