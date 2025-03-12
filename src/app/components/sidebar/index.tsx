"use client";

import { colors } from "@/app/themes/colors";
import Link from "next/link";
import { useState } from "react";
import Logo from "../logo";

const topics = [
  { name: "Introduction", slug: "introduction" },
  { name: "CRUD Operations", slug: "crud-operations" },
  { name: "Aggregation", slug: "aggregation" },
  { name: "Indexes", slug: "indexes" },
  { name: "Replication", slug: "replication" },
  { name: "Sharding", slug: "sharding" },
  // { name: "Sharding2", slug: "sharding2" },
  // { name: "Sharding3", slug: "sharding3" },
  // { name: "Sharding4", slug: "sharding4" },
  // { name: "Sharding5", slug: "sharding5" },
  // { name: "Sharding6", slug: "sharding6" },
  // { name: "Sharding7", slug: "sharding7" },
  // { name: "Sharding8", slug: "sharding8" },
  // { name: "Sharding9", slug: "sharding9" },
  // { name: "Sharding10", slug: "sharding10" },
  // { name: "Sharding11", slug: "sharding11" },
  // { name: "Sharding12", slug: "sharding12" },
];

const Sidebar = () => {
  const [active, setActive] = useState(topics[0].slug);

  return (
    <div
      style={{
        backgroundColor: colors.neutral.darkest,
        color: colors.grey.white,
        width: "300px",
        height: "100vh",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <div
        style={{
          padding: "32px 0",
          marginBottom: "32px",
          borderBottom: `1px solid ${colors.grey.white}`,
        }}
      >
        <h2
          style={{ textAlign: "center", fontSize: "24 px", fontWeight: "bold" }}
        >
          MongoDB Topics
        </h2>
      </div>
      <ul
        style={{
          overflow: "auto",
          flexGrow: 1,
        }}
      >
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} href={`/topics/${topic.slug}`}>
              <li
                style={{
                  padding: "16px 32px",
                  backgroundColor:
                    active === topic?.slug ? colors.purple.dark : "",
                }}
              >
                <span onClick={() => setActive(topic.slug)}>{topic.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          marginTop: "32px",
          padding: "16px 32px",
          borderTop: `1px solid ${colors.grey.white}`,
        }}
      >
        <Logo />
        <div style={{}}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Mongo Guru</p>
          <p style={{ fontSize: "12px" }}>Learn and practice MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
