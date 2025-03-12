export const topics = [
  { name: "Introduction", slug: "introduction" },
  {
    name: "CRUD Operations",
    slug: "crud-operations",
    children: [
      { name: "Insert", slug: "insert" },
      {
        name: "Query",
        slug: "query",
        children: [
          { name: "Embedded Documents", slug: "embedded-documents" },
          { name: "Arrays", slug: "arrays" },
          {
            name: "Arrays of Embedded Documents",
            slug: "arrays-of-embedded-documents",
          },
          { name: "Project Results", slug: "project-results" },
          { name: "Null or Missing Fields", slug: "null-or-missing-fields" },
          { name: "Timeouts", slug: "timeouts" },
          { name: "Long-Running Snapshots", slug: "long-running-snapshots" },
          { name: "Iterate a Cursor", slug: "iterate-cursor" },
        ],
      },
      {
        name: "Update",
        slug: "update",
        children: [
          { name: "Aggregation Pipeline", slug: "aggregation-pipeline" },
          { name: "Methods", slug: "methods" },
        ],
      },
      {
        name: "Remove",
        slug: "remove",
      },
    ],
  },
  { name: "Aggregation", slug: "aggregation" },
  { name: "Indexes", slug: "indexes" },
  { name: "Replication", slug: "replication" },
  { name: "Sharding", slug: "sharding" },
];
