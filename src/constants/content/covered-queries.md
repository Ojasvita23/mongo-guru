## Covered Queries

A covered query is one where all fields in the query:

1. Are part of an index
2. Are the only fields returned in the results

MongoDB can answer these queries using only the index without examining documents, making them very efficient.