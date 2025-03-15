## Polymorphic Patterns

Models that allow different types of entities to be treated similarly.

* *Example*: A commenting system where comments can be attached to posts, photos, or videos

* *Implementation*:
    * Single table with discriminator field
    * Table per type with shared fields
    * Separate collections with consistent interface