## One-to-Many Relationships

Where one entity relates to multiple instances of another entity.

* *Example*: Customer and Orders (one customer has many orders)

* *Implementation*:
    * In relational: Foreign key in the "many" side
    * In document: Either embed array of "many" in the "one" (when "many" is small) or keep separate with reference to "one" from each "many"