## Sharding Administration

Administrative tasks include:
* **Enabling sharding:** At database and collection levels.
* **Adding shards:** Expanding capacity as needed.
* **Removing shards:** Gracefully removing shards (draining process).
* **Managing balancer:** Scheduling balancing windows, manually triggering balancing.
* **Emergency procedures:** Handling failures of config servers or shards.
* **Backing up:** Consistent backups across all components.

&nbsp;

Configuration commands:

&nbsp;

```javascript
// Enable sharding for a database
sh.enableSharding("mydatabase")

// Shard a collection with a hashed key
sh.shardCollection("mydatabase.collection", { "userId": "hashed" })

// Shard with a compound key for ranged sharding
sh.shardCollection("mydatabase.orders", { "region": 1, "timestamp": 1 })

// Add a new shard
sh.addShard("rs1/node1:27017,node2:27017,node3:27017")
```