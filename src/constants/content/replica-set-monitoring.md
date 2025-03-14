## Replica Set Monitoring

MongoDB provides several tools for monitoring replica set health:

* `rs.status()`: Shows current state of all replica set members
* `db.printReplicationInfo()`: Shows oplog information on the primary
* `db.printSlaveReplicationInfo()`: Shows replication lag on secondaries
* MongoDB Cloud Manager or Ops Manager: Comprehensive monitoring solutions
* Integration with monitoring systems via MongoDB drivers

Monitoring metrics typically include replication lag, oplog window size, election events, and connection status.