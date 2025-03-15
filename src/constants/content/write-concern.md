## Write Concern

Write concern defines the level of acknowledgment required for write operations:

* **w: 1:** Acknowledges writes after the primary has applied them (default)
* **w: 0:** No acknowledgment of writes ("fire and forget")
* **w: "majority":** Acknowledges writes after a majority of voting members have applied them
* **w: n:** Acknowledges writes after n members have applied them
* **j: true:** Requires writes to be committed to the journal before acknowledgment
* **wtimeout:** Specifies a time limit for write acknowledgment

Higher write concerns increase data safety but may impact performance.