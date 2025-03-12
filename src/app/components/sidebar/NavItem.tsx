import { colors } from "@/app/themes/colors";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Topic {
  name: string;
  slug: string;
  children?: Topic[];
}

interface NavItemProps {
  item: Topic;
  level?: number;
  activePath: string[];
  setActivePath: (path: string[]) => void;
}

export const NavItem = ({
  item,
  level = 0,
  activePath,
  setActivePath,
}: NavItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activePath.includes(item.slug);
  const isCurrentActive = activePath[activePath.length - 1] === item.slug;

  // Automatically expand if this item or any child is active
  useEffect(() => {
    if (isActive && hasChildren) {
      setExpanded(true);
    }
  }, [isActive, hasChildren]);

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    }
    setActivePath([item.slug]);
  };

  return (
    <>
      <li
        style={{
          padding: `12px ${32 + level * 16}px`,
          backgroundColor: isCurrentActive ? colors.purple.dark : "",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {hasChildren && (
          <div>{expanded ? <ChevronDown /> : <ChevronRight />}</div>
        )}
        {!hasChildren && (
          <span style={{ width: "20px", marginRight: "8px" }}></span>
        )}
        <Link
          href={`/topics/${item.slug}`}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault(); // Prevent navigation if has children
            }
          }}
          style={{ width: "100%" }}
        >
          {item.name}
        </Link>
      </li>

      {expanded && hasChildren && (
        <ul style={{ margin: 0, padding: 0 }}>
          {item.children?.map((child) => (
            <NavItem
              key={child.slug}
              item={child}
              level={level + 1}
              activePath={activePath}
              setActivePath={setActivePath}
            />
          ))}
        </ul>
      )}
    </>
  );
};
