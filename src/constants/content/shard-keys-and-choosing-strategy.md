## Shard Keys and Choosing Strategy

The shard key determines how MongoDB distributes documents among shards:
* **Shard key:** A field or combination of fields that exists in every document in the collection.
* **Key strategies:**
    * **Ranged sharding:** Divides data into ranges based on shard key values.
    * **Hashed sharding:** Uses a hash of the shard key value to distribute documents more randomly.

&nbsp;

When choosing a shard key, consider:
* **Cardinality:** Higher cardinality (more possible values) enables better distribution.
* **Frequency:** Avoid keys with values that appear very frequently.
* **Rate of change:** A monotonically increasing field (like timestamp) can create hotspots.