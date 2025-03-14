## Primary/Secondary Nodes

**Primary Node:**
* Processes all write operations from clients
* Records all data changes in its oplog (operation log)
* Only one primary exists at any time in a healthy replica set
* Automatically steps down if it can't communicate with a majority of the set

&nbsp;

**Secondary Nodes:**
* Replicate the primary's oplog and apply operations to maintain identical data sets
* Can serve read queries (depending on read preference)
* Can be configured with different priorities for election
* May have special purposes (e.g., delayed secondaries, hidden members)