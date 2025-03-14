## Oplog (Operation Log)

The oplog is a special capped collection that records all operations that modify the data stored in the database:

* Size is configurable (default is 5% of free disk space)
* Uses idempotent operations to ensure correct reapplication
* Each operation is timestamped to track replication progress
* Secondaries continuously tail the primary's oplog to stay synchronized
* The oplog size determines how long a secondary can be offline and still catch up

