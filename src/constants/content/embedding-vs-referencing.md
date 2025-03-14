## Embedding vs. Referencing

* **Embedding**: Storing related data within the same document/record. Good for data that's frequently accessed together and doesn't change independently.
    * *Example*: A blog post document containing comments directly inside it
    * *Pros*: Fast reads, atomic transactions
    * *Cons*: Data duplication, difficult to update embedded data independently

* **Referencing**: Storing related data separately and connecting via references (IDs). Good for data that's shared across multiple entities or changes independently.
    * *Example*: A user document that references multiple order documents
    * *Pros*: No duplication, easier to update independently
    * *Cons*: Requires joins/lookups, potential consistency issues