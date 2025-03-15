## Read Preference

Read preference determines how client queries are routed to members of a replica set:

* **primary:** Reads only from the primary (default, ensures consistency)
* **primaryPreferred:** Reads from primary if available, otherwise from secondaries
* **secondary:** Reads only from secondaries
* **secondaryPreferred:** Reads from secondaries if available, otherwise from primary
* **nearest:** Reads from the member with the lowest network latency

&nbsp;

Secondary reads may return stale data since replication is asynchronous.