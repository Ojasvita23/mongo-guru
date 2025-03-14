## Chunks and Balancing

MongoDB divides sharded data into chunks:

* **Chunks:** Contiguous ranges of shard key values.

* **Default size:** 64MB (configurable).

* **Balancer process:** Runs in the background, redistributing chunks among shards to ensure even data distribution.

* **Migration:** When chunks become too large, they split; when shards become unbalanced, chunks migrate.