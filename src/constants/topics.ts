export const topics = [
  // 1
  {
    name: "Introduction to MongoDB",
    slug: "introduction",
    children: [
      { name: "What is NoSQL", slug: "what-is-noSQL" },
      {
        name: "MongoDB vs. Relational Databases",
        slug: "mongodb-vs-relational-databases",
      },
      { name: "BSON Document Format", slug: "bson-document-format" },
      { name: "MongoDB Architecture", slug: "mongodb-architecture" },
      { name: "Installation and Setup", slug: "installation-and-setup" },
      { name: "MongoDB Shell Basics", slug: "mongodb-shell-basics" },
    ],
  },
  // 2
  {
    name: "CRUD Operations",
    slug: "crud-operations",
    children: [
      { name: "Create Documents (insertOne, insertMany)", slug: "create-documents" },
      { name: "Read Documents (find, findOne)", slug: "read-documents" },
      { name: "Update Documents (updateOne, updateMany, replaceOne)", slug: "update-documents" },
      { name: "Delete Documents (deleteOne, deleteMany)", slug: "delete-documents" },
      { name: "Bulk Write Operations", slug: "bulk-write-operations" },
    ],
  },
  // 3
  {
    name: "Query Operators",
    slug: "query-operators",
    children: [
      { name: "Comparison Operators ($eq, $gt, $lt, $gte, $lte, $ne, $in, $nin)", slug: "comparison-operators" },
      { name: "Logical Operators ($and, $or, $not, $nor)", slug: "logical-operators" },
      { name: "Element Operators ($exists, $type)", slug: "element-operators" },
      { name: "Evaluation Operators ($regex, $expr, $jsonSchema)", slug: "evaluation-operators" },
      { name: "Array Operators ($all, $elemMatch, $size)", slug: "array-operators" },
      { name: "Bitwise Operators", slug: "bitwise-operators" },
      { name: "Projection Operators", slug: "projection-operators" },
    ],
  },
  // 4
  {
    name: "Document Structure and Schema Design",
    slug: "document-structure-and-schema-design",
    children: [
      { name: "Flexible Schema Concepts", slug: "flexible-schema-concepts" },
      { name: "Document Size Limitations", slug: "document-size-limitations" },
      { name: "Field Names and Values", slug: "field-names-and-values" },
      { name: "Embedded Documents", slug: "embedded-documents" },
      { name: "Document Validation", slug: "document-validation" },
      { name: "Schema Versioning Strategies", slug: "schema-versioning-strategies" },
    ],
  },
  // 5
  {
    name: "Indexing and Performance",
    slug: "indexing-and-performance",
    children: [
      { name: "Single Field Indexes", slug: "single-field-indexes" },
      { name: "Compound Indexes", slug: "compound-indexes" },
      { name: "Multikey Indexes", slug: "multikey-indexes" },
      { name: "Text Indexes", slug: "text-indexes" },
      { name: "Geospatial Indexes", slug: "geospatial-indexes" },
      { name: "Hashed Indexes", slug: "hashed-indexes" },
      { name: "Index Properties and Options", slug: "index-properties-and-options" },
      { name: "Index Intersection", slug: "index-intersection" },
      { name: "Covered Queries", slug: "covered-queries" },
      { name: "Index Usage Analysis", slug: "index-usage-analysis" },
      { name: "Explain Plans", slug: "explain-plans" },
    ],
  },
  // 6
  {
    name: "Aggregation Framework",
    slug: "aggregation-framework",
    children: [
      { name: "Pipeline Concept", slug: "pipeline-concept" },
      { name: "$match and $project Stages", slug: "$match-and-$project-stages" },
      { name: "Grouping and Sorting ($group, $sort)", slug: "grouping-and-sorting" },
      { name: "Array Operations ($unwind)", slug: "array-operations" },
      { name: "Joins ($lookup)", slug: "joins" },
      { name: "Window Functions", slug: "window-functions" },
      { name: "Accumulators and Expressions", slug: "accumulators-and-expressions" },
      { name: "Aggregation Pipeline Optimization", slug: "aggregation-pipeline-optimization" },
      { name: "Facets", slug: "facets" },
      { name: "Set Operations", slug: "set-operations" },
    ],
  },
  // 7
  {
    name: "Data Modeling",
    slug: "data-modeling",
    children: [
      { name: "Embedding vs. Referencing", slug: "embedding-vs-referencing" },
      { name: "One-to-One Relationships", slug: "one-to-one-relationships" },
      { name: "One-to-Many Relationships", slug: "one-to-many-relationships" },
      { name: "Many-to-Many Relationships", slug: "many-to-many-relationships" },
      { name: "Tree and Graph Structures", slug: "tree-and-graph-structures" },
      { name: "Polymorphic Patterns", slug: "polymorphic-patterns" },
      { name: "Schema Versioning", slug: "schema-versioning" },
      { name: "Time Series Data Modeling", slug: "time-series-data-modeling" },
    ],
  },
  // 8
  {
    name: "Transactions",
    slug: "transactions",
    children: [
      { name: "ACID Properties", slug: "acid-properties" },
      { name: "Multi-document Transactions", slug: "multi-document-transactions" },
      { name: "Distributed Transactions", slug: "distributed-transactions" },
      { name: "Transaction Lifecycle", slug: "transaction-lifecycle" },
      { name: "Error Handling and Retries", slug: "error-handling-and-retries" },
      { name: "Performance Considerations", slug: "performance-considerations" },
    ],
  },
  // 9
  {
    name: "Replication",
    slug: "replication",
    children: [
      { name: "Replica Set Architecture", slug: "replica-set-architecture" },
      { name: "Primary/Secondary Nodes", slug: "primary-secondary-nodes" },
      { name: "Elections and Failover", slug: "elections-and-failover" },
      { name: "Read Preference", slug: "read-preference" },
      { name: "Write Concern", slug: "write-concern" },
      { name: "Oplog", slug: "oplog" },
      { name: "Replica Set Monitoring", slug: "replica-set-monitoring" },
      { name: "Replica Set Security", slug: "replica-set-security" },
    ],
  },
  // 10
  {
    name: "Sharding",
    slug: "sharding",
    children: [
      { name: "Sharding Architecture", slug: "sharding-architecture" },
      { name: "Shard Keys and Choosing Strategy", slug: "shard-keys-and-choosing-strategy" },
      { name: "Chunks and Balancing", slug: "chunks-and-balancing" },
      { name: "Config Servers and mongos", slug: "config-servers-and-mongos" },
      { name: "Zones and Zone Ranges", slug: "zones-and-zone-ranges" },
      { name: "Shard Key Limitations and Design", slug: "shard-key-limitations-and-design" },
      { name: "Monitoring Sharded Clusters", slug: "monitoring-sharded-clusters" },
      { name: "Sharding Administration", slug: "sharding-administration" },
    ],
  },
  // 11
  {
    name: "Security",
    slug: "security",
    children: [
      { name: "Authentication Methods", slug: "authentication-methods" },
      { name: "Role-Based Access Control", slug: "role-based-access-control" },
      { name: "Transport Encryption (TLS/SSL)", slug: "transport-encryption" },
      { name: "Auditing", slug: "auditing" },
      { name: "Field Level Encryption", slug: "field-level-encryption" },
      { name: "Client-Side Field Level Encryption", slug: "client-side-field-level-encryption" },
      { name: "Security Checklist", slug: "security-checklist" },
      { name: "External Authentication", slug: "external-authentication" },
    ],
  },
  // 12
  {
    name: "MongoDB Atlas",
    slug: "mongodb-atlas",
    children: [
      { name: "Atlas Setup and Configuration", slug: "atlas-setup-and-configuration" },
      { name: "Atlas Tiers and Scaling", slug: "atlas-tiers-and-scaling" },
      { name: "Performance Advisor", slug: "performance-advisor" },
      { name: "Data Explorer", slug: "data-explorer" },
      { name: "Atlas Search", slug: "atlas-search" },
      { name: "Online Archive", slug: "online-archive" },
      { name: "Atlas Security Features", slug: "atlas-security-features" },
      { name: "Monitoring and Alerts", slug: "monitoring-and-alerts" },
      { name: "Backup and Restore", slug: "backup-and-restore" },
    ],
  },
  // 13
  {
    name: "Working with MongoDB in Node.js",
    slug: "working-with-mongodb-in-nodejs",
    children: [
      { name: "MongoDB Node.js Driver", slug: "mongodb-nodejs-driver" },
      { name: "Connection Pooling", slug: "connection-pooling" },
      { name: "CRUD Operations in Node.js", slug: "crud-operations-in-nodejs" },
      { name: "Promises vs Callbacks", slug: "promises-vs-callbacks" },
      { name: "Error Handling", slug: "error-handling" },
      { name: "Transactions in Node.js", slug: "transactions-in-nodejs" },
      { name: "Pagination Patterns", slug: "pagination-patterns" },
      { name: "Mongoose ODM Basics", slug: "mongoose-odm-basics" },
      { name: "Mongoose Schemas and Models", slug: "mongoose-schemas-and-models" },
      { name: "Mongoose Middleware", slug: "mongoose-middleware" },
    ],
  },
  // 14
  {
    name: "TypeScript with MongoDB",
    slug: "typescript-with-mongodb",
    children: [
      { name: "Type Definitions", slug: "type-definitions" },
      { name: "Interfaces for Documents", slug: "interfaces-for-documents" },
      { name: "Generic Types", slug: "generic-types" },
      { name: "MongoDB with TypeScript Best Practices", slug: "mongodb-with-typescript-best-practices" },
      { name: "Type-Safe Queries", slug: "type-safe-queries" },
    ],
  },
  // 15
  {
    name: "MongoDB with React/Next.js",
    slug: "mongodb-with-react-nextjs",
    children: [
      { name: "Data Fetching Patterns", slug: "data-fetching-patterns" },
      { name: "State Management with MongoDB Data", slug: "state-management-with-mongodb-data" },
      { name: "SWR/React Query with MongoDB", slug: "swr-react-query-with-mongodb" },
      { name: "Next.js API Routes for MongoDB", slug: "nextjs-api-routes-for-mongodb" },
      { name: "Server-Side Rendering with MongoDB", slug: "server-side-rendering-with-mongodb" },
      { name: "Incremental Static Regeneration", slug: "incremental-static-regeneration" },
    ],
  },
  // 16
  {
    name: "Advanced Performance Topics",
    slug: "advanced-performance-topics",
    children: [
      { name: "Query Optimization", slug: "query-optimization" },
      { name: "Memory Usage and Cache", slug: "memory-usage-and-cache" },
      { name: "Working Set Management", slug: "working-set-management" },
      { name: "Disk I/O Optimization", slug: "disk-io-optimization" },
      { name: "Connection Pooling Tuning", slug: "connection-pooling-tuning" },
      { name: "Read/Write Distribution", slug: "read-write-distribution" },
      { name: "Hardware Considerations", slug: "hardware-considerations" },
      { name: "Performance Testing Methodologies", slug: "performance-testing-methodologies" },
    ],
  },
  // 17
  {
    name: "Change Streams",
    slug: "change-streams",
    children: [
      { name: "Setting Up Change Streams", slug: "setting-up-change-streams" },
      { name: "Filtering Events", slug: "filtering-events" },
      { name: "Resume Tokens", slug: "resume-tokens" },
      { name: "Handling Stream Closure", slug: "handling-stream-closure" },
      { name: "Change Stream with Aggregation", slug: "change-stream-with-aggregation" },
      { name: "Production Patterns", slug: "production-patterns" },
    ],
  },
];
