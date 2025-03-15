## Elections and Failover

When a primary becomes unavailable, the replica set automatically initiates an election to select a new primary. During this process:

1. Eligible secondaries nominate themselves as candidates
2. Voting members cast votes for candidates
3. A candidate that receives votes from a majority becomes the new primary
4. The entire process typically completes within seconds

&nbsp;

Factors affecting elections include:

* Node priority (configurable from 0-100)
* Recency of oplog data (more up-to-date nodes preferred)
* Connection status with other members