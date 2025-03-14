## Shard Key Limitations and Design

## Limitations to consider:
* **Immutability:** Shard keys cannot be changed after sharding.
* **Coverage:** Indexes must include the shard key.
* **Uniqueness constraints:** Require the shard key to be included.

&nbsp;
## Design considerations:
* **Read isolation:** Choose a key that allows operations to target a specific shard.
* **Write scaling:** Avoid keys that concentrate writes on a single shard.
* **Compound keys:** Combine high-cardinality fields with fields used in common queries.
* **Presplitting:** Initialize empty collections with predefined chunks to enable immediate parallel processing.