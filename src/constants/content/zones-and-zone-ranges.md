## Zones and Zone Ranges

Zones provide data locality in a sharded cluster:

* **Zones:** Associate a shard with a specific geographic region or hardware configuration.

* **Zone ranges:** Map ranges of shard key values to specific zones.

* **Use cases:**
    * Keeping data in specific geographic locations for compliance.
    * Isolating high-priority data on faster hardware.
    * Tiered storage strategies based on data access patterns.