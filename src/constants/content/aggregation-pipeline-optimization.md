## Aggregation Pipeline Optimization

MongoDB optimizes aggregation pipelines by:

* Reordering stages (e.g., moving `$match` and `$limit` to the beginning)

* Combining stages when possible

* Using indexes when appropriate

* Providing execution plans that can be analyzed