"use client";

import "./styles.css";
import { text } from "@/constants/text";
import { data } from "@/constants/topicData";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TopicPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [content, setContent] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const slugValue = resolvedParams.slug;
      setSlug(slugValue);
      setContent(data[slugValue as keyof typeof data]);
    };

    fetchData();
  }, [params]);

  const heading = capitalizeFirstLetter(slug.replace("-", " "));

  return (
    <div className="container">
      <div className="container__header">
        <h1 className="container__header__text">{heading}</h1>
      </div>
      <div className="container__body">
        <div className="container__body__content">
          <p>{content}</p>
        </div>
        <div className="container__body__footer">
          <button
            className="container__body__footer__button"
            onClick={() => {
              console.log("button clicked");
              console.log("pathname = ", pathname);
              console.log("router = ", router);
              router.push(`${pathname}/practice`);
            }}
          >
            <span>{text.practice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
