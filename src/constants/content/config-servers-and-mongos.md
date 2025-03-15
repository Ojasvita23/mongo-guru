## Config Servers and mongos

**Config servers:**

* Store metadata about the cluster's data distribution.
* Maintain a mapping of which shard contains which chunks.
* Run as a replica set for high availability.
* Critical for cluster operation; data becomes inaccessible if config servers are down.

&nbsp;

**mongos routers:**

* Connect to application servers and direct operations to appropriate shards.
* Maintain a cache of the cluster's metadata.
* Can run multiple instances for high availability and load distribution.
* Stateless; can be added or removed without data loss.