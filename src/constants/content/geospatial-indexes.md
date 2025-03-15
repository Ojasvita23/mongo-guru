## Geospatial Indexes

MongoDB provides two types of geospatial indexes:

* ### 2dsphere: for Earth-like geometries
* ### 2d: for planar geometries
&nbsp;

```js
db.collection.createIndex({ location: "2dsphere" })
```