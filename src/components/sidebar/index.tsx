"use client";

import { useState } from "react";

import Logo from "../logo";
import { colors } from "@/themes/colors";
import { topics } from "@/constants/topics";
import { NavItem } from "./NavItem";

const Sidebar = () => {
  const [activePath, setActivePath] = useState([topics[0].slug]);

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
            <NavItem
              key={topic.slug}
              item={topic}
              activePath={activePath}
              setActivePath={setActivePath}
            />
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
