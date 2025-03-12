const topics = {
  introduction: "This is an introduction to MongoDB.",
  "crud-operations":
    "Learn how to perform Create, Read, Update, and Delete operations in MongoDB.",
  aggregation: "Understand MongoDB aggregation framework for data processing.",
  indexes: "Indexes in MongoDB improve query performance.",
  replication: "MongoDB replication ensures high availability.",
  sharding: "Sharding in MongoDB helps distribute large datasets.",
};

const TopicPage = ({ params }: { params: { slug: string } }) => {
  const content = topics[params.slug as keyof typeof topics];

  return (
    <div>
      <h1>{params.slug.replace("-", " ")}</h1>
      <p>{content}</p>
    </div>
  );
};

export default TopicPage;
